
export default function (photo={}, action) {
 
    if(action.type == 'addPhoto') {
     
    
      return action.photo;

    }else {
      return photo;
    }
    
   }