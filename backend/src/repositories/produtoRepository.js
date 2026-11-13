const {db} = require('../database/connection')

function findAll() {
    return db.prepare(
        "SELECT * FROM products"
    ).all();
}

function findById(id) {
    return db.prepare(
        "SELECT * FROM products WHERE id = ?"
    ).get(id);
}

function create(product) {
    const result = db.prepare(`
      INSERT INTO products (name, price)
      VALUES (?, ?)
    `).run(product.name, product.price);

    return this.findById(
        Number(result.lastInsertRowid)
    );
}

function update(id, product) {
    const result = db.prepare(`
      UPDATE products
      SET name = ?, price = ?
      WHERE id = ?
    `).run(product.name, product.price, id);

    return result.changes > 0;
}

function deleteById(id) {
    const result = db.prepare(
        "DELETE FROM products WHERE id = ?"
    ).run(id);

    return result.changes > 0;
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteById
}