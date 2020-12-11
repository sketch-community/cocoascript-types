declare namespace cocoascript {
  /**
   * An object that displays a single image or a sequence of animated images in your interface.
   * doc://com.apple.documentation/documentation/uikit/uiimageview
   */
  interface UIImageView extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uiimageview/1621062-initwithimage
    initWithImage(image: cocoascript.UIImage):cocoascript.UIImageView;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/1621064-initwithimage
    initWithImage_highlightedImage(image: cocoascript.UIImage, highlightedImage: cocoascript.UIImage):cocoascript.UIImageView;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/1621069-image
    image(): cocoascript.UIImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/1621066-highlightedimage
    highlightedImage(): cocoascript.UIImage;
    setHighlightedImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/1621068-animationimages
    animationImages(): cocoascript.UIImage;
    setAnimationImages(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/1621065-highlightedanimationimages
    highlightedAnimationImages(): cocoascript.UIImage;
    setHighlightedAnimationImages(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/1621058-animationduration
    animationDuration(): cocoascript.NSTimeInterval;
    setAnimationDuration(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/1621070-animationrepeatcount
    animationRepeatCount(): cocoascript.NSInteger;
    setAnimationRepeatCount(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/1621061-startanimating
    startAnimating():void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/1621057-stopanimating
    stopAnimating():void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/2097534-animating
    animating(): cocoascript.BOOL;
    setAnimating(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/3295948-preferredsymbolconfiguration
    preferredSymbolConfiguration(): cocoascript.UIImageSymbolConfiguration;
    setPreferredSymbolConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/1621063-userinteractionenabled
    userInteractionEnabled(): cocoascript.BOOL;
    setUserInteractionEnabled(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/1621060-highlighted
    highlighted(): cocoascript.BOOL;
    setHighlighted(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/1621059-tintcolor
    tintColor(): cocoascript.UIColor;
    setTintColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/1627692-adjustsimagewhenancestorfocused
    adjustsImageWhenAncestorFocused(): cocoascript.BOOL;
    setAdjustsImageWhenAncestorFocused(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/1627691-focusedframeguide
    focusedFrameGuide(): cocoascript.UILayoutGuide;
    setFocusedFrameGuide(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/2920037-masksfocuseffecttocontents
    masksFocusEffectToContents(): cocoascript.BOOL;
    setMasksFocusEffectToContents(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimageview/2882128-overlaycontentview
    overlayContentView(): cocoascript.UIView;
    setOverlayContentView(): void;
    //
    alloc():cocoascript.UIImageView;
    //
    init():cocoascript.UIImageView;
  }
}

declare const UIImageView: cocoascript.UIImageView;
