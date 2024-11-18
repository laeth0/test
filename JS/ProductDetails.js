const scarves = [
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
];
const sweaters=[
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

const yarns=[];
const hooks=[];
const dolls=[];



/*.........................................Display products accoarding to the clicked on category...........................................*/

const displayProducts=function(){
    
    const parameters=new URLSearchParams(window.location.search);
    const categoryClickedOn=parameters.get('category');

    if(categoryClickedOn=="Sweaters")
        displaySweaters();
    else if(categoryClickedOn=="Scarves")
        displayScarves();
    else if(categoryClickedOn=="yarns")
        displayYarns();
    else if(categoryClickedOn=="Crochet Hooks")
        displayHooks();
    else if(categoryClickedOn=="Dolls")
        displayDolls();
    
}
/*.........................................Display Sweaters...........................................*/
const displaySweaters=function (page=1){
    let data = ``;

    if(sweaters.length==0){
        document.querySelector('.products .container').innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
        <img src='Images/products/no products yet.WEBP' alt="cartoon bear saying to products yet" class="images" />
        </div>`;
        return;
    }

    for (let i = (page - 1) * 6; i < page * 6 && i<sweaters.length; i++) {
            data += `
                    <div class="col-12 col-xxl-4 mb-3">
                    <img src='${sweaters[i].img}' alt='Sweater Image' class="img-fluid images"/>
                    </div>`;
    }

    document.querySelector('.products .row').innerHTML = data;

    productsPagination(page,Math.ceil((sweaters.length/6)),"Sweaters");

}

/*.........................................Display Scarves...........................................*/
const displayScarves= function (page=1){
    let data = ``;

    if(scarves.length==0){
        document.querySelector('.products .container').innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
        <img src='Images/products/no products yet.WEBP' alt="cartoon bear saying to products yet" class="images" />
        </div>`;
        return;
    }

    for (let i = (page - 1) * 6; i < page * 6 && i<scarves.length; i++) {  //we will skip (page-1)*6 products
            data += `
                    <div class="col-12 col-xxl-4 mb-3">
                    <img src='${scarves[i].img}' alt='Scarf Image' class="img-fluid images"/>
                    </div>`;
    }
    document.querySelector('.products .row').innerHTML = data;

    productsPagination(page,Math.ceil((scarves.length/6)),"Scarves");
    
}

/*.........................................Display Dolls...........................................*/
const displayDolls= function (page=1){
    let data = ``;

    if(dolls.length==0){
        document.querySelector('.products .container').innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
        <img src='../Images/products/no products yet.WEBP' alt="cartoon bear saying to products yet" class="images" />
        </div>`;
        return;
    }

    for (let i = (page - 1) * 6; i < page * 6 && i<dolls.length; i++) {
            data += `
                    <div class="col-12 col-xxl-4 mb-3">
                    <img src='${dolls[i].img}' alt='doll Image' class="img-fluid"/>
                    </div>`;
    }

    document.querySelector('.products .row').innerHTML = data;
    productsPagination(page,dolls.length/6,"Dolls");
}

/*.........................................Display Hooks...........................................*/
const displayHooks= function (page=1){
    let data = ``;

    if(hooks.length==0){
        document.querySelector('.products .container').innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
        <img src='Images/products/no products yet.WEBP' alt="cartoon bear saying to products yet" class="images" />
        </div>`;
        return;
    }

    for (let i = (page - 1) * 6; i < page * 6 && i<hooks.length; i++) {
            data += `
                    <div class="col-12 col-xxl-4 mb-3">
                    <img src='${hooks[i]}' alt='hook Image' class="img-fluid images"/>
                    </div>`;
    }
    document.querySelector('.products .row').innerHTML = data;
    productsPagination(page,hooks.length/6,"Hooks");
}

/*.........................................Display Yarns...........................................*/
const displayYarns= function (page=1){
    let data = ``;

    if(yarns.length==0){
        document.querySelector('.products .container').innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
        <img src='Images/products/no products yet.WEBP' alt="cartoon bear saying to products yet" class="images" />
        </div>`;
        return;
    }

    for (let i = (page - 1) * 6; i < page * 6 && i<scarves.length; i++) {
            data += `
                    <div class="col-12 col-xxl-4 mb-3">
                    <img src='${yarns[i]}' alt='yarn Image' class="img-fluid images"/>
                    </div>`;
    }
    document.querySelector('.products .row').innerHTML = data;
    productsPagination(page,sweaters.length/6,"yarns");
}

/*............................................Pagination code............................................*/
        /* This part of code to display the pagination to the page under the products */
function productsPagination(page, numberOfPages, type_of_product) {
    
    let paginationLink=``;

    if(page==1){
        // If the user in the first page the previous button must be disabled 
        if(type_of_product=="Sweaters"){
            paginationLink += `<button  class="page-link" onClick=displaySweaters('${page-1}') disabled >&laquo</button>`;
        }
        else if(type_of_product=="Scarves"){
            paginationLink+=`<button class="page-link" onClick=displayScarves(${page-1}) disabled>&laquo</button>`;
        }
        else if(type_of_product=="yarns"){
            paginationLink+=`<div class="page-link" onClick=displayYarns(${page-1}) disabled>&laquo</button>`;
        }
        else if(type_of_product=="Hooks"){
            paginationLink+=`<div class="page-link" onClick=displayHooks(${page-1}) disabled >&laquo</button>`;
        }
        else if(type_of_product=="Dolls"){
            paginationLink+=`<div class="page-link" onClick=displayDolls(${page-1}) disabled>&laquo</button>`;         
        }
    }else{
        
       if(type_of_product=="Sweaters"){
            paginationLink += `<button  class="page-link" onClick=displaySweaters('${page-1}') >&laquo</button>`;
        }
        else if(type_of_product=="Scarves"){
            paginationLink+=`<button class="page-link" onClick=displayScarves(${page-1}) >&laquo</button>`;
        }
        else if(type_of_product=="yarns"){
            paginationLink+=`<div class="page-link" onClick=displayYarns(${page-1})>&laquo</button>`;
        }
        else if(type_of_product=="Hooks"){
            paginationLink+=`<div class="page-link" onClick=displayHooks(${page-1})>&laquo</button>`;
        }
        else if(type_of_product=="Dolls"){
            paginationLink+=`<div class="page-link" onClick=displayDolls(${page-1})>&laquo</button>`;         
        }
    }

    startPage=Math.ceil(((page-1)/3)*3)+1;
    endPage= Math.min(startPage+2, numberOfPages);  /* in order not to exceed the number of pages */

    
        if(type_of_product=="Sweaters")
            for(let i=startPage;i<=endPage;i++){
                //if the page 1 is selected then the background of the button whice have the number on it must change its background
                // when the button is clicked I will show the data for the specific page number that clicked on 
                paginationLink+=`<button  class="page-link ${i==page?'active-page':''}" onClick="displaySweaters('${i}')">${i}</button>`; 
            }
        else if(type_of_product=="Scarves")
            for(let i=startPage;i<=numberOfPages;i++){
                paginationLink+=`<button class="page-link ${i==page?'active-page':''}" onclick="displayScarves('${i}')">${i}</button>`;
            }
        else if(type_of_product=="yarns")
            for(let i=startPage;i<=numberOfPages;i++){
                paginationLink+=`<button class="page-link ${i==page?'active-page':''}" onclick="displayYarns('${i}')">${i}</button>`;
            }
        else if(type_of_product=="Hooks")
            for(let i=startPage;i<=numberOfPages;i++){
                paginationLink+=`<button class="page-link ${i==page?'active-page':''}" onclick="displayHooks('${i}')">${i}</button>`;
            }
        else if(type_of_product=="Dolls")
            for(let i=startPage;i<=numberOfPages;i++){
                paginationLink+=`<button class="page-link ${i==page?'active-page':''}" onclick="displayDolls('${i}')">${i}</button>`;
            }
        

    if(page==numberOfPages){
        // If the user in the last page the next button must be disabled 

        if(type_of_product=="Sweaters")
            paginationLink += `<button  class="page-link" onClick=displaySweaters('${parseInt(page)+1}') disabled>&raquo</button>`;
        else if(type_of_product=="Scarves")
            paginationLink+=`<button class="page-link" onClick=displayScarves(${parseInt(page)+1}) disabled>&raquo</button>`;
        else if(type_of_product=="yarns")
            paginationLink+=`<div class="page-link" onClick=displayYarns(${parseInt(page)+1}) disabled>&raquo</button>`;
        else if(type_of_product=="Hooks")
            paginationLink+=`<div class="page-link" onClick=displayHooks(${parseInt(page)+1}) disabled>&raquo</button>`;
        else if(type_of_product=="Dolls")
            paginationLink+=`<div class="page-link" onClick=displayDolls(${parseInt(page)+1}) disabled>&raquo</button>`;
        
    }else{
        paginationLink+=`<button  class="page-link" disabled>...</button>`;

        if(type_of_product=="Sweaters"){
            paginationLink += `<button  class="page-link" onClick=displaySweaters('${parseInt(page)+1}') >&raquo</button>`;
        }
        else if(type_of_product=="Scarves"){
            paginationLink+=`<button class="page-link" onClick=displayScarves(${parseInt(page)+1}) >&raquo</button>`;
        }
        else if(type_of_product=="yarns"){
            paginationLink+=`<div class="page-link" onClick=displayYarns(${parseInt(page)+1})>&raquo</button>`;
        }
        else if(type_of_product=="Hooks"){
            paginationLink+=`<div class="page-link" onClick=displayHooks(${parseInt(page)+1})>&raquo</button>`;
        }
        else if(type_of_product=="Dolls"){
            paginationLink+=`<div class="page-link" onClick=displayDolls(${parseInt(page)+1})>&raquo</button>`;         
        }
        
    }
 
    document.querySelector(".pagination-container").innerHTML = paginationLink;
    modal(page);

}

//displayAllProducts();
displayProducts();

/*................................................ Get Product Data InnerHTML for The Modal .......................................*/

const getProductsDataInnerHTMLModalForClcikedOnCategory= (page, currentIndex)=>{
    const searched_for_params=new URLSearchParams(window.location.search);
    const clicked_on_category=searched_for_params.get('category');

    if(clicked_on_category=="Sweaters"){
        const selectedProduct=sweaters[(page-1)*6 + currentIndex];
        const data=`
            <p>Title: ${selectedProduct.name}</p>
            <p>price: ${selectedProduct.price}</p>
        `;
        return data;
    }else if(clicked_on_category=="Scarves"){
        const selectedProduct=scarves[(page-1)*6 + currentIndex];
        const data=`
            <p>Title: ${selectedProduct.name}</p>
            <p>price: ${selectedProduct.price}</p>
        `;
        return data;
    }else if(clicked_on_category=="Dolls"){
        const selectedProduct=dolls[(page-1)*6 + currentIndex];
        const data=`
            <p>Title: ${selectedProduct.name}</p>
            <p>price: ${selectedProduct.price}</p>
        `;
        return data
    }else if(clicked_on_category=="yarns"){
        const selectedProduct=yarns[(page-1)*6 + currentIndex];
        const data=`
            <p>Title: ${selectedProduct.name}</p>
            <p>price: ${selectedProduct.price}</p>
        `;
        return data;
    }else if(clicked_on_category=="Hooks"){
        const selectedProduct=hooks[(page-1)*6 + currentIndex];
        const data=`
            <p>Title: ${selectedProduct.name}</p>
            <p>price: ${selectedProduct.price}</p>
        `;
        return data;
    }

}
/*............................................... Get product Description InnerHTML for the Modal .....................................................*/

const getProductDescriptionInnerHTMLForTheModal =  (page, currentIndex) => {
    const parameters=new URLSearchParams(window.location.search);
    const clicked_on_category=parameters.get('category');

    if(clicked_on_category=="Sweaters"){
        const selectedProduct=sweaters[(page-1)*6+currentIndex];
        const data=`
            <p>${selectedProduct.description}</p>
        `;
        return data;
    }else if(clicked_on_category=="Scarves"){
        const clickedOnProduct=scarves[(page-1)*6+currentIndex];
        const data=`
            <p>${clickedOnProduct.description}</p>
        `;
        return data;
    }else if(clicked_on_category=="Dolls"){
        const clickedOnProduct=dolls[(page-1)*6+currentIndex];
        const data=`
            <p>${clickedOnProduct.description}</p>
        `;
        return data;
    }else if(clicked_on_category=="yarns"){
        const clickedOnProduct=yarns[(page-1)*6+currentIndex];
        const data=`
            <p>${clickedOnProduct.description}</p>
        `;
        return data;
    }else if(clicked_on_category=="Hooks"){
        const clickedOnProduct=hooks[(page-1)*6+currentIndex];
        const data=`
            <p>${clickedOnProduct.description}</p>
        `;
        return data;
    }

  }

/*............................This function display the modal for the clicked on product........................*/

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
            modal.querySelector(".productData").innerHTML=getProductsDataInnerHTMLModalForClcikedOnCategory(page,currentIndex);         
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
        
        modal.querySelector(".productData").innerHTML=  getProductsDataInnerHTMLModalForClcikedOnCategory(page,currentIndex); //display the product data in the modal
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
        modal.querySelector(".productData").innerHTML= getProductsDataInnerHTMLModalForClcikedOnCategory(page,currentIndex); 
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
            modal.querySelector(".productData").innerHTML= getProductsDataInnerHTMLModalForClcikedOnCategory(page,currentIndex); //display the product data in the modal
            modal.querySelector(".img .desc").innerHTML= getProductDescriptionInnerHTMLForTheModal(page,currentIndex); 
        }else if (e.code=='ArrowLeft'){
            currentIndex--;
            if(currentIndex<0){
                currentIndex=images.length-1;
            }
            src=images[currentIndex].src;
            
            modal.querySelector("img").setAttribute("src",src);
            modal.querySelector(".productData").innerHTML= getProductsDataInnerHTMLModalForClcikedOnCategory(page,currentIndex); //display the product data in the modal
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