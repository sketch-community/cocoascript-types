declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/uikit/uilargecontentviewerinteractiondelegate
   */
  interface UILargeContentViewerInteractionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uilargecontentviewerinteractiondelegate/3183927-largecontentviewerinteraction
    largeContentViewerInteraction_didEndOnItem_atPoint(interaction: cocoascript.UILargeContentViewerInteraction, item: cocoascript.UILargeContentViewerItem, point: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/uikit/uilargecontentviewerinteractiondelegate/3183928-largecontentviewerinteraction
    largeContentViewerInteraction_itemAtPoint(interaction: cocoascript.UILargeContentViewerInteraction, point: cocoascript.CGPoint):cocoascript.UILargeContentViewerItem;
    // doc://com.apple.documentation/documentation/uikit/uilargecontentviewerinteractiondelegate/3183929-viewcontrollerforlargecontentvie
    viewControllerForLargeContentViewerInteraction(interaction: cocoascript.UILargeContentViewerInteraction):cocoascript.UIViewController;
  }
}
