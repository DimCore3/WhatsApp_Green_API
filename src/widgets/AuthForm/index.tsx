import { Login } from "features";

const AuthForm = ({ setAuthStatus }: { setAuthStatus: Function }) => {

    return (
        <div className="auth_form">
            <form>
                <label htmlFor="idInstance_input">idInstance</label>
                <input
                    type="text"
                    name="idInstance_input"
                    onChange={e => sessionStorage.setItem('API_ID_INSTANCE', e.target.value)}
                />
                <label htmlFor="tokenInstance_input">tokenInstance</label>
                <input
                    type="text"
                    name="tokenInstance_input"
                    onChange={e => sessionStorage.setItem('API_TOKEN_INSTANCE', e.target.value)}
                />
                <Login setAuthStatus={setAuthStatus}>Login</Login>
            </form>
        </div>
    );
}

export default AuthForm;