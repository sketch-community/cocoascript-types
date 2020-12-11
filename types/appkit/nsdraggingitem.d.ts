declare namespace cocoascript {
  /**
   * A single dragged item within a dragging session.
   * doc://com.apple.documentation/documentation/appkit/nsdraggingitem
   */
  interface NSDraggingItem extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsdraggingitem/1535417-initwithpasteboardwriter
    initWithPasteboardWriter(pasteboardWriter: cocoascript.NSPasteboardWriting):cocoascript.NSDraggingItem;
    // doc://com.apple.documentation/documentation/appkit/nsdraggingitem/1528746-setdraggingframe
    setDraggingFrame_contents(frame: cocoascript.NSRect, contents: cocoascript.NSDraggingItem):void;
    // doc://com.apple.documentation/documentation/appkit/nsdraggingitem/1528559-draggingframe
    draggingFrame(): cocoascript.NSRect;
    setDraggingFrame(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdraggingitem/1524302-imagecomponents
    imageComponents(): cocoascript.NSDraggingImageComponent;
    setImageComponents(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdraggingitem/1535607-imagecomponentsprovider
    imageComponentsProvider(): void;
    setImageComponentsProvider(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdraggingitem/1533258-item
    item(): cocoascript.id;
    setItem(): void;
    //
    alloc():cocoascript.NSDraggingItem;
    //
    init():cocoascript.NSDraggingItem;
  }
}

declare const NSDraggingItem: cocoascript.NSDraggingItem;
