import { getAccountStatus } from "shared/api";
import { Props } from '../model'

const Login = ({ setAuthStatus, children }: Props) => {

    function loginFunc(e: React.MouseEvent) {
        e.preventDefault();
        getAccountStatus().then(result => setAuthStatus(result));
    }

    return (
        <button onClick={loginFunc} className="login_button"> {children} </button>
    );
}

export default Login;