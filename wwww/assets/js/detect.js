function detectDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if (/android/i.test(userAgent)) {
      return 'Android';
    }
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'iOS';
    }
  
    if (/windows phone/i.test(userAgent)) {
      return 'Windows Phone';
    }
  
    if (/mobile/i.test(userAgent)) {
      return 'Mobile';
    }
  
    return 'Desktop';
  }
  
  const deviceType = detectDevice();
  console.log('User is on a:', deviceType);
  
  // Vous pouvez également utiliser cette information pour d'autres opérations
  if (deviceType === 'Mobile' || deviceType === 'Android' || deviceType === 'iOS' || deviceType === 'Windows Phone') {
    document.getElementById('logoutId').addEventListener('click', function(){
        Swal.fire({
            title: "Deconnection...",
            text: "Vous êtes sur le point de vous deconnecter",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, je me deconnecte",
            allowOutsideClick: false,
          }).then((result) => {
            localStorage.removeItem('unserconnect')
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deconnecter!",
                text: "Vous êtes deconnectés avec success",
                icon: "success",
                allowOutsideClick: false,
              }).then((result) => {  
                if (result.isConfirmed){
                    window.location.href = "../../login/login.html"
                }
              })
            }
          });  
    })
    // Code spécifique aux appareils mobiles
    console.log('Utilisateur sur un appareil mobile');
    const unserconnect = localStorage.getItem("unserconnect");
    if(!unserconnect){
     window.location.href = "../../login/login.html"
    }
  } else {
    // Code spécifique aux ordinateurs de bureau
    console.log('Utilisateur sur un ordinateur de bureau');
  }
  