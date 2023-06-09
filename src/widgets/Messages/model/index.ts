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

export type Props = {
    allContacts: ContactType[],
    setAllContacts: Function,
    openedContactIndex: number,
}