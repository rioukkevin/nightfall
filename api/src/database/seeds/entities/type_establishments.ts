import { TypeEstablishment } from '../../../models/Type_establishment';

const seed = function() {
    const type_establishments : Array<any> = [
        'Bar',
        'Restaurant',
        'Discothèque'
    ]
    
    for (let i = 0; i < type_establishments.length; i++){
        const type_establishment = new TypeEstablishment({
            name : type_establishments[i],
        })
        type_establishment.save();
    }
}

module.exports.type_establishment_seeder = seed;