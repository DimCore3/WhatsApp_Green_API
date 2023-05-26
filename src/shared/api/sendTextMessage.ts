import config from './config.json';

const sendTextMessage = async (chatId: string, message: string) => {
    const API_ID_INSTANCE: string = sessionStorage.getItem('API_ID_INSTANCE') ?? ''
    const API_TOKEN_INSTANCE: string = sessionStorage.getItem('API_TOKEN_INSTANCE') ?? '';
    const requestURL = `${config.API_URL}/waInstance${API_ID_INSTANCE}/sendMessage/${API_TOKEN_INSTANCE}`

    var raw = JSON.stringify({
        "chatId": `${chatId}@c.us`,
        "message": message,
    });

    try {
        alert(chatId + '  ' + message);
        return await fetch(requestURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: raw
        })
            .then(result => {
                if (result.status !== 200) {
                    alert('Ошибка, код: ' + result.status)
                }
            })

    } catch (e) {
        console.error('Error: ', e);
        return 'notAuthorized';
    }
}

export default sendTextMessage;