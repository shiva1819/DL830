/*var closer = document.getElementById('closer');
var contentR = document.getElementById('contentR');

closer.style.transform = 'rotateY(0deg)'

closer.onclick = function(){
	// alert();


	if(closer.style.transform == 'rotateY(0deg)'){
		closer.style.transform = 'rotateY(180deg)'
		// this.style.left = "-30px";
		contentR.style.right = "-405px";
		contentL.style.width = "100%";
	}else{
		closer.style.transform = 'rotateY(0deg)'
		// this.style.left = "-30px";
		contentR.style.right = "0px";
		contentL.style.width = "70%";
	}
	
};
*/


var uName = document.getElementById('Uname');
var Passcode = document.getElementById('Passcode');
var contact = document.getElementById('contact');
var Email = document.getElementById('Email');
var country = document.getElementById('country');

var gender = document.getElementsByClassName('gender');


var getInfo = document.getElementById('getInfo');
var updateInfo = document.getElementById('updateInfo');
var restInfo = document.getElementById('restInfo');

var dataTable = document.getElementById('dataTable');



getInfo.addEventListener('click', function(){
	// alert('clicked...');
	console.log(uName.value, Passcode.value,contact.value, Email.value, country.value);

	var NameRegex = /^[a-zA-Z, " "]{3,}$/g;
	var numRegex = /^[0-9]{10,10}$/g;
	var EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	var PassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

	if(!NameRegex.test(uName.value)){
		alert('Please fill Name Field..');
		return false;
	}else if( !PassRegex.test(Passcode.value)){
		alert('password Error');
		return false;
	}else if(!EmailRegex.test(Email.value)){
		alert("Email Error");
		return false;
	}else if(!numRegex.test(contact.value)){
		alert("Contact Error");
		return false;
	}else if( country.value == "none"){
		alert("COuntry Error");
		return false;
	}else if(gender[0].checked == false && gender[1].checked == false){
		alert("Gender Error");
		return false;
	}else{
		alert('Success');
	}





















	// creating TR	
	var TR = document.createElement('tr');


	// creating TD.
	var NameTd = document.createElement('td');
		NameTd.innerText = uName.value;

	var PasswordTd = document.createElement('td');
		PasswordTd.innerText = Passcode.value;


	var EmailTd = document.createElement('td');
		EmailTd.innerText = Email.value;

	var ContactTd = document.createElement('td');
		ContactTd.innerText = contact.value;

	var CountryTd = document.createElement('td');
		CountryTd.innerText = country.value;


	var GenderTd = document.createElement('td');
	var genderVal = "No Gender";
		
		if(gender[1].checked == true){
			genderVal = "Female";
		}else if(gender[0].checked == true){
			genderVal = "Male";
		}

		GenderTd.innerText = genderVal;
		console.log(GenderTd);



	// buttons Edit/Delete;	
	var ActionsTd = document.createElement('td');

		var Edit = document.createElement('button');
			Edit.innerHTML = '<i class="fas fa-pen-square"></i>';
		var Delete = document.createElement('button');
			Delete.innerHTML = '<i class="fas fa-trash"></i>';

		ActionsTd.appendChild(Edit);
		ActionsTd.appendChild(Delete);



			// TR = 0; 
			TR.appendChild(NameTd); // TR 1
			TR.appendChild(PasswordTd); // TR 2
			TR.appendChild(EmailTd); // TR 3
			TR.appendChild(ContactTd); // TR 4
			TR.appendChild(CountryTd); // TR 5
			TR.appendChild(GenderTd); // TR 6
			TR.appendChild(ActionsTd); // TR 7

		dataTable.appendChild(TR);

function resetfn(){
		uName.value = "";
		contact.value = "";
		Email.value = "";
		Passcode.value = "";
		country.value = "none";

		gender[0].checked = false;
		gender[1].checked = false;

}

resetfn();

Delete.addEventListener('click', function(){
	// debugger;
	console.log(this);
	var child = this.parentNode.parentNode;
	dataTable.removeChild(child);
});


Edit.addEventListener('click', function(){

updateInfo.style.display = "inline";
getInfo.style.display = "none";

var NameTdGet = this.parentNode.parentNode.children[0];
var passwordTdGet = this.parentNode.parentNode.children[1];
var EmailTdGet = this.parentNode.parentNode.children[2];
var ContactTdGet = this.parentNode.parentNode.children[3];
var countryTdGet = this.parentNode.parentNode.children[4];
var genderTdGet = this.parentNode.parentNode.children[5];

// var NameTdGet = this.parentNode.parentNode.children[0];

	uName.value = NameTdGet.innerText;	
	contact.value = ContactTdGet.innerText;
		Email.value = EmailTdGet.innerText;
		Passcode.value = passwordTdGet.innerText;
		country.value = countryTdGet.innerText;

		if(genderTdGet.innerText == "Male"){
			gender[0].checked = true;
		}else{
			gender[1].checked = true;
		}

updateInfo.onclick = function(){

	NameTdGet.innerText = uName.value;	
	ContactTdGet.innerText = contact.value;
	EmailTdGet.innerText = Email.value;
	passwordTdGet.innerText = Passcode.value;
	countryTdGet.innerHTML = country.value;


	if(gender[0].checked == true){
		genderTdGet.innerText = "Male";
	}else if(gender[1].checked == true){
		genderTdGet.innerText = "Female";
	}

	updateInfo.style.display = "none";
	getInfo.style.display = "inline";	



	// return NameTd, ContactTdGet, EmailTdGet, passwordTdGet, countryTdGet, genderTdGet;

	uName.value = "";
		contact.value = "";
		Email.value = "";
		Passcode.value = "";
		country.value = "none";

		gender[0].checked = false;
		gender[1].checked = false;
};




});

});

restInfo.addEventListener('click', function(){
	uName.value = "";
		contact.value = "";
		Email.value = "";
		Passcode.value = "";
		country.value = "none";

		gender[0].checked = false;
		gender[1].checked = false;
});


// document.write('Shiva');