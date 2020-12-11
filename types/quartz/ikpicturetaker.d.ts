declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikpicturetaker
   */
  interface IKPictureTaker extends NSPanel {
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1504302-beginpicturetakersheetforwindow
    beginPictureTakerSheetForWindow_withDelegate_didEndSelector_contextInfo(aWindow: cocoascript.NSWindow, delegate: cocoascript.IKPictureTaker, didEndSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1503448-beginpicturetakerwithdelegate
    beginPictureTakerWithDelegate_didEndSelector_contextInfo(delegate: cocoascript.IKPictureTaker, didEndSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1504753-popuprecentsmenuforview
    popUpRecentsMenuForView_withDelegate_didEndSelector_contextInfo(aView: cocoascript.NSView, delegate: cocoascript.IKPictureTaker, didEndSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1503911-runmodal
    runModal():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1503724-setinputimage
    setInputImage(image: cocoascript.NSImage):void;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1505220-inputimage
    inputImage():cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1504563-outputimage
    outputImage():cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1504915-setmirroring
    setMirroring(b: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1504121-mirroring
    mirroring():cocoascript.BOOL;
    //
    alloc():cocoascript.IKPictureTaker;
    //
    init():cocoascript.IKPictureTaker;
  }
}

declare const IKPictureTaker: cocoascript.IKPictureTaker;
