function dispData() {
       console.log(localStorage.getItem('formData'));
       if (localStorage.getItem('formData')) {
       var output = document.querySelector('tbody');
       output.innerHTML = '';
       JSON.parse(localStorage.getItem('formData')).forEach((data) => {
       output.innerHTML += `
              <tr>
                  <td>${data.fname}</td>
                  <td>${data.email}</td>
                  <td>${data.number}</td>
                  <td>${data.pwd}</td>
                  <td><a href=update.html?id=${data.id}>Update</a></td>
                  <td><button onclick="deleteData(${data.id});">Delete</button></td>
              </tr>
          `;
     });
  }
}

dispData();
function setData(formData) {
localStorage.setItem('formData', JSON.stringify(formData));
}
function getData() {
return JSON.parse(localStorage.getItem('formData')) || [];
}
