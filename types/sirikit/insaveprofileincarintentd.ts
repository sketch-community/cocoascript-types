declare namespace cocoascript {
  /**
   * A request to save the user’s vehicle environment settings in a CarPlay-enabled vehicle.
   * doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintent
   */
  interface INSaveProfileInCarIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintent/2727145-initwithprofilenumber
    initWithProfileNumber_profileName(profileNumber: cocoascript.NSNumber, profileName: cocoascript.NSString):cocoascript.INSaveProfileInCarIntent;
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintent/2102343-initwithprofilenumber
    initWithProfileNumber_profileLabel(profileNumber: cocoascript.NSNumber, profileLabel: cocoascript.NSString):cocoascript.INSaveProfileInCarIntent;
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintent/2102346-profilenumber
    profileNumber(): cocoascript.NSNumber;
    setProfileNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintent/2727143-profilename
    profileName(): cocoascript.NSString;
    setProfileName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintent/2102345-profilelabel
    profileLabel(): cocoascript.NSString;
    setProfileLabel(): void;
    //
    alloc():cocoascript.INSaveProfileInCarIntent;
    //
    init():cocoascript.INSaveProfileInCarIntent;
  }
}

declare const INSaveProfileInCarIntent: cocoascript.INSaveProfileInCarIntent;
