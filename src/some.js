function sum(...numbers){
    var sum=0;
    for (var i = 0; i < numbers.length; i++) {
        sum+=numbers[i];
    }

    return sum;
}

function avg(...numbers){
    var avg = sum(...numbers)/numbers.length;
    return avg;
}

export default avg;