window.onload = function() {
  let num1 = parseFloat(prompt("podaj pierwszą liczbę"));
  let num2 = parseFloat(prompt("podaj drugą liczbę"));
  let sum1 = num1 + num2;
  document.getElementById("wynik").innerHTML = sum1;
};
