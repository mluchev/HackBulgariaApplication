$(document).ready(function() {
    var canvas = $('#canvas')[0],
        context = canvas.getContext('2d'),
        numClick = 0,
        currentPoints = [{}, {}, {}],
        currentCanvasTrianglesData = [];

    fillDropdownWithSavedCanvasesNames();

    $("#canvas").click(function(e) {
        currentPoints[numClick].x = e.offsetX;
        currentPoints[numClick].y = e.offsetY;

        if(numClick === 2) {
            drawTriangle(currentPoints, context);
            saveTriangleDataToCurrentCanvas(currentCanvasTrianglesData, currentPoints, context.fillStyle);
            numClick = 0;
        } else {
            numClick++;
        }
    });

    $('#triangleColorInput').on('change', function() {
        changeFillingColor(this.value, context);
    });

    $('#saveCanvas').on('click', function() {
        invokeSaveCanvasPrompt(currentCanvasTrianglesData);
    });

    $('#loadCanvas').on('click', function(name) {
        var selectedSaveName = $("#savedCanvases option:selected").text();

        clearCanvas(context);
        clearCanvasData();

        loadCanvas(selectedSaveName, currentCanvasTrianglesData, context);
    });

    $("#clearCanvas").on('click', function(){
        clearCanvas(context);
        clearCanvasData();
    });

    function clearCanvasData() {
        numClick = 0;
        currentPoints = [{}, {}, {}];
        currentCanvasTrianglesData = [];
    }
});
