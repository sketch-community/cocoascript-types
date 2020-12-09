declare namespace cocoascript {
/**
 * An interface that handles requests to complete a workout.
 * doc://com.apple.documentation/documentation/sirikit/inendworkoutintenthandling
 */
interface INEndWorkoutIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inendworkoutintenthandling/1902506-resolveworkoutnameforendworkout
  resolveWorkoutNameForEndWorkout_withCompletion(intent: cocoascript.INEndWorkoutIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inendworkoutintenthandling/1638404-confirmendworkout
  confirmEndWorkout_completion(intent: cocoascript.INEndWorkoutIntent, completion: cocoascript.INEndWorkoutIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/inendworkoutintenthandling/1638144-handleendworkout
  handleEndWorkout_completion(intent: cocoascript.INEndWorkoutIntent, completion: cocoascript.INEndWorkoutIntentResponse):void;
}
}

