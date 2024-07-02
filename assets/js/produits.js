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
    database.ref('products').once('value', function(snapshot) {
      var productsList = document.getElementById('productsList');
      productsList.innerHTML = ''; // Clear the previous list
      document.getElementById('loading').style.display = "none"
      snapshot.forEach(function(childSnapshot) {
        var product = childSnapshot.val();
        console.log(product)
        var productDiv = document.createElement('div'); 
        var photoDataUrl = 'data:image/png;base64,' + product.urlImage; 
        productDiv.className = 'col-lg-4 col-md-6';
        productDiv.innerHTML = `
        <div class="st__project__single p-relative">
					<div class="st__project__thumb">
						<img src="${photoDataUrl}" alt="" style="max-height: 80vh;">
						<div class="st__project__content">
							<h2 style="color: white;">${product.name}</h2>
							<span><a href="produit-details.html?product_id=${product.idproduct}">Plus de détails</a></span>
						</div>
						<div class="st__project__btn">
							<a href="#"> Contacter <i class="bi bi-whatsapp"></i></a>
						</div>
					</div>
				</div>
        `;
        productsList.appendChild(productDiv);
      });
    });
}fetchProducts()