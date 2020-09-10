
// this function for comparing multiple values 
// if any comparison between two values not equal return value will be false

function MultipleComparison(ComparisonByType = false , ...args){
    let result = true;
    
    try{

        // not sorting but just loop for comparing all values tow by tow :)
        args.sort((e,x) => {
            if(!ComparisonByType){
                // comparing by value
                if(e != x) result = false;
            }
            else{
                // comparing by value & by result 
                if(e !== x) result = false;
            }
        });
        return result;
    }
    catch(error){
        return new Error(error);
    }

}
