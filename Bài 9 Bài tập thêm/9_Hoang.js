let checkbox = document.getElementsByName('txtcheck1');

function gfc () {
    let a = Math.floor(Math.random() *3);
    if (checkbox[0].checked === true && checkbox[1].checked === true && checkbox[2].checked === true) {
        checkbox[a].checked = false;
    }
}

function gfc1 () {
    let a = Math.floor(Math.random() *3);
    if (checkbox[1].checked === true && checkbox[2].checked === true) {
        checkbox[2].checked = false;
    }
}

function gfc2 () {
    let a = Math.floor(Math.random() *3);
    if (checkbox[0].checked === true && checkbox[2].checked === true) {
        checkbox[0].checked = false;
    }
}

function gfc3 () {
    let a = Math.floor(Math.random() *3);
    if (checkbox[0].checked === true && checkbox[1].checked === true ) {
        checkbox[1].checked = false;
    }
}
