type Props = {
    isAuthorized: boolean,
    setIsAuthorized: Function
}

const Header = ({isAuthorized, setIsAuthorized}: Props) => {
    return (
        <header className="App-header">
            HEADER
            {isAuthorized && <button onClick={() => setIsAuthorized(false)}> LogOut </button>}
        </header>
    );
}

export default Header;