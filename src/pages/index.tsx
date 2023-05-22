import { lazy } from "react";
import { Routes, Route } from "react-router";

const Authentication = lazy(() => import('./Authentication'));
const Messanger = lazy(() => import('./Messanger'));

type Props = {
    setIsAuthorized: Function,
    isAuthorized: boolean,
}

export const Routing = ({ isAuthorized = false, setIsAuthorized }: Props) => {
    let redirectPage = isAuthorized ? <Messanger /> : <Authentication setIsAuthorized={setIsAuthorized} />

    return (
        <Routes>
            <Route path="*" element={redirectPage} />
        </Routes>
    );
};