import faker from "faker";
import { Establishment } from '../../../models/Establishment';
import { TypeEstablishment } from '../../../models/Type_establishment';
import { Document } from "mongoose";

const firstTypeEstablishment = await TypeEstablishment.find().exec();

console.log(firstTypeEstablishment)

const fakeEstablishments = function() {
    for (let i = 0; i < 10; i++){
        const establishment = new Establishment({
            establishment_type_id : firstTypeEstablishment.get('id'),
            name : faker.name.findName(),
            latitude : faker.address.latitude(),
            longitude : faker.address.longitude()
        })
        establishment.save();
    }
}

export { fakeEstablishments }