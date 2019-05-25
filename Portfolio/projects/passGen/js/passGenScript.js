var a="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*~+=_-ABCDEFGHIJKLMNOPQRSTUVWXYZ",b="";

var generatepass=function(plength)
{
     b="";
for(var i=0;i<plength;b+=a.charAt(Math.floor(Math.random()*a.length)),++i); return b;
}
    
    
var populateform=function(enterlength){
    document.passGen.output.value=generatepass(enterlength);
}
