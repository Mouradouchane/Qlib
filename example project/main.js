include(SOURCES.Console);
include(SOURCES.String);
include(SOURCES.Compare);
include(SOURCES.Numbers);
include(SOURCES.Swap);
include(SOURCES.array);

window.addEventListener("load" , function main(...args){

    var Button1 = document.querySelector("#showAlert"),
        Button2 = document.querySelector("#HideAlert");
    
    const x = new STRING("logiclly");
    let arr = new ARRAY(100,1,80,9,200,2,3,9999,true);

    arr.SORT();

    log(arr);

});

