import Address from "./Address";
import EstablishmentType from "./EstablishmentType";

interface Establishment {
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
    /**
     * Unique identifier
     */
    id: string;
}

export default Establishment;
