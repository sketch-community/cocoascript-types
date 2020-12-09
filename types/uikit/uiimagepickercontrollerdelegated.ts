declare namespace cocoascript {
/**
 * A set of methods that your delegate object must implement to interact with the image picker interface. 
 * doc://com.apple.documentation/documentation/uikit/uiimagepickercontrollerdelegate
 */
interface UIImagePickerControllerDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontrollerdelegate/1619126-imagepickercontroller
  imagePickerController_didFinishPickingMediaWithInfo(picker: cocoascript.UIImagePickerController, info: cocoascript.UIImagePickerControllerDelegate):void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontrollerdelegate/1619133-imagepickercontrollerdidcancel
  imagePickerControllerDidCancel(picker: cocoascript.UIImagePickerController):void;
  // doc://com.apple.documentation/documentation/uikit/uiimagepickercontrollerdelegate/1619152-imagepickercontroller
  imagePickerController_didFinishPickingImage_editingInfo(picker: cocoascript.UIImagePickerController, image: cocoascript.UIImage, editingInfo: cocoascript.UIImagePickerControllerDelegate):void;
}
}

