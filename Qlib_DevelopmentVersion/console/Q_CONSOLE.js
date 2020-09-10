
/*  
    const object for print in console with multiple ways
    for ex : choosing type of console like error warn & ...
*/

const CONSOLE = {
    log(args_Line_By_Line = false , ...ARGS){
        try{
            if(ARGS.length > 0){
                if(!args_Line_By_Line){
                    console.log(...ARGS);
                }
                else{
                    for(let i = 0 ; i < ARGS.length ; i+=1){
                        console.log(ARGS[i]);
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
    },
    Sum(...ARGS){
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
    },
    obj(OBJECT = {}, keys = true , values = true , ConsoleType = "log"){
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
    },
    clear(message = " "){
        console.clear();
        console.log(message);
    },
    join(consoleType = "log", joinType = " " , ...ARGS){

        if(ARGS.length > 0){
            let NewString = ARGS.join(joinType);
            
            if(joinType != undefined && joinType != null ){
                switch (consoleType){
                    case "log" : console.log(NewString); break;
                    case "warn" : console.warn(NewString); break;
                    case "error" : console.error(NewString); break;
                    case "exception" : console.exception(NewString); break;
                    case "assert" : console.assert(false , NewString); break;
                }
            }
    
            return NewString;
        }
        else{
            console.warn(QlibConsoleMessage + "0 argument");
            return "";
        }
    
    },
    Assert(condition = false , args_Line_By_Line = false , ...ARGS){
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
    },
    log_WithEmoji(MSG_With_Emoji = "", Css_Style_As_String){

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
        
    },
    error(args_Line_By_Line = false , ...ARGS){
        try{
            if(ARGS.length > 0){
                if(!args_Line_By_Line){
                    console.error(...ARGS);
                }
                else{
                    for(let i = 0 ; i < ARGS.length ; i+=1){
                        console.error(ARGS[i]);
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
    },
    info(args_Line_By_Line = false , ...ARGS){
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
    },
    logWithStyle(MSG, ...CSS_Style_As_String){

        try{
            console.log(MSG , ...CSS_Style_As_String);
    
        }
        catch(err){
            console.error(QlibConsoleMessage + err); 
        }
    
    },
    logCustomMessage( 
        title = "Title : " , MSG = "Message",
        title_CSS_Style  = "color:lightgreen; font-size:16px; background:black; padding : 6px",
        MSG_CSS_Style = "color:white; font-size:16px; background:black; padding : 6px" ){

        console.log("%c"+title+"%c"+MSG , title_CSS_Style , MSG_CSS_Style);

    },
    table(ARG){
        console.table(ARG);
    },
    Tables(...ARGS){
    
        for(let arg = 0 ; arg < ARGS.length ; arg += 1){
            console.table(ARGS[arg]);
        }
    },
    warn(args_Line_By_Line = false , ...ARGS){
        try{
            if(ARGS.length > 0){
                if(!args_Line_By_Line){
                    console.warn(...ARGS);
                }
                else{
                    for(let i = 0 ; i < ARGS.length ; i+=1){
                        console.warn(ARGS[i]);
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
    },
      
}
