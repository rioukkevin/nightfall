import { TypeEstablishment } from '../../../models/Type_establishment';


const seed = function() {
    
    const type_establishments : Array<string> = [
        'Bar',
        'Restaurant',
        'Discothèque'
    ];

    type_establishments.forEach( (type_establishment_name) => {
        TypeEstablishment.find({ name: 'Bar' }).exec().then( (doc) => {
            if (!doc.length) {
                const type_establishment = new TypeEstablishment({name: type_establishment_name})
                type_establishment.save()
                console.log(type_establishment);
            }
        });
    });

}

export { seed }