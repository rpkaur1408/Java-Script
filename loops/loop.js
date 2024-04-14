// FOR - OF LOOP
let str ="JavaScript";
//Adding a comment


let size =0;
for (let val of str){
    console.log("val = ",val);
    size++;
}

console.log("String size = ",size);

// FOR - IN LOOP
let student ={
    name : "divyanshu dugar",
    age : 20,
    cpgpa :7.5,
    isPass: true,

};

for (let key in student){
    console.log("key = ",key," value = ",student[key]);
}

//Strings
let str1 ="Rehatpreet kaur";  //Method 1
let str2 ='Divyanshu Dugar';  // Method 2

//Template literals

let specialString =`This is a template literal`;

let obj ={ 
    item :'pen',
    price :10,

};

console.log(`The cost of the ${obj.item} is ${obj.price}`);



