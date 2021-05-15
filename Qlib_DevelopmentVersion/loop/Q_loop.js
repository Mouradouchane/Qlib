
function loop(CallBackFunction = function(){return null} , count = 1 , increment = 1 ,){
    for(let i = 1; i <= count ; i += increment){
        try{
            CallBackFunction();
        }
        catch(error){
            console.exception(QlibConsoleMessage , error);
        }
    }
};

function range(start = 0 , end = 0 , increment = 1){
    let rg = [];
    
    if(increment < 1) increment = 1;
    if(Array.isArray(start)) return range(0 , start.length);

    if(start < end){
        for(let i = start ; i < end ; i += increment){
            rg.push(i);
        }
        return rg;
    }
    else if(start > end){
        for(let i = start ; i > end ; i -= increment){
            rg.push(i);
        }
        return rg;
    }
    else {
        rg.push(start); 
        return rg;
    }

}