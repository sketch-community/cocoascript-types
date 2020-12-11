declare namespace cocoascript {
  /**
   * An interface that manages color picker activity.
   * doc://com.apple.documentation/documentation/uikit/uicolorpickerviewcontrollerdelegate
   */
  interface UIColorPickerViewControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicolorpickerviewcontrollerdelegate/3600469-colorpickerviewcontrollerdidfini
    colorPickerViewControllerDidFinish(viewController: cocoascript.UIColorPickerViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uicolorpickerviewcontrollerdelegate/3600470-colorpickerviewcontrollerdidsele
    colorPickerViewControllerDidSelectColor(viewController: cocoascript.UIColorPickerViewController):void;
  }
}
