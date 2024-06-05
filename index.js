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
// op1 = Object.create(One)
// op1 = op1.a+op1.b+op1.c+op1.d
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

// --------------

// number string boolean are call by value method bcz it returns a value
// let x = 5;
// let y = x;
// x = 10;
// console.log(x);
// console.log(y);

// --------------

// object, array, func are call by reference bcz returns reference number
// let obj1 = {a:5,nest:{b:5}};
// let obj2 = obj1

// obj1.a = 99;

// console.log(obj1);
// console.log(obj2);

// ----------------

// null and undefined
//* if variable not declared or variable declared and value not assigned returns undefined
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
// shallow cloning does not clone nested objects reacts as dynamic changes if usesd
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


// Object.seal:
//we can update values
//cannot add or delete attribute
// if obj contain nested obj, seal that too

// let obj = { a: 1, nest: { b: 2 } };
// Object.seal(obj)
// obj.nest.b = 99;
// console.log(obj);

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

// let arr = []
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

// err.push(obj1.a, obj1.b,obj1.c)
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



