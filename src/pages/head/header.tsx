const menu_five = ["", "about", "menu", "ranking", "contact"];
const InnerListMenu = () => {
    const array_length = menu_five.length;
    for(let i=1; i<=array_length; i++){
        return `<li><a href="./${menu_five}"><img src="./img/navi_0${i}.jpg" /></a></li>`   
    }
}

export const MenuHeader =        
        <header>
            <div id="head-contents">
                <div><img src="./img/logo.png" alt="スウィーツオンラインストア" /></div>
                <ul>
                    <InnerListMenu />
                </ul>
            </div>
        </header>