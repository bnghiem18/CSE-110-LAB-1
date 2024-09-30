const myElement = document.getElementById("subscribe-form");

window.onload = function(){
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
}

function alertSubFunc(event){
    const email = document.getElementById("email").value;
    alert("Subsriber added: "  + email)
}

