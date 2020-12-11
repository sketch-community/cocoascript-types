declare namespace cocoascript {
  /**
   * A controller that accesses user preference information for your app from the user’s defaults database.
   * doc://com.apple.documentation/documentation/appkit/nsuserdefaultscontroller
   */
  interface NSUserDefaultsController extends NSController {
    // doc://com.apple.documentation/documentation/appkit/nsuserdefaultscontroller/1388190-shareduserdefaultscontroller
    sharedUserDefaultsController(): cocoascript.NSUserDefaultsController;
    setSharedUserDefaultsController(): void;
    // doc://com.apple.documentation/documentation/appkit/nsuserdefaultscontroller/1388184-initwithdefaults
    initWithDefaults_initialValues(defaults: cocoascript.NSUserDefaults, initialValues: cocoascript.NSUserDefaultsController):cocoascript.NSUserDefaultsController;
    // doc://com.apple.documentation/documentation/appkit/nsuserdefaultscontroller/1388172-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSUserDefaultsController;
    // doc://com.apple.documentation/documentation/appkit/nsuserdefaultscontroller/1388182-defaults
    defaults(): cocoascript.NSUserDefaults;
    setDefaults(): void;
    // doc://com.apple.documentation/documentation/appkit/nsuserdefaultscontroller/1388188-initialvalues
    initialValues(): cocoascript.id;
    setInitialValues(): void;
    // doc://com.apple.documentation/documentation/appkit/nsuserdefaultscontroller/1388186-hasunappliedchanges
    hasUnappliedChanges(): cocoascript.BOOL;
    setHasUnappliedChanges(): void;
    // doc://com.apple.documentation/documentation/appkit/nsuserdefaultscontroller/1388191-appliesimmediately
    appliesImmediately(): cocoascript.BOOL;
    setAppliesImmediately(): void;
    // doc://com.apple.documentation/documentation/appkit/nsuserdefaultscontroller/1388176-values
    values(): cocoascript.id;
    setValues(): void;
    // doc://com.apple.documentation/documentation/appkit/nsuserdefaultscontroller/1388178-revert
    revert(sender: cocoascript.NSUserDefaultsController):void;
    // doc://com.apple.documentation/documentation/appkit/nsuserdefaultscontroller/1388170-reverttoinitialvalues
    revertToInitialValues(sender: cocoascript.NSUserDefaultsController):void;
    // doc://com.apple.documentation/documentation/appkit/nsuserdefaultscontroller/1388180-save
    save(sender: cocoascript.NSUserDefaultsController):void;
    //
    alloc():cocoascript.NSUserDefaultsController;
    //
    init():cocoascript.NSUserDefaultsController;
  }
}

declare const NSUserDefaultsController: cocoascript.NSUserDefaultsController;
