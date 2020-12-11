declare namespace cocoascript {
  /**
   * A view for displaying and editing text and search tokens.
   * doc://com.apple.documentation/documentation/uikit/uisearchtextfield
   */
  interface UISearchTextField extends UITextField {
    // doc://com.apple.documentation/documentation/uikit/uisearchtextfield/3175440-replacetextualportionofrange
    replaceTextualPortionOfRange_withToken_atIndex(textRange: cocoascript.UITextRange, token: cocoascript.UISearchToken, tokenIndex: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchtextfield/3175441-textualrange
    textualRange(): cocoascript.UITextRange;
    setTextualRange(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchtextfield/3175436-allowsdeletingtokens
    allowsDeletingTokens(): cocoascript.BOOL;
    setAllowsDeletingTokens(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchtextfield/3175435-allowscopyingtokens
    allowsCopyingTokens(): cocoascript.BOOL;
    setAllowsCopyingTokens(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextfield/1619595-delegate
    delegate(): cocoascript.UITextFieldDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchtextfield/3175443-tokens
    tokens(): cocoascript.UISearchToken;
    setTokens(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchtextfield/3175437-inserttoken
    insertToken_atIndex(token: cocoascript.UISearchToken, tokenIndex: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchtextfield/3175439-removetokenatindex
    removeTokenAtIndex(tokenIndex: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchtextfield/3175442-tokenbackgroundcolor
    tokenBackgroundColor(): cocoascript.UIColor;
    setTokenBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uisearchtextfield/3175444-tokensinrange
    tokensInRange(textRange: cocoascript.UITextRange):cocoascript.UISearchToken;
    // doc://com.apple.documentation/documentation/uikit/uisearchtextfield/3175438-positionoftokenatindex
    positionOfTokenAtIndex(tokenIndex: cocoascript.NSInteger):cocoascript.UITextPosition;
    //
    alloc():cocoascript.UISearchTextField;
    //
    init():cocoascript.UISearchTextField;
  }
}

declare const UISearchTextField: cocoascript.UISearchTextField;
