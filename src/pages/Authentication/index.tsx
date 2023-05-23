import { useEffect } from 'react';
import { AuthForm } from "widgets";
import { getAccountStatus } from "shared/api";

const Authentication = ({ setAuthStatus }: { setAuthStatus: Function }) => {
    useEffect(() => {
        getAccountStatus().then(result => setAuthStatus(result));
    })

    return (
        <div className="authentication_page">
            <AuthForm setAuthStatus={setAuthStatus} />
        </div>
    );
}

export default Authentication;