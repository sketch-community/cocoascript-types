declare namespace cocoascript {
  /**
   * A request to pause the current workout that also stops the gathering of workout data.
   * doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintent
   */
  interface INPauseWorkoutIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintent/1639171-initwithworkoutname
    initWithWorkoutName(workoutName: cocoascript.INSpeakableString):cocoascript.INPauseWorkoutIntent;
    // doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintent/1638222-workoutname
    workoutName(): cocoascript.INSpeakableString;
    setWorkoutName(): void;
    //
    alloc():cocoascript.INPauseWorkoutIntent;
    //
    init():cocoascript.INPauseWorkoutIntent;
  }
}

declare const INPauseWorkoutIntent: cocoascript.INPauseWorkoutIntent;
