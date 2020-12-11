declare namespace cocoascript {
  /**
   * An abstract superclass for items that you can add to a bar that appears at the bottom of the screen.
   * doc://com.apple.documentation/documentation/uikit/uibaritem
   */
  interface UIBarItem extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uibaritem/1616411-init
    init():cocoascript.UIBarItem;
    // doc://com.apple.documentation/documentation/uikit/uibaritem/1616416-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIBarItem;
    // doc://com.apple.documentation/documentation/uikit/uibaritem/1616412-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uibaritem/1616415-image
    image(): cocoascript.UIImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uibaritem/1616421-landscapeimagephone
    landscapeImagePhone(): cocoascript.UIImage;
    setLandscapeImagePhone(): void;
    // doc://com.apple.documentation/documentation/uikit/uibaritem/2865917-largecontentsizeimage
    largeContentSizeImage(): cocoascript.UIImage;
    setLargeContentSizeImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uibaritem/1616413-imageinsets
    imageInsets(): cocoascript.UIEdgeInsets;
    setImageInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/uibaritem/1616420-landscapeimagephoneinsets
    landscapeImagePhoneInsets(): cocoascript.UIEdgeInsets;
    setLandscapeImagePhoneInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/uibaritem/2865781-largecontentsizeimageinsets
    largeContentSizeImageInsets(): cocoascript.UIEdgeInsets;
    setLargeContentSizeImageInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/uibaritem/1616418-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/uikit/uibaritem/1616419-tag
    tag(): cocoascript.NSInteger;
    setTag(): void;
    // doc://com.apple.documentation/documentation/uikit/uibaritem/1616414-settitletextattributes
    setTitleTextAttributes_forState(attributes: cocoascript.UIBarItem, state: cocoascript.UIControlState):void;
    // doc://com.apple.documentation/documentation/uikit/uibaritem/1616422-titletextattributesforstate
    titleTextAttributesForState(state: cocoascript.UIControlState):cocoascript.UIBarItem;
    //
    alloc():cocoascript.UIBarItem;
    //
    init():cocoascript.UIBarItem;
  }
}

declare const UIBarItem: cocoascript.UIBarItem;
