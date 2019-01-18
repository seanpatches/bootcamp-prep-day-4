//eslint-disable-next-line
function greet(){

    //get first nameby id
    var firstNameInput = document.getElementById('first-name');
    
    //get last name by id
    var lastNameInput = document.getElementById('last-name');

    //get values of output
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;


    //make greeting

    var greeting = 'Hello, ' + firstName + ' ' + lastName + '!';

    //display

    var greeter = document.getElementById('greeter');
    greeter.textContent = greeting;
}

//todo: validate name inputs
//todo: clear inputs?

