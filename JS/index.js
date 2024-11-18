
/* this adds contact us data to the about us page */
let contact=[
    {
        icon:'<i class="fa-solid fa-shop"></i>',
        dec:"ADDRESS",
        data:"THIS IS AN ONLINE STORE"
    },
    {
        icon:'<i class="fa-solid fa-envelope"></i>',
        dec:"EMAIL",
        data:"raheeqmousa99@gmail.com"
    },
    {
        icon:'<i class="fa-solid fa-phone"></i>',
        dec:"CONTACT US",
        data:"+05998372620"
    },
];

let contact_data=``;

for(var i=0;i<contact.length;i++){
    contact_data+=`<div class="contact_info"> 
                    ${contact[i].icon}
                    <span>${contact[i].dec}</span>
                    <span>${contact[i].data}</span>
                   </div>`
};


document.querySelector('.contact_us .row').innerHTML = contact_data;

/* this adds features data to the about us page */
let features= [
    {
        icon:'<i class="fa-solid fa-truck-fast"></i>',
        desc:"Free Shipping",
        cond:"Order above $200"
    },
    {
        icon: '<i class="fa-solid fa-lock"></i>',
        desc:"Secure Payments",
        cond:"Secured by Stripe"
    },
    {
        
        icon:'<img src="Images/about us/features/knitting-needles.png" alt="knitted needles"/>',
        desc:"High quality yarns",
        cond:"treated wool"
    },
];
let data=``;
for(let i=0;i<features.length;i++){
    if(features[i].icon.endsWith("/>") && features[i].icon.startsWith('<img ')){
        data += `<div class='feature'>
         <div class="feature_imgs">${features[i].icon} </div>
        <span>${features[i].desc}</span>
        <span>${features[i].cond}</span>
        </div>`;
    }

    else{
        data += `<div class='feature'>
        ${features[i].icon}
        <span>${features[i].desc}</span>
        <span>${features[i].cond}</span>
        </div>`;
    }      
}

document.querySelector(".features .row").innerHTML=data;