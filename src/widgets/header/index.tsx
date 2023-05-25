import { Logout } from "features/Logout";
import { Props } from './model';
import classes from './index.module.scss';

const Header = ({ authStatus, setAuthStatus }: Props) => {

    return (
        <header className={classes.main_header}>
            <p>Green API</p>
            {authStatus === 'authorized' &&
                <Logout setAuthStatus={setAuthStatus}> Logout </Logout>
            }
        </header>
    );
}

export default Header;