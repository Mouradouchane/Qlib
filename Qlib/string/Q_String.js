
var stringID = 0;

class STRING extends String{
    constructor(str = ""){
        super(str);
        
        this.value = str.toString();
        this.revText = this.value;
        
        this.lengthZeroBest = this.length -1;

        this.typeof = _ => {
            return typeof(this);
        }

        this.typeofValue = _ => {
            return this.typeof(this.value);
        }

        this.log = () => {
            console.log(this.value);
        }
        this.warn = () => {
            console.warn(this.value);
        }
        this.error = () => {
            console.error(this.value);
        }
        this.info = () => {
            console.info(this.value);
        }
        this.exception = () => {
            console.exception(this.value);
        }

        this.reverse = () =>{
            this.revText = this.value.split("").reverse().join("");
            return this.revText;
        }
        
        this.toCharArray = () => {
            return this.value.split("");
        }

        this.toUTFArray = () => {
            try{  
                let splt = this.value.split("");
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

        this.toUpper = () => {
            return this.toUpperCase();
        }
        this.firstUpper = () => {
            let txt = this.value;

            return (txt.charAt(0).toUpperCase() + txt.slice(1));
        }

        this.toLower = () => {
            return this.toLowerCase();
        }
        this.firstLower = () => {
            let txt = this.value;

            return (txt.charAt(0).toLowerCase() + txt.slice(1));
        }

        this.isPalindrome = () => {
            let rev = this.reverse();

            if(this.value == rev) return true;
            else return false;
        }

        this.is = (comparedValue) => {
            if(this.value == comparedValue) return true;
            else return false;
        }

        this.toHtmlElement = (ElementType = "p" , id = `defultID${stringID}`) => {
            try{
                let element = document.createElement(ElementType);
                element.setAttribute("id",id);
                element.textContent = this.value;

                stringID+=1;
                
                return element; 
            }
            catch(err){
                throw err;
            }
        }

        this.toHtmlNode = (ElementInDom = document.body) =>{
            try{
                let Node = document.createTextNode(this.value);
                
                ElementInDom.append(Node);
                
                return Node;
            }
            catch(err){
                throw err;
            }
        }
    }
}
