function doitien() {

    let Amount = document.getElementById('1').value
    let from = document.getElementById('from').value
    let to = document.getElementById('to').value
    let Result;

    if (from == "usd" && to == "vnd") {
        Result = "Result: " + (Amount * 24000) + " Đ";
    }
    else if (from == "vnd" && to == "usd") {
        Result = "Result: " + (Amount /24000) + " $";
        }
        else if (from == "vnd"){
        Result = "Result: " + Amount + " Đ";
    }
        else {
        Result = "Result: " + Amount + " $";
    }
    document.getElementById('ketqua').innerHTML = 'Result: ' + Result;

}