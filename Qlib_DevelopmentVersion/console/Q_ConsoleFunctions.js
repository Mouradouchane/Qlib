
function CLEAR(message = " "){
    console.clear();
    console.log(message);
}

function log(...ARGS){
    try{
        if(ARGS.length > 0) console.log(...ARGS);

        else console.warn(QlibConsoleMessage + "0 argument");
    }
    catch(err){
        console.error(QlibConsoleMessage + " " + err);
    }
}

// print args in console in line by line
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
        console.error(QlibConsoleMessage + " " + err);
    }
}



/* print multiple values by choosing type of console*/
function Console(ConsoleType = "log"  , ...ARGS){
    switch (ConsoleType){
        case "log"   : log(     ...ARGS );    break;
        case "warn"  : warn(    ...ARGS );   break;
        case "error" : error(   ...ARGS );  break;
        case "info"  : info(    ...ARGS );   break;
        case "assert": assert(  ...ARGS ); break;
        default      : log(     ...ARGS );    break;
    }
}


/*
    like CONSOLE function but any value new line
*/
function Console_N(ConsoleType = "log" , ...ARGS){
    switch (ConsoleType){
        case "log"   : CONSOLE.log(true, ...ARGS );  break;
        case "warn"  : CONSOLE.warn(true, ...ARGS );  break;
        case "error" : CONSOLE.error(true, ...ARGS );  break;
        case "info"  : CONSOLE.info(true, ...ARGS );  break;
        case "assert": CONSOLE.Assert(true, ...ARGS );  break;
        default      : CONSOLE.log(true, ...ARGS );  break;
    }
}


function Assert(condition = false , args_Line_By_Line = false , ...ARGS){
    try{
        if(ARGS.length > 0){
            if(!args_Line_By_Line){
                console.assert(condition , ...ARGS);
            }
            else{
                for(let i = 0 ; i < ARGS.length ; i+=1){
                    console.assert(false , ARGS[i]);
                }  
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



function log_WithEmoji(MSG_With_Emoji = "", Css_Style_As_String){

    // emoji list supported by browsers 
    // https://unicode.org/emoji/charts/full-emoji-list.html

    let TextBeforeProcessing = MSG_With_Emoji.toString();
    let Rg = new RegExp(/0x([A-Z]|[a-z]|[0-9]){0,}/, "ig");

    let splt = TextBeforeProcessing.split(" ");

    try{
        
        let index = 0;
        splt.forEach(e => {
            if(e.match(Rg)){
                splt[index] = String.fromCodePoint(e);
            }
            index+=1;
        });

        let TextProcessed = splt.join(" ");

        console.log("%c" + TextProcessed , Css_Style_As_String);
        return TextProcessed;
    }
    catch(err){
        console.error(QlibConsoleMessage + err);
        return "";
    }
    
}


function info(args_Line_By_Line = false , ...ARGS){
    try{
        if(ARGS.length > 0){
            if(!args_Line_By_Line){
                console.info(...ARGS);
            }
            else{
                for(let i = 0 ; i < ARGS.length ; i+=1){
                    console.info(ARGS[i]);
                } 
            }
        }
        else{
            console.warn(QlibConsoleMessage + "0 argument");
        }
    }
    catch(err){
        console.error(QlibConsoleMessage + " " + err);
    }
}

function logMultiTables(...ARGS){
    
    for(let arg = 0 ; arg < ARGS.length ; arg += 1){
        console.table(ARGS[arg]);
    }
}

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


