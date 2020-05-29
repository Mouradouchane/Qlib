
//const QlibConsoleMessage = "Qlib : ";

// sources

const Console_Sources = [
    "../Qlib_DevelopmentVersion/console/Q_ConsoleLog.js",
    "../Qlib_DevelopmentVersion/console/Q_ConsoleWarn.js",
    "../Qlib_DevelopmentVersion/console/Q_ConsoleError.js",
    "../Qlib_DevelopmentVersion/console/Q_ConsoleInfo.js",
    "../Qlib_DevelopmentVersion/console/Q_ConsoleAssert.js",
    "../Qlib_DevelopmentVersion/console/Q_ConsoleLogStyle.js",
    "../Qlib_DevelopmentVersion/console/Q_ConsoleEmoji.js",
    "../Qlib_DevelopmentVersion/console/Q_ConsoleTable.js",
    "../Qlib_DevelopmentVersion/console/Q_CONSOLE.js"
];

const Alert_Sources = [
    "../Qlib_DevelopmentVersion/alert/Q_Alert.js",
];

const Confirm_Sources = [
    "../Qlib_DevelopmentVersion/confirm/Q_Confirm.js",
];

const Notification_Sources = [
    "../Qlib_DevelopmentVersion/notification/Q_ButtomBanner.js",
];

const String_Sources =  [
    "../Qlib_DevelopmentVersion/string/Q_String.js",
    "../Qlib_DevelopmentVersion/string/Q_StringFunctions.js",
];

const Compare_Sources = [
    "../Qlib_DevelopmentVersion/compare/Q_Compare.js",
    "../Qlib_DevelopmentVersion/compare/Q_MultiCompare.js"
];

const Numbers_Sources = [
    "../Qlib_DevelopmentVersion/numbers/Q_Number.js",
    "../Qlib_DevelopmentVersion/numbers/Q_NumbersFunctions.js",
    "../Qlib_DevelopmentVersion/numbers/Q_NumberSystem.js",
    "../Qlib_DevelopmentVersion/numbers/Q_units.js"
];

const Swap_Sources = [
    "../Qlib_DevelopmentVersion/swap/Q_swap.js"
]

function call(ArraySources = []){

    let Newscript; 
    
    for(let i = 0 ; i < ArraySources.length ; i += 1){
        Newscript = document.createElement("script");
        Newscript.src = ArraySources[i];  

        document.body.append(Newscript);
    }
    
}