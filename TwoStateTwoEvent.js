class TwoStateTwoEvent {
  constructor(State1, State2) {
    this.currentState = State1;
    this.nextState = State2;
    this.currentState.draw();
  }

  changeState()
  {
    var tmpState = this.currentState;
    this.currentState = this.nextState;
    this.nextState = tmpState;
    console.log("State change: " + this.currentState.name);
    this.currentState.draw();
  }

  draw()
  {
    this.currentState.draw();
  }
}
