declare namespace cocoascript {
/**
 * A snapshot of a particular touch at an instant in time.
 * doc://com.apple.documentation/documentation/appkit/nstouch
 */
interface NSTouch extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nstouch/2544708-type
  type(): cocoascript.NSTouchType;
  setType(): void;
  // doc://com.apple.documentation/documentation/appkit/nstouch/1535399-identity
  identity(): cocoascript.NSCopying;
  setIdentity(): void;
  // doc://com.apple.documentation/documentation/appkit/nstouch/1531520-phase
  phase(): cocoascript.NSTouchPhase;
  setPhase(): void;
  // doc://com.apple.documentation/documentation/appkit/nstouch/1534031-normalizedposition
  normalizedPosition(): cocoascript.NSPoint;
  setNormalizedPosition(): void;
  // doc://com.apple.documentation/documentation/appkit/nstouch/1525663-resting
  resting(): cocoascript.BOOL;
  setResting(): void;
  // doc://com.apple.documentation/documentation/appkit/nstouch/1533562-device
  device(): cocoascript.id;
  setDevice(): void;
  // doc://com.apple.documentation/documentation/appkit/nstouch/1528476-devicesize
  deviceSize(): cocoascript.NSSize;
  setDeviceSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nstouch/2588250-locationinview
  locationInView(view: cocoascript.NSView):cocoascript.NSPoint;
  // doc://com.apple.documentation/documentation/appkit/nstouch/2588251-previouslocationinview
  previousLocationInView(view: cocoascript.NSView):cocoascript.NSPoint;
  // 
  alloc():cocoascript.NSTouch;
  // 
  init():cocoascript.NSTouch;
}
}
declare const NSTouch: cocoascript.NSTouch;

