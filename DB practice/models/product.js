// 파일에서 fetch 해오던 데이터를 DB에서 fetching해준다
// 불필요한 fs 모듈을 모두 지워준다

// DB를 연결해준다
const db = require("../util/database");

const Cart = require("./cart");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {}

  static deleteById(id) {}

  // 모든 데이터를 fetch해준다
  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static findById(id) {}
};
