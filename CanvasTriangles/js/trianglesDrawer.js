function drawTriangle(points, ctx) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    ctx.lineTo(points[1].x, points[1].y);
    ctx.lineTo(points[2].x, points[2].y);
    ctx.fill();

    drawAreaLabel(points, ctx);
}

function drawAreaLabel(points, ctx) {
    var centroid = calculateTriangleCentroid(points),
        area = calculateTriangleArea(points),
        fontSize = calculateFontSize(area),
        drawingColor = ctx.fillStyle;

    ctx.fillStyle = calculateContrastingColor(ctx.fillStyle);
    ctx.font = fontSize + 'px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(area, centroid.x, centroid.y);

    ctx.fillStyle = drawingColor;
}

function changeFillingColor(newColor,ctx) {
    ctx.fillStyle = newColor;
}

function clearCanvas(ctx) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
