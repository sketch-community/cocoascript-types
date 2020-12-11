declare namespace cocoascript {
  /**
   * A control that executes your custom code in response to user interactions.
   * doc://com.apple.documentation/documentation/uikit/uibutton
   */
  interface UIButton extends UIControl {
    // doc://com.apple.documentation/documentation/uikit/uibutton/3600348-initwithframe
    initWithFrame(frame: cocoascript.CGRect):cocoascript.UIButton;
    // doc://com.apple.documentation/documentation/uikit/uibutton/3600349-initwithframe
    initWithFrame_primaryAction(frame: cocoascript.CGRect, primaryAction: cocoascript.UIAction):cocoascript.UIButton;
    // doc://com.apple.documentation/documentation/uikit/uibutton/3600347-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIButton;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1623992-titlelabel
    titleLabel(): cocoascript.UILabel;
    setTitleLabel(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624022-titleforstate
    titleForState(state: cocoascript.UIControlState):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624018-settitle
    setTitle_forState(title: cocoascript.NSString, state: cocoascript.UIControlState):void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1623991-attributedtitleforstate
    attributedTitleForState(state: cocoascript.UIControlState):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624012-setattributedtitle
    setAttributedTitle_forState(title: cocoascript.NSAttributedString, state: cocoascript.UIControlState):void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624017-titlecolorforstate
    titleColorForState(state: cocoascript.UIControlState):cocoascript.UIColor;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1623993-settitlecolor
    setTitleColor_forState(color: cocoascript.UIColor, state: cocoascript.UIControlState):void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624009-titleshadowcolorforstate
    titleShadowColorForState(state: cocoascript.UIControlState):cocoascript.UIColor;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1623994-settitleshadowcolor
    setTitleShadowColor_forState(color: cocoascript.UIColor, state: cocoascript.UIControlState):void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624004-reversestitleshadowwhenhighlight
    reversesTitleShadowWhenHighlighted(): cocoascript.BOOL;
    setReversesTitleShadowWhenHighlighted(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624031-adjustsimagewhenhighlighted
    adjustsImageWhenHighlighted(): cocoascript.BOOL;
    setAdjustsImageWhenHighlighted(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624020-adjustsimagewhendisabled
    adjustsImageWhenDisabled(): cocoascript.BOOL;
    setAdjustsImageWhenDisabled(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1623996-showstouchwhenhighlighted
    showsTouchWhenHighlighted(): cocoascript.BOOL;
    setShowsTouchWhenHighlighted(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624030-backgroundimageforstate
    backgroundImageForState(state: cocoascript.UIControlState):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624026-imageforstate
    imageForState(state: cocoascript.UIControlState):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624016-setbackgroundimage
    setBackgroundImage_forState(image: cocoascript.UIImage, state: cocoascript.UIControlState):void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1623997-setimage
    setImage_forState(image: cocoascript.UIImage, state: cocoascript.UIControlState):void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/3295914-preferredsymbolconfigurationfori
    preferredSymbolConfigurationForImageInState(state: cocoascript.UIControlState):cocoascript.UIImageSymbolConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uibutton/3295915-setpreferredsymbolconfiguration
    setPreferredSymbolConfiguration_forImageInState(configuration: cocoascript.UIImageSymbolConfiguration, state: cocoascript.UIControlState):void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624025-tintcolor
    tintColor(): cocoascript.UIColor;
    setTintColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624036-contentedgeinsets
    contentEdgeInsets(): cocoascript.UIEdgeInsets;
    setContentEdgeInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624010-titleedgeinsets
    titleEdgeInsets(): cocoascript.UIEdgeInsets;
    setTitleEdgeInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624034-imageedgeinsets
    imageEdgeInsets(): cocoascript.UIEdgeInsets;
    setImageEdgeInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624011-buttontype
    buttonType(): cocoascript.UIButtonType;
    setButtonType(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624032-currenttitle
    currentTitle(): cocoascript.NSString;
    setCurrentTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624002-currentattributedtitle
    currentAttributedTitle(): cocoascript.NSAttributedString;
    setCurrentAttributedTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624006-currenttitlecolor
    currentTitleColor(): cocoascript.UIColor;
    setCurrentTitleColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624019-currenttitleshadowcolor
    currentTitleShadowColor(): cocoascript.UIColor;
    setCurrentTitleShadowColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1623998-currentimage
    currentImage(): cocoascript.UIImage;
    setCurrentImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624035-currentbackgroundimage
    currentBackgroundImage(): cocoascript.UIImage;
    setCurrentBackgroundImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/3295913-currentpreferredsymbolconfigurat
    currentPreferredSymbolConfiguration(): cocoascript.UIImageSymbolConfiguration;
    setCurrentPreferredSymbolConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624033-imageview
    imageView(): cocoascript.UIImageView;
    setImageView(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624015-backgroundrectforbounds
    backgroundRectForBounds(bounds: cocoascript.CGRect):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624027-contentrectforbounds
    contentRectForBounds(bounds: cocoascript.CGRect):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624001-titlerectforcontentrect
    titleRectForContentRect(contentRect: cocoascript.CGRect):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624007-imagerectforcontentrect
    imageRectForContentRect(contentRect: cocoascript.CGRect):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uibutton/3538957-pointerinteractionenabled
    pointerInteractionEnabled(): cocoascript.BOOL;
    setPointerInteractionEnabled(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/3538958-pointerstyleprovider
    pointerStyleProvider(): cocoascript.UIButtonPointerStyleProvider;
    setPointerStyleProvider(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/3612050-role
    role(): cocoascript.UIButtonRole;
    setRole(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/3601189-menu
    menu(): cocoascript.UIMenu;
    setMenu(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624005-font
    font(): cocoascript.UIFont;
    setFont(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1623995-linebreakmode
    lineBreakMode(): cocoascript.NSLineBreakMode;
    setLineBreakMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uibutton/1624008-titleshadowoffset
    titleShadowOffset(): cocoascript.CGSize;
    setTitleShadowOffset(): void;
    //
    alloc():cocoascript.UIButton;
    //
    init():cocoascript.UIButton;
  }
}

declare const UIButton: cocoascript.UIButton;
