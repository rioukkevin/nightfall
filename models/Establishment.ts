import Address from "./Address";
import EstablishmentType from "./EstablishmentType";

interface Establishment {
    /**
     * Unique identifier
     */
    id: number;
    /**
     * Name
     */
    name: string;
    /**
     * Establishment address
     */
    address: Address;
    /**
     * Type of the establishment
     */
    type: EstablishmentType;
}

export default Establishment;
