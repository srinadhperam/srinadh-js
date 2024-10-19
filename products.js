const product =[
    {
        id: 1,
        image:'images/aa-removebg-preview.png',
        title:'Headphones',
        price:'$20',
    },
    {
        id: 2,
        image:'images/aa1-removebg-preview.png',
        title:'Microphones',
        price:'$45',
    },
    {
        id: 3,
        image:'images/aa2-removebg-preview.png',
        title:'Smart Watch',
        price:'$30',
    },
    {
        id: 4,
        image:'images/aa3-removebg-preview.png',
        title:'Hp Laptop',
        price:'$70',
    },
    {
        id: 5,
        image:'images/aa4-removebg-preview.png',
        title:'DSLR Camera',
        price:'$60',
    },
    {
        id: 6,
        image:'images/aa5-removebg-preview.png',
        title:'Dask Lamp',
        price:'$35',
    },
    {
        id: 7,
        image:'images/aa6-removebg-preview.png',
        title:'Foldable Mobile',
        price:'$55',
    },
    {
        id: 8,
        image:'images/aa7-removebg-preview.png',
        title:'Air Pods',
        price:'$50',
    },
]
const categories = [...new Set(product.map((item)=>
    {return item}))]
  
 let cart = document.getElementById("root")
 cart.innerHTML = categories.map((item)=>{
    var{image, title, price} = item;
    return(
        `<div class="box">
            <div class="img-box">
                <img src=${image}></img>
            </div>
            <div class="left">
                <p>${title}</p>
                <h2>${price}</h2>
                <button>Add to Cart</button>
                </div>
        </div>`
    )
 }).join('')   