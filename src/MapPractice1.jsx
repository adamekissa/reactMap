import { useEmojiGenerator } from "./useEmojiGenerator";

export default function MapPractice1() {
    const emojisArray = useEmojiGenerator();
    console.log("emojisArray", emojisArray);

    return (
        <div className="mapPractice">
            <h2>Map Practice 1</h2>
            <div className="emojiList">
                {emojisArray.map(element => {
                    return (<div className="emoji">{element}</div>)
                })}
            </div>
        </div>
    );
}
