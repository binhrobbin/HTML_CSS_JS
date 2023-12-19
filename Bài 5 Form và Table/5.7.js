function laydl(){
let tuoi = document.getElementById('1').value;
console.log("1-what is your age range?  "+tuoi);
let luong = document.getElementById('2').value;
    console.log("2-what is your yearly income range?  "+luong);
let nam1 = document.getElementById('nam').checked;
    let nu1 = document.getElementById('nu').checked;
    if (nam1 == true) {
        console.log("3-Giới tính: Nam");
    }
    else

        if (nu1 == true) {
            console.log("3-Giới tính: Nữ");
        }
        else
            console.log("3-Chưa nhâp giới tính");

let sp1 = document.getElementById('c1').checked;
let sp2 = document.getElementById('c2').checked;
let sp3 = document.getElementById('c3').checked;
    console.log("4- Sản phẩm:");
if (sp1 == true) {
    console.log("Product 1");
}
if (sp2 == true) {
    console.log("Product 2");
}
if (sp3 == true) {
    console.log("Product 3");
}
if (sp1 == false && sp2 ==false){
    if (sp3 !== true){
        console.log(" Chưa chọn sản phẩm nào");
    }
}

let b11 = document.getElementById('b1').checked;
    let b22 = document.getElementById('b2').checked;
    let b33 = document.getElementById('b3').checked;
    if (b11 == true) {
        console.log("5-Thời gian: Daily");
    }

    if (b22 == true) {
        console.log("5-Thời gian: weekly");
    }
    if (b33 == true) {
        console.log("5-Thời gian: Monthly");
    }
    if (b33 !== true && b11 !==true) {
        if(b22 !==true) {
            console.log("5-Chưa nhâp giá trị gì");
        }
    }
let dola11 = document.getElementById('dola').value;
    let dola22 = document.getElementById('dola2').value;
    console.log("6-What would you pay for the new product?  "+dola11+'.'+dola22);
let vanban2 = document.getElementById('vanban').value;
    console.log("7-What futures would you like to see in the new product.: "+vanban2);

let d1 = document.getElementById('d1').checked;
    let d2 = document.getElementById('d2').checked;
    let d3 = document.getElementById('d3').checked;
    let d4 = document.getElementById('d4').checked;
    console.log("8-Our products are priced fairly:");
    if (d1 == true) {
        console.log("Strongly Disagree");
    }
    if (d2 == true) {
        console.log("Disagree");
    }
    if (d3 == true) {
        console.log("Agree");
    }
    if (d4 == true) {
        console.log("Strongly Agree");
    }
    if (d1 !== true && d2 !==true) {
        if(d3 !==true && d4 !==true) {
            console.log(" Chưa nhâp giá trị gì");
        }
    }

let e1 = document.getElementById('e1').checked;
    let e2 = document.getElementById('e2').checked;
    let e3 = document.getElementById('e3').checked;
    let e4 = document.getElementById('e4').checked;
    console.log("9-Our product are high quality:");
    if (e1 == true) {
        console.log("Strongly Disagree");
    }
    if (e2 == true) {
        console.log("Disagree");
    }
    if (e3 == true) {
        console.log("Agree");
    }
    if (e4 == true) {
        console.log("Strongly Agree");
    }
    if (e1 !== true && e2 !==true) {
        if(e3 !==true && e4 !==true) {
            console.log(" Chưa nhâp giá trị gì");
        }
    }

let f1 = document.getElementById('f1').checked;
    let f2 = document.getElementById('f2').checked;
    let f3 = document.getElementById('f3').checked;
    let f4 = document.getElementById('f4').checked;
    console.log("10-You would recommend our product to a friend or coworker:");
    if (f1 == true) {
        console.log("Strongly Disagree");
    }
    if (f2 == true) {
        console.log("Disagree");
    }
    if (f3 == true) {
        console.log("Agree");
    }
    if (f4 == true) {
        console.log("Strongly Agree");
    }
    if (f1 !== true && f2 !==true) {
        if(f3 !==true && f4 !==true) {
            console.log(" Chưa nhâp giá trị gì");
        }
    }
}
