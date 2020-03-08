
class alertFullScreen{

    constructor(title ,                 // title alert
                MSG ,                   // message alert
                Position = "center" ,   // position in screen defult center
                ThemeStyle = "light" ,  // alert theme for dark or light "pages" 
                ok_Button = true ,       // true if you want to print ok button
                cancle_Button = false ,  // true if you want to print cancle button
                ignore_Button = false    // true if you want to print ignore button
    ){
        
        this.title = title;
        this.MSG = MSG;
        this.Position = Position;
        this.ThemeStyle = ThemeStyle;
        this.ok_Button = ok_Button;
        this.ignore_Button = ignore_Button;
        this.cancle_Button = cancle_Button;
        this.return = null;

        // this methode for get action return comming from alert
        /* 
            ** for ex : if you call "Print" alert with "ok" & "cancle" buttons
            & you "clicked" at "cancle" button .
            if you call "actionReturn" you get a string has "cancled" :)
        */
        this.actionReturn = () => this.return;

        this.Print = () => {
            document.body.insertAdjacentHTML("beforeend" , `
                <div id="alertFullScreen">
                    <p>${this.title}</p>
                    <p>${this.MSG}</p>
                </div>
            `);

            this.setButton = (text , id) =>{
                let button = document.createElement("button");

                button.textContent = text;
                button.setAttribute("id", id);

                document.body.querySelector("#alertFullScreen").appendChild(button);
            }

            if(this.ok_Button){
                this.setButton("ok" , "alertFullScreen_ok");
            }

            if(this.cancleButton){
                this.setButton("cancle" , "alertFullScreen_cancle");
            }

            if(this.ignore_Button){
                this.setButton("ignore" , "alertFullScreen_ignore");
            }
        }
    }

}


