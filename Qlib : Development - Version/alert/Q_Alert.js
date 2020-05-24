
/*
    this varible for giving each alert in DOM for 
    "index id" like : Alert_1 , Alert_2 ...Z
*/
let AlertID = 0;

// Alert class who have all prop & methods
class Alert{
    
    constructor(title ,                 // title alert
                MSG ,                   // message alert
                ThemeStyle = "light" ,  // alert theme for dark or light "pages" 
                ok_Button = true ,      // true if you want to print ok button
                ignore_Button = false , // true if you want to print ignore button
                cancle_Button = false   // true if you want to print cancle button
    ){
        this.id = AlertID; // id has auto value form "AlertID" 
        this.title = title; // title alert :)
        this.MSG = MSG;     // message alert
        this.ThemeStyle = ThemeStyle; // theme style "dark" or "light"
        this.ok_Button = ok_Button; // ok button in alert for click "ok"
        this.ignore_Button = ignore_Button; // ignore button like ok button
        this.cancle_Button = cancle_Button; // cancle button like ok button
        this.invisible = false; // invisible for show/hide alert
        this.AlertBackground; // 
        this.return = null; // this get a value form buttons in alert if user click ok we get ok as return here
        this.CustomStyle = []; // for making custom css style 
        this.Elements; // array has element Alert "no buttons"
        this.Buttons; // array only has buttons in Alert 
        this.LightCSS = [
            
            // === style for light style "light theme" ===
            
            // style 1 for "full alert" 
            `   
                position:  fixed;
                top: 50%;
                left : 50%;
                width : 40%;
                display : none;
                transform: translate(-50% , -50%);
                background : white;
                padding: 1vh;
                border-radius: 0.5vh;
                box-shadow: rgba(0, 0, 0, 0.31) 0px 0px 8px 4px;
                z-index:9999;
            ` 
                ,
            // stlye 2 for "title" 
            `
                font-size: 3vh;
                font-family: tahoma;
                font-weight: bold;
            
            `
                ,
            // stlye 3 for "message" 
            `
                font-size: 2vh;
                font-family: tahoma;
                font-weight: bold;
                color : gray;
            `
                ,
            // style 4 for button "ok" 
            `
                background: #73d791;
                color: black;
                border-radius: 0.5vh;
                font-size: 2.5vh;
                font-family: tahoma;
                margin: 1vh;
                padding : 0.8vh;
                cursor : pointer;
                border-style: none;
            `
                ,
            // style 5 for button "ignore" 
            `
                background: rgb(244, 134, 91);
                color: black;
                border: 0.2vh solid black;
                border-radius: 0.5vh;
                font-size: 2.5vh;
                font-family: tahoma;
                margin: 1vh;
                padding : 0.8vh;
                cursor : pointer;
                border-style: none;
            `
                ,
            // style 6 for button "cancle" 
            `
                background: rgb(244, 91, 91);
                color: black;
                border: 0.2vh solid black;
                border-radius: 0.5vh;
                font-size: 2.5vh;
                font-family: tahoma;
                margin: 1vh;
                padding : 0.8vh;
                cursor : pointer;
                border-style: none;
            `
        ];

        this.DarkCSS = [
            // === style for dark style "dark theme" ===

            // style 1 for "full alert" 
            `   
                position:  fixed;
                top: 50%;
                left : 50%;
                width : 40%;
                transform: translate(-50% , -50%);
                background : #1a1a1a;
                padding: 1vh;
                border-radius: 0.5vh;
                display : none;
                box-shadow: rgba(0, 0, 0, 0.31) 0px 0px 8px 4px;
                z-index:9999;
            ` 
                ,
            // style 2 for title  
            `
                font-size: 3vh;
                font-family: tahoma;
                font-weight: bold;
                color : white;
            `
                ,
            // style 3 for "message" 
            `
                font-size: 2vh;
                font-family: tahoma;
                font-weight: bold;
                color : gray;
            `
                ,
            // style 4 for button "ok"  
            `
                background: #73d791;
                color: white;
                border: 0.2vh solid black;
                border-radius: 0.5vh;
                font-size: 2.5vh;
                font-family: tahoma;
                margin: 1vh;
                padding : 0.5vh;
                cursor : pointer;
                border-style: none;
            `
                ,
            // style 5 for button "ignore"  
            `
                background: rgb(244, 134, 91);
                color: white;
                border: 0.2vh solid black;
                border-radius: 0.5vh;
                font-size: 2.5vh;
                font-family: tahoma;
                margin: 1vh;
                padding : 0.5vh;
                cursor : pointer;
                border-style: none;
            `
                ,
            // style 6 for button "cancle"  
            `
                background: rgb(244, 91, 91);
                color: white;
                border: 0.2vh solid black;
                border-radius: 0.5vh;
                font-size: 2.5vh;
                font-family: tahoma;
                margin: 1vh;
                padding : 0.5vh;
                cursor : pointer;
                border-style: none;
            `
        ];

        // this methode for set "ligth theme" to the Alert
        this.LightTheme = () =>{
            this.Elements = {
                fullalert    : document.querySelector(`#alertFullScreen${this.id}`), 
                title        : document.querySelector("#title"+this.id),
                msg          : document.querySelector("#msg"+this.id),
            };
            this.Buttons = this.Elements.fullalert.querySelectorAll("button");

            let CssIndex = 0;
            for(let index in this.Elements){
                this.Elements[index].style.cssText = this.LightCSS[CssIndex];
                CssIndex+=1;
            }
        };
        
        // this methode for set "dark theme to the Alert"
        this.DarkTheme = () => {
            this.Elements = {
                fullalert    : document.querySelector(`#alertFullScreen${this.id}`), 
                title        : document.querySelector("#title"+this.id),
                msg          : document.querySelector("#msg"+this.id)
            }
            this.Buttons = this.Elements.fullalert.querySelectorAll("button");

            let CssIndex = 0;
            for(let index in this.Elements){
                this.Elements[index].style.cssText = this.DarkCSS[CssIndex];
                CssIndex+=1;
            }
        };
        
        // this methode for set or append new buttons to the Alert
        // text = textContent for button
        this.setButton = (text , ID) =>{
            
            let button = document.createElement("button");
            button.textContent = text;
            button.setAttribute("id", ID);

            document.querySelector(`#alertFullScreen${this.id}`).appendChild(button);
            // this methode for get action from buttons in alert 
            /* 
                ** for ex : if you call "Print" alert with "ok" & "cancle" buttons
                & you "clicked" at "cancle" button .
                if you call "actionReturn" you get a string has "cancled" :)
            */
            switch (this.ThemeStyle){

                case "light" :  {
                    switch (text) {
                        case "ok" : button.style.cssText = this.LightCSS[3]; break;
                        case "ignore" : button.style.cssText = this.LightCSS[4]; break;
                        case "cancle" : button.style.cssText = this.LightCSS[5]; break;
                    }
                } break;

                case "dark"  : {
                    switch (text) {
                        case "ok" : button.style.cssText = this.DarkCSS[3]; break;
                        case "ignore" : button.style.cssText = this.DarkCSS[4]; break;
                        case "cancle" : button.style.cssText = this.DarkCSS[5]; break;
                    }
                } break;
            }
            button.addEventListener("click" , _ =>{
            this.return = text;
            this.Hide();
            });
        };

        this.Create = () => {
        
        document.body.insertAdjacentHTML("beforeend" , `
            <div id="alertBackground${this.id}" style="position:fixed;top:0px;left:0px;width:100%;height:100%;
            background:rgba(0, 0, 0, 0.77);z-index:9998;display:none"> </div>
            <div id="alertFullScreen${this.id}">
                <p id="title${this.id}">${this.title}</p>
                <p id="msg${this.id}">${this.MSG}</p>
            </div>
        `);

            this.AlertBackground = document.querySelector("#alertBackground"+this.id);

            if(this.ok_Button) this.setButton("ok" , "alertFullScreen_ok"+this.id);
            if(this.ignore_Button) this.setButton("ignore" , "alertFullScreen_ignore"+this.id);
            if(this.cancle_Button) this.setButton("cancle" , "alertFullScreen_cancle"+this.id);
            
            /* calling theme & style here */
            if(this.ThemeStyle == "light")  this.LightTheme();
            if(this.ThemeStyle == "dark")   this.DarkTheme();

            AlertID += 1;
        }

        this.Show = () => {
            this.invisible = true;
            this.AlertBackground.style.display = `block`;
            this.Elements.fullalert.style.display = `block`;
        }
        this.Hide = () => {
            this.invisible = false;
            this.AlertBackground.style.display = `none`;
            this.Elements.fullalert.style.display = `none`;
        }   
        
        this.setCustomStyle = (ArrayOfCssStyle = []) => {

            let targetAlert = document.querySelector(`#alertFullScreen${this.id}`).children;

            if(ArrayOfCssStyle.length >= 0){

                for(let i = 0 ; i < targetAlert.length ; i += 1){
                    
                    if( ArrayOfCssStyle[i] != null && 
                        ArrayOfCssStyle[i] != undefined &&
                        ArrayOfCssStyle[i] != "" ){
                            
                        targetAlert[i].style.cssText += ArrayOfCssStyle[i];
                            
                    }
                    
                }
            }
            
        }
    }
}
