declare namespace cocoascript {
/**
 * An object that describes the attributes of a computer’s monitor or screen. 
 * doc://com.apple.documentation/documentation/appkit/nsscreen
 */
interface NSScreen extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388371-mainscreen
  mainScreen(): cocoascript.NSScreen;
  setMainScreen(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388374-deepestscreen
  deepestScreen(): cocoascript.NSScreen;
  setDeepestScreen(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388393-screens
  screens(): cocoascript.NSScreen;
  setScreens(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388373-depth
  depth(): cocoascript.NSWindowDepth;
  setDepth(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388387-frame
  frame(): cocoascript.NSRect;
  setFrame(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388391-supportedwindowdepths
  supportedWindowDepths(): cocoascript.NSWindowDepth;
  setSupportedWindowDepths(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388360-devicedescription
  deviceDescription(): cocoascript.id;
  setDeviceDescription(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388375-userspacescalefactor
  userSpaceScaleFactor():cocoascript.CGFloat;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388369-visibleframe
  visibleFrame(): cocoascript.NSRect;
  setVisibleFrame(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388383-colorspace
  colorSpace(): cocoascript.NSColorSpace;
  setColorSpace(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/2138325-canrepresentdisplaygamut
  canRepresentDisplayGamut(displayGamut: cocoascript.NSDisplayGamut):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388365-screenshaveseparatespaces
  screensHaveSeparateSpaces(): cocoascript.BOOL;
  setScreensHaveSeparateSpaces(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388381-backingalignedrect
  backingAlignedRect_options(rect: cocoascript.NSRect, options: cocoascript.NSAlignmentOptions):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388385-backingscalefactor
  backingScaleFactor(): cocoascript.CGFloat;
  setBackingScaleFactor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388364-convertrectfrombacking
  convertRectFromBacking(rect: cocoascript.NSRect):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388389-convertrecttobacking
  convertRectToBacking(rect: cocoascript.NSRect):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/3180381-maximumpotentialextendeddynamicr
  maximumPotentialExtendedDynamicRangeColorComponentValue(): cocoascript.CGFloat;
  setMaximumPotentialExtendedDynamicRangeColorComponentValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/1388362-maximumextendeddynamicrangecolor
  maximumExtendedDynamicRangeColorComponentValue(): cocoascript.CGFloat;
  setMaximumExtendedDynamicRangeColorComponentValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/3180382-maximumreferenceextendeddynamicr
  maximumReferenceExtendedDynamicRangeColorComponentValue(): cocoascript.CGFloat;
  setMaximumReferenceExtendedDynamicRangeColorComponentValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscreen/3228043-localizedname
  localizedName(): cocoascript.NSString;
  setLocalizedName(): void;
  // 
  alloc():cocoascript.NSScreen;
  // 
  init():cocoascript.NSScreen;
}
}
declare const NSScreen: cocoascript.NSScreen;

