import config from './config.json';
import { DataFetch } from '../../features/Login/type';

const getAccountStatus = async ({ API_ID_INSTANCE, API_TOKEN_INSTANCE }: DataFetch) => {
    try {
        let result = await fetch(`${config.API_URL}/waInstance${API_ID_INSTANCE}/getStateInstance/${API_TOKEN_INSTANCE}`)
            .then(result => result.json());
        return result.stateInstance === "authorized";
        
    } catch (e) {
        console.error('Error getAccountStatus: ', e);
        alert('Аккаунт не авторизован, либо заблокирован.')
        return false;
    }
}

export default getAccountStatus;