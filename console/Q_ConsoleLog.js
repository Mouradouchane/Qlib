
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


function logN(MSG , ...ARGS){
    try{
        if(ARGS.length > 0){

            switch (MSG){
                case "" :  for(let i = 0 ; i < ARGS.length ; i+=1){
                                    console.log(ARGS[i]);
                                } 
                break;

                default :   for(let i = 0 ; i < ARGS.length ; i+=1){
                                console.log(MSG , ARGS[i]);
                            } 
                break;
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


function logObj(OBJECT = {}, keys = true , values = true , typelog = "log"){
    try{
        if(!keys && !values){
            return console.warn(QlibConsoleMessage + "arguments 'keys' & 'values' false");
        }
        if(typeof(OBJECT) != "object"){
            return console.error(QlibConsoleMessage + "invalid varible");
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

        if(typelog == "assert"){
            for(let key in OBJECT){
                if(keys && values){
                    console.assert(false , key,":",OBJECT[key]);
                }
                if(keys && !values){
                    console.assert(false , key);
                }
                if(!keys && values){
                    console.assert(false , OBJECT[key]);
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