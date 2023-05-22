import { Login } from "features";

const AuthForm = ({setIsAuthorized}: {setIsAuthorized: Function}) => {
    return (
        <form action="">
            <label htmlFor=""></label>
            <input type="text" name="" id="" />
            <Login setIsAuthorized={setIsAuthorized}/>
        </form>
     );
}
 
export default AuthForm;