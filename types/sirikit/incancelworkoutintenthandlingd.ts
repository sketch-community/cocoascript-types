declare namespace cocoascript {
/**
 * The interface that handles requests to cancel a workout.
 * doc://com.apple.documentation/documentation/sirikit/incancelworkoutintenthandling
 */
interface INCancelWorkoutIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/incancelworkoutintenthandling/1902365-resolveworkoutnameforcancelworko
  resolveWorkoutNameForCancelWorkout_withCompletion(intent: cocoascript.INCancelWorkoutIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/incancelworkoutintenthandling/1639032-confirmcancelworkout
  confirmCancelWorkout_completion(intent: cocoascript.INCancelWorkoutIntent, completion: cocoascript.INCancelWorkoutIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/incancelworkoutintenthandling/1638479-handlecancelworkout
  handleCancelWorkout_completion(intent: cocoascript.INCancelWorkoutIntent, completion: cocoascript.INCancelWorkoutIntentResponse):void;
}
}

