include(SOURCES.console);
include(SOURCES.string);
include(SOURCES.compare);
include(SOURCES.numbers);
include(SOURCES.swap);
include(SOURCES.array);

window.addEventListener("load" , function main(...args){

    var Button1 = document.querySelector("#showAlert"),
        Button2 = document.querySelector("#HideAlert");
    
    const x = new STRING("logiclly");
    let arr = new ARRAY();
        arr.fill(NaN , 10);

    log(arr.length , arr.size , arr);


});

