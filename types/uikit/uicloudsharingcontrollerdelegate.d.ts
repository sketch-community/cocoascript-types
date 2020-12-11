declare namespace cocoascript {
  /**
   * The protocol you implement to provide additional information to, and receive notifications from, the CloudKit sharing controller.
   * doc://com.apple.documentation/documentation/uikit/uicloudsharingcontrollerdelegate
   */
  interface UICloudSharingControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicloudsharingcontrollerdelegate/2274280-itemtitleforcloudsharingcontroll
    itemTitleForCloudSharingController(csc: cocoascript.UICloudSharingController):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uicloudsharingcontrollerdelegate/2274281-itemtypeforcloudsharingcontrolle
    itemTypeForCloudSharingController(csc: cocoascript.UICloudSharingController):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uicloudsharingcontrollerdelegate/2274282-itemthumbnaildataforcloudsharing
    itemThumbnailDataForCloudSharingController(csc: cocoascript.UICloudSharingController):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/uikit/uicloudsharingcontrollerdelegate/1649606-cloudsharingcontroller
    cloudSharingController_failedToSaveShareWithError(csc: cocoascript.UICloudSharingController, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/uikit/uicloudsharingcontrollerdelegate/1649604-cloudsharingcontrollerdidstopsha
    cloudSharingControllerDidStopSharing(csc: cocoascript.UICloudSharingController):void;
    // doc://com.apple.documentation/documentation/uikit/uicloudsharingcontrollerdelegate/1649605-cloudsharingcontrollerdidsavesha
    cloudSharingControllerDidSaveShare(csc: cocoascript.UICloudSharingController):void;
  }
}
