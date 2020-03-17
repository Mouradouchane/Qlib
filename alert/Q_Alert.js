
let AlertID = 0;

class Alert{
    
    constructor(title ,                 // title alert
                MSG ,                   // message alert
                ThemeStyle = "light" ,  // alert theme for dark or light "pages" 
                ok_Button = true ,      // true if you want to print ok button
                ignore_Button = false , // true if you want to print ignore button
                cancle_Button = false   // true if you want to print cancle button
    ){
        this.id = AlertID;
        this.title = title;
        this.MSG = MSG;
        this.ThemeStyle = ThemeStyle;
        this.ok_Button = ok_Button;
        this.ignore_Button = ignore_Button;
        this.cancle_Button = cancle_Button;
        this.invisible = false;
        this.AlertBackground;
        this.return = null;
        this.CustomStyle = [];
        this.Elements;
        this.Buttons;

        this.LightCSS = [
            // full alert style
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
            // title style 
            `
                font-size: 3vh;
                font-family: tahoma;
                font-weight: bold;
            
            `
                ,
            // message "MSG" style
            `
                font-size: 2vh;
                font-family: tahoma;
                font-weight: bold;
                color : gray;
            `
                ,
            // button ok style 
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
            // button ignore style  
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
            // button cancle style 
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
            // full alert style
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
            // title style 
            `
                font-size: 3vh;
                font-family: tahoma;
                font-weight: bold;
                color : white;
            `
                ,
            // message "MSG" style
            `
                font-size: 2vh;
                font-family: tahoma;
                font-weight: bold;
                color : gray;
            `
                ,
            // button ok style 
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
            // button ignore style  
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
            // button cancle style 
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
        
        this.setButton = (text , ID) =>{
            
            let button = document.createElement("button");
            button.textContent = text;
            button.setAttribute("id", ID);

            document.querySelector(`#alertFullScreen${this.id}`).appendChild(button);
            // this methode for get action return comming from alert
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

        this.Print = () => {
        
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
