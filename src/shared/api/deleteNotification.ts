import config from './config.json';

const deleteNotification = async (receiptId: number) => {
    console.log(receiptId);
    const API_ID_INSTANCE: string = sessionStorage.getItem('API_ID_INSTANCE') ?? ''
    const API_TOKEN_INSTANCE: string = sessionStorage.getItem('API_TOKEN_INSTANCE') ?? '';
    const requestURL = `${config.API_URL}/waInstance${API_ID_INSTANCE}/deleteNotification/${API_TOKEN_INSTANCE}/${receiptId}`

    try {
        return await fetch(requestURL, {
            method: 'DELETE',
        })
            .then(res => res.status)
            .then(res => res)

    } catch (e) {
        console.error('Error: ', e);
        return 'notAuthorized';
    }
}

export default deleteNotification;