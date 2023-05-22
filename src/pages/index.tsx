import { lazy } from "react";
import { Routes, Route } from "react-router";

const Authentication = lazy(() => import('./Authentication'));
const Messanger = lazy(() => import('./Messanger'));

export const Routing = ({ isAuthorized }: { isAuthorized: boolean }) => {
    let redirectPage = isAuthorized ? <Messanger /> : <Authentication />

    return (
        <Routes>
            <Route path='/authentication' element={<Authentication />} />
            <Route path='/messanger' element={<Messanger />} />
            <Route path="*" element={redirectPage} />
        </Routes>
    );
};