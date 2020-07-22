import { establishments } from "../mocks/establishment.mock";
import Establishment from "../models/Establishment";

export const getEstablishments = async (): Promise<Establishment[]> => {
    return new Promise((resolve) => {
        resolve(establishments);
    });
};
