
function reverse(str = ""){
    try{
        let reversedString = str.split("").reverse().join("");
        return reversedString;
    }
    catch(err){
        throw err;
    }
}

function toUpper(str = "") {
    try{
        return str.toUpperCase();
    }
    catch(err){
        throw err;
    }
}

function toLower(str = "") {
    try{
        return str.toLowerCase();
    }
    catch(err){
        throw err;
    }
}

function firstUpper(str = ""){
    try{
        let txt = "";
    
        for(let i = 0 ; i < str.length ; i += 1){
            if( i == 0){
                txt += str[i].toUpperCase();
            }
            else{
                txt += str[i];
            }
        }
    
        return txt;
    }
    catch(err){
        throw err;
    }
    
}

function firstLower(str = ""){
    try{
        let txt = "";
    
        for(let i = 0 ; i < str.length ; i += 1){
            if( i == 0){
                txt += str[i].toLowerCase();
            }
            else{
                txt += str[i];
            }
        }
    
        return txt;
    }
    catch(err){
        throw err;
    }
    
}

function isblng(str = ""){
    let rev = str.split("").reverse().join("");
    
    if(str == rev) return true;
    else return false;
}

function CompareString(String1 = "", String2 = ""){
    if(String1 === String2) return true;
    else return false;
}
