
function log(...ARGS){
    try{
        if(ARGS.length > 0){
            console.log(...ARGS);
        }
        else{
            console.warn(QlibConsoleMessage + "0 argument");
        }
    }
    catch(err){
        console.error(QlibConsoleMessage + err);
    }
}


function logN(...ARGS){
    try{
        if(ARGS.length > 0){
            for(let i = 0 ; i < ARGS.length ; i+=1){
                console.log(ARGS[i]);
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


function logString(joinType = " " , ...ARGS){

    if(ARGS.length > 0){
        let NewString = ARGS.join(joinType);

        if(joinType != undefined && joinType != null ){
            console.log(NewString);
        }

        return NewString;
    }
    else{
        console.warn(QlibConsoleMessage + "0 argument");
        return "";
    }

}


function logSum(...ARGS){
    try{
        if(ARGS.length > 0){
            let sum = ARGS.reduce((ARG1, ARG2) => ARG1+ARG2);
            console.log(sum);
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


function logObj(OBJECT = {}, keys = true , values = true , ConsoleType = "log"){
    try{

        if(!keys && !values){
            return console.warn(QlibConsoleMessage + "arguments 'keys' & 'values' false");
        }

        else if(typeof(OBJECT) != "object"){
            return console.error(QlibConsoleMessage + "invalid varible");
        }

        else {
            
            for(let key in OBJECT){
                if(keys && values){
                    switch (ConsoleType) {
                        case "log"   : console.log(key,":",OBJECT[key]); break;
                        case "info"  : console.info(key,":",OBJECT[key]); break;
                        case "error" : console.error(key,":",OBJECT[key]); break;
                        case "warn"  : console.warn(key,":",OBJECT[key]); break;
                        case "assert": console.assert(false,key,":",OBJECT[key]); break;

                        default      : console.log(key,":",OBJECT[key]); break;
                    }
                }
                if(keys && !values){
                    switch (ConsoleType) {
                        case "log"   : console.log(key); break;
                        case "warn"  : console.warn(key); break;
                        case "error" : console.error(key); break;
                        case "info"  : console.info(key); break;
                        case "assert": console.assert(key); break;

                        default      : console.log(key); break;
                    }
                }
                if(!keys && values){
                    switch (ConsoleType) {
                        case "log"   : console.log(OBJECT[key]); break;
                        case "warn"  : console.warn(OBJECT[key]); break;
                        case "error" : console.error(OBJECT[key]); break;
                        case "info"  : console.info(OBJECT[key]); break;
                        case "assert": console.assert(OBJECT[key]); break;

                        default      : console.log(OBJECT[key]); break;
                    }
                }
            }

        }

    }
    catch(err){
        console.error(QlibConsoleMessage + err);
    }
}


function clear(message = " "){
    console.clear();
    console.log(message);
}