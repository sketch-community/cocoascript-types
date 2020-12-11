declare namespace cocoascript {
  /**
   * A component of a path.
   * doc://com.apple.documentation/documentation/appkit/nspathcomponentcell
   */
  interface NSPathComponentCell extends NSTextFieldCell {
    // doc://com.apple.documentation/documentation/appkit/nspathcomponentcell/1527550-image
    image(): cocoascript.NSImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nspathcomponentcell/1534779-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    //
    alloc():cocoascript.NSPathComponentCell;
    //
    init():cocoascript.NSPathComponentCell;
  }
}

declare const NSPathComponentCell: cocoascript.NSPathComponentCell;
