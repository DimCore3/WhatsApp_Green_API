import { useEffect } from 'react';
import { Download } from 'shared/ui';
import { getAccountStatus } from 'shared/api';

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
            {authStatus === 'authorized'
                ? <div>Страница загрузилась</div>
                : <Download />
            }
        </div>
    );
}

export default Messenger;