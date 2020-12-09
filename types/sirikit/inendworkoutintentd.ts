declare namespace cocoascript {
/**
 * A request to end the current workout that also validates workout parameters and saves the results.
 * doc://com.apple.documentation/documentation/sirikit/inendworkoutintent
 */
interface INEndWorkoutIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/inendworkoutintent/1638329-initwithworkoutname
  initWithWorkoutName(workoutName: cocoascript.INSpeakableString):cocoascript.INEndWorkoutIntent;
  // doc://com.apple.documentation/documentation/sirikit/inendworkoutintent/1638515-workoutname
  workoutName(): cocoascript.INSpeakableString;
  setWorkoutName(): void;
  // 
  alloc():cocoascript.INEndWorkoutIntent;
  // 
  init():cocoascript.INEndWorkoutIntent;
}
}
declare const INEndWorkoutIntent: cocoascript.INEndWorkoutIntent;

