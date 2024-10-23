// CRUD: Create - Read - Update - Delete
// danh sach san pham -> lay tu mang
let products = ["Iphone 16", "Iphone 8", "Iphone 9"];
// ham de hien thi danh sach
function getProducts() {
//     lap theo danh sach cua mang
    let content = "";
    for (let i = 0; i < products.length; i++) {
        content += `<tr>
        <td>${products[i]}</td>
        <td><button>Edit</button> </td>
        <td><button onclick="deleteProduct(${i})">Delete</button> </td>
    </tr>`
    }
    document.getElementById("content").innerHTML = content;
//     in lai du lieu vao trong bang
}
getProducts();

// ham tao moi san pham
// ten: createNewProduct
// tham so: khong, du lieu return: khong
function createNewProduct() {
//     lay du lieu
    let product = document.getElementById("newProduct").value;
//     them du lieu vao mang
    products.push(product);
//     hien thi lai bang
    getProducts();
//     xoa thong tin trong o input
    document.getElementById("newProduct").value = "";
}

// xoa: xoa theo index
function deleteProduct(id) {
    let check = confirm("Are you sure you want to delete this product?");
    if (check) {//     xoa theo index trong mang
        products.splice(id, 1);
//     hien thi lai bang
        getProducts();}

}
// 1. Tao class product
// name, price, color, number.
class Product {
    name; price; color; number;

    constructor(name, price, color, number) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.number = number;
    }

    getAmount(){
        let amount = this.price*this.number;
        return amount;
    }
}
