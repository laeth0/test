const getLoginInfo = async function() {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        console.log(response.data.users);
        return response.data.users;
    } catch (error) {
        console.error('Error:', error);
    }
};

/*..................................................This function to validate the login form.................................*/
const activeLoginButton = async function(event) {
    event.preventDefault(); // Prevent form submission

    const emailField = document.querySelector('#EMAIL');
    const passwordField = document.querySelector("#pass");
    const loginInfo = await getLoginInfo();
    console.log(loginInfo);

    let logged_in_user;
    let found = false;
    for (let i = 0; i < loginInfo.length; i++) {
        // trim() removes the spaces before the string and after it
        // compare the entered email and password with the stored ones in the loginInfo array
        if (emailField.value.trim() === loginInfo[i].email && passwordField.value.trim() === loginInfo[i].password) {
            logged_in_user = loginInfo[i];
            found = true;
            break;
        }
    }

    console.log(found);
    if (found) {
        localStorage.setItem('loggedInUser',JSON.stringify(logged_in_user)); //JSON.stringify() to convert the object to a string
        console.log(localStorage.getItem('loggedInUser')+".......");
        alert("Login Successful");
        window.location.href=`profile.html?id=${logged_in_user.id}&username='${logged_in_user.firstName}+" "+${logged_in_user.lastName}'`;
        
    } else {
        alert("Invalid Email or Password");
    }

    emailField.value = "";
    passwordField.value = "";
}


document.querySelector('#submit_login').onclick = activeLoginButton;
