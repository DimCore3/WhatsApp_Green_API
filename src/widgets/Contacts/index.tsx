import { useState } from 'react';
import { IconProfile } from 'shared/ui';
import classes from './index.module.scss';
import { AddNewContact, AddContactModule } from 'features';

const Contacts = () => {
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
                        CONTACTS body
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