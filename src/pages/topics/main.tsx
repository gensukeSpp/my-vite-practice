import { useEffect, useState } from "react"

type TopicProp = {
    content: string,
    link: string
}
// type Props = {
//     Topics: Dispatch<SetStateAction<TopicProp>>
// }

const url = "https://my-json-server.typicode.com/gensukeSpp/sweets_fake/topics";
// const fetchData = async () => {
//     const data: Response = await fetch(url, {
//         method: 'GET'
//     })
//     const json = data.json();
//     return json;
// }
const fetchData/*: Promise<Props>*/ = fetch(url, {
        method: 'GET'})
    .then(res => res.json());

const TopicsFetch = () => {

    const [content, setContent] = useState("");
    const [link, setLink] = useState("");
    const [isLosding, setIsLoading] = useState(false);
    const [topics, setTopics] = useState<TopicProp[]>([]);

    // let json;
    useEffect(() => {
        const f = async () => {
            setIsLoading(true);
            const json = await fetchData;
            setTopics(json);
            setIsLoading(false);
        }
       f();
        // fetchData()
        //     .then((json) => setTopics(json))
    }, []);
    console.log(topics);

    // const TypicodeTodo: Promise<TopicProp[]> = fetch("https://my-json-server.typicode.com/gensukeSpp/sweets_fake/topics", {
    //     method: 'GET'})
    //     .then(res => res.json());
    //     .then(json => console.log(json))
    //     .catch(e => console.error(e.message));

    return (
        <ul>
            {
                (topics.map((topic, i) => {
                    return (
                        <>
                            <li>2022.12.5</li>
                            <li><a href={`./${topic.link}`}>{topic.content}</a></li>
                        </>
                    )
                }))
            }
        </ul>
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
                        <TopicsFetch />
                    </div>
                </div>
            </aside>
        </main>
    )
}
// {　 // 送信先URL
//         method: 'post', // 通信メソッド
//         headers: {
//             'Content-Type': 'application/json' // JSON形式のデータのヘッダー
//         },
//         body: JSON.stringify(data) // JSON形式のデータ