var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var playerMoney = 10;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or Skip this battle? Enther 'FIGHT' or 'SKIP' to choose." )
  
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  
    // Log a resulting message to the console so we know that it worked.
  
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  
    // Log a resulting message to the console so we know that it worked.
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    if(promptFight === "fight" || promptFight === "FIGHT"){
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
        playerHealth = playerHealth - enemyAttack;

        if(playerHealth <= 0){
            window.alert(playerName + " has died!");
        } else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // Log a resulting message to the console so we know that it worked.
        console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        } 
    } else if(promptFight === "skip" || promptFight === "SKIP"){
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if(confirmSkip){
            window.alert(playerName +" has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        } else {
            fight();
        }
    }
}
fight();