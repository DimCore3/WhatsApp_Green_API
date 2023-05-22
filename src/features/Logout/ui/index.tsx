import { Props } from '../type';

const Logout = ({ setIsAuthorized, isAuthorized, children }: Props) => {
    return (
        <>
            {isAuthorized &&
                <button onClick={() => setIsAuthorized(false)}>{children}</button>
            }
        </>
    );
}

export default Logout;