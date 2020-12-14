declare namespace cocoascript {
  /**
   * A default implementation for views that draw their content using OpenGL ES.
   * doc://com.apple.documentation/documentation/glkit/glkview
   */
  interface GLKView extends UIView {
    // doc://com.apple.documentation/documentation/glkit/glkview/1615609-initwithframe
    initWithFrame_context(frame: cocoascript.CGRect, context: cocoascript.EAGLContext):cocoascript.GLKView;
    // doc://com.apple.documentation/documentation/glkit/glkview/1615557-delegate
    delegate(): cocoascript.GLKViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/glkit/glkview/1615587-drawablecolorformat
    drawableColorFormat(): cocoascript.GLKViewDrawableColorFormat;
    setDrawableColorFormat(): void;
    // doc://com.apple.documentation/documentation/glkit/glkview/1615583-drawabledepthformat
    drawableDepthFormat(): cocoascript.GLKViewDrawableDepthFormat;
    setDrawableDepthFormat(): void;
    // doc://com.apple.documentation/documentation/glkit/glkview/1615605-drawablestencilformat
    drawableStencilFormat(): cocoascript.GLKViewDrawableStencilFormat;
    setDrawableStencilFormat(): void;
    // doc://com.apple.documentation/documentation/glkit/glkview/1615601-drawablemultisample
    drawableMultisample(): cocoascript.GLKViewDrawableMultisample;
    setDrawableMultisample(): void;
    // doc://com.apple.documentation/documentation/glkit/glkview/1615559-drawableheight
    drawableHeight(): cocoascript.NSInteger;
    setDrawableHeight(): void;
    // doc://com.apple.documentation/documentation/glkit/glkview/1615591-drawablewidth
    drawableWidth(): cocoascript.NSInteger;
    setDrawableWidth(): void;
    // doc://com.apple.documentation/documentation/glkit/glkview/1615597-context
    context(): cocoascript.EAGLContext;
    setContext(): void;
    // doc://com.apple.documentation/documentation/glkit/glkview/1615593-binddrawable
    bindDrawable():void;
    // doc://com.apple.documentation/documentation/glkit/glkview/1615561-enablesetneedsdisplay
    enableSetNeedsDisplay(): cocoascript.BOOL;
    setEnableSetNeedsDisplay(): void;
    // doc://com.apple.documentation/documentation/glkit/glkview/1615571-display
    display():void;
    // doc://com.apple.documentation/documentation/glkit/glkview/1615562-snapshot
    snapshot(): cocoascript.UIImage;
    setSnapshot(): void;
    // doc://com.apple.documentation/documentation/glkit/glkview/1615569-deletedrawable
    deleteDrawable():void;
    //
    alloc():cocoascript.GLKView;
    //
    init():cocoascript.GLKView;
  }
}

declare const GLKView: cocoascript.GLKView;
declare namespace cocoascript {
  /**
   * A view controller that manages an OpenGL ES rendering loop.
   * doc://com.apple.documentation/documentation/glkit/glkviewcontroller
   */
  interface GLKViewController extends UIViewController {
    // doc://com.apple.documentation/documentation/glkit/glkviewcontroller/1620702-preferredframespersecond
    preferredFramesPerSecond(): cocoascript.NSInteger;
    setPreferredFramesPerSecond(): void;
    // doc://com.apple.documentation/documentation/glkit/glkviewcontroller/1620723-framespersecond
    framesPerSecond(): cocoascript.NSInteger;
    setFramesPerSecond(): void;
    // doc://com.apple.documentation/documentation/glkit/glkviewcontroller/1620711-delegate
    delegate(): cocoascript.GLKViewControllerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/glkit/glkviewcontroller/1620712-paused
    paused(): cocoascript.BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/glkit/glkviewcontroller/1620699-pauseonwillresignactive
    pauseOnWillResignActive(): cocoascript.BOOL;
    setPauseOnWillResignActive(): void;
    // doc://com.apple.documentation/documentation/glkit/glkviewcontroller/1620734-resumeondidbecomeactive
    resumeOnDidBecomeActive(): cocoascript.BOOL;
    setResumeOnDidBecomeActive(): void;
    // doc://com.apple.documentation/documentation/glkit/glkviewcontroller/1620790-framesdisplayed
    framesDisplayed(): cocoascript.NSInteger;
    setFramesDisplayed(): void;
    // doc://com.apple.documentation/documentation/glkit/glkviewcontroller/1620709-timesincefirstresume
    timeSinceFirstResume(): cocoascript.NSTimeInterval;
    setTimeSinceFirstResume(): void;
    // doc://com.apple.documentation/documentation/glkit/glkviewcontroller/1620706-timesincelastresume
    timeSinceLastResume(): cocoascript.NSTimeInterval;
    setTimeSinceLastResume(): void;
    // doc://com.apple.documentation/documentation/glkit/glkviewcontroller/1620726-timesincelastupdate
    timeSinceLastUpdate(): cocoascript.NSTimeInterval;
    setTimeSinceLastUpdate(): void;
    // doc://com.apple.documentation/documentation/glkit/glkviewcontroller/1620725-timesincelastdraw
    timeSinceLastDraw(): cocoascript.NSTimeInterval;
    setTimeSinceLastDraw(): void;
    //
    alloc():cocoascript.GLKViewController;
    //
    init():cocoascript.GLKViewController;
  }
}

declare const GLKViewController: cocoascript.GLKViewController;
declare namespace cocoascript {
  /**
   * Rendering loop callback methods for use with a
   * doc://com.apple.documentation/documentation/glkit/glkviewcontrollerdelegate
   */
  interface GLKViewControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/glkit/glkviewcontrollerdelegate/1620710-glkviewcontrollerupdate
    glkViewControllerUpdate(controller: cocoascript.GLKViewController):void;
    // doc://com.apple.documentation/documentation/glkit/glkviewcontrollerdelegate/1620776-glkviewcontroller
    glkViewController_willPause(controller: cocoascript.GLKViewController, pause: cocoascript.BOOL):void;
  }
}
declare namespace cocoascript {
  /**
   * Drawing callback methods for use with a
   * doc://com.apple.documentation/documentation/glkit/glkviewdelegate
   */
  interface GLKViewDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/glkit/glkviewdelegate/1615595-glkview
    glkView_drawInRect(view: cocoascript.GLKView, rect: cocoascript.CGRect):void;
  }
}
declare namespace cocoascript {
  /**
   * Information about OpenGL textures created by the
   * doc://com.apple.documentation/documentation/glkit/glktextureinfo
   */
  interface GLKTextureInfo extends NSObject {
    // doc://com.apple.documentation/documentation/glkit/glktextureinfo/1488763-name
    name(): any;
    setName(): void;
    // doc://com.apple.documentation/documentation/glkit/glktextureinfo/1489087-target
    target(): any;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/glkit/glktextureinfo/1488622-height
    height(): any;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/glkit/glktextureinfo/1489126-width
    width(): any;
    setWidth(): void;
    // doc://com.apple.documentation/documentation/glkit/glktextureinfo/1488624-textureorigin
    textureOrigin(): cocoascript.GLKTextureInfoOrigin;
    setTextureOrigin(): void;
    // doc://com.apple.documentation/documentation/glkit/glktextureinfo/1489050-alphastate
    alphaState(): cocoascript.GLKTextureInfoAlphaState;
    setAlphaState(): void;
    // doc://com.apple.documentation/documentation/glkit/glktextureinfo/1488618-containsmipmaps
    containsMipmaps(): cocoascript.BOOL;
    setContainsMipmaps(): void;
    // doc://com.apple.documentation/documentation/glkit/glktextureinfo/1639613-arraylength
    arrayLength(): any;
    setArrayLength(): void;
    // doc://com.apple.documentation/documentation/glkit/glktextureinfo/1639589-depth
    depth(): any;
    setDepth(): void;
    // doc://com.apple.documentation/documentation/glkit/glktextureinfo/1639598-mimaplevelcount
    mimapLevelCount(): any;
    setMimapLevelCount(): void;
    //
    alloc():cocoascript.GLKTextureInfo;
    //
    init():cocoascript.GLKTextureInfo;
  }
}

declare const GLKTextureInfo: cocoascript.GLKTextureInfo;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/glkviewdrawablecolorformat
  type GLKViewDrawableColorFormat = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/glkviewdrawabledepthformat
  type GLKViewDrawableDepthFormat = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/glkviewdrawablestencilformat
  type GLKViewDrawableStencilFormat = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/glkviewdrawablemultisample
  type GLKViewDrawableMultisample = any;
}
declare namespace cocoascript {
  /**
   * A utility class that simplifies loading OpenGL or OpenGL ES texture datas from a variety of image file formats.
   * doc://com.apple.documentation/documentation/glkit/glktextureloader
   */
  interface GLKTextureLoader extends NSObject {
    // doc://com.apple.documentation/documentation/glkit/glktextureloader/1620707-initwithsharegroup
    initWithSharegroup(sharegroup: cocoascript.EAGLSharegroup):cocoascript.GLKTextureLoader;
    // doc://com.apple.documentation/documentation/glkit/glktextureloader/1489085-initwithsharecontext
    initWithShareContext(context: cocoascript.NSOpenGLContext):cocoascript.GLKTextureLoader;
    // doc://com.apple.documentation/documentation/glkit/glktextureloader/1489064-texturewithcontentsoffile
    textureWithContentsOfFile_options_queue_completionHandler(path: cocoascript.NSString, options: cocoascript.NSNumber, queue: cocoascript.dispatch_queue_t, block: cocoascript.GLKTextureLoaderCallback):void;
    // doc://com.apple.documentation/documentation/glkit/glktextureloader/1488621-texturewithcontentsofurl
    textureWithContentsOfURL_options_queue_completionHandler(url: cocoascript.NSURL, options: cocoascript.NSNumber, queue: cocoascript.dispatch_queue_t, block: cocoascript.GLKTextureLoaderCallback):void;
    // doc://com.apple.documentation/documentation/glkit/glktextureloader/1488905-texturewithcontentsofdata
    textureWithContentsOfData_options_queue_completionHandler(data: cocoascript.NSData, options: cocoascript.NSNumber, queue: cocoascript.dispatch_queue_t, block: cocoascript.GLKTextureLoaderCallback):void;
    // doc://com.apple.documentation/documentation/glkit/glktextureloader/1488861-texturewithcgimage
    textureWithCGImage_options_queue_completionHandler(cgImage: cocoascript.CGImageRef, options: cocoascript.NSNumber, queue: cocoascript.dispatch_queue_t, block: cocoascript.GLKTextureLoaderCallback):void;
    // doc://com.apple.documentation/documentation/glkit/glktextureloader/1488617-cubemapwithcontentsoffile
    cubeMapWithContentsOfFile_options_queue_completionHandler(path: cocoascript.NSString, options: cocoascript.NSNumber, queue: cocoascript.dispatch_queue_t, block: cocoascript.GLKTextureLoaderCallback):void;
    // doc://com.apple.documentation/documentation/glkit/glktextureloader/1488854-cubemapwithcontentsoffiles
    cubeMapWithContentsOfFiles_options_queue_completionHandler(paths: cocoascript.GLKTextureLoader, options: cocoascript.NSNumber, queue: cocoascript.dispatch_queue_t, block: cocoascript.GLKTextureLoaderCallback):void;
    // doc://com.apple.documentation/documentation/glkit/glktextureloader/1488926-cubemapwithcontentsofurl
    cubeMapWithContentsOfURL_options_queue_completionHandler(url: cocoascript.NSURL, options: cocoascript.NSNumber, queue: cocoascript.dispatch_queue_t, block: cocoascript.GLKTextureLoaderCallback):void;
    // doc://com.apple.documentation/documentation/glkit/glktextureloader/1639591-texturewithname
    textureWithName_scaleFactor_bundle_options_queue_completionHandler(name: cocoascript.NSString, scaleFactor: cocoascript.CGFloat, bundle: cocoascript.NSBundle, options: cocoascript.NSNumber, queue: cocoascript.dispatch_queue_t, block: cocoascript.GLKTextureLoaderCallback):void;
    //
    alloc():cocoascript.GLKTextureLoader;
    //
    init():cocoascript.GLKTextureLoader;
  }
}

declare const GLKTextureLoader: cocoascript.GLKTextureLoader;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/glktextureinfoalphastate
  type GLKTextureInfoAlphaState = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/glktextureinfoorigin
  type GLKTextureInfoOrigin = any;
}
declare namespace cocoascript {
  /**
   * A simple lighting and shading system for use in shader-based OpenGL rendering.
   * doc://com.apple.documentation/documentation/glkit/glkbaseeffect
   */
  interface GLKBaseEffect extends NSObject {
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1488835-label
    label(): cocoascript.NSString;
    setLabel(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1489030-transform
    transform(): cocoascript.GLKEffectPropertyTransform;
    setTransform(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1489037-lightingtype
    lightingType(): cocoascript.GLKLightingType;
    setLightingType(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1489036-lightmodeltwosided
    lightModelTwoSided(): cocoascript.GLboolean;
    setLightModelTwoSided(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1488753-material
    material(): cocoascript.GLKEffectPropertyMaterial;
    setMaterial(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1489061-lightmodelambientcolor
    lightModelAmbientColor(): cocoascript.GLKVector4;
    setLightModelAmbientColor(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1488785-light0
    light0(): cocoascript.GLKEffectPropertyLight;
    setLight0(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1489095-light1
    light1(): cocoascript.GLKEffectPropertyLight;
    setLight1(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1488671-light2
    light2(): cocoascript.GLKEffectPropertyLight;
    setLight2(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1488664-texture2d0
    texture2d0(): cocoascript.GLKEffectPropertyTexture;
    setTexture2d0(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1488699-texture2d1
    texture2d1(): cocoascript.GLKEffectPropertyTexture;
    setTexture2d1(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1488830-textureorder
    textureOrder(): cocoascript.GLKEffectPropertyTexture;
    setTextureOrder(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1488697-fog
    fog(): cocoascript.GLKEffectPropertyFog;
    setFog(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1488710-colormaterialenabled
    colorMaterialEnabled(): cocoascript.GLboolean;
    setColorMaterialEnabled(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1488783-useconstantcolor
    useConstantColor(): cocoascript.GLboolean;
    setUseConstantColor(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1488903-constantcolor
    constantColor(): cocoascript.GLKVector4;
    setConstantColor(): void;
    // doc://com.apple.documentation/documentation/glkit/glkbaseeffect/1489101-preparetodraw
    prepareToDraw():void;
    //
    alloc():cocoascript.GLKBaseEffect;
    //
    init():cocoascript.GLKBaseEffect;
  }
}

declare const GLKBaseEffect: cocoascript.GLKBaseEffect;
declare namespace cocoascript {
  /**
   * A lighting and shading system that supports reflection mapping for use in shader-based OpenGL rendering.
   * doc://com.apple.documentation/documentation/glkit/glkreflectionmapeffect
   */
  interface GLKReflectionMapEffect extends GLKBaseEffect {
    // doc://com.apple.documentation/documentation/glkit/glkreflectionmapeffect/1415310-preparetodraw
    prepareToDraw():void;
    // doc://com.apple.documentation/documentation/glkit/glkreflectionmapeffect/1415312-texturecubemap
    textureCubeMap(): cocoascript.GLKEffectPropertyTexture;
    setTextureCubeMap(): void;
    // doc://com.apple.documentation/documentation/glkit/glkreflectionmapeffect/1415314-matrix
    matrix(): cocoascript.GLKMatrix3;
    setMatrix(): void;
    //
    alloc():cocoascript.GLKReflectionMapEffect;
    //
    init():cocoascript.GLKReflectionMapEffect;
  }
}

declare const GLKReflectionMapEffect: cocoascript.GLKReflectionMapEffect;
declare namespace cocoascript {
  /**
   * A simple skybox visual effect for use in shader-based OpenGL rendering.
   * doc://com.apple.documentation/documentation/glkit/glkskyboxeffect
   */
  interface GLKSkyboxEffect extends NSObject {
    // doc://com.apple.documentation/documentation/glkit/glkskyboxeffect/1489038-label
    label(): cocoascript.NSString;
    setLabel(): void;
    // doc://com.apple.documentation/documentation/glkit/glkskyboxeffect/1488887-preparetodraw
    prepareToDraw():void;
    // doc://com.apple.documentation/documentation/glkit/glkskyboxeffect/1488843-draw
    draw():void;
    // doc://com.apple.documentation/documentation/glkit/glkskyboxeffect/1488873-texturecubemap
    textureCubeMap(): cocoascript.GLKEffectPropertyTexture;
    setTextureCubeMap(): void;
    // doc://com.apple.documentation/documentation/glkit/glkskyboxeffect/1488839-center
    center(): cocoascript.GLKVector3;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/glkit/glkskyboxeffect/1488891-xsize
    xSize(): any;
    setXSize(): void;
    // doc://com.apple.documentation/documentation/glkit/glkskyboxeffect/1489024-ysize
    ySize(): any;
    setYSize(): void;
    // doc://com.apple.documentation/documentation/glkit/glkskyboxeffect/1488976-zsize
    zSize(): any;
    setZSize(): void;
    // doc://com.apple.documentation/documentation/glkit/glkskyboxeffect/1489015-transform
    transform(): cocoascript.GLKEffectPropertyTransform;
    setTransform(): void;
    //
    alloc():cocoascript.GLKSkyboxEffect;
    //
    init():cocoascript.GLKSkyboxEffect;
  }
}

declare const GLKSkyboxEffect: cocoascript.GLKSkyboxEffect;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/glkit/glkmesh
   */
  interface GLKMesh extends NSObject {
    // doc://com.apple.documentation/documentation/glkit/glkmesh/1488759-initwithmesh
    initWithMesh_error(mesh: cocoascript.MDLMesh, error: cocoascript.NSError):cocoascript.GLKMesh;
    // doc://com.apple.documentation/documentation/glkit/glkmesh/1489104-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/glkit/glkmesh/1489060-submeshes
    submeshes(): cocoascript.GLKSubmesh;
    setSubmeshes(): void;
    // doc://com.apple.documentation/documentation/glkit/glkmesh/1488688-vertexbuffers
    vertexBuffers(): cocoascript.GLKMeshBuffer;
    setVertexBuffers(): void;
    // doc://com.apple.documentation/documentation/glkit/glkmesh/1489043-vertexcount
    vertexCount(): cocoascript.NSUInteger;
    setVertexCount(): void;
    // doc://com.apple.documentation/documentation/glkit/glkmesh/1488990-vertexdescriptor
    vertexDescriptor(): cocoascript.MDLVertexDescriptor;
    setVertexDescriptor(): void;
    //
    alloc():cocoascript.GLKMesh;
    //
    init():cocoascript.GLKMesh;
  }
}

declare const GLKMesh: cocoascript.GLKMesh;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/glkit/glkmeshbuffer
   */
  interface GLKMeshBuffer extends NSObject {
    // doc://com.apple.documentation/documentation/glkit/glkmeshbuffer/1489083-allocator
    allocator(): cocoascript.GLKMeshBufferAllocator;
    setAllocator(): void;
    // doc://com.apple.documentation/documentation/glkit/glkmeshbuffer/1488636-glbuffername
    glBufferName(): any;
    setGlBufferName(): void;
    // doc://com.apple.documentation/documentation/glkit/glkmeshbuffer/1488631-length
    length(): cocoascript.NSUInteger;
    setLength(): void;
    // doc://com.apple.documentation/documentation/glkit/glkmeshbuffer/1488607-offset
    offset(): cocoascript.NSUInteger;
    setOffset(): void;
    // doc://com.apple.documentation/documentation/glkit/glkmeshbuffer/1488681-type
    type(): cocoascript.MDLMeshBufferType;
    setType(): void;
    // doc://com.apple.documentation/documentation/glkit/glkmeshbuffer/1538271-zone
    zone(): cocoascript.MDLMeshBufferZone;
    setZone(): void;
    //
    alloc():cocoascript.GLKMeshBuffer;
    //
    init():cocoascript.GLKMeshBuffer;
  }
}

declare const GLKMeshBuffer: cocoascript.GLKMeshBuffer;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/glkit/glkmeshbufferallocator
   */
  interface GLKMeshBufferAllocator extends NSObject {
    //
    alloc():cocoascript.GLKMeshBufferAllocator;
    //
    init():cocoascript.GLKMeshBufferAllocator;
  }
}

declare const GLKMeshBufferAllocator: cocoascript.GLKMeshBufferAllocator;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/glkit/glksubmesh
   */
  interface GLKSubmesh extends NSObject {
    // doc://com.apple.documentation/documentation/glkit/glksubmesh/1488972-elementbuffer
    elementBuffer(): cocoascript.GLKMeshBuffer;
    setElementBuffer(): void;
    // doc://com.apple.documentation/documentation/glkit/glksubmesh/1489103-elementcount
    elementCount(): any;
    setElementCount(): void;
    // doc://com.apple.documentation/documentation/glkit/glksubmesh/1489108-mesh
    mesh(): cocoascript.GLKMesh;
    setMesh(): void;
    // doc://com.apple.documentation/documentation/glkit/glksubmesh/1488690-mode
    mode(): any;
    setMode(): void;
    // doc://com.apple.documentation/documentation/glkit/glksubmesh/1488724-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/glkit/glksubmesh/1489072-type
    type(): any;
    setType(): void;
    //
    alloc():cocoascript.GLKSubmesh;
    //
    init():cocoascript.GLKSubmesh;
  }
}

declare const GLKSubmesh: cocoascript.GLKSubmesh;
declare namespace cocoascript {
  /**
   * A standard interface for objects that provide shader-based OpenGL rendering effects.
   * doc://com.apple.documentation/documentation/glkit/glknamedeffect
   */
  interface GLKNamedEffect {
    // doc://com.apple.documentation/documentation/glkit/glknamedeffect/1459375-preparetodraw
    prepareToDraw():void;
  }
}
declare namespace cocoascript {
  /**
   * The abstract superclass for configuration information used in GLKit rendering effects.
   * doc://com.apple.documentation/documentation/glkit/glkeffectproperty
   */
  interface GLKEffectProperty extends NSObject {
    //
    alloc():cocoascript.GLKEffectProperty;
    //
    init():cocoascript.GLKEffectProperty;
  }
}

declare const GLKEffectProperty: cocoascript.GLKEffectProperty;
declare namespace cocoascript {
  /**
   * Fog drawing information for use in GLKit rendering effects.
   * doc://com.apple.documentation/documentation/glkit/glkeffectpropertyfog
   */
  interface GLKEffectPropertyFog extends GLKEffectProperty {
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertyfog/1429941-enabled
    enabled(): cocoascript.GLboolean;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertyfog/1429943-mode
    mode(): any;
    setMode(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertyfog/1429938-color
    color(): cocoascript.GLKVector4;
    setColor(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertyfog/1429947-density
    density(): any;
    setDensity(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertyfog/1429936-start
    start(): any;
    setStart(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertyfog/1429949-end
    end(): any;
    setEnd(): void;
    //
    alloc():cocoascript.GLKEffectPropertyFog;
    //
    init():cocoascript.GLKEffectPropertyFog;
  }
}

declare const GLKEffectPropertyFog: cocoascript.GLKEffectPropertyFog;
declare namespace cocoascript {
  /**
   * Lighting information for use in GLKit rendering effects.
   * doc://com.apple.documentation/documentation/glkit/glkeffectpropertylight
   */
  interface GLKEffectPropertyLight extends GLKEffectProperty {
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertylight/1473558-enabled
    enabled(): cocoascript.GLboolean;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertylight/1473576-position
    position(): cocoascript.GLKVector4;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertylight/1473568-transform
    transform(): cocoascript.GLKEffectPropertyTransform;
    setTransform(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertylight/1473564-ambientcolor
    ambientColor(): cocoascript.GLKVector4;
    setAmbientColor(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertylight/1473560-diffusecolor
    diffuseColor(): cocoascript.GLKVector4;
    setDiffuseColor(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertylight/1473562-specularcolor
    specularColor(): cocoascript.GLKVector4;
    setSpecularColor(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertylight/1473574-constantattenuation
    constantAttenuation(): any;
    setConstantAttenuation(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertylight/1473549-linearattenuation
    linearAttenuation(): any;
    setLinearAttenuation(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertylight/1473578-quadraticattenuation
    quadraticAttenuation(): any;
    setQuadraticAttenuation(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertylight/1473572-spotcutoff
    spotCutoff(): any;
    setSpotCutoff(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertylight/1473547-spotdirection
    spotDirection(): cocoascript.GLKVector3;
    setSpotDirection(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertylight/1473551-spotexponent
    spotExponent(): any;
    setSpotExponent(): void;
    //
    alloc():cocoascript.GLKEffectPropertyLight;
    //
    init():cocoascript.GLKEffectPropertyLight;
  }
}

declare const GLKEffectPropertyLight: cocoascript.GLKEffectPropertyLight;
declare namespace cocoascript {
  /**
   * Texture drawing parameters for use in GLKit rendering effects.
   * doc://com.apple.documentation/documentation/glkit/glkeffectpropertytexture
   */
  interface GLKEffectPropertyTexture extends GLKEffectProperty {
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertytexture/1488708-enabled
    enabled(): cocoascript.GLboolean;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertytexture/1488986-envmode
    envMode(): cocoascript.GLKTextureEnvMode;
    setEnvMode(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertytexture/1488884-name
    name(): any;
    setName(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertytexture/1488852-target
    target(): cocoascript.GLKTextureTarget;
    setTarget(): void;
    //
    alloc():cocoascript.GLKEffectPropertyTexture;
    //
    init():cocoascript.GLKEffectPropertyTexture;
  }
}

declare const GLKEffectPropertyTexture: cocoascript.GLKEffectPropertyTexture;
declare namespace cocoascript {
  /**
   * Surface appearance properties for use in GLKit rendering effects.
   * doc://com.apple.documentation/documentation/glkit/glkeffectpropertymaterial
   */
  interface GLKEffectPropertyMaterial extends GLKEffectProperty {
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertymaterial/1409844-ambientcolor
    ambientColor(): cocoascript.GLKVector4;
    setAmbientColor(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertymaterial/1409843-diffusecolor
    diffuseColor(): cocoascript.GLKVector4;
    setDiffuseColor(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertymaterial/1409839-emissivecolor
    emissiveColor(): cocoascript.GLKVector4;
    setEmissiveColor(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertymaterial/1409837-shininess
    shininess(): any;
    setShininess(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertymaterial/1409841-specularcolor
    specularColor(): cocoascript.GLKVector4;
    setSpecularColor(): void;
    //
    alloc():cocoascript.GLKEffectPropertyMaterial;
    //
    init():cocoascript.GLKEffectPropertyMaterial;
  }
}

declare const GLKEffectPropertyMaterial: cocoascript.GLKEffectPropertyMaterial;
declare namespace cocoascript {
  /**
   * Coordinate transform information for use in GLKit rendering effects.
   * doc://com.apple.documentation/documentation/glkit/glkeffectpropertytransform
   */
  interface GLKEffectPropertyTransform extends GLKEffectProperty {
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertytransform/1489097-modelviewmatrix
    modelviewMatrix(): cocoascript.GLKMatrix4;
    setModelviewMatrix(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertytransform/1488648-normalmatrix
    normalMatrix(): cocoascript.GLKMatrix3;
    setNormalMatrix(): void;
    // doc://com.apple.documentation/documentation/glkit/glkeffectpropertytransform/1489114-projectionmatrix
    projectionMatrix(): cocoascript.GLKMatrix4;
    setProjectionMatrix(): void;
    //
    alloc():cocoascript.GLKEffectPropertyTransform;
    //
    init():cocoascript.GLKEffectPropertyTransform;
  }
}

declare const GLKEffectPropertyTransform: cocoascript.GLKEffectPropertyTransform;
declare namespace cocoascript {
  interface GLKMatrixStackRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/glktextureloadercallback
  type GLKTextureLoaderCallback = cocoascript.NSError;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/glktextureloadererror
  type GLKTextureLoaderError = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/glklightingtype
  type GLKLightingType = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/glkfogmode
  type GLKFogMode = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/glktextureenvmode
  type GLKTextureEnvMode = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/glktexturetarget
  type GLKTextureTarget = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/glkvertexattrib
  type GLKVertexAttrib = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/1462423-glkmatrix2
  type GLKMatrix2 = cocoascript.union;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/1462419-glkmatrix3
  type GLKMatrix3 = cocoascript.union;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/1462441-glkmatrix4
  type GLKMatrix4 = cocoascript.union;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/1462421-glkvector2
  type GLKVector2 = cocoascript.union;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/1462425-glkvector3
  type GLKVector3 = cocoascript.union;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/1462431-glkvector4
  type GLKVector4 = cocoascript.union;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/glkit/1462435-glkquaternion
  type GLKQuaternion = cocoascript.union;
}
declare namespace cocoascript {
  interface GLKVertexAttributeParameters {
  }
}
// doc://com.apple.documentation/documentation/glkit/glkmatrix3identity
declare const GLKMatrix3Identity: cocoascript.GLKMatrix3;
// doc://com.apple.documentation/documentation/glkit/glkmatrix4identity
declare const GLKMatrix4Identity: cocoascript.GLKMatrix4;
// doc://com.apple.documentation/documentation/glkit/glkquaternionidentity
declare const GLKQuaternionIdentity: cocoascript.GLKQuaternion;
