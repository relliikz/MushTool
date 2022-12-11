function changeBackgroundImage(element) {
    // Get the element to change the background image of
    let node1 = document.getElementById("node1");
    let node2 = document.getElementById("node2");
    let node3 = document.getElementById("node3");
    let node4 = document.getElementById("node4");
    let node5 = document.getElementById("node5");
    let node6 = document.getElementById("node6");
    let node7 = document.getElementById("node7");
    let node8 = document.getElementById("node8");
    let node9 = document.getElementById("node9");
    let buttonName = document.getElementById("jobBtn");
    let iaText = document.getElementById("iaText");
  
    // Get the selected option from the dropdown
    var selectedOption = element.value;
  
    // Use a switch case to set the appropriate background image
    switch (selectedOption) {
      case "0":
        buttonName.innerHTML = "Hero";
        node1.style.backgroundImage = "url('nodes/explorer/hero1.png')";
        node2.style.backgroundImage = "url('nodes/explorer/hero2.png')";
        node3.style.backgroundImage = "url('nodes/explorer/hero3.png')";
        node4.style.backgroundImage = "url('nodes/explorer/hero4.png')";
        node5.style.backgroundImage = "url('nodes/explorer/hero5.png')";
        node6.style.backgroundImage = "url('nodes/explorer/hero6.png')";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        break;
      case "1":
        buttonName.innerHTML = "Paladin";
        node1.style.backgroundImage = "url('nodes/explorer/paladin1.png')";
        node2.style.backgroundImage = "url('nodes/explorer/paladin2.png')";
        node3.style.backgroundImage = "url('nodes/explorer/paladin3.png')";
        node4.style.backgroundImage = "url('nodes/explorer/paladin4.png')";
        node5.style.backgroundImage = "url('nodes/explorer/paladin5.png')";
        node6.style.backgroundImage = "url('nodes/explorer/paladin6.png')";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        break;
      case "2":
        buttonName.innerHTML = "Dark Knight";
        node1.style.backgroundImage = "url('nodes/explorer/drk1.png')";
        node2.style.backgroundImage = "url('nodes/explorer/drk2.png')";
        node3.style.backgroundImage = "url('nodes/explorer/drk3.png')";
        node4.style.backgroundImage = "url('nodes/explorer/drk4.png')";
        node5.style.backgroundImage = "url('nodes/explorer/drk5.png')";
        node6.style.backgroundImage = "url('nodes/explorer/drk6.png')";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
      default:
        node1.style.backgroundImage = "none";
        break;
    }
  }