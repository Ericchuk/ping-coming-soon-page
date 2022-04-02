let inputs = document.querySelector('input');
let error = document.querySelector('h4')
let button = document.querySelector('button');

function displayError(){
    let input = document.querySelector('input').value;
    if(input == null || input == ""){
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