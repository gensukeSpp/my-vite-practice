
type MenuProps = {
    toLink: ["", "about", "menu", "ranking", "contact"],
    children: React.ReactNode
}

const LinkList = (props: MenuProps) => {
    const linkLength = props.toLink.length;
    for(let i = 1; i <= linkLength; i++) {
        {props.toLink.map((link) => {
            return `<li><a href="./${link}"><img src="./img/navi_0${link[linkLength]}.jpg" alt="トップページ" /></a></li>`
        })}
    }
}
export const MenuInHeader = () => {
    <header>
        <div id="head-contents">
        <div><img src="./img/logo.png" alt="スウィーツオンラインストア" /></div>
            <ul>
            </ul>
        </div>
    </header>
}