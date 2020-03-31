
let BannerID = 0;

class BottomBanner{

    constructor(MSG_HTML_as_String = "" , ThemeStyle = "light"){
        this.message = MSG_HTML_as_String;
        this.id = BannerID;
        this.ThemeStyle = ThemeStyle;
        this.FullBanner = undefined;
        this.isHide = true;

        this.LightCss = [
            // full buttom banner
            `            
                position: fixed;
                background: rgba(253, 198, 198, 0.95);
                z-index : 999${this.id};
                text-align: center;
                width: 100%;
                padding: 3vh;
                left: 0px;
                bottom: 0px;
                display : none;
                overflow: hidden;
            `,
            // MSG
            `
                font-size: 2.5vh;
                font-family: tahoma;
                color : #171717;
                display: inline-block;
            `,
            // close button
            `
                background: red;
                border-style: none;
                color :white;
                border-radius: 1vh;
                cursor: pointer;
                font-size: 2vh;
                text-align: center;
                margin-left: 1vh;
                padding: 0.6vh;
            `, 
            // a
            `
                color : #004cff;
                text-decoration: none;
            `,
        ];

        this.DarkCss = [
            // full buttom banner
            `            
                position: fixed;
                background: rgba(28, 27, 27, 0.95);
                z-index : 9990;
                text-align: center;
                width: 100%;
                padding: 3vh;
                left: 0px;
                bottom: 0px;
                display : none;
                overflow: hidden;
            `,
            // MSG
            `
                font-size: 2.5vh;
                font-family: tahoma;
                color : white;
                display: inline-block;
            `,
            // close button
            `
                background: red;
                border-style: none;
                color :white;
                border-radius: 1vh;
                cursor: pointer;
                font-size: 2vh;
                text-align: center;
                margin-left: 1vh;
                padding: 0.6vh;
            `, 
            // a
            `
                color : yellow;
                text-decoration: none;
            `,
        ];

        this.LightTheme = () => {

            let Banner = document.querySelector(`#ButtomBanner${this.id}`);
            let Childs = Banner.children;

            this.FullBanner = Banner; 

            // set style for "full bottom banner"
            Banner.style.cssText = this.LightCss[0];
            
            // set style for "banner message "
            Childs[0].style.cssText = this.LightCss[1];

            // set style for "banner close button"
            Childs[1].style.cssText = this.LightCss[2];

            // set style for "a"
            let Links = Childs[0].querySelectorAll("a"); 
            
            for(let c = 0 ; c < Links.length ; c += 1 ){
                Links[c].style.cssText = this.LightCss[3];
            }
        };

        this.DarkTheme = () => {

            let Banner = document.querySelector(`#ButtomBanner${this.id}`);
            let Childs = Banner.children;

            this.FullBanner = Banner; 

            // set style for "full bottom banner"
            Banner.style.cssText = this.DarkCss[0];
            
            // set style for "banner message "
            Childs[0].style.cssText = this.DarkCss[1];

            // set style for "banner close button"
            Childs[1].style.cssText = this.DarkCss[2];

            // set style for "a"
            let Links = Childs[0].querySelectorAll("a"); 
            
            for(let c = 0 ; c < Links.length ; c += 1 ){
                Links[c].style.cssText = this.DarkCss[3];
            }
        };

        this.Create = () => {
            document.body.insertAdjacentHTML("beforeend" , `
                <div id="ButtomBanner${this.id}">
                    <p id="ButtomBanner${this.id}message"> ${this.message} </p>
                    <button id="ButtomBanner${this.id}button"> X </button>
                </div>
            `);

            switch (this.ThemeStyle){
                case "light" : this.LightTheme(); break;
                case "dark" : this.DarkTheme(); break;

                default : this.LightTheme(); break;
            }
            

            this.FullBanner.querySelector("button").addEventListener("click" , this.Hide);
            BannerID +=1;
        }

        this.Hide = () => {
            this.FullBanner.style.display = "none";
            this.isHide = true;
        }
        this.Show = () => {
            this.FullBanner.style.display = "block";
            this.isHide = false;
        }
    }

}

