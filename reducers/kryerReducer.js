export default function (kryer={}, action) {
 
    if(action.type == 'kryer') {
     console.log(action.kryer)
      return action.kryer;
    } else {
      return kryer;
    }
    
   }