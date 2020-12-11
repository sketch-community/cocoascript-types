declare namespace cocoascript {
  /**
   * A custom action that you can create and add to a document browser's Edit Menu or navigation bar.
   * doc://com.apple.documentation/documentation/uikit/uidocumentbrowseraction
   */
  interface UIDocumentBrowserAction extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowseraction/2874075-initwithidentifier
    initWithIdentifier_localizedTitle_availability_handler(identifier: cocoascript.NSString, localizedTitle: cocoascript.NSString, availability: cocoascript.UIDocumentBrowserActionAvailability, handler: cocoascript.NSURL):cocoascript.UIDocumentBrowserAction;
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowseraction/2874076-image
    image(): cocoascript.UIImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowseraction/2874070-supportedcontenttypes
    supportedContentTypes(): cocoascript.NSString;
    setSupportedContentTypes(): void;
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowseraction/2874074-supportsmultipleitems
    supportsMultipleItems(): cocoascript.BOOL;
    setSupportsMultipleItems(): void;
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowseraction/2874069-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowseraction/2874071-localizedtitle
    localizedTitle(): cocoascript.NSString;
    setLocalizedTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uidocumentbrowseraction/2874078-availability
    availability(): cocoascript.UIDocumentBrowserActionAvailability;
    setAvailability(): void;
    //
    alloc():cocoascript.UIDocumentBrowserAction;
    //
    init():cocoascript.UIDocumentBrowserAction;
  }
}

declare const UIDocumentBrowserAction: cocoascript.UIDocumentBrowserAction;
