import { useDispatch } from "react-redux";
import { Login } from "features";
import { setIdInstance, setTokenInstance } from "shared/token/tokenSlice";
import { useEffect } from "react";

const AuthForm = ({ setIsAuthorized }: { setIsAuthorized: Function }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIdInstance(''));
        dispatch(setTokenInstance(''));
    })

    return (
        <div className="auth_form">
            <form>
                <label htmlFor="idInstance_input">idInstance</label>
                <input type="text" name="idInstance_input" onChange={e => dispatch(setIdInstance(e.target.value))} />
                <label htmlFor="tokenInstance_input">tokenInstance</label>
                <input type="text" name="tokenInstance_input" onChange={e => dispatch(setTokenInstance(e.target.value))} />
                <Login setIsAuthorized={setIsAuthorized} />
            </form>
        </div>
    );
}

export default AuthForm;