exports.beerAndFries = function(beersAndFriesScores) {
    var beersScores = [],
        friesScores = [],
        maxPairScore;

    splitBeersAndFriesScores(beersAndFriesScores, beersScores, friesScores);
    beersScores.sort(compareScores);
    friesScores.sort(compareScores);

    maxPairScore = sumOfMultiplications(beersScores, friesScores);

    return maxPairScore;
}

function splitBeersAndFriesScores(beersAndFriesScores, beersScores, friesScores) {
    beersAndFriesScores.forEach(function(item) {
        if(item.type === "beer"){
            beersScores.push(item.score);
        } else if(item.type === "fries") {
            friesScores.push(item.score);
        }
    })
}

function sumOfMultiplications(beersScores, friesScores) {
    var sum = 0;

    beersScores.forEach(function(item, index) {
        sum += item * friesScores[index];
    });

    return sum;
}

function compareScores(score1, score2) {
    if (score1 > score2) {
        return 1;
    } else if (score1 < score2) {
        return -1;
    } else {
        return 0;
    }
}
