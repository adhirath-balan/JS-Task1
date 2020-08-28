console.log("Hi there")

var formName = document.getElementById("email-name")
var formMail = document.getElementById("email-add")
var tableName = document.getElementById("table-name")
var tableMail = document.getElementById("table-mail")
var formSubmit = document.getElementById("form-submit")

formSubmit.addEventListener("submit" , function(e){
    e.preventDefault();
    tableName.textContent = formName.value;
    tableMail.textContent = formMail.value;
})