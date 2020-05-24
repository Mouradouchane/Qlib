

function logWithEmoji(MSG_With_Emoji = "", Css_Style_As_String){

    // emoji list supported by browsers 
    // https://unicode.org/emoji/charts/full-emoji-list.html

    let TextBeforeProcessing = MSG_With_Emoji.toString();
    let Rg = new RegExp(/0x([A-Z]|[a-z]|[0-9]){0,}/, "ig");

    let splt = TextBeforeProcessing.split(" ");

    try{
        
        let index = 0;
        splt.forEach(e => {
            if(e.match(Rg)){
                splt[index] = String.fromCodePoint(e);
            }
            index+=1;
        });

        let TextProcessed = splt.join(" ");

        console.log("%c" + TextProcessed , Css_Style_As_String);
        return TextProcessed;
    }
    catch(err){
        console.error(QlibConsoleMessage + err);
        return "";
    }
    
}


