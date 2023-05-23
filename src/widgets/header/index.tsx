import { Logout } from "features/Logout";
import { Props } from './model';

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