declare namespace cocoascript {
/**
 * A set of methods for dynamically associating a tool tip with a view. 
 * doc://com.apple.documentation/documentation/appkit/nsviewtooltipowner
 */
interface NSViewToolTipOwner extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsviewtooltipowner/3005296-view
  view_stringForToolTip_point_userData(view: cocoascript.NSView, tag: cocoascript.NSToolTipTag, point: cocoascript.NSPoint, data: void):cocoascript.NSString;
}
}

