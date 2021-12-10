export default function (missionId="", action) {
 
    if(action.type == 'addMissionId') {
      return action.missionId;
    } else {
      return missionId;
    }    
   }