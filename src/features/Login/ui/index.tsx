import { getAccountStatus } from "shared/api";

type Props = {
    setAuthStatus: Function,
    children: string
};

const Login = ({ setAuthStatus, children }: Props) => {

    async function loginFunc(e: React.MouseEvent) {
        e.preventDefault();
        getAccountStatus().then(result => setAuthStatus(result));
    }

    return (
        <button onClick={loginFunc}> {children} </button>
    );
}

export default Login;