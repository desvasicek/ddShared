function init() {
	var boing = new Audio('boing.wav')
	var canvas = document.getElementById("c");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	var ctx = canvas.getContext("2d");
		var x = canvas.width/2
		var y = canvas.height-30
		var dx = 2
		var dy = -2
		var radius = 10
		var snakex = canvas.width/4
		var snakey = canvas.height-20
		var snakedx = 4
		var snakedy = 4
		var snakeradius = 10
	function drawBall() {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI*2);
		ctx.fillStyle = "#0095DD";
		ctx.fill();
		ctx.closePath();
	}
	function drawSnake() {
		ctx.beginPath();
		ctx.arc(snakex, snakey, snakeradius, 0, Math.PI*2);
		ctx.fillStyle = "#006EDD";
		ctx.fill();
		ctx.closePath();
	}
	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawBall();
		drawSnake();
		if (Math.round(snakex) == Math.round(x) && Math.round(snakey) == Math.round(y)) {
			snakeradius = snakeradius + 1
		}
		if(x + dx > canvas.width-radius || x + dx < radius) {
			dx = -dx;
		}
		if(y + dy > canvas.height-radius || y + dy < radius) {
			dy = -dy;
		}
		x += dx;
		y += dy;
	}

	document.onkeydown = function keypress() {
		if (event.key == 'ArrowLeft') {
			snakex -= snakedx;
		}
		if (event.key == 'ArrowRight') {
			snakex += snakedx;
		}
		if (event.key == 'ArrowUp') {
			snakey -= snakedy;
		}
		if (event.key == 'ArrowDown') {
			snakey += snakedy;
		}
	}
	function start(evt) {
		while (!evt.pageX == x) {
			if (x > evt.pageX) {
				x = x - dx;
			} else {
				x = x + dx;
			}
		}
		while(!evt.pageY == y) {
			if (y > evt.pageY) {
				y = y - dy
			} else {
				y = y + dy
			}
		}
	}
		function end(evt) {
		while (!evt.pageX == x) {
			if (x > evt.pageX) {
				x = x - dx;
			} else {
				x = x + dx;
			}
		}
		while(!evt.pageY == y) {
			if (y > evt.pageY) {
				y = y - dy
			} else {
				y = y + dy
			}
		}
	}
	canvas.addEventListener("touchstart", start);
	canvas.addEventListener('touchend', end)
	setInterval(draw, 40);
	var theme = new Audio('theme.wav')
	theme.play()
	theme.loop = true
}
