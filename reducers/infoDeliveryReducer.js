export default function (infoDelivery={}, action) {
 
    if(action.type == 'infoDelivery') {
     
      return action.infoDelivery;
    } else {
      return infoDelivery;
    }
    
   }