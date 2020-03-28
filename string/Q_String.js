
class STRING extends String{
    constructor(str = ""){
        super(str);
        
        this.text = str.toString();
        this.revText = this.text;
        
        this.lengthZeroBest = this.length -1;

        this.typeof = () => {
            return typeof(this);
        }

        this.log = () => {
            console.log(this.text);
        }
        this.warn = () => {
            console.warn(this.text);
        }
        this.error = () => {
            console.error(this.text);
        }
        this.info = () => {
            console.info(this.text);
        }
        this.exception = () => {
            console.exception(this.text);
        }

        this.reverse = () =>{
            this.revText = this.text.split("").reverse().join("");
            return this.revText;
        }
        
        this.toCharArray = () => {
            return this.text.split("");
        }

        this.toUpper = () => {
            return this.toUpperCase();
        }
        this.firstUpper = () => {
            let txt = "";
            
            for(let i = 0 ; i < this.text.length ; i += 1){
                if( i == 0){
                    txt += this.text[i].toUpperCase();
                }
                else{
                    txt += this.text[i];
                }
            }

            return txt;
        }

        this.toLower = () => {
            return this.toLowerCase();
        }
        this.firstLower = () => {
            let txt = "";
            
            for(let i = 0 ; i < this.text.length ; i += 1){
                if( i == 0){
                    txt += this.text[i].toLowerCase();
                }
                else{
                    txt += this.text[i];
                }
            }

            return txt;
        }

        this.isblng = () => {
            let rev = this.reverse();

            if(this.text == rev) return true;
            else return false;
        }

        this.is = (comparedValue) => {
            if(this.text == comparedValue) return true;
            else return false;
        }

        this.toHtmlElement = (ElementType = "p" , id = "defultID_arg") => {
            try{
                let element = document.createElement(ElementType);
                element.setAttribute("id",id);
                element.textContent = this.text;

                return element; 
            }
            catch(err){
                throw err;
            }
        }

        this.toHtmlNode = (ElementInDom = document.body) =>{
            try{
                let Node = document.createTextNode(this.text);
                
                ElementInDom.append(Node);
                
            }
            catch(err){
                throw err;
            }
        }
    }
}
