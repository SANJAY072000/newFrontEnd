let ul=document.querySelector("#list"),li;

let addButton=document.querySelector("#add");

addButton.addEventListener("click",
    ()=>{
let input=document.querySelector("#input");
 let   item=input.value;
 let   textNode=document.createTextNode(item);
    ul=document.querySelector("#list");
    if(item==""){
        let h=document.createElement("h2");
        h.textContent="Kindly add a TODO first !";
        document.querySelector(".controls").appendChild(h); 
        setTimeout(()=>{h.remove();},2500);

    }
    else
    {
     li=document.createElement("li");
        let checkBox=document.createElement("input");
        checkBox.type="checkbox";
        checkBox.setAttribute("id","check");
        let label=document.createElement("label");
                label.appendChild(textNode);
        li.appendChild(checkBox);
        li.appendChild(label);
        ul.insertBefore(li,ul.children[0]);
//        ul.appendChild(li)
    }input.value="";
});

let removeButton=document.querySelector("#remove");

removeButton.addEventListener("click",
  ()=>{
li=ul.children;let y=0,j;
for(j=0;j<li.length;++j){if(li[j].children[0].checked){y=1;break;}}
    if(!y){
        let h=document.createElement("h2");
        h.textContent="None of the TODO is done !";
        document.querySelector(".controls").appendChild(h); 
        setTimeout(()=>{h.remove();},2500);
}else{
for(let i=0;i<li.length;++i){
    for(;li[i]&&li[i].children[0].checked;li[i].remove());
}}});

let removeAll=document.querySelector("#removeall").addEventListener
("click",
 ()=>{
    let li=document.querySelectorAll("li");
    if(li[0]==undefined){let h=document.createElement("h2");
        h.textContent="No TODO to remove !";
        document.querySelector(".controls").appendChild(h); 
        setTimeout(()=>{h.remove();},2500);}
 li.forEach((a)=>a.remove());
});