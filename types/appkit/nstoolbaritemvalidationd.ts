declare namespace cocoascript {
  /**
   * Validation of a toolbar item.
   * doc://com.apple.documentation/documentation/appkit/nstoolbaritemvalidation
   */
  interface NSToolbarItemValidation extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstoolbaritemvalidation/3005292-validatetoolbaritem
    validateToolbarItem(item: cocoascript.NSToolbarItem):cocoascript.BOOL;
  }
}
