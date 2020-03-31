

function logWithStyle(MSG, ...CSS_Style_As_String){

    try{
        console.log(MSG , ...CSS_Style_As_String);

    }
    catch(err){
        console.error(QlibConsoleMessage + err); 
    }

}

function logCustomMessage( title = "Title : " , MSG = "Message",
            title_CSS_Style  = "color:lightgreen; font-size:16px; background:black; padding : 6px",
            MSG_CSS_Style = "color:white; font-size:16px; background:black; padding : 6px" 
        ){

    console.log("%c"+title+"%c"+MSG , title_CSS_Style , MSG_CSS_Style);

}
