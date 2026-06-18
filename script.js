let leads=[];

function addLead(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let status=document.getElementById("status").value;

if(name==="" || email==="" || phone===""){
alert("Fill all fields");
return;
}

let lead={
name,email,phone,status
};

leads.push(lead);

localStorage.setItem("leads",JSON.stringify(leads));

displayLeads();
}

function displayLeads(){

let leadList=document.getElementById("leadList");

leadList.innerHTML="";

leads.forEach((lead,index)=>{

leadList.innerHTML += `
<div class="lead">
<h3>${lead.name}</h3>
<p>${lead.email}</p>
<p>${lead.phone}</p>
<p>Status: ${lead.status}</p>

<button onclick="deleteLead(${index})">
Delete
</button>
</div>
`;

});

document.getElementById("count").innerText=leads.length;
}

function deleteLead(index){

leads.splice(index,1);

localStorage.setItem("leads",JSON.stringify(leads));

displayLeads();
}

function searchLead(){

let search=document.getElementById("search").value.toLowerCase();

let cards=document.querySelectorAll(".lead");

cards.forEach(card=>{

if(card.innerText.toLowerCase().includes(search))
card.style.display="block";
else
card.style.display="none";

});

}

window.onload=function(){

let data=localStorage.getItem("leads");

if(data){
leads=JSON.parse(data);
displayLeads();
}

}