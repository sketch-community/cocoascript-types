declare namespace cocoascript {
/**
 * A request to change the user’s vehicle environment settings to the ones from the specified profile.
 * doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent
 */
interface INSetProfileInCarIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/3019575-initwithprofilenumber
  initWithProfileNumber_profileName_defaultProfile_carName(profileNumber: cocoascript.NSNumber, profileName: cocoascript.NSString, defaultProfile: cocoascript.NSNumber, carName: cocoascript.INSpeakableString):cocoascript.INSetProfileInCarIntent;
  // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/2102250-defaultprofile
  defaultProfile(): cocoascript.NSNumber;
  setDefaultProfile(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/2726869-profilename
  profileName(): cocoascript.NSString;
  setProfileName(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/2102254-profilelabel
  profileLabel(): cocoascript.NSString;
  setProfileLabel(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/2102248-profilenumber
  profileNumber(): cocoascript.NSNumber;
  setProfileNumber(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/3019574-carname
  carName(): cocoascript.INSpeakableString;
  setCarName(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/2726871-initwithprofilenumber
  initWithProfileNumber_profileName_defaultProfile(profileNumber: cocoascript.NSNumber, profileName: cocoascript.NSString, defaultProfile: cocoascript.NSNumber):cocoascript.INSetProfileInCarIntent;
  // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/2102245-initwithprofilenumber
  initWithProfileNumber_profileLabel_defaultProfile(profileNumber: cocoascript.NSNumber, profileLabel: cocoascript.NSString, defaultProfile: cocoascript.NSNumber):cocoascript.INSetProfileInCarIntent;
  // 
  alloc():cocoascript.INSetProfileInCarIntent;
  // 
  init():cocoascript.INSetProfileInCarIntent;
}
}
declare const INSetProfileInCarIntent: cocoascript.INSetProfileInCarIntent;

