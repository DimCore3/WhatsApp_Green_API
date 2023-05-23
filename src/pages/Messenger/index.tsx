import {useEffect} from 'react';
import { getAccountStatus } from 'shared/api';
import Download from 'shared/ui/download';

type Props = {
    authStatus: 'processing' | 'notAuthorized' | 'authorized' | 'blocked' | 'sleepMode' | 'starting',
    setAuthStatus: Function
}

const Messenger = ({ authStatus, setAuthStatus }: Props) => {
    useEffect(() => {
        getAccountStatus().then(result => setAuthStatus(result));
    })

    return (
        <div className="messenger_page">
            {authStatus === 'processing'
                ? <Download />
                : <div>Страница загрузилась</div>
            }
        </div>
    );
}

export default Messenger;