const Authentication = ({setIsAuthorized} : {setIsAuthorized: Function}) => {
    return ( 
        <div className="authentication_page">
            <button onClick={() => setIsAuthorized(true)}>Войти</button>
        </div>
     );
}
 
export default Authentication;