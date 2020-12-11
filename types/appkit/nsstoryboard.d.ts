declare namespace cocoascript {
  /**
   * An encapsulation of the design-time view controller and window controller graph represented in an Interface Builder storyboard resource file.
   * doc://com.apple.documentation/documentation/appkit/nsstoryboard
   */
  interface NSStoryboard extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsstoryboard/2881236-mainstoryboard
    mainStoryboard(): cocoascript.NSStoryboard;
    setMainStoryboard(): void;
    // doc://com.apple.documentation/documentation/appkit/nsstoryboard/1426545-instantiateinitialcontroller
    instantiateInitialController():cocoascript.NSStoryboard;
    // doc://com.apple.documentation/documentation/appkit/nsstoryboard/1426549-instantiatecontrollerwithidentif
    instantiateControllerWithIdentifier(identifier: cocoascript.NSStoryboardSceneIdentifier):cocoascript.NSStoryboard;
    // doc://com.apple.documentation/documentation/appkit/nsstoryboard/3174922-instantiatecontrollerwithidentif
    instantiateControllerWithIdentifier_creator(identifier: cocoascript.NSStoryboardSceneIdentifier, block: cocoascript.NSStoryboardControllerCreator):cocoascript.NSStoryboard;
    // doc://com.apple.documentation/documentation/appkit/nsstoryboard/3174923-instantiateinitialcontrollerwith
    instantiateInitialControllerWithCreator(block: cocoascript.NSStoryboardControllerCreator):cocoascript.NSStoryboard;
    //
    alloc():cocoascript.NSStoryboard;
    //
    init():cocoascript.NSStoryboard;
  }
}

declare const NSStoryboard: cocoascript.NSStoryboard;
