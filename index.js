// TOPIC 1

// Here we are initializing variables function.

function variables(){
   var string = "Riyaz"
   var number =  24
   var boolean = true
   var notDefined = undefined
   var nothing = null
   var array = ["riyaz", 24, true, undefined, null] // Arrays can store any data type. To get any value from array we need to know the index.
   var object = {names: "riyaz", age: 24, bool: true} // Objects can store any data type.  to get any value from the object we need to know the key.


   console.log(string)
   console.log(number)
   console.log(boolean)
   console.log(notDefined)
   console.log(nothing)
   console.log(array) // To print entire array we simple print variable name.
   console.log(array[0]) // To print specific element of array we use index with bracket notation, eg: ([0], [5])
   console.log(object) //  To print entire object we simple print variable name.
   console.log(object.names) //  To print specific element of object we use key with dot notation, eg: (.names, .age)

}

// Here we are calling variables function.
variables()
// ==========================================================

// TOPIC 2

// Here we are writing conditionalStatements function to determine which number is greater by using conditional statements.

function conditionalStatements(){
   var num1 = 24
   var num2 = 27
   // Here we are comparing num1 and num2 to know which is greater number with if and else
   // If takes boolean value to run the code, if not else code will execute.

   if (num1 > num2){
      console.log("num1 is greater")
   }else {
      console.log("num2 is greater")
   }
   
}

// Were are calling conditionalStatements here.

conditionalStatements()
// ==================================================

// TOPIC 3

// Here we are initialing forloops function. 

function forloops(){
// forloop has 3 main things 1.initializing or assigining, 2.comparison, 3. increment or decrement
// untill the comparison is true the loop gonna run.
// Here we are printing 10 numbers from 0 to 9 by using i as a counter.  
for ( var i=0; i<10; i++){
      console.log(i)
   }
}

// Here we are calling forloop function
forloops()

// Here we are initializing whileloop function.
function whileloop(){
   
// whileloop has 3 main things 1.initializing or assigining, 2.comparison, 3. increment or decrement
// untill the comparison is true the loop gonna run.
// Here we are printing 10 numbers from 9 to 0 by using j as a counter. 
   var j = 10
   while (j>0){
      console.log(j)
      j--
   }
}

// Here we are calling whileloop function
whileloop()


// TOPIC 4

// Here we are initializing addTwoNumbers function.
// if we observe above functions does not have any orgiments or parameters.
// Here we are taking a,b as orgiments or parameters to make sum.
// Here we are using console.log to print. we are'nt using return statement.
function addTwoNumbers(a,b){
   console.log(a+b)
}

// Here we are calling addTwoNumbers function
addTwoNumbers(24,27)

// Here we are using return statemnt to return the data from subTwoNumbers function.
function subTwoNumbers(a,b){
   return a-b
}

// Here we are explicitely or additionally writing console.log to print data which is returning fro subTwoNumbers.

console.log(subTwoNumbers(24,27))











