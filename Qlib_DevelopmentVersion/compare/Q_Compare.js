
// justa a simple function for comparing tow values
function is(value1 , value2 , ComparisonByType = false){

    // if you want to compare by value 
    if(ComparisonByType == false){
        if(value1 == value2) return true;
        else return false;
    }
    // if you want to compare by value & by type
    else if(ComparisonByType){
        if(value1 === value2) return true;
        else return false;
    }
    else return false;
    
}
