import { JSXElement } from "@babel/types";

type MenuProps = {
    toLink: ["", "about", "menu", "ranking", "contact"],
    children: React.ReactNode
}

const HeaderLinkList = (props: MenuProps):JSX.Element => {
    const linkLength = props.toLink.length;
    let listTag;
    for(let i = 1; i <= linkLength; i++) {
        {props.toLink.map((link) => {
            listTag.push(`<li><a href="./${link}"><img src="./img/navi_0${link[linkLength]}.jpg" /></a></li>`)
        })}
    }
    return listTag;
}

export const MenuInHeader = () => {
    <header>
        <div id="head-contents">
        <div><img src="./img/logo.png" alt="スウィーツオンラインストア" /></div>
            <ul>
                <HeaderLinkList 
            </ul>
        </div>
    </header>
}