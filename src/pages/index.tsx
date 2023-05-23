import { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { Header } from 'widgets';
import { redirectByStatus } from "shared/helpers";

const Entrance = lazy(() => import('./Entrance'));
const Authentication = lazy(() => import('./Authentication'));
const Messenger = lazy(() => import('./Messenger'));
const DownloadPage = lazy(() => import('./DownloadPage'));

type StatusType = 'processing' | 'notAuthorized' | 'authorized' | 'blocked' | 'sleepMode' | 'starting';

export const Routing = () => {
    const navigate = useNavigate();
    const [authStatus, setAuthStatus] = useState<StatusType>('processing');

    useEffect(() => {
        redirectByStatus(navigate, authStatus);
    }, [navigate, authStatus])

    return (
        <Suspense fallback={<DownloadPage />}>
            <Header authStatus={authStatus} setAuthStatus={setAuthStatus} />
            <Routes>
                <Route path="/" element={<Entrance setAuthStatus={setAuthStatus} />} />
                <Route path="/authentication" element={<Authentication setAuthStatus={setAuthStatus} />} />
                <Route path="/messenger" element={<Messenger authStatus={authStatus} setAuthStatus={setAuthStatus} />} />
                <Route path="*" element={<h1>Страница не обнаружена</h1>} />
            </Routes>
        </Suspense>
    );
};