export default function (kryerList=[], action) {
 
    if(action.type == 'kryerList') {
     console.log(action.kryerList)
      return action.kryerList;
    } else {
      return kryerList;
    }
    
   }