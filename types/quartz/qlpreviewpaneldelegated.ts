declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/quartz/qlpreviewpaneldelegate
 */
interface QLPreviewPanelDelegate extends NSWindowDelegate {
  // doc://com.apple.documentation/documentation/quartz/qlpreviewpaneldelegate/1503889-previewpanel
  previewPanel_handleEvent(panel: cocoascript.QLPreviewPanel, event: cocoascript.NSEvent):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qlpreviewpaneldelegate/1503423-previewpanel
  previewPanel_sourceFrameOnScreenForPreviewItem(panel: cocoascript.QLPreviewPanel, item: cocoascript.QLPreviewItem):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/quartz/qlpreviewpaneldelegate/1505277-previewpanel
  previewPanel_transitionImageForPreviewItem_contentRect(panel: cocoascript.QLPreviewPanel, item: cocoascript.QLPreviewItem, contentRect: cocoascript.NSRect):cocoascript.QLPreviewPanelDelegate;
}
}

