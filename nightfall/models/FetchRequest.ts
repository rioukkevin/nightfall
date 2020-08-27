import Constants from 'expo-constants';
import AsyncStorage from '@react-native-community/async-storage';
import wretch from 'wretch'

export default async function fetchRequest({ path, method, body }: { path: string, method: string, body?: Object }): Promise<any> {

    /**
     * Pour stocker et utiliser le bearer token
     */
    // await AsyncStorage.setItem('BEARER_TOKEN', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjQ1MDBiNWEyYzA0MDM2MGU0NjU1YzUiLCJmaXJzdG5hbWUiOiJEaW1pdHJpIiwibGFzdG5hbWUiOiJTYXV2YWdlIiwiZW1haWwiOiJkZEBkZCIsInBhc3N3b3JkIjoiJDJiJDEwJC41RXdQWUVIOFRYM1dibXVrLzg2Yk91U0tBRmxwL1NHcUJFbnVMbEY0NlAvYXpZSmYuLmhxIiwiX192IjowLCJpYXQiOjE1OTgzNjU5NzgsImV4cCI6MTU5ODQ1MjM3OH0._4qggn0sElAf--qNsJ7OG4MB33Up_FtGI0uAjo8cVHQ")
    // const bearer = await AsyncStorage.getItem('BEARER_TOKEN')

    const HEADERS = new Headers({
<<<<<<< HEAD
        'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjQ2NmFjZGE2NTA1MjI3MmYzNzc4ZmYiLCJ0cmFuc2FjdGlvbnMiOltdLCJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGFkbWluLmZyIiwicGFzc3dvcmQiOiIkMmIkMTAkSlhwTHFJSlNKTXRtanJRTWJiN3N3ZWZmaExFUlcuU0dUQXdnYnBKTTFRTUVnNk5uUXJNdnUiLCJfX3YiOjAsImlhdCI6MTU5ODQ1MDQxNCwiZXhwIjoxNTk4NTM2ODE0fQ.JqYSQ9etNPzWNho0_xMLzh1oSO2SHItGQq1PnyZJwt8",
=======
        'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0cmFuc2FjdGlvbnMiOltdLCJfaWQiOiI1ZjQ3NzUzNTM3NmQzYzA1ZWI5MTg3ZjYiLCJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGFkbWluLmZyIiwicGFzc3dvcmQiOiIkMmIkMTAkU2ZobWYvQ1JQQWFVUHpITlAwOHpiT013dVo3dUoxeVRsSHhKbmpwSzkxN0pHMkxKLlpnQmEiLCJfX3YiOjAsImlhdCI6MTU5ODUyMDM3MiwiZXhwIjoxNTk4NjA2NzcyfQ.PMk8YnGQsoXPiAjwjwb83NRF2kx6BWcDT2QKXHoCxZU",
>>>>>>> master
        'Content-Type': 'application/json'
    });

    const reqParams = new Request(Constants.manifest.extra.BASE_URL + path, {
        method: method,
        headers: HEADERS,
        body: JSON.stringify(body),
    });
    
    return wretch(Constants.manifest.extra.BASE_URL + path, reqParams).get().json();

}