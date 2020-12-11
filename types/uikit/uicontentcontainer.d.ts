declare namespace cocoascript {
  /**
   * A set of methods for adapting the contents of your view controllers to size and trait changes.
   * doc://com.apple.documentation/documentation/uikit/uicontentcontainer
   */
  interface UIContentContainer extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicontentcontainer/1621466-viewwilltransitiontosize
    viewWillTransitionToSize_withTransitionCoordinator(size: cocoascript.CGSize, coordinator: cocoascript.UIViewControllerTransitionCoordinator):void;
    // doc://com.apple.documentation/documentation/uikit/uicontentcontainer/1621511-willtransitiontotraitcollection
    willTransitionToTraitCollection_withTransitionCoordinator(newCollection: cocoascript.UITraitCollection, coordinator: cocoascript.UIViewControllerTransitionCoordinator):void;
    // doc://com.apple.documentation/documentation/uikit/uicontentcontainer/1621484-sizeforchildcontentcontainer
    sizeForChildContentContainer_withParentContainerSize(container: cocoascript.UIContentContainer, parentSize: cocoascript.CGSize):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/uikit/uicontentcontainer/1621351-preferredcontentsizedidchangefor
    preferredContentSizeDidChangeForChildContentContainer(container: cocoascript.UIContentContainer):void;
    // doc://com.apple.documentation/documentation/uikit/uicontentcontainer/1621424-systemlayoutfittingsizedidchange
    systemLayoutFittingSizeDidChangeForChildContentContainer(container: cocoascript.UIContentContainer):void;
    // doc://com.apple.documentation/documentation/uikit/uicontentcontainer/1621481-preferredcontentsize
    preferredContentSize(): cocoascript.CGSize;
    setPreferredContentSize(): void;
  }
}
