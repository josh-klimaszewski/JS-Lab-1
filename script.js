var wantToPlay = prompt("Do you want to try to kill Grant the mighty chicken three times?")
var userHealth = 40;
var grantHealth = 10;
var wins = 0;
var dmg = 0;

if (wantToPlay == "yes") {
  var user = prompt("What is your name?");
  while (wins < 3 && userHealth > 1) {
    dmg = Math.floor(Math.random() * 2) + 1;
    userHealth -= dmg;
    dmg = Math.floor(Math.random() * 2) + 1;
    grantHealth -= dmg;
    console.log (user + " has " + userHealth + " life left!");
    console.log ("Grant the mighty chicken has " + grantHealth + " life left!");
    if (grantHealth < 1) {
      console.log("Grant the mighty chicken died!")
      wins ++;
      grantHealth = 10;
    }
  }
  if (userHealth < 1) {
    console.log(user + " lost!");
  } else {
    console.log(user + " won!");
  }
}