declare namespace cocoascript {
  /**
   * A request to activate the signals on the user’s car.
   * doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintent
   */
  interface INActivateCarSignalIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintent/2799261-initwithcarname
    initWithCarName_signals(carName: cocoascript.INSpeakableString, signals: cocoascript.INCarSignalOptions):cocoascript.INActivateCarSignalIntent;
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintent/2799260-carname
    carName(): cocoascript.INSpeakableString;
    setCarName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintent/2799255-signals
    signals(): cocoascript.INCarSignalOptions;
    setSignals(): void;
    //
    alloc():cocoascript.INActivateCarSignalIntent;
    //
    init():cocoascript.INActivateCarSignalIntent;
  }
}

declare const INActivateCarSignalIntent: cocoascript.INActivateCarSignalIntent;
