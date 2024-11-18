/*************************   THIS WILL SHOW THE SIGN In SCREEN IF THE USER CLICKED ON THE profile icon   ***********************************/
// var icon_profile=document.querySelector(".fa-solid.fa-user");

// function fillSignIn(){

//     var data=`
//         <h1>LogIn</h1>

//         <form>
//             <label for="EMAIL">Email:</label>
//             <input type="email" name="email" id=""EMAIL required placeholder="Enter email:" required><br>
            
//             <label for="pass">Password</label>
//             <input type="password" id="pass" placeholder="Enter password:" required ><br><br>

//             <input type="submit" value=login >
//             <a id="signup" href="../HTML/Register.html">Sign up</a>
//         </form>
//         `;

//         document.querySelector("main").innerHTML =data;       

// }

// icon_profile.onclick=fillSignIn();

/*************************   THIS WILL SHOW THE SIGN UP SCREEN IF THE USER CLICKED ON THE Sign Up label  ***********************************/

// var sign_up=document.querySelector("#signup");

// function fillSignUp(){

//     var signUpData=`
//         <form method="post">
//             <label for="username">Username:</label>
//             <input type="text" id="username" name="username" required placeholder="Enter username" >
//             <br>

//             <label for="email">Email:</label>
//             <input type="email" id="username" name="email" required placeholder="Enter your Email">
//             <br>

//             <label for="AGE">Age:</label>
//             <input type="number" min="15" max="80" step="1" name="age" id="AGE" placeholder="Age" required>
//             <br>

//             <label for="password">Password:</label>
//             <input type="password" id="password" placeholder="Enter password" required>
//             <br>

//             <label>Gender:</label>
//             <input type="radio" name="gender" value="male" required><label>Male</label>
//             <input type="radio" name="gender" value="female" required><label>Female</label>
//             <br><br>

//             <input type="submit" value="register">
//         </form>
//         `;

//         document.querySelector("main").innerHTML =signUpData; 
// }

// sign_up.onclick=fillSignUp();

const getLoginInfo = async function() {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        return response.data.users;
    } catch (error) {
        console.error('Error:', error);
    }
};

const getLogedInAccount = async function() {
    console.log(localStorage.getItem('loggedInUser')+".......");
    const users = await getLoginInfo();
    const par=new URLSearchParams(window.location.search);
    for(let i=0;i<users.length;i++){
        if(users[i].id== par.get('id')){
            return users[i];
        }
        else{
            console.log("User not found");
            return null;
        }
    }

    return logedInUser;
}

const displayUserData = async function(){
    const user = await getLogedInAccount();
    if(user){
        const data=`
            <div class="about-user">
                <p class="fw-bold fs-3" >Username: ${user.username}</p>
                <img src="${user.image}" alt="User Image">        
                <p class="user-bio">Born on ${user.birthDate}, I have ${user.hair.color}, ${user.hair.type} hair</p>
            </div>
             <div class="info-section">
                <p class="fw-bold fs-3">Contact</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
            </div>
            <div class="address-section">
                <p class="fw-bold fs-3">Address</p>
                <p>Address: ${user.address.address}</p>
                <p>Country: ${user.address.country}, City: ${user.address.city}</p>
            </div>        
            <button class="fs-4 bg-black w-25 text-white fw-bold rounded-pill"onclick="logoutAction()">Log Out</button>     
        `;
        document.querySelector("main .profile").innerHTML = data;
    }
}
displayUserData();

const logoutAction=function(){
    console.log("Logout clicked");
    localStorage.removeItem('loggedInUser');
    window.location.href='Sign In.html';
}

