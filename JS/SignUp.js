let persons = [];

function addPerson(name, age, email, password, gender) { /*make the  entered data by the user an object an then add it to the array "persons" */
    let foundPerson = persons.find(function(person) {
        return person.email === email && person.password === password;
    });

    if(foundPerson){ /* This Check if the entered email and password already exist or not*/
        alert("Email and password already exist!");
        return;
    }
    
    /* If the entered email and password are not found in the array, add the new person to the array */
    persons.push({name, age, email, password, gender});

    /*localStorage.setItem(persons,JSON.stringify()); */
}

let reg_button = document.querySelector("#submit_signup");
let n = document.querySelector("#username");
let a = document.querySelector("#age");
let e = document.querySelector("#email");
let p = document.querySelector("#password");

console.log(reg_button, n, e, a, p);

// Attach the event to the form, not the button
let form = document.querySelector("#signup_form");

form.onsubmit = function(event) {
    event.preventDefault();
    
    let gender;
    let r1 = document.querySelector("#male");
    let r2 = document.querySelector("#female");

    /* assigning gender of user according to the selected radio button */
    if (r1.checked) {
        gender = "male";
    } else if (r2.checked) {
        gender = "female";
    }

    addPerson(
        n.value,
        a.value,
        e.value,
        p.value,
        gender
    );

    console.log(persons);
}

console.log(persons);
