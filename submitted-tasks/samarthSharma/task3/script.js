let valueButtons = document.querySelectorAll(".action");
valueButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (Number(document.querySelector("#query").value) === 0)
      document.querySelector("#query").value = btn.textContent;
    else document.querySelector("#query").value += btn.textContent;
  });
});

const calcRes = () => {
  document.querySelector("#query").value = eval(
    document.querySelector("#query").value
  );
};

const allClear = () => {
  document.querySelector("#query").value = 0;
};

const clearEntry = () => {
  document.querySelector("#query").value = document
    .querySelector("#query")
    .value.slice(0, -1);
};
