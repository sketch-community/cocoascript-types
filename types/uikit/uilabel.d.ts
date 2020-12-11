declare namespace cocoascript {
  /**
   * A view that displays one or more lines of informational text.
   * doc://com.apple.documentation/documentation/uikit/uilabel
   */
  interface UILabel extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620538-text
    text(): cocoascript.NSString;
    setText(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620542-attributedtext
    attributedText(): cocoascript.NSAttributedString;
    setAttributedText(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620532-font
    font(): cocoascript.UIFont;
    setFont(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620531-textcolor
    textColor(): cocoascript.UIColor;
    setTextColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620541-textalignment
    textAlignment(): cocoascript.NSTextAlignment;
    setTextAlignment(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620525-linebreakmode
    lineBreakMode(): cocoascript.NSLineBreakMode;
    setLineBreakMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620530-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/2967087-enablesmarqueewhenancestorfocuse
    enablesMarqueeWhenAncestorFocused(): cocoascript.BOOL;
    setEnablesMarqueeWhenAncestorFocused(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620546-adjustsfontsizetofitwidth
    adjustsFontSizeToFitWidth(): cocoascript.BOOL;
    setAdjustsFontSizeToFitWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620533-allowsdefaulttighteningfortrunca
    allowsDefaultTighteningForTruncation(): cocoascript.BOOL;
    setAllowsDefaultTighteningForTruncation(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620524-baselineadjustment
    baselineAdjustment(): cocoascript.UIBaselineAdjustment;
    setBaselineAdjustment(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620544-minimumscalefactor
    minimumScaleFactor(): cocoascript.CGFloat;
    setMinimumScaleFactor(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620539-numberoflines
    numberOfLines(): cocoascript.NSInteger;
    setNumberOfLines(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620535-adjustsletterspacingtofitwidth
    adjustsLetterSpacingToFitWidth(): cocoascript.BOOL;
    setAdjustsLetterSpacingToFitWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620529-minimumfontsize
    minimumFontSize(): cocoascript.CGFloat;
    setMinimumFontSize(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620540-highlightedtextcolor
    highlightedTextColor(): cocoascript.UIColor;
    setHighlightedTextColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620526-highlighted
    highlighted(): cocoascript.BOOL;
    setHighlighted(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620536-shadowcolor
    shadowColor(): cocoascript.UIColor;
    setShadowColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620528-shadowoffset
    shadowOffset(): cocoascript.CGSize;
    setShadowOffset(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620545-textrectforbounds
    textRectForBounds_limitedToNumberOfLines(bounds: cocoascript.CGRect, numberOfLines: cocoascript.NSInteger):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620527-drawtextinrect
    drawTextInRect(rect: cocoascript.CGRect):void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620534-preferredmaxlayoutwidth
    preferredMaxLayoutWidth(): cocoascript.CGFloat;
    setPreferredMaxLayoutWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/1620543-userinteractionenabled
    userInteractionEnabled(): cocoascript.BOOL;
    setUserInteractionEnabled(): void;
    // doc://com.apple.documentation/documentation/uikit/uilabel/3667730-linebreakstrategy
    lineBreakStrategy(): cocoascript.NSLineBreakStrategy;
    setLineBreakStrategy(): void;
    //
    alloc():cocoascript.UILabel;
    //
    init():cocoascript.UILabel;
  }
}

declare const UILabel: cocoascript.UILabel;
