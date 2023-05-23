import { resetToken } from 'shared/helpers';
import { Props } from '../type';
import { useNavigate } from "react-router";

const Logout = ({ setAuthStatus, children }: Props) => {
    const navigate = useNavigate();

    function clickButton() {
        resetToken();
        setAuthStatus('notAuthorized')
        navigate('./authentication');
    }

    return (
        <button onClick={clickButton}>{children}</button>
    );
}

export default Logout;