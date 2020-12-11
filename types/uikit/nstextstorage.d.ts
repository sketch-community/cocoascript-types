declare namespace cocoascript {
  /**
   * The fundamental storage mechanism of TextKit.
   * doc://com.apple.documentation/documentation/uikit/nstextstorage
   */
  interface NSTextStorage extends NSMutableAttributedString {
    // doc://com.apple.documentation/documentation/uikit/nstextstorage/1532704-delegate
    delegate(): cocoascript.NSTextStorageDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/nstextstorage/1527938-layoutmanagers
    layoutManagers(): cocoascript.NSLayoutManager;
    setLayoutManagers(): void;
    // doc://com.apple.documentation/documentation/uikit/nstextstorage/1533459-addlayoutmanager
    addLayoutManager(aLayoutManager: cocoascript.NSLayoutManager):void;
    // doc://com.apple.documentation/documentation/uikit/nstextstorage/1528755-removelayoutmanager
    removeLayoutManager(aLayoutManager: cocoascript.NSLayoutManager):void;
    // doc://com.apple.documentation/documentation/uikit/nstextstorage/1529793-edited
    edited_range_changeInLength(editedMask: cocoascript.NSTextStorageEditActions, editedRange: cocoascript.NSRange, delta: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/uikit/nstextstorage/1525980-processediting
    processEditing():void;
    // doc://com.apple.documentation/documentation/uikit/nstextstorage/1534025-invalidateattributesinrange
    invalidateAttributesInRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/nstextstorage/1533947-ensureattributesarefixedinrange
    ensureAttributesAreFixedInRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/nstextstorage/1532043-fixesattributeslazily
    fixesAttributesLazily(): cocoascript.BOOL;
    setFixesAttributesLazily(): void;
    // doc://com.apple.documentation/documentation/uikit/nstextstorage/1525323-editedmask
    editedMask(): cocoascript.NSTextStorageEditActions;
    setEditedMask(): void;
    // doc://com.apple.documentation/documentation/uikit/nstextstorage/1524379-editedrange
    editedRange(): cocoascript.NSRange;
    setEditedRange(): void;
    // doc://com.apple.documentation/documentation/uikit/nstextstorage/1528400-changeinlength
    changeInLength(): cocoascript.NSInteger;
    setChangeInLength(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextstorage/1532095-attributeruns
    attributeRuns(): cocoascript.NSTextStorage;
    setAttributeRuns(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextstorage/1525943-paragraphs
    paragraphs(): cocoascript.NSTextStorage;
    setParagraphs(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextstorage/1524565-words
    words(): cocoascript.NSTextStorage;
    setWords(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextstorage/1535788-characters
    characters(): cocoascript.NSTextStorage;
    setCharacters(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextstorage/1535365-font
    font(): cocoascript.NSFont;
    setFont(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextstorage/1527175-foregroundcolor
    foregroundColor(): cocoascript.NSColor;
    setForegroundColor(): void;
    //
    alloc():cocoascript.NSTextStorage;
    //
    init():cocoascript.NSTextStorage;
  }
}

declare const NSTextStorage: cocoascript.NSTextStorage;
