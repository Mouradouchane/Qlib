
function MultiCompare(...args){
    let result = true;
    
    // not sorting but just loop for checking all args :)
    args.sort((e,x) => {
        if(e != x) result = false;
    });

    return result;
}
