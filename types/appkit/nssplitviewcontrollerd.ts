declare namespace cocoascript {
/**
 * An object that manages an array of adjacent child views, and has a split view object for managing dividers between those views. 
 * doc://com.apple.documentation/documentation/appkit/nssplitviewcontroller
 */
interface NSSplitViewController extends NSViewController {
  // doc://com.apple.documentation/documentation/appkit/nssplitviewcontroller/1388907-splitview
  splitView(): cocoascript.NSSplitView;
  setSplitView(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewcontroller/1388857-splitviewitemforviewcontroller
  splitViewItemForViewController(viewController: cocoascript.NSViewController):cocoascript.NSSplitViewItem;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewcontroller/1388876-splitviewitems
  splitViewItems(): cocoascript.NSSplitViewItem;
  setSplitViewItems(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewcontroller/1388928-addsplitviewitem
  addSplitViewItem(splitViewItem: cocoascript.NSSplitViewItem):void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewcontroller/1388886-insertsplitviewitem
  insertSplitViewItem_atIndex(splitViewItem: cocoascript.NSSplitViewItem, index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewcontroller/1388903-removesplitviewitem
  removeSplitViewItem(splitViewItem: cocoascript.NSSplitViewItem):void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewcontroller/1388905-togglesidebar
  toggleSidebar(sender: cocoascript.NSSplitViewController):void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewcontroller/1388863-minimumthicknessforinlinesidebar
  minimumThicknessForInlineSidebars(): cocoascript.CGFloat;
  setMinimumThicknessForInlineSidebars(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewcontroller/1388874-viewdidload
  viewDidLoad():void;
  // 
  alloc():cocoascript.NSSplitViewController;
  // 
  init():cocoascript.NSSplitViewController;
}
}
declare const NSSplitViewController: cocoascript.NSSplitViewController;

