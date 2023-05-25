import { ChatlistContact } from "entities/index";

type Props = {
    phone: string,
    lastMessage: string,
    lastData: string,
}

const OpenContactChat = ({phone, lastMessage ,lastData}: Props) => {
    return (
        <ChatlistContact phone={phone} lastMessage={lastMessage} lastData={lastData}/>
    );
}

export default OpenContactChat;