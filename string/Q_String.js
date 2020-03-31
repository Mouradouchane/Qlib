
var stringID = 0;

class STRING extends String{
    constructor(str = ""){
        super(str);
        
        this.value = str.toString();
        this.revText = this.value;
        
        this.lengthZeroBest = this.length -1;

        this.typeof = () => {
            return typeof(this);
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

        this.toUpper = () => {
            return this.toUpperCase();
        }
        this.firstUpper = () => {
            let txt = "";
            
            for(let i = 0 ; i < this.value.length ; i += 1){
                if( i == 0){
                    txt += this.value[i].toUpperCase();
                }
                else{
                    txt += this.value[i];
                }
            }

            return txt;
        }

        this.toLower = () => {
            return this.toLowerCase();
        }
        this.firstLower = () => {
            let txt = "";
            
            for(let i = 0 ; i < this.value.length ; i += 1){
                if( i == 0){
                    txt += this.value[i].toLowerCase();
                }
                else{
                    txt += this.value[i];
                }
            }

            return txt;
        }

        this.isblng = () => {
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
