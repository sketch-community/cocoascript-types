declare namespace cocoascript {
/**
 * An interface that handles requests to start a workout.
 * doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling
 */
interface INStartWorkoutIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling/1902501-resolveworkoutnameforstartworkou
  resolveWorkoutNameForStartWorkout_withCompletion(intent: cocoascript.INStartWorkoutIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling/1902504-resolvegoalvalueforstartworkout
  resolveGoalValueForStartWorkout_withCompletion(intent: cocoascript.INStartWorkoutIntent, completion: cocoascript.INDoubleResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling/1902503-resolveworkoutgoalunittypeforsta
  resolveWorkoutGoalUnitTypeForStartWorkout_withCompletion(intent: cocoascript.INStartWorkoutIntent, completion: cocoascript.INWorkoutGoalUnitTypeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling/1902505-resolveworkoutlocationtypeforsta
  resolveWorkoutLocationTypeForStartWorkout_withCompletion(intent: cocoascript.INStartWorkoutIntent, completion: cocoascript.INWorkoutLocationTypeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling/1902502-resolveisopenendedforstartworkou
  resolveIsOpenEndedForStartWorkout_withCompletion(intent: cocoascript.INStartWorkoutIntent, completion: cocoascript.INBooleanResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling/1639089-confirmstartworkout
  confirmStartWorkout_completion(intent: cocoascript.INStartWorkoutIntent, completion: cocoascript.INStartWorkoutIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling/1638639-handlestartworkout
  handleStartWorkout_completion(intent: cocoascript.INStartWorkoutIntent, completion: cocoascript.INStartWorkoutIntentResponse):void;
}
}

