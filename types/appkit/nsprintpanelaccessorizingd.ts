declare namespace cocoascript {
  /**
   * A set of methods that a Print panel object can use to get information from a printing accessory controller.
   * doc://com.apple.documentation/documentation/appkit/nsprintpanelaccessorizing
   */
  interface NSPrintPanelAccessorizing {
    // doc://com.apple.documentation/documentation/appkit/nsprintpanelaccessorizing/1490521-localizedsummaryitems
    localizedSummaryItems():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsprintpanelaccessorizing/1490516-keypathsforvaluesaffectingprevie
    keyPathsForValuesAffectingPreview():cocoascript.NSString;
  }
}
