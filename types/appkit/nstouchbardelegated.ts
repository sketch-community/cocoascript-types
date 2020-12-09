declare namespace cocoascript {
/**
 * A protocol that allows you to provide the items for a bar dynamically. 
 * doc://com.apple.documentation/documentation/appkit/nstouchbardelegate
 */
interface NSTouchBarDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nstouchbardelegate/2544851-touchbar
  touchBar_makeItemForIdentifier(touchBar: cocoascript.NSTouchBar, identifier: cocoascript.NSTouchBarItemIdentifier):cocoascript.NSTouchBarItem;
}
}

