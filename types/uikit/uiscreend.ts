declare namespace cocoascript {
/**
 * An object that defines the properties associated with a hardware-based display. 
 * doc://com.apple.documentation/documentation/uikit/uiscreen
 */
interface UIScreen extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617815-mainscreen
  mainScreen(): cocoascript.UIScreen;
  setMainScreen(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617812-screens
  screens(): cocoascript.UIScreen;
  setScreens(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617829-mirroredscreen
  mirroredScreen(): cocoascript.UIScreen;
  setMirroredScreen(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617833-coordinatespace
  coordinateSpace(): cocoascript.UICoordinateSpace;
  setCoordinateSpace(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617819-fixedcoordinatespace
  fixedCoordinateSpace(): cocoascript.UICoordinateSpace;
  setFixedCoordinateSpace(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617838-bounds
  bounds(): cocoascript.CGRect;
  setBounds(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617835-applicationframe
  applicationFrame(): cocoascript.CGRect;
  setApplicationFrame(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617810-nativebounds
  nativeBounds(): cocoascript.CGRect;
  setNativeBounds(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617825-nativescale
  nativeScale(): cocoascript.CGFloat;
  setNativeScale(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617836-scale
  scale(): cocoascript.CGFloat;
  setScale(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617817-currentmode
  currentMode(): cocoascript.UIScreenMode;
  setCurrentMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617823-preferredmode
  preferredMode(): cocoascript.UIScreenMode;
  setPreferredMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617839-availablemodes
  availableModes(): cocoascript.UIScreenMode;
  setAvailableModes(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617820-displaylinkwithtarget
  displayLinkWithTarget_selector(target: cocoascript.UIScreen, sel: cocoascript.SEL):cocoascript.CADisplayLink;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/2806814-maximumframespersecond
  maximumFramesPerSecond(): cocoascript.NSInteger;
  setMaximumFramesPerSecond(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617830-brightness
  brightness(): cocoascript.CGFloat;
  setBrightness(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617821-wantssoftwaredimming
  wantsSoftwareDimming(): cocoascript.BOOL;
  setWantsSoftwareDimming(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617824-overscancompensationinsets
  overscanCompensationInsets(): cocoascript.UIEdgeInsets;
  setOverscanCompensationInsets(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617818-overscancompensation
  overscanCompensation(): cocoascript.UIScreenOverscanCompensation;
  setOverscanCompensation(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617814-snapshotviewafterscreenupdates
  snapshotViewAfterScreenUpdates(afterUpdates: cocoascript.BOOL):cocoascript.UIView;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/2921651-captured
  captured(): cocoascript.BOOL;
  setCaptured(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1649175-focuseditem
  focusedItem(): cocoascript.UIFocusItem;
  setFocusedItem(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617831-focusedview
  focusedView(): cocoascript.UIView;
  setFocusedView(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/1617816-supportsfocus
  supportsFocus(): cocoascript.BOOL;
  setSupportsFocus(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscreen/3368162-calibratedlatency
  calibratedLatency(): cocoascript.CFTimeInterval;
  setCalibratedLatency(): void;
  // 
  alloc():cocoascript.UIScreen;
  // 
  init():cocoascript.UIScreen;
}
}
declare const UIScreen: cocoascript.UIScreen;

