declare namespace cocoascript {
/**
 * A protocol that a Cloud-sharing toolbar item uses to get validation of an item.
 * doc://com.apple.documentation/documentation/appkit/nscloudsharingvalidation
 */
interface NSCloudSharingValidation extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nscloudsharingvalidation/2315049-cloudshareforuserinterfaceitem
  cloudShareForUserInterfaceItem(item: cocoascript.NSValidatedUserInterfaceItem):cocoascript.CKShare;
}
}

