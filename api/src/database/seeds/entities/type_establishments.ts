import { TypeEstablishment } from "../../../models/Type_establishment";

const seed = function() {
    
  const type_establishments : Array<any> = [
    {
      'name' : 'Bar',
      'points' : 20
    },
    {
      'name' : 'Restaurant',
      'points' : 40
    },
    {
      'name' : 'Discothèque',
      'points' : 20
    }
  ];

  type_establishments.forEach( (type_establishment) => {
    TypeEstablishment.find({ name: type_establishment.name }).exec().then( (doc) => {
      if (!doc.length) {
        const type_establishment_entity = new TypeEstablishment({
          name: type_establishment.name,
          points : type_establishment.points
        })
        type_establishment_entity.save()
        console.log(type_establishment);
      }
    });
  });
}
export { seed };