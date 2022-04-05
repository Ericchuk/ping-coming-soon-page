let inputs = document.querySelector('input');
let error = document.querySelector('h4')
let button = document.querySelector('button');

function displayError(){
    let input = document.querySelector('input').value;
    let email = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(email.test(input) != true){
        inputs.style.border ="1px solid red";
        error.style.display ="block";
        // alert("Name cant be blank");
    }else{
        inputs.style.border ="1px solid blue",
        error.style.display ="none",
        alert("success")
    }
}

button.addEventListener("click", displayError);

