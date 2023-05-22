import { Logout } from "features/Logout";

type Props = {
    isAuthorized: boolean,
    setIsAuthorized: Function
}

const Header = ({isAuthorized, setIsAuthorized}: Props) => {
    return (
        <header className="App-header">
            WhatsApp Header
            <Logout isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized}> Logout </Logout>
        </header>
    );
}

export default Header;