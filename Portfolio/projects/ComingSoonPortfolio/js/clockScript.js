var d,h,m,s,clock;
var cloky=function()
{
   d=new Date;
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();

if(h<=9)
    {
        h="0"+h;
    }
if(m<=9)
    {
        m="0"+m;
    }
if(s<=9)
    {
        s="0"+s;
    }
clock=h+":"+m+":"+s;
 

document.getElementById("cloc").innerHTML=clock;


    
setTimeout(cloky,1000);
}
cloky();








