import Constants from 'expo-constants';
import wretch from 'wretch';
import { AsyncStorage } from 'react-native';

export default async function fetchRequest({ path, method, body }: { path: string, method: string, body?: any }): Promise<any> {
    
    try {
        const bearer = await AsyncStorage.getItem('BEARER_TOKEN')
        const HEADERS = new Headers({
            'Authorization': 'Bearer ' + bearer,
            'Content-Type': 'application/json'
        });
    
        const reqParams = new Request(Constants.manifest.extra.BASE_URL + path, {
            method: method,
            headers: HEADERS,
        });
    
        switch (method) {
            case "DELETE":
                return wretch(Constants.manifest.extra.BASE_URL + path, reqParams).json(body).delete().json();
                break;
            case "PUT":
                return wretch(Constants.manifest.extra.BASE_URL + path, reqParams).json(body).put().json();
                break;
            case "POST":
                return wretch(Constants.manifest.extra.BASE_URL + path, reqParams).json(body).post().json();
                break;
            case "GET":
            default:
                return wretch(Constants.manifest.extra.BASE_URL + path, reqParams).get().json();
                break;
        }
    } catch (err) {
        console.log(err);
    }

    
}