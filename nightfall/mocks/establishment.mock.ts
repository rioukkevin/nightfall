import Establishment from "../models/Establishment";
import { bar, nightClub, restaurant } from "./establishmentType.mock";

export const establishments: Establishment[] = [
    {
        id: 1,
        name: "James Joyce",
        type: bar,
        address: {
            city: "Angers",
            number: "40",
            street: "Boulevard Carnot",
            zipCode: "49100",
            coordinate: {
                latitude: 47.47457504272461,
                longitude: -0.5471351742744446,
            },
        },
    },
    {
        id: 2,
        name: "Le Hangar à Mousses",
        type: bar,
        address: {
            city: "Beaucouzé",
            number: "20",
            street: "Rue du Landreau",
            zipCode: "49070",
            coordinate: {
                latitude: 47.4697155,
                longitude: -0.6230436,
            },
        },
    },
    {
        id: 3,
        name: "L'Hoirie",
        type: restaurant,
        address: {
            city: "Beaucouzé",
            number: "2",
            street: "Allée Henri Faris",
            zipCode: "49070",
            coordinate: {
                latitude: 47.4691433,
                longitude: -0.6184823,
            },
        },
    },
    {
        id: 4,
        name: "La Chapelle",
        type: nightClub,
        address: {
            city: "Angers",
            number: "9",
            street: "Rue Cordelle",
            zipCode: "49000",
            coordinate: {
                latitude: 47.4716384,
                longitude: -0.551046,
            },
        },
    },

    {
        id: 5,
        name: "Le Carré",
        type: nightClub,
        address: {
            city: "Angers",
            number: "15",
            street: "Rue de la Roë",
            zipCode: "49000",
            coordinate: {
                latitude: 47.4732063,
                longitude: -0.553624,
            },
        },
    },
];
