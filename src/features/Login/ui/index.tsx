import { getAccountStatus } from "shared/api";
// import AuthData from 'app/AuthData.json';
import { Props } from '../type';
import { useSelector } from "react-redux";

const Login = ({ setIsAuthorized }: Props) => {
    let API_URL = "https://api.green-api.com";
    let API_ID_INSTANCE = useSelector((state: any) => state.idTokenInstance.API_ID_INSTANCE);
    let API_TOKEN_INSTANCE = useSelector((state: any) => state.idTokenInstance.API_TOKEN_INSTANCE);

    async function loginFunc(e: React.MouseEvent) {
        e.preventDefault();
        getAccountStatus({API_URL, API_ID_INSTANCE, API_TOKEN_INSTANCE})
            .then(result => setIsAuthorized(result))
    }

    return (
        <button onClick={loginFunc}>Войти</button>
    );
}

export default Login;