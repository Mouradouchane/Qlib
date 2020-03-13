

CallPart(Console_Sources);
CallPart(Alert_Sources);
CallPart(Confirm_Sources);

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

    //CONSOLE( _ , ...Array2D);
    //CONSOLE_N("console type" , "Message :" , ...Array2D);
    
    // var MyAlert = new Alert( "title" , `message` , "dark", true , true , true);
    //     MyAlert.Show();
    //     MyAlert.setCustomStyle([ArrayOfCss]);

    let obj = {
        x : "RK",
        y : "LP",
        Aka : "Qliter",
        isReady : true
    }
    
    var Array2D = [obj,obj,obj];
    let arr = ["string" , false , 1,2,3,4,5, Infinity , NaN , undefined , null , 0 , -1 , obj ];
        
    var ConfirmShowButton = document.querySelector("#showAlert") ,
        ConfirmHideButton = document.querySelector("#HideAlert");

    var Conf = new Confirm("confirm input","some inputs not ready yet","allow","refuse");
        Conf.Print();

});
