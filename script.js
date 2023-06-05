function compute() {
  var principal = document.getElementById("principal").value;

  if (principal == "" || principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return;
  }

  var rate = document.getElementById("rate").value;
  var months = document.getElementById("months").value;
  var interest = principal * (months/12) * rate / 100;
  var amount = parseFloat(principal) + parseFloat(interest);

  var dateNow = new Date();
  var yearNow = parseInt(dateNow.getFullYear()) + parseInt(months);

  var resultDisplay = document.getElementById("result");
  resultDisplay.innerHTML = "You will receive a lump sum amount of " + "<span class='highlighResultNumber'>" + amount + "</span>" + ", <br> in the year " + "<span class='hhighlighResultNumber'>" + yearNow + "</span>";
}

function updateRate() {
  var rateval = document.getElementById("rate").value + "%";
  document.getElementById("rate_val").innerText = rateval;
}
