async function addContact(allContacts: any, setAllContacts: Function, phone: number, message: string) {
    let result = [...allContacts];
    for (let index in allContacts) {
        if (allContacts[index].phone === phone) {
            return
        }
    }
    result.push({
        phone,
        messages: [{
            text: message,
            data: "",
            type: "in",
        }],
    });
    setAllContacts(result)
}

export default addContact;