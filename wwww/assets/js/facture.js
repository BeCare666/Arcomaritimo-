const urlParams = new URLSearchParams(window.location.search);
var product_link = urlParams.get("product_link_id"); 
localStorage.setItem('product_link', product_link);
const firebaseConfig = {
    apiKey: "AIzaSyCy27rX3pQq-D-r7yE1iJJFLjpqS780l5I",
    authDomain: "com-b538d.firebaseapp.com",
    databaseURL: "https://com-b538d-default-rtdb.firebaseio.com",
    projectId: "com-b538d",
    storageBucket: "com-b538d.appspot.com",
    messagingSenderId: "786359262858",
    appId: "1:786359262858:web:042b149db65567ef989773"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
 var tableCommission = []
 var tablebalanceIDAW  = []
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     var  userId = user.uid;
      localStorage.setItem('unserconnectuserId', userId);
      const userRef = database.ref(`/utilisateurs/${userId}`);
      userRef.once("value")
      .then((snapshot) => {
      if(!snapshot.exists()){
        document.getElementById('preloader').style.display = "none"
        Swal.fire({
            title: "Erreur ",
            text: "Une erreur s'est produite",
            icon: "success",
             allowOutsideClick: false,
            }).then((result)=>{
              if(result.isConfirmed){
                window.location.href = "login.html"
              }
            })
      }else{
      if(snapshot.val().USERSTATUS){
      var COMMISSIONOFONCEPRODUCT = snapshot.val().COMMISSIONOFONCEPRODUCT;
      var balanceIDAW = snapshot.val().ACCOUNTPRINCIPAL;
      tableCommission.push(COMMISSIONOFONCEPRODUCT)
      tablebalanceIDAW.push(balanceIDAW)
    }else{
        Swal.fire({
        title: "Ooops",
        text:"Votre compte est suspendu.",
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        icon: 'error',
        footer:`<a href="mailto:amobilewallet.inter@gmail.com">Contact technical support.</a>`
        }) 
    }
    }
    })
      getOrdersToValidate();
    }
  });

  async function getOrdersToValidate() {
    const dbRef = firebase.database().ref();
    const ordersQuery = dbRef.child('orders').orderByChild('Idproduct').equalTo(product_link)
    const ordersSnapshot = await ordersQuery.once("value");
    var orders = [];     
     document.getElementById('preloader').style.display = "none"
    ordersSnapshot.forEach((orderSnapshot) => { 
      const order = orderSnapshot.val();
      orders.push(order);
      document.getElementById('factureIdDiv').innerHTML = 
      `
      <div class="container invoice-container">
      <hr style="border: 7px solid black;">
        <div class="row header">
          
            <div class="col-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon"><strong>.fr</strong>
            </div>
            <div class="col-6 text-right">
                <strong class="title">Facture</strong>
            </div> 
        </div><hr>
        <div>
            <div class="row">
              <div class="col-4">
                <div style="opacity: 0;">  
                  <p>Référence de paiement ${order.Référence_de_paiement} </p><br>
                  <p>Vendu par ${order.Vendu_par}</p><br>
                 
                  <p>TVA 20%</p><br>
                  <p>Date de la facture/Date de la livraison: ${order.Date_de_la_facture_Date_de_la_livraison}</p><br>
                </div>
                
               <p> Référence de paiement ${order.Référence_de_paiement}</p><br>
               
            </div>
                <div class="col-8">
                    <div class=" paid-info">
                    <strong>Payé</strong><br>
                     <p>Référence de paiement ${order.Référence_de_paiement} </p><br>
                  <p>Vendu par ${order.Vendu_par}</p><br>
                 
                    <p>TVA 20%</p><br>
                   <hr  >
                   <p>Date de la facture/Date de la livraison: ${order.Vendu_par}</p><br>
                   <p> Numéro de la facture:  ${order.Numéro_de_la_facture}</p><br>
                    <p>Total à payer:  ${order.Total_à_payer}</p>
                    </div>
                    <div class="row" style="border: 1px rgb(155, 150, 150) solid;">
                        <div class="col-6">
                            /Date de la livraison
                        </div>
                        <div class="col-6">
                            ture/Date de la livraison
                        </div>
                    </div>
                </div>
               <hr>
                
            </div>
        </div>
        <p style="margin-top: 20px !important;">Veuillez contacter le Service Client en visitant le lien suivant: <a href="#">www.amazon.fr/contact-us</a></p>
    <hr>
        <div class="info">
            <div class="row">
                <div class="col-4">
                    <strong>Adresse de facturation : ${order.Adresse_de_facturation}</strong><br>
                    <p></p>
                </div>
                <div class="col-4">
                    <strong>Adresse de livraison ${order.Adresse_de_livraison}</strong><br>
                    <p></p>
                </div>
                <div class="col-4">
                    <strong>Vendu par </strong><br>
                    ${order.Vendu_par}
                    France<br>
                    TVA FR12487773327
                </div>
            </div>
        </div>
    <hr>
        <div class="info">
            <div class="row">
                <div class="col-md-6">
                    <strong>Date de la commande</strong><br>
                    <p>${order.Date_de_la_facture_Date_de_la_livraison}</p>
                </div>
                <div class="col-md-6">
                    <strong>Numéro de la commande</strong><br>
                   <p> ${order.Numéro_de_la_commande}</p>
                </div>
            </div>
        </div>
        <hr>
        <div class="details">
            <div class="row">
                <div class="col-12">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Qté</th>
                            <th>Prix Unitaire HT</th>
                            <th>Taux TVA</th>
                            <th>Prix Unitaire TTC</th>
                            <th>Total TTC</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>${order.Description} </td>
                            <td>${order.Qte}</td>
                            <td>${order.Prix_Unitaire}</td>
                            <td>20 %</td>
                            <td>${order.Prix_Unitaire}</td>
                            <td>${order.Total_à_payer}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <hr>
        <div class="totals">
            <div class="row">
                <div class="col-12">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>Taux TVA</th>
                            <th>Total HT</th>
                            <th>TVA</th>
                            <th>Total TTC</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>20 %</td>
                            <td>27,07 €</td>
                            <td>5,42 €</td>
                            <td>3${order.Total_à_payer} €</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div><br><br><br><hr>
        <p style="text-align: left !important; font-size: 5px !important;">
          Amazon Services Europe S.à r.l., 38 avenue John F. Kennedy, L-1855, LuxembourgR.C.S. Luxembourg: B 93815; Business license number: 100416 VAT number LU19647148TVA déclarée par Amazon dans le pays de livraison
        </p>
        
    </div> 
      `
      console.log(order.Statuts_Command_Validate)
    });
  }

  
  async function validateOrder(userId, orderId) {
    try {
        const updates = {};
        updates[`orders/${orderId}/Statuts_Command_Validate`] = true;
        updates[`utilisateurs/${userId}/validatedOrders/${orderId}`] = true;
        
        await firebase.database().ref().update(updates);
        
        Swal.fire({
            title: "Succès",
            text: "Commande validée avec succès.",
            icon: "success",
            allowOutsideClick: false,
            showConfirmButton:true,
            confirmButtonText:"Confirmer",
        }).then((result) => {
            if (result.isConfirmed) {
            const unserconnectuserId = localStorage.getItem("unserconnectuserId")
            var aCCOUNTPRINCIPALX = parseFloat(tablebalanceIDAW[0]);
            var addCommissionConvertis = parseFloat(tableCommission[0])
            var myCommissionAdd = aCCOUNTPRINCIPALX + addCommissionConvertis
            var  myCommissionAddSomme = parseFloat(myCommissionAdd.toFixed(2));
            console.log(addCommissionConvertis)
            const newData = {
            ACCOUNTPRINCIPAL: myCommissionAddSomme,
            };
            const userRefx = database.ref(`/utilisateurs/${unserconnectuserId}`);
            userRefx.update(newData, (error) => {
            if(error){
            //localStorage.removeItem('Cffiliate_id')
             }else{
                Swal.fire({
                    position: "top-end",
                    html: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="green" class="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                    </svg> Vous avez gagné ${addCommissionConvertis}$`,
                    showConfirmButton: false,
                    timer: 3000,
                    didClose: () => {
                        // Code à exécuter lorsque le timer expire et que l'alerte se ferme
                        maFonction();
                      }
                  });

                  function maFonction() {
                    window.location.href = "tables.html"
                  }
            }
            }) 
            }
        });
    } catch (error) {
        Swal.fire({
            title: "Erreur",
            text: "Une erreur s'est produite lors de la validation de la commande. Veuillez réessayer.",
            icon: "error",
            allowOutsideClick: false,
        });
        console.error("Erreur lors de la validation de la commande:", error);
    }
}

var Valider_cette_commande = document.getElementById('Valider_cette_commandeId');
Valider_cette_commande.addEventListener('click', async (event) => {
    // Récupérez les données userId et orderId à partir des attributs data product_link
    const userId = localStorage.getItem("unserconnectuserId")
    const product_link = localStorage.getItem("product_link")
     

    // Appelez la fonction validateOrder avec les arguments récupérés
    try {
      await validateOrder(userId, product_link);
    } catch (error) {
      console.error('Erreur lors de la validation de la commande:', error);
    }
  });