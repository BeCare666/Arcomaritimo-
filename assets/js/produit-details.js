const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product_id");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAm5xkBXPVBjlk1PIlx8PbKsB1DFcm1skk",
    authDomain: "arcomaritimo-1a3b7.firebaseapp.com",
    databaseURL: "https://arcomaritimo-1a3b7-default-rtdb.firebaseio.com",
    projectId: "arcomaritimo-1a3b7",
    storageBucket: "arcomaritimo-1a3b7.appspot.com",
    messagingSenderId: "1073433641426",
    appId: "1:1073433641426:web:0e698edef2d764db54080b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference to the Firebase database
  var database = firebase.database();

  // Function to fetch and display products
  function fetchProducts() { 
const productRef = database.ref("products/" + productId);
productRef.once("value")
.then(function(snapshot) {
document.getElementById('loading').style.display = "none"
var productDiv = document.getElementById('productsList');
const product = snapshot.val();
var photoDataUrl = 'data:image/png;base64,' + product.urlImage; 
productDiv.innerHTML = `
<div class = "card" style="background-color: #0a1d2e;">
<!-- card left -->
<div class = "product-imgs">
<div class = "img-display">
  <div class = "img-showcase">
    <img src = "${photoDataUrl}" alt = "shoe image">
    <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt = "shoe image">
    <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt = "shoe image">
    <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt = "shoe image">
  </div>
</div>
<div class = "img-select" style="display: none;">
  <div class = "img-item">
    <a href = "#" data-id = "1">
      <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt = "shoe image">
    </a>
  </div>
  <div class = "img-item">
    <a href = "#" data-id = "2">
      <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt = "shoe image">
    </a>
  </div>
  <div class = "img-item">
    <a href = "#" data-id = "3">
      <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt = "shoe image">
    </a>
  </div>
  <div class = "img-item">
    <a href = "#" data-id = "4">
      <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt = "shoe image">
    </a>
  </div>
</div>
</div>
<!-- card right -->
<div class = "product-content" style="background-color: #0a1d2e; ">
<h2 class = "product-title" style="color: white;">${product.name}</h2>
<a href = "#" class = "product-link">visit acroshippingline</a>
<div class = "product-rating" style="display: none;">
  <i class = "fas fa-star"></i>
  <i class = "fas fa-star"></i>
  <i class = "fas fa-star"></i>
  <i class = "fas fa-star"></i>
  <i class = "fas fa-star-half-alt"></i>
  <span>4.7(21)</span>
</div>

<div class = "product-price" style="display: none;">
  <p class = "last-price">Old Price: <span>$257.00</span></p>
  <p class = "new-price">New Price: <span>$249.00 (5%)</span></p>
</div>

<div class = "product-detail">
  <h2 style="color: white;">about this item: </h2>
  <p>${product.description} </p>
  <ul>
    <li>Available: <span>in stock</span></li>
    <li>Category: <span>${product.category}</span></li>
    <li>Shipping Area: <span>All over the world</span></li>
    <li>Shipping Fee: <span>Free</span></li>
  </ul>
</div>

<div class = "purchase-info">
 <button class="btn btn-success">Veillez-nous contacter  <i class = "fab fa-whatsapp"></i></button>
</div>

<div class = "social-links">
  <p> <strong style="margin-top: 20px !important;">Share At:</strong> </p> &nbsp;&nbsp;
  <a href = "https://www.facebook.com/sharer/sharer.php?u=URL_A_PARTAGER">
    <i class = "fab fa-facebook-f"></i>
  </a>
  <a href = "https://twitter.com/intent/tweet?url=URL_A_PARTAGER&text=Texte%20à%20partager">
    <i class = "fab fa-twitter"></i>
  </a>
  <a href = "https://api.whatsapp.com/send?text=Texte%20à%20partager%20URL_A_PARTAGER">
    <i class = "fab fa-whatsapp"></i>
  </a>
  <a href = "https://www.linkedin.com/shareArticle?mini=true&url=URL_A_PARTAGER&title=Titre&summary=Résumé&source=Source">
    <i class = "fab fa-linkedin"></i>
  </a>
</div>
</div>
</div>
`;
});
     
}fetchProducts()

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);