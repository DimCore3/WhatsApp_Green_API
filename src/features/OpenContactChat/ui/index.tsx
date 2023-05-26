import { ChatlistContact } from "entities/index";

type Props = {
    phone: string,
    lastMessage: string,
    lastData: string,
    contactIndex: number,
    setOpenedContactIndex: Function,
}

const OpenContactChat = ({phone, lastMessage ,lastData, contactIndex, setOpenedContactIndex}: Props) => {


    return (
        <ChatlistContact 
            phone={phone} 
            lastMessage={lastMessage} 
            lastData={lastData}
            action={() => setOpenedContactIndex(contactIndex)}
        />
    );
}

export default OpenContactChat;