declare namespace cocoascript {
  /**
   * A set of methods that defines an interface for providing persistent references to data objects in your app.
   * doc://com.apple.documentation/documentation/uikit/uidatasourcemodelassociation
   */
  interface UIDataSourceModelAssociation {
    // doc://com.apple.documentation/documentation/uikit/uidatasourcemodelassociation/1616862-modelidentifierforelementatindex
    modelIdentifierForElementAtIndexPath_inView(idx: cocoascript.NSIndexPath, view: cocoascript.UIView):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uidatasourcemodelassociation/1616850-indexpathforelementwithmodeliden
    indexPathForElementWithModelIdentifier_inView(identifier: cocoascript.NSString, view: cocoascript.UIView):cocoascript.NSIndexPath;
  }
}
