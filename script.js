    document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('form-validate').addEventListener('submit', function (validate) {
            validate.preventDefault();
            let name = document.getElementById('name');
            let username = document.getElementById('username')
            let email = document.getElementById('email')
            let confirmEm = document.getElementById('confirmEm');
            let phone = document.getElementById('phone');
            let psw = document.getElementById('psw');
            let ComfirmPsw = document.getElementById('ComfirmPsw');
            const agreeBtn = document.getElementById('agreeBtn');
            let checkBx = document.getElementsByClassName("custom-checkbox-checkmark")
            let agreeTxt = document.getElementById('agreeTxt');
                
                let errorMsgName = document.getElementById("errorMsgName");
                let errorMsgEmail = document.getElementById("errorMsgEmail");
                let errorMsgPhone = document.getElementById("errorMsgPhone");
                let errorMsgPsw = document.getElementById("errorMsgPsw");
                let errorMsgUsername = document.getElementById("errorMsgUsername");

            if(name.value.trim() === ""){
                errorMsgName.setAttribute('style', 'display: block');
                name.focus();
                return;

            }if(username.value.trim() === ""){
                errorMsgUsername.setAttribute('style', 'display: block');
                username.focus();
                return;

            }if(email.value.trim() === ""){
                errorMsgEmail.setAttribute('style', 'display: block');
                email.focus();
                return;

            }if(phone.value.trim() === ""){
                errorMsgPhone.setAttribute('style', 'display: block');
                phone.focus();
                return;

            }if(psw.value.trim() === ""){
                errorMsgPsw.setAttribute('style', 'display: block');
                psw.focus();
                return;
            }      
            else{
                errorMsgPsw.setAttribute('style', 'display: none');
            }
                
            
            if(agreeBtn.checked){
                agreeTxt.setAttribute('style', 'color: green');
                for (let i = 0; i < checkBx.length; i++) {
                    checkBx[i].style.border = "none";
                    agreeTxt.innerHTML = "terms applied !";
                }
                
                
            }else{
                agreeTxt.setAttribute('style', 'font-size: 15px; color: red');
                agreeTxt.innerHTML = ' you must agree to the <a href="">terms and conditions</a>  applied!';
                for (let i = 0; i < checkBx.length; i++) {
                    checkBx[i].style.border = "2px solid red";
                }
                return;
            }
            
           
            fetch('registration.php', {
                method: 'POST',
                body: new FormData(document.getElementById('form-validate'))
            })
            .then(response => {
                if (response.ok) {
                    // Handle success (e.g., display a success message)
                    console.log('Registration successful!');
                } else {
                    // Handle error (e.g., display an error message)
                    console.error('Registration failed.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    });

    
    function getValues(){
        
        let name = document.getElementById('name').value;
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let confirmEm = document.getElementById('confirmEm').value;
        let phone = document.getElementById('phone').value;
        let psw = document.getElementById('psw').value;
        let ComfirmPsw = document.getElementById('ComfirmPsw').value;
                
        let errorMsgName = document.getElementById("errorMsgName");
        let errorMsgEmail = document.getElementById("errorMsgEmail");
        let errorMsgPhone = document.getElementById("errorMsgPhone");
        let errorMsgPsw = document.getElementById("errorMsgPsw");
        let errorMsgConfrmPsw = document.getElementById("errorMsgConfrmPsw");
        let errorMsgUsername = document.getElementById("errorMsgUsername");
        let errorMsgEmailConf = document.getElementById("errorMsgEmailConf");


        if(email == ""){
            errorMsgEmail.setAttribute('style', 'display: block');
        }
        else{
            errorMsgEmail.setAttribute('style', 'display: none');
        }
        
        if(email != confirmEm){
            errorMsgEmailConf.setAttribute('style', 'display: block');
        }
        else{
            errorMsgEmailConf.setAttribute('style', 'display: none');
        }
        
        
        name = name.trim();
        let word  = name.split(' ');

        if(name.value === "")
        errorMsgName.setAttribute('style', 'display: block');
        else
        errorMsgName.setAttribute('style', 'display: none');

        if (word.length != 2) {
            // Check if each word is not empty
            if (word[0] !== '' && word[1] !== '') {
                errorMsgName.setAttribute('style', 'display: block');
                errorMsgName.innerHTML = `Please enter your First and last name  ex. ${name} john`
            }
        }
        
        let spaceAfter = document.getElementById("name").value;
        if (word.length == 2 && spaceAfter.endsWith(' ')){
            document.getElementById("name").disabled = true 
        }
            
        
        if(username == "") 
            errorMsgUsername.setAttribute('style', 'display: block');
        else
            errorMsgUsername.setAttribute('style', 'display: none');

        if(username.length >= 4 && username.length <= 8){
            errorMsgPhone.setAttribute('style', 'display: none')
        }else{
            errorMsgUsername.setAttribute('style', 'display: block')
            errorMsgUsername.textContent = "username 4-8 character long";
        }
      
    
           
        if(username != "" && username.length >= 4 && username.length <= 5){
        const randomNum = Math.floor(Math.random() * 100) + 1
        let suggest = document.getElementById("suggest")
        suggest.innerHTML = `<small style="color: dodgerblue">available: ${username}_${randomNum}</small>`
        }

        
        phone = phone.replace(/\D/g, '');

        if (phone.length !== 10){
            errorMsgPhone.setAttribute('style', 'display: block')
            errorMsgPhone.textContent = "phone should be exactly 10";
        }else{
            errorMsgPhone.setAttribute('style', 'display: none')
        }

        if(psw == "") 
        errorMsgPsw.setAttribute('style', 'display: block');
        else
        errorMsgPsw.setAttribute('style', 'display: none');

        if(psw != ComfirmPsw){
            errorMsgConfrmPsw.setAttribute('style', 'display: block');
        }
        else{
            errorMsgConfrmPsw.setAttribute('style', 'display: none');
        }
    }


document.addEventListener('DOMContentLoaded', function () {
//    email validation 
let email = document.getElementById("email");
const suggestions = document.getElementById("suggestions");

email.addEventListener("input", function () {
    const inputValue = email.value;

    // Define the suggestion keywords
    const suggestionKeywords = ["@gmail.com", "@hotmail.com"];

    // Check if the input matches any suggestion keywords
    const matchingSuggestions = suggestionKeywords.filter(keyword =>
        keyword.startsWith(inputValue)
    );

    // Display suggestions
    suggestions.innerHTML = "";
    matchingSuggestions.forEach(suggestion => {
        const suggestionElement = document.createElement("div");
        suggestionElement.textContent = suggestion;
        suggestionElement.addEventListener("click", function () {
            email.value = inputValue + suggestion;
            suggestions.innerHTML = "";
        });
        suggestions.appendChild(suggestionElement);
    });
});
});



    document.addEventListener("DOMContentLoaded", function () {
    let suggestions = document.getElementById("suggestions");

    email.addEventListener("input", function () {
        let inputValue = email.value;
        let atIndex = inputValue.indexOf('@');

        if (atIndex >= 0) {
            let prefix = inputValue.substring(0, atIndex);
            let domains = ["gmail.com", "hotmail.com","outlook.com", "yahoo.com", "icloud.com"];
            let suggestionList = domains.map(domain => `${prefix}@${domain}`);
            
            suggestions.innerHTML = suggestionList.map(suggestion => `
                                <div style="font-size:15px; color: dodgerblue">${suggestion}</div>`).join('');
            suggestions.style.display = "block";
        } else {
            suggestions.style.display = "none";
        }
    });

    suggestions.addEventListener("click", function (event) {
        if (event.target.tagName === "DIV") {
            email.value = event.target.textContent;
            suggestions.style.display = "none";
        }
    });

    document.addEventListener("click", function (event) {
        if (event.target !== email && event.target !== suggestions) {
            suggestions.style.display = "none";
        }
    });
});




// phone number validation 


document.addEventListener("DOMContentLoaded", function () {
    let phone = document.getElementById("phone");

    phone.addEventListener("input", function () {
        let inputValue = phone.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (inputValue.length > 10) {
            inputValue = inputValue.slice(0, 10); // Limit to 10 digits
        }

        if (inputValue.length >= 1) {
            inputValue = "(" + inputValue;
        }

        if (inputValue.length >= 4) {
            inputValue = inputValue.slice(0, 4) + ") " + inputValue.slice(4);
        }

        if (inputValue.length >= 9) {
            inputValue = inputValue.slice(0, 9) + "-" + inputValue.slice(9);
        }

        phone.value = inputValue;
    });
});
