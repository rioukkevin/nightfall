import { establishments } from "../mocks/establishment.mock";
import Establishment from "../models/Establishment";
import fetchRequest from "../models/FetchRequest";
import { LatLng } from "react-native-maps";


export const getEstablishments = async (): Promise<Establishment[]> => {
    return (await fetchRequest({path: "/establishments", method: "GET"})).map((esta: any) => mongoToEstablishment(esta)) as Establishment[];
};

export const mongoToEstablishment = (esta: any) : Establishment => {

    return {
        id: esta._id,
        name: esta.name,
        type: esta.establishment_type,
        address: esta.address,
    };
}