export default function (kryerList=[], action) {
 
    if(action.type == 'kryerList') {
    
      return action.kryerList;
    } else {
      return kryerList;
    }
    
   }