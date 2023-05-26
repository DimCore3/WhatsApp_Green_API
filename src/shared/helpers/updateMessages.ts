import addContact from "./addContact";

function updateMessages(allContacts: any, setAllContacts: Function, message: string, phone: number) {
    let result: any = [...allContacts];
    for (let index in allContacts) {
        if (allContacts[index].phone === phone) {
            result[index].messages.push({
                text: message,
                data: "",
                type: "in",
            })
            setAllContacts(result);
            return;
        }
    }
    addContact(allContacts, setAllContacts, phone, message);
}

export default updateMessages;