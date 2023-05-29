function generateRandomNumbers() {
    var numbers = [];
    while (numbers.length < 3) {
        var randomNum = Math.floor(Math.random() * 10) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers;
}

function checkNumbers() {
    var inputs = document.querySelectorAll(".number-input");
    var userNumbers = [];
    for (var i = 0; i < inputs.length; i++) {
        userNumbers.push(parseInt(inputs[i].value));
    }

    var winningNumbers = generateRandomNumbers();

    var matches = 0;
    for (var j = 0; j < userNumbers.length; j++) {
        if (winningNumbers.includes(userNumbers[j])) {
            matches++;
        }
    }

    var result = document.getElementById("result");
    if (matches === 3) {
        result.innerHTML = "恭喜您中了頭獎";
    } 
    else if (matches === 2) {
        result.innerHTML = "恭喜您中了貳獎";
    } 
    else if (matches === 1) {
        result.innerHTML = "恭喜您中了參獎";
    }
    else {
        result.innerHTML = "QQ，你沒有中獎";
    }

    var prize = document.getElementById("prize");
    prize.innerHTML = "中獎獎金: " + calculatePrize(matches); //(2)
}

function calculatePrize(matches) {
    var prizeAmount = 0;
    if (matches === 3) {
        prizeAmount = 5000; 
    } 
    else if (matches === 2) {
        prizeAmount = 2000; 
    } 
    else if (matches === 1) {
        prizeAmount = 1000; 
    }
    return prizeAmount;
    }
function check(){   //(5)
    var msg;
    if(confirm("請確定輸入的數字並沒有重複或不在範圍內")){
        msg="請繼續遊戲"
    }
    else{
        msg="請重新輸入";
    }
    document.getElementById("result").innerHTML=msg;
}
