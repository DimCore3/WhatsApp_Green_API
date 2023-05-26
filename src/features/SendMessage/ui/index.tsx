import { InputMessage } from "entities/index";
import { Props, Message } from '../model';
import sendTextMessage from "shared/api/sendTextMessage";

const SendMessage = ({ allContacts, setAllContacts, openedContactIndex }: Props) => {

    async function send(text: string) {
        await sendTextMessage(allContacts[openedContactIndex].phone, text);
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