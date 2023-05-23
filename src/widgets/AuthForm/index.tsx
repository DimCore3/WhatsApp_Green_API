import { SessionStorageInput } from "entities/index";
import { Login } from "features";
import { Props } from './model';

const AuthForm = ({ setAuthStatus }: Props) => {
    const dataInputList = [
        { name: 'idInstance', storageKey: 'API_ID_INSTANCE' },
        { name: 'tokenInstance', storageKey: 'API_TOKEN_INSTANCE' },
    ]

    return (
        <div className="auth_form">
            <form>
                {dataInputList.map(data =>
                    <SessionStorageInput name={data.name} storageKey={data.storageKey} key={data.name} />
                )}
                <Login setAuthStatus={setAuthStatus}>Login</Login>
            </form>
        </div>
    );
}

export default AuthForm;