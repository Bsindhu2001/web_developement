function add(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var sum = parseInt(num1) + parseInt(num2);
    console.log(sum);
   //document.getElementById("ans").innerHTML= "the sum of the numbers is"+sum; 
  alert("addition of the numbers are " +sum);


}


function subtract(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var result = parseInt(num1) - parseInt(num2);
    console.log(result);
    alert("subtract of the numbers are " +result);
   
}

function multiply(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var result = parseInt(num1) * parseInt(num2);
    //console.log(result);
  // document.getElementById("ans").innerHTML= "the sum is "+result; 
  alert("multiplication of the numbers are " +result);

}


function divide(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var result = parseInt(num1) / parseInt(num2);
   // console.log(result);
  // document.getElementById("ans").innerHTML= result; 
  alert("division of the numbers are " +result);
}

//  var a = prompt("enter number 1st");
//  var b = prompt("enter number 2nd");

//  var result = parseInt(a)+parseInt(b);

//  alert("the result is " +result);
// var x = prompt("enter value of x ");
// x++
// alert("the value of x is  "+x);






