import {TypeEstablishmentModel, TypeEstablishmentType,} from "../../../models/Type_establishment";

const seed = async () => {
    const type_establishments: Array<TypeEstablishmentType> = [
        new TypeEstablishmentModel({
            name: "Bar",
            points: 25,
            color: "pink",
        }),
        new TypeEstablishmentModel({
            name: "Restaurant",
            points: 40,
            color: "blue",
        }),
        new TypeEstablishmentModel({
            name: "Discothèque",
            points: 15,
            color: "yellow",
        }),
    ];
    for (let index = 0; index < type_establishments.length; index++) {
        const type_establishment = type_establishments[index];

        await type_establishment.save();
    }

    for (const type_establishment of type_establishments) {
        //Search if it not exists
        const typeDocs = await TypeEstablishmentModel.find({
            name: type_establishment.name,
        }).exec();
        if (!typeDocs?.length) {
            await type_establishment.save();
        }
    }
};

export { seed };
