declare namespace cocoascript {
  /**
   * A Metal drawable associated with a Core Animation layer.
   * doc://com.apple.documentation/documentation/quartzcore/cametaldrawable
   */
  interface CAMetalDrawable extends MTLDrawable {
    // doc://com.apple.documentation/documentation/quartzcore/cametaldrawable/1478159-texture
    texture(): cocoascript.MTLTexture;
    setTexture(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametaldrawable/1478165-layer
    layer(): cocoascript.CAMetalLayer;
    setLayer(): void;
  }
}
