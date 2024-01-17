console.log("Hello World!")
fullName = "Tony Stark";
console.log("fullName");    ///OUTPUT --> fullName
console.log(fullName);      //OUTPUT  --> Tony Stark

let fName = "Rehatpreet kaur";

//let a; //undefined

//const b; // always need to be initialised

//Object
const student ={
    fullName: "Divyanshu Dugar",
    age :19,
    gpa: 4,
    position: 1
}

//Accessing a single key
console.log(student["fullName"]);   // Quotes necessary here
//OR
console.log(student.age);

console.log(student.age+1);
console.log(student["gpa"]+1);

