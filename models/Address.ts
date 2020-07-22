import { LatLng } from "react-native-maps";

export default interface Address {
    /**
     * Number
     */
    number: string;
    /**
     * Street
     */
    street: string;
    /**
     * Zip code
     */
    zipCode: string;
    /**
     * City
     */
    city: string;
    /**
     * Address coordinate
     */
    coordinate: LatLng;
}

/**
 * Address for which get the full address
 * @param address Address
 */
export const getFullAddress = (address: Address): string => {
    let result = "";
    if (address.number) result += address.number + " ";
    if (address.street) result += address.street + " ";
    if (address.zipCode) result += address.zipCode + " ";
    if (address.city) result += address.city + " ";
    return result.trim();
};
