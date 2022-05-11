let a = prompt(`Какое будет первое число?`, `Напиши сюда число`);

let b = prompt(`Какое будет второе число?`, `Напиши сюда число`);

function calcSum() {
    return( +a + +b );
};
alert(calcSum());

function calcSubt() {
    return( +a - +b );
};
alert(calcSubt());

function calcMult() {
    return( +a * +b );
};
alert(calcMult());

function calcDiv() {
    return( +a / +b );
};
alert(calcDiv());
