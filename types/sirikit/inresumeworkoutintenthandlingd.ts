declare namespace cocoascript {
/**
 * The interface that handles requests to resume a workout.
 * doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintenthandling
 */
interface INResumeWorkoutIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintenthandling/1902397-resolveworkoutnameforresumeworko
  resolveWorkoutNameForResumeWorkout_withCompletion(intent: cocoascript.INResumeWorkoutIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintenthandling/1638905-confirmresumeworkout
  confirmResumeWorkout_completion(intent: cocoascript.INResumeWorkoutIntent, completion: cocoascript.INResumeWorkoutIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintenthandling/1639077-handleresumeworkout
  handleResumeWorkout_completion(intent: cocoascript.INResumeWorkoutIntent, completion: cocoascript.INResumeWorkoutIntentResponse):void;
}
}

