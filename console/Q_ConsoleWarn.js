
function warn(...ARGS){
    try{
        if(ARGS.length > 0){
            console.warn(...ARGS);
        }
        else{
            console.warn(QlibConsoleMessage + "0 argument");
        }
    }
    catch(err){
        console.error(QlibConsoleMessage + err);
    }
}

function warnN(...ARGS){
    try{
        if(ARGS.length > 0){
            for(let i = 0 ; i < ARGS.length ; i+=1){
                console.warn(ARGS[i]);
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


function warnString(joinType = " " , ...ARGS){

    if(ARGS.length > 0){

        let NewString = ARGS.join(joinType);

        if(joinType != undefined && joinType != null ){
            console.warn(NewString);
        }
        
        return NewString;
    }
    else{
        console.warn(QlibConsoleMessage + "0 argument");
        return "";
    }

}

function warnSum(...ARGS){
    try{
        if(ARGS.length > 0){
            let sum = ARGS.reduce((ARG1, ARG2) => ARG1+ARG2);
            console.warn(sum);
            return sum;
        }
        else{
            console.warn(QlibConsoleMessage + "0 argument");
            return 0;
        }
    }
    catch(err){
        console.error(QlibConsoleMessage + err);
        return null;
    }
}
