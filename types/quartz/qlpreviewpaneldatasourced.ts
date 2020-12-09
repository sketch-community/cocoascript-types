declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/qlpreviewpaneldatasource
 */
interface QLPreviewPanelDataSource {
  // doc://com.apple.documentation/documentation/quartz/qlpreviewpaneldatasource/1504383-previewpanel
  previewPanel_previewItemAtIndex(panel: cocoascript.QLPreviewPanel, index: cocoascript.NSInteger):cocoascript.QLPreviewItem;
  // doc://com.apple.documentation/documentation/quartz/qlpreviewpaneldatasource/1504441-numberofpreviewitemsinpreviewpan
  numberOfPreviewItemsInPreviewPanel(panel: cocoascript.QLPreviewPanel):cocoascript.NSInteger;
}
}

