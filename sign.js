let name =document.getElementById('name');
let password = document.getElementById('password');
let email = document.getElementById('email');




let datautilusateur
if (localStorage.page != null){
  datautilusateur = JSON.parse(localStorage.page)
}else {
  datautilusateur = [];
}


btn.onclick = function (){
  let data = {
    nom : name.value,
    gmail : email.value,
    keyword : password.value
    
  };
  datautilusateur.push(data);
  console.log(datautilusateur);
  localStorage.setItem('page', JSON.stringify(datautilusateur));
  deletedata()
}
function deletedata() {
  name.value= '',
  email.value= '',
  password.value= ''
}