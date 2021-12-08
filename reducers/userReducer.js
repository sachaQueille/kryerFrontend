export default function (user={}, action) {
 
    if(action.type == 'addUser') {
     console.log(action.user)
      return action.user;
    } else {
      return user;
    }    
   }