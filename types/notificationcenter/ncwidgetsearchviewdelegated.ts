declare namespace cocoascript {
/**
 * The interface for enabling user searches in the search view controller of a macOS Today widget.
 * doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewdelegate
 */
interface NCWidgetSearchViewDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewdelegate/1449558-widgetsearch
  widgetSearch_searchForTerm_maxResults(controller: cocoascript.NCWidgetSearchViewController, searchTerm: cocoascript.NSString, max: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewdelegate/1449548-widgetsearch
  widgetSearch_resultSelected(controller: cocoascript.NCWidgetSearchViewController, object: cocoascript.NCWidgetSearchViewDelegate):void;
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewdelegate/1449550-widgetsearchtermcleared
  widgetSearchTermCleared(controller: cocoascript.NCWidgetSearchViewController):void;
}
}

