function check(){
    let a = parseInt(document.getElementById('1').value);
    let b = parseInt(document.getElementById('2').value);
    let c = parseInt(document.getElementById('3').value);
    let d = parseInt(document.getElementById('4').value);

    if (a == b && a == c && a==d)
        document.getElementById('kq').innerHTML = '4 số bạn nhập bằng nhau'
    else {
        let count = 0;
        if (a > b && a > c && a > d) {
            if (b >= c && b >= d) document.getElementById('kq').innerHTML = b + ' lớn thứ 2'
            if (c >= b && c >= d) document.getElementById('kq').innerHTML = c + ' lớn thứ 2'
            if (d >= b && d >= c) document.getElementById('kq').innerHTML = d + ' lớn thứ 2'
            // alert('a')
            count ++;
        }
        if (b > a && b > c && b > d) {
            if (a >= c && a >= d) document.getElementById('kq').innerHTML = a + ' lớn thứ 2'
            if (c >= a && c >= d) document.getElementById('kq').innerHTML = c + ' lớn thứ 2'
            if (d >= a && d >= c) document.getElementById('kq').innerHTML = d + ' lớn thứ 2'
            // alert('b')
            count ++;
        }
        if (c > b && c > a && c > d) {
            if (b >= a && b >= d) document.getElementById('kq').innerHTML = b + ' lớn thứ 2'
            if (a >= b && a >= d) document.getElementById('kq').innerHTML = a + ' lớn thứ 2'
            if (d >= b && d >= a) document.getElementById('kq').innerHTML = d + ' lớn thứ 2'
            // alert('c')
            count ++;
        }
        if (d > b && d > c && d > a) {
            if (b >= c && b >= a) document.getElementById('kq').innerHTML = b + ' lớn thứ 2'
            if (c >= b && c >= a) document.getElementById('kq').innerHTML = c + ' lớn thứ 2'
            if (a >= b && a >= c) document.getElementById('kq').innerHTML = a + ' lớn thứ 2'
            // alert('d')
            count ++;
        }
        // alert(count)
        if (count == 0) {
            if (a == b && a == c){
                document.getElementById('kq').innerHTML = d + ' lớn thứ 2'
            count++;}
            if (a == c && a == d){
                document.getElementById('kq').innerHTML = b + ' lớn thứ 2'
            count++;}
            if (a == b && a == d){
                document.getElementById('kq').innerHTML = c + ' lớn thứ 2'
            count++;}
            if (b == c && b == d){
                document.getElementById('kq').innerHTML = a + ' lớn thứ 2'
            count++;}
        }
        if (count == 0) {
            if (a == b) {
                if (c == d) {
                    if (a > c) document.getElementById('kq').innerHTML = c + ' lớn thứ 2'
                    else document.getElementById('kq').innerHTML = a + ' lớn thứ 2'
                }
                 else if (c > d) document.getElementById('kq').innerHTML = c + ' lớn thứ 2'
                    else document.getElementById('kq').innerHTML = d + ' lớn thứ 2'
                count++
            }
            if (a == d) {
                if (c == b) {
                    if (a > c) document.getElementById('kq').innerHTML = c + ' lớn thứ 2'
                    else document.getElementById('kq').innerHTML = a + ' lớn thứ 2'
                } else if (c > b) document.getElementById('kq').innerHTML = c + ' lớn thứ 2'
                    else document.getElementById('kq').innerHTML = b + ' lớn thứ 2'
                count++
            }
            if (a == c) {
                if (d == b) {
                    if (a > b) document.getElementById('kq').innerHTML = b + ' lớn thứ 2'
                    else document.getElementById('kq').innerHTML = a + ' lớn thứ 2'
                }
                else if (b > d) document.getElementById('kq').innerHTML = b + ' lớn thứ 2'
                    else document.getElementById('kq').innerHTML = d + ' lớn thứ 2'
            count++;
            }

            // alert(count)
        }
            if (count == 0) {
                if (b == c) {
                    if (a > d) document.getElementById('kq').innerHTML = a + ' lớn thứ 2'
                    else document.getElementById('kq').innerHTML = d + ' lớn thứ 2'
                    count++;
                }
                if (b == d) {
                    if (a > c) document.getElementById('kq').innerHTML = a + ' lớn thứ 2'
                    else document.getElementById('kq').innerHTML = c + ' lớn thứ 2'
                }
                if (c == d) {
                    if (a > b) document.getElementById('kq').innerHTML = a + ' lớn thứ 2'
                    else document.getElementById('kq').innerHTML = b + ' lớn thứ 2'
                }
            }

    }
}