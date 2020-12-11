declare namespace cocoascript {
  /**
   * A scrollable, multiline text region.
   * doc://com.apple.documentation/documentation/uikit/uitextview
   */
  interface UITextView extends UIScrollView {
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618597-initwithframe
    initWithFrame_textContainer(frame: cocoascript.CGRect, textContainer: cocoascript.NSTextContainer):cocoascript.UITextView;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618617-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UITextView;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618631-delegate
    delegate(): cocoascript.UITextViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618623-text
    text(): cocoascript.NSString;
    setText(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618626-attributedtext
    attributedText(): cocoascript.NSAttributedString;
    setAttributedText(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618600-font
    font(): cocoascript.UIFont;
    setFont(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618601-textcolor
    textColor(): cocoascript.UIColor;
    setTextColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618607-datadetectortypes
    dataDetectorTypes(): cocoascript.UIDataDetectorTypes;
    setDataDetectorTypes(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618618-textalignment
    textAlignment(): cocoascript.NSTextAlignment;
    setTextAlignment(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618629-typingattributes
    typingAttributes(): cocoascript.id;
    setTypingAttributes(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618632-linktextattributes
    linkTextAttributes(): cocoascript.id;
    setLinkTextAttributes(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618619-textcontainerinset
    textContainerInset(): cocoascript.UIEdgeInsets;
    setTextContainerInset(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/3295975-usesstandardtextscaling
    usesStandardTextScaling(): cocoascript.BOOL;
    setUsesStandardTextScaling(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618616-editable
    editable(): cocoascript.BOOL;
    setEditable(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618622-allowseditingtextattributes
    allowsEditingTextAttributes(): cocoascript.BOOL;
    setAllowsEditingTextAttributes(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618615-selectedrange
    selectedRange(): cocoascript.NSRange;
    setSelectedRange(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618613-scrollrangetovisible
    scrollRangeToVisible(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618605-clearsoninsertion
    clearsOnInsertion(): cocoascript.BOOL;
    setClearsOnInsertion(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618627-selectable
    selectable(): cocoascript.BOOL;
    setSelectable(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618614-inputview
    inputView(): cocoascript.UIView;
    setInputView(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618596-inputaccessoryview
    inputAccessoryView(): cocoascript.UIView;
    setInputAccessoryView(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618602-layoutmanager
    layoutManager(): cocoascript.NSLayoutManager;
    setLayoutManager(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618624-textcontainer
    textContainer(): cocoascript.NSTextContainer;
    setTextContainer(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextview/1618611-textstorage
    textStorage(): cocoascript.NSTextStorage;
    setTextStorage(): void;
    //
    alloc():cocoascript.UITextView;
    //
    init():cocoascript.UITextView;
  }
}

declare const UITextView: cocoascript.UITextView;
