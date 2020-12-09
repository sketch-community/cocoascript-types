declare namespace cocoascript {
/**
 * A representation of a custom intent parameter or response property.
 * doc://com.apple.documentation/documentation/sirikit/inobject
 */
interface INObject extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inobject/3601151-initwithidentifier
  initWithIdentifier_displayString_subtitleString_displayImage(identifier: cocoascript.NSString, displayString: cocoascript.NSString, subtitleString: cocoascript.NSString, displayImage: cocoascript.INImage):cocoascript.INObject;
  // doc://com.apple.documentation/documentation/sirikit/inobject/2980692-initwithidentifier
  initWithIdentifier_displayString(identifier: cocoascript.NSString, displayString: cocoascript.NSString):cocoascript.INObject;
  // doc://com.apple.documentation/documentation/sirikit/inobject/3601150-initwithidentifier
  initWithIdentifier_displayString_pronunciationHint_subtitleString_displayImage(identifier: cocoascript.NSString, displayString: cocoascript.NSString, pronunciationHint: cocoascript.NSString, subtitleString: cocoascript.NSString, displayImage: cocoascript.INImage):cocoascript.INObject;
  // doc://com.apple.documentation/documentation/sirikit/inobject/2980693-initwithidentifier
  initWithIdentifier_displayString_pronunciationHint(identifier: cocoascript.NSString, displayString: cocoascript.NSString, pronunciationHint: cocoascript.NSString):cocoascript.INObject;
  // doc://com.apple.documentation/documentation/sirikit/inobject/2980690-displaystring
  displayString(): cocoascript.NSString;
  setDisplayString(): void;
  // doc://com.apple.documentation/documentation/sirikit/inobject/3552206-subtitlestring
  subtitleString(): cocoascript.NSString;
  setSubtitleString(): void;
  // doc://com.apple.documentation/documentation/sirikit/inobject/3552205-displayimage
  displayImage(): cocoascript.INImage;
  setDisplayImage(): void;
  // doc://com.apple.documentation/documentation/sirikit/inobject/2980691-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/sirikit/inobject/2980694-pronunciationhint
  pronunciationHint(): cocoascript.NSString;
  setPronunciationHint(): void;
  // doc://com.apple.documentation/documentation/sirikit/inobject/3174873-alternativespeakablematches
  alternativeSpeakableMatches(): cocoascript.INSpeakableString;
  setAlternativeSpeakableMatches(): void;
  // 
  alloc():cocoascript.INObject;
  // 
  init():cocoascript.INObject;
}
}
declare const INObject: cocoascript.INObject;

