//Variables for tracking subtotals and total
var subSize = 14;
var subMeat = 0;
var subCheese = 0;
var subCrust = 0;
var subSauce = 0;
var subVeggies = 0;
var sumTotal = 14;

//Calculate overall total and update webpage
function setTotal() {
    sumTotal = subSize + subMeat + subCheese + subCrust + subSauce + subVeggies;
    document.getElementById('finalTotal').innerHTML = "$" + sumTotal + ".00";
}

//Calculate subtotal for pizza size, update webpage, and call setTotal()
function setSize() {
    sizeObject = document.getElementsByName('size');
    selection = "";

    //Find which radio button was selected
    for(var i=0;i<sizeObject.length;i++){
        if (sizeObject[i].checked == true){
            selection = sizeObject[i].value;
        }
    }

    //Update subtotal and webpage based on user selection
    switch(selection) {
        case 'Personal':
            subSize = 6;
            document.getElementById('sizeTotal').innerHTML = "+ $" + subSize;
            break;
        case 'Medium':
            subSize = 10;
            document.getElementById('sizeTotal').innerHTML = "+ $" + subSize;
            break;
        case 'Large':
            subSize = 14;
            document.getElementById('sizeTotal').innerHTML = "+ $" + subSize;
            break;
        case 'Extra Large':
            subSize = 16;
            document.getElementById('sizeTotal').innerHTML = "+ $" + subSize;
            break;
    }
    document.getElementById('sizeA').innerHTML = selection + " Pizza";
    document.getElementById('sizeB').innerHTML = "$" + subSize + ".00";

    //Call setTotal()
    setTotal();
}

//Calculate subtotal for meat selection, update webpage, and call setTotal()
function setMeat() {
    meatObject = document.getElementsByName('meat');
    count = 0; //counts how many meats selected
    var temp = new Array(); //array holding text for each selected meat
    var i;
    var txtMeat; //holds joined text for all selected meats

    //Find which meat was selected and add it to temp array, increment count
    for(i=0;i<meatObject.length;i++){
        if (meatObject[i].checked == true){
            count++;
            temp.push(meatObject[i].value);
        }
    }

    //Convert temp array into single comma-delineated sentence
    txtMeat = temp.join(', ');

    //Calculate and display proper cost
    if(count==0){
        subMeat = 0;
        document.getElementById('meatTotal').innerHTML = "+ $" + subMeat;
        document.getElementById('meatA').innerHTML = "<em>none</em>";
    } else {
        subMeat = count-1;
        document.getElementById('meatTotal').innerHTML = "+ $" + subMeat;
        document.getElementById('meatA').innerHTML = txtMeat;
    }
    document.getElementById('meatB').innerHTML = "$" + subMeat + ".00";

    //Call setTotal()
    setTotal();
}

//Calculate subtotal for cheese selection, update webpage, and call setTotal()
function setCheese() {
    cheeseObject = document.getElementsByName('cheese');
    selection = ""; //holds text for selected cheese

    //Find which radio button was selected
    for(var i=0;i<cheeseObject.length;i++){
        if (cheeseObject[i].checked == true){
            selection = cheeseObject[i].value;
        }
    }

    //Update subtotal and webpage based on user selection
    switch(selection) {
        case 'Extra Cheese':
            subCheese = 3;
            document.getElementById('cheeseTotal').innerHTML = "+ $" + subCheese;
            break;
        default:
            subCheese = 0;
            document.getElementById('cheeseTotal').innerHTML = "+ $" + subCheese;
            break;

    }
    document.getElementById('cheeseA').innerHTML = selection;
    document.getElementById('cheeseB').innerHTML = "$" + subCheese + ".00";
    
    //Call setTotal()
    setTotal();
}


//Calculate subtotal for crust selection, update webpage, and call setTotal()
function setCrust() {
    crustObject = document.getElementsByName('crust');
    selection = ""; //holds text for selected crust

    //Find which radio button was selected
    for(var i=0;i<crustObject.length;i++){
        if (crustObject[i].checked == true){
            selection = crustObject[i].value;
        }
    }

    //Update subtotal and webpage based on user selection
    switch(selection) {
        case 'Cheese Stuffed':
            subCrust = 3;
            document.getElementById('crustTotal').innerHTML = "+ $" + subCrust;
            break;
        default:
            subCrust = 0;
            document.getElementById('crustTotal').innerHTML = "+ $" + subCrust;
            break;

    }
    document.getElementById('crustA').innerHTML = selection + " Crust";
    document.getElementById('crustB').innerHTML = "$" + subCrust + ".00";

    //Call setTotal()
    setTotal();
}

//Find sauce selection and update webpage (cost always $0 and unchanged)
function setSauce() {
    sauceObject = document.getElementsByName('sauce');
    selection = ""; //holds text for selected crust

    //Find which radio button was selected
    for(var i=0;i<sauceObject.length;i++){
        if (sauceObject[i].checked == true){
            selection = sauceObject[i].value;
        }
    }  

    //Update webpage based on user selection
    document.getElementById('sauceA').innerHTML = selection + " Sauce";
}

//Calculate subtotal for veggie selection, update webpage, and call setTotal()
function setVeggies() {
    veggiesObject = document.getElementsByName('veggies');
    count = 0; //counts how many veggies selected
    var temp = new Array(); //array holding text for each selected veggie
    var i;
    var txtVeggies; //holds joined text for all selected veggies

    //Find which veggie was selected and add it to temp array, increment count
    for(i=0;i<veggiesObject.length;i++){
        if (veggiesObject[i].checked == true){
            count++;
            temp.push(veggiesObject[i].value);
        }
    }

    //Convert temp array into single comma-delineated sentence
    txtVeggies = temp.join(', ');

    //Calculate and display proper cost
    if(count==0){
        subVeggies = 0;
        document.getElementById('veggiesTotal').innerHTML = "+ $" + subVeggies;
        document.getElementById('veggiesA').innerHTML = "<em>none</em>";
    } else {
        subVeggies = count - 1;
        document.getElementById('veggiesTotal').innerHTML = "+ $" + subVeggies;
        document.getElementById('veggiesA').innerHTML = txtVeggies;
    }
    document.getElementById('veggiesB').innerHTML = "$" + subVeggies + ".00";

    //Call setTotal()
    setTotal();
}

//Call by Reset button from webpage.  Resets form values to defaults
//Hides order receipt
function startOver() {
    document.getElementById('mainForm').reset();
    document.getElementById('receipt').style.opacity = 0;

    //Reset subtotals and total to original values
    subSize = 14;
    subMeat = 0;
    subCheese = 0;
    subCrust = 0;
    subSauce = 0;
    subVeggies = 0;
    sumTotal = 14;

    //Update webpage
    setSize();
    setMeat();
    setCheese();
    setCrust();
    setSauce();
    setVeggies();

}

//Called by "Place Order" button.  Displays order receipt
function order() {
    document.getElementById('receipt').style.opacity = 1;
}


