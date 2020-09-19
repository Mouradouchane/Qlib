
// just for printing error messages if wrong usage or exception lib
const QlibConsoleMessage = "Qlib : ";

// sources as paths of files sorted in Object OF Arrays
const SOURCES = {
    Console : [
        "../Qlib_DevelopmentVersion/console/Q_CONSOLE.js",
        "../Qlib_DevelopmentVersion/console/Q_ConsoleFunctions.js"
    ],

    String :  [
        "../Qlib_DevelopmentVersion/string/Q_String.js",
        "../Qlib_DevelopmentVersion/string/Q_StringFunctions.js",
    ],

    Compare : [
        "../Qlib_DevelopmentVersion/compare/Q_Compare.js",
        "../Qlib_DevelopmentVersion/compare/Q_MultiCompare.js"
    ],

    Numbers : [
        "../Qlib_DevelopmentVersion/numbers/Q_Number.js",
        "../Qlib_DevelopmentVersion/numbers/Q_NumbersFunctions.js",
        "../Qlib_DevelopmentVersion/numbers/Q_NumberSystem.js",
        "../Qlib_DevelopmentVersion/numbers/Q_units.js"
    ],

    Swap : [
    "../Qlib_DevelopmentVersion/swap/Q_swap.js"
    ],

    array : [
    "../Qlib_DevelopmentVersion/array/Q_array.js"
    ]

}

// responsible function for appending sources to the header html element
function include(Source_Scripts = []){

    // new script html element for external .js file
    let Newscript; 
    
    for(let i = 0 ; i < Source_Scripts.length ; i += 1){

        Newscript = document.createElement("script");
        //
        Newscript.src = Source_Scripts[i];  
        
        //  document.body.append(Newscript);    // append script in body
            document.head.append(Newscript);    // append script in head

    }
    
}