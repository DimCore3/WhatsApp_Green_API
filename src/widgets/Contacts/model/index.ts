export type Message = {
    text: string,
    data: string,
    type: 'in' | 'out'
}

export type ContactType = {
    phone: string,
    messages: Message[],
}

export type Props = {
    allContacts: ContactType[],
    setAllContacts: Function,
}