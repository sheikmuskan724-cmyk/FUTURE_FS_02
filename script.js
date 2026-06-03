function addLead() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if(name === "" || email === "" || phone === ""){
        alert("Please fill all fields");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
    "<b>Name:</b> " + name +
    "<br><b>Email:</b> " + email +
    "<br><b>Phone:</b> " + phone +
    '<br><button onclick="this.parentElement.remove()">Delete</button>';

    document.getElementById("leadList").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}