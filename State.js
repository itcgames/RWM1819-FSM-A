class State {
  constructor(name, image) {
    this.name = name;
    this.imageWidth = image.width;
	  this.imageHeight = image.height;
	  this.image = image.image;
  }

  draw()
  {
    var c = document.getElementById("canvas");
    var ctx=c.getContext("2d");
    ctx.drawImage(this.image, 0 ,0);
    console.log("Draw")
  }
}
