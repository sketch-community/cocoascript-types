declare namespace cocoascript {
  /**
   * A view controller that manages the interface for selecting a font that the system provides or the user installs.
   * doc://com.apple.documentation/documentation/uikit/uifontpickerviewcontroller
   */
  interface UIFontPickerViewController extends UIViewController {
    // doc://com.apple.documentation/documentation/uikit/uifontpickerviewcontroller/3238098-initwithconfiguration
    initWithConfiguration(configuration: cocoascript.UIFontPickerViewControllerConfiguration):cocoascript.UIFontPickerViewController;
    // doc://com.apple.documentation/documentation/uikit/uifontpickerviewcontroller/3238096-configuration
    configuration(): cocoascript.UIFontPickerViewControllerConfiguration;
    setConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uifontpickerviewcontroller/3238097-delegate
    delegate(): cocoascript.UIFontPickerViewControllerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uifontpickerviewcontroller/3238099-selectedfontdescriptor
    selectedFontDescriptor(): cocoascript.UIFontDescriptor;
    setSelectedFontDescriptor(): void;
    //
    alloc():cocoascript.UIFontPickerViewController;
    //
    init():cocoascript.UIFontPickerViewController;
  }
}

declare const UIFontPickerViewController: cocoascript.UIFontPickerViewController;
