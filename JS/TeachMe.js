let categories=[
    {
        name: "Carpets",
    },{
        name: "Dolls",
    },
    {
        name: "Sweaters",
    },
    {
        name:"Bandanas"
    },
    {
        name: "Book covers"
    }
];

/* In this function, we're creating a new inner HTML string that contains a div for each category.*/
function displayCategoryList(){
    const result=categories.map(function(category){
        //col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-1
        return `
        <div class="category ">
            <h2>${category.name}</h2>
            <a href="TeachMeVids.html?category=${category.name}">Videos</a>
        </div> 
        `;

    }).join('');  // THE DATA WE GOT IS DISPLAYED AND THERE IS ',' BETWEEN THEM SO WE JOIN THE DATA WITH '' (EMPTY QUOTES)

    document.querySelector('.categories .row').innerHTML = result;
}
displayCategoryList();