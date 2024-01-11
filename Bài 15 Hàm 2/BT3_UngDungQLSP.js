let DSsanPham = []
let TensanPham = ['Sony Xperia','Samsung Galaxy','Nokia 6','Xiaomi Mi 5s Plus',
    'Xiaomi Redmi Note 4','Apple Iphone 6s','Apple Iphone 8 Plus','Fujitsu F-04E','Oppo A71']
function DisplayAll(){
    let bang ='<table ><tr><th colspan="2">Product Name</th><th colspan="2">'+TensanPham.length+' products</th>';
    for (let i=0;i<TensanPham.length;i++){
        bang += '<tr>';
        bang += '<td>'+(i+1)+'</td>';
        bang += '<td>'+TensanPham[i]+'</td>';
        bang += '<td><button onclick="Edit('+i+')">Edit</button></td>';
        bang += '<td><button onclick="Delete('+i+')">Delete</button></td>';
        bang += '</tr>';
    }
    bang +='</table>';
    document.getElementById('2').innerHTML = bang;
}
DisplayAll()

function AddProduct(){
    let add = document.getElementById('add').value;
    if (add !== '') {
        TensanPham.push(add);
        alert('Bạn vừa thêm sản phẩm (' + add + ') vào danh sách')
        DisplayAll()
    }else alert('Không được thêm sản phẩm trống')
}

function Delete(vitri){
let x= confirm('Bạn có chắc chắn muốn xóa sp '+TensanPham[vitri]);
 if (x === true)
TensanPham.splice(vitri,1)
    DisplayAll()
}
function Edit(vitrisua){
    // let sua2 = '<hr><input id="4" value="'+TensanPham[vitrisua]+'"><button onclick="Edit2('+vitrisua+')">Edit</button>';
    // document.getElementById('3').innerHTML = sua2;

    let bang ='<table ><tr><th colspan="2">Product Name</th><th colspan="2">'+TensanPham.length+' products</th>';
    for (let i=0;i<TensanPham.length;i++){
        if (i === vitrisua){
            bang += '<tr>';
            bang += '<td>'+(i+1)+'</td>';
            bang += '<td><input id="edit" value="'+TensanPham[i]+'"></td>';
            bang += '<td><button onclick="Edit2('+i+')">OK</button></td>';
            // bang += '<td><button onclick="Delete('+i+')">Delete</button></td>';
            bang += '<td><button onclick="DisplayAll()">Cancel</button></td>';
            bang += '</tr>';
        }else {
            bang += '<tr>';
            bang += '<td>' + (i + 1) + '</td>';
            bang += '<td>' + TensanPham[i] + '</td>';
            bang += '<td><button onclick="Edit(' + i + ')">Edit</button></td>';
            bang += '<td><button onclick="Delete(' + i + ')">Delete</button></td>';
            bang += '</tr>';
        }
    }

    bang +='</table>';
    document.getElementById('2').innerHTML = bang;
}
function Edit2(vitrisua2){
    let sua = document.getElementById('edit').value
    alert('Bạn vừa sửa tên sản phẩm ('+TensanPham[vitrisua2]+') thành ('+sua+')')
    TensanPham[vitrisua2] = sua;
    // document.getElementById('3').innerHTML = '';
    DisplayAll()
}






