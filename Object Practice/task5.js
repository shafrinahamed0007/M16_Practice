/**
 * Loop trough an object and print key-value paris with their types
 * 
 * Output:


key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean
 * 
 * 
 */

let myObjects = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for(key in myObjects){
    console.log("key: ", key, "| type:", typeof myObjects[key]);
}