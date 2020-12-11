declare namespace cocoascript {
  /**
   * The interface for configuring a drag session.
   * doc://com.apple.documentation/documentation/uikit/uidragsession
   */
  interface UIDragSession extends UIDragDropSession {
    // doc://com.apple.documentation/documentation/uikit/uidragsession/2891033-localcontext
    localContext(): cocoascript.id;
    setLocalContext(): void;
  }
}
