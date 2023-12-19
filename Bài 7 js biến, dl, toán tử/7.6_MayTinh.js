function cong(){
    let ipa = document.getElementById('a').value;
    let a = parseFloat(ipa);
    let ipb = document.getElementById('b').value;
    let b = parseFloat(ipb);
    let tong = a + b;
    document.getElementById('Result').innerHTML = "Result Addition: "+tong;
}

function tru(){
    let ipa = document.getElementById('a').value;
    let a = parseFloat(ipa);
    let ipb = document.getElementById('b').value;
    let b = parseFloat(ipb);
    let tru = a - b;
    document.getElementById('Result').innerHTML = "Result Subtraction: "+tru;
}

function nhan(){
    let ipa = document.getElementById('a').value;
    let a = parseFloat(ipa);
    let ipb = document.getElementById('b').value;
    let b = parseFloat(ipb);
    let nhan = a * b;
    document.getElementById('Result').innerHTML = "Result Multiplication: "+nhan;
}

function chia(){
    let ipa = document.getElementById('a').value;
    let a = parseFloat(ipa);
    let ipb = document.getElementById('b').value;
    let b = parseFloat(ipb);
    let chia = a / b;
    document.getElementById('Result').innerHTML = "Result Division: "+chia;
}