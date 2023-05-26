import { InputMessage } from "entities/index";
import { Props, Message } from '../model';

const SendMessage = ({ allContacts, setAllContacts, openedContactIndex }: Props) => {

    function send(text: string) {
        let newData = [...allContacts];
        let newMessage: Message = {
            text,
            type: 'out',
        }
        newData[openedContactIndex].messages.push(newMessage);
        setAllContacts(newData);
    }

    return (
        <InputMessage send={send} />
    );
}

export default SendMessage;