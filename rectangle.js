// khai bao lop
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    printInfo() {
        console.log(`Chiều rộng: ${this.width}`);
        console.log(`Chiều dài: ${this.height}`);
        console.log(`Diện tích: ${this.getArea()}`);
        console.log(`Chu vi: ${this.getPerimeter()}`);
    }
}

// khoi tao doi tuong: new ten lop
const rect = new Rectangle(5, 10);
// truy cap thuoc tinh va phuong thuc cua doi tuong
// <ten doi tuong>.<ten thuoc tinh>
rect.printInfo();
