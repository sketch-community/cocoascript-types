declare namespace cocoascript {
/**
 * A set of delegate methods for search controller objects.
 * doc://com.apple.documentation/documentation/uikit/uisearchcontrollerdelegate
 */
interface UISearchControllerDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uisearchcontrollerdelegate/1618651-diddismisssearchcontroller
  didDismissSearchController(searchController: cocoascript.UISearchController):void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontrollerdelegate/1618646-didpresentsearchcontroller
  didPresentSearchController(searchController: cocoascript.UISearchController):void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontrollerdelegate/1618648-presentsearchcontroller
  presentSearchController(searchController: cocoascript.UISearchController):void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontrollerdelegate/1618655-willdismisssearchcontroller
  willDismissSearchController(searchController: cocoascript.UISearchController):void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontrollerdelegate/1618652-willpresentsearchcontroller
  willPresentSearchController(searchController: cocoascript.UISearchController):void;
}
}

