import { useEffect } from 'react';
import { Download } from 'shared/ui';
import { getAccountStatus } from 'shared/api';
import { Contacts, Messages } from 'widgets';
import classes from './index.module.scss';

type Props = {
    authStatus: 'processing' | 'notAuthorized' | 'authorized' | 'blocked' | 'sleepMode' | 'starting',
    setAuthStatus: Function
}

const Messenger = ({ authStatus, setAuthStatus }: Props) => {
    useEffect(() => {
        getAccountStatus().then(result => setAuthStatus(result));
    })

    return (
        <div className={classes.messenger_page}>
            {authStatus === 'authorized'
                ?
                <div className={classes.messenger_background_window}>
                    <div className={classes.messenger_window}>
                        <div className={classes.messenger_contacts_background}>
                            <Contacts />
                        </div>
                        <div className={classes.messenger_messages_background}>
                            <Messages />
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