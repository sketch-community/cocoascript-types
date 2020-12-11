declare namespace cocoascript {
  /**
   * A protocol that a custom class can adopt to manage the enabled state of a UI element.
   * doc://com.apple.documentation/documentation/appkit/nsuserinterfacevalidations
   */
  interface NSUserInterfaceValidations {
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfacevalidations/1528162-validateuserinterfaceitem
    validateUserInterfaceItem(item: cocoascript.NSValidatedUserInterfaceItem):cocoascript.BOOL;
  }
}
