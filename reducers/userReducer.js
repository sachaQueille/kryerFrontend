export default function (user=null, action) {
 
    if(action.type == 'addUser') {
    
      return action.user;
    } else {
      return user;
    }    
   }