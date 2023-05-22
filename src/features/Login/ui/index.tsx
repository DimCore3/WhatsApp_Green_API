import getAccountStatus from "../fetch/getAccountStatus";
import AuthData from 'features/AuthData.json';
import { Props } from '../type';

const Login = ({ setIsAuthorized }: Props) => {

    async function loginFunc(e: React.MouseEvent) {
        e.preventDefault();
        getAccountStatus(AuthData)
            .then(result => setIsAuthorized(result))
    }

    return (
        <button onClick={loginFunc}>Войти</button>
    );
}

export default Login;