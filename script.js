function calculation() {
  let btn = document.querySelector(".btn");
  let closebtn = document.querySelector(".ri-close-line");

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#page1-results").style.display = "block";

    let length = document.getElementById("length").value;
    let height = document.getElementById("height").value;
    let wires = document.getElementById("wires").value;

    document.querySelector("#prsqm").textContent = `Sqm is ${
      (length * height * wires) / 10000
    }`;
    document.querySelector("#prsqft").textContent = `Sqft is ${
      ((length * height * wires) / 10000) * 10.7639
    }`;
  });

  closebtn.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#page1-results").style.display = "none";
    const inputs = document.querySelectorAll("input[type='number']");
    inputs.forEach((input) => (input.value = 0));
  });
}
calculation();
