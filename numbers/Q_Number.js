
var NumID = 0;

class NUMBER extends Number{
    constructor(value){
        super(value);
        this.value = value;

        this.half = _ => {
            return (this.value/2);
        }

        this.typeof = _ => {
            return typeof(this);
        }

        this.is = (comparedValue) => {
            if(this.value == comparedValue) return true;
            else return false;
        }

        this.pow = (power) =>{
            return Math.pow(this.value , power);
        }

        this.toBoolean = _ => {
            return Boolean(this.value);
        }

        this.toChar = _ => {
            return String.fromCharCode(this.value);
        }

        this.ceil = _ => {
            return Math.ceil(this.value);
        }

        this.floor = _ => {
            return Math.floor(this.value);
        }

        this.round = _ => {
            return Math.round(this.value);
        }

        this.abs = _ => {
            return Math.abs(this.value);
        }

        this.isNegative = _ => {
            if(this.value < 0) return true;
            else return false;
        }

        this.toInt = _ => {
            return Number.parseInt(this.value);
        }

        this.toBin = _ => {
            let val = this.value.toString("2");
            return Number.parseInt(val);
        }

        this.toHex = _ => {
            let val = this.value.toString("16");
            return val;
        }

        this.toOct = _ => {
            let val = this.value.toString("8");
            return val;
        }

        this.split = _ => {
            let val = Number.parseInt(this.value).toString().split("");

            for(let i = 0 ; i < val.length ; i += 1){
                val[i] = Number.parseInt(val[i]);
            }

            return val;
        }

        this.toPercent = (ValuePercent = 100) =>  {
            let operation = ((this.value / ValuePercent) * 100) + "%";

            return operation;
        }

        this.log = _ => {
            return Math.log(this.value);
        }

        this.cbrt = _ => {
            return Math.cbrt(this.value);
        }

        this.toHtmlElement = (ElementType = "p" , id = `Num_defultID${NumID}`) => {
            try{
                let element = document.createElement(ElementType);
                element.setAttribute("id",id);
                element.textContent = this.value;

                NumID += 1;
                
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

        this.toCurrency = (currency = "ù") => {
            return (this.value + currency);
        }

        this.getPercent = (PercentValueFromNumber) => {
            // just parse "PercentValueFromNumber" for operation
            let percent = Number.parseFloat(PercentValueFromNumber);

            // do operation & getting value
            let operation = (percent * 0.01) * this.value;
            
            //return operation as result
            return operation;
        
        }

        this.isInt = () => {
            // checking if float or not return "true || false || NaN"
            let checkFloat = this.isFloat();

            if(checkFloat != NaN){
                if(checkFloat) return false;
                else return true;
            }
            else return NaN;
        }

        this.isFloat = () => {
            // if value is number
            if(typeof(this.value) == "number"){
                // converting value to string for check if has . or not :)
                let tostr = this.value.toString();

                // if has . return true else reutrn false
                if(tostr.includes(".")) return true;
                else return false;
            }
            else{
                return NaN;
            }
        }

    }
}
