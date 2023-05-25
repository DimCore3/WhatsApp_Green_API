export type Props = {
    authStatus: 'processing' | 'notAuthorized' | 'authorized' | 'blocked' | 'sleepMode' | 'starting',
    setAuthStatus: Function
}

export type Message = {
    text: string,
    data: string,
    type: 'in' | 'out'
}

export type ContactType = {
    photo?: string,
    phone: string,
    messages: Message[],
}