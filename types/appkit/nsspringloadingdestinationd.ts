declare namespace cocoascript {
/**
 * A set of methods that the destination object (or recipient) of a dragged object can implement to support spring-loading.
 * doc://com.apple.documentation/documentation/appkit/nsspringloadingdestination
 */
interface NSSpringLoadingDestination extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsspringloadingdestination/1416106-springloadingactivated
  springLoadingActivated_draggingInfo(activated: cocoascript.BOOL, draggingInfo: cocoascript.NSDraggingInfo):void;
  // doc://com.apple.documentation/documentation/appkit/nsspringloadingdestination/1416062-springloadinghighlightchanged
  springLoadingHighlightChanged(draggingInfo: cocoascript.NSDraggingInfo):void;
  // doc://com.apple.documentation/documentation/appkit/nsspringloadingdestination/1415996-springloadingentered
  springLoadingEntered(draggingInfo: cocoascript.NSDraggingInfo):cocoascript.NSSpringLoadingOptions;
  // doc://com.apple.documentation/documentation/appkit/nsspringloadingdestination/1415976-springloadingupdated
  springLoadingUpdated(draggingInfo: cocoascript.NSDraggingInfo):cocoascript.NSSpringLoadingOptions;
  // doc://com.apple.documentation/documentation/appkit/nsspringloadingdestination/1415972-springloadingexited
  springLoadingExited(draggingInfo: cocoascript.NSDraggingInfo):void;
  // doc://com.apple.documentation/documentation/appkit/nsspringloadingdestination/1416047-draggingended
  draggingEnded(draggingInfo: cocoascript.NSDraggingInfo):void;
}
}

