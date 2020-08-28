var drillis = localStorage.getItem('countD');
var homeAlone = localStorage.getItem('counth');
var mamma = localStorage.getItem('countm');
var moneyHeist = localStorage.getItem('countM');
var osman = localStorage.getItem('countO');
var winner = localStorage.getItem('countW');

function calculatePrice() {
    document.getElementsByClassName('modalSample')[0].classList.add('hide');
    var tables = '<h1 class="text-white py-5 text-center" style="font-family: "Alata", sans-serif;"> PRICE OF BOOKED SEAT </h1><div class="bg-white text-center"><table class="table table-striped table-hover"><thead><tr><th scope="col">S.No</th><th scope="col">Movie Name</th><th scope="col">Selected Seats</th><th scope="col">Price</th></tr></thead><tbody><tr><th scope="row">1</th><td>Drillis Ertugrul</td><td>=====</td><td>==*==</td></tr><tr><th scope="row">2</th><td>Home Alone</td><td>=====</td><td>==*==</td></tr><tr><th scope="row">3</th><td>Mamma</td><td>=====</td><td>==*==</td></tr><tr><th scope="row">4</th><td>Money Heist</td><td>=====</td><td>==*==</td></tr><tr><th scope="row">5</th><td>Osman Ghazi</td><td>=====</td><td>==*==</td></tr><tr><th scope="row">6</th><td>Winner</td><td>=====</td><td>==*==</td></tr></tbody></table></div>'
    var classinsert = document.getElementsByClassName('modalSample')[0];
    classinsert.insertAdjacentHTML('afterbegin', tables)
}

