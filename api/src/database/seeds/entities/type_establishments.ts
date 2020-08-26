import {
    TypeEstablishment,
    TypeEstablishmentType,
} from "../../../models/Type_establishment";

const seed = async () => {
    const type_establishments: Array<TypeEstablishmentType> = [
        new TypeEstablishment({
            name: "Bar",
            points: 25,
        }),
        new TypeEstablishment({
            name: "Restaurant",
            points: 40,
        }),
        new TypeEstablishment({
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
        const typeDocs = await TypeEstablishment.find({
            name: type_establishment.name,
        }).exec();
        if (!typeDocs?.length) {
            await type_establishment.save();
            console.log(type_establishment);
        }
    });
};

export { seed };
