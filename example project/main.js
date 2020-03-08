

CallPart(ConsoleSources);
CallPart(AlertSources);

window.addEventListener( "load" , _ => {

    //log("arg1");
    //logN(bl , bl , NaN);
    //logSum(one,ten);

    //warn("arg1");
    //warnN(bl , bl , NaN);
    //warnSum(8,8);
    //warnString(Ar, " / ");

    //error(ErrorTitle , str);
    //errorN(ErrorTitle , str);
    //errorString(arr , ".");

    //info();
    //infoN();
    //infoString(arr , " ");

    //assert(str);
    //assertN(arr);
    //assertString(" " , ...arr);

    //logObj(str , true , true , "info");
    //clear();

    //logWithStyle();
    //logCustomMessage();

    //logEmojiMsg();
    
    //logTable(obj , "data :" , "");
    //logMultiTables(Array2D);

    
    let obj = {
        x : "RK",
        y : "LP",
        Aka : "Qliter",
        isReady : true
    }
    
    var Array2D = [obj,obj,obj];

    let arr = ["string" , false , 1,2,3,4,5,Infinity , NaN , undefined , null , 0 , -1 , obj ];
    
    // ==== not finished yet ====
    //logObj(obj , true , false , "table");

    var myAlert = new alertFullScreen("title" , "msg" , "center" , "light" , true ,true,true);
    myAlert.Print();

    // CONSOLE( _ , ...Array2D);
    CONSOLE_N( "error" , _ , ...Array2D);

});
