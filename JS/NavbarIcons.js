/*.......................Function to show the sign in screen when the profile icon is clicked and show th profile page when user is signed in................................................*/
const profileIconAction = function(e){
    
    console.log(localStorage.getItem('loggedInUser')+".......");

    let loged_in_user=localStorage.getItem('loggedInUser');
    if(loged_in_user){
        const user=JSON.parse(loged_in_user);
        window.location.href=`profile.html?id=${user.id}&username='${user.firstName}+" "+${user.lastName}'`;
    }else{
        window.location.href="Sign In.html";
        console.log("not logged in");
    }

    e.preventDefault();
}

document.querySelector('.fa-user').onclick=profileIconAction;


const cartAction=function(e){
    console.log("Cart clicked");
    window.location.href="Cart.html";
    e.preventDefault();
}

document.querySelector('.fa-cart-shopping').onclick=profileIconAction;