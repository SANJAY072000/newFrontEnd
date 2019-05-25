var h,m,s,d,clr;
var f=function(){
h="1234567890";
for(s="",m=0;m<3;s+=h.charAt(Math.floor(Math.round()*h.length)),++m);
clr="#"+s;
      document.body.style.background=clr;
      setTimeOut(f,1000);
}
f();
