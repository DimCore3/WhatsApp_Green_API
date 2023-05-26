import { useEffect, useState } from 'react';
import { Download } from 'shared/ui';
import { deleteNotification, getAccountStatus, receiveNotification } from 'shared/api';
import { Contacts, Messages } from 'widgets';
import classes from './index.module.scss';
import { Props, ContactType } from './model';
import { checkMessage, updateMessages } from 'shared/helpers';

const Messenger = ({ authStatus, setAuthStatus }: Props) => {
    const [openedContactIndex, setOpenedContactIndex] = useState(0);

    const [allContacts, setAllContacts] = useState<ContactType[]>([{
        phone: "1234567890",
        messages: [
            {
                text: "Привет, как дела?",
                data: "2023-05-26",
                type: "in",
            },
            {
                text: "Привет, все хорошо. Спасибо!",
                data: "2023-05-26",
                type: "out",
            },
            {
                text: "Это сообщение от другого контакта",
                data: "2023-05-26",
                type: "in",
            },
        ]
    }]);

    useEffect(() => {
        getAccountStatus().then(result => setAuthStatus(result));

        const intervalId = setInterval(async () => {
            let notification = await receiveNotification();
            if (notification?.body?.typeWebhook === "incomingMessageReceived") {
                let [phone, message] = checkMessage(notification);
                updateMessages(allContacts, setAllContacts, message, phone)
            };
            if (notification) {
                await deleteNotification(notification.receiptId)
            }
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    })

    return (
        <div className={classes.messenger_page}>
            {authStatus === 'authorized'
                ?
                <div className={classes.messenger_background_window}>
                    <div className={classes.messenger_window}>
                        <div className={classes.messenger_contacts_background}>
                            <Contacts
                                allContacts={allContacts}
                                setAllContacts={setAllContacts}
                                setOpenedContactIndex={setOpenedContactIndex}
                            />
                        </div>
                        <div className={classes.messenger_messages_background}>
                            <Messages
                                allContacts={allContacts}
                                setAllContacts={setAllContacts}
                                openedContactIndex={openedContactIndex}
                            />
                        </div>
                    </div>
                </div>
                :
                <Download />
            }
        </div>
    );
}

export default Messenger;