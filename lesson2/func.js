function someSum(n, stepSum = 1, limitSum) {
    let sum = 0;
    let i = 0;
    while (i <= n) {
        if (i % 3 == 0 && (sum + i * i) % 10 !== 0){
            sum = sum + i * i;
            if (sum > limitSum){
                console.log("limit reached of iteration number");
                return;
            }
            i = i + stepSum;
            continue;
        }else if (i % 3 == 0 && (sum + i * i) % 10 == 0){
            i = i + stepSum;
            continue;
        }

        if ((sum + i) % 10 == 0) {
            i = i + stepSum;
            continue;
        }
        sum = sum + i;
        i = i + stepSum;
        if (sum > limitSum){
            console.log("limit reached of iteration number");
            return;
        }
    }
    console.log(sum);
}

someSum(10, 1, 163);