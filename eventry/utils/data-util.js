//database gives us an id. But it the id of that data in database. it's in this format: _id: ObjectId("62e8e4a4f1e1e4a4f1e1e4a4"). kintu amra application e eto jotil format rakhbo na. amra _id er upor toString kore id ta niye, id name ekta property create kore tate id ta rakhci. tahole processing easy hobe. 
//_id theke id create hle, array er proti item er upor map kore, _id bade bakituk return kori. tahole amra _id:ObjectId format bad diye sudhu id name property rakhlam. 
export const replaceMongoIdInArray = (array) => {
    const mappedArray = array.map(item => {
      return {
        id: item._id.toString(),
        ...item
      }
    }).map(({_id, ...rest}) => rest);

    return mappedArray;
  }

  // replace id in single event
  export const replaceMongoIdInObject = (obj) => {
    // advanced level object destructuring. uporer moto straight forward vabe to korte e paro. ekahne ektu jalwa dekhalo r ki. Ek line e destructure plus modification.
    const {_id, ...updatedObj} = {...obj, id: obj._id.toString()};
   return updatedObj;
  }