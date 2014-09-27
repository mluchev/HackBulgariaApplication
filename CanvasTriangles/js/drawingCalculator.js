function calculateTriangleArea(points) {
    return Math.floor(0.5 * Math.abs((points[0].x - points[2].x) * (points[1].y - points[0].y)
        - (points[0].x - points[1].x) * (points[2].y - points[0].y)));
}

function calculateTriangleCentroid(points) {
    var center = {};

    center.x = (points[0].x + points[1].x + points[2].x) / 3;
    center.y = (points[0].y + points[1].y + points[2].y) / 3;

    return center;
}

function calculateContrastingColor(hexBackgroundColor) {
    var colorNum = parseInt(hexBackgroundColor.replace(/#/g, ''), 16),
        whiteNum = parseInt("ffffff", 16),
        blackNum = parseInt("000000", 16);

    return (whiteNum - colorNum > colorNum - blackNum) ?   "#fff" : "#000";
}

function calculateFontSize(area) {
    // calculation of the font-size
    // based on the radius of the proportion between the incircle radius and the triangle area
    return  Math.floor(Math.sqrt(area / 3 * Math.sqrt(3)) / 3) ;
}