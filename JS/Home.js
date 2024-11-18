var span2 = document.getElementById("closeModal");
var modal2 = document.getElementById("OthersModal");
function displayFeature2(image_location,al){
    modal2.style.display = "block";
    document.querySelector('#OthersModal img').src = image_location; 
    document.querySelector('#OthersModal img').alt = al; 
}

span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/*...................................................................................*/
var modal = document.getElementById("myFeatureModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the image, open the modal
function displayFeature(image_location,al){
    modal.style.display = "block";
    document.querySelector('#myFeatureModal img').src = image_location; 
    document.querySelector('#myFeatureModal img').alt = al; 
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


/***********************************************Arrays that contains the images src,alt and type*************************************************** */


let allImages=[
    {
        src: "Images/TeachMe/Scarf/chunky scarf.jfif",
        alt: "Chunky scarf image",
        type: "scarf"
    },
    {
        src: "Images/TeachMe/Scarf/lacy scarf.jfif",
        alt: "Lacy scarf image",
        type: "scarf"
    },
    {
        src: "Images/TeachMe/Sweater/Sunflower Crochet Cropped Cardigans for Women, Crochet Knitted Floral Cardigan, Cardigan Adult for Handmade and as Christmas Day Gift - Etsy.jfif",
        alt: "Sunflower crochet sweater",
        type: "sweater"
    },
    {
        src: "Images/TeachMe/Sweater/Stripped Crochet sweater.jfif",
        alt: "Stripped Crochet Sweater",
        type: "sweater"
    },
    {
        src: "Images/TeachMe/Sweater/harry crochet jacket.jfif",
        alt: "Harry Crochet Jacket",
        type: "sweater"
    }

];

let Sweater=[  
    {
        src: "Images/TeachMe/Sweater/Sunflower Crochet Cropped Cardigans for Women, Crochet Knitted Floral Cardigan, Cardigan Adult for Handmade and as Christmas Day Gift - Etsy.jfif",
        alt: "Sunflower crochet sweater",
        type: "sweater"
    },
    {
        src: "Images/TeachMe/Sweater/Stripped Crochet sweater.jfif",
        alt: "Stripped Crochet Sweater",
        type: "sweater"
    },
    {
        src: "Images/TeachMe/Sweater/harry crochet jacket.jfif",
        alt: "Harry Crochet Jacket",
        type: "sweater"
    }

];

let Scarfs=[
    {
        src: "Images/TeachMe/Scarf/chunky scarf.jfif",
        alt: "Chunky scarf image",
        type: "scarf"
    },
    {
        src: "Images/TeachMe/Scarf/lacy scarf.jfif",
        alt: "Lacy scarf image",
        type: "scarf"
    }
];

/* ........................................This to fill feature scarfs imgs inside the sweaters tab .................. */
function fillFeatureScarfs(){
    let data = ``;
    for (let i = 0; i<Scarfs.length; i++) {
            data += `
                    <img src='${Scarfs[i].src}' alt='${Scarfs[i].alt}' url='${Scarfs[i].src}' a='${Scarfs[i].alt}' class='scarf'/>`;
    }
    document.querySelector('#Scarfs-tab-pane .d-flex').innerHTML = data;

    const imageElements = document.querySelectorAll("#Scarfs-tab-pane .d-flex img");
    imageElements.forEach(function(img) {
    img.addEventListener("click", function() {
        const url = this.getAttribute("url"); // Use data-url for the video URL
        const alt = this.getAttribute("a"); // Use data-a for the video alt
        displayFeature2(url,alt); // give the display function the url to display
        }); 
    });
}

/* ........................................This to fill feature sweaters imgs inside the sweaters tab .................. */
function fillFeatureSweaters(){
    let data = ``;
    for (let i = 0; i <Sweater.length; i++) {
            data += `
                    <img src='${Sweater[i].src}' alt='${Sweater[i].alt}' url='${Sweater[i].src}' a='${Sweater[i].alt}' class='sweater' />`;
    }
    document.querySelector('#Sweaters-tab-pane .d-flex').innerHTML = data;

    const imageElements = document.querySelectorAll("#Sweaters-tab-pane .d-flex img");
    imageElements.forEach(function(img) {
    img.addEventListener("click", function() {
        const url = this.getAttribute("url"); // Use data-url for the video URL
        const alt = this.getAttribute("a"); // Use data-a for the video alt
        displayFeature2(url,alt); // give the display function the url to display
    }); 

});
}

/* ........................................This to fill all feature pieces imgs inside the sweaters tab .................. */

function fillAllFeaturePieces(){
    let data = ``;
    for (let i = 0; i <allImages.length; i++) {
            data += `
                    <img src='${allImages[i].src}' alt='${allImages[i].alt}' url='${allImages[i].src}' a='${allImages[i].alt}' class='all'/>`;
    }
    document.querySelector('#All-tab-pane .d-flex').innerHTML = data;

    const imageElements = document.querySelectorAll("#All-tab-pane .d-flex img");
    imageElements.forEach(function(img) {
    img.addEventListener("click", function() {
        const url = this.getAttribute("url"); // Use data-url for the video URL
        const alt = this.getAttribute("a"); // Use data-a for the video alt
        displayFeature(url,alt); // give the display function the url to display
        }); 

    });

    
    buttonsForDisplayingAllFeatures();
}

/*****************************************This is for the action of the left,right buttons in all features tab************************************ */

function buttonsForDisplayingAllFeatures() {
    const imageElements = document.querySelectorAll("#All-tab-pane .d-flex img");

    const right=document.querySelector(".right-button");
    const left=document.querySelector(".left-button");
    const images=Array.from(document.querySelectorAll(".all"));  

    let currentIndex=0;
    images.forEach(function(img){
        img.addEventListener("click", async function(e){
            /* when i click on an image of a product the modal will display and contains the image i clicked src */
            /* also i gave that event listener to all products image  */
            
            const currentImage=e.target;
            currentIndex=images.indexOf(currentImage);//the current index is known by the index of the image we clicked 

            const src=images[currentIndex].src; //get the next image src
            modal.querySelector("img").setAttribute("src",src);
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

    });

    //left button
    left.addEventListener("click", function(e){

        currentIndex--;
        if(currentIndex<0){
            currentIndex=images.length-1;
        }
        
        const src=images[currentIndex].src; //get the next image src
        modal.querySelector("img").setAttribute("src",src);
    });

    //right button, left button, close button WITH KEYBOARD
    document.addEventListener("keydown", function(e){
        if(e.code=='ArrowRight'){
            currentIndex++;
            if(currentIndex>=images.length){
                currentIndex=0;
            }

            const src=images[currentIndex].src; //get the next image src
            modal.querySelector("img").setAttribute("src",src);
        }else if (e.code=='ArrowLeft'){
            currentIndex--;
            if(currentIndex<0){
                currentIndex=images.length-1;
            }

            const src=images[currentIndex].src; //get the next image src
            modal.querySelector("img").setAttribute("src",src);
        }
    });

}




fillFeatureSweaters();
fillAllFeaturePieces();
fillFeatureScarfs();




/*************************************************** Pagination ********************************************** */
