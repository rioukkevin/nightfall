import faker from "faker";
import { Establishment } from '../../../models/Establishment';

const fakeEstablishments = function() {
    for (let i = 0; i < 10; i++){
        const establishment = new Establishment({
            establishment_type_id : 1,
            name : faker.name.findName(),
            latitude : faker.address.latitude(),
            longitude : faker.address.longitude()
        })
        establishment.save();
    }
}

export { fakeEstablishments }