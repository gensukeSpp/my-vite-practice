// const menu_five = {1: "", 2: "about", 3: "menu", 4: "ranking", 5: "contact"};
const menu_five = ["", "about", "menu", "ranking", "contact"];
const InnerListMenu = () => {
    return (
        <ul>
            {menu_five.map((value, i) => {
                // https://qiita.com/boboboy_/items/2d607fa15dd3861e2bd7
                return <li><a href={`./${value}`}><img src={`/img/navi_0${i+1}.jpg`} /></a></li>
            })}
        </ul>
    )
}

export const MenuHeader = () => {
    return (     
        <header>
            <div id="head-contents">
                <div><img src="./img/logo.png" alt="スウィーツオンラインストア" /></div>
                <InnerListMenu />
            </div>
        </header>
    )
}