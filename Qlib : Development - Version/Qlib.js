
//const QlibConsoleMessage = "Qlib : ";

// sources

const Console_Sources = [
    "../Qlib/console/Q_ConsoleLog.js",
    "../Qlib/console/Q_ConsoleWarn.js",
    "../Qlib/console/Q_ConsoleError.js",
    "../Qlib/console/Q_ConsoleInfo.js",
    "../Qlib/console/Q_ConsoleAssert.js",
    "../Qlib/console/Q_ConsoleLogStyle.js",
    "../Qlib/console/Q_ConsoleEmoji.js",
    "../Qlib/console/Q_ConsoleTable.js",
    "../Qlib/console/Q_CONSOLE.js"
];

const Alert_Sources = [
    "../Qlib/alert/Q_Alert.js",
];

const Confirm_Sources = [
    "../Qlib/confirm/Q_Confirm.js",
];

const Notification_Sources = [
    "../Qlib/notification/Q_ButtomBanner.js",
];

const String_Sources =  [
    "../Qlib/string/Q_String.js",
    "../Qlib/string/Q_StringFunctions.js",
];

const Compare_Sources = [
    "../Qlib/compare/Q_Compare.js",
    "../Qlib/compare/Q_MultiCompare.js"
];

const Numbers_Sources = [
    "../Qlib/numbers/Q_Number.js",
    "../Qlib/numbers/Q_NumbersFunctions.js",
    "../Qlib/numbers/Q_NumberSystem.js",
    "../Qlib/numbers/Q_units.js"
];

const Swap_Sources = [
    "../Qlib/swap/Q_swap.js"
]

function call(ArraySources = []){

    let Newscript; 
    
    for(let i = 0 ; i < ArraySources.length ; i += 1){
        Newscript = document.createElement("script");
        Newscript.src = ArraySources[i];  

        document.body.append(Newscript);
    }
    
}