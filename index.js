function distanceFromHqInBlocks(val) {
    if (val>=42) {
        return val-42;
    } else {return 42-val;}
}

function distanceFromHqInFeet(val) {
    if (val>=42) {return (val-42)*264;} else {
        return (42-val) *264; 
    }
}

function distanceTravelledInFeet(num1,num2) {
    if (num2>num1) {return (num2-num1) * 264;}
    else {return (num1-num2) * 264;}
}

function calculatesFarePrice(start,destination) {
    let diff = distanceTravelledInFeet(start,destination);
    // switch(diff) {
    //     case (diff <= 400):
    //         return 0;
    //     case diff>= 400 && diff <= 2000:
    //         return ((diff-400)*0.02);
    //     case diff>2000 && diff <= 2500:
    //         return 25;
    //     case diff > 2500:
    //         return 'cannot travel that far';
    // }
    if (diff<=400) {
        return 0;
    } else if (diff >400 && diff <=2000) {
        return ((diff-400)*0.02);
    } else if (diff>2000 && diff <=2500) {
        return 25;
    } else {return 'cannot travel that far';}
}