import { IconProfile } from 'shared/ui';
import classes from './index.module.scss'

type Props = {
    phone: string,
    lastMessage: string,
    lastData: string,
}

const ChatlistContact = ({ phone, lastMessage, lastData }: Props) => {
    const shortLastMessage = lastMessage.slice(0, 55);

    return (
        <div className={classes.chatlist_contact}>
            <IconProfile />
            <div className={classes.contact_information}>
                <div className={classes.phone_and_data}>
                    <h2>
                        {phone}
                    </h2>
                    <p>
                        {lastData}
                    </p>
                </div>
                <p>
                    {shortLastMessage + '...'}
                </p>
            </div>
        </div>
    );
}

export default ChatlistContact;