declare namespace cocoascript {
/**
 * An encapsulation of the attributes that create a drop shadow during drawing operations.
 * doc://com.apple.documentation/documentation/uikit/nsshadow
 */
interface NSShadow extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/nsshadow/1429853-init
  init():cocoascript.NSShadow;
  // doc://com.apple.documentation/documentation/uikit/nsshadow/1623903-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSShadow;
  // doc://com.apple.documentation/documentation/uikit/nsshadow/1429851-shadowoffset
  shadowOffset(): cocoascript.CGSize;
  setShadowOffset(): void;
  // doc://com.apple.documentation/documentation/uikit/nsshadow/1429846-shadowblurradius
  shadowBlurRadius(): cocoascript.CGFloat;
  setShadowBlurRadius(): void;
  // doc://com.apple.documentation/documentation/uikit/nsshadow/1429855-shadowcolor
  shadowColor(): cocoascript.id;
  setShadowColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsshadow/1429857-set
  set():void;
  // 
  alloc():cocoascript.NSShadow;
  // 
  init():cocoascript.NSShadow;
}
}
declare const NSShadow: cocoascript.NSShadow;

