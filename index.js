let product = {
data:[{
productName: "Regular black T-shirt",
category: "Topwear",
price: "20",
image: "black-tshirt.jpg"
},

{
productName: "short skirt",
category: "Bottomwear",
price: "35",
image: "short-skirt.jpg"
},

{
productName: "Smart Watch",
category: "watch",
price: "150",
image: "Smart-Watch.jpg"
},

{
productName: "Summer Knit Top",
category: "Topwear",
price: "40",
image: "Summer-Knit-Top.jpeg"
},

{
productName: "Leather Jacket",
category: "Topwear",
price: "160",
image: "Leather-Jacket.jpg"
},

{
productName: "Mens Stylish Trousers",
category: "Bottomwear",
price: "70",
image: "Mens-Stylish-Trousers.jpg"
},

{
productName: "Mens bedford shirt jacket",
category: "Topwear",
price: "178",
image: "Mens-bedford-shirt-jacket.jpeg"
},

{
productName: "Men's Argon Down Pants",
category: "Bottomwear",
price: "110",
image: "Men's-Argon-Down-Pants.jpeg"
}

]


}

for(let item of product.data){

let card = document.createElement("div");
card.classList.add("card", item.category, "hide" )

let imgContainer = document.createElement("div");
imgContainer.classList.add("image-container");

let image = document.createElement("img");
image.setAttribute("src", "Images/" + item.image );

imgContainer.appendChild(image);
card.appendChild(imgContainer);


let container = document.createElement("div");
container.classList.add("container");

let name = document.createElement("h5");
name.innerText = item.productName.toUpperCase();
container.appendChild(name);

let price = document.createElement("h6");
price.innerText = "$" + item.price;
container.appendChild(price);

card.appendChild(container);

document.getElementById("products").appendChild(card);

}

/*
for(let i of product.data){
let card = document.createElement("div");
card.classList.add("card", i.category);
let imgContainer = document.createElement("div");
imgContainer.classList.add("image-container");
let image = document.createElement("img");
image.setAttribute("src" , i.image);
imgContainer.appendChild(image);
card.appendChild(imgContainer);


document.getElementById("products").appendChild(card);
}*/