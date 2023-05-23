import { resetToken } from 'shared/helpers';
import { Props } from '../model';

const Logout = ({ setAuthStatus, children }: Props) => {
    function clickButton() {
        resetToken();
        setAuthStatus('notAuthorized')
    }

    return (
        <button onClick={clickButton}>{children}</button>
    );
}

export default Logout;