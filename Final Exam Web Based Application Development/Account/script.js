function SignUp(event){
    event.preventDefault();
}

// let fields = getFields();
// let db = new DB();
// db.query('INSERT INTO User (fullname, email, telephone, gender, address, DOB, Password) VALUES 
// ('${fields.fullname}', '${fields.email}',
// '${fields.telephone}','${fields.gender}',
// '${fields.address}','${fields.DOB}',
// '${fields.password}'));

// function getFields(){
//     let inputs = [
//         ..document.querySelectorAll("form[fullname]"),
//     ];

//     let fields = {};

//     inputs.forEach(input => {
//         fields[input.getAttribute("fullname")] = input.value.trim();
//     });

//     return fields;
// }
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function SignUp(){
    var password = document.getElementById("password")
    var capital = /[A-Z]/
    var number = /[0-9]/
    
    if(!/[A-Z]/.test(password)){
        alert("Password must contain Uppercase!")
    }
    
    if(!/[a-z]/.test(password)){
        alert("Password must contain Uppercase!")
    }
    
    if(!/[0-9]/.test(password)){
        alert("Password must contain Number!")
    }

    if(!/[A-Z]/.test(email)){
        alert("Email must contain Uppercase!")
    }
    
    if(!/[a-z]/.test(email)){
        alert("Email must contain Uppercase!")
    }
    
    if(!/[0-9]/.test(email)){
        alert("Email must contain Number!")
    }

    if(password.value < 8 || password.value > 12){
        alert("Password must between 8 and 12!")
    }

    location.replace("../Home/index.html")
    
    return true;
}

