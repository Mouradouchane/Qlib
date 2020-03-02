
function info(...ARGS){
    try{
        if(ARGS.length > 0){
            console.info(...ARGS);
        }
        else{
            console.warn(QlibConsoleMessage + "0 argument");
        }
    }
    catch(err){
        console.error(QlibConsoleMessage + err);
    }
}

function infoN(...ARGS){
    try{
        if(ARGS.length > 0){
            for(let i = 0 ; i < ARGS.length ; i+=1){
                console.info(ARGS[i]);
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


function infoString(joinType = " " , ...ARGS){
    try{
        if(ARGS.length > 0){
            let NewErrorString = ARGS.join(joinType);
            
            if(joinType != undefined && joinType != null ){
                console.info( NewErrorString );
            }
            
            return NewErrorString;
        }
        else{
            console.warn(QlibConsoleMessage + "0 argument");
            return "";
        }
    }
    catch(err){
        console.error(QlibConsoleMessage + err);
    }

}
