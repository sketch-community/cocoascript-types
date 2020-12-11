declare namespace cocoascript {
  /**
   * A Quick Look preview of an item that you can embed into your view hierarchy.
   * doc://com.apple.documentation/documentation/quartz/qlpreviewview
   */
  interface QLPreviewView extends NSView {
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1504541-initwithframe
    initWithFrame_style(frame: cocoascript.NSRect, style: cocoascript.QLPreviewViewStyle):cocoascript.QLPreviewView;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1503812-initwithframe
    initWithFrame(frame: cocoascript.NSRect):cocoascript.QLPreviewView;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1504747-previewitem
    previewItem(): cocoascript.QLPreviewItem;
    setPreviewItem(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1504399-refreshpreviewitem
    refreshPreviewItem():void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1503408-displaystate
    displayState(): cocoascript.id;
    setDisplayState(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1503689-autostarts
    autostarts(): cocoascript.BOOL;
    setAutostarts(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1503457-shouldclosewithwindow
    shouldCloseWithWindow(): cocoascript.BOOL;
    setShouldCloseWithWindow(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1503506-close
    close():void;
    //
    alloc():cocoascript.QLPreviewView;
    //
    init():cocoascript.QLPreviewView;
  }
}

declare const QLPreviewView: cocoascript.QLPreviewView;
