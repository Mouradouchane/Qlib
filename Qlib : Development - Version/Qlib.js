
//const QlibConsoleMessage = "Qlib : ";

// sources

const Console_Sources = [
    "../Qlib : Development - Version/console/Q_ConsoleLog.js",
    "../Qlib : Development - Version/console/Q_ConsoleWarn.js",
    "../Qlib : Development - Version/console/Q_ConsoleError.js",
    "../Qlib : Development - Version/console/Q_ConsoleInfo.js",
    "../Qlib : Development - Version/console/Q_ConsoleAssert.js",
    "../Qlib : Development - Version/console/Q_ConsoleLogStyle.js",
    "../Qlib : Development - Version/console/Q_ConsoleEmoji.js",
    "../Qlib : Development - Version/console/Q_ConsoleTable.js",
    "../Qlib : Development - Version/console/Q_CONSOLE.js"
];

const Alert_Sources = [
    "../Qlib : Development - Version/alert/Q_Alert.js",
];

const Confirm_Sources = [
    "../Qlib : Development - Version/confirm/Q_Confirm.js",
];

const Notification_Sources = [
    "../Qlib : Development - Version/notification/Q_ButtomBanner.js",
];

const String_Sources =  [
    "../Qlib : Development - Version/string/Q_String.js",
    "../Qlib : Development - Version/string/Q_StringFunctions.js",
];

const Compare_Sources = [
    "../Qlib : Development - Version/compare/Q_Compare.js",
    "../Qlib : Development - Version/compare/Q_MultiCompare.js"
];

const Numbers_Sources = [
    "../Qlib : Development - Version/numbers/Q_Number.js",
    "../Qlib : Development - Version/numbers/Q_NumbersFunctions.js",
    "../Qlib : Development - Version/numbers/Q_NumberSystem.js",
    "../Qlib : Development - Version/numbers/Q_units.js"
];

const Swap_Sources = [
    "../Qlib : Development - Version/swap/Q_swap.js"
]

function call(ArraySources = []){

    let Newscript; 
    
    for(let i = 0 ; i < ArraySources.length ; i += 1){
        Newscript = document.createElement("script");
        Newscript.src = ArraySources[i];  

        document.body.append(Newscript);
    }
    
}