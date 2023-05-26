import { InputMessage } from "entities/index";

const SendMessage = () => {

    function send(text: string) {
        alert(text);
    }

    return (
        <InputMessage send={send} />
    );
}

export default SendMessage;