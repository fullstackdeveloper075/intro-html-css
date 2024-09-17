import React, { Component } from 'react';

const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);
const validPasswordRegex = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        errors.fullName =
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
        validPasswordRegex.test(value)
            ? ''
            : 'Password is not valid';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      alert('Valid Form')
    } else {
      alert('Invalid Form')
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>SignUp</h2>
          <form onSubmit={this.handleSubmit} noValidate>

            <label htmlFor="fullName"><b>Full Name : </b></label>
            <input type='text' name='fullName' onChange={this.handleChange} noValidate />
            {errors.fullName.length > 0 &&
              <span className='error'>{errors.fullName}</span>}

            <br></br><br></br>
            <label htmlFor="email"><b>Email : </b></label>
            <input type='email' name='email' onChange={this.handleChange} noValidate />
            {errors.email.length > 0 &&
              <span className='error'>{errors.email}</span>}
            <br></br>
            <br></br>
            <label htmlFor="password"><b>Password : </b></label>
            <input type='password' name='password' onChange={this.handleChange} noValidate />
            {errors.password.length > 0 &&
              <span className='error'>{errors.password}</span>}
            <br></br><br></br>
            <div className='info'>
              <small>Password must be eight characters in length.</small>
            </div>
            <br></br><br></br>
            <button>Create</button>

          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;