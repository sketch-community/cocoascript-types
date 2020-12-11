declare namespace cocoascript {
  /**
   * A protocol that defines properties you implement to make your application’s content visible in a preview.
   * doc://com.apple.documentation/documentation/quartz/qlpreviewitem
   */
  interface QLPreviewItem extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/qlpreviewitem/1419913-previewitemurl
    previewItemURL(): cocoascript.NSURL;
    setPreviewItemURL(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewitem/1419911-previewitemtitle
    previewItemTitle(): cocoascript.NSString;
    setPreviewItemTitle(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewitem/1419915-previewitemdisplaystate
    previewItemDisplayState(): cocoascript.id;
    setPreviewItemDisplayState(): void;
  }
}
