//1
function Car(manufacturer, model, yearOfRelease, averageSpeed) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.yearOfRelease = yearOfRelease;
    this.averageSpeed = averageSpeed;
}

//1_1
Car.prototype.show = function () {
    document.write(`Производитель: ${this.manufacturer}`);
    document.write(`Модель: ${this.model}`);
    document.write(`Год выпуска: ${this.yearOfRelease}`);
    document.write(`Средняя скорость: ${this.averageSpeed}`);
}

//1_2
Car.prototype.timeToCoverTheDistance = function (distance, speed) {
    return ((distance / speed) + Math.floor((distance / speed) / 4)).toFixed(2);
}

let car1 = new Car("Audi", "A6", "2011", 211);
let car2 = new Car("Audi", "M235i", "2016", 230);

car1.show();
car2.show();

document.write(`Потребуется ${car1.timeToCoverTheDistance(600, 60)} часов для поездки!`);
document.write(`Потребуется ${car1.timeToCoverTheDistance(600, 90)} часов для поездки!`);



//2
function fractionObject(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}

fractionObject.prototype.additionOfFractions = function(a) {
    return (this.numerator / this.denominator) + (a.numerator / a.denominator);
}
fractionObject.prototype.subtractionOfFractions = function(a) {
    return (this.numerator / this.denominator) - (a.numerator / a.denominator);
}
fractionObject.prototype.multiplicationOfFractions = function(a) {
    return (this.numerator / this.denominator) * (a.numerator / a.denominator);
}
fractionObject.prototype.divisionOfFractions = function(a) {
    return (this.numerator / this.denominator) / (a.numerator / a.denominator);
}
fractionObject.prototype.reductionOfFractions = function() {
    document.write(this.numerator, this.denominator);

    for(let i = this.denominator; i > 0 ; i--) {
        if (this.numerator % i == 0 && this.denominator % i == 0)
            return i;
    }
}

let fraction1 = new fractionObject(8, 2);
let fraction2 = new fractionObject(6, 3);

document.write(fraction1.additionOfFractions(fraction2));
document.write(fraction1.subtractionOfFractions(fraction2));
document.write(fraction1.multiplicationOfFractions(fraction2));
document.write(fraction1.divisionOfFractions(fraction2));
document.write(fraction1.reductionOfFractions());
document.write(fraction2.reductionOfFractions());



//3
let getTimeInSeconds = (a, b = 0, c = 0) => { return (Number(a) * 3600) + (Number(b) * 60) + (Number(c)) }

let formatTime = (a, b = 0, c = 0) => {
    a <= 9 ? a = "0" + a : null;
    b <= 9 ? b = "0" + b : null;
    c <= 9 ? c = "0" + c : null;

    return a + ":" + b + ":" + c;
}

let retransmitSecondsInTime = a => {
    let hh = 0;
    let mm = 0;
    let ss = 0;

    hh = parseInt(a / 3600);
    mm = parseInt((a % 3600) / 60);
    ss = parseInt(a % 60);

    return formatTime(hh, mm, ss);
}

function Date(hh = 0, mm = 0, ss = 0) {
    hh <= '9' ? hh = '0' + hh : null;
    mm <= '9' ? mm = '0' + mm : null;
    ss <= '9' ? ss = '0' + ss : null;

    this.hh = hh;
    this.mm = mm;
    this.ss = ss;
}
Date.prototype.showDate = function() {
    document.write(`${this.hh}:${this.mm}:${this.ss}`);
}
Date.prototype.addSeconds = function(ss) {
    let timeinSeconds = getTimeInSeconds(this.hh, this.mm, this.ss);
    timeinSeconds+=ss;
    return retransmitSecondsInTime(timeinSeconds);
}
Date.prototype.addMinutes = function(mm) {
    let timeinSeconds = getTimeInSeconds(this.hh, this.mm, this.ss);
    timeinSeconds+=(mm * 60);
    return retransmitSecondsInTime(timeinSeconds);
}
Date.prototype.addHours = function(hh) {
    let timeinSeconds = getTimeInSeconds(this.hh, this.mm, this.ss);
    timeinSeconds+=(hh * 3600);
    return retransmitSecondsInTime(timeinSeconds);
}

let date = new Date(5, 9, 1);
let date1 = new Date(10, 4, 0);
let date2 = new Date();

date.showDate();
date1.showDate();
date2.showDate();

document.write(date.addHours(12));
document.write(date1.addMinutes(15));
document.write(date2.addSeconds(1000));