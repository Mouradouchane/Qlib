
// ==== STRING class for making 'strings objects' =======

// incremented id , just id for any new object
// look at this.toHtmlElement to understand well
var stringID = 0;

// this class it's ** SUPER_SET ** from String constructor
class STRING extends String{
    constructor(str = ""){
        super(str);
        
        this.value = str.toString();
        // value but reversed check method ==> reverse
        this.reversedValue = this.value;
        
        // if you want to get length as 0 best index (length -1) 
        this.lengthZeroBest = this.length -1;

        // typeof this object  == "object"
        this.typeof = _ => {
            return typeof(this);
        }

        // typeof string value == "string"
        this.typeofValue = _ => {
            return this.typeof(this.value);
        }

        // console.log value direct
        this.log = () => {
            console.log(this.value);
        }
        // console.warn value direct
        this.warn = () => {
            console.warn(this.value);
        }
        // console.error value direct
        this.error = () => {
            console.error(this.value);
        }
        // console.info value direct
        this.info = () => {
            console.info(this.value);
        }
        // console.exception value direct
        this.exception = () => {
            console.exception(this.value);
        }
        // method for resvers string value 
        this.reverse = () =>{
            this.reversedValue = this.value.split("").reverse().join("");
            return this.reversedValue;
        }
        // auto call for reversed value
        this.reverse();

        // method return value as array of characters 
        this.toCharArray = () => {
            return this.value.split("");
        }

        // method return value as array of 'Hexadecimal UNICODE characters'   or   return null
        this.toUnicodeArray = () => {
            try{  
                let splt = this.value.split("");
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

        this.toUpper = () => {
            return this.toUpperCase();
        }
        // just first letter uppercase
        this.firstUpper = () => {
            let txt = this.value;

            return (txt.charAt(0).toUpperCase() + txt.slice(1));
        }

        this.toLower = () => {
            return this.toLowerCase();
        }
        // just first letter lowercase
        this.firstLower = () => {
            let txt = this.value;

            return (txt.charAt(0).toLowerCase() + txt.slice(1));
        }

        // this method return true if value equal himself in reverse  else return false
        this.isPalindrome = () => {
            let rev = this.reverse();

            if(this.value == rev) return true;
            else return false;
        }

        // for comparing this string with another ** by value or by value & type  == or === **
        this.is = (comparedValue , ComparisonByType = false) => {
            if(ComparisonByType){
                if(this.value === comparedValue) return true;
            }
            else{
                if(this.value == comparedValue) return true;
            }
            return false;
        }

        // method return HTML Element content this.value   or   throw an error
        this.toHtmlElement = (ElementType = "p" , id = `STRING_${stringID}`) => {
            try{
                let element = document.createElement(ElementType);
                element.setAttribute("id",id);
                element.textContent = this.value;

                stringID+=1;
                
                return element; 
            }
            catch(err){
                throw new Error(err);
            }
        }

        // method return a TextNode contains this.value    or   throw an error
        this.toHtmlNode = (ParentInDom = document.body) =>{
            try{
                let Node = document.createTextNode(this.value);
                
                ParentInDom.append(Node);
                
                return Node;
            }
            catch(err){
                throw err;
            }
        }
        
        // if you want to fill this string by value with special length 
        // in error throw is null
        
        // fillValue     : value you want use at fill 
        // howmany       : how much you want to fill
        // startPosition : starting index you want in string by default last index

        // for ex : x.Zfill( "@" , 10 , 0 );
        this.Zfill = (fillValue = " " , HowMany = 0 , startPosition = this.value.length) => {

            let str = this.value;

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
    }
}
