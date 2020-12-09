declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/appkit/nstabviewdelegate
 */
interface NSTabViewDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nstabviewdelegate/1391657-tabviewdidchangenumberoftabviewi
  tabViewDidChangeNumberOfTabViewItems(tabView: cocoascript.NSTabView):void;
  // doc://com.apple.documentation/documentation/appkit/nstabviewdelegate/1391651-tabview
  tabView_shouldSelectTabViewItem(tabView: cocoascript.NSTabView, tabViewItem: cocoascript.NSTabViewItem):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstabviewdelegate/1391611-tabview
  tabView_willSelectTabViewItem(tabView: cocoascript.NSTabView, tabViewItem: cocoascript.NSTabViewItem):void;
  // doc://com.apple.documentation/documentation/appkit/nstabviewdelegate/1391582-tabview
  tabView_didSelectTabViewItem(tabView: cocoascript.NSTabView, tabViewItem: cocoascript.NSTabViewItem):void;
}
}

