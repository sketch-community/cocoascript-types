declare namespace cocoascript {
  /**
   * The optional methods that delegates of text storage objects implement to handle text-edit processing.
   * doc://com.apple.documentation/documentation/uikit/nstextstoragedelegate
   */
  interface NSTextStorageDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nstextstoragedelegate/1534795-textstorage
    textStorage_willProcessEditing_range_changeInLength(textStorage: cocoascript.NSTextStorage, editedMask: cocoascript.NSTextStorageEditActions, editedRange: cocoascript.NSRange, delta: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/uikit/nstextstoragedelegate/1534375-textstorage
    textStorage_didProcessEditing_range_changeInLength(textStorage: cocoascript.NSTextStorage, editedMask: cocoascript.NSTextStorageEditActions, editedRange: cocoascript.NSRange, delta: cocoascript.NSInteger):void;
  }
}
