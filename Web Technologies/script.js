//! Array

// let numbers = [10,20,30,40];
// console.log(numbers);
// console.log(typeof numbers);
// console.log(numbers [2]);

// let numbers2 = [10,20,30]
// console.log(numbers2);
// console.log(typeof numbers2);
// console.log(numbers2 [1]);

// let student = [1, "KING", true, () => "Hello", [10,20]]

// console.log(student);
// console.log(student[0]);
// console.log(student[1]);
// console.log(student[2]);
// console.log(student[3]());
// console.log(student[4]);
// console.log(student[4][1]);


// let number = [10,20,30,40];
// console.log(number);

//! push()
// number.push(9,10);
// console.log(number);

//! pop()
// number.pop();
// console.log(number);

//! shift()
// number.shift()
// console.log(number);

//! unshift()
// number.unshift();
// console.log(number);

//! reverse()
// console.log(number.reverse());

//!concat()
// let num = [10,20]
// let newArr = num.concat(number)
// console.log(newArr)

//!flat()
// let newArr = [[1,2], [3,4], [4,5]]
// console.log(newArr)
// let num = newArr.flat()
// console.log(num)

//!includes()
// console.log(numbers.includes(5))

//!slice()
// let extract = number.slice(3,6)
// console.log(extract)

//!splice()
// numbers.splice(2,3,9,10)
// console.log(number)

// number.splice(2,0,9,10)
// console.log(number)

// number.splice(1,2)
// console.log(number)

//========================================================
//! Advance Methods od Array

//! map()

// let number = [1,2,3,4,5,6,7,8]
// console.log(number);

// let three = number.map((num) => num * 3)
// let three = number.map(i => i * 3)
// console.log(three)

//! filter()
// let even = three.filter((i) => {
//     i % 2 == 0
// })
// console.log(even)

//! reduce()
// let sum = even.reduce((acc, num) => {
//     return acc + num
// }, 0)
// console.log(sum)

//=========================================================
//! Sting 
// let a = "KING"
// console.log(a)

// let a = 'Queen'
// console.log(a)

// let a = `Raja`
// console.log(a)

// let a = new String("KING")
// console.log(a)

//!string() methos

// let tech = "Web Technology"
// console.log(tech)

//!charAt()
// console.log(tech.charAt(4))

//! at()
// console.log(tech.at(0))

//! charCodeAt()
// console.log(tech.charCodeAt(6))

//! trimeStart
// console.log(tech.trimStart())

//!trimeEnd
// console.log(tech.trimEnd())

//!trim()
// console.log(tech.trim())

//!toUpperCase()
// console.log(tech.toUpperCase())

//!toLowerCase()
// console.log(tech.toLowerCase())

//!includes()
// console.log(tech.includes("Web"))

//! replace()

// let newStr = tech.replace("Web", "Frontend")
// console.log(newStr)
 

//? return type should be array
// let greet = new String("Hello World")
// console.log(greet.toLocaleLowerCase().split(""))
// console.log(typeof greet )

//? String ===> Array 
// let newStr = tech.split()
// console.log(newStr)


//? Array ===> String using tostring()
// let newArr = newStr.toString()
// console.log(newArr)

//? Array ===> String using join()
// let newWord = newStr.join(",")
// console.log(newWord)

// let word = ["Hello Word"]
// console.log(word)

// let word1 = word.toString()
// console.log(word1)

// let word2 = word1.toUpperCase()
// console.log(word2)

// let word3 = word2.split()
// console.log(word3)

// let word1 = word.map(i => i.toUpperCase())
// console.log(word1)

// =================================================================
//! Object
// let student = {
//     name: "KING",
//     age : 22,
//     isWorking : true
// }
// console.log(student)

//?   . operator
// console.log(student.name);
// console.log(typeof student);

//  let student1 = new Object()
// student1.name = "Ram"
// console.log(student1);
// console.log(student1.name);

let student = {
    name : "KING",
    age : 22,
    isWorking : false,
    hobbies : ["Online games", {skills: "Coding", role: "Developer"}],
    isMarried : () =>{
        return "No i am not Married"
    },
    address : {
        city : "vashi"
    }
}

// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.isWorking);
// console.log(student.hobbies);
// console.log(student.hobbies[1]);
// console.log(student.hobbies[1].skills);
// console.log(student.isMarried);
// console.log(student.address);

// let Employee = {
//     Ename : "KING",
//     Eage : 22,
//     Erole : "Developer",
//     Eskills : ["HTML", "CSS", "JavaScript", {role: "Frontend Developer"}],
//     Eaddress : {
//         city : "vashi",
//         state : "Maharashtra"
//     }
// }

// console.log(Employee);
// console.log(Employee.Ename);
// console.log(Employee.Eage);
// console.log(Employee.Erole);
// console.log(Employee.Eskills);
// console.log(Employee.Eskills[3]);
// console.log(Employee.Eskills[3].role);
// console.log(Employee.Eaddress);

//? ========= Object Methods ========
//! Object.freez()
// Object.freeze(student)
// student.state = "Maharashtra"   

//! Object.keys()
// let keys = Object.keys(student);
// console.log(keys)

//! Objet.values()
// let val = Object.values(student)
// console.log(val)

//! Object.entries()
// let data = Object.entries(student)
// console.log(data)

//! Object.hasOwn()
// console.log(Object.hasOwn(student, "name"))

//! Object.assign()
// let student1 = Object.assign({}, student)
// console.log(student1)
// student1.name = "Ram"
// console.log(student1)

//! Object.seal()
// student.state = "Maharashtra"
// console.log(student)

// delete student.age;
// console.log(student)

// student.name = "Ram"
// console.log(student)

// Object.seal(student)

// student.state = "Maharashtra"
// console.log(student)

//! Object.isSealed()
// console.log(Object.isSealed(student))

//! Object.isFreeze()
// Object.freeze(student)
// student.state = "Maharashtra"
// console.log(student)

// delete student.age;
// console.log(student)

// student.name = "Ram"
// console.log(student)

//! Object.isFreeze()
// console.log(Object.isFrozen(student))

//? =============== Scope ==================

// var a = 10;
// let b =20;
// const c = 30;

// console.log(a)
// console.log(b)
// console.log(c)

// function scope()
// {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// scope()

// if(true)
// {
// console.log(a)
// console.log(b)
// console.log(c)
// }

//! bocked Scope
// if(true)
// {
//     var a = 10;
//     let b =20;
//     const c = 30;

// console.log(a)
// console.log(b)
// console.log(c)
// }

// console.log(b)
// console.log(c)


//! fuctional Scope

// function Scope(){
//     var a = 10;
//     let b =20;
//     const c = 30;

// console.log(a)
// console.log(b)
// console.log(c)
// }
// Scope()

// console.log(a)
// console.log(b)
// console.log(c)

// if(true)
// {
//     var a = 10;
//     let b =20;
//     const c = 30;

// console.log(a)
// console.log(b)
// console.log(c)
// }

// console.log(b)
// console.log(c)


//! lexical Scope

// function Outer(){
//     let a = 10;
//     console.log(a)
//     console.log("Outer Function")

//     function inner(){
//         console.log(a)
//         console.log("Inner Function")
//     }
//     inner()
// }
// Outer()