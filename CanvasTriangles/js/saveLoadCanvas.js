function saveCanvas(name, currentCanvasTrianglesData) {
    localStorage[name] = JSON.stringify(currentCanvasTrianglesData);
}

function loadCanvas(name, currentCanvasTrianglesData, ctx) {
    var loadedCanvasTriangles = JSON.parse(localStorage[name]),
        drawingColorBeforeLoad = ctx.fillStyle;

    loadedCanvasTriangles.forEach(function(triangle) {
        ctx.fillStyle = triangle.color;
        drawTriangle(triangle.points, ctx);

        currentCanvasTrianglesData.push(triangle);
    });

    ctx.fillStyle = drawingColorBeforeLoad;
}

function invokeSaveCanvasPrompt(currentCanvasTrianglesData) {
    var canvasName = prompt("Please enter your canvas name", "picasso");
    if (canvasName != null) {
        saveCanvas(canvasName, currentCanvasTrianglesData);
        addNewSavedCanvasToDropdowm(canvasName);
    }
}

function fillDropdownWithSavedCanvasesNames() {
    for (var i = 0; i < localStorage.length; i++){
        $('#savedCanvases').append('<option>' +  localStorage.key(i) + '</option>');
    }

}

function addNewSavedCanvasToDropdowm(canvasName) {
    $('#savedCanvases').append('<option>' +  canvasName + '</option>');
}

function saveTriangleDataToCurrentCanvas(currentCanvasTrianglesData, trianglePoints, triangleColor) {
    var currentTrianglePoints = [];

    trianglePoints.forEach(function(point) {
        currentTrianglePoints.push($.extend({}, point));
    });

    currentCanvasTrianglesData.push({
        points : currentTrianglePoints,
        color: triangleColor
    });
}
