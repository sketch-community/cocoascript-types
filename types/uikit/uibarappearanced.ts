declare namespace cocoascript {
/**
 * An object for customizing the basic appearance of system bars.
 * doc://com.apple.documentation/documentation/uikit/uibarappearance
 */
interface UIBarAppearance extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uibarappearance/3198004-initwithidiom
  initWithIdiom(idiom: cocoascript.UIUserInterfaceIdiom):cocoascript.UIBarAppearance;
  // doc://com.apple.documentation/documentation/uikit/uibarappearance/3198002-initwithbarappearance
  initWithBarAppearance(barAppearance: cocoascript.UIBarAppearance):cocoascript.UIBarAppearance;
  // doc://com.apple.documentation/documentation/uikit/uibarappearance/3198001-init
  init():cocoascript.UIBarAppearance;
  // doc://com.apple.documentation/documentation/uikit/uibarappearance/3198003-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIBarAppearance;
  // doc://com.apple.documentation/documentation/uikit/uibarappearance/3197997-configurewithdefaultbackground
  configureWithDefaultBackground():void;
  // doc://com.apple.documentation/documentation/uikit/uibarappearance/3197998-configurewithopaquebackground
  configureWithOpaqueBackground():void;
  // doc://com.apple.documentation/documentation/uikit/uibarappearance/3197999-configurewithtransparentbackgrou
  configureWithTransparentBackground():void;
  // doc://com.apple.documentation/documentation/uikit/uibarappearance/3197994-backgroundeffect
  backgroundEffect(): cocoascript.UIBlurEffect;
  setBackgroundEffect(): void;
  // doc://com.apple.documentation/documentation/uikit/uibarappearance/3197993-backgroundcolor
  backgroundColor(): cocoascript.UIColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uibarappearance/3197995-backgroundimage
  backgroundImage(): cocoascript.UIImage;
  setBackgroundImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uibarappearance/3197996-backgroundimagecontentmode
  backgroundImageContentMode(): cocoascript.UIViewContentMode;
  setBackgroundImageContentMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uibarappearance/3198008-shadowcolor
  shadowColor(): cocoascript.UIColor;
  setShadowColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uibarappearance/3198009-shadowimage
  shadowImage(): cocoascript.UIImage;
  setShadowImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uibarappearance/3198000-idiom
  idiom(): cocoascript.UIUserInterfaceIdiom;
  setIdiom(): void;
  // doc://com.apple.documentation/documentation/uikit/uibarappearance/3368150-copy
  copy():cocoascript.UIBarAppearance;
  // 
  alloc():cocoascript.UIBarAppearance;
  // 
  init():cocoascript.UIBarAppearance;
}
}
declare const UIBarAppearance: cocoascript.UIBarAppearance;

