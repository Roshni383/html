let but=document.querySelectorAll("button");
let res=document.getElementById("result");
let result=document.getElementById("result");
for(i=0;i<but.length;i++)
{
  
    but[i].addEventListener("cllick",() =>
    {
        const butvalue=but[i].textcontent;
        if(butvalue==="C")
        {
            clearresult();
        }
        else if(butvalue==="=")
        {
            equalsresult();
        }
        else
        {
            appendvalue(butvalue);
        }
    })
}
function clearresult()
{
     res.value="";
}
function equalsresult()
{
    
}
function appendvalue(but)
