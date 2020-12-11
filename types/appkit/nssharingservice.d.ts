declare namespace cocoascript {
  /**
   * A service that lets users share content with other services, such as social media services, or apps, such as Mail and Safari.
   * doc://com.apple.documentation/documentation/appkit/nssharingservice
   */
  interface NSSharingService extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nssharingservice/1402614-initwithtitle
    initWithTitle_image_alternateImage_handler(title: cocoascript.NSString, image: cocoascript.NSImage, alternateImage: cocoascript.NSImage, block: void):cocoascript.NSSharingService;
    // doc://com.apple.documentation/documentation/appkit/nssharingservice/1402681-delegate
    delegate(): cocoascript.NSSharingServiceDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nssharingservice/1402693-menuitemtitle
    menuItemTitle(): cocoascript.NSString;
    setMenuItemTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nssharingservice/1402637-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nssharingservice/1402683-accountname
    accountName(): cocoascript.NSString;
    setAccountName(): void;
    // doc://com.apple.documentation/documentation/appkit/nssharingservice/1402662-canperformwithitems
    canPerformWithItems(items: cocoascript.NSArray):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nssharingservice/1402669-performwithitems
    performWithItems(items: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/appkit/nssharingservice/1402652-recipients
    recipients(): cocoascript.NSString;
    setRecipients(): void;
    // doc://com.apple.documentation/documentation/appkit/nssharingservice/1402650-alternateimage
    alternateImage(): cocoascript.NSImage;
    setAlternateImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nssharingservice/1402654-image
    image(): cocoascript.NSImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nssharingservice/1402626-subject
    subject(): cocoascript.NSString;
    setSubject(): void;
    // doc://com.apple.documentation/documentation/appkit/nssharingservice/1402707-attachmentfileurls
    attachmentFileURLs(): cocoascript.NSURL;
    setAttachmentFileURLs(): void;
    // doc://com.apple.documentation/documentation/appkit/nssharingservice/1402644-messagebody
    messageBody(): cocoascript.NSString;
    setMessageBody(): void;
    // doc://com.apple.documentation/documentation/appkit/nssharingservice/1402685-permanentlink
    permanentLink(): cocoascript.NSURL;
    setPermanentLink(): void;
    //
    alloc():cocoascript.NSSharingService;
    //
    init():cocoascript.NSSharingService;
  }
}

declare const NSSharingService: cocoascript.NSSharingService;
