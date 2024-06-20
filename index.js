// 27-05-2024
// let One = { a: 5, b: 2, c: 9, d: 7 };
// let Two = { e: 8, f: 3, g: 1, h: 4 };
// let op1 = 0;
// let op2 = 0;
// let Three = {};
// let Four = {};

// console.log(One);
// console.log(Two);
// console.log(Three);
// console.log(Four);

// ------------------------------------
// op1 = 0;

// One direct method
// op1 = One.a+One.b+One.c+One.d;
// console.log(op1);

// One create method
// op1 = Object.create({});
// op1 = op1.a+op1.b+op1.c+op1.d
// or
// op1 = Object.create({});
// for(var key in One){
//     op1[key] = One[key]
//     }
// console.log(op1);
// console.log(op1);

// -----------------

// op2 = 0;

// Two direct method
// op2 = Two.f+One.c+Two.h+One.a-Two.e
// console.log(op2);


// -----------------------------------
// Three = {};
// Three.x = Two.g;
// console.log(Three);

// Three.x = Two.g;
// Three.y = One.d;
// console.log(Three);

// Three.x = Two.g;
// Three.y = One.d;
// Three.z = Two.e;
// console.log(Three);

// ------------------------------------

// Four = {};
// Four.i = Two.f+One.b;
// console.log(Four);

// Four.i = Two.f+One.b;
// Four.j = One.d-Two.h;
// console.log(Four);

// Four.i = Two.f+One.b;
// Four.j = One.d-Two.h;
// Four.k = One.c+Two.g
// console.log(Four);

// *******************************************************

// 28-05-24
// let x = {
//     a:1,
//     b:2
// }

// let a = 2;
// let b = 2;
// let xyz="a"

// console.log(x[xyz]);

// ************************

// let one = { a: 5, b: 2, c: 9, d: 7 };
// let xyz = Object.assign({}, one)
// let x = 'c'
// let y = 'b'
// let z = 'a'
// console.log(xyz[x]);
// console.log(xyz[y]);
// console.log(xyz[z]);

// let xy = one.c
// let yz = one.b
// let zx = one.c
// console.log(xy);
// console.log(yz);
// console.log(zx);

// ********************************************************
//29-05-24
// let obj = {
//     a: 1, b: 2, nest: { c: null, d: 1995 }
// };
// let x = 123
// let y = 'a'
// y = ['a']
// let z = 'd'
// z=['d']

// console.log(obj[y]);
// console.log(obj['a']);
// console.log(obj['nest'][z]);

// ____________________________
// parse method is used when json is stringified only in deep cloning
// let one = { a: 5, b: 2, nest: { c: 9, d: 7 } };
// let xyz = JSON.stringify(Object(one));
// let x = 'a'
// xyz= JSON.parse(xyz)
// console.log(xyz);
// console.log(xyz[x]);

// --------------

// primitive types
// number string boolean are call by value method bcz it is passed by value
// let x = 5;
// let y = x;
// x = 10;
// console.log(x);
// console.log(y);

// --------------

// non-primitive types
// object, array, func are call by reference bcz returns reference number i.e(passed by reference number)
// let obj1 = {a:5,nest:{b:5}};
// let obj2 = obj1

// obj1.a = 99;

// console.log(obj1);
// console.log(obj2);

// ----------------

// null and undefined and not defined
// if variable not declared returns not defined/ in object it returns undefined
//* if variable declared and value not assigned returns undefined
//* if variable's value is set to null returns null;
// let obj = {a:1,b:2,nest:{c:3,d:null}};
// console.log(obj);

// // obj.e returns undefined
// console.log(obj.e);

// // obj.e is 5 now;
// obj.e = 5;
// console.log(obj.e);

// obj.nest.c = null
// console.log(obj.nest.c);

// obj.nest.d = 10
// console.log(obj);

// **************************************************

// 30-05-24

//deep cloning
// object returns reference address
// deep cloning creates a new reference address for each orginal and cloning objects,
//  if any changes made in orginal does not reflect in cloning
// let orginal = { a: 1, nest: { b: 2 } };
// let cloning = JSON.parse(JSON.stringify(orginal))
// orginal.a = 99;
// orginal.nest.b = 99;
// console.log(orginal);
// console.log(cloning);

// shallow cloning
// if object contains nested object do not use shallow cloning
// shallow cloning does not clone nested objects reacts as dynamic changes if used
// let orginal = {a:1,b:2};
// let shallow = Object.assign({},orginal);
// orginal.a = 99;
// console.log(orginal);
// console.log(shallow);

// **************************************************

// 04-06-24

// loop:
// can tell json loop/key in loop/ object loop/for in loop
// let obj = { a: 1, b: 2, c: 3 };
// var attname = ['a']
// for (var attname in obj) {
//     console.log(attname);
// }
// let total = 0
// for (var attname in obj) {
//     total+= obj[attname];
// }
// console.log(total);

// let total = 0
// for (var key in obj) {
//     total += key.length
// }
// console.log(total);

// Object.seal:
//we can update values
//cannot add or delete attribute
// if obj contain nested obj, seal that too

// let obj = { a: 1, nest: { b: 2 } };
// Object.seal(obj)
// obj.nest.b = 99;
// console.log(obj);

// immutable objcts
// Object.freeze(obj):
// cannot update/add/delete
// if obj contain nested obj, freeze that too

// exercises
// let obj1 = {a:2, b:5, c:9, d:7};
// let obj2 = {a:3, b:8, c:6, d:4};
// let opt1 = 0;
// let opt2 = 0;
// let opt3 = 0;

// let obj4 = {};

// opt1 = obj1.a+obj1.b+obj1.c+obj1.d =>2+5+9+7;
// opt2 = 2+3 + 5+8 + 9+6 + 7+4;
//  = obj1.a+ obj2.a + obj1.c+obj2.c + obj1.d+obj2.d;

// opt3 = 3-2 + 8-5 + 9-6 + 7+4
// = obj2.a-obj1.a + obj2.b-obj1.b + obj1.c-obj2.c + obj1.d+obj2.d

// let obj3 = Object.assign({}, obj1);
// for(var key in obj3){
//     console.log(obj3[key]*5);
// }

// obj4 = {a:obj2.a-obj1.a, b:obj2.b-obj1.b, c:obj1.c-obj2.c, d:obj1.d-obj2.d};

// ***********************************************


// 05-06-2024

// let arr = [];
// let brr = new Array();
// let drr = new Array({ drr: { dr: "r" } });

// push - adds a new element after the last position(index) of the arr
// arr.push(eleName);
// arr.push(1, "2", "three", true, {}, false, "boolean")
// console.log(arr);

// pop - simply removes the last posistioned element of the arr
// arr.pop();
// arr.pop()
// console.log(arr);

// unshift adds a new element at the begining of an array
// arr.unshift(eleName);
// arr.unshift(true, {})
// console.log(arr);

// shift simply removes the first element of the arr
// arr.shift();
// arr.shift();
// console.log(arr);

// does not modify the orginal arr and returns a new array, creates a shallow copy of the array;
// arr.slice(strtposi, endpos+1)
// let slice = arr.slice(6, 7);
// console.log("sliced: " + slice);


// arr.concat returns a new array
// let crr = arr.concat(drr);
// console.log(crr);



// ******************************

// // task
// let obj1 = { a: 1, b: 9, c: 3 };
// let obj2 = { d: 8, e: 2, f: 4 };
// let err = [];
// let frr = new Array();

// for(var key in obj1){
//     err.push(obj1[key])
// };
// console.log(err);

// frr.push(obj2.d,obj1.b,obj2.f)
// frr.shift()
// frr.unshift(obj1.c, obj1.a, obj2.d)
// frr.pop()
// frr.pop()
// console.log(frr);


// **************************************************

// let xyz = {a:1,b:2,c:3};
// let zyx = {a:99};

// let combined={};

// key = 'a'
// key = 'b'

// for (const key in xyz) {
//     combined[key] = xyz[key];
// }
// for(var key in zyx){
//     combined[key] = zyx[key]
// }
// console.log(combined);

// ************************************************

// 06-06-24

// splice modifies the orginal array and returns new array;

// let beryShake = ["toamto", "pine", "milk", "grape", "carrot", "beans", "lemon", "water"];

// beryShake.splice(0, 2);
// console.log(beryShake);

// beryShake.splice(1, 1, "glass");
// console.log(beryShake);

// beryShake.splice(2, 2);
// console.log(beryShake);

// // replacing
// beryShake.splice(2, 1, "ice")
// console.log(beryShake);

// // adding in between, without deleting
// beryShake.splice(2, 0, "berry");
// console.log(beryShake);

// // addind element at the end of the arr
// beryShake.splice(5, 0, "candy");
// console.log(beryShake);

// *********************************************

// 14-06-24

// loop is executed line by line carefull when printing
// break will break the loop
// continue will skip the current iteration
// if the code read continue it will defenitely skips the current iteration and i++ will be done

// let arr = [1, 2, 3, 4, 5]
// for(var array of arr ){
//     console.log(array);
// }

// for (i = 0; i < arr.length; i++) {
//     console.log(i);
//     console.log(arr[i]);
// }

// for (var i = 0; i <= arr.length; i++) {
//     if (arr[i] == 2) {
//         break
//     }
//     console.log(arr[i]);
// }

// for (var i = 0; i <= arr.length; i++) {
//     console.log(arr[i])
//     if (arr[i] == 2) {
//         break
//     }
// }

// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (arr[i] == 3) {
//         console.log(arr[i]);
//         continue;
//     }
// }

// let brr = [5, 4, 7, 3, 1];

// for (i = 0; i < brr.length; i++) {
//     console.log(brr[i]);
//     continue;
//     if (brr[i]==7) {
//         break;
//     }
// }

// for (var i=0; i<brr.length; i++){
//     if (i==2) {
//         continue;
//         }
//     console.log(brr[i]);
// }

// for (i=0; i<brr.length;i++){
//     if (brr[i]==3) {
//         break;
//     }
//     console.log(brr[i]);
// }

// for (i = 0; i < brr.length; i++) {
//     if (i == 4) {
//         break
//     } else {
//         continue;
//     }
//     console.log(brr[i]);
// }

// *************
// Task
// questions:
// op1=5+9+10+8;
// op2=7-5 + 9-3 + 10-6 + 8-5
// drr= [5*7, 9*3, 10*6, 8*5];
// err=[{a:88}, {a:33}, {a:77}, {a:11}, {a:66}];
// frr=[88+7,33+3,77+6,11+5,66+0,44+0]


// arr = [5, 9, 10, 8];
// brr = [7, 3, 6, 5];
// crr = [88, 33, 77, 11, 66, 44];
// op1 = 0
// op2 = 0
// drr = []
// err = []
// frr = []


// for (i = 0; i < arr.length; i++) {
//     op1 += arr[i]
// }
// console.log(op1);

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > brr[i]) {
//         op2 += arr[i] - brr[i]
//     }
//     else if (brr[i] > arr[i]) {
//         op2 += brr[i] - arr[i]
//     }
// }
// console.log(op2);

// for (i = 0; i < 4; i++) {
//     drr.push(arr[i] * brr[i])
// }
// console.log(drr);

// for (i = 0; i < 5; i++) {
//     err.push({ a: crr[i] })
// }
// console.log(err);

// for (var i = 0; i < crr.length; i++) {
//     if (brr[i] == null) {
//         brr[i] = 0
//     }
//     frr.push(crr[i] + brr[i]);
// }
// console.log(frr);
// OR
// for (i = 0; i < 6; i++) {
//     if (brr.length != crr.length) {
//         brr.push(0)
//     }
//     console.log(crr[i] + brr[i]);
// }
// console.log(brr);
// OR
// for (let i = 0; i < 6; i++) {
//     // check for > or = to
//     if (i >= brr.length) {
//         brr.push(0)
//     }
//     console.log(crr[i] + brr[i]);
// }
// console.log(brr);



// ****************************



// function is a set of code that is executed when the function is called

// Normal Function:

// function add(a, b) {
//     let add = a + b
//     sub(a, b)
//     console.log(add);
// }
// function sub(x, y) {
//     let sub = x - y
//     mul(x, y)
//     console.log(sub);
// }
// function mul(q, w) {
//     let mul = q * w
//     console.log(mul);
// }

// add(5, 2);

// ***********************

// task
// 12,8,20,5

// ONE
// function add(a, b) {
//     let add = a + b;
//     console.log(add);
//     sub(a, b)
// }
// function sub(x, y) {
//     let sub = x - y
//     console.log(sub);
//     mul(x, y)
// }
// function mul(i, j) {
//     let mul = i * j
//     console.log(mul);
//     div(i, j)
// }
// function div(o, p) {
//     let div = o / p
//     console.log(div);
// }
// add(10, 2)


// TWO

// function add(a, b) {
//     let add = a + b;
//     console.log(b + a);
//     sub(b, a)
// }
// function sub(x, y) {
//     let sub = x - y
//     console.log(sub);
//     mul(x, y)
// }
// function mul(i, j) {
//     let mul = i * j
//     console.log(mul);
//     div(i, j)
// }
// function div(o, p) {
//     let div = o / p
//     console.log(div);
// }
// add(2, 10)


// 16-06-24

// Return Vs Console Log:
// return returns value to the function and behaves like BREAK it is used to stops the function and returns the first return value to the function
// log prints value

//There is some thing u need to understand in this code deeptly
// in the below code when we call one() only the log prints but in dom Console it prints both the console.value as well return value
// to see the return value and log.value in vs we can log(one()) the func
// function one() {
//     console.log(11);
//     return (22)
// }
// one();

// function two() {
//     console.log(33);
//     return (44)
// }
// x = two();
// // the x will return only the return value(44) put it in dom console log
// // but in vs code it will show both the console & return value
// console.log(x);

// *ONE
// *
// try in vs
// in vs prints 11
// *
// try in dom console
// in dom console prints both 11&22

// function one() {
//     console.log(11);
//     return(22)
// }
// one()
// also check console.log(one())

// *TWO
// *
// try in vs
// in vs prints both 33&44 bcx x
// *
// try in dom console
// x returns only the return value of func two() (44)
// function two() {
//     console.log(33);
//     return (44)
// }
// let x = two()
// console.log(x);

// *THREE
// there is no return value, func three() has undefined value in the variable x
// function three() {
//     console.log(66);
// }
// x = three()
// console.log(x);

// *FOUR
// normal function return method
// function four(){
//     return 55
// }
// x = four();
// console.log(x);
//

// ------------------------------

// Arrow Function
// arrow function does not need return statement
// return statement is used to end the execution of the function

// let z = () => 5
// console.log(z);
// console.log(z());

// let z = () => {
//     console.log(199);
//     return 299;
//     console.log(399);
// }
// z()

// let q = () => {
//     return 599;
//     return 299
//     console.log();
// }
// console.log(q())

// return is used to end the execution of the function
// let a = () => {
//     return;
// }
// console.log(a());

// returns undefined when variable is calles and returns error when dot operator is used
// let b = () => { { a: 1 } }
// x = b()
// console.log(x);

// when using object we should mention return if {} is used
// let c = () => {
//     return { b: 2 }
// }
// let y = c()
// console.log(y.b);

// let d = () => ({c:99});
// console.log(d().c);


// --------------------------

// practice
// let arr = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }];

// practice
// for (var obj of arr) {
//     console.log(key);
//     for (var key in obj) {
//         console.log(obj[key]);
//     }
// }

// practice
// for (var i = 0; i < arr.length; i++) {
//     let obj = arr[i]
//     for (var key in obj) {
//         console.log(obj[key]);
//     }
// }

// -------------------------
// FOREACH

// TASk

// let arr = [{ a: 2 }, { a: 3 }, { a: 5 }, { a: 8 }];
// let brr = [{ a: 7 }, { a: 9 }, { a: 4 }, { a: 1 }];
// crr = [{a:2+7},{a:3+9},{a:5+4},{a:8+1}]
// drr = [{a:7-2},{a:9-3},{a:5-4},{a:8-1}]
// let crr = [];
// let drr = [];

// arr.forEach((obj, ind) => {
//     if (brr[ind].a > obj.a) {
//         // console.log(brr[ind].a);
//         drr.push({ a: brr[ind].a - obj.a })
//     } else if (obj.a > brr[ind].a) {
//         drr.push({ a: obj.a - brr[ind].a });
//     }
//     // console.log(brr[ind].a);
// })
// console.log(drr);

// ********************************

// 18-06-24


// MAP
// map returns a new array
// map iterates each element with the given condition

// let qrr = [5, 3, 6, 8, 2, 3];
// var wrr = qrr.map((e,i,o) => {
//     return e*5
// })
// console.log(wrr);

// let rrr = qrr.map((e) => {
//     return e > 5
// })
// console.log(rrr);

// // returns boolean
// let trr = [
//     { id: 1, name: "admin", location: "chennai" },
//     { id: 2, name: "admin", location: "chennai" },
//     { id: 3, name: "admin", location: "chennai" },
// ]
// let yrr = trr.map((e) => {
//     return e.id === 1
// })
// console.log(yrr);

// FILTER
// filter returns a new array
// filter exeutes or checks all the element with the given condition and returns the filtered values

// let urr = [1, 2, 3, 4, 5]
// urr = urr.map((e) => e * 5)
// let irr = urr.filter((e) => {
//     return e > 10
// })
// console.log(urr);
// console.log(irr);

// let orr = [
//     { id: 1, name: "admin", location: "chennai" },
//     { id: 2, name: "hr", location: "delhi" },
//     { id: 3, name: "admin", location: "pune" },
//     { id: 4, name: "admin", location: "mumbai" },
// ]
// let prr = orr.filter((e) => e.name == "admin" && e.id > 2)
// console.log(prr);

// FIND
// find returns a single element and stops the loop if the given condition is satisfied.

// let arr = [
//     { name: "admin", location: "pune" },
//     { name: "admin", location: "hyderabad" },
//     { name: "hr", location: "chennai" },
//     { name: "employee", location: "chennai" },
//     { name: "employee", location: "dubai" },
// ]
// let srr = arr.find((e) => {
//     return e.name == "admin" && e.location == "hyderabad"
//     return e.location == "chennai"
//     return e.location == "chennai" && e.name == "admin"
// })
// console.log(srr);

// SOME & EVERY returns boolean only

// SOME
// some returns boolean
// some checks at least one element in the array statisfy the given condition and returns boolean

// let drr = [3, 6, 7, 9, 2]
// let frr = drr.some((e) => {
//     // return e == 7
//     return e > 5
// })
// console.log(frr);

// EVERY
// every check if all the elements in the array statisfy the given condition and returns true
// if even one element does not satisfy the condition it will return false

// let grr = [8, 3, 5, 2, 0]
// let hrr = grr.every((e) => {
//     return e > 2
//     return e > 1
// })
// console.log(hrr);

// REDUCE
// reduce returns a single value output
// let jrr = [1, 2, 3,4];
// let krr = jrr.reduce((prev, curr) => {
//     console.log("P: " + prev);
//     console.log("C: " + curr);
//     return prev + curr
// })
// console.log(krr);

// let lrr = [1, 1, 1, 1, 2];
// let zrr = lrr.reduce((prev, curr) => {
//     return prev * curr
// })
// console.log(zrr);

// 19-06-24

// HOISTING
// var x => declaration / declared
// x = 10 => definition / defined

// let, var, const

// LET is local level scope

// let does not support hoisting
// let can be used in local scope only
// let should be declared first => let x
// and defined next => x = 20

// error
// x = 20;
// let x
// console.log(x);

// function lets(a, b) {
//     if (a == b) {
//         let c = a + b
//     }
//     console.log(c);
// }
// lets(5, 5)

// -------------------

// VAR is a global scope
// var supports hoisting

// Hoisting
// we can also define first y = 20
// and then we can declare var y

// function vars(a, b) {
//     if (a == b) {
//         c = a + b;
//         var c
//     }
//     console.log(c);
// }
// vars(5, 5)

// ---------------------

// CONST

// const is local scope

// const should be declared and initialized
// const zxy;
// zxy = 10;

// const values cannot be reasssigned
// const xyz = 1;
// xyz = 99
// console.log(xyz);

// function conts(a, b) {
//     if (a != b) {
//         const x = a + b
//         console.log(x);
//         const y;
//         y = 20
//     }
// }
// conts(10, 5)

// object values can be re assigned because it is call by references
// const data = {
//     id: 1, name: "admin", location: "chennai"
// }
// console.log(data.id = 99);

// 20-06-24

// indexOf() can be used in arr of numbers, arr of boolean, arr of strings

// indexof()
// let x = "index"
// console.log(x.indexOf("d"));

// let y = [1, 2, 3, 4, 5];
// console.log(y.indexOf(3));

// ---------------------

// settime out will execute only once after the given interval
// var x = setTimeout(() => {
//     console.log("Hello")
// }, 1000);

// setinterval exexutes again and again until the clearinterval()
// setInterval(() => {
//     console.log("Hello");
// }, 500);

// Task

// var arr = [{ i: 2 }, { i: 3 }, { i: 4 }, { i: 6 }, { i: 9 }]
// const main = () => {
//     var crr = 0
//     let x = setInterval(() => {
//         console.log(arr[crr].i)
//         if (arr[crr]["i"] == 4) {
//             clearInterval(x)
//         } else {
//             crr++
//         }
//     }, 2000);
// }
// main()

// callback
// examples:-

// function call(back) {
//     back()
// }
// function blue() {
//     console.log("yellow");
// }
// blue(call)

// annomous parameter is passed in foreach function
//  exam.forEach(()=>{})

// we can also send like this below
const exm = [1, 2, 3, 4, 5]
paraName = (e, i, o) => {
    console.log(e);
}
paraName()
exm.forEach(paraName);

// some error check later