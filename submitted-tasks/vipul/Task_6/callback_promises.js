console.log('\n#######   with callback #######\n');

const getDecrementNumber = (n) => {
	setTimeout((n) => {
		console.log(n);
		setTimeout((n) => {
			console.log(n);
			setTimeout((n) => {
				console.log(n);
				setTimeout((n) => {
					console.log(n);
					setTimeout((n) => {
						console.log(n);
						setTimeout((n) => {
							console.log(n);
							setTimeout((n) => {
								console.log(n);
								setTimeout((n) => {
									console.log(n);
									setTimeout((n) => {
										console.log(n);
										setTimeout((n) => {
											console.log(n);
										}, 0, n - 1)
									}, 0, n - 1)
								}, 0, n - 1)
							}, 0, n - 1)
						}, 0, n - 1)
					}, 0, n - 1)
				}, 0, n - 1)
			}, 0, n - 1)
		}, 0, n - 1)
	}, 0, n)
}
getDecrementNumber(10);

setTimeout(() => { console.log('\n#######   with promises #######\n'); }, 15);

const myPromise =
	new Promise((resolve, reject) => {
		var n = 10;
		setTimeout(() => {
			console.log(n);
			resolve(n);
		}, 300);
	});


const getDecrementNumberPromises = (n) =>
	new Promise((resolve, reject) => {
		setTimeout((n) => {
			console.log(n);
			resolve(n);
		}, 0, n - 1);
	});

myPromise
	.then((n) => getDecrementNumberPromises(n))
	.then((n) => getDecrementNumberPromises(n))
	.then((n) => getDecrementNumberPromises(n))
	.then((n) => getDecrementNumberPromises(n))
	.then((n) => getDecrementNumberPromises(n))
	.then((n) => getDecrementNumberPromises(n))
	.then((n) => getDecrementNumberPromises(n))
	.then((n) => getDecrementNumberPromises(n))
	.then((n) => getDecrementNumberPromises(n))




