
const QlibConsoleMessage = "Qlib : ";

// sources as paths of files in organization array

const Sources_Console = [
    "../Qlib_DevelopmentVersion/console/Q_CONSOLE.js",
    "../Qlib_DevelopmentVersion/console/Q_ConsoleFunctions.js"
];

const Sources_String =  [
    "../Qlib_DevelopmentVersion/string/Q_String.js",
    "../Qlib_DevelopmentVersion/string/Q_StringFunctions.js",
];

const Sources_Compare = [
    "../Qlib_DevelopmentVersion/compare/Q_Compare.js",
    "../Qlib_DevelopmentVersion/compare/Q_MultiCompare.js"
];

const Sources_Numbers = [
    "../Qlib_DevelopmentVersion/numbers/Q_Number.js",
    "../Qlib_DevelopmentVersion/numbers/Q_NumbersFunctions.js",
    "../Qlib_DevelopmentVersion/numbers/Q_NumberSystem.js",
    "../Qlib_DevelopmentVersion/numbers/Q_units.js"
];

const Sources_Swap = [
    "../Qlib_DevelopmentVersion/swap/Q_swap.js"
]


// responsible function for appending sources to the header html element
function include(Scripts_Sources = []){

    let Newscript; 
    
    for(let i = 0 ; i < Scripts_Sources.length ; i += 1){

        Newscript = document.createElement("script");
        Newscript.src = Scripts_Sources[i];  
        
        //document.body.append(Newscript);
        document.head.append(Newscript)

    }
    
}