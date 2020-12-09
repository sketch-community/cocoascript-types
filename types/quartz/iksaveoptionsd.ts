declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/iksaveoptions
 */
interface IKSaveOptions extends NSObject {
  // doc://com.apple.documentation/documentation/quartz/iksaveoptions/1503412-initwithimageproperties
  initWithImageProperties_imageUTType(imageProperties: cocoascript.NSDictionary, imageUTType: cocoascript.NSString):cocoascript.IKSaveOptions;
  // doc://com.apple.documentation/documentation/quartz/iksaveoptions/1503458-addsaveoptionsaccessoryviewtosav
  addSaveOptionsAccessoryViewToSavePanel(savePanel: cocoascript.NSSavePanel):void;
  // doc://com.apple.documentation/documentation/quartz/iksaveoptions/1505299-imageproperties
  imageProperties(): cocoascript.NSDictionary;
  setImageProperties(): void;
  // doc://com.apple.documentation/documentation/quartz/iksaveoptions/1504388-imageuttype
  imageUTType(): cocoascript.NSString;
  setImageUTType(): void;
  // doc://com.apple.documentation/documentation/quartz/iksaveoptions/1504791-userselection
  userSelection(): cocoascript.NSDictionary;
  setUserSelection(): void;
  // doc://com.apple.documentation/documentation/quartz/iksaveoptions/1503653-delegate
  delegate(): cocoascript.id;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1503501-saveoptions
  saveOptions_shouldShowUTType(saveOptions: cocoascript.IKSaveOptions, utType: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/iksaveoptions/1504945-addsaveoptionstoview
  addSaveOptionsToView(view: cocoascript.NSView):void;
  // 
  alloc():cocoascript.IKSaveOptions;
  // 
  init():cocoascript.IKSaveOptions;
}
}
declare const IKSaveOptions: cocoascript.IKSaveOptions;

