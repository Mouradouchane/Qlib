
const QlibConsoleMessage = "Qlib Console Part : ";

const Console_Sources = [
    "/console/Q_ConsoleLog.js",
    "/console/Q_ConsoleWarn.js",
    "/console/Q_ConsoleError.js",
    "/console/Q_ConsoleInfo.js",
    "/console/Q_ConsoleAssert.js",
    "/console/Q_ConsoleLogStyle.js",
    "/console/Q_ConsoleEmoji.js",
    "/console/Q_ConsoleTable.js",
    "/console/Q_CONSOLE.js"
];

const Alert_Sources = [
    "/alert/Q_Alert.js",
];

const Confirm_Sources = [
    "/confirm/Q_Confirm.js",
];

function CallPart(ArraySources = []){

    let Newscript; 
    
    for(let i = 0 ; i < ArraySources.length ; i += 1){
        Newscript = document.createElement("script");
        Newscript.src = ArraySources[i];  

        document.body.append(Newscript);
    }
    
}