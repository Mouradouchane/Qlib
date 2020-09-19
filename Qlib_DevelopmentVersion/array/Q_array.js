
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
    }
}