declare namespace cocoascript {
/**
 * An object that prepares for and performs the visual transition between two view controllers. 
 * doc://com.apple.documentation/documentation/uikit/uistoryboardsegue
 */
interface UIStoryboardSegue extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uistoryboardsegue/1621908-initwithidentifier
  initWithIdentifier_source_destination(identifier: cocoascript.NSString, source: cocoascript.UIViewController, destination: cocoascript.UIViewController):cocoascript.UIStoryboardSegue;
  // doc://com.apple.documentation/documentation/uikit/uistoryboardsegue/1621918-sourceviewcontroller
  sourceViewController(): cocoascript.UIViewController;
  setSourceViewController(): void;
  // doc://com.apple.documentation/documentation/uikit/uistoryboardsegue/1621916-destinationviewcontroller
  destinationViewController(): cocoascript.UIViewController;
  setDestinationViewController(): void;
  // doc://com.apple.documentation/documentation/uikit/uistoryboardsegue/1621909-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/uikit/uistoryboardsegue/1621912-perform
  perform():void;
  // 
  alloc():cocoascript.UIStoryboardSegue;
  // 
  init():cocoascript.UIStoryboardSegue;
}
}
declare const UIStoryboardSegue: cocoascript.UIStoryboardSegue;

