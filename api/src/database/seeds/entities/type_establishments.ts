import { TypeEstablishment } from '../../../models/Type_establishment';

const seed = function() {
    const type_establishments : Array<string> = [
        'Bar',
        'Restaurant',
        'Discothèque'
    ];

    type_establishments
        .map(type_establishment => new TypeEstablishment({name: type_establishment}))
        .forEach(type_establishment => type_establishment.save());

}

export { seed }