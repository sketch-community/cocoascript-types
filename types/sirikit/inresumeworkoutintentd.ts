declare namespace cocoascript {
  /**
   * A request to resume a paused workout.
   * doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintent
   */
  interface INResumeWorkoutIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintent/1638965-initwithworkoutname
    initWithWorkoutName(workoutName: cocoascript.INSpeakableString):cocoascript.INResumeWorkoutIntent;
    // doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintent/1639245-workoutname
    workoutName(): cocoascript.INSpeakableString;
    setWorkoutName(): void;
    //
    alloc():cocoascript.INResumeWorkoutIntent;
    //
    init():cocoascript.INResumeWorkoutIntent;
  }
}

declare const INResumeWorkoutIntent: cocoascript.INResumeWorkoutIntent;
