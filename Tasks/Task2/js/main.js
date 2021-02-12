function input(num) {
    document.getElementById('display').value += num;
};
function sum() {
    document.getElementById('display').value = eval(document.getElementById('display').value);
};
function add() {
    document.getElementById('display').value += '+';
};
function sub() {
    document.getElementById('display').value += '-';
};
function mult() {
    document.getElementById('display').value += '*';
};
function div() {
    document.getElementById('display').value += '/';
};
document.getElementById('cButton').addEventListener('click', function() {
    document.getElementById('display').value = "";
})