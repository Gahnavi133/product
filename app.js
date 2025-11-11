const products = [
  {id:1, title:"Wireless Headphones", price:"₹2,499", cat:"gadgets", img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSH-L1wptEWh_pqtT02_z_3VR0N31W7Glad3erC8ElPv9Jk9UI4AwmPRhZ_LEp5r6FJyR5BTiMTh9R5ZI7I9bHOegW8d_3PrpB27t8j8gOx"},
  {id:2, title:"Dark Chocolate Box", price:"₹799", cat:"chocolates", img:"https://images-cdn.ubuy.co.in/633b2c181b0bca35e43f5b16-ubuy-online-shopping.jpg"},
  {id:3, title:"City Car Model X", price:"₹5,00,000", cat:"cars", img:"https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/City/12093/1755764990493/front-left-side-47.jpg"},
  {id:4, title:"Smart Watch", price:"₹3,199", cat:"gadgets", img:"https://img.tatacliq.com/images/i14/437Wx649H/MP000000010665811_437Wx649H_202311071729061.jpeg"},
  {id:5, title:"Assorted Truffles", price:"₹599", cat:"chocolates", img:"https://assets.winni.in/product/primary/2022/11/78452.jpeg?dpr=1&w=500"},
  {id:6, title:"Sedan LX", price:"₹9,00,000", cat:"cars", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7myeRqTtCvmCmidRnwAx-nh52HsEgJsJ7g&s"},
];

const container = document.getElementById("productContainer");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

// Render products
function renderProducts(filteredProducts) {
  container.innerHTML = ""; // clear old products

  filteredProducts.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = p.img;
    img.alt = p.title;
    img.classList.add("product-img");

    const title = document.createElement("h3");
    title.textContent = p.title;

    const price = document.createElement("p");
    price.textContent = p.price;
    price.classList.add("price");

    const btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.onclick = () => alert(`${p.title} added to cart!`);

    card.append(img, title, price, btn);
    container.appendChild(card);
  });
}

// Filter logic
function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  const filtered = products.filter(p => {
    const matchTitle = p.title.toLowerCase().includes(searchText);
    const matchCategory = selectedCategory === "all" || p.cat === selectedCategory;
    return matchTitle && matchCategory;
  });

  renderProducts(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);

// Initial render
renderProducts(products);
