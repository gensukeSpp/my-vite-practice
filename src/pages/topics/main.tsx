import { useState } from "react"

// const TopicsFetch = () => {

const getTopics: Promise<void> = fetch("https://jsonplaceholder.typicode.com/todos/", {
    method: 'GET'})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(e => console.error(e.message));
// }

export const TopicsArea = () => {
    let topics = getTopics;
    console.log(topics);
    return (
        <main>
            <aside id="product-left">
                {/* <div>だとdisplay: blockに不具合</div> */}
                <span><img src="./img/main.jpg" alt="見出し画像" className="main-image" /></span>
                <div className="intro-contents">
                    <div id="topics">
                        <div className="list-title"><img src="./img/title_01.jpg" alt="新着情報" /></div>
                        {/* <ul>

                        </ul> */}
                    </div>
                </div>
            </aside>
        </main>
    )
}