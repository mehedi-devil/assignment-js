//
// Assignment submitted by Md. Mehedi Hasan
// 5 March,2021

// Problem 1 : feetToMile 
function feetToMile(feet) {

    const mile = feet / 5280;
    return mile;
}

var result = feetToMile(50000);
console.log("Your result is : " + result.toFixed(2));



// Problem 2 : woodCalculator
function woodCalculator(chair, table, bedstead) {
    var chair = chair * 1;
    var table = table * 3;
    var bedstead = bedstead * 5;

    var totalCubic = chair + table + bedstead;
    return totalCubic;
}

var result = woodCalculator(12, 12, 8);
console.log("Cubic feet of wood require : " + result)



// Problem 3: brickCalculator
function brickCalculator(floorNumber) {
    var perFloor = floorNumber * 1000;
    let totalBrick;

    if (floorNumber > 0 && floorNumber <= 10) {
        totalBrick = perFloor * 15;
    }
    else if (floorNumber > 10 && floorNumber <= 20) {
        totalBrick = (perFloor * 12) + 30000;
    }
    else if (floorNumber > 20) {
        totalBrick = (perFloor * 10) + 70000;
    }
    else {
        console.log('Enter a valid number')
    }
    return totalBrick;
}

var result = brickCalculator(50);
console.log("Answer of Total Bricks: " + result);



// problem 4 : tinyFriend
function tinyFriend(friend) {

    var shortestName = friend[0];

    for (var i = 0; i < friend.length; i++) {
        if (shortestName.length > friend[i].length) {
            shortestName = friend[i];
        }
    }
    return shortestName;
}

var result = tinyFriend(['Abul Mal', 'Kauya Kagu', 'Kalo Biral', 'Murgi Chur', 'Khela Hobe', 'Taheri Gas']);
console.log("The Shortest Name is : " + result);