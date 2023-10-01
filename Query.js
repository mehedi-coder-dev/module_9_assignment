//1.Create a new DB and new collection.
const newDBName = "product"
const newCallectionName = "brand";
use(newDBName)
db.createCollection(newCallectionName)

//2.Removes a collection from the database.
use("product")
db.brand.drop()

//3.Inserts a single document into a collection.

use("product")

db.brand.insertOne({
    name:"iphone",
    prise:200
})

//4.Delete/remove a single document from the collection.

use("product")

db.brand.deleteOne({name:"iphone"})