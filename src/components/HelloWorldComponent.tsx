import axios from "axios"
import { useState } from "react"

type Props = {
    url : string;
}

function HelloWorldComponent(props:Props) {
    const [greetingContent, setgreetingContent] = useState<string>("Noch nichts geladen.")

    const loadString = async () => {
        try {
            const response = await axios.get<string>(props.url);
            setgreetingContent(response.data);
        } catch (error) {
            console.error("Laden von HelloWorldController hat nicht funktioniert.")
        }
    }

    return (
        <div>
            <button onClick={() => loadString()}>Klicken zum Laden</button>
            <p>Dieser Content wurde aus dem Backend geladen: {greetingContent}</p>
        </div>
    )
}

export default HelloWorldComponent
