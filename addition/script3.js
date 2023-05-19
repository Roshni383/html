 var1=document.getElementById("num1");
var2=document.getElementById("num2");
document.getElementById("res");
document.getElementById("para");
console.log("hello connected");
function myfuncton()
{
    document.getElementById("demo").innerhtml="100";
}
function add()
{
   
console.log(document.getElementById("num1").value);
console.log(document.getElementById("num2").value);

let sum=eval(var1.value+'+'+var2.value);
console.log(sum);
document.getElementById("para").innerHTML=sum;




    // document.getElementById("para").innerHTML="100";
    // document.getElementById("demo").innerhtml="100";
}
function sub()
{
   
console.log(document.getElementById("num1").value);
console.log(document.getElementById("num2").value);

let sub=eval(var1.value+'-'+var2.value )
console.log(sub);
document.getElementById("para").innerHTML=sub;
}
function mul()
{
   
console.log(var1.value);
console.log(var2.value);

let mul=eval(var1.value+'*'+var2.value )
console.log(mul);
document.getElementById("para").innerHTML=mul;
}
function div()
{
   
console.log(var1.value);
console.log(var2.value);

let div=eval(var1.value+'/'+var2.value )
console.log(div);
document.getElementById("para").innerHTML=div;
}