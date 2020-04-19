call(Console_Sources);
call(Alert_Sources);
call(Confirm_Sources);
call(Notification_Sources);
call(String_Sources);
call(Compare_Sources);
call(Numbers_Sources);


window.addEventListener( "load" , _ => {

    var Button1 = document.querySelector("#showAlert"),
        Button2 = document.querySelector("#HideAlert");
    
    var kmp = new UNIT(120 , Units.Length.KiloMeter);
    
    
    let x = new STRING("this is A");

    let utf = x.toUTFArray();

    logN(toUTFArray("new usa") , utf);

}); 
