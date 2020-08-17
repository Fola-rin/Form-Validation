function onSubmit(event) {
	event.preventDefault();
	let password = document.querySelector("#id_password").value;
	let passwordConfirm = document.querySelector("#id_password_confirm").value;
	let userName = document.querySelector("#id_username").value;
	let emailValue = document.querySelector("#id_email").value;

	let userNameIsValid = true;
	let emailIsValid = true;
	let passwordIsValid = true;
	let passwordConfirmIsValid = true;


	if (userName === "" || userName.length < 6) {
		userNameIsValid = false;
		const user_name = document.querySelector("#id_username");
		user_name.style.border ="3px solid red";
		const userName_warning = document.createElement("span");
		userName_warning.style.color="red";
		userName_warning.style.fontSize = "small";
		userName_warning.style.marginTop = "0";
		const userName_content = document.createTextNode("Username cannot be blank or less than 6 characters!");
		userName_warning.appendChild(userName_content);
		const userName_child = document.querySelector("#div_username_text span");
		const userName_div  = document.querySelector("#div_username_text");
		userName_div.replaceChild(userName_warning, userName_child);
	}

	else {
		userNameIsValid = true;
		const user_name = document.querySelector("#id_username");
		user_name.style.border = "1px solid #dddddd";
		const userName_warning = document.createElement("span");
		const userName_child = document.querySelector("#div_username_text span");
		const userName_div  = document.querySelector("#div_username_text");
		userName_div.replaceChild(userName_warning, userName_child);
	}



	if (emailValue !== "") {

		if(emailValue.indexOf("@")<1 || 
			emailValue.lastIndexOf(".") < emailValue.indexOf("@")+2 || 
			emailValue.lastIndexOf(".")+2>=emailValue.length) {
			emailIsValid = false;
			const email = document.querySelector("#id_email");
			email.style.border ="3px solid red";
			const email_child = document.querySelector("#div_email_text span");
			email_warning= document.createElement("span");
			email_warning.style.color="red";
			email_warning.style.fontSize = "small";
			email_warning.style.marginTop = "0";
			const email_content = document.createTextNode("Invalid E-mail Syntax!");
			email_warning.appendChild(email_content);
			const email_div = document.querySelector("#div_email_text");
			email_div.replaceChild(email_warning, email_child);
		}
		else {
			emailIsValid = true;
			const email = document.querySelector("#id_email");
			email.style.border = "1px solid #dddddd";
			const email_child = document.querySelector("#div_email_text span");
			email_warning= document.createElement("span");
			const email_div = document.querySelector("#div_email_text");
			email_div.replaceChild(email_warning, email_child);

		}
	}

	else if (emailValue === "") {
		emailIsValid = false;
		const email = document.querySelector("#id_email");
		email.style.border ="3px solid red";
		const email_child = document.querySelector("#div_email_text span");
		email_warning= document.createElement("span");
		email_warning.style.color="red";
		email_warning.style.fontSize = "small";
		email_warning.style.marginTop = "0";
		const email_content = document.createTextNode("E-mail cannot be blank!");
		email_warning.appendChild(email_content);
		const email_div = document.querySelector("#div_email_text");
		email_div.replaceChild(email_warning, email_child);
		const email_error  = document.querySelector("#span_email");
	}

	if (password !== '' && passwordConfirm !== '') {
		if (password !== passwordConfirm) {
		passwordIsValid = true;
		passwordConfirmIsValid = false;
		const pass_word = document.querySelector("#id_password")
		pass_word.style.border ="1px solid #dddddd";
		const password_warning = document.createElement("span");
		const password_child  = document.querySelector("#div_password_text span");
		const password_div = document.querySelector("#div_password_text");
		password_div.replaceChild(password_warning, password_child);

		const password_confirm = document.querySelector("#id_password_confirm")
		password_confirm.style.border ="3px solid red";
		const password_confirm_warning = document.createElement("span");
		password_confirm_warning.style.color="red";
		password_confirm_warning.style.fontSize = "small";
		password_confirm_warning.style.marginTop = "0";
		const password_confirm_content = document.createTextNode("Password Mismatcch");
		password_confirm_warning.appendChild(password_confirm_content);
		const password_confirm_child  = document.querySelector("#div_confirm_text span");
		const password_confirm_div = document.querySelector("#div_confirm_text");
		password_confirm_div.replaceChild(password_confirm_warning, password_confirm_child);		

		}
		else {
		passwordIsValid = true;
		passwordConfirmIsValid = true;
		const password_confirm = document.querySelector("#id_password_confirm")
		password_confirm.style.border ="1px solid #dddddd";
		const password_confirm_warning = document.createElement("span");
		const password_confirm_child  = document.querySelector("#div_confirm_text span");
		const password_confirm_div = document.querySelector("#div_confirm_text");
		password_confirm_div.replaceChild(password_confirm_warning, password_confirm_child);
		}

	}
	if (password=== "") {
		passwordIsValid = false;
		const pass_word = document.querySelector("#id_password")
		pass_word.style.border ="3px solid red";
		const password_warning = document.createElement("span");
		password_warning.style.color="red";
		password_warning.style.fontSize = "small";
		password_warning.style.marginTop = "0";
		const password_content = document.createTextNode("Password cannot be blank!");
		password_warning.appendChild(password_content);
		const password_child  = document.querySelector("#div_password_text span");
		const password_div = document.querySelector("#div_password_text");
		password_div.replaceChild(password_warning, password_child);
	}
	else {
		passwordIsValid = true;
		const pass_word = document.querySelector("#id_password")
		pass_word.style.border ="1px solid #dddddd";
		const password_warning = document.createElement("span");
		const password_child  = document.querySelector("#div_password_text span");
		const password_div = document.querySelector("#div_password_text");
		password_div.replaceChild(password_warning, password_child);		
	}

	if (passwordConfirm=== "") {
		passwordConfirmIsValid = false;
		const password_confirm = document.querySelector("#id_password_confirm")
		password_confirm.style.border ="3px solid red";
		const password_confirm_warning = document.createElement("span");
		password_confirm_warning.style.color="red";
		password_confirm_warning.style.fontSize = "small";
		password_confirm_warning.style.marginTop = "0";
		const password_confirm_content = document.createTextNode("Confirm Password cannot be blank!");
		password_confirm_warning.appendChild(password_confirm_content);
		const password_confirm_child  = document.querySelector("#div_confirm_text span");
		const password_confirm_div = document.querySelector("#div_confirm_text");
		password_confirm_div.replaceChild(password_confirm_warning, password_confirm_child);		

	}
	if (userNameIsValid && emailIsValid && passwordIsValid && passwordConfirmIsValid) {
		alert("Sign Up Successful");
		document.querySelector("#form").reset();
	}

}