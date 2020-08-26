import { EstablishmentModel } from "../../../models/Establishment";
import { TypeEstablishmentModel } from "../../../models/Type_establishment";

const fakeEstablishments = async function () {
    const type_bar = await TypeEstablishmentModel.findOne({ name: "Bar" }).exec();

    const type_restos = await TypeEstablishmentModel.findOne({
        name: "Restaurant",
    }).exec();

    const type_discotheques = await TypeEstablishmentModel.findOne({
        name: "Discothèque",
    }).exec();

    const establishments = [
        new EstablishmentModel({
            establishment_type_id: type_bar?._id,
            name: "La Civette",
            latitude: 47.473204,
            longitude: -0.551635,
        }),
        new EstablishmentModel({
            establishment_type_id: type_bar?._id,
            name: "Le James Joyce",
            latitude: 47.474032,
            longitude: -0.545825,
        }),
        new EstablishmentModel({
            establishment_type_id: type_restos?._id,
            name: "Chez Pont-pont",
            latitude: 47.470281,
            longitude: -0.558083,
        }),
        new EstablishmentModel({
            establishment_type_id: type_restos?._id,
            name: "La Ferme",
            latitude: 47.470666,
            longitude: -0.555754,
        }),
        new EstablishmentModel({
            establishment_type_id: type_discotheques?._id,
            name: "La Carré",
            latitude: 47.473243,
            longitude: -0.553601,
        }),
    ];

    establishments.forEach(async (establishment) => {
        await establishment.save();
    });
};

export { fakeEstablishments };
