function myFunc() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;

  try {
    if (x.trim() == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
    x = Number(x);
    if (x < 5) throw "is too low";
    if (x > 10) throw "is too high";
  } catch (e) {
    message.innerHTML = "Input " + e;
  } finally {
    // message.innerHTML = "<br> aa gya na samaj main sab";
  }
}
