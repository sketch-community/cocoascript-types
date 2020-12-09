declare namespace cocoascript {
/**
 * An interface that handles requests to pause a workout.
 * doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintenthandling
 */
interface INPauseWorkoutIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintenthandling/1902354-resolveworkoutnameforpauseworkou
  resolveWorkoutNameForPauseWorkout_withCompletion(intent: cocoascript.INPauseWorkoutIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintenthandling/1638659-confirmpauseworkout
  confirmPauseWorkout_completion(intent: cocoascript.INPauseWorkoutIntent, completion: cocoascript.INPauseWorkoutIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintenthandling/1638187-handlepauseworkout
  handlePauseWorkout_completion(intent: cocoascript.INPauseWorkoutIntent, completion: cocoascript.INPauseWorkoutIntentResponse):void;
}
}

