export type Props = {
    authStatus: 'processing' | 'notAuthorized' | 'authorized' | 'blocked' | 'sleepMode' | 'starting' | 'decline',
    setAuthStatus: Function
}