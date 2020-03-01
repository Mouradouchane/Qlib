
const QlibMessage = "Qlib Console Part : ";

function log(...ARGS){
    try{
        if(ARGS.length > 0){
            console.log(...ARGS);
        }
        else{
            console.warn(QlibMessage + "0 argument");
        }
    }
    catch(err){
        console.err(QlibMessage + err);
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
            console.warn(QlibMessage + "0 argument");
        }
    }
    catch(err){
        console.err(QlibMessage + err);
    }
}


function logString(ARGS , joinType = ""){
    if(ARGS.length > 0){
        let NewString = ARGS.join(joinType);
        if(joinType != undefined && joinType != null ){
            console.log(NewString);
            return NewString;
        }
    }
    else{
        console.warn(QlibMessage + "0 argument");
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
            console.warn(QlibMessage + "0 argument");
            return 0;
        }
    }
    catch(err){
        console.error(QlibMessage + err);
        return null;
    }
}


function logObj(OBJECT = {}, keys = true , values = true , typelog = "log"){
    try{
        if(!keys && !values){
            return console.warn(QlibMessage + "arguments 'keys' & 'values' false");
        }
        if(typeof(OBJECT) != "object"){
            return console.error(QlibMessage + "invalid varible");
        }
        if(typelog == "log"){
            for(let key in OBJECT){
                if(keys && values){
                    console.log(key,":",OBJECT[key]);
                }
                if(keys && !values){
                    console.log(key);
                }
                if(!keys && values){
                    console.log(OBJECT[key]);
                }
            }
        }

        if(typelog == "warn"){
            for(let key in OBJECT){
                if(keys && values){
                    console.warn(key,":",OBJECT[key]);
                }
                if(keys && !values){
                    console.warn(key);
                }
                if(!keys && values){
                    console.warn(OBJECT[key]);
                }
            }
        }

        if(typelog == "error"){
            for(let key in OBJECT){
                if(keys && values){
                    console.error(key,":",OBJECT[key]);
                }
                if(keys && !values){
                    console.error(key);
                }
                if(!keys && values){
                    console.error(OBJECT[key]);
                }
            }
        }

        if(typelog == "info"){
            for(let key in OBJECT){
                if(keys && values){
                    console.info(key,":",OBJECT[key]);
                }
                if(keys && !values){
                    console.info(key);
                }
                if(!keys && values){
                    console.info(OBJECT[key]);
                }
            }
        }

    }
    catch(err){
        console.error(QlibMessage + err);
    }
}


function clear(message = ""){
    console.clear();
    console.log(message);
}