
// ARRAY constructor
class ARRAY extends Array{
    constructor(...arg){
        
        super(...arg);

                        // this arg for shorting from "max to min" or "min to max" bydef "min to max"
        this.sortAndReverse = (MaxToMin = false) => {
            try{

                // if false : use this sort from "min to max" 
                !MaxToMin ?  this.sort( (first , secend) => (first > secend) ) 
                :
                // else use this sort from "max to min"
                this.sort( (first , secend) => (first < secend) );
                
                // reverse sorted values as last step 
                this.reverse();
              
            } 
            catch(err){
                // in exception print error in console & throw null as value  
                console.exception(QlibConsoleMessage + err);
                throw null;
            }

            // return array as last step
            return this;
        }

        // like sortAndReverse function but just sort
        this.SORT = (MaxToMin = false) => {
            try{
                !MaxToMin ? this.sort( (first , secend) => (first > secend) ) 
                            :
                            this.sort( (first , secend) => (first < secend) ) 
            }
            catch(err){
                console.exception(QlibConsoleMessage + err);
                throw null;
            }

            // return array as last step
            return this;
        }

        // for fill array by using static value with size
        this.fill = (value , size) => {
            size += this.length;
            try{
                // push value to the array in every time
                for(let length = this.length ; length < size ; length+=1){
                    this.push(value);
                }

            }
            catch(err){
                console.exception(QlibConsoleMessage + err);
                throw null;
            }

            // return this array as last step
            return new ARRAY(this);
        }
        
        this.size = this.length;
        this.lengthZeroBest = this.length - 2;
    }
}