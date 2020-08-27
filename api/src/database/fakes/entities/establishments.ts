import { EstablishmentModel } from "../../../models/Establishment";
import { TypeEstablishmentModel } from "../../../models/Type_establishment";

const fakeEstablishments = async function () {
    const type_bar = await TypeEstablishmentModel.findOne({
        name: "Bar",
    }).exec();

    const type_resto = await TypeEstablishmentModel.findOne({
        name: "Restaurant",
    }).exec();

    const type_discotheque = await TypeEstablishmentModel.findOne({
        name: "Discothèque",
    }).exec();

    const establishments = [
        new EstablishmentModel({
            establishment_type: type_bar?._id,
            name: "La Civette",
            address: {
                number: "2",
                street: "pl Romain",
                zipCode: "49100",
                city: "Angers",
                coordinate: {
                    latitude: 47.473204,
                    longitude: -0.551635,
                },
            },
        }),
        new EstablishmentModel({
            establishment_type: type_bar?._id,
            name: "Le James Joyce",
            address: {
                number: "40",
                street: "Boulevard Carnot",
                zipCode: "49100",
                city: "Angers",
                coordinate: {
                    latitude: 47.474032,
                    longitude: -0.545825,
                },
            },
        }),
        new EstablishmentModel({
            establishment_type: type_resto?._id,
            name: "Chez Pont-pont",
            address: {
                number: "13",
                street: "Promenade du Bout du Monde",
                zipCode: "49100",
                city: "Angers",
                coordinate: {
                    latitude: 47.470281,
                    longitude: -0.558083,
                },
            },
        }),
        new EstablishmentModel({
            establishment_type: type_resto?._id,
            name: "La Ferme",
            address: {
                number: "2",
                street: "Place Freppel",
                zipCode: "49100",
                city: "Angers",
                coordinate: {
                    latitude: 47.470666,
                    longitude: -0.555754,
                },
            },
        }),
        new EstablishmentModel({
            establishment_type: type_discotheque?._id,
            name: "La Carré",
            address: {
                number: "15",
                street: "Rue de la Roë",
                zipCode: "49100",
                city: "Angers",
                coordinate: {
                    latitude: 47.473243,
                    longitude: -0.553601,
                },
            },
        }),
    ];

    establishments.forEach(async (establishment) => {
        await establishment.save();
    });
};

export { fakeEstablishments };
