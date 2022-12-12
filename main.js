//function to change the background image of node divs

function changeBackgroundImage(element) {
    // Reset all the background images to none
      for(let i=1; i<10; i++){
      let currentnode=document.getElementById("node"+i);
      currentnode.style.backgroundImage = "none";
      currentnode.onmouseout=function(){
        currentnode.innerHTML = "";
      }
      }

      //array of skill names
      var test = [
        "test1","test2","test3","test4","test5","test6"
      ];

    //declare button name
    let buttonName = document.getElementById("jobBtn");
  
    // Get the selected option from the dropdown
    var selectedOption = element.value;
  
    // Use a switch case to set the appropriate background image
    switch (selectedOption) {
    //Explorers
      case "0":
        buttonName.innerHTML = "Hero";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/hero"+ i +".png')";
          currentnode.onmouseover = function(){
            currentnode.innerHTML= test[i-1];
          }
        }
        break;
      case "1":
        buttonName.innerHTML = "Paladin";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/paladin"+ i +".png')";
        }
        break;
      case "2":
        buttonName.innerHTML = "Dark Knight";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "38% Buff Duration";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/drk"+ i +".png')";
        }
        break;
      case "3":
        buttonName.innerHTML = "Bishop";
        ia1.innerHTML = "50% Buff Duration";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "8% Dmg to Debuff/Afflicted";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/bish"+ i +".png')";
        }
        break;
      case "4":
        buttonName.innerHTML = "Ice/Lightning";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "38% Buff Duration";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/il"+ i +".png')";
        }
        break;
      case "5":
        buttonName.innerHTML = "Fire/Poison";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "38% Buff Duration";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/fp"+ i +".png')";
        }
        break;
      case "6":
        buttonName.innerHTML = "Dual Blade";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "38% Buff Duration";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/db"+ i +".png')";
        }
        break;
      case "7":
        buttonName.innerHTML = "Shadower";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "38% Buff Duration";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/shad"+ i +".png')";
        }
        break;
      case "8":
        buttonName.innerHTML = "Night Lord";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/nl"+ i +".png')";
        }
        break;
      case "9":
        buttonName.innerHTML = "Pathfinder";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/pf"+ i +".png')";
        }
        break;
      case "10":
        buttonName.innerHTML = "Marksman";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<6; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/mm"+ i +".png')";
        }
        break;
      case "11":
        buttonName.innerHTML = "Bowmaster";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/bm"+ i +".png')";
        }
        break;
      case "12":
        buttonName.innerHTML = "Cannoneer";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/cannoneer"+ i +".png')";
        }
        break;
      case "13":
        buttonName.innerHTML = "Buccaneer";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/bucc"+ i +".png')";
        }
        break;
      case "14":
        buttonName.innerHTML = "Corsair";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/corsair"+ i +".png')";
        }
        break;
      case "15":
        buttonName.innerHTML = "Jett";
        ia1.innerHTML = "20% Cooldown Skip";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "10% Boss Dmg";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/explorer/jett"+ i +".png')";
        }
        break;
    //cygnus knights
      case "16":
        buttonName.innerHTML = "Dawn Warrior";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<4; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/cygnus/dw"+ i +".png')";
        }
        break;
      case "17":
        buttonName.innerHTML = "Blaze Wizard";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/cygnus/bw"+ i +".png')";
        }
        break;
      case "18":
        buttonName.innerHTML = "Wind Archer";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/cygnus/wa"+ i +".png')";
        }
        break;
      case "19":
        buttonName.innerHTML = "Night Walker";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/cygnus/nw"+ i +".png')";
        }
        break;
      case "20":
        buttonName.innerHTML = "Thunder Breaker";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/cygnus/tb"+ i +".png')";
        }
        break;
      case "21":
        buttonName.innerHTML = "Mihile";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<6; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/cygnus/mihile"+ i +".png')";
        }
        break;
    //heroes
      case "22":
        buttonName.innerHTML = "Mercedes";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/heroes/merc"+ i +".png')";
        }
        break;
      case "23":
        buttonName.innerHTML = "Aran";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/heroes/aran"+ i +".png')";
        }
        break;
      case "24":
        buttonName.innerHTML = "Evan";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/heroes/evan"+ i +".png')";
        }
        break;
      case "25":
        buttonName.innerHTML = "Phantom";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "38% Buff Duration";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/heroes/phantom"+ i +".png')";
        }
        break;
      case "26":
        buttonName.innerHTML = "Luminous";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "20% Critical Hit Chance";
        ia3.innerHTML = "38% Buff Duration";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/heroes/lumi"+ i +".png')";
        }
        break;
      case "27":
        buttonName.innerHTML = "Shade";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/heroes/shade"+ i +".png')";
        }
        break;
    //resistance
      case "28":
        buttonName.innerHTML = "Battle Mage";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/resistance/bam"+ i +".png')";
        }
        break;
      case "29":
        buttonName.innerHTML = "Wild Hunter";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/resistance/wh"+ i +".png')";
        }
        break;
      case "30":
        buttonName.innerHTML = "Mechanic";
        ia1.innerHTML = "+1 Passive Skills";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "10% Boss Dmg";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/resistance/mech"+ i +".png')";
        }
        break;
      case "31":
        buttonName.innerHTML = "Blaster";
        ia1.innerHTML = "+1 Passive Skills";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "10% Boss Dmg";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/resistance/blaster"+ i +".png')";
        }
        break;
      case "32":
        buttonName.innerHTML = "Xenon";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "20% Critical Hit Chance";
        ia3.innerHTML = "38% Buff Duration";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/resistance/xenon"+ i +".png')";
        }
        break;
      case "33":
        buttonName.innerHTML = "Demon Slayer";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "10% Cooldown Skip";
        ia3.innerHTML = "8% Dmg to Debuff/Afflicted";
        for(let i=1; i<6; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/resistance/ds"+ i +".png')";
        }
        break;
      case "34":
        buttonName.innerHTML = "Demon Avenger";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "20% Critical Hit Chance";
        ia3.innerHTML = "10% Cooldown Skip";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/resistance/da"+ i +".png')";
        }
        break;
    //nova
      case "35":
        buttonName.innerHTML = "Kaiser";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "20% Critical Hit Chance";
        ia3.innerHTML = "38% Buff Duration";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/nova/kaiser"+ i +".png')";
        }
        break;
      case "36":
        buttonName.innerHTML = "Angelic Buster";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/nova/ab"+ i +".png')";
        }
        break;
      case "37":
        buttonName.innerHTML = "Cadena";
        ia1.innerHTML = "20% Cooldown Skip";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "8% Dmg to Debuff/Afflicted";
        for(let i=1; i<9; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/nova/cadena"+ i +".png')";
        }
        break;
      case "38":
        buttonName.innerHTML = "Kain";
        ia1.innerHTML = "+1 Passive Skills";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<9; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/nova/kain"+ i +".png')";
        }
        break;
    //sengoku
      case "39":
        buttonName.innerHTML = "Hayato";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "38% Buff Duration";
        ia3.innerHTML = "8% Dmg to Debuff/Afflicted";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/sengoku/hayato"+ i +".png')";
        }
        break;
      case "40":
        buttonName.innerHTML = "Kanna";
        ia1.innerHTML = "20% Boss Dmg";
        ia2.innerHTML = "8% Dmg to Debuff/Afflicted";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/sengoku/kanna"+ i +".png')";
        }
        break;
    //flora
      case "41":
        buttonName.innerHTML = "Adele";
        ia1.innerHTML = "20% Cooldown Skip";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/flora/adele"+ i +".png')";
        }
        break;
      case "42":
        buttonName.innerHTML = "Ark";
        ia1.innerHTML = "+1 Passive Skills";
        ia2.innerHTML = "38% Buff Duration";
        ia3.innerHTML = "10% Cooldown Skip";
        for(let i=1; i<9; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/flora/ark"+ i +".png')";
        }
        break;
      case "43":
        buttonName.innerHTML = "Illium";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/flora/illium"+ i +".png')";
        }
        break;
    //anima
      case "44":
        buttonName.innerHTML = "Hoyoung";
        ia1.innerHTML = "+1 Passive Skills";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "8% Dmg to Debuff/Afflicted";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/anima/hoyoung"+ i +".png')";
        }
        break;
      case "45":
        buttonName.innerHTML = "Lara";
        ia1.innerHTML = "+1 Passive Skills";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/anima/lara"+ i +".png')";
        }
        break;
    //other
      case "46":
        buttonName.innerHTML = "Kinesis";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<7; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/other/kinesis"+ i +".png')";
        }
        break;
      case "47":
        buttonName.innerHTML = "Zero";
        ia1.innerHTML = "+1 Attack Speed";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "20% Critical Hit Chance";
        for(let i=1; i<10; i++){
          let currentnode=document.getElementById("node"+i);
          currentnode.style.backgroundImage = "url('nodes/other/zero"+ i +".png')";
        }
        break;
      case "48":
        buttonName.innerHTML = "Beast Tamer";
        ia1.innerHTML = "20% Cooldown Skip";
        ia2.innerHTML = "10% Boss Dmg";
        ia3.innerHTML = "8% Dmg to Debuff/Afflicted";
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