function addItem(){

var txtEnter = document.getElementById('txt-enter');
var txtValue = txtEnter.value;
txtValue = "<li>" + txtValue + "</li>";
console.log(txtValue);
var ulList = document.getElementById('lst-list')
ulList.innerHTML = ulList.innerHTML + txtValue;

}
