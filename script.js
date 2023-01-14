// if else statement 
// let ram = "you"
// if (ram = "soldier" ){
//     console.log("HE will marry princess NoorJahan")
// }
// else{
//     console.log(" jyada nhi milega")
// }

// Turnery operator 

// var loggedIn = false;
// loggedIn ? console.log("Redirect usser to home page ") : console.log("LOGIN 1st please")

// switch case 

// let user = "ms"
// switch (user){
//     case "ms" :
//         console.log("She is a surgen");
//         break;
//     case "md" :
//          console.log("She can own a hospital") 
//          break;
//     default :
//     console.log("She is not into studies")        
// }

// let sachin = "sex"
// switch(sachin){
//     case "trader":
//         console.log("He will marry")
//         break;
//     case "teacher":
//         console.log("He will marry according to family")
//     default:
//         console.log("He won't marry anyone")     
// }


// ARRAY 
// let eo = ["rando", "sita", "sachin", "meena ji", "Gaurav", "Bhati", "Bhajan lal", "Damo chela"];

// eo.push("peaky blinders")

// console.log(eo.slice(1,3))

// let ee = ["re", "rrr", "deww", "dess"];

// months.splice(1,0,"dede")
// console.log(months)

// console.log(months.concat(ee))

// console.log(month.map(Math.sqrt))

// console.log(months.sort())
// let months = ['Jan', 'March', 'April', 'June'];
// console.log(month)

// let r = "RAMANUJAN"
// let arr = [r.split("")]
// console.log(arr)

// let month = [1, 2, 3, 4]


// LOOPS :

// for 

// let country = ["india", "japan", "pakistan", "aus",];
// let arr1 = [];

// for( let i=0 ; i<country.length ; i++ ){
//     arr1.push(country[i].toUpperCase())   
// }
// console.log(arr1)

// let rr = ["rob", "kill", "eric", "john" ];
// let arr =[]
//     arr.push(rr.sort())
// console.log(arr)


// while loop 
// let i = 0
// while(i<=5){
//     console.log(i);
//     i = i+1;
// }


// do while loop 
// let i = 0
// do {
//     console.log(i);
//     i=i+1
// }
// while (i<=5)
    

// for of loop 

// let number=[1,2,3,4,5,6,7,8,9]
// let eo = ["rando", "sita", "sachin", "meena ji", "Gaurav", "Bhati", "Bhajan lal", "Damo chela, Govind soni, Tushar Tankra,"];
// for(let num of number ){
//     console.log(num)
// }


// let number=[1,2,3,4,5,6,7,8,9]

// for (let num of number ){
//     num = num * num;
//     console.log(num)
// }

// let student = [1, 2, 3, 4]
// let total = student.reduce((total,pos)=> total + pos , 1 )
// console.log(total)
// console.log("Congratulation for your selection in EO exam " + eo[9])




// console.log("2"-1)
// console.log(2-"1")

// function sum (...numbers){
    
  
//     let result = 0;
    
//     for(let num of numbers){
//         result += num ;
//     }
//    return result;

// }

// console.log(sum(3, 4, 5));

// let groom = {
//   name: "Ram",
//   age: 27
// }

// let wife = {
//     name: "Sita",
//     realName:"Princess Noor Jahan"
// }

//  let pair = {...data, ...wife}
//  console.log(pair)

//  String.prototype.truelength = function(){
//   console.log(`${this.name}`);
//   console.log(`true length is: ${this.trim().length}`);
// }

// let myname = "hitesh   "
// console.log(myname.truelength)


// String.prototype.truep = function(){
//   console.log(`True length is ${this.trim().length}`)
// }


// let x = "vdr";
// console.log(x.truep)

String.prototype.truelength = function(){
  console.log(`${this.name}`);
  console.log(`true length is: ${this.trim().length()}`);
}

let myname = "hitesh   "
console.log(myname.truelength)