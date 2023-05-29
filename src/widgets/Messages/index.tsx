import { IconProfile } from 'shared/ui';
import classes from './index.module.scss';
import { SendMessage } from 'features';
import Message from 'entities/Message';
import { Props } from './model';

const Messages = ({ allContacts, setAllContacts, openedContactIndex }: Props) => {

    return (
        <div className={classes.chat_messages}>
            <div className='messenger_header'>
                <div className={classes.messenger_header_left}>
                    <IconProfile imgSrc={allContacts[openedContactIndex].photo}/>
                    <h1>+{allContacts[openedContactIndex].phone}</h1>
                </div>
                <div>
                </div>
            </div>
            <div className={`${classes.body_messages} messenger_body`}>
                <div className={classes.all_messages}>
                    {allContacts[openedContactIndex].messages.map((e, index) => (
                        <Message 
                            text={e.text} 
                            type={e.type} 
                            key={allContacts[openedContactIndex].phone + '_message_' + index}
                        />
                    ))}
                </div>
                <SendMessage 
                    allContacts={allContacts} 
                    setAllContacts={setAllContacts}
                    openedContactIndex={openedContactIndex}
                />
            </div>
        </div>
    );
}

export default Messages;