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
    this.currentState.draw();
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
      console.log(c)
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
      ctx.fillText(this.firstState.name,410,80);
      ctx.fillText(this.secondState.name,410,130);
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
}
