// MAIN/OPENING SCREEN

// add a blank thingy for loading aspect before showing everything again

onEvent("startButton", "click", function( ) {
  updateScreen();
  setScreen("volleyBallScreen");
  showElement("personImage");
  showElement("netImage");
});

// VOLLEYBALL SCREEN

// declared variables
var receiveInjuries = ["dive", "setreceive"];
var hitInjuries = ["badhand", "broadjump"] ;
var randomRecieveInjury = "";
var randomHitInjury = "";

// hide all elements to start, 
// and show starting screen
updateScreen();
setScreen("mainScreen");

// once injured, this button is clicked to move to the med kit screen
onEvent("nextButton", "click", function( ) {
  setScreen("medkitPage");
});

onEvent("receiveButton", "click", function( ) {
  // 50/50 for good or bad receive
  setText("secondLabel", "");
  randomChoose();
  updateScreen();
  if (randomNum == 0) {
    // 50/50 for either injury receive
    randomRecieveInjury = receiveInjuries [(randomNumber (0, 1))];
    if (randomRecieveInjury == "dive") {
      showElement("diveInjured");
      injury();
    } else {
      showElement("setReceiveInjured");
      injury();
    }
  } else if (randomNum == 1) {
    showElement("receiveGood");
    setText("secondLabel","Nice receive!");
  }
});

onEvent("hitButton", "click", function( ) {
  // 50/50 for good or bad hit
  setText("secondLabel", "");
  randomChoose();
  updateScreen();
  if (randomNum == 0) {
    // 50/50 for injured hit
    randomHitInjury = hitInjuries [(randomNumber (0, 1))];
    if (randomHitInjury == "badhand") {
      showElement("hitBad");
      injury();
    } else {
      showElement("broadjumpImage");
      injury();
    }
  } else if (randomNum == 1) {
    showElement("hitGood");
    setText("secondLabel","Nice hit!");
  }
});

// MED KIT SCREEN

// 2 of 5 items inside the med kit are used to help the person recover
onEvent("alcoholSwabsButton", "click", function( ) {
  hideElement("alcoholSwabsButton");
  setText("injuredLabel", "Not that one... try again!");
});
onEvent("bandaidsButton", "click", function( ) {
  hideElement("bandaidsButton");
  setText("injuredLabel", "Not that one... try again!");
});
onEvent("coldPackButton", "click", function( ) {
  setScreen("endScreen");
});
onEvent("cottonSwabsButton", "click", function( ) {
  hideElement("cottonSwabsButton");
  setText("injuredLabel", "Not that one... try again!");
});
onEvent("wrapButton", "click", function( ) {
  setScreen("endScreen");
});

// END SCREEN (ONE BUTTON)
onEvent("otherButton", "click", function( ) {
  setScreen("otherInjuriesScreen");
});


// HOME BUTTONS (ON ALL PAGES) and reset everything else
onEvent("homeButton1", "click", function( ) {
  homeButtons();
});
onEvent("homeButton2", "click", function( ) {
  homeButtons();
});
onEvent("homeButton3", "click", function( ) {
  homeButtons();
});
onEvent("homeButton4", "click", function( ) {
  homeButtons();
});

// FUNCTIONS 
function injury() {
  // every injury will incur the next button 
  // and play the breaking sound
  hideElement("receiveButton");
  hideElement("hitButton");
  showElement("nextButton");
  setText("secondLabel","Uh oh... carry on.");
  playSound("assets/category_hits/vibrant_game_frozen_break_hit_1.mp3");
}

var randomNum = 0;
function randomChoose() {
  // RNG for injury or not
  randomNum = randomNumber (0, 1);
  return randomNum;
}

function updateScreen(){
  // hide all elements besides the default,
  // so that the conditional images don't show before
  hideElement("diveInjured");
  hideElement("receiveGood");
  hideElement("setReceiveInjured");
  hideElement("nextButton");
  hideElement("hitGood");
  hideElement("hitBad");
  hideElement("personImage");
  hideElement("broadjumpImage");
  hideElement("netImage");
}

function reset() {
  // double making sure that it is
  showElement("receiveButton");
  showElement("hitButton");
  showElement("alcoholSwabsButton");
  showElement("bandaidsButton");
  showElement("cottonSwabsButton");
}

function homeButtons(){
  updateScreen();
  reset();
  setScreen("mainScreen");
}
