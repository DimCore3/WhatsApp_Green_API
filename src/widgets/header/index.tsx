import { Logout } from "features/Logout";

type Props = {
    authStatus: 'processing' | 'notAuthorized' | 'authorized' | 'blocked' | 'sleepMode' | 'starting',
    setAuthStatus: Function
}

const Header = ({ authStatus, setAuthStatus }: Props) => {

    return (
        <header className="main_header">
            <p>WhatsApp Header</p>
            {authStatus === 'authorized' &&
                <Logout setAuthStatus={setAuthStatus}> Logout </Logout>
            }
        </header>
    );
}

export default Header;