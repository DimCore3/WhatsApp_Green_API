import { useEffect } from 'react';
import { Download } from 'shared/ui';
import { getAccountStatus } from 'shared/api';
import { Contacts, Messeges } from 'widgets';
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
                <div className={classes.chat_background_window}>
                    <div className={classes.chat_window}>
                        <div className={classes.chat_contacts_background}>
                            <Contacts />
                        </div>
                        <div className={classes.chat_messeges_background}>
                            <Messeges />
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