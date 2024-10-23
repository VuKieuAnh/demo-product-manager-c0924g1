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

// CRUD: Create - Read - Update - Delete
// danh sach san pham -> lay tu mang
// let products = ["Iphone 16", "Iphone 8", "Iphone 9"];
let products =[
    new Product('Iphone 16', 32, "white", 20),
    new Product('Samsung', 22, "pink", 21),
    new Product('Samsung ZFOLD', 32, "back", 12),
    new Product('Iphone 15', 3, "blue", 10)
];

// ham de hien thi danh sach
function getProducts() {
//     lap theo danh sach cua mang
    let content = "";
    for (let i = 0; i < products.length; i++) {
        content += `<tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].color}</td>
        <td>${products[i].number}</td>
        <td>${products[i].getAmount()}</td>
        <td><button>Edit</button> </td>
        <td><button onclick="deleteProduct(${i})">Delete</button> </td>
    </tr>`
    }
    document.getElementById("content").innerHTML = content;

    let count = 0;
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        count += products[i].number;
        total += products[i].getAmount();
    }
    document.getElementById("count").innerHTML = count + " san pham";
    document.getElementById("amount").innerHTML = total + " $";
//     in lai du lieu vao trong bang
}
getProducts();

// ham tao moi san pham
// ten: createNewProduct
// tham so: khong, du lieu return: khong
function createNewProduct() {
//     lay du lieu
    let productname = document.getElementById("name").value;
    let price = +document.getElementById("price").value;
    let color = document.getElementById("color").value;
    let number = +document.getElementById("number").value;
    let newProduct = new Product(productname, price, color, number);
//     them du lieu vao mang
    products.push(newProduct);
//     hien thi lai bang
    getProducts();
//     xoa thong tin trong o input
//     document.getElementById("newProduct").value = "";
}

// xoa: xoa theo index
function deleteProduct(id) {
    let check = confirm("Are you sure you want to delete this product?");
    if (check) {//     xoa theo index trong mang
        products.splice(id, 1);
//     hien thi lai bang
        getProducts();}

}
