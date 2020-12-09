declare namespace cocoascript {
/**
 * A transition or containment relationship between two scenes in a storyboard.
 * doc://com.apple.documentation/documentation/appkit/nsstoryboardsegue
 */
interface NSStoryboardSegue extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsstoryboardsegue/1409582-sourcecontroller
  sourceController(): cocoascript.id;
  setSourceController(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstoryboardsegue/1409586-destinationcontroller
  destinationController(): cocoascript.id;
  setDestinationController(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstoryboardsegue/1409578-identifier
  identifier(): cocoascript.NSStoryboardSegueIdentifier;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstoryboardsegue/1409572-initwithidentifier
  initWithIdentifier_source_destination(identifier: cocoascript.NSStoryboardSegueIdentifier, sourceController: cocoascript.NSStoryboardSegue, destinationController: cocoascript.NSStoryboardSegue):cocoascript.NSStoryboardSegue;
  // doc://com.apple.documentation/documentation/appkit/nsstoryboardsegue/1409587-perform
  perform():void;
  // 
  alloc():cocoascript.NSStoryboardSegue;
  // 
  init():cocoascript.NSStoryboardSegue;
}
}
declare const NSStoryboardSegue: cocoascript.NSStoryboardSegue;

