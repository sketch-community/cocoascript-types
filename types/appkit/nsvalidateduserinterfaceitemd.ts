declare namespace cocoascript {
  /**
   * A protocol that a custom class can adopt to manage the automatic enablement of a UI control.
   * doc://com.apple.documentation/documentation/appkit/nsvalidateduserinterfaceitem
   */
  interface NSValidatedUserInterfaceItem {
    // doc://com.apple.documentation/documentation/appkit/nsvalidateduserinterfaceitem/1527339-action
    action(): cocoascript.SEL;
    setAction(): void;
    // doc://com.apple.documentation/documentation/appkit/nsvalidateduserinterfaceitem/1531030-tag
    tag(): cocoascript.NSInteger;
    setTag(): void;
  }
}
