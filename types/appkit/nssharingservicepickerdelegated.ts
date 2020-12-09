declare namespace cocoascript {
/**
 * A set of methods that you use to customize the service picker behavior.
 * doc://com.apple.documentation/documentation/appkit/nssharingservicepickerdelegate
 */
interface NSSharingServicePickerDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nssharingservicepickerdelegate/1402664-sharingservicepicker
  sharingServicePicker_sharingServicesForItems_proposedSharingServices(sharingServicePicker: cocoascript.NSSharingServicePicker, items: cocoascript.NSArray, proposedServices: cocoascript.NSSharingService):cocoascript.NSSharingService;
  // doc://com.apple.documentation/documentation/appkit/nssharingservicepickerdelegate/1402608-sharingservicepicker
  sharingServicePicker_delegateForSharingService(sharingServicePicker: cocoascript.NSSharingServicePicker, sharingService: cocoascript.NSSharingService):cocoascript.NSSharingServiceDelegate;
  // doc://com.apple.documentation/documentation/appkit/nssharingservicepickerdelegate/1402610-sharingservicepicker
  sharingServicePicker_didChooseSharingService(sharingServicePicker: cocoascript.NSSharingServicePicker, service: cocoascript.NSSharingService):void;
}
}

