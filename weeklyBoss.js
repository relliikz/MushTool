  function updateHeader() {
    var income = document.getElementById("totalIncome");
    var checkboxes = document.querySelectorAll('.form-check-input[type="checkbox"]');
  
    var total = 0;
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        total += parseInt(checkboxes[i].value);
      }
    }
  
    income.innerHTML =  total.toLocaleString() + " Mesos";
  }