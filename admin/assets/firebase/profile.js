
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

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    var  userId = user.uid;
    var  userId = user.uid;
    var useremail = user.email;
    //tableEmail.push(useremail)
      localStorage.setItem('unserconnectuserId', userId);
      const userRef = database.ref(`/admin/${userId}`);
      userRef.once("value")
      .then((snapshot) => {
      document.getElementById('preloader').style.display = "none"
      if(!snapshot.exists()){ 
  
      }else{
        if(snapshot.val().USERSTATUS){ 
            var photoDataUrl = 'data:image/png;base64,' + snapshot.val().PPP_PHOTO; 
            document.getElementById('imdId').src = `${photoDataUrl} `
            document.getElementById('nameP').innerHTML = `${snapshot.val().fullname} `
             document.getElementById('namePx').innerHTML = `${snapshot.val().fullname} `
            document.getElementById('PostP').innerHTML = `${snapshot.val().position} ` 

            document.getElementById('imdIdw').src = `${photoDataUrl} `
            document.getElementById('namePw').innerHTML = `${snapshot.val().fullname} `
            document.getElementById('PostPw').innerHTML = `${snapshot.val().position} `
            document.getElementById('emailw').innerHTML = `Email : ${useremail} `
        }else{

        document.getElementById('preloader').style.display = "none"
        Swal.fire({
        title: "Ooops",
        text:"Votre compte est suspendu.",
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        icon: 'error',
        footer:`<a href="mailto:Arcomaritimos5190@gmail.com">Contact technical support.</a>`
        })   
        }
      }
    
    })
}else{
  window.location.href = "pages-login.html"
}
})