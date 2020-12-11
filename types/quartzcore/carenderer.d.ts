declare namespace cocoascript {
  /**
   * A layer that allows an application to render a layer tree into a Core OpenGL context.
   * doc://com.apple.documentation/documentation/quartzcore/carenderer
   */
  interface CARenderer extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519583-layer
    layer(): cocoascript.CALayer;
    setLayer(): void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519591-bounds
    bounds(): cocoascript.CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519595-beginframeattime
    beginFrameAtTime_timeStamp(t: cocoascript.CFTimeInterval, ts: cocoascript.CVTimeStamp):void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519594-updatebounds
    updateBounds():cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519585-addupdaterect
    addUpdateRect(r: cocoascript.CGRect):void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519582-render
    render():void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519592-nextframetime
    nextFrameTime():cocoascript.CFTimeInterval;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519593-endframe
    endFrame():void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/2998892-setdestination
    setDestination(tex: cocoascript.MTLTexture):void;
    //
    alloc():cocoascript.CARenderer;
    //
    init():cocoascript.CARenderer;
  }
}

declare const CARenderer: cocoascript.CARenderer;
