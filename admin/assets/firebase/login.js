const firebaseConfig = {
    apiKey: "AIzaSyAm5xkBXPVBjlk1PIlx8PbKsB1DFcm1skk",
    authDomain: "arcomaritimo-1a3b7.firebaseapp.com",
    databaseURL: "https://arcomaritimo-1a3b7-default-rtdb.firebaseio.com",
    projectId: "arcomaritimo-1a3b7",
    storageBucket: "arcomaritimo-1a3b7.appspot.com",
    messagingSenderId: "1073433641426",
    appId: "1:1073433641426:web:0e698edef2d764db54080b"
    };
   firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    // Créer une référence à la base de données Firebase
    const dbRef = firebase.database().ref();
 document.getElementById('preloader').style.display = "none"
    // Obtenez une référence à l'emplacement contenant les données d'utilisateur
    const usersRef = dbRef.child("utilisateurs");
      // Écoute de l'événement "click" sur le bouton de recherche
      // Écoute de l'événement "click" sur le bouton de recherche ToacceptCookies
    function submitmy(){
        var email = document.getElementById('yourEmail').value;
        var password = document.getElementById('yourPassword').value
    document.getElementById('preloader').style.display = "block"
    // Obtenez l'e-mail et le mot de passe de l'utilisateur
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
          // La connexion a réussi, vous pouvez accéder à l'utilisateur
          document.getElementById('preloader').style.display = "none"
          var user = userCredential.user;
          var useruid = user.uid;
          if(user.emailVerified){
          
          document.getElementById('yourEmail').value = ""
          document.getElementById('yourPassword').value = ""
          Swal.fire({
              icon: 'success',
              title:"Succès",
              allowOutsideClick: false,
              text : `Vous êtes connecté avec succès !`,
          })
          localStorage.setItem('unserconnect', useruid)
          localStorage.setItem('unserconnectmail', email)
          // funnction to get cookies options     
          localStorage.setItem("Email", email);
          localStorage.setItem("Password", password);
          setTimeout(()=>{
          window.location.href = "index.html"
          },5000)
          }else{
             document.getElementById('yourEmail').value = ""
            document.getElementById('yourPassword').value = ""
            Swal.fire({
            title: "Ooops",
            text: "Vous n'avez pas encore validé votre e-mail !",
            icon: 'info'
            }).then((result)=>{
            if(result.isConfirmed){
              window.location.href = "login.html"
            }
            })
          }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      //console.error('Error:', errorMessage);
      if (errorCode === 'INVALID_LOGIN_CREDENTIALS'){
      console.error('Error:', errorCode, errorMessage);
       document.getElementById('preloader').style.display = "none"
        document.getElementById('yourEmail').value = ""
        document.getElementById('yourPassword').value = ""
      Swal.fire({
          icon: 'error',
          title:"Erreur ",
          allowOutsideClick: false,
          text : `L'utilisateur n'existe pas avec cet adresse mail !`,
      })
     
    }else if(errorCode === 'auth/wrong-password'){
      document.getElementById('preloader').style.display = "none"
       document.getElementById('yourEmail').value = ""
          document.getElementById('yourPassword').value = ""
  
      Swal.fire({
          icon: 'error',
          title:"Erreur ",
          allowOutsideClick: false,
          text : `Mot de passe incorrect !`,
      })
    }else{
      document.getElementById('preloader').style.display = "none"
       document.getElementById('yourEmail').value = ""
          document.getElementById('yourPassword').value = ""
      Swal.fire({
          icon: 'error',
          title:"Erreur ",
          allowOutsideClick: false,
          text : `L'utilisateur n'existe pas ou vos identifiants sont incorrect  `,
      })
    }
    });  
  }