export default function (missions=[], action) {
 
    if(action.type == 'addMissions') {
    
      return action.missions;
    } else {
      return missions;
    }    
   }