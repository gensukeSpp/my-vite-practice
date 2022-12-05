import { useState } from "react"

const TopicsFetch = () => {
    type topics = {
        content: string,
        link: string
    }

    const topics: Promise<Response> = fetch("https://jsonplaceholder.typicode.com/gensukeSpp/sweets_fake/topics", {
        method: 'GET'})
        .then(res => res.json())
        // .then(json => console.log(json))
        // .catch(e => console.error(e.message));
    return (
        {topics.map((topic, i) => {
            return (
                <>
                    <li>2022.12.5</li>
                    <li><a href={`./${topic.link}`}>{topic.content}</a></li>
                </>
            )
        })}
    )
}

export const TopicsArea = () => {
    // console.log(topics);
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