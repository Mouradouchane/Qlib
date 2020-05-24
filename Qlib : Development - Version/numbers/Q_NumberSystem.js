
function toBin(decimalValue = 0){
    try{
        if(!Array.isArray(decimalValue)) return (Number.parseInt(decimalValue.toString("2")));
        else return NaN;
    }
    catch(err){
        console.error("error :" + err);
        throw NaN;
    } 
}

function toHex(decimalValue = 0){
    try{
        if(!Array.isArray(decimalValue)) return (decimalValue.toString("16"));
        else return NaN;
    }
    catch(err){
        console.error("error :" + err);
        throw NaN;
    }
}

function toOct(decimalValue = 0){
    try{
        if(!Array.isArray(decimalValue)) return (Number.parseInt(decimalValue.toString("8")));
        else return NaN;
    }
    catch(err){
        console.error("error :" + err);
        throw NaN;
    }
}

function toDecimal(value = 0, NumberingSystem_Type = 10){
    try {
        let t = NumberingSystem_Type;

        if(t != 2 && t != 8 && t != 10 && t != 16 && !Array.isArray(t)){
            return NaN;
        }
        else {
            if(t == 2 || t == 8 || t == 16 ) return (Number.parseInt(value , t));
            if(t == 10) return (Number.parseInt(value));
        }
    } 
    catch(error){
        console.error("error :" + err);
        throw NaN;
    }
}

