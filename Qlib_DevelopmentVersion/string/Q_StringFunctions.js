
// this module just has multiple functions to deal with strings

// function that takes a string and return it inverted
function reverse(str = ""){
    try{
        let reversedString = str.split("").reverse().join("");
        return reversedString;
    }
    catch(err){
        throw err;
    }
}

// function for return string with letters uppercase
function toUpper(str = "") {
    try{
        return str.toUpperCase();
    }
    catch(err){
        throw err;
    }
}

// function for return string with letters lowercase
function toLower(str = "") {
    try{
        return str.toLowerCase();
    }
    catch(err){
        throw err;
    }
}

// function for return string with first letters uppercase
function firstUpper(str = ""){
    try{
        let txt = str;
        return (txt.charAt(0).toUpperCase() + txt.slice(1));
    }
    catch(err){
        throw err;
    }
    
}

// function for return string with first letters lowercase
function firstLower(str = ""){
    try{
        let txt = str;

        return (txt.charAt(0).toLowerCase() + txt.slice(1));
    }
    catch(err){
        throw err;
    }
    
}

// function return true if string equal himself in reverse else return false
function isPalindrome(str = ""){
    let rev = str.split("").reverse().join("");
    
    if(str == rev) return true;
    else return false;
}

// function for mix array of strings to one string with special separator
function Join(separetor = " " , ...Strings){
    if(Array.isArray(Strings)) return (Strings.join(separetor));
    else throw null;
}

// function for splitting string to array depending separator
function Split(str = "" , separetor = " "){
    if(typeof(str) == "string") return (str.split(separetor));
    else return null;
}

// function take string & return array of 'Hexadecimal UNICODE characters'   or   return null
function toUnicodeArray(str = ""){
    try{  
        let splt = str.split("");
        let UTFArray = [];

        for(let i = 0 ; i < splt.length ; i += 1){
            UTFArray.push("00" + splt[i].codePointAt().toString(16));
        }

        return UTFArray;
    }
    catch(err){
        throw null;
    }
}

// function take a 'unicode number' & if number correct then return 'character'
function toChar(NumberUnicode = 0){
    try{
        return String.fromCodePoint(NumberUnicode);
    }
    catch(err){ 
        throw err;
    }
}


// function if you want to fill string by value with special length 
// in error throw is null
        
// str           : string value 
// fillValue     : value you want use at fill 
// howmany       : how much you want to fill
// startPosition : starting index you want in string by default last index

// for ex : x.Zfill("this is text" , "*" , 4 , 0 ); // output : ****this is text

function Zfill(str = "" , fillValue = " " , HowMany = 0 , startPosition = str.length){

    try{       
        if( startPosition === str.length){

            return (str + fillValue.toString().repeat(HowMany));

        }
        else{
            let part1 = str.slice(0 , startPosition);
            let part2 = str.slice(startPosition , str.length);
            
            return (part1 + fillValue.toString().repeat(HowMany) + part2);
        }
    }
    catch(error) {
        throw null;
    }

}