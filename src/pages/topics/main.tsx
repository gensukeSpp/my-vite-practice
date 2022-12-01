import { useState } from "react"

const TopicsFetch = () => {
    // const [content, getContent] = useState("");

    const getTopics:Promise<Response> = fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        // .then(json => console.log(json))
        // .catch(e => console.error(e.message));
    return ( async () => {
        const posts = await getTopics;
        return <div>{posts}</div>
    })
}

export const TopicsArea = () => {
    return (
        <main>
            <aside id="product-left">
                {/* <div>だとdisplay: blockに不具合</div> */}
                <span><img src="./img/main.jpg" alt="見出し画像" className="main-image" /></span>
                <div className="intro-contents">
                    <div id="topics">
                        <div className="list-title"><img src="./img/title_01.jpg" alt="新着情報" /></div>
                        <TopicsFetch />
                        {/* <ul>

                        </ul> */}
                    </div>
                </div>
            </aside>
        </main>
    )
}