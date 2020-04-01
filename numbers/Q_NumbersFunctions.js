

const PI = Math.PI;

function Random(min = 0 , max = 10 , float = true){

    switch (float){
        case true  : return (Math.random() * max + min); break;
        case false : return Math.round((Math.random() * max + min)); break;
        default    : return (Math.random() * max + min);  
    }
    
}

function Sqrt(value){
    return Math.sqrt(value);
}

function Cbrt(value){
    return Math.cbrt(value);
}

function Pow(value , power){
    return Math.pow(value , power);
}

function Round(value){
    return Math.round(value);
}

function Abs(value){
    return Math.abs(value);
}

function Logaritm(value){
    return Math.log(value);
}

function isInt(value){
    // checking value if float or not return is "true || false || NaN"
    let checkFloat = isFloat(value);

    if(checkFloat != NaN){
        // if isfloat return false
        if(checkFloat) return false;
        // else that mean is Int :)
        else return true;
    }
    // if return is NaN
    else return NaN;
}

function isFloat(value){

    // if arg value is number
    if(typeof(value) == "number"){
        // converting value to string for check if has . or not :)
        let tostr = value.toString();

        // if has . return true else reutrn false
        if(tostr.includes(".")) return true;
        else return false;
    }
    else{
        return NaN;
    }
}

function Floor(value){
    return Math.floor(value);
}

function Ceil(value){
    return Math.ceil(value)
}

function toFloat(value){
    return Number.parseFloat(value);
}

function toInt(value){
    return Number.parseInt(value);
}

function parseFloat(value){
    return Number.parseFloat(value);
}

function parseInt(value){
    return Number.parseInt(value);
}

function toPercent(value,Percent,ValuePercent = 100){
    let operation = ((value / Percent) * ValuePercent) + "%";
    return operation;
}

function isNegative(value){
    if(value < 0) return true;
    else return false;
}

function toCurrency(value , currency = "$" , style = true){

    if(style) return (new Intl.NumberFormat("en-US").format(value) + currency);
    else return (value + currency);

}

function getPercent(number, percentFromNumber = "50%"){

    // just parse "percentFromNumber" for operation
    let percent = Number.parseFloat(percentFromNumber);
    
    // do operation & getting value
    let operation = (percent * 0.01) * number;

    // return operation as result 
    return operation;
}

function toArabicNumber(value){
    return (value.toLocaleString('ar-EG'));
}

const GB = 1024;

let x = getPercent(GB, "1%");

(async function(){
    
})();