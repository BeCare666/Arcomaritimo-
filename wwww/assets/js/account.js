      
      const firebaseConfig = {
       apiKey: "AIzaSyCy27rX3pQq-D-r7yE1iJJFLjpqS780l5I",
       authDomain: "com-b538d.firebaseapp.com",
       databaseURL: "https://com-b538d-default-rtdb.firebaseio.com",
       projectId: "com-b538d",
       storageBucket: "com-b538d.appspot.com",
       messagingSenderId: "786359262858",
       appId: "1:786359262858:web:042b149db65567ef989773"
       };
       const unserconnectId = localStorage.getItem("unserconnect")
       const Cffiliate_id = localStorage.getItem("Cffiliate_id")
       firebase.initializeApp(firebaseConfig);
       const database = firebase.database();
       var tableOfPrice = []
       var tableEmail = []
       // document.getElementById('sameToBody').style.display = "none"
       
       firebase.auth().onAuthStateChanged(function(user) { 
       if(user){
       var userId = user.uid;
       localStorage.setItem('unserconnectuserId', userId)
       var useremail = user.email;
       tableEmail.push(useremail)
       const userRef = database.ref(`/utilisateurs/${userId}`);
       userRef.once("value")
       .then((snapshot) => {
          document.getElementById('preloader').style.display = "none"
         
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
       var useremail = snapshot.val().email;
       var balanceIDAW = snapshot.val().ACCOUNTPRINCIPAL;  
       var ACCOUNTPRINCIPALX = snapshot.val().ACCOUNTPRINCIPALX;
       var PPP_PHOTO = snapshot.val().PPP_PHOTO;  
       var TYPEABONNEMENT = snapshot.val().TYPEABONNEMENT;
      
       var ACCOUNTPRINCIPALW = parseFloat(balanceIDAW);
       var sommeParain = parseFloat(ACCOUNTPRINCIPALX)
       var newSommeSoldeWithParain = ACCOUNTPRINCIPALW + sommeParain
       // star function to get invest 
       document.getElementById('emailIDID').innerHTML = `Email : ${useremail} `
       document.getElementById('SoldeID').innerHTML = `Solde : ${newSommeSoldeWithParain}$`
       document.getElementById('ParainID').innerHTML = `Parain(s) : ${ACCOUNTPRINCIPALX}$`
      if(PPP_PHOTO && balanceIDAW ==0 ){
     document.getElementById('ttypeabonnement').innerHTML = `
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
       <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
       </svg> : ${TYPEABONNEMENT} `
      }else if (PPP_PHOTO && balanceIDAW !=0 ){
       document.getElementById('ttypeabonnement').innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
       <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
       </svg> : ${TYPEABONNEMENT} `
     
      }else{document.getElementById('ttypeabonnement').innerHTML = `Aucun Abonnement` }
       // star function to abonnement  
       var typeabonnement = document.querySelectorAll('.typeabonnement'); 
       document.getElementById('Retirer_votre_gain').addEventListener('click', function(){
       $("#exampleModalCenter").modal({
        show: true,
        backdrop: "static",
       keyboard: false,
       }); 

       document.getElementById('ValiderTXID').addEventListener('click', function(){ 
              //var dial_codeDiv = document.querySelector('.iti__selected-dial-code');
              //var dial_code = dial_codeDiv.textContent 
              var TransactionTXID = document.getElementById('TransactionTXID').value
              var phone = document.getElementById('mobile_codex').value
              //var phone = dial_code + dial_codemobile
              if(TransactionTXID != "" && phone != "" && TransactionTXID != 0){
                const userRef = database.ref(`/utilisateurs/${userId}`);
                userRef.once("value")
                .then((snapshot) => { 
                 
                if (snapshot.exists()){
                    var ABONNEMENT = snapshot.val().ABONNEMENT;
                    var ACCOUNTPRINCIPAL = snapshot.val().ACCOUNTPRINCIPAL;
                    var ACCOUNTPRINCIPALX = snapshot.val().ACCOUNTPRINCIPALX;
                    var I_U = snapshot.val().I_U;
                    if(I_U){
                    if(ABONNEMENT && ACCOUNTPRINCIPAL != 0 ){
                     var ACCOUNTPRINCIPALW = parseFloat(ACCOUNTPRINCIPAL);
                     var TransactionTXIDW = parseFloat(TransactionTXID) 
                     var sommeParain = parseFloat(ACCOUNTPRINCIPALX)
                     var newSommeSoldeWithParain = ACCOUNTPRINCIPALW + sommeParain 
                     if(newSommeSoldeWithParain > TransactionTXIDW){  
                     var newSommeSolde = newSommeSoldeWithParain - TransactionTXIDW
                      const newData = {
                        ACCOUNTPRINCIPAL : newSommeSolde,
                        ACCOUNTPRINCIPALX: 0,
                        I_U:true
                        
                        };
                        const userRefx = database.ref(`/utilisateurs/${userId}`);
                        userRefx.update(newData, (error) => {
                          if(error){
                            Swal.fire({
                              title: "Ooops",
                              text:"error",
                              confirmButtonText: "OK",
                              allowOutsideClick: false,
                              icon: 'error'
                              }).then((result)=>{
                              if(result.isConfirmed){
                                  window.location.reload(); 
                              }
                           })
                          }else{
                            const dateActuelle = new Date();
                            // Obtenez les composantes de la date et de l'heure
                            const jour = dateActuelle.getDate();
                            const mois = dateActuelle.getMonth() + 1; // Les mois commencent à 0, donc ajoutez 1
                            const annee = dateActuelle.getFullYear();
                            const heures = dateActuelle.getHours();
                            const minutes = dateActuelle.getMinutes();
                            // Formatez la date et l'heure
                            const dateFormatee = `${jour}/${mois}/${annee} ${heures}h:${minutes}min`;
                            //console.log(dateFormatee);
                            // Function to add a gain with status to the user's gains array
                            function addGainToUser(gain, phone, status, time) {
                            const newGain = { gain: gain, phone: phone, status: status, time:time};
                            userRef.child("A_U").push(newGain);
                            }              
                            // Usage
                            addGainToUser(TransactionTXIDW, phone, true, dateFormatee); // Add a gain of 100 with "won" status
                            //console.log("La mise à jour a réussi !");

                            Swal.fire({
                              title: "Félicitations",
                              text: `Votre retrait est en cours de vérification. 
                              Après cette vérification et confirmée, les fonds seront 
                              disponibles sous 24 à 72 heures. !`,
                              icon: "success",
                               allowOutsideClick: false,
                              }).then((result)=>{
                                if(result.isConfirmed){
                                  location.reload()
                                }
                              })
                          }
                        }) 
                     } else if(newSommeSoldeWithParain == TransactionTXIDW) {
                            var newSommeSoldeWithParain = ACCOUNTPRINCIPALW + sommeParain
                            var newSommeSolde = newSommeSoldeWithParain - TransactionTXIDW
                            const newData = {
                            ACCOUNTPRINCIPAL: 0,
                            ACCOUNTPRINCIPALX: 0,
                            PPP_PHOTO :"",
                            ABONNEMENT : false, 
                            TYPEABONNEMENT : "",
                            COMMISSIONOFONCEPRODUCT : 0,
                            I_U:false
                              };
                              const userRefx = database.ref(`/utilisateurs/${userId}`);
                              userRefx.update(newData, (error) => {
                                if(error){
                                  Swal.fire({
                                    title: "Ooops",
                                    text:"error",
                                    confirmButtonText: "OK",
                                    allowOutsideClick: false,
                                    icon: 'error'
                                    }).then((result)=>{
                                    if(result.isConfirmed){
                                        window.location.reload(); 
                                    }
                                 })
                                }else{
                                  const dateActuelle = new Date();
                                  // Obtenez les composantes de la date et de l'heure
                                  const jour = dateActuelle.getDate();
                                  const mois = dateActuelle.getMonth() + 1; // Les mois commencent à 0, donc ajoutez 1
                                  const annee = dateActuelle.getFullYear();
                                  const heures = dateActuelle.getHours();
                                  const minutes = dateActuelle.getMinutes();
                                  // Formatez la date et l'heure
                                  const dateFormatee = `${jour}/${mois}/${annee} ${heures}h:${minutes}min`;
                                  //console.log(dateFormatee);
                                  // Function to add a gain with status to the user's gains array
                                  function addGainToUser(gain, phone, status, time) {
                                   const newGain = { gain: gain, phone: phone, status: status, time:time};
                                   userRef.child("A_U").push(newGain);
                                   }              
                                   // Usage
                                   addGainToUser(TransactionTXIDW, phone, true, dateFormatee); // Add a gain of 100 with "won" status
                                  //console.log("La mise à jour a réussi !");
      
                                  Swal.fire({
                                    title: "Félicitations",
                                    text: `Votre retrait est en cours de vérification. 
                                    Après cette vérification et confirmée, les fonds seront 
                                    disponibles sous 24 à 72 heures. !`,
                                    icon: "success",
                                     allowOutsideClick: false,
                                    }).then((result)=>{
                                      if(result.isConfirmed){
                                        location.reload()
                                      }
                                    })
                                }
                              }) 
                          
                     }else{
                     Swal.fire({
                     title: "info",
                     text:"Votre solde est insuffisant",
                     confirmButtonText: "OK",
                     allowOutsideClick: false,
                     icon: 'info'
                     })
                     }
                    }else{
                    Swal.fire({
                    title: "info",
                    text:"Vous ne pouvez pas effectué cette opération. Merci",
                    confirmButtonText: "OK",
                    allowOutsideClick: false,
                    icon: 'info'
                    })
                    
                    }
                  }else{
                    Swal.fire({
                      title: "info",
                      text:"Vous devez parainner une personne avant d'effectuer cette opération. Merci",
                      confirmButtonText: "OK",
                      allowOutsideClick: false,
                      icon: 'info'
                      }) 
                  }

                  } 
                })
              }else{
              Swal.fire({
              title: "Ooops",
              text:"L'un des champs est vide",
              confirmButtonText: "OK",
              allowOutsideClick: false,
              icon: 'error'
              })    
              }
       })
       })

       typeabonnement.forEach((T)=>{
         T.addEventListener('click', function(){ 
           //alert(T.id)
           $("#exampleModalCenter").modal({
             show: true,
             backdrop: "static",
             keyboard: false,
         });
           var typeabonnement = T.id

           
     
         })
       })

       // start function to get retrait list
      var userListP =  document.getElementById('Mes_retraitsList');
      const userListUl = document.createElement("span");
      var div = document.getElementById('createAllproduct');
       var A_U = snapshot.val().A_U;
       //console.log("Utilisateur récupéré :", UserGETALLWALLET);
       // Convertir l'objet d'utilisateurs en un tableau d'objets
       const userArray = Object.entries(A_U).map(([key, value]) => ({ id: key, ...value }));
       //function to controle the paiement
       // Trier le tableau en fonction de la valeur du champ "comptValidé"
       userArray.sort((a, b) => {
       // Mettre les comptes validés en bas
       if (a.status && !b.status) {
           return -1;
       }
       // Mettre les comptes non validés en haut
       if (!a.status && b.status) {
           return 1;
       }
       // Garder l'ordre actuel si les deux utilisateurs ont la même valeur pour "comptValidé"
       return 0;
       });
       // Parcourez les données des utilisateurs et ajoutez-les à la liste
       const userListBody = document.getElementById('userListBody');

       for (const userId in userArray) {
           const usergal = userArray[userId];
           const userRow = document.createElement("tr");
          
           userRow.innerHTML = `
            ${usergal.status ?
              ` <td style="padding-right: 10px; margin: 5px !important;"">${usergal.time}</td>
               <td style="padding-right: 10px; margin: 5px !important;"">${usergal.gain}$</td>
               <td style="margin: 5px !important;">${usergal.phone}</td>`:
               ` <td style="padding-right: 10px; margin: 5px !important;"" class="nostatus">${usergal.time}</td>
               <td style="padding-right: 10px; margin: 5px !important;" class="nostatus">${usergal.gain}$</td>
               <td style="margin: 5px !important;" class="nostatus">${usergal.phone}</td>`
           }`;
           
           userListBody.appendChild(userRow);
       }
        // end function to get retrait list

       }else{
       document.getElementById('preloader').style.display = "none" 
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
       }else{
         window.location.href = "login.html"
       }
       
       })
      
      //function to generate affilition link
       const linkInput = document.getElementById('linkInput');
       const retirer_votre_gain = document.getElementById('Retirer_votre_gain');
       const copyButton = document.getElementById('affiliateID');
       linkInput.value = `Cliquer et Copier ici votre lien de parainage.`
       linkInput.style.color ="white"
       linkInput.style.textAlign ="center"  
       linkInput.style.fontSize ="12px"
       // function to hide border when you click
       copyButton.addEventListener('click', () => {
       linkInput.value = `https://aaaaaaaacv.html`
       linkInput.select(); // Sélectionne le texte dans l'input
       document.execCommand('copy'); // Copie le texte sélectionné dans le presse-papiers
       });

