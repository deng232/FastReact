
export default function ImageBlock() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex(index + 1);
    }

    let sources = sculptureList[index];
    return
    (<div>
        <img id="sorce" src={sources.url} />
    </div>)
}