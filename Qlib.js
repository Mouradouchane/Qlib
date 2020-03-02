
const QlibConsoleMessage = "Qlib Console Part : ";

function CallConsolePart(){

    let ArraySources = [
        "/console/Q_ConsoleLog.js",
        "/console/Q_ConsoleWarn.js",
        "/console/Q_ConsoleError.js",
        "/console/Q_ConsoleInfo.js",
        "/console/Q_ConsoleAssert.js",
        "/console/Q_ConsoleLogStyle.js"
    ];
    let Newscript; 
    
    for(let i = 0 ; i < ArraySources.length ; i += 1){
        Newscript = document.createElement("script");
        Newscript.src = ArraySources[i];  

        document.body.append(Newscript);
    }
    
}



