var d,h,m,s,clock,clr,b,c;
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
 b="#";
c="0123456789";
for(var i=0;i<3;b+=c.charAt(Math.floor(Math.random()*c.length)),++i);
document.getElementById("clock").innerHTML=clock;
document.body.style.background=b;

    
setTimeout(cloky,1000);
}
cloky();








