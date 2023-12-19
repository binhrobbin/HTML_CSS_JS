function year() {
    var namnhuan = document.getElementById("year").value
    if ((namnhuan % 4 == 0 && namnhuan % 100 != 0) || (namnhuan % 400 == 0)) {
        alert(namnhuan + " là năm nhuận.");
    } else {
        alert(namnhuan + " không là năm nhuận.");
    }
}