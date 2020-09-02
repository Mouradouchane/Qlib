
function swap(var1 , var2){
    try{
        return [var2 , var1];
    }
    catch(err){
        console.exception("Qlib : swap " + err);
        throw [null , null];
    } 
}
