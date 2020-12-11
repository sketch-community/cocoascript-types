declare namespace cocoascript {
  /**
   * An advanced interface for managing a data source object.
   * doc://com.apple.documentation/documentation/uikit/uidatasourcetranslating
   */
  interface UIDataSourceTranslating extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uidatasourcetranslating/2897405-presentationindexpathfordatasour
    presentationIndexPathForDataSourceIndexPath(dataSourceIndexPath: cocoascript.NSIndexPath):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uidatasourcetranslating/2897315-datasourceindexpathforpresentati
    dataSourceIndexPathForPresentationIndexPath(presentationIndexPath: cocoascript.NSIndexPath):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uidatasourcetranslating/2897352-presentationsectionindexfordatas
    presentationSectionIndexForDataSourceSectionIndex(dataSourceSectionIndex: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/uidatasourcetranslating/2897423-datasourcesectionindexforpresent
    dataSourceSectionIndexForPresentationSectionIndex(presentationSectionIndex: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/uidatasourcetranslating/2897368-performusingpresentationvalues
    performUsingPresentationValues(actionsToTranslate: void):void;
  }
}
