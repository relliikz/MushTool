//function to change the background image of node divs

function changeBackgroundImage(element) {
    // Reset all the background images to none
      for(let i=1; i<10; i++){
      let currentnode=document.getElementById("node"+i);
      currentnode.style.backgroundImage = "none";
      }

    //declare button name and ia section
    let buttonName = document.getElementById("jobBtn");
    let iaText = document.getElementById("iaText");
  
    // Get the selected option from the dropdown
    var selectedOption = element.value;
  
    // Use a switch case to set the appropriate background image
    switch (selectedOption) {
    //Explorers
      case "0":
        buttonName.innerHTML = "Hero";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/hero"+ i +".png')";
        }
        break;
      case "1":
        buttonName.innerHTML = "Paladin";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/paladin"+ i +".png')";
        }
        break;
      case "2":
        buttonName.innerHTML = "Dark Knight";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/drk"+ i +".png')";
        }
        break;
      case "3":
        buttonName.innerHTML = "Bishop";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/bish"+ i +".png')";
        }
        break;
      case "4":
        buttonName.innerHTML = "Ice/Lightning";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/il"+ i +".png')";
        }
        break;
      case "5":
        buttonName.innerHTML = "Fire/Poison";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/fp"+ i +".png')";
        }
        break;
      case "6":
        buttonName.innerHTML = "Dual Blade";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/db"+ i +".png')";
        }
        break;
      case "7":
        buttonName.innerHTML = "Shadower";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/shad"+ i +".png')";
        }
        break;
      case "8":
        buttonName.innerHTML = "Night Lord";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/nl"+ i +".png')";
        }
        break;
      case "9":
        buttonName.innerHTML = "Pathfinder";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/pf"+ i +".png')";
        }
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        break;
      case "10":
        buttonName.innerHTML = "Marksman";
        for(let i=1; i<6; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/mm"+ i +".png')";
        }
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        break;
      case "11":
        buttonName.innerHTML = "Bowmaster";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/bm"+ i +".png')";
        }
        break;
      case "12":
        buttonName.innerHTML = "Cannoneer";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/cannoneer"+ i +".png')";
        }
        break;
      case "13":
        buttonName.innerHTML = "Buccaneer";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/bucc"+ i +".png')";
        }
        break;
      case "14":
        buttonName.innerHTML = "Corsair";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/corsair"+ i +".png')";
        }
        break;
      case "15":
        buttonName.innerHTML = "Jett";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/jett"+ i +".png')";
        }
        break;
    //cygnus knights
      case "16":
        buttonName.innerHTML = "Dawn Warrior";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<4; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/cygnus/dw"+ i +".png')";
        }
        break;
      case "17":
        buttonName.innerHTML = "Blaze Wizard";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/cygnus/bw"+ i +".png')";
        }
        break;
      case "18":
        buttonName.innerHTML = "Wind Archer";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/cygnus/wa"+ i +".png')";
        }
        break;
      case "19":
        buttonName.innerHTML = "Night Walker";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/cygnus/nw"+ i +".png')";
        }
        break;
      case "20":
        buttonName.innerHTML = "Thunder Breaker";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/cygnus/tb"+ i +".png')";
        }
        break;
      case "21":
        buttonName.innerHTML = "Mihile";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<6; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/cygnus/mihile"+ i +".png')";
        }
        break;
    //heroes
      case "22":
        buttonName.innerHTML = "Mercedes";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/heroes/merc"+ i +".png')";
        }
        break;
      case "23":
        buttonName.innerHTML = "Aran";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/heroes/aran"+ i +".png')";
        }
        break;
      case "24":
        buttonName.innerHTML = "Evan";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/heroes/evan"+ i +".png')";
        }
        break;
      case "25":
        buttonName.innerHTML = "Phantom";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/heroes/phantom"+ i +".png')";
        }
        break;
      case "26":
        buttonName.innerHTML = "Luminous";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/heroes/lumi"+ i +".png')";
        }
        break;
      case "27":
        buttonName.innerHTML = "Shade";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/heroes/shade"+ i +".png')";
        }
        break;
    //resistance
      case "28":
        buttonName.innerHTML = "Battle Mage";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/resistance/bam"+ i +".png')";
        }
        break;
      case "29":
        buttonName.innerHTML = "Wild Hunter";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/resistance/wh"+ i +".png')";
        }
        break;
      case "30":
        buttonName.innerHTML = "Mechanic";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/resistance/mech"+ i +".png')";
        }
        break;
      case "31":
        buttonName.innerHTML = "Blaster";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/resistance/blaster"+ i +".png')";
        }
        break;
      case "32":
        buttonName.innerHTML = "Xenon";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/resistance/xenon"+ i +".png')";
        }
        break;
      case "33":
        buttonName.innerHTML = "Demon Slayer";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<6; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/resistance/ds"+ i +".png')";
        }
        break;
      case "34":
        buttonName.innerHTML = "Demon Avenger";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/resistance/da"+ i +".png')";
        }
        break;
    //nova
      case "35":
        buttonName.innerHTML = "Kaiser";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/nova/kaiser"+ i +".png')";
        }
        break;
      case "36":
        buttonName.innerHTML = "Angelic Buster";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/nova/ab"+ i +".png')";
        }
        break;
      case "37":
        buttonName.innerHTML = "Cadena";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<9; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/nova/cadena"+ i +".png')";
        }
        break;
      case "38":
        buttonName.innerHTML = "Kain";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<9; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/nova/kain"+ i +".png')";
        }
        break;
    //sengoku
      case "39":
        buttonName.innerHTML = "Hayato";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/sengoku/hayato"+ i +".png')";
        }
        break;
      case "40":
        buttonName.innerHTML = "Kanna";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/sengoku/kanna"+ i +".png')";
        }
        break;
    //flora
      case "41":
        buttonName.innerHTML = "Adele";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/flora/adele"+ i +".png')";
        }
        break;
      case "42":
        buttonName.innerHTML = "Ark";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<9; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/flora/ark"+ i +".png')";
        }
        break;
      case "43":
        buttonName.innerHTML = "Illium";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/flora/illium"+ i +".png')";
        }
        break;
    //anima
      case "44":
        buttonName.innerHTML = "Hoyoung";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/anima/hoyoung"+ i +".png')";
        }
        break;
      case "45":
        buttonName.innerHTML = "Lara";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/anima/lara"+ i +".png')";
        }
        break;
    //other
      case "46":
        buttonName.innerHTML = "Kinesis";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/other/kinesis"+ i +".png')";
        }
        break;
      case "47":
        buttonName.innerHTML = "Zero";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/other/zero"+ i +".png')";
        }
        break;
      case "48":
        buttonName.innerHTML = "Beast Tamer";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        for(let i=1; i<9; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/other/bt"+ i +".png')";
        }
        break;
    //default
      default:
        node1.style.backgroundImage = "none";
        break;
    }
  }





  //legacy code

  /*       case "0":
        buttonName.innerHTML = "Hero";
        node1.style.backgroundImage = "url('nodes/explorer/hero1.png')";
        node2.style.backgroundImage = "url('nodes/explorer/hero2.png')";
        node3.style.backgroundImage = "url('nodes/explorer/hero3.png')";
        node4.style.backgroundImage = "url('nodes/explorer/hero4.png')";
        node5.style.backgroundImage = "url('nodes/explorer/hero5.png')";
        node6.style.backgroundImage = "url('nodes/explorer/hero6.png')";
        node7.style.backgroundImage = "none";
        node8.style.backgroundImage = "none";
        node9.style.backgroundImage = "none";
        iaText.innerHTML = "20 boss, 20% crit, 21 att";
        break; */