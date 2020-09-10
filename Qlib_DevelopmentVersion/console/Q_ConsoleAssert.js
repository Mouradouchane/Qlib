
function assert(condition = false , ...ARGS){
    try{
        if(ARGS.length > 0){
            console.assert(condition , ...ARGS);
        }
        else{
            console.warn(QlibConsoleMessage + "0 argument");
        }
    }
    catch(err){
        console.error(QlibConsoleMessage + err);
    }
}

function assertN(...ARGS){
    try{
        if(ARGS.length > 0){

            for(let i = 0 ; i < ARGS.length ; i+=1){
                console.assert(false , ARGS[i]);
            } 
     
        }
        else{
            console.warn(QlibConsoleMessage + "0 argument");
        }
    }
    catch(err){
        console.error(QlibConsoleMessage + err);
    }
}


function assertString( joinType = " " , ...assertARG ){

    try{
        let NewAssertString = assertARG.join(joinType);
        
        if(joinType != undefined && joinType != null ){
            console.assert(false,NewAssertString );
        }

        return NewAssertString;
    }
    catch(err){
        console.warn(QlibConsoleMessage + err);
        throw err;
    }

}

