
function assert(...ARGS){
    try{
        if(ARGS.length > 0){
            console.assert(false , ...ARGS);
        }
        else{
            console.warn(QlibConsoleMessage + "0 argument");
        }
    }
    catch(err){
        console.error(QlibConsoleMessage + err);
    }
}

function assertN(MSG , ...ARGS){
    try{
        if(ARGS.length > 0){

            switch (MSG){
                case "" :   for(let i = 0 ; i < ARGS.length ; i+=1){
                                console.assert(false , ARGS[i]);
                            } 
                break;

                default :   for(let i = 0 ; i < ARGS.length ; i+=1){
                                console.assert(false , MSG , ARGS[i]);
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

