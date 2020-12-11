declare namespace cocoascript {
  /**
   * A reusable container view shown for a particular cell in a table view that uses rows for content.
   * doc://com.apple.documentation/documentation/appkit/nstablecellview
   */
  interface NSTableCellView extends NSView {
    // doc://com.apple.documentation/documentation/appkit/nstablecellview/1483204-objectvalue
    objectValue(): cocoascript.id;
    setObjectValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecellview/1483213-imageview
    imageView(): cocoascript.NSImageView;
    setImageView(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecellview/1483202-textfield
    textField(): cocoascript.NSTextField;
    setTextField(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecellview/1483206-backgroundstyle
    backgroundStyle(): cocoascript.NSBackgroundStyle;
    setBackgroundStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecellview/1483211-rowsizestyle
    rowSizeStyle(): cocoascript.NSTableViewRowSizeStyle;
    setRowSizeStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecellview/1483199-draggingimagecomponents
    draggingImageComponents(): cocoascript.NSDraggingImageComponent;
    setDraggingImageComponents(): void;
    //
    alloc():cocoascript.NSTableCellView;
    //
    init():cocoascript.NSTableCellView;
  }
}

declare const NSTableCellView: cocoascript.NSTableCellView;
