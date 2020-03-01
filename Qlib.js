

function CallConsolePart(){
    
    let ArraySources = ["/console/Q_ConsoleLog.js"];
    let Newscript; 
    
    for(let i = 0 ; i < ArraySources.length ; i += 1){
        Newscript = document.createElement("script");
        Newscript.src = ArraySources[i];  

        document.body.append(Newscript);
    }
    
}



