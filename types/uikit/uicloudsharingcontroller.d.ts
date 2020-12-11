declare namespace cocoascript {
  /**
   * A view controller that presents standard screens for adding and removing people from a CloudKit share record.
   * doc://com.apple.documentation/documentation/uikit/uicloudsharingcontroller
   */
  interface UICloudSharingController extends UIViewController {
    // doc://com.apple.documentation/documentation/uikit/uicloudsharingcontroller/1649607-initwithpreparationhandler
    initWithPreparationHandler(preparationHandler: cocoascript.NSError):cocoascript.UICloudSharingController;
    // doc://com.apple.documentation/documentation/uikit/uicloudsharingcontroller/1649597-initwithshare
    initWithShare_container(share: cocoascript.CKShare, container: cocoascript.CKContainer):cocoascript.UICloudSharingController;
    // doc://com.apple.documentation/documentation/uikit/uicloudsharingcontroller/1649595-delegate
    delegate(): cocoascript.UICloudSharingControllerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uicloudsharingcontroller/1649602-availablepermissions
    availablePermissions(): cocoascript.UICloudSharingPermissionOptions;
    setAvailablePermissions(): void;
    // doc://com.apple.documentation/documentation/uikit/uicloudsharingcontroller/1649601-share
    share(): cocoascript.CKShare;
    setShare(): void;
    // doc://com.apple.documentation/documentation/uikit/uicloudsharingcontroller/1649594-activityitemsource
    activityItemSource():cocoascript.UIActivityItemSource;
    //
    alloc():cocoascript.UICloudSharingController;
    //
    init():cocoascript.UICloudSharingController;
  }
}

declare const UICloudSharingController: cocoascript.UICloudSharingController;
