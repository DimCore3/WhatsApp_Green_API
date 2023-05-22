import AuthForm from "widgets/AuthForm";

const Authentication = ({ setIsAuthorized }: { setIsAuthorized: Function }) => {

    return (
        <div className="authentication_page">
            <AuthForm setIsAuthorized={setIsAuthorized} />
        </div>
    );
}

export default Authentication;