class TwoStateTwoEvent {
  constructor(id, state1, state2, event1, event2)
  {
    this.id = id;
    this.currentState = state1;
    this.firstState = state1;
    this.secondState = state2;
    this.firstEvent = event1;
    if(event2 != undefined && event1.twoWay == false)
    {
      this.secondEvent = event2;
    }

  }

  createTrigger()
  {
    var canv = document.createElement("Canvas");  // Create canvas
    canv.id = this.id // give id
    document.body.appendChild(canv);  // add canvas to document
    canv.style="border:1px solid #d3d3d3;"
    this.draw()
  }

  changeState()
  {
    if(this.currentState === this.secondState && this.secondEvent != undefined && this.firstEvent.twoWay === false)
    {
      this.secondEvent.transition(this);
    }
    else
    {
      this.firstEvent.transition(this);
    }
    this.draw()
  }

  useEvent(event)
  {
    if(this.secondEvent === event)
    {
      this.secondEvent.transition(this);
    }
    else if(this.firstEvent === event)
    {
      this.firstEvent.transition(this);
    }
    else
    {
      console.log("Error: Event not found in FSM");
    }
  }

  update()
  {
      this.currentState.update();
  }

  draw()
  {
    this.currentState.draw(this.id);
  }

  non_deterministic()
  {
    console.log("Flip")
    var rndState = (Math.floor(Math.random() * 2));
    if(rndState === 0)
    {
      this.changeState()
    }
  }

  drawTable()
  {
    var id = this.id.replace(/\s+/g, '');
    if (document.getElementById("Table"+id) === null)
    {
      var canv = document.createElement("Canvas");  // Create canvas
      canv.id = 'Table'+ id // give id
      document.body.appendChild(canv);  // add canvas to document

    }
    else{
      var canv = document.getElementById("Table"+id);
    }
      canv.height = 150; //get original canvas height
      canv.width = 600;  // get original canvas width
      canv.style = "border:1px solid #d3d3d3;"  // Canvas style
      var c = document.getElementById("Table"+id);
      var ctx=canv.getContext("2d");
      ctx.font = "20px Arial";
      // Left Column Text
      ctx.fillText("Current State",10,30);
      ctx.fillText(this.firstState.name,10,80);
      ctx.fillText(this.secondState.name,10,130);
      // Middle Column Text
      ctx.fillText("Event",210,30);
      ctx.fillText(this.firstEvent.id,210,80);
      if(this.secondEvent == null)
      {
        ctx.fillText(this.firstEvent.id,210,130);
      }
      else {
        ctx.fillText(this.secondEvent.id,210,130);
      }
      // Right Column Text
      ctx.fillText("Next State",410,30);
      ctx.fillText(this.secondState.name,410,80);
      ctx.fillText(this.firstState.name,410,130);
      // Drawing lines
      ctx.beginPath();
      // Horizontal lines
      ctx.moveTo(0,50);
      ctx.lineTo(600,50);
      ctx.stroke();
      ctx.moveTo(0,100);
      ctx.lineTo(600,100);
      ctx.stroke();
      // Diagonal lines
      ctx.moveTo(200,0);
      ctx.lineTo(200,200);
      ctx.stroke();
      ctx.moveTo(400,0);
      ctx.lineTo(400,200);
      ctx.stroke();


  }

  drawGraph()
  {
    var obj = {states: [], transitions:{}};

    if(this.firstState != undefined)
    {
      obj.states.push(this.firstState.name);
    }
    if(this.secondState != undefined)
    {
      obj.states.push(this.secondState.name);
    }

    var transitionJSON = {};

    transitionJSON[this.firstEvent.id] = [];
    transitionJSON[this.firstEvent.id].push(this.firstEvent.firstState.name);
    transitionJSON[this.firstEvent.id].push(this.firstEvent.secondState.name);

    if(this.secondEvent != undefined)
    {
      transitionJSON[this.secondEvent.id] = [];
      transitionJSON[this.secondEvent.id].push(this.secondEvent.firstState.name);
      transitionJSON[this.secondEvent.id].push(this.secondEvent.secondState.name);
    }

    obj.transitions = transitionJSON;


    var id = this.id.replace(/\s+/g, '');

    if (document.getElementById("Graph"+id) === null)
    {
      var canv = document.createElement("Canvas");  // Create canvas
      canv.id = 'Table'+ id // give id
      document.body.appendChild(canv);  // add canvas to document

    }
    else{
      var canv = document.getElementById("Graph"+id);
    }

    var ctx = canv.getContext("2d");
    var stateString = JSON.stringify(Object.keys(obj)[0])
    stateString = stateString + ":" + JSON.stringify(obj.states);
    ctx.canvas.width = stateString.length * 7;
    var numOfTransitions = Object.keys(obj.transitions).length;
    ctx.canvas.height = 45 + numOfTransitions * 45;
    ctx.font = "15px Arial";
    ctx.fillText(stateString, 10, 50);
    var i = 2
    for(var key in obj.transitions)
    {
      var tranString = JSON.stringify(key);
      tranString = tranString + ": " + JSON.stringify(obj.transitions[key]);
      ctx.fillText(tranString, 10, 40 * i);
      i = i + 1;
    }
  }
}
