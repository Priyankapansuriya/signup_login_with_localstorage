const signUp = e => {
  let fname = document.getElementById('fname').value,
      email = document.getElementById('email').value,
      number = document.getElementById('number').value,
      pwd = document.getElementById('pwd').value;


  let formData = JSON.parse(localStorage.getItem('formData')) || [];
   let id = formData.length;

  let exist = formData.length &&
      JSON.parse(localStorage.getItem('formData')).some(data =>
          data.fname.toLowerCase() == fname.toLowerCase() &&
          data.email.toLowerCase() == email.toLowerCase()
      );

  if(!exist){
      formData.push({ id,fname, email,number, pwd });
      localStorage.setItem('formData', JSON.stringify(formData));
      document.querySelector('form').reset();
      document.getElementById('fname').focus();
      alert("Account Created.\n\nPlease Sign In using the link below.");
  }
  else{
      alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
  }
  e.preventDefault();
}
