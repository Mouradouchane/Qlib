include(SOURCES.console);
include(SOURCES.string);
include(SOURCES.compare);
include(SOURCES.numbers);
include(SOURCES.swap);
include(SOURCES.array);
include(SOURCES.dom);
include(SOURCES.loop);

window.addEventListener("load" , function main(...args){
    
    var Button1 = document.querySelector("#showAlert"),
        Button2 = document.querySelector("#HideAlert");
    
    let cvs = document.createElement(HTMLELEMENTS.canvas);
    
    let r = range(10,80,10);

    let arr = [1,2,3,4,5,6,7];

    log(range(arr));

});

