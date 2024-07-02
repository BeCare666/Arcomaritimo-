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

let userId = null;
const orderListElement = document.getElementById('order-list');

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    userId = user.uid;
    localStorage.setItem('unserconnectuserId', userId);
    getOrdersToValidate(userId);
  }
});

async function getOrdersToValidate(userId) {
  const dbRef = firebase.database().ref();
  const userRef = dbRef.child(`utilisateurs/${userId}`);

  const userSnapshot = await userRef.once("value");
  const userData = userSnapshot.val();
  const ACCOUNTPRINCIPAL = userData.ACCOUNTPRINCIPAL;
  const PPP_PHOTO = userData.PPP_PHOTO;
  const ABONNEMENT = userData.ABONNEMENT;
  const lastValidationDate = userData?.lastValidationDate;
  var typeabonnement = userData.TYPEABONNEMENT ;

  var limitxcv = (typeabonnement === 'standard') ? 3 :
      (typeabonnement === 'premium') ? 5 :
      (typeabonnement === 'professionnel') ? 8 :
      (typeabonnement === 'Uprofessionnel') ? 12 :
      'Type d\'abonnement non valide';
  if(ABONNEMENT && ACCOUNTPRINCIPAL != 0){
  const currentDate = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
  if (lastValidationDate === currentDate) {
    const validatedOrders = userData?.validatedOrders || {};
    const validatedOrderIds = Object.keys(validatedOrders);
    var orders = [];
    for (const orderId of validatedOrderIds) {
      const orderSnapshot = await dbRef.child(`orders/${orderId}`).once("value"); 
      orders.push(orderSnapshot.val());
    }

    displayOrders(orders, true);
  } else {
    const ordersQuery = dbRef.child('orders').orderByChild('Statuts_Command_Validate').equalTo(false).limitToFirst(limitxcv);
    const ordersSnapshot = await ordersQuery.once("value");
    var orders = [];
       
    ordersSnapshot.forEach((orderSnapshot) => { 
      const order = orderSnapshot.val();
      order.id = orderSnapshot.key;
      orders.push(order);
    });

    const updates = {};
    updates[`utilisateurs/${userId}/validatedOrders`] = orders.reduce((acc, order) => {
      acc[order.id] = true;
      return acc;
    }, {});
    updates[`utilisateurs/${userId}/lastValidationDate`] = currentDate;
    await dbRef.update(updates);

    displayOrders(orders, false);
  }
  }else{
    document.getElementById('preloader').style.display = "none"
    const orderListElementx = document.getElementById('order-listx');
     const card_bodyId = document.getElementById('card-bodyId'); 
     card_bodyId.style.display = "none"
    orderListElementx.innerHTML = 
    ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg> Vous n'êtes pas encore abonnés
  
    `
  }
  }


function displayOrders(orders, validated) {
  document.getElementById('preloader').style.display = "none"
  // Convertir l'objet d'utilisateurs en un tableau d'objets
  const userArray = Object.entries(orders).map(([key, value]) => ({ id: key, ...value }));

  // Trier le tableau en fonction de la valeur du champ "Statuts_Command_Validate"
  userArray.sort((a, b) => {
    // Mettre les comptes non validés en haut
    if (!a.Statuts_Command_Validate && b.Statuts_Command_Validate) {  
      return -1;
    }
    // Mettre les comptes validés en bas
    if (a.Statuts_Command_Validate && !b.Statuts_Command_Validate) {
      return 1;
    }
    // Garder l'ordre actuel si les deux utilisateurs ont la même valeur pour "Statuts_Command_Validate"
    return 0;
  });

  // Vider la liste des commandes affichée précédemment
  orderListElement.innerHTML = '';

  // Parcourir chaque commande pour les afficher
  userArray.forEach(order => {
    const row = document.createElement('tr');
    row.style.fontSize = "10px";

    const uniqueId = `icon-${order.Idproduct}`;
    // Définir les icônes de statut
    var status = order.Statuts_Command_Validate;
    var statusIcon = status 
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
           <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
         </svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
           <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
         </svg>`;

    // Définir les icônes d'action
    var actionIcon = status 
      ? `<!--<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
           <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
           <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
         </svg>-->  </div><button class="btn btn-success" disabled>Validée</button> `
      : `<a href="facture.html?product_link_id=${order.Idproduct} "> <button class="btn btn-danger">Valider</button>`;
         // Définir les icônes d'action wity
         var actionIconwity = status 
         ? `<div id="${uniqueId}" onclick="handleIconClick('${uniqueId}')" style="color: white !important;"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
      </svg>
      </div>`
         : `<svg style="opacity: 0.5 !important;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
          </svg>
            `;
  
    // Ajouter le contenu des cellules de la ligne
    row.innerHTML = `
      <td>#${order.Idproduct}</td>
      <td>${order.Total_à_payer} $</td> 
      <td>${statusIcon}</td>
      <td>${actionIcon}</td>
      <td>${order.Référence_de_paiement}</td>
      <td>${order.Qte}</td>
      <td style="cursor: pointer;">
       ${actionIconwity}
      </td>
    `; 
    // Ajouter la ligne au tableau
    orderListElement.appendChild(row);
  });
}
function handleIconClick(iconId) {
document.getElementById('preloaderwity').style.display = "block"

setTimeout(()=>{
   document.getElementById('preloaderwity').style.display = "none"
  Swal.fire({
    position: "top-end",
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="green" class="bi bi-check2-circle" viewBox="0 0 16 16">
    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
    </svg> Transfert de facture effectué`,
    showConfirmButton: false,
    timer: 3000,
    didClose: () => {
        // Code à exécuter lorsque le timer expire et que l'alerte se ferme
        //maFonction();
      }
  });

},5000)

}
async function validateOrder(userId, orderId) {
  const updates = {};
  updates[`orders/${orderId}/Statuts_Command_Validate`] = true;
  updates[`utilisateurs/${userId}/validatedOrders/${orderId}`] = true;
  await firebase.database().ref().update(updates);
  alert('Commande validée avec succès.');
  getOrdersToValidate(userId);
}