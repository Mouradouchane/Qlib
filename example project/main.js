
call(Console_Sources);
call(Alert_Sources);
call(Confirm_Sources);
call(Notification_Sources);
call(String_Sources);
call(Compare_Sources);
call(Numbers_Sources);

window.addEventListener( "load" , _ => {

/*
        log("arg1");
        logN(bl , bl , NaN);
        logSum(one,ten);
        warn("arg1");
        warnN(bl , bl , NaN);
        warnSum(8,8);
        warnString(Ar, " / ");
        error(ErrorTitle , str);
        errorN(ErrorTitle , str);
        errorString(arr , ".");
        info();
        infoN();
        infoString(arr , " ");
        assert(str);
        assertN(arr);
        assertString(" " , ...arr);
        logObj(str , true , true , "info");
        clear();
        logWithStyle();
        logCustomMessage();
        logEmojiMsg();
        logTable(obj , "data :" , "");
        logMultiTables(Array2D);
        CONSOLE( _ , ...Array2D);
        CONSOLE_N("console type" , "Message :" , ...Array2D);
*/

    /*    
        Alert( "title" , `message` , "dark", true , true , true);
        Alert.Create();
        Alert.Show();
        Alert.Hide();
        Alert.Buttons();
        Alert.LightTheme();
        Alert.DarkTheme();
        Alert.setCustomStyle([ArrayOfCss]);
    */

    /*
        Confirm("title" , "message" , "button one text content" , "button tow text content", theme);
        Confirm.Create();
        Confirm.LightTheme();
        Confirm.DarkTheme();
        Confirm.Buttons[];
        Confirm.Show();
        Confirm.Hide();
        Confirm.setCustomStyle([ArrayOfCss]);
    */

    /*
    ""  STRING class "" extend => String
        STRING.log() wanr() err.... ;
        STRING.typeof();
        STRING.reverse();
        STRING.toCharArray();
        STRING.toUpper();
        STRING.toLower();
        STRING.FirstUpper();
        STRING.FirstLower();
        STRING.isblng();
        STRING.is();
        STRING.toHtmlElement();
        STRING.toHtmlNode();

    ""  STRING Functions ""
        toUpper to......
        CompareString();
        is() .....
    */
    
    /* 
        NUMBER class "" extend => Number
        Number.value

    */
    let obj = {
        x : "RK",
        y : "LP",
        Aka : "Qliter",
        isReady : true
    }
    var arr2D = [obj,obj,obj];
    let arr = ["string" , false , 1,2, Infinity , NaN , undefined , null , 0 , -1 , obj];
        
    var Button1 = document.querySelector("#showAlert"),
        Button2 = document.querySelector("#HideAlert");
    


        
}); 
