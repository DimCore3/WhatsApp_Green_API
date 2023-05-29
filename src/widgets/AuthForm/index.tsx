import { SessionStorageInput } from "entities/index";
import { Login } from "features";
import { Props } from './model';
import classes from './index.module.scss';

const AuthForm = ({ setAuthStatus }: Props) => {
    const dataInputList = [
        { name: 'idInstance', storageKey: 'API_ID_INSTANCE' },
        { name: 'tokenInstance', storageKey: 'API_TOKEN_INSTANCE' },
    ]

    return (
        <div className={classes.auth_form}>
            <form>
                {dataInputList.map(data =>
                    <SessionStorageInput name={data.name} storageKey={data.storageKey} key={data.name} />
                )}
                <Login setAuthStatus={setAuthStatus}>Login</Login>
            </form>
            <a href="https://green-api.com/">How to register?</a>
        </div>
    );
}

export default AuthForm;