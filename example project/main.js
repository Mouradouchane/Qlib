include(Sources_Console);
include(Sources_String);
include(Sources_Compare);
include(Sources_Numbers);
include(Sources_Swap);


window.addEventListener("load" , function main(...args){

    var Button1 = document.querySelector("#showAlert"),
        Button2 = document.querySelector("#HideAlert");
 
    var sv = new STRING("string");

    log(sv.Zfill("_",2 , 0))
});

