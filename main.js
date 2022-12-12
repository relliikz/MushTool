//function to change the background image of node divs

function changeBackgroundImage(element) {
    // Reset all the background images to none
      for(let i=1; i<10; i++){
      let currentnode=document.getElementById("node"+i);
      currentnode.style.backgroundImage = "none";
      currentnode.onmouseover=function(){
        currentnode.innerHTML = "";
      }
      currentnode.onmouseout=function(){
        currentnode.innerHTML = "";
      }
      }

      //array of skill names
      var skills = [
        ["Raging Blow","Cry Valhalla","Final Attack","Beam Blade","Rising Rage","Puncture"],
        ["Blast","Divine Judgement/Mark","Divine Charge","Heaven's Hammer","Smite Shield","Final Attack"],
        ["Dark Impale","Gungir's Descent","Evil Eye","Nightshade Explosion","Final Attack","Leap Att/Rush/Upwards Charge"],
        ["Angel Ray","Big Bang","Bahamut","Heal/Angelic Wrath","Genesis/Triumph Feather","Heavens Door/Fountain"],
        ["Chain Lightning","Thunder Sphere","Lightning Orb","Blizzard","Elquines","Frozen Orb"],
        ["Flame Sweep","Mist Eruption","Ignite","Teleport Mastery/Creeping Toxin","Flame Haze","Meteor Shower","Meggido Flame","Ifrit","Inferno Aura"],
        ["Blade Fury","Sudden Raid","Blade Ascension","Phantom Blow","Blade Clone","Asura's Anger"],
        ["Assassinate","Cruel Stab","Meso Explosion","Sudden Raid","Dark Flare","Shadow Veil"],
        ["Quad Throw","Assassin's Mark","Showdown","Dark Flare","Death Star","Sudden Raid"],
        ["Cardinal Burst","Cardinal Deluge","Cardinal Torrent","Shadow Raven","Swarm Shot","Glyph of Impalement","Ancient Astra","Triple Impact","Combo Assault"],
        ["Snipe/Empowered","Piercing Arrow/Empowered","High Speed Shot/Arrow Illusion","Final Attack","Bolt Burst/Frostprey"],
        ["Hurricane","Final Attack","Quiver Cartridge","Arrow Blaster/Speed Mirage","Arrow Stream","Phoenix"],
        ["Cannon Barrage","Cannon Bazooka","Rolling Rainbow","Monkey Militia","Anchor Away","Monkey Fury/Monkey Mortar"],
        ["Octopunch","Sea Serpent/Raging Serpent","Nautilus Strike","Hook Bomber","Corkscrew Blow","Serpent Burst/Serpent Assault"],
        ["Eight Legs Easton","Broadside","Scurvy Summons","Nautilus Strike","Siege Bomber","Ugly Bomb","Rapid Fire","Brain Scrambler","Majestic Presence"],
        ["Planet Buster","Vortex Cross","Falling Stars/Turret Deployment","Singularity Shock","Starforce Salvo/Strikeforce","Backup Beatdown/Starfall"],
        ["Moon Dancer/Speeding Sunset","Crescent Divide/Solar Pierce","Styx Crossing"],
        ["Orbital Flame","Dragon Blaze","Blazing Extinction","Cinder Maelstrom","Towering Inferno","Cataclysm"],
        ["Song of Heaven","Trifling Wind","Storm Bringer","Fairy Spiral","Sentient Arrow","Monsoon"],
        ["Quintuple Star","Shadow Spark","Shadow Bat","Dark Omen","Shadow Stitch","Dominion"],
        ["Ascension","Thunder","Shark Sweep","Thunderbolt","Annihalate","Gale/Typhoon"],
        ["Radiant Cross","Four-Point Assault","Charging Light","Final Attack","Royal Guard"],
        ["Wrath of Enlil","Spikes Royale","Leaf Tornado/Gust Dive","Ishtars Ring","Stunning Strikes","Unicorn Spike","Rising Rush","Lightning Edge","Elemental Knights"],
        ["Beyond Blade","Final Blow","Final Attack","Smash Swing","Maha's Domain","Hunter's Prey"],
        ["Mana Burst","Wind Circle/Flash/Breath","Earth Circle/Flash/Breath","Dragon Dive","Dragon Flash","Magic Debris","Thunder Circle/Flash/Breath","Dragon Spark","Dragon Breath/Return"],
        ["Impeccable Memory 4","Impeccable Memory 3","Carte Rose Finale","Mille Aiguilles","Carte Blanc/Noir","Blason Fantome","Penonmbre","Impeccable Memory 2"],    
        ["Reflection","Apocalypse","Ender","Spectral Light","Morning Star","Death Scythe"],
        ["Spirit Claw","Bomb Punch","Fox Spirits","Spirit Incarnation","Spirit Frenzy","Death Mark","Spirit Trap","Soul Splitter","Shockwave Punch"],
        ["Finishing Blow","Dark Shock","Condemnation","Sweeping Staff","Dark Genesis","Battle Burst"],
        ["Wild Arrow Blast","Final Attack","Summon Jaguar","Exploding Arrows/Jag Rampage","Hunting Assistant Unit","Sonic Roar/Jag Soul","Swipe","Drill Salvo","Dash'nSlash/White Heat Rush"],
        ["Homing Beacon/Advanced","Heavy/AP Salvo Plus","Distortion Bomb","Rock'nShock","Bots'nTots","Robo Launcher RM7"],
        ["Magnum Punch","Double Blast","Revolving Cannon","Shotgun Punch","Hammer Smash","Bunker Blaster Explosion"],
        ["Mecha Purge","Beam Dance","Hypogram Field","Triangulation Boost","Pinpoint Salvo","Aegis System","Quicksilver","Diagonal Chase","Combat Switch"],
        ["Demon Impact","Demon Lash","Cerberus Chomp","Infernal Concussion","Demon Cry"],
        ["Exceed:Execution","Nether Shield","Infernal Exceed","Exceed:Lunar Slash","Thousand Swords","Exceed:Demon Strike"],
        ["Gigas Wave","Wing Beat","Tempest Blades","Inferno Breath","Stone Dragon","Blade Burst"],
        ["Soul Seeker","Trinity","Celestial Roar","Supreme Supernova","Soul Resonance","Pink Pummel"],
        ["Thrash/Muscle Mem/Reign","Summon Brick","Summon Spiked Bat","Summon Daggers/Shuriken","Summon Shotgun/Decoy Bomb","Summon Scimitar/Claw","Chain Arts:Beatdown","Crush/Veteran Shadowdealer"],
        ["Strike Arrow/Chasing Shot","Dragon Fang/Lasting Grudge","Death's Blessing/Unseen Sniper","Shaft Break","Falling Dust","Scattering Shot","Chain Sickle/Poison Needle","Phantom Blade/Tearing Knife"],
        ["Rai Blade Flash","Falcon's Honor","Rai Sanrenzen","Hitokiri Strike","Shinsoku/Battoujutsu","Sudden Strike"],
        ["Shikigami Haunting","Exorcist Charm","Ghost Yaksha Boss","Kishin Shoukan","Yosuzume","Tengu Strike","Vanquishers Charm","Shikigami Doppelganger","Nine-tailed Fury"],
        ["Cleave","Hunting Decree/Proclaimation","Reign/Plummet","Aether Bloom/Torrent","Aether Forge/Summons","Magic Dispatch/Aetherial"],
        ["Overcharge/Basic Drive","Ominous/Vivid/Nightmare","Impending Death/Vengeful","Abyssal Drive/Unbridled","Gust Drive/Insatiable","Creeping Terror/Restraint/Agony","Unstoppable/Tenacious","Scarlet Charge/Grevious"],
        ["Radiant/Winged Javelin","Machina+Reaction","Destruction2","Longinus Spear","Umbral Brand 3","Deus and Ex"],
        ["Clone","Humanity","Earth","Heaven","Star Vortex","Seeking Ghost Flame","Butterfly Dream","Gourd/Thousand Ton Stone","Degeneration"],
        ["Essence Sprinkle","Dragon Vein Eruption","Dragon Vein Absorption","Mountain Seeds","Wakeup Call","Mountain Kid"],
        ["Psychic Grab","Ultimate-BPM","Ultimate-Metal Press","Ultimate-Trainwreck","Kinetic Combo","Mind Break"],
        ["Rolling Cross","Rolling Assault","Spin Cutter","Wind Striker","Wind Cutter","Storm Break","Piercing Thrust","Moon Strike","Flash Assault"],
        ["Paw Swipe/Strikes","Lil'Fort","Fishy Slap","Three-Point Pounce","Leopards Paw/Roar","","Formation Attack/Bombers","Tornado Flight/Formation"]
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
            currentnode.innerHTML= skills[0][i-1];
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[1][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[2][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[3][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[4][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[5][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[6][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[7][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[8][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[9][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[10][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[11][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[12][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[13][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[14][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[15][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[16][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[17][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[18][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[19][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[20][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[21][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[22][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[23][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[24][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[25][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[26][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[27][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[28][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[29][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[30][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[31][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[32][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[33][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[34][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[35][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[36][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[37][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[38][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[39][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[40][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[41][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[42][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[43][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[44][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[45][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[46][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[47][i-1];
          }
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
          currentnode.onmouseover = function(){
            currentnode.innerHTML= skills[48][i-1];
          }
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