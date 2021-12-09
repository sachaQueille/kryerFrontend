export default function (idmission="", action) {
 
    if(action.type == 'saveidmission') {
     
      return action.idmission;
    } else {
      return idmission;
    }
    
   }