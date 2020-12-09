declare namespace cocoascript {
/**
 * A UI control shown in the Touch Bar on supported models of MacBook Pro.
 * doc://com.apple.documentation/documentation/appkit/nstouchbaritem
 */
interface NSTouchBarItem extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nstouchbaritem/2544755-initwithidentifier
  initWithIdentifier(identifier: cocoascript.NSTouchBarItemIdentifier):cocoascript.NSTouchBarItem;
  // doc://com.apple.documentation/documentation/appkit/nstouchbaritem/2544766-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSTouchBarItem;
  // doc://com.apple.documentation/documentation/appkit/nstouchbaritem/2544812-identifier
  identifier(): cocoascript.NSTouchBarItemIdentifier;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/appkit/nstouchbaritem/2544689-visibilitypriority
  visibilityPriority(): cocoascript.NSTouchBarItemPriority;
  setVisibilityPriority(): void;
  // doc://com.apple.documentation/documentation/appkit/nstouchbaritem/2544669-visible
  visible(): cocoascript.BOOL;
  setVisible(): void;
  // doc://com.apple.documentation/documentation/appkit/nstouchbaritem/2544693-customizationlabel
  customizationLabel(): cocoascript.NSString;
  setCustomizationLabel(): void;
  // doc://com.apple.documentation/documentation/appkit/nstouchbaritem/2544843-viewcontroller
  viewController(): cocoascript.NSViewController;
  setViewController(): void;
  // doc://com.apple.documentation/documentation/appkit/nstouchbaritem/2544719-view
  view(): cocoascript.NSView;
  setView(): void;
  // 
  alloc():cocoascript.NSTouchBarItem;
  // 
  init():cocoascript.NSTouchBarItem;
}
}
declare const NSTouchBarItem: cocoascript.NSTouchBarItem;

