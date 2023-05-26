import config from './config.json';

const receiveNotification = async () => {
    const API_ID_INSTANCE: string = sessionStorage.getItem('API_ID_INSTANCE') ?? ''
    const API_TOKEN_INSTANCE: string = sessionStorage.getItem('API_TOKEN_INSTANCE') ?? '';
    const requestURL = `${config.API_URL}/waInstance${API_ID_INSTANCE}/receiveNotification/${API_TOKEN_INSTANCE}`

    try {
        return await fetch(requestURL)
            .then(result => result.json())
            .then(result => result)
    } catch (e) {
        console.error('Error: ', e);
        return 'notAuthorized';
    }
}

export default receiveNotification;