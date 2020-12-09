declare namespace cocoascript {
/**
 * A request to cancel an active workout.
 * doc://com.apple.documentation/documentation/sirikit/incancelworkoutintent
 */
interface INCancelWorkoutIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/incancelworkoutintent/1639027-initwithworkoutname
  initWithWorkoutName(workoutName: cocoascript.INSpeakableString):cocoascript.INCancelWorkoutIntent;
  // doc://com.apple.documentation/documentation/sirikit/incancelworkoutintent/1638739-workoutname
  workoutName(): cocoascript.INSpeakableString;
  setWorkoutName(): void;
  // 
  alloc():cocoascript.INCancelWorkoutIntent;
  // 
  init():cocoascript.INCancelWorkoutIntent;
}
}
declare const INCancelWorkoutIntent: cocoascript.INCancelWorkoutIntent;

