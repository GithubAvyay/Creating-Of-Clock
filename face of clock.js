function drawClock() {
  drawFace(ctx, radius);
}
function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, 'grey');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, 'grey');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.09, 0, 2*Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}
