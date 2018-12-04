class NStateMEvent
{
  constructor(id, state)
  {
    this.id = id;
    this.currentState = state;
    this.states = [];
    this.states.push(state);
    this.allEvents = [];
    this.availableEvents = [];
    this.draw()
  }

  addState(state)
  {
    this.states.push(state);
  }

  addEvent(event)
  {
    this.allEvents.push(event);
  }

  getAvailableEvents(state)
  {
    var tempEvents = [];

    for (var i = 0; i < this.allEvents.length; i++) {
      if(this.allEvents[i].firstState.name === state.name)
      {
        tempEvents.push(this.allEvents[i]);
      }
      else if(this.allEvents[i].secondState.name === state.name && this.allEvents[i].twoWay)
      {
        tempEvents.push(this.allEvents[i]);
      }
    }
    return tempEvents;

  }

  updateAvailableEvents(show)
  {
    this.availableEvents = [];
    for (var i = 0; i < this.allEvents.length; i++) {
      this.allEvents[i].hideTrigger();
      if(this.allEvents[i].firstState.name === this.currentState.name)
      {
        this.availableEvents.push(this.allEvents[i]);
      }
      else if(this.allEvents[i].secondState.name === this.currentState.name && this.allEvents[i].twoWay)
      {
        this.availableEvents.push(this.allEvents[i]);
      }
    }
    if(show === true)
    {
      for (var i = 0; i < this.availableEvents.length; i++) {
        this.availableEvents[i].showTrigger(this.currentState.name);
      }
    }
  }

  changeState(event)
  {
    this.currentState = event.transition(this.currentState);
  }

  update()
  {
    this.currentState.update()
  }

  draw()
  {

    this.currentState.draw()
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

      var numOfRows = 0;
      for(var i = 0; i < this.states.length; i++)
      {
        var eventsAvailable = this.getAvailableEvents(this.states[i]);
        for (var j = 0; j < eventsAvailable.length; j++) {
          numOfRows++;
        }
      }
      canv.height = numOfRows * 50 + 50; //get original canvas height
      canv.width = 600;  // get original canvas width
      canv.style = "border:1px solid #d3d3d3;"  // Canvas style
      var c = document.getElementById("Table"+id);
      console.log(c)
      var ctx=canv.getContext("2d");
      ctx.font = "20px Arial";
      // Left Column Text
      ctx.fillText("Current State",10,30);

      // Middle Column Text
      ctx.fillText("Event",210,30);

      // Right Column Text
      ctx.fillText("Next State",410,30);

      numOfRows = 0;
      for(var i = 0; i < this.states.length; i++)
      {
        var eventsAvailable = this.getAvailableEvents(this.states[i]);
        for (var j = 0; j < eventsAvailable.length; j++) {
          ctx.fillText(this.states[i].name,10,numOfRows * 50 + 80);
          ctx.fillText(eventsAvailable[j].id, 210, numOfRows * 50 + 80);
          ctx.fillText(eventsAvailable[j].getOutcome(this.states[i]).name, 410, numOfRows * 50 + 80);
          numOfRows++;
        }
      }

      /*

      // Left
      ctx.fillText(this.firstState.name,10,80);
      ctx.fillText(this.secondState.name,10,130);
      // Middle
      ctx.fillText(this.firstEvent.id,210,80);
      if(this.secondEvent == null)
      {
        ctx.fillText(this.firstEvent.id,210,130);
      }
      else {
        ctx.fillText(this.secondEvent.id,210,130);
      }

      // Right
      ctx.fillText(this.firstState.name,410,80);
      ctx.fillText(this.secondState.name,410,130);

      */

      // Drawing lines
      ctx.beginPath();

      for (var i = 0; i < numOfRows; i++) {
        ctx.moveTo(0,i * 50 + 50);
        ctx.lineTo(600,i * 50 + 50);
        ctx.stroke();
      }

      /*

      // Horizontal lines
      ctx.moveTo(0,50);
      ctx.lineTo(600,50);
      ctx.stroke();
      ctx.moveTo(0,100);
      ctx.lineTo(600,100);
      ctx.stroke();

      */

      // Diagonal lines
      ctx.moveTo(200,0);
      ctx.lineTo(200,numOfRows * 50 + 50);
      ctx.stroke();
      ctx.moveTo(400,0);
      ctx.lineTo(400,numOfRows * 50 + 50);
      ctx.stroke();


  }

}
