/* this will remove the notification if the user clicked on the button */
function removeNotification() {
  document.querySelector(".notification").remove(); // Removes the notification bar
}

document.querySelector(".notification button").onclick = removeNotification;

/* ........................Swiper Code.............. */

// const swiper = new Swiper('.swiper-container', {
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

/*.............................AN ARRAY CONATINS ALL PRODUCTS...................*/ 

const all=[
{
img:'Images/products/scarves/Crochet Triangle Scarf Crochet Scarf Fall Wrap Crocheted - Etsy.jfif',
name:'Crochet Triangle Scarf Crochet',
price:'10.00',
description:'this is a triangle crochet scarfs for fall season'
},
{
img:'Images/products/scarves/Keyhole Scarf CROCHET PATTERN Ruffle Scarf Gift for Her Crochet Scarf for Winter Scarf for Fall Neck Warmer Beautiful Pattern Crochet - Etsy Denmark.jfif',
name:'Keyhole Scarf',
price:'10.00',
description:'this is a triangle crochet scarfs for fall season'
},
{
img:'Images/products/scarves/La Vie en Rose Scarf Pattern for Ladies _ Free Crochet Tutorial _ Kirsten Holloway Designs.jfif',
name:'La Vie en Rose Scarf',
price:'10.00',
description:'this is a triangle crochet scarfs for fall season'
},
{
img:'Images/products/scarves/Mile of Smile PDF Crochet Scarf Pattern.jfif',
name:' Crochet Scarf',
price:'10.00',
description:'this is a triangle crochet scarfs for fall season'
},
{
img:'Images/products/scarves/white and black triangle scarf.jfif',
name:'chess crochet scarf',
price:'10.00',
description:'this is a triangle crochet scarfs for fall season'
},
{
img:'Images/products/scarves/white and black triangle scarf.jfif',
name:'chess crochet scarf',
price:'10.00',
description:'this is a triangle crochet scarfs for fall season'
},

{
img:'Images/products/scarves/white and some blocks on the scarf.jfif',
name:'Crochet scarf',
price:'10.00',
description:'This is a triangle crochet scarfs for fall season with a stylish, andcolorful edges'
},
{
img:'Images/products/scarves/Crochet Triangle Scarf Crochet Scarf Fall Wrap Crocheted - Etsy.jfif',
name:'fall Wrap crocheted scarf',
price:'10.00',
description:'this is a triangle crochet scarfs for fall season'
},
{
img:'Images/products/scarves/white and black triangle scarf.jfif',
name:'chess crochet scarf',
price:'10.00',
description:'this is a triangle crochet scarfs for fall season'
},

{
img:'Images/products/scarves/white and some blocks on the scarf.jfif',
name:'Crochet scarf',
price:'10.00',
description:'This is a triangle crochet scarfs for fall season with a stylish, and colorful edges'
},
{
img:'Images/products/scarves/Crochet Triangle Scarf Crochet Scarf Fall Wrap Crocheted - Etsy.jfif',
name:'fall Wrap crocheted scarf',
price:'10.00',
description:'this is a triangle crochet scarfs for fall season'
},


{
img:'Images/products/sweater/stripped colorful crochet sweater.jfif',
name:'Stripped sweater',
price:'10.00',
description:'Stripped, stylish colorful crochet sweater'
},

{
img:'Images/products/sweater/white and small flower crochet sweater.jfif',
name:'Flowers sweater',
price:'10.00',
description:'This is White Sweater with some small flowers on it.'
},
{
img:'Images/products/sweater/Sunflower Sweater Pattern_ Crochet pattern _ Ribblr.jfif',
name:'SunFlower pattern sweater',
price:'10.00',
description:'This is a crocheted sweater with a sunflower pattern on it.'
},
{
img:'Images/products/sweater/sunflower on white crochet jacket.jfif',
name:'pinky flowers sweater',
price:'10.00',
description:'This is a White crocheted sweater with small Pink flowers pattern on it.'
},

];

/* ...........................Categories code............ */
const array=[
{
  name: "Dolls",
  img: "Images/products/dolls/dolls.jfif",
},
{
  name: "Sweaters",
  img: "Images/products/sweater/sweater.jpg",
},
{
  name: "Crochet Hooks",
  img: "Images/products/hooks/hooks.jfif",
},
{
  name: "yarns",
  img: "Images/products/yarns/yarns.jfif",
},
{
  name: "Scarves",
  img: "Images/products/scarves/Mile of Smile PDF Crochet Scarf Pattern.jfif",
},

];

function displayCategories(){

let data=array.map(function(category){
  return `
      <div class="col-xxl-6 col-xl-6 col-12">
        <div class="category d-flex justify-content-center align-items-center flex-column my-3">
            <img src="${category.img}" alt="${category.name}" class="category-img img-fluid">         
            <p >${category.name}</p>
            <a href="./ProductDetails.html?category=${category.name}" class="text-decoration-underline">Shop now<i class="mx-2 fa-solid fa-arrow-right"></i></a>           
        </div>
    </div>`;
}).join('');

document.querySelector(".categories .row").innerHTML = data;
}

/*..........................................DISPLAY ALL PRODUCTS WITH PAGINATION........................................ */
const displayAllProducts=function (page=1){
  let data = ``;

  for(let i=(page - 1) * 10;i<page * 10 && i<all.length;i++){
          data += `
              <div class="col-12 col-xxl-4 mb-3">
                <div class="category d-flex justify-content-center align-items-center flex-column">
                    <img src='${all[i].img}' alt='product Image' class="img-fluid images"/>
                </div>
              </div>`;
  }

  document.querySelector('.AllProducts .row').innerHTML = data;


  productsPagination(page,Math.ceil((all.length/10)));
  modal(page);

}
/*...............................................PAGINATION CODE.................................................. */

function productsPagination(page, numberOfPages) {
  
let paginationLink=``;

if(page==1){
    // If the user in the first page the previous button must be disabled 
        paginationLink += `<button  class="page-link" onClick=displayAllProducts('${page-1}') disabled >&laquo</button>`;
}else{      
    paginationLink += `<button  class="page-link" onClick=displayAllProducts('${page-1}') >&laquo</button>`;
}

startPage=Math.ceil(((page-1)/3)*3)+1;
endPage= Math.min(startPage+2, numberOfPages);  /* in order not to exceed the number of pages */


        for(let i=startPage;i<=numberOfPages;i++){
            paginationLink+=`<button class="page-link ${i==page?'active-page':''}" onclick="displayAllProducts('${i}')">${i}</button>`;
        }
    

if(page==numberOfPages){
    // If the user in the last page the next button must be disabled 
    paginationLink += `<button  class="page-link" onClick=displayAllProducts('${parseInt(page)+1}') disabled>&raquo</button>`;
}else{
    paginationLink+=`<button  class="page-link" disabled>...</button>`;
   paginationLink += `<button  class="page-link" onClick=displayAllProducts('${parseInt(page)+1}') >&raquo</button>`;     
}

document.querySelector(".pagination-container").innerHTML = paginationLink;

}

/*................................................ Get Product Data InnerHTML for The Modal .......................................*/

const getProductDataInnerHTMLForTheModal =  (page, currentIndex) => {
const selectedProduct = all[(page - 1) * 10 + currentIndex];

const data = `
        <p>Title: ${selectedProduct.name}</p>
        <p>price: ${selectedProduct.price}</p>
`;

return data; // Return the HTML data to be displayed in the modal
}

/*............................................... Get product Description InnerHTML for the Modal .....................................................*/

const getProductDescriptionInnerHTMLForTheModal =  (page, currentIndex) => {
const selectedProduct = all[(page - 1) * 10 + currentIndex];

const data = `
        <p >${selectedProduct.description}</p>
`;

return data; // Return the HTML data to be displayed in the modal
}

/*.....................................This function to show the modal for the products.............................................*/
function modal(page){
const modal=document.querySelector(".products-modal");
const left=document.querySelector(".left-button");
const right=document.querySelector(".right-button");
const close=document.querySelector(".close-button");
const images=Array.from(document.querySelectorAll(".images"));/* I got all the product images in the website */
let currentIndex=0;

images.forEach(function(img){
    img.addEventListener("click", function(e){
        /* when i click on an image of a product the modal will display and contains the image i clicked src */
        /* also i gave that event listener to all products image  */
        modal.classList.remove("display-none-modal"); /* to let the modal display in the website */
        
        const currentImage=e.target;
        console.log(currentImage.src, currentImage);
        currentIndex=images.indexOf(currentImage);//the current index is known by the index of the image we clicked 

        modal.querySelector("img").setAttribute("src",e.target.src);
        //display the product data in the modal
        modal.querySelector(".productData").innerHTML=getProductDataInnerHTMLForTheModal(page,currentIndex);         
        modal.querySelector(".img .desc").innerHTML=getProductDescriptionInnerHTMLForTheModal(page,currentIndex); 
    });
});

//right button
right.addEventListener("click", function(e){
    currentIndex++;  //inorder to get the next image index
    if(currentIndex>=images.length){
        currentIndex=0;
    }

    const src=images[currentIndex].src; //get the next image src
    modal.querySelector("img").setAttribute("src",src);
    
    modal.querySelector(".productData").innerHTML=  getProductDataInnerHTMLForTheModal(page,currentIndex); //display the product data in the modal
    modal.querySelector(".img .desc").innerHTML= getProductDescriptionInnerHTMLForTheModal(page,currentIndex); 
});

//left button
left.addEventListener("click", function(e){

    currentIndex--;
    if(currentIndex<0){
        currentIndex=images.length-1;
    }
    const src=images[currentIndex].src;
    modal.querySelector("img").setAttribute("src",src);
    //display the product data in the modal
    modal.querySelector(".productData").innerHTML= getProductDataInnerHTMLForTheModal(page,currentIndex); 
    modal.querySelector(".img .desc").innerHTML= getProductDescriptionInnerHTMLForTheModal(page,currentIndex); 
});

//right button, left button, close button WITH KEYBOARD
document.addEventListener("keydown", function(e){
    if(e.code=='ArrowRight'){
        currentIndex++;
        if(currentIndex>=images.length){
            currentIndex=0;
        }
        src= images[currentIndex].src;
        
        modal.querySelector("img").setAttribute("src",src);
        modal.querySelector(".productData").innerHTML= getProductDataInnerHTMLForTheModal(page,currentIndex); //display the product data in the modal
        modal.querySelector(".img .desc").innerHTML= getProductDescriptionInnerHTMLForTheModal(page,currentIndex); 
    }else if (e.code=='ArrowLeft'){
        currentIndex--;
        if(currentIndex<0){
            currentIndex=images.length-1;
        }
        src=images[currentIndex].src;
        
        modal.querySelector("img").setAttribute("src",src);
        modal.querySelector(".productData").innerHTML= getProductDataInnerHTMLForTheModal(page,currentIndex); //display the product data in the modal
        modal.querySelector(".img .desc").innerHTML= getProductDescriptionInnerHTMLForTheModal(page,currentIndex); 
    }else if(e.code=='Escape'){
        modal.classList.add('display-none-modal');
    }
});

//close button with click event
close.addEventListener("click",function(e){

    modal.classList.add("display-none-modal");

});

}



displayAllProducts();
displayCategories();
