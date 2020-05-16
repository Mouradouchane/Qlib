
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

function CONSOLE_N(ConsoleType = "log" , MSG , ...ARGS){
    switch (ConsoleType){
        case "log"   : logN( MSG ,      ...ARGS );  break;
        case "warn"  : warnN( MSG ,     ...ARGS );  break;
        case "error" : errorN( MSG ,    ...ARGS );  break;
        case "info"  : infoN( MSG ,     ...ARGS );  break;
        case "assert": assertN( MSG ,   ...ARGS );  break;
        default      : logN( MSG ,      ...ARGS );  break;
    }
}
