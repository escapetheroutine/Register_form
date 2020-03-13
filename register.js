
let button = document.getElementById("login");


button.addEventListener('click', function(event){
    event.preventDefault();

    let username = document.getElementById("username").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let visitedItaly = document.getElementById("italy_visited").checked ;
    let gydId = document.getElementById("select").value;
    let valid = true;

    let pacientInfo = username + ' ' + surname + ' ' + tel + ' ' + email;

    if (visitedItaly) {
        pacientInfo += ' Lankėsi Italijoje';
    } else {
        pacientInfo += ' Nesilankė Italijoje';
    }

    // VALIDATIONS
    if (username === "") {
        let errorSpan = document.getElementById("username").nextElementSibling;

        errorSpan.innerText = 'Klaida';
        errorSpan.classList.remove('hidden');

        valid = false;
    }
    if (surname === "") {
        let errorSpan = document.getElementById("surname").nextElementSibling;

        errorSpan.innerText = 'Klaida';
        errorSpan.classList.remove('hidden');

        valid = false;
    }
    
    if (!email.match(/\w+@\w+\.\w+/)) {
        let errorSpan = document.getElementById("email").nextElementSibling;

        errorSpan.innerText = 'Neteisingas el.paštas';
        errorSpan.classList.remove('hidden');

        valid = false;
    }
    if (email === "") {
        let errorSpan = document.getElementById("email").nextElementSibling;

        errorSpan.innerText = 'Klaida';
        errorSpan.classList.remove('hidden');

        valid = false;
    }
    if (tel != "" && !tel.match(/^\d+$/)) {
        let errorSpan = document.getElementById("tel").nextElementSibling;

        errorSpan.innerText = 'Neteisingas tel.numeris';
        errorSpan.classList.remove('hidden');

        valid = false;
    }

    if (valid){
        document.getElementById(gydId).innerText = pacientInfo;
        document.getElementById("register_form").style.display = "none";
        document.getElementById("doc_table").classList.remove('hidden');
    }
});


