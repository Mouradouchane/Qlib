
// object conatin list of all html elements for direct usage
const HTMLELEMENTS = {       
    head : "head",        
    title : "title",        
    base : "base",        
    link : "link",        
    meta : "meta",        
    style : "style",        
    body : "body",        
    article : "article",        
    section : "section",        
    nav : "nav",        
    aside : "aside",        
    h1 : "h1",        
    h2 : "h2",        
    h3 : "h3",        
    h4 : "h4",        
    h5 : "h5",        
    h6 : "h6",        
    hgroup : "hgroup",        
    header : "header",        
    footer : "footer",        
    address : "address",        
    p : "p",        
    hr : "hr",        
    pre : "pre",        
    blockquote : "blockquote",        
    ol : "ol",        
    ul : "ul",        
    menu : "menu",        
    li : "li",        
    dl : "dl",        
    dt : "dt",        
    dd : "dd",        
    figure : "figure",        
    figcaption : "figcaption",        
    main : "main",        
    div : "div",        
    a : "a",        
    em : "em",        
    strong : "strong",        
    small : "small",        
    s : "s",        
    cite : "cite",        
    q : "q",        
    dfn : "dfn",        
    abbr : "abbr",        
    ruby : "ruby",        
    rt : "rt",        
    rp : "rp",        
    data : "data",        
    time : "time",        
    code : "code",         
    var : "var",        
    samp : "samp",        
    kbd : "kbd",        
    sub : "sub",        
    sup : "sup",        
    i : "i",        
    b : "b",        
    u : "u",        
    mark : "mark",        
    bdi : "bdi",        
    bdo : "bdo",        
    span : "span",        
    br : "br",        
    wbr : "wbr",        
    ins : "ins",        
    del : "del",        
    picture : "picture",  
    source : "source",  
    img : "img",  
    iframe : "iframe",  
    embed : "embed",   
    object : "object",  
    param : "param",  
    video : "video",  
    audio : "audio",   
    track : "track",  
    map : "map",
    area : "area",
    table : "table",   
    caption : "caption",  
    colgroup : "colgroup",
    col : "col", 
    tbody : "tbody", 
    thead : "thead", 
    tfoot : "tfoot",
    tr : "tr",
    td : "td",
    th : "th",
    form : "form", 
    label : "label", 
    input : "input",
    button : "button", 
    select : "select",
    datalist : "datalist",
    optgroup : "optgroup",
    option : "option",  
    textarea : "textarea",
    output : "output", 
    progress : "progress",
    meter : "meter", 
    fieldset : "fieldset", 
    legend : "legend", 
    details : "details",
    summary : "summary", 
    dialog : "dialog", 
    script : "script",  
    noscript : "noscript", 
    template : "template", 
    slot : "slot", 
    canvas : "canvas",
};

// DOCUMENT object like document object but just only for dom usage
const DOCUMENT = {
    //===================================================================================
    /* just like :
        document.body 
        document.head 
        document.documentElement
    */
    BODY : function(){
        return document.body;
    },

    HEAD : function(){
        return document.head;
    },

    DOCUMENT_ELEMENT : function(){
        return document.documentElement;
    },
    //===================================================================================

    //===================================================================================
    // this functions build it on appendChild & append functions
    // HTML_ELEMENT  : element you want to append it as child
    // Parent : Destination where to append this child by default "BODY"

    pushChild : function(HTML_ELEMENT = null , Parent = HTMLELEMENTS.body){
        // build it on appendchild
        try{
            // if append in "head"
            if(Parent === HTMLELEMENTS.head) document.head.appendChild(HTML_ELEMENT);
            // any thing else append in "body"
            else document.body.appendChild(HTML_ELEMENT);
            // for checking
            return true;
        } 
        catch(error){ // throw false + exception message !
            console.exception(QlibConsoleMessage , error);
            throw false;
        }
    },
    // concept pushChild
    push : function(HTML_ELEMENT = null , Parent = HTMLELEMENTS.body){
        try{
            if(Parent === HTMLELEMENTS.head) document.head.append(HTML_ELEMENT);
            else document.body.append(HTML_ELEMENT);
            return true;
        }
        catch(error){ 
            console.exception(QlibConsoleMessage , error);
            throw false;
        } 
    },
    //===================================================================================

    //===================================================================================
    // this function build it on prepend function
    // HTML_ELEMENT  : element you want to prepend it as child
    // Parent : Destination where to prepend this child by default "BODY" 
    unshift : function(HTML_ELEMENT = null , Parent = HTMLELEMENTS.body){
        // build it on prepend
        try{
            if(Parent === HTMLELEMENTS.head) document.head.prepend(HTML_ELEMENT);
            else document.body.prepend(HTML_ELEMENT);
            // true for checking
            return true;
        }
        catch(error){
            console.exception(QlibConsoleMessage , error);
            throw false;
        } 
    },
    //===================================================================================

    
};

class ELEMENT{
    constructor(HTML_ELEMENT = HTMLELEMENTS.div , HTML_ELEMENT_STYLE_AS_OBJECT = {}){
        
    }
};

class STYLE{
    constructor(){

        this.ADD_Style = () =>{

        }
    }

}