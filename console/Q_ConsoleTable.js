

function logTable(ARG , MSG = "", typeMSG = "table"){
    if(MSG != ""){
        switch (typeMSG) {

            case "log"  : console.log(MSG);  break;
            case "warn" : console.warn(MSG); break;
            case "info" : console.info(MSG); break;
            case "error": console.error(MSG); break;
            
            default: console.log(MSG); break;
        }
    }
    console.table(ARG);
}

function logMultiTables(...ARGS){
    
    for(let arg = 0 ; arg < ARGS.length ; arg += 1){
        console.table(ARGS[arg]);
    }
}