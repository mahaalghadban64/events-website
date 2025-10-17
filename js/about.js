function setLanguage(lang){
  if(lang=='ar'){
    document.body.setAttribute('lang','ar');
  document.body.setAttribute('dir', 'rtl');

  }
  
  else{
     document.body.setAttribute('lang','en');
  document.body.setAttribute('dir', 'ltr');
  }
}