import EstablishmentType from "../models/EstablishmentType";

export const bar: EstablishmentType = {
    color: "#FF0000",
    name: "Bar",
    id: "1",
};

export const restaurant: EstablishmentType = {
    color: "#000AFF",
    name: "Restaurant",
    id: "2",
};

export const nightClub: EstablishmentType = {
    color: "#F0FF00",
    name: "Discothèque",
    id: "3",
};

export const establishmentTypes: EstablishmentType[] = [
    bar,
    restaurant,
    nightClub,
];
