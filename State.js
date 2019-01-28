class State {
  constructor(name, image) {
    this.name = name;
    if(image != undefined)
    {
      this.imageWidth = image.width;
  	  this.imageHeight = image.height;
  	  this.image = image.image;
    }
  }

  update()
  {

  }

  draw(id)
  {
    console.log(id + " : " + this.image)
	  if(this.image != undefined)
	  {
		var c = document.getElementById(id);
		var ctx=c.getContext("2d");
    c.width="100";
    c.height="100";
		ctx.drawImage(this.image, 0 ,0, this.imageWidth, this.imageHeight,
								  0, 0, 100, 100);
	  }
  }
}
