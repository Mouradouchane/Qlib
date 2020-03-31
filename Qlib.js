
const QlibConsoleMessage = "Qlib Console Part : ";

// sources

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

const Notification_Sources = [
    "/notification/Q_ButtomBanner.js",
];

const String_Sources =  [
    "/string/Q_String.js",
    "/string/Q_StringFunctions.js",
];

const Compare_Sources = [
    "/compare/Q_Compare.js",
    "/compare/Q_MultiCompare.js"
];

const Numbers_Sources = [
    "/numbers/Q_Number.js",
    "/numbers/Q_NumbersFunctions.js"
];

function call(ArraySources = []){

    let Newscript; 
    
    for(let i = 0 ; i < ArraySources.length ; i += 1){
        Newscript = document.createElement("script");
        Newscript.src = ArraySources[i];  

        document.body.append(Newscript);
    }
    
}