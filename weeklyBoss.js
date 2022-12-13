function updateHeader() {
    for (let j = 1; j<7; j++){
      const income = document.getElementById("bossIncome"+j);
      const boss = document.getElementById("boss"+j);
      const checkboxes = boss.querySelectorAll('.form-check-input[type="checkbox"]');
    
      let total = 0;
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          total += parseInt(checkboxes[i].value);
        }
      }
    
      income.innerHTML =  total.toLocaleString() + " Mesos";
      updateHeaderTotal();
    }
  }
 
 function updateHeaderTotal() {
    var income = document.getElementById("totalIncome");
    var checkboxes = document.querySelectorAll('.form-check-input[type="checkbox"]');
  
    var total = 0;
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        total += parseInt(checkboxes[i].value);
      }
  
    income.innerHTML =  total.toLocaleString() + " Mesos";
  }
 }
  function displayMuleDivs(element){

    for(let i=1; i<7; i++){
        let currentboss=document.getElementById("boss"+i);
        currentboss.style.display = "none";
    }



    let buttonName = document.getElementById("muleBtn");
  
    // Get the selected option from the dropdown
    var selectedOption = element.value;
    switch (selectedOption) {
        //Explorers
                case "0":
                buttonName.innerHTML = "1 Mule";
                for(let i=1; i<2; i++){
                let currentboss=document.getElementById("boss"+i);
                currentboss.style.display = "block";
                }
                break;

                case "1":
                buttonName.innerHTML = "2 Mule";
                for(let i=1; i<3; i++){
                  let currentboss=document.getElementById("boss"+i);
                    currentboss.style.display = "block";
                }
                break;

                case "2":
                buttonName.innerHTML = "3 Mule";
                for(let i=1; i<4; i++){
                  let currentboss=document.getElementById("boss"+i);
                    currentboss.style.display = "block";
                }
                break;

                case "3":
                buttonName.innerHTML = "4 Mule";
                for(let i=1; i<5; i++){
                  let currentboss=document.getElementById("boss"+i);
                    currentboss.style.display = "block";
                }
                break;

                case "4":
                buttonName.innerHTML = "5 Mule";
                for(let i=1; i<6; i++){
                  let currentboss=document.getElementById("boss"+i);
                    currentboss.style.display = "block";
                }
                break;

                case "5":
                buttonName.innerHTML = "6 Mule";
                for(let i=1; i<7; i++){
                  let currentboss=document.getElementById("boss"+i);
                    currentboss.style.display = "block";
                }
                break;
    //default
    default:
    
        break;
    }
  }