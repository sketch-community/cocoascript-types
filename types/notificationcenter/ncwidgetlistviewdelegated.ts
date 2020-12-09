declare namespace cocoascript {
/**
 * The interface for handling content display and editing in the list view of a macOS Today widget.
 * doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate
 */
interface NCWidgetListViewDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476055-widgetlist
  widgetList_viewControllerForRow(list: cocoascript.NCWidgetListViewController, row: cocoascript.NSUInteger):cocoascript.NSViewController;
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476049-widgetlist
  widgetList_didRemoveRow(list: cocoascript.NCWidgetListViewController, row: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476035-widgetlist
  widgetList_shouldRemoveRow(list: cocoascript.NCWidgetListViewController, row: cocoascript.NSUInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476037-widgetlistperformaddaction
  widgetListPerformAddAction(list: cocoascript.NCWidgetListViewController):void;
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476063-widgetlist
  widgetList_didReorderRow_toRow(list: cocoascript.NCWidgetListViewController, row: cocoascript.NSUInteger, newIndex: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476059-widgetlist
  widgetList_shouldReorderRow(list: cocoascript.NCWidgetListViewController, row: cocoascript.NSUInteger):cocoascript.BOOL;
}
}

