export default function (deliveries=[], action) {
 
    if(action.type == 'addDeliveries') {
      return action.deliveries;
    } else {
      return deliveries;
    }    
   }