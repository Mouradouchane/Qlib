
// just for printing error messages if wrong usage or exception lib
const QlibConsoleMessage = "Qlib : ";

// sources as paths of files sorted in Object OF Arrays
const SOURCES = {
    console : [
        "../Qlib_DevelopmentVersion/console/Q_CONSOLE.js",
        "../Qlib_DevelopmentVersion/console/Q_ConsoleFunctions.js"
    ],

    string :  [
        "../Qlib_DevelopmentVersion/string/Q_String.js",
        "../Qlib_DevelopmentVersion/string/Q_StringFunctions.js",
    ],

    compare : [
        "../Qlib_DevelopmentVersion/compare/Q_Compare.js",
        "../Qlib_DevelopmentVersion/compare/Q_MultiCompare.js"
    ],

    numbers : [
        "../Qlib_DevelopmentVersion/numbers/Q_Number.js",
        "../Qlib_DevelopmentVersion/numbers/Q_NumbersFunctions.js",
        "../Qlib_DevelopmentVersion/numbers/Q_NumberSystem.js",
        "../Qlib_DevelopmentVersion/numbers/Q_units.js"
    ],

    swap : [
        "../Qlib_DevelopmentVersion/swap/Q_swap.js"
    ],

    array : [
        "../Qlib_DevelopmentVersion/array/Q_array.js"
    ],

    dom : [
        "../Qlib_DevelopmentVersion/dom/Q_DOM.js",
        "../Qlib_DevelopmentVersion/dom/Q_DomFunctions.js"
    ],
    loop : [
        "../Qlib_DevelopmentVersion/loop/Q_loop.js"
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