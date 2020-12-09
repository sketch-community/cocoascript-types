declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/qcview
 */
interface QCView extends NSView {
  // doc://com.apple.documentation/documentation/quartz/qcview/1436256-renderattime
  renderAtTime_arguments(time: cocoascript.NSTimeInterval, arguments: cocoascript.NSDictionary):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436241-loadcompositionfromfile
  loadCompositionFromFile(path: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436246-loadcomposition
  loadComposition(composition: cocoascript.QCComposition):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436242-loadedcomposition
  loadedComposition():cocoascript.QCComposition;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436231-unloadcomposition
  unloadComposition():void;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436243-erase
  erase():void;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436232-erasecolor
  eraseColor():cocoascript.NSColor;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436229-seterasecolor
  setEraseColor(color: cocoascript.NSColor):void;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436253-eventforwardingmask
  eventForwardingMask():cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436240-seteventforwardingmask
  setEventForwardingMask(mask: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436228-maxrenderingframerate
  maxRenderingFrameRate():number;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436248-setmaxrenderingframerate
  setMaxRenderingFrameRate(maxFPS: number):void;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436255-startrendering
  startRendering():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436239-isrendering
  isRendering():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436245-autostartsrendering
  autostartsRendering():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436233-setautostartsrendering
  setAutostartsRendering(flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436247-stoprendering
  stopRendering():void;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436238-pauserendering
  pauseRendering():void;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436237-ispausedrendering
  isPausedRendering():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436252-resumerendering
  resumeRendering():void;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436227-play
  play(sender: cocoascript.QCView):void;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436254-start
  start(sender: cocoascript.QCView):void;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436244-stop
  stop(sender: cocoascript.QCView):void;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436235-snapshotimage
  snapshotImage():cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436250-createsnapshotimageoftype
  createSnapshotImageOfType(type: cocoascript.NSString):cocoascript.QCView;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436249-openglcontext
  openGLContext():cocoascript.NSOpenGLContext;
  // doc://com.apple.documentation/documentation/quartz/qcview/1436234-openglpixelformat
  openGLPixelFormat():cocoascript.NSOpenGLPixelFormat;
  // doc://com.apple.documentation/documentation/quartz/qcviewdidstartrenderingnotification
  QCViewDidStartRenderingNotification(): cocoascript.const;
  setQCViewDidStartRenderingNotification(): void;
  // doc://com.apple.documentation/documentation/quartz/qcviewdidstoprenderingnotification
  QCViewDidStopRenderingNotification(): cocoascript.const;
  setQCViewDidStopRenderingNotification(): void;
  // 
  alloc():cocoascript.QCView;
  // 
  init():cocoascript.QCView;
}
}
declare const QCView: cocoascript.QCView;

