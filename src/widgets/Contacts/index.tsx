import { useState } from 'react';
import { IconProfile } from 'shared/ui';
import classes from './index.module.scss';
import { AddNewContact, AddContactModule, OpenContactChat } from 'features';

type Message = {
    text: string,
    data: string,
    type: 'in' | 'out'
}

type ContactType = {
    phone: string,
    messages: Message[],
}

const Contacts = ({allContacts}: {allContacts: ContactType[]}) => {
    const [showAddContactModule, setShowAddContactModule] = useState(false);

    return (
        <div className={classes.chat_contacts}>

            {!showAddContactModule
                ?
                <>
                    <div className={`${classes.header_contacts} messenger_header`}>
                        <IconProfile />
                        <AddNewContact showAddContactModule={showAddContactModule} setShowAddContactModule={setShowAddContactModule} />
                    </div>
                    <div className={`${classes.body_contacts} messenger_body`}>
                        {allContacts.map((e: ContactType, index: number) => (
                            <OpenContactChat 
                                phone={e.phone}
                                lastMessage={e.messages[e.messages.length - 1].text}
                                lastData={e.messages[e.messages.length - 1].data}
                                key={'contact_chat_' + index}
                            />
                        ))}
                    </div>
                </>
                :
                <div className={classes.show_add_contact_module}>
                    <AddContactModule setShowAddContactModule={setShowAddContactModule} />
                </div>
            }
        </div>
    );
}

export default Contacts;