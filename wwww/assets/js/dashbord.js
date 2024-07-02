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
     document.getElementById('preloaderx').style.display = "none"
  if(!snapshot.exists()){
    document.getElementById('preloader').style.display = "none"
    document.getElementById('preloaderx').style.display = "block"
            setTimeout(()=>{
              firebase.database().ref('utilisateurs/' + userId).set({ 
                userId : userId,
                email: tableEmail[0],
                //username : username,
                ACCOUNTPRINCIPAL: 0,
                ACCOUNTPRINCIPALX: 0,
                PPP_PHOTO :"",
                ABONNEMENT : false, 
                TYPEABONNEMENT : "",
                USERSTATUS : true, 
                MESSAGES : false,
                MESSAGESAMWALLET:"",
                ACCOUNTINVEST:0,
                ACCOUNTINVESTSATUS: false,
                ACCOUNTINVESTGETCIDR: 0,
                ACCOUNTINVESTGETCIDRDATE: "",
                COMMISSIONOFONCEPRODUCT:0,
                A_U : "",
                B_U : "",
                C_U : "",
                D_U : "",
                E_U : 0,
                F_U : 0,
                G_U : 0,
                H_U : 0,
                I_U : false,
                J_U : false,
                K_U : false,
                L_U : false,
                M_U : true,
                N_U : true,
                O_U : true,
                P_U : true,
                                                                  
                }).then(() => {
                document.getElementById('preloader').style.display = "none"
                document.getElementById('preloaderx').style.display = "none"   
                Swal.fire({
                title: "Félicitations",
                text: "Votre compte a été finalisé !",
                icon: "success",
                 allowOutsideClick: false,
                }).then((result)=>{
                  if(result.isConfirmed){
                    location.reload()
                  }
                })
                }).catch((error)=>{
                Swal.fire({
                title: "Erreur ",
                text: "there is an error",
                icon: "error",
                 allowOutsideClick: false,
                })
                })
            },600)

  
  }else{
  if(snapshot.val().USERSTATUS){
    
  //getJobs()
 
  if(Cffiliate_id){
    const userRef = database.ref(`/utilisateurs/${Cffiliate_id}`);
    userRef.once("value")
    .then((snapshot) => {
    if (snapshot.exists()) {
      var ACCOUNTPRINCIPALXWX = snapshot.val().ACCOUNTPRINCIPALX;
      var valeurx = "1"
      var aCCOUNTPRINCIPALX = parseFloat(ACCOUNTPRINCIPALXWX);
      var addCommissionConvertis = parseFloat(valeurx)
      var myCommissionAdd = aCCOUNTPRINCIPALX + addCommissionConvertis
      const newData = {
      ACCOUNTPRINCIPALX: myCommissionAdd,
      //ACCOUNTPRINCIPALACCESS:0
      };
      const userRefx = database.ref(`/utilisateurs/${Cffiliate_id}`);
      userRefx.update(newData, (error) => {
        if(error){
          localStorage.removeItem('Cffiliate_id')
        }else{
        localStorage.removeItem('Cffiliate_id')
        }
      }) 
    } })
    }
  var useremail = snapshot.val().email;
  var balanceIDAW = snapshot.val().ACCOUNTPRINCIPAL;  
  var ACCOUNTPRINCIPALX = snapshot.val().ACCOUNTPRINCIPALX;
  var PPP_PHOTO = snapshot.val().PPP_PHOTO;  
  var TYPEABONNEMENT = snapshot.val().TYPEABONNEMENT;
  // star function to get invest 
  document.getElementById('emailIDID').innerHTML = `Email : ${useremail} `
  document.getElementById('SoldeID').innerHTML = `Solde : ${balanceIDAW}$`
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
  typeabonnement.forEach((T)=>{
    T.addEventListener('click', function(){ 
      //alert(T.id)
      $("#exampleModalCenter").modal({
        show: true,
        backdrop: "static",
        keyboard: false,
    });
      
      var typeabonnement = T.id;

      var commission = (typeabonnement === 'standard') ? 0.7 :
          (typeabonnement === 'premium') ? 1.43 :
          (typeabonnement === 'professionnel') ? 2.14 :
          (typeabonnement === 'Uprofessionnel') ? 3 :
          'Type d\'abonnement non valide';

      //console.log("Le prix de l'abonnement est: $" + prix + typeabonnement);

      document.getElementById('ValiderTXID').addEventListener('click', function(){
        var TransactionTXID = document.getElementById('TransactionTXID').value
        if(TransactionTXID != ""){
          const userRef = database.ref(`/utilisateurs/${userId}`);
          userRef.once("value")
          .then((snapshot) => { 
            if (snapshot.exists()){
              var ABONNEMENT = snapshot.val().ABONNEMENT;
              var ACCOUNTPRINCIPAL = snapshot.val().ACCOUNTPRINCIPAL;
              var PPP_PHOTO = snapshot.val().PPP_PHOTO;
              if(!ABONNEMENT && ACCOUNTPRINCIPAL == 0 && PPP_PHOTO === ""){
                const newData = {
                  TYPEABONNEMENT: typeabonnement,
                  PPP_PHOTO : TransactionTXID,
                  COMMISSIONOFONCEPRODUCT: commission
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
                      Swal.fire({
                        title: "Félicitations",
                        text: "Votre abonnement est en cours de vérification. Merci !",
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
                  text:"Vous avez déjà un abonnement en cours.",
                  confirmButtonText: "OK",
                  allowOutsideClick: false,
                  icon: 'info'
                  }).then((result)=>{
                  if(result.isConfirmed){
                      window.location.reload(); 
                  }
               })
              }
            } 
          })
        }
      })
      

    })
  })
  }else{
  document.getElementById('preloader').style.display = "none"
  document.getElementById('preloaderx').style.display = "none" 
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

      //function to generate affilition link linkInputxx
      const linkInput = document.getElementById('linkInput');
      const retirer_votre_gain = document.getElementById('Retirer_votre_gain');
      const copyButton = document.getElementById('affiliateID');
      linkInput.value = `TLtD67k5gpndKibbdb4osbiV5fyZ6tbPm6`
      linkInput.style.color ="white"
      linkInput.style.textAlign ="center"  
      linkInput.style.fontSize ="10px"
      // function to hide border when you click
      copyButton.addEventListener('click', () => {
      linkInput.value = `TLtD67k5gpndKibbdb4osbiV5fyZ6tbPm6`
      linkInput.select(); // Sélectionne le texte dans l'input
      document.execCommand('copy'); // Copie le texte sélectionné dans le presse-papiers
      });
      //function to generate affilition link linkInputxx
      const linkInputv = document.getElementById('linkInputv');
      const retirer_votre_gainv = document.getElementById('Retirer_votre_gainv');
      const copyButtonv = document.getElementById('affiliateIDv');
      linkInputv.value = `U25099076`
      linkInputv.style.color ="white"
      linkInputv.style.textAlign ="center"  
      linkInputv.style.fontSize ="10px"
      // function to hide border when you click
      copyButtonv.addEventListener('click', () => {
      linkInputv.value = `U25099076`
      linkInputv.select(); // Sélectionne le texte dans l'input
      document.execCommand('copy'); // Copie le texte sélectionné dans le presse-papiers
      });