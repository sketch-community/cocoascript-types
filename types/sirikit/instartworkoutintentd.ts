declare namespace cocoascript {
  /**
   * A request to start a workout for the user.
   * doc://com.apple.documentation/documentation/sirikit/instartworkoutintent
   */
  interface INStartWorkoutIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintent/1638948-initwithworkoutname
    initWithWorkoutName_goalValue_workoutGoalUnitType_workoutLocationType_isOpenEnded(workoutName: cocoascript.INSpeakableString, goalValue: cocoascript.NSNumber, workoutGoalUnitType: cocoascript.INWorkoutGoalUnitType, workoutLocationType: cocoascript.INWorkoutLocationType, isOpenEnded: cocoascript.NSNumber):cocoascript.INStartWorkoutIntent;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintent/1639387-workoutname
    workoutName(): cocoascript.INSpeakableString;
    setWorkoutName(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintent/1638343-goalvalue
    goalValue(): cocoascript.NSNumber;
    setGoalValue(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintent/1639319-workoutgoalunittype
    workoutGoalUnitType(): cocoascript.INWorkoutGoalUnitType;
    setWorkoutGoalUnitType(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintent/1638964-workoutlocationtype
    workoutLocationType(): cocoascript.INWorkoutLocationType;
    setWorkoutLocationType(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintent/1638370-isopenended
    isOpenEnded(): cocoascript.NSNumber;
    setIsOpenEnded(): void;
    //
    alloc():cocoascript.INStartWorkoutIntent;
    //
    init():cocoascript.INStartWorkoutIntent;
  }
}

declare const INStartWorkoutIntent: cocoascript.INStartWorkoutIntent;
