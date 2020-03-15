let button = document.getElementById("login");
let backButton = document.getElementById("button_back");

backButton.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById("register_form").classList.remove('hidden');
    document.getElementById("doc_table").classList.add('hidden');
});

button.addEventListener('click', function (event) {
    event.preventDefault();
    let nameInput = document.getElementById("name");
    let name = nameInput.value;

    let surnameInput = document.getElementById("surname");
    let surname = surnameInput.value;

    let emailInput = document.getElementById("email");
    let email = emailInput.value;

    let telInput = document.getElementById("tel");
    let tel = telInput.value;

    let visitedItaly = document.getElementById("italy_visited").checked;
    let gydId = document.getElementById("select").value;
    let valid = true;

    let pacientInfo = name + ' ' + surname + ' ' + tel + ' ' + email;

    if (visitedItaly) {
        pacientInfo += ' Lankėsi Italijoje';
    } else {
        pacientInfo += ' Nesilankė Italijoje';
    }

    // VALIDATIONS
    if (name === "") {
        let errorSpan = document.getElementById("name").nextElementSibling;

        errorSpan.innerText = 'Langelis neturi būti tuščias!';
        errorSpan.classList.remove('hidden');

        valid = false;
    }
    if (surname === "") {
        let errorSpan = document.getElementById("surname").nextElementSibling;

        errorSpan.innerText = 'Langelis neturi būti tuščias!';
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

        errorSpan.innerText = 'Langelis neturi būti tuščias!';
        errorSpan.classList.remove('hidden');

        valid = false;
    }
    if (tel != "" && !tel.match(/^\+?\d+$/)) {
        let errorSpan = document.getElementById("tel").nextElementSibling;

        errorSpan.innerText = 'Neteisingas tel.numeris';
        errorSpan.classList.remove('hidden');

        valid = false;
    }

    if (valid) {
        document.getElementById(gydId).innerText = pacientInfo;
        document.getElementById("register_form").classList.add('hidden');
        document.getElementById("doc_table").classList.remove('hidden');

        nameInput.value = "";
        surnameInput.value = "";
        emailInput.value = "";
        telInput.value = "";
    }
});