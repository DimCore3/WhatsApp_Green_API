import { DataFetch } from '../type';

const getAccountStatus = async ({ API_URL, API_ID_INSTANCE, API_TOKEN_INSTANCE }: DataFetch) => {
    try {
        let result = await fetch(`${API_URL}/waInstance${API_ID_INSTANCE}/getStateInstance/${API_TOKEN_INSTANCE}`)
            .then(result => result.json());
        return result.stateInstance === "authorized";
    } catch (e) {
        console.error('Error getAccountStatus: ', e);
        return false;
    }
}

export default getAccountStatus;