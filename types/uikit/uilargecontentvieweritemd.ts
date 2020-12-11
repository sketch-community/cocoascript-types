declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/uikit/uilargecontentvieweritem
   */
  interface UILargeContentViewerItem extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uilargecontentvieweritem/3183932-largecontentimage
    largeContentImage(): cocoascript.UIImage;
    setLargeContentImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uilargecontentvieweritem/3183933-largecontentimageinsets
    largeContentImageInsets(): cocoascript.UIEdgeInsets;
    setLargeContentImageInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/uilargecontentvieweritem/3183934-largecontenttitle
    largeContentTitle(): cocoascript.NSString;
    setLargeContentTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uilargecontentvieweritem/3183935-scaleslargecontentimage
    scalesLargeContentImage(): cocoascript.BOOL;
    setScalesLargeContentImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uilargecontentvieweritem/3183936-showslargecontentviewer
    showsLargeContentViewer(): cocoascript.BOOL;
    setShowsLargeContentViewer(): void;
  }
}
