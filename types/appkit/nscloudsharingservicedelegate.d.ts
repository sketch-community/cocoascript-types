declare namespace cocoascript {
  /**
   * A protocol that an iCloud-sharing service implements to handle status changes and errors.
   * doc://com.apple.documentation/documentation/appkit/nscloudsharingservicedelegate
   */
  interface NSCloudSharingServiceDelegate extends NSSharingServiceDelegate {
    // doc://com.apple.documentation/documentation/appkit/nscloudsharingservicedelegate/1644666-sharingservice
    sharingService_didCompleteForItems_error(sharingService: cocoascript.NSSharingService, items: cocoascript.NSArray, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nscloudsharingservicedelegate/1644712-sharingservice
    sharingService_didSaveShare(sharingService: cocoascript.NSSharingService, share: cocoascript.CKShare):void;
    // doc://com.apple.documentation/documentation/appkit/nscloudsharingservicedelegate/1644709-sharingservice
    sharingService_didStopSharing(sharingService: cocoascript.NSSharingService, share: cocoascript.CKShare):void;
    // doc://com.apple.documentation/documentation/appkit/nscloudsharingservicedelegate/1644694-optionsforsharingservice
    optionsForSharingService_shareProvider(cloudKitSharingService: cocoascript.NSSharingService, provider: cocoascript.NSItemProvider):cocoascript.NSCloudKitSharingServiceOptions;
  }
}
