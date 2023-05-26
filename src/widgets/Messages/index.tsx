import { IconProfile } from 'shared/ui';
import classes from './index.module.scss';
import { SendMessage } from 'features';
import Message from 'entities/Message';
import { ContactType } from './model';

const Messages = ({ openedUser }: { openedUser: ContactType }) => {
    return (
        <div className={classes.chat_messages}>
            <div className='messenger_header'>
                <div className={classes.messenger_header_left}>
                    <IconProfile imgSrc={openedUser.photo}/>
                    <h1>+{openedUser.phone}</h1>
                </div>
                <div>
                    some icons
                </div>
            </div>
            <div className={`${classes.body_messages} messenger_body`}>
                <div className={classes.all_messages}>
                    {openedUser.messages.map((e, index) => (
                        <Message text={e.text} type={e.type} key={openedUser.phone + '_message_' + index}/>
                    ))}
                </div>
                <SendMessage />
            </div>
        </div>
    );
}

export default Messages;