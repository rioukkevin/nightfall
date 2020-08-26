import {
    TypeEstablishmentModel,
    TypeEstablishmentType,
} from "../../../models/Type_establishment";

const seed = async () => {
    const type_establishments: Array<TypeEstablishmentType> = [
        new TypeEstablishmentModel({
            name: "Bar",
            points: 25,
        }),
        new TypeEstablishmentModel({
            name: "Restaurant",
            points: 40,
        }),
        new TypeEstablishmentModel({
            name: "Discothèque",
            points: 15,
        }),
    ];
    for (let index = 0; index < type_establishments.length; index++) {
        const type_establishment = type_establishments[index];

        await type_establishment.save();
        console.log(type_establishment);
    }

    type_establishments.forEach(async (type_establishment) => {
        //Search if it not exists
        const typeDocs = await TypeEstablishmentModel.find({
            name: type_establishment.name,
        }).exec();
        if (!typeDocs?.length) {
            await type_establishment.save();
            console.log(type_establishment);
        }
    });
};

export { seed };
