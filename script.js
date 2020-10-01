// open drop down menu
function show_dropdown() {
  	document.getElementById("dropdown").classList.toggle("dropdown_hide");
}

// open the api key menu
function open_api_key(){
	document.getElementById("api_key").classList.toggle("dropdown_hide");
}

function copy_key(){
	var iconChange = document.getElementById("iconChange");
	iconChange.classList.remove("sprite-copy");
	iconChange.classList.add("sprite-check");
	setTimeout(function(){
		iconChange.classList.add("sprite-copy");
		iconChange.classList.remove("sprite-check");
		document.getElementById("api_key").classList.toggle("dropdown_hide");
	}, 3000);
}

/* this will open create app modal*/
function OpenCreateAppModal(){
	document.getElementById("create_app_modal").classList.toggle("dropdown_hide");
}

/* this will open create app modal*/
function ShowAppWasCreatedAlert(){
	document.getElementById("create_app_modal").classList.toggle("dropdown_hide");
	document.getElementById("created_app_alert").classList.toggle("dropdown_hide");
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	setTimeout(function(){
		document.getElementById("created_app_alert").classList.toggle("dropdown_hide");
	}, 1000);
}

// this will show alert when profile will update
function ProfileUpdateAlert(){
	document.getElementById("profile_update_alert").classList.toggle("dropdown_hide");
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	setTimeout(function(){
		document.getElementById("profile_update_alert").classList.toggle("dropdown_hide");
	}, 1000);
}

// this function will be used for validating input fields
function validation(inputId, warningMessageId) {
  	var input = document.getElementById(inputId);
  	var message = document.getElementById(warningMessageId);
  	if(input.value == ""){
  		input.classList.add("profile_input_color_red");
  		message.classList.toggle("dropdown_hide");
  	}
  	else{
  		input.classList.remove("profile_input_color_red");
  		message.classList.toggle("dropdown_hide");
  	}
}

// this function will be used for passowrd validation
function passwordValidation(inputId, warningMessageId) {
  	var input = document.getElementById(inputId);
  	var message = document.getElementById(warningMessageId);
	if((input.value).length < 8 || (input.value).includes("@")){
		console.log(input.value);
		console.log((input.value).length);
		console.log((input.value).includes("@"));
		input.classList.toggle("profile_input_color_red");
  		message.classList.toggle("dropdown_hide");
	}			  	
  	else{
  		input.classList.toggle("profile_input_color_red");
  		message.classList.toggle("dropdown_hide");
  	}
}

