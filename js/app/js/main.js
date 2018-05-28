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
var restInfo = document.getElementById('restInfo');

var dataTable = document.getElementById('dataTable');



getInfo.addEventListener('click', function(){
	alert('clicked...');
	console.log(uName.value, Passcode.value,contact.value, Email.value, country.value);

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

});