import faker from "faker";
import { Establishment } from '../../../models/Establishment';

for (let i = 0; i < 10; i++){
    const establishment = new Establishment({
        name : faker.name.findName(),
        latitude : faker.address.latitude(),
        longitude : faker.address.longitude()
    })
    establishment.save();
}