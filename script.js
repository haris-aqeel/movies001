var drillis = localStorage.getItem('countD');
var homeAlone = localStorage.getItem('counth');
var mamma = localStorage.getItem('countm');
var moneyHeist = localStorage.getItem('countM');
var osman = localStorage.getItem('countO');
var winner = localStorage.getItem('countW');
var total = (+drillis + +homeAlone+ +mamma + +moneyHeist + +osman + +winner)*5
function calculatePrice() {
    document.querySelector('.modalSample').classList.add('hide');
    var tables = '<h1 class="text-white py-5 text-center" style="font-family: "Alata", sans-serif;"> PRICE OF BOOKED SEAT </h1><div class="bg-white text-center"><table class="table table-striped table-hover"><thead><tr><th scope="col">S.No</th><th scope="col">Movie Name</th><th scope="col">Selected Seats</th><th scope="col">Price</th></tr></thead><tbody><tr><th scope="row">1</th><td>Drillis Ertugrul</td><td>'+drillis+'</td><td>$'+drillis * 5+'</td></tr><tr><th scope="row">2</th><td>Home Alone</td><td>'+homeAlone+'</td><td>$'+homeAlone * 5+'</td></tr><tr><th scope="row">3</th><td>Mamma</td><td>'+mamma+'</td><td>$'+mamma * 5+'</td></tr><tr><th scope="row">4</th><td>Money Heist</td><td>'+moneyHeist+'</td><td>$'+moneyHeist * 5+'</td></tr><tr><th scope="row">5</th><td>Osman Ghazi</td><td>'+osman+'</td><td>$'+osman * 5+'</td></tr><tr><th scope="row">6</th><td>Winner</td><td>'+winner+'</td><td>$'+winner * 5+'</td></tr></tbody></table></div><div><h3 class="text-white text-center">The Total Cost of Your Reserved Seats are $'+ total + '</h3></div>'
    var classinsert = document.getElementById('INSERT');
    classinsert.insertAdjacentHTML('afterbegin', tables)
}
