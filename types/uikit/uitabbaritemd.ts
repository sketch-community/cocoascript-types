declare namespace cocoascript {
  /**
   * An item in a tab bar.
   * doc://com.apple.documentation/documentation/uikit/uitabbaritem
   */
  interface UITabBarItem extends UIBarItem {
    // doc://com.apple.documentation/documentation/uikit/uitabbaritem/1617067-initwithtabbarsystemitem
    initWithTabBarSystemItem_tag(systemItem: cocoascript.UITabBarSystemItem, tag: cocoascript.NSInteger):cocoascript.UITabBarItem;
    // doc://com.apple.documentation/documentation/uikit/uitabbaritem/1617056-initwithtitle
    initWithTitle_image_tag(title: cocoascript.NSString, image: cocoascript.UIImage, tag: cocoascript.NSInteger):cocoascript.UITabBarItem;
    // doc://com.apple.documentation/documentation/uikit/uitabbaritem/1617066-initwithtitle
    initWithTitle_image_selectedImage(title: cocoascript.NSString, image: cocoascript.UIImage, selectedImage: cocoascript.UIImage):cocoascript.UITabBarItem;
    // doc://com.apple.documentation/documentation/uikit/uitabbaritem/1617055-init
    init():cocoascript.UITabBarItem;
    // doc://com.apple.documentation/documentation/uikit/uitabbaritem/1617071-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UITabBarItem;
    // doc://com.apple.documentation/documentation/uikit/uitabbaritem/3198079-standardappearance
    standardAppearance(): cocoascript.UITabBarAppearance;
    setStandardAppearance(): void;
    // doc://com.apple.documentation/documentation/uikit/uitabbaritem/1617051-finishedselectedimage
    finishedSelectedImage():cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uitabbaritem/1617053-finishedunselectedimage
    finishedUnselectedImage():cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uitabbaritem/1617063-setfinishedselectedimage
    setFinishedSelectedImage_withFinishedUnselectedImage(selectedImage: cocoascript.UIImage, unselectedImage: cocoascript.UIImage):void;
    //
    alloc():cocoascript.UITabBarItem;
    //
    init():cocoascript.UITabBarItem;
  }
}

declare const UITabBarItem: cocoascript.UITabBarItem;
