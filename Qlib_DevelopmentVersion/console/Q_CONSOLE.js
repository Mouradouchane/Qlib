
/*  
    function for print multiple thing in console 
    with choosing type of console like error warn & ...
*/

const CONSOLE = {
    log(...ARGS){
        try{
            if(ARGS.length > 0){
                console.log(...ARGS);
            }
            else{
                console.warn(QlibConsoleMessage + "0 argument");
            }
        }
        catch(err){
            console.error(QlibConsoleMessage + " " + err);
        }
    },
    logN(...ARGS){
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
    
}

/*
function CONSOLE(ConsoleType = "log"  , ...ARGS){
    switch (ConsoleType){
        case "log"   : log(     ...ARGS );    break;
        case "warn"  : warn(    ...ARGS );   break;
        case "error" : error(   ...ARGS );  break;
        case "info"  : info(    ...ARGS );   break;
        case "assert": assert(  ...ARGS ); break;
        default      : log(     ...ARGS );    break;
    }
}
*/

/*
    like CONSOLE function but any value new line
*/
function CONSOLE_N(ConsoleType = "log" , ...ARGS){
    switch (ConsoleType){
        case "log"   : logN( ...ARGS );  break;
        case "warn"  : warnN( ...ARGS );  break;
        case "error" : errorN( ...ARGS );  break;
        case "info"  : infoN( ...ARGS );  break;
        case "assert": assertN( ...ARGS );  break;
        default      : logN( ...ARGS );  break;
    }
}
