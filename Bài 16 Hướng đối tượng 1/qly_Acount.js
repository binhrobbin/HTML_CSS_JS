class Account {
    id;
    username;
    password;
    phone;
    role;
    avatar;
    constructor(id, username, password, avatar, role) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.avatar = avatar;
        this.role = role;
    }
    changePassword(newpassword) {
        if (this.password === newpassword) {
            alert('trùng password cũ')
        } else this.password = newpassword;
    }
}

let us1 = new Account(1, 'user1', '123', 'https://channel.mediacdn.vn/thumb_w/640/2020/4/14/photo-1-15868287887401943042560.jpg', 'user')
let us2 = new Account(2, 'user2', '123', 'https://pbs.twimg.com/profile_images/1087990092726190080/UKoVC7pC_400x400.jpg', 'user')
let ad1 = new Account(3, 'admin1', '123', 'https://cf.shopee.vn/file/3fa38d310908a724e364bee5c2471e87', 'admin')
let ad2 = new Account(4, 'admin2', '123', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEHeBElGYeplJ0jrFWjLxqAly219rfPuKXSsmTv5tI91EFudUlOTlJkMKXX1I1UKKV10&usqp=CAU', 'admin')
let account = [us1, us2, ad1, ad2];
display(account)

function display(arrObj) {
    let str = '';
    for (let i = 0; i < arrObj.length; i++) {
        str += `<tr>
    <td>${arrObj[i].id}</td>
    <td>${arrObj[i].username}</td>
    <td>${arrObj[i].password}</td>
    <td>
        <img src="${arrObj[i].avatar}">
    </td>
    <td>${arrObj[i].role}</td>
    <td>
        <button onclick="sua(${i})">Edit</button>
    </td>
    <td>
        <button onclick="xoa(${i})">Delete</button>
    </td>
    </tr>`;
    }
    document.getElementById('display').innerHTML = str;
}

function xoa(index) {
    account.splice(index, 1);
    display(account)
}

function sua(index) {
    let avatar = prompt('nhập avatar muốn sửa')
    let role = prompt('nhập quyền muốn sửa')
    // lấy đối tượng ra để thay đổi
    let doituong = account[index];
    doituong.avatar = avatar;
    doituong.role = role;
    display(account)
}

function timkiem() {
    let a = document.getElementById('search').value
    let accSearch = []
    for (let i = 0; i < account.length; i++) {
        if (account[i].username.includes(a)) {
            accSearch.push(account[i])
        }
    }
    display(accSearch);
}