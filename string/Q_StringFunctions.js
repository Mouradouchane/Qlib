
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
        let txt = str;
        return (txt.charAt(0).toUpperCase() + txt.slice(1));
    }
    catch(err){
        throw err;
    }
    
}

function firstLower(str = ""){
    try{
        let txt = str;

        return (txt.charAt(0).toLowerCase() + txt.slice(1));
    }
    catch(err){
        throw err;
    }
    
}

function isPalindrome(str = ""){
    let rev = str.split("").reverse().join("");
    
    if(str == rev) return true;
    else return false;
}

function CompareString(String1 = "", String2 = ""){
    if(String1 === String2) return true;
    else return false;
}

function Join(ArrayOfStrings = [] , separetor = " "){
    if(Array.isArray(ArrayOfStrings)) return (ArrayOfStrings.join(separetor));
    else throw null;
}

function Split(str = "" , separetor = " "){
    if(typeof(str) == "string") return (str.split(separetor));
    else return null;
}


function toUTFArray(str = ""){
    try{  
        let splt = str.split("");
        let UTFArray = [];

        for(let i = 0 ; i < splt.length ; i += 1){
            UTFArray.push(splt[i].codePointAt());
        }

        return UTFArray;
    }
    catch(err){
        throw null;
    }
}

function toChar(NumberUTF = 0){
    try{
        return String.fromCodePoint(NumberUTF);
    }
    catch(err){ 
        throw err;
    }
}