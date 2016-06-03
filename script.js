
var xpos;
var ypos;
var health;
var ammo;
var money;

var player;

var area;

function startGame() {
  gameArea.start();
  
  xpos = 0;
  ypos = 0;
  health = 100;
  ammo = 90;
  money = 0;
  
  player = new component(30, 30, "blue", 100, 100, 1);
  
  area = 1;
}

var gameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 1280;
    this.canvas.height = 560;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    window.setInterval(updateGame, 10);
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};

function component(width, height, color, x, y, rotation, type) {
  this.type = type;
  if (this.type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.rotation = rotation;
  this.update = function() {
    ctx = gameArea.context;
    if (this.type == "image") {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
};

function updateGame() {
  gameArea.clear();
  
  if (area == 1) {
    city();
  }
}

function city() {
  xpos = player.x;
  ypos = player.y;
  
  player.update();
  player.newPos();
}
