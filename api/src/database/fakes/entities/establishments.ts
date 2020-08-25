import { Establishment } from '../../../models/Establishment';
import { TypeEstablishment } from '../../../models/Type_establishment';

const fakeEstablishments = async function() {

  const type_bars = await TypeEstablishment.find({ name: 'Bar' }).exec()

  const type_restos = await TypeEstablishment.find({ name: 'Restaurant' }).exec()

  const type_discotheques = await TypeEstablishment.find({ name: 'Discothèque' }).exec()

  const establishments = [
    new Establishment({
      establishment_type_id : type_bars[0]._id.toString(),
      name : 'La Civette',
      latitude : 47.473204,
      longitude : -0.551635,
      establishment_type : type_bars[0]._id.toString()
    }),
    new Establishment({
      establishment_type_id : type_bars[0]._id.toString(),
      name : "Le James Joyce",
      latitude : 47.474032,
      longitude : -0.545825,
      establishment_type : type_bars[0]._id.toString()
    }),
    new Establishment({
      establishment_type_id : type_restos[0]._id.toString(),
      name : 'Chez Pont-pont',
      latitude : 47.470281, 
      longitude : -0.558083,
      establishment_type : type_restos[0]._id.toString()
    }),
    new Establishment({
      establishment_type_id : type_restos[0]._id.toString(),
      name : 'La Ferme',
      latitude : 47.470666,
      longitude : -0.555754,
      establishment_type : type_restos[0]._id.toString()
    }),
    new Establishment({
      establishment_type_id : type_discotheques[0]._id.toString(),
      name : 'La Carré',
      latitude : 47.473243,
      longitude : -0.553601,
      establishment_type : type_discotheques[0]._id.toString()
    }),
  ]
  
  establishments.forEach( (establishment) => {
     establishment.save();
  });

}

export { fakeEstablishments }