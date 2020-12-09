declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomaction
 */
interface NSAccessibilityCustomAction extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomaction/2870120-initwithname
  initWithName_handler(name: cocoascript.NSString, handler: void):cocoascript.NSAccessibilityCustomAction;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomaction/2870146-initwithname
  initWithName_target_selector(name: cocoascript.NSString, target: cocoascript.NSObject, selector: cocoascript.SEL):cocoascript.NSAccessibilityCustomAction;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomaction/2870118-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomaction/2870157-handler
  handler(): void;
  setHandler(): void;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomaction/2870110-selector
  selector(): cocoascript.SEL;
  setSelector(): void;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomaction/2870105-target
  target(): cocoascript.NSObject;
  setTarget(): void;
  // 
  alloc():cocoascript.NSAccessibilityCustomAction;
  // 
  init():cocoascript.NSAccessibilityCustomAction;
}
}
declare const NSAccessibilityCustomAction: cocoascript.NSAccessibilityCustomAction;

