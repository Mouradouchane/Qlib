
function error(...ARGS){
    try{
        if(ARGS.length > 0){
            console.error(...ARGS);
        }
        else{
            console.warn(QlibConsoleMessage + "0 argument");
        }
    }
    catch(err){
        console.error(QlibConsoleMessage + err);
    }
}

function errorN(...ARGS){
    try{
        if(ARGS.length > 0){
            for(let i = 0 ; i < ARGS.length ; i+=1){
                console.error(ARGS[i]);
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


function errorString(joinType = " " , ...ARGS){

    if(ARGS.length > 0){
        let NewErrorString = ARGS.join(joinType);
        
        if(joinType != undefined && joinType != null ){
            console.error( NewErrorString );
        }

        return NewErrorString;
    }
    else{
        console.warn(QlibConsoleMessage + "0 argument");
        return "";
    }

}
