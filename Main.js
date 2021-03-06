/**
 * main is the entry point for Javascript programs.
 * @author { Sean Regan}
 */

function main()
{
  var stateOn;
  var stateOff;
  var eventOn;
  var eventOff;
  var eventswitch;
  var fsm;

  stateOnImage = new Image();
  stateOnImage.src = 'Images/lightswitchOn.png';
  stateOn = new State("On", {
      width: 419,
      height: 408,
      image: stateOnImage
    });

  stateOffImage = new Image();
  stateOffImage.src = 'Images/lightswitchOff.png';
  stateOff = new State("Off", {
      width: 419,
      height: 408,
      image: stateOffImage
    });

  eventSwitch = new Event("Switch", stateOn, stateOff, true)
  eventOn = new Event("Turn On", stateOff, stateOn, false)
  eventOff = new Event("Turn Off", stateOn, stateOff, false)

  fsm = new TwoStateTwoEvent("LightSwitch", stateOn, stateOff, eventSwitch);
  fsm.createTrigger();

  var para = document.createElement("p");  // Create paragraph
  para.id = "lightTable" // give id
  para.innerHTML = "Light switch table"
  document.body.appendChild(para);  // add canvas to document
  fsm.drawTable()

  para = document.createElement("p");  // Create canvas
  para.id = "lightGraph" // give id
  para.innerHTML = "Light switch graph"
  document.body.appendChild(para);  // add canvas to document
  fsm.drawGraph()

  document.getElementById("LightSwitch").onclick = function() {fsm.changeState()};


  var heading2 = document.createElement("h2");  // Create canvas
  heading2.id = "gearHeading" // give id
  heading2.innerHTML = "N state M event FSM"
  document.body.appendChild(heading2);  // add canvas to document

  para = document.createElement("p");  // Create canvas
  para.id = "gearstick" // give id
  para.innerHTML = "Click on a action to change state"
  document.body.appendChild(para);  // add canvas to document

  var nmFSM;
  var stateGearStickOff;
  var stateNeutral;
  var stateReverse;
  var stateFirst;
  var stateSecond;
  var stateThird;
  var stateFourth;
  var stateFifth;
  var stateSixth;
  var eventKey;
  var eventReverse;
  var eventN_1;
  var event1_2;
  var event2_3;
  var event3_4;
  var event4_5;
  var event5_6;

  var gearStickImage = new Image();
  gearStickImage.src = 'Images/gearstick.jfif';

  stateGearStickOff = new State("Off", {
    width: 1200,
    height: 676,
    image: gearStickImage
  })

  stateNeutral = new State("Neutral", {
    width: 1200,
    height: 676,
    image: gearStickImage
  });

  stateReverse = new State("Reverse", {
    width: 1200,
    height: 676,
    image: gearStickImage
  });

  stateFirst = new State("First", {
    width: 1200,
    height: 676,
    image: gearStickImage
  });

  stateSecond = new State("Second", {
    width: 1200,
    height: 676,
    image: gearStickImage
  });

  stateThird = new State("Third", {
    width: 1200,
    height: 676,
    image: gearStickImage
  });

  stateFourth = new State("Fourth", {
    width: 1200,
    height: 676,
    image: gearStickImage
  });

  stateFifth = new State("Fifth", {
    width: 1200,
    height: 676,
    image: gearStickImage
  });

  stateSixth = new State("Sixth", {
    width: 1200,
    height: 676,
    image: gearStickImage
  });

  eventKey = new Event("Key", stateGearStickOff, stateNeutral, true);
  eventReverse = new Event("Reverse", stateNeutral, stateReverse, true);
  eventN_1 = new Event("N To First", stateNeutral, stateFirst, false);
  event1_2 = new Event("First To Second", stateFirst, stateSecond, false);
  event2_3 = new Event("Second To Third", stateSecond, stateThird, false);
  event3_4 = new Event("Third To Fourth", stateThird, stateFourth, false);
  event4_5 = new Event("Fourth To Fifth", stateFourth, stateFifth, false);
  event5_6 = new Event("Fifth To Sixth", stateFifth, stateSixth, false);
  event1_N = new Event("First To N", stateFirst, stateNeutral, false);
  event2_1 = new Event("Second To First", stateSecond, stateFirst, false);
  event3_2 = new Event("Third To Second", stateThird, stateSecond, false);
  event4_3 = new Event("Fourth To Third", stateFourth, stateThird, false);
  event5_4 = new Event("Fifth To Fourth", stateFifth, stateFourth, false);
  event6_5 = new Event("Sixth To Fifth", stateSixth, stateFifth, false);


  carKey = new Image();
  carKey.src = 'Images/carkey.jpeg';

  carReverse = new Image();
  carReverse.src = 'Images/reverse.jpg';

  carUp = new Image();
  carUp.src = 'Images/up.png';

  carDown = new Image();
  carDown.src = 'Images/down.png';

  nmFSM = new NStateMEvent("Gear Stick", stateGearStickOff);
  nmFSM.createTrigger()

  eventKey.addTrigger({
      id: "carKey",
      width: 832,
      height: 468,
      image: carKey
    }, nmFSM, 0);

  eventReverse.addTrigger({
      id: "carReverse",
      width: 370,
      height: 225,
      image: carReverse
    }, nmFSM, 0);

  eventN_1.addTrigger({
    id: "carN_1U",
    width: 1024,
    height: 1024,
    image: carUp
  }, nmFSM, 1);

  event1_2.addTrigger({
    id: "car1_2U",
    width: 1024,
    height: 1024,
    image: carUp
  }, nmFSM, 1);

  event2_3.addTrigger({
    id: "car2_3U",
    width: 1024,
    height: 1024,
    image: carUp
  }, nmFSM, 1);

  event3_4.addTrigger({
    id: "car3_4U",
    width: 1024,
    height: 1024,
    image: carUp
  }, nmFSM, 1);

  event4_5.addTrigger({
    id: "car4_5U",
    width: 1024,
    height: 1024,
    image: carUp
  }, nmFSM, 1);

  event5_6.addTrigger({
    id: "car5_6U",
    width: 1024,
    height: 1024,
    image: carUp
  }, nmFSM, 1);

  event1_N.addTrigger({
    id: "car1_N",
    width: 1024,
    height: 1024,
    image: carDown
  }, nmFSM, 2);

  event2_1.addTrigger({
    id: "car2_1",
    width: 1024,
    height: 1024,
    image: carDown
  }, nmFSM, 2);

  event3_2.addTrigger({
    id: "car3_2",
    width: 1024,
    height: 1024,
    image: carDown
  }, nmFSM, 2);

  event4_3.addTrigger({
    id: "car4_3",
    width: 1024,
    height: 1024,
    image: carDown
  }, nmFSM, 2);

  event5_4.addTrigger({
    id: "car5_4",
    width: 1024,
    height: 1024,
    image: carDown
  }, nmFSM, 2);

  event6_5.addTrigger({
    id: "car6_5",
    width: 1024,
    height: 1024,
    image: carDown
  }, nmFSM, 2);

  nmFSM.addState(stateNeutral);
  nmFSM.addState(stateReverse);
  nmFSM.addState(stateFirst);
  nmFSM.addState(stateSecond);
  nmFSM.addState(stateThird);
  nmFSM.addState(stateFourth);
  nmFSM.addState(stateFifth);
  nmFSM.addState(stateSixth);

  nmFSM.addEvent(eventKey);
  nmFSM.addEvent(eventReverse);
  nmFSM.addEvent(eventN_1);
  nmFSM.addEvent(event1_2);
  nmFSM.addEvent(event2_3);
  nmFSM.addEvent(event3_4);
  nmFSM.addEvent(event4_5);
  nmFSM.addEvent(event5_6);

  nmFSM.addEvent(event1_N);
  nmFSM.addEvent(event2_1);
  nmFSM.addEvent(event3_2);
  nmFSM.addEvent(event4_3);
  nmFSM.addEvent(event5_4);
  nmFSM.addEvent(event6_5);

  nmFSM.updateAvailableEvents(true);

  para = document.createElement("p");  // Create canvas
  para.id = "gearTable" // give id
  para.innerHTML = "Gear stick table"
  document.body.appendChild(para);  // add canvas to document

  nmFSM.drawTable();

  para = document.createElement("p");  // Create canvas
  para.id = "gearGraph" // give id
  para.innerHTML = "Gear stick graph"
  document.body.appendChild(para);  // add canvas to document

  nmFSM.drawGraph();
  //nmFSM.non_deterministic();
  //nmFSM.non_deterministic();

  var heading2 = document.createElement("h2");  // Create canvas
  heading2.id = "coinHeading" // give id
  heading2.innerHTML = "Non deterministic event"
  document.body.appendChild(heading2);  // add canvas to document

  para = document.createElement("p");  // Create canvas
  para.id = "coinFlip" // give id
  para.innerHTML = "Click on the image to flip the coin"
  document.body.appendChild(para);  // add canvas to document

  var stateHead;
  var stateTail;
  var eventFlip;
  var fsmCoin;

  stateHeadImage = new Image();
  stateHeadImage.src = 'Images/heads.jpg';
  stateHead = new State("Heads", {
      width: 316,
      height: 316,
      image: stateHeadImage
    });

  stateTailImage = new Image();
  stateTailImage.src = 'Images/tails.jpg';
  stateTail = new State("Tails", {
      width: 400,
      height: 400,
      image: stateTailImage
    });

  eventFlip = new Event("Flip", stateHead, stateTail, true)

  fsmCoin = new TwoStateTwoEvent("CoinFlip", stateHead, stateTail, eventFlip);
  fsmCoin.createTrigger()

  para = document.createElement("p");  // Create canvas
  para.id = "coinTable" // give id
  para.innerHTML = "Coin table"
  document.body.appendChild(para);  // add canvas to document

  fsmCoin.drawTable()

  para = document.createElement("p");  // Create canvas
  para.id = "coinGraph" // give id
  para.innerHTML = "Coin graph"
  document.body.appendChild(para);  // add canvas to document

  fsmCoin.drawGraph()

  document.getElementById("CoinFlip").onclick = function() {fsmCoin.non_deterministic()};

}
