function calc() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    const sum = num1 + num2;
    const result = document.getElementById('sum');
    result.value = sum;
}
