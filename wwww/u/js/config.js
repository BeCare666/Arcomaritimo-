(()=>{const THEME='coreui-pro-bootstrap-admin-template-theme-light';const urlParams=new URLSearchParams(window.location.href.split('?')[1]);if(urlParams.get('theme')&&['auto','dark','light'].includes(urlParams.get('theme'))){localStorage.setItem(THEME,urlParams.get('theme'));}})();