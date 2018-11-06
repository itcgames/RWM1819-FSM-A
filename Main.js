/**
 * main is the entry point for Javascript programs.
 * @author { Sean Regan}
 */

function main()
{
  var stateOn;
  var stateOff;
  var fsm;


  stateOnImage = new Image();
  stateOnImage.src = 'lightswitchOn.png';


  stateOffImage = new Image();
  stateOffImage.src = 'lightswitchOff.png';

  stateOn = new State("Running", {
      width: 419,
      height: 408,
      image: stateOnImage
    });
  stateOff = new State("Stopped", {
      width: 419,
      height: 408,
      image: stateOffImage
    });
  fsm = new TwoStateTwoEvent(stateOn, stateOff);

  document.getElementById("canvas").onclick = function() {fsm.changeState()};
}
