// Exercise 1 Section
function printOdds(count) {
    for (let i = 0; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printOdds(12);

// Exercise 2 Section
function checkAge(age) {
    if (age < 16) {
        console.log("Sorry, but you need to wait until you're 16.");
    } else if (age >= 16) {
        console.log("You can drive!")
    }
}
checkAge(17);

// Exercise 3
function quadrant(x, y) {
    if (x < 0 && y > 0) {
        console.log("Quadrant 2");
    } else if (x < 0 && y < 0) {
        console.log("Quadrant 3");
    } else if (x > 0 && y > 0) {
        console.log("Quadrant 1");
    } else if (x > 0 && y < 0) {
        console.log("Quadrant 4");
    } 
}
quadrant(5, -6);

// Exercise 4
function triangle(a, b, c) {
    if (a > c + b || c > b + a || b > a + c) {
        console.log("Invalid triangle.")
    } else if (a == b && a == c) {
        console.log("Equilateral triangle.")
    } else if (a == b && a != c || b == c && b != c) {
        console.log("Isolsceles triangle.")
    } else if (a != b && b != c) {
        console.log("Scalene triangle.")
    }
}
triangle(1, 2, 2); //should be isosceles
triangle(1, 1, 2) //should be invalid //not working
triangle(2, 2, 2) //should be equilateral
triangle(2, 3, 5) //should be scalene

//Exercise 5
function dataPlan(planLimit, day, usage) {
    let expectedAvg = planLimit / 30;
    let actualAvg = usage / day; 
    let daysLeft = 30 - day;
    let amountOverUnder = Math.abs(planLimit - (actualAvg * 30)).toFixed(2);
    let dailyUsageLeft = (planLimit - usage) / daysLeft; 
    console.log(`${day} days used, ${daysLeft} days remaining.\nAverage daily use: ${actualAvg.toFixed(2)} GB/day.`)
    if (actualAvg > expectedAvg) {
        console.log(`You are EXEEDING your average daily use (${expectedAvg.toFixed(2)} GB/day), continuing this high usage, you will exceed your data plan by ${amountOverUnder} GB. To keep your plan, please use no more than ${dailyUsageLeft.toFixed(2)} GB/day.`)
    } else if (actualAvg < expectedAvg) {
        console.log(`You are not exceeding your average daily use (${expectedAvg.toFixed(2)} GB/day), you will have ${amountOverUnder} GB left at the end of the month. You can use ${dailyUsageLeft.toFixed(2)} GB/day for the rest of the month.`)
    }
}
dataPlan(100, 15, 56);
dataPlan(100, 15, 40);