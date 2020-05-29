call(Console_Sources);
call(Alert_Sources);
call(Confirm_Sources);
call(Notification_Sources);
call(String_Sources);
call(Compare_Sources);
call(Numbers_Sources);
call(Swap_Sources);

window.addEventListener( "load" , _ => {

    var Button1 = document.querySelector("#showAlert"),
        Button2 = document.querySelector("#HideAlert");
 

    var x = [1,2];
    let b = [3,4];
    
    
    log(x,b);

    [x,b] = swap(x,b);

    log(x,b);

}); 
