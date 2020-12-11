declare namespace cocoascript {
  /**
   * Text the user can select or edit to send an action message to a target when the user presses the Return key.
   * doc://com.apple.documentation/documentation/appkit/nstextfield
   */
  interface NSTextField extends NSControl {
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399422-selectable
    selectable(): cocoascript.BOOL;
    setSelectable(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399407-editable
    editable(): cocoascript.BOOL;
    setEditable(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399401-allowseditingtextattributes
    allowsEditingTextAttributes(): cocoascript.BOOL;
    setAllowsEditingTextAttributes(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399428-importsgraphics
    importsGraphics(): cocoascript.BOOL;
    setImportsGraphics(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399391-placeholderstring
    placeholderString(): cocoascript.NSString;
    setPlaceholderString(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399387-placeholderattributedstring
    placeholderAttributedString(): cocoascript.NSAttributedString;
    setPlaceholderAttributedString(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399405-allowsdefaulttighteningfortrunca
    allowsDefaultTighteningForTruncation(): cocoascript.BOOL;
    setAllowsDefaultTighteningForTruncation(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399424-maximumnumberoflines
    maximumNumberOfLines(): cocoascript.NSInteger;
    setMaximumNumberOfLines(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399395-preferredmaxlayoutwidth
    preferredMaxLayoutWidth(): cocoascript.CGFloat;
    setPreferredMaxLayoutWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399409-textcolor
    textColor(): cocoascript.NSColor;
    setTextColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399389-backgroundcolor
    backgroundColor(): cocoascript.NSColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399416-drawsbackground
    drawsBackground(): cocoascript.BOOL;
    setDrawsBackground(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399435-bezeled
    bezeled(): cocoascript.BOOL;
    setBezeled(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399418-bezelstyle
    bezelStyle(): cocoascript.NSTextFieldBezelStyle;
    setBezelStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399403-bordered
    bordered(): cocoascript.BOOL;
    setBordered(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399430-selecttext
    selectText(sender: cocoascript.NSTextField):void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399393-acceptsfirstresponder
    acceptsFirstResponder(): cocoascript.BOOL;
    setAcceptsFirstResponder(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/2539553-allowscharacterpickertouchbarite
    allowsCharacterPickerTouchBarItem(): cocoascript.BOOL;
    setAllowsCharacterPickerTouchBarItem(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399411-settitlewithmnemonic
    setTitleWithMnemonic(stringWithAmpersand: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/2539554-automatictextcompletionenabled
    automaticTextCompletionEnabled(): cocoascript.BOOL;
    setAutomaticTextCompletionEnabled(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399437-delegate
    delegate(): cocoascript.NSTextFieldDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399399-textshouldbeginediting
    textShouldBeginEditing(textObject: cocoascript.NSText):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399426-textdidbeginediting
    textDidBeginEditing(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399397-textdidchange
    textDidChange(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399434-textshouldendediting
    textShouldEndEditing(textObject: cocoascript.NSText):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstextfield/1399420-textdidendediting
    textDidEndEditing(notification: cocoascript.NSNotification):void;
    //
    alloc():cocoascript.NSTextField;
    //
    init():cocoascript.NSTextField;
  }
}

declare const NSTextField: cocoascript.NSTextField;
