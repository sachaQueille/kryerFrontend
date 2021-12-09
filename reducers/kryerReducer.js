export default function (kryer={}, action) {
 
    if(action.type == 'kryer') {
      return action.kryer;
    } else {
      return kryer;
    }
    
   }