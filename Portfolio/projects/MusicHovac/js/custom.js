var d,h,m,s,clr,clock;
var m=function(){
    d=new Date;
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    if(h<10)h="0"+h;
    if(m<10)m="0"+m;
    if(s<10)s="0"+s;
    clock=h+" : "+m+" : "+s;
    clr="#"+h+m+s;
    document.getElementById("as").innerHTML=clock;
    setTimeout(m,10);
    
}
m();