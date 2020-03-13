
let ConfirmID = 0;

class Confirm{
    constructor(title ,                 // title alert
                MSG ,                   // message alert
                buttonOneTextContent = "allow" , // text button 1 
                buttonTowTextContent = "refuse",  // text button 2
                ThemeStyle = "light" ,  // alert theme for dark or light "pages"  
        ){
            this.title = title;
            this.MSG = MSG;
            this.ThemeStyle = ThemeStyle;
            this.buttonOneTextContent = buttonOneTextContent;
            this.buttonTowTextContent = buttonTowTextContent;
            this.id = ConfirmID;
            this.Elements = {
                Confirm : undefined ,
                title : undefined ,
                msg : undefined ,
            };
            this.Buttons = null;
            this.value = null;
            
            this.LightCss = [
                // full confirm div
                `
                    position : absolute;
                    z-index : 9998;
                    width : 50%;
                    top: 50%;
                    left : 50%;
                    background : #fff;
                    text-align: center;
                    padding: 1vh;
                    transform: translate(-50% , -50%);
                    box-shadow: 0px 0px 8px 4px #0000006e;
                `,
                // title
                `
                    font-size : 4vh;
                    font-weight: bold;
                    font-family: tahoma;
                    color : #245eb9;
                `,
                // message "MSG"
                `
                    font-size : 2.5vh;
                    font-family: tahoma;
                    color :#2b2b2b;
                `,
                // button one 
                `
                    font-size: 2.5vh;
                    background :#22f422;
                    border-style: none;
                    border-radius: 0.4vh;
                    padding-left : 1.5vh;
                    padding-right : 1.5vh;
                    padding-top: 0.5vh;
                    padding-bottom: 0.5vh;
                    cursor : pointer;
                `,
                // button tow
                `   
                    font-size: 2.5vh;
                    background :#fb3939;
                    border-style: none;
                    border-radius: 0.4vh;
                    padding-left : 1.5vh;
                    padding-right : 1.5vh;
                    padding-top: 0.5vh;
                    padding-bottom: 0.5vh;
                    cursor : pointer;
                `
            ];

            this.DarkCss = [

            ];

            this.LightTheme = () => {
                
                let i = 0;

                for(let elem in this.Elements){
                    this.Elements[elem].style.cssText = this.LightCss[i];
                    i+=1;
                }
                
                
                for(let c =0 ; c < this.Buttons.length ; c+=1){
                    this.Buttons[c].style.cssText = this.LightCss[i];
                    i+=1;
                }
            };

            this.DarkTheme = () => {
                // we stoping here last time for making dark theme :)
            };

            this.Print = () => {
                document.body.insertAdjacentHTML("beforeend" , `
                    <div id="Confirm${this.id}"> 
                        <p id="ConfirmTitle${this.id}"> ${this.title} </p>
                        <p id="ConfirmMsg${this.id}"> ${this.MSG} </p>
                        <button id="ButtonOne${this.id}"> ${this.buttonOneTextContent} </button>
                        <button id="ButtonTow${this.id}"> ${this.buttonTowTextContent} </button>
                    </div>
                `);

                this.Elements.Confirm = document.querySelector(`#Confirm${this.id}`);
                this.Elements.title = this.Elements.Confirm.querySelector(`#ConfirmTitle${this.id}`);
                this.Elements.msg = this.Elements.Confirm.querySelector(`#ConfirmMsg${this.id}`);

                this.Buttons = document.querySelector(`#Confirm${this.id}`).querySelectorAll("button");

                this.Buttons[0].addEventListener("click" , _ => {
                    this.value = true;
                    console.log(this.value);
                });

                this.Buttons[1].addEventListener("click" , _ => {
                    this.value = false;
                    console.log(this.value);
                });
                
                this.LightTheme();

                ConfirmID += 1;
            }
        }
    }


