function onEditPress() {
var urlString = window.location.href;
const url = new URL(urlString);
const id = url.searchParams.get('id');
console.log(localStorage.getItem('formData'));
if (localStorage.getItem('formData')) {
  JSON.parse(localStorage.getItem('formData')).forEach((data) => {
    if (data.id == id) {
      document.getElementById('fname').value = data.fname;
      document.getElementById('email').value = data.email;
      document.getElementById('number').value = data.number;
    }
  });
}
}
function edit() {
var urlString = window.location.href;
const url = new URL(urlString);
const id = url.searchParams.get('id');
let userData = JSON.parse(localStorage.getItem('formData'));
userData = userData.map((data) => {
  if (data.id == id) {
    const obj = {
      fname: document.getElementById('fname').value,
      email: document.getElementById('email').value,
      number: document.getElementById('number').value,
    };
    Object.assign(data, obj);
  }
  return data;
});
console.log(userData);
localStorage.setItem('formData', JSON.stringify(userData));
setData(userData);
location.href = 'store.html';
}

function deleteData(id) {

  formData = JSON.parse(localStorage.getItem('formData')) || [];
  console.log(id);
  var getindex = formData.findIndex((v) => {
    return v.id == id;
  });
  formData.splice(getindex, 1);
  console.log(formData);
  localStorage.setItem('formData', JSON.stringify(formData));
  window.location.reload();
}
