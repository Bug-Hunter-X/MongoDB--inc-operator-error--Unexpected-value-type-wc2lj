```javascript
// Correct use of $inc operator with numeric value
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field:1}});
// Or, use a variable holding the numerical value
let incrementValue = 5; 
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field:incrementValue}});
```