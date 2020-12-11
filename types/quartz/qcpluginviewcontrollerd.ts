declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qcpluginviewcontroller
   */
  interface QCPlugInViewController extends NSViewController {
    // doc://com.apple.documentation/documentation/quartz/qcpluginviewcontroller/1504077-initwithplugin
    initWithPlugIn_viewNibName(plugIn: cocoascript.QCPlugIn, name: cocoascript.NSString):cocoascript.QCPlugInViewController;
    // doc://com.apple.documentation/documentation/quartz/qcpluginviewcontroller/1504411-plugin
    plugIn():cocoascript.QCPlugIn;
    //
    alloc():cocoascript.QCPlugInViewController;
    //
    init():cocoascript.QCPlugInViewController;
  }
}

declare const QCPlugInViewController: cocoascript.QCPlugInViewController;
