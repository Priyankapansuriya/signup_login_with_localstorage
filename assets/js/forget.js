function forgetpwd() {
let email, pwd, cpwd;
email = document.getElementById('email').value;
pwd = document.getElementById('pwd').value;
cpwd = document.getElementById('cpwd').value;

if (pwd != cpwd) {
  alert('password not match');
}

user_record = getData();

var temp = user_record.find((temp) => temp.email === email);
if (temp) {
  temp.pwd = pwd;
  temp.cpwd = cpwd;
  setData(user_record);
  alert('Password set');
}
}
