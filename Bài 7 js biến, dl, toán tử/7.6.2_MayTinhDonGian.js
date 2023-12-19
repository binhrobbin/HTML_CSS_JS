function nutam() {
    if (document.getElementById('temp4').value !== '=') {
        document.getElementById('temp1').value = document.getElementById('manhinh').value;
        if (document.getElementById('temp1').value == '') {

                let nutcham = document.getElementById('manhinh').value + "-";
                let nutcham2 = document.getElementById('temp2').value + "-";
                document.getElementById('manhinh').value = nutcham;
                document.getElementById('temp2').value = nutcham2;
            // alert(document.getElementById('temp1').value)
            //     alert(nutcham2)

        }
        else if ((document.getElementById('temp2').value == '') && (document.getElementById('temp3').value !== '')) {
                let nutcham = document.getElementById('manhinh').value + "-";
                let nutcham2 = document.getElementById('temp2').value + "-";
                document.getElementById('manhinh').value = nutcham;
                document.getElementById('temp2').value = nutcham2;
                // alert(nutcham2)
        }
    }
}
function nutcham() {
    if (document.getElementById('temp4').value !== '=') {
        let nutcham = document.getElementById('manhinh').value + ".";
        let nutcham2 = document.getElementById('temp2').value + ".";
        document.getElementById('manhinh').value = nutcham;
        document.getElementById('temp2').value = nutcham2;
    }
}
function nut0(){
    if (document.getElementById('temp4').value !== '=') {
        let nut0 = document.getElementById('manhinh').value + 0;
        let nut02 = document.getElementById('temp2').value + 0;
        document.getElementById('manhinh').value = nut0;
        document.getElementById('temp2').value = nut02;
    }
}
function nut1(){
    if (document.getElementById('temp4').value !== '=') {
        let nut1 = document.getElementById('manhinh').value + 1;
        let nut12 = document.getElementById('temp2').value + 1;
        document.getElementById('manhinh').value = nut1;
        document.getElementById('temp2').value = nut12;
    }
}
function nut2(){
    if (document.getElementById('temp4').value !== '=') {
        let nut2 = document.getElementById('manhinh').value + 2;
        let nut22 = document.getElementById('temp2').value + 2;
        document.getElementById('manhinh').value = nut2;
        document.getElementById('temp2').value = nut22;
    }
}
function nut3(){
    if (document.getElementById('temp4').value !== '=') {
        let nut3 = document.getElementById('manhinh').value + 3;
        let nut32 = document.getElementById('temp2').value + 3;
        document.getElementById('manhinh').value = nut3;
        document.getElementById('temp2').value = nut32;
    }
}
function nut4(){
    if (document.getElementById('temp4').value !== '=') {
        let nut4 = document.getElementById('manhinh').value + 4;
        let nut42 = document.getElementById('temp2').value + 4;
        document.getElementById('manhinh').value = nut4;
        document.getElementById('temp2').value = nut42;
    }
}
function nut5(){
    if (document.getElementById('temp4').value !== '=') {
        let nut5 = document.getElementById('manhinh').value + 5;
        let nut52 = document.getElementById('temp2').value + 5;
        document.getElementById('manhinh').value = nut5;
        document.getElementById('temp2').value = nut52;
    }
}
function nut6(){
    if (document.getElementById('temp4').value !== '=') {
        let nut6 = document.getElementById('manhinh').value + 6;
        let nut62 = document.getElementById('temp2').value + 6;
        document.getElementById('manhinh').value = nut6;
        document.getElementById('temp2').value = nut62;
    }
}
function nut7(){
    if (document.getElementById('temp4').value !== '=') {
        let nut7 = document.getElementById('manhinh').value + 7;
        let nut72 = document.getElementById('temp2').value + 7;
        // alert(typeof (nut7))
        // let so7 = parseFloat(nut7)
        document.getElementById('manhinh').value = nut7;
        document.getElementById('temp2').value = nut72;
        // document.getElementById('7').value = nut7;
        // document.getElementById('8').value = '';
        // alert(typeof (so7))
    }
}
function nut8(){
    if (document.getElementById('temp4').value !== '=') {
        let nut8 = document.getElementById('manhinh').value + 8;
        let nut82 = document.getElementById('temp2').value + 8;
        // alert(typeof (nut8))
        // let so8 = parseFloat(nut8)
        document.getElementById('manhinh').value = nut8;
        document.getElementById('temp2').value = nut82;
        // alert(typeof (so8))
        // document.getElementById('8').value = nut8;
        // document.getElementById('7').value = '';
    }
}
function nut9(){
    if (document.getElementById('temp4').value !== '=') {
        let nut9 = document.getElementById('manhinh').value + 9;
        let nut92 = document.getElementById('temp2').value + 9;
        document.getElementById('manhinh').value = nut9;
        // alert(nut9);
        document.getElementById('temp2').value = nut92;
        // alert(nut92);
    }
}
function nutcong() {

        if (document.getElementById('temp1').value == '') {
            document.getElementById('temp1').value = document.getElementById('manhinh').value;
            let nutcong = document.getElementById('manhinh').value + '+';
            // alert(typeof (nutcong))
            document.getElementById('manhinh').value = nutcong;
            document.getElementById('temp2').value = '';
            document.getElementById('temp3').value = "+";
            // alert(document.getElementById('temp3').value)
            document.getElementById('temp4').value = "";
            // if (document.getElementById('temp1').value == '0') {
            // document.getElementById('temp1').value = document.getElementById('manhinh').value;
            // }
        }
        else {
            if (document.getElementById('temp3').value == '') {
                // alert(document.getElementById('temp1').value)
                let nutcong = document.getElementById('manhinh').value + '+';
                // alert(typeof (nutcong))
                document.getElementById('manhinh').value = nutcong;
                document.getElementById('temp2').value = '';
                document.getElementById('temp3').value = "+";
                // alert(document.getElementById('temp3').value)
                document.getElementById('temp4').value = "";
                // alert(document.getElementById('temp3').value)
            }
        }
}
function nuttru() {
    if (document.getElementById('temp1').value == '') {
        document.getElementById('temp1').value = document.getElementById('manhinh').value;
        let nutcong = document.getElementById('manhinh').value + '+';
        document.getElementById('manhinh').value = nutcong;
        document.getElementById('temp2').value = '';
        document.getElementById('temp3').value = "+";
        document.getElementById('temp4').value = "";
    }
    else {
        if (document.getElementById('temp3').value == '') {
            // alert(document.getElementById('temp1').value)
            let nuttru = document.getElementById('manhinh').value + '-';
            document.getElementById('manhinh').value = nuttru;
            document.getElementById('temp2').value = '';
            document.getElementById('temp3').value = "-";
            document.getElementById('temp4').value = "";
        }
    }
}
function nutnhan(){
    if (document.getElementById('temp1').value == '') {
        document.getElementById('temp1').value = document.getElementById('manhinh').value;
        let nutcong = document.getElementById('manhinh').value + '+';
        document.getElementById('manhinh').value = nutcong;
        document.getElementById('temp2').value = '';
        document.getElementById('temp3').value = "+";
        document.getElementById('temp4').value = "";
    }
    else {
        if (document.getElementById('temp3').value == '') {
            let nutnhan = document.getElementById('manhinh').value + 'x';
            document.getElementById('manhinh').value = nutnhan;
            document.getElementById('temp2').value = '';
            document.getElementById('temp3').value = "x";
            document.getElementById('temp4').value = "";
        }
    }
}
function nutchia(){
    if (document.getElementById('temp1').value == '') {
        document.getElementById('temp1').value = document.getElementById('manhinh').value;
        let nutcong = document.getElementById('manhinh').value + '+';
        document.getElementById('manhinh').value = nutcong;
        document.getElementById('temp2').value = '';
        document.getElementById('temp3').value = "+";
        document.getElementById('temp4').value = "";
    }
    else {
        if (document.getElementById('temp3').value == '') {
            let nutchia = document.getElementById('manhinh').value + '/';
            document.getElementById('manhinh').value = nutchia;
            document.getElementById('temp2').value = '';
            document.getElementById('temp3').value = "/";
            document.getElementById('temp4').value = "";
        }
    }
}
function nutReset(){
    document.getElementById('temp1').value = '';
    document.getElementById('temp2').value = '';
    document.getElementById('temp3').value = '';
    document.getElementById('temp4').value = '';
}
function xoa1(){
        if (document.getElementById('temp4').value !== '=') {
            if (document.getElementById('temp2').value !== '') {
                let xoamh2 = document.getElementById('temp2').value;
                // alert(xoamh2)
                let xoa2 = xoamh2.slice(0, -1);
                document.getElementById('temp2').value = xoa2;

                let xoamh = document.getElementById('manhinh').value;
                let xoa = xoamh.slice(0, -1);
                document.getElementById('manhinh').value = xoa;
            }

            else if (document.getElementById('temp3').value !== '') {
                let xoamh3 = document.getElementById('temp3').value;
                let xoa3 = xoamh3.slice(0, -1);
                document.getElementById('temp3').value = xoa3;
                // alert(xoa3)
                // alert(document.getElementById('temp1').value)
                let xoamh = document.getElementById('manhinh').value;
                let xoa = xoamh.slice(0, -1);
                document.getElementById('manhinh').value = xoa;
                }
                else
                    if(document.getElementById('temp1').value !== '') {
                        let xoamh4 = document.getElementById('temp1').value;
                        let xoa4 = xoamh4.slice(0, -1);
                        document.getElementById('temp1').value = xoa4;
                        // alert(xoa4)

                        let xoamh = document.getElementById('manhinh').value;
                        let xoa = xoamh.slice(0, -1);
                        document.getElementById('manhinh').value = xoa;

                        if (document.getElementById('temp1').value == '') {
                            // alert(document.getElementById('temp1').value);
                            document.getElementById('manhinh').value = '';
                        }
                    }
        }

        // let xoamh3 = document.getElementById('temp1').value;
        // // alert(xoamh3)
        // let xoa3 = xoamh3.slice(0,-1);
        // if (xoa3 == ''){
        //     xoa3 = 0
        //     let them0 = document.getElementById('manhinh').value = document.getElementById('manhinh').value +xoamh3+', ' + 0;
        //     document.getElementById('manhinh').value = them0;
        // }
        // document.getElementById('temp1').value= xoa3;
        // alert(xoa3)
}
function nutbang(){
    if (document.getElementById('temp4').value !== '=') {
        if (document.getElementById('manhinh').value !== '') {
            if (document.getElementById('temp2').value !== '') {
                if (document.getElementById('temp3').value !== '') {
                    // document.getElementById('temp2').value = document.getElementById('manhinh2').value;
                    let tem1 = document.getElementById('temp1').value;
                    let t1 = parseFloat(tem1)
                    // alert(tem1)
                    let tem2 = document.getElementById('temp2').value;
                    let t2 = parseFloat(tem2)
                    // alert(tem2)
                    let tem3 = document.getElementById('temp3').value;
                    // alert(tem3)

                    let Result;
                    if (tem3 == "+") {
                        Result = (t1 + t2);
                    } else if (tem3 == "-") {
                        Result = (t1 - t2);
                    } else if (tem3 == "x") {
                        Result = (t1 * t2);
                    } else if (tem3 == "/") {
                        Result = (t1 / t2);
                    } else {
                        document.getElementById('temp1').value = document.getElementById('manhinh').value;
                        Result = document.getElementById('temp1').value;
                    }
                    let nutbang = document.getElementById('manhinh').value + ' = ';
                    document.getElementById('manhinh').value = nutbang + Result;
                    // alert(Result);
                    // document.getElementById('manhinh').value = '';
                    document.getElementById('temp1').value = Result;
                    document.getElementById('temp2').value = '';
                    document.getElementById('temp3').value = '';
                    document.getElementById('temp4').value = '=';
                    // alert(document.getElementById('temp1').value);
                    // alert(document.getElementById('temp2').value);
                } else {
                    document.getElementById('kq').innerHTML = "Nhâp thêm số vào bạn êii";
                }
            }
            else {
                document.getElementById('kq').innerHTML = "Nhâp thêm số vào bạn êii";
            }
        }
        else {
            document.getElementById('kq').innerHTML = "Nhâp thêm số vào bạn êii";
        }
    }
    // document.getElementById('kq').innerHTML = 'kết quả là: ' + Result;

    // document.write(tong);
    // document.getElementById('kq').innerHTML = "kết quả là: "+tong;


}
function rachuot(){
    document.getElementById('kq').innerHTML = "";
}