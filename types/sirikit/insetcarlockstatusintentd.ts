declare namespace cocoascript {
  /**
   * A request to lock or unlock the user’s car.
   * doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintent
   */
  interface INSetCarLockStatusIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintent/2799283-initwithlocked
    initWithLocked_carName(locked: cocoascript.NSNumber, carName: cocoascript.INSpeakableString):cocoascript.INSetCarLockStatusIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintent/2799285-carname
    carName(): cocoascript.INSpeakableString;
    setCarName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintent/2799289-locked
    locked(): cocoascript.NSNumber;
    setLocked(): void;
    //
    alloc():cocoascript.INSetCarLockStatusIntent;
    //
    init():cocoascript.INSetCarLockStatusIntent;
  }
}

declare const INSetCarLockStatusIntent: cocoascript.INSetCarLockStatusIntent;
