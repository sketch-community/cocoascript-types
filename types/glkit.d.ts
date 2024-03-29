declare namespace cocoascript {
  /**
   * A default implementation for views that draw their content using OpenGL ES.
   * https://developer.apple.com/documentation/glkit/glkview
   */
  interface GLKView extends UIView {
    // https://developer.apple.com/documentation/glkit/glkview/1615609-initwithframe
    initWithFrame_context(frame: CGRect, context: EAGLContext):GLKView;
    // https://developer.apple.com/documentation/glkit/glkview/1615557-delegate
    delegate(): GLKViewDelegate;
    setDelegate(value: GLKViewDelegate): void;
    // https://developer.apple.com/documentation/glkit/glkview/1615587-drawablecolorformat
    drawableColorFormat(): GLKViewDrawableColorFormat;
    setDrawableColorFormat(value: GLKViewDrawableColorFormat): void;
    // https://developer.apple.com/documentation/glkit/glkview/1615583-drawabledepthformat
    drawableDepthFormat(): GLKViewDrawableDepthFormat;
    setDrawableDepthFormat(value: GLKViewDrawableDepthFormat): void;
    // https://developer.apple.com/documentation/glkit/glkview/1615605-drawablestencilformat
    drawableStencilFormat(): GLKViewDrawableStencilFormat;
    setDrawableStencilFormat(value: GLKViewDrawableStencilFormat): void;
    // https://developer.apple.com/documentation/glkit/glkview/1615601-drawablemultisample
    drawableMultisample(): GLKViewDrawableMultisample;
    setDrawableMultisample(value: GLKViewDrawableMultisample): void;
    // https://developer.apple.com/documentation/glkit/glkview/1615559-drawableheight
    drawableHeight(): NSInteger;
    setDrawableHeight(value: NSInteger): void;
    // https://developer.apple.com/documentation/glkit/glkview/1615591-drawablewidth
    drawableWidth(): NSInteger;
    setDrawableWidth(value: NSInteger): void;
    // https://developer.apple.com/documentation/glkit/glkview/1615597-context
    context(): EAGLContext;
    setContext(value: EAGLContext): void;
    // https://developer.apple.com/documentation/glkit/glkview/1615593-binddrawable
    bindDrawable():void;
    // https://developer.apple.com/documentation/glkit/glkview/1615561-enablesetneedsdisplay
    enableSetNeedsDisplay(): boolean;
    setEnableSetNeedsDisplay(value: boolean): void;
    // https://developer.apple.com/documentation/glkit/glkview/1615571-display
    display():void;
    // https://developer.apple.com/documentation/glkit/glkview/1615562-snapshot
    snapshot(): UIImage;
    setSnapshot(value: UIImage): void;
    // https://developer.apple.com/documentation/glkit/glkview/1615569-deletedrawable
    deleteDrawable():void;
    //
    alloc():GLKView;
    //
    init():GLKView;
  }
}

declare const GLKView: cocoascript.GLKView;
declare namespace cocoascript {
  /**
   * A view controller that manages an OpenGL ES rendering loop.
   * https://developer.apple.com/documentation/glkit/glkviewcontroller
   */
  interface GLKViewController extends UIViewController {
    // https://developer.apple.com/documentation/glkit/glkviewcontroller/1620702-preferredframespersecond
    preferredFramesPerSecond(): NSInteger;
    setPreferredFramesPerSecond(value: NSInteger): void;
    // https://developer.apple.com/documentation/glkit/glkviewcontroller/1620723-framespersecond
    framesPerSecond(): NSInteger;
    setFramesPerSecond(value: NSInteger): void;
    // https://developer.apple.com/documentation/glkit/glkviewcontroller/1620711-delegate
    delegate(): GLKViewControllerDelegate;
    setDelegate(value: GLKViewControllerDelegate): void;
    // https://developer.apple.com/documentation/glkit/glkviewcontroller/1620712-paused
    paused(): boolean;
    setPaused(value: boolean): void;
    // https://developer.apple.com/documentation/glkit/glkviewcontroller/1620699-pauseonwillresignactive
    pauseOnWillResignActive(): boolean;
    setPauseOnWillResignActive(value: boolean): void;
    // https://developer.apple.com/documentation/glkit/glkviewcontroller/1620734-resumeondidbecomeactive
    resumeOnDidBecomeActive(): boolean;
    setResumeOnDidBecomeActive(value: boolean): void;
    // https://developer.apple.com/documentation/glkit/glkviewcontroller/1620790-framesdisplayed
    framesDisplayed(): NSInteger;
    setFramesDisplayed(value: NSInteger): void;
    // https://developer.apple.com/documentation/glkit/glkviewcontroller/1620709-timesincefirstresume
    timeSinceFirstResume(): NSTimeInterval;
    setTimeSinceFirstResume(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/glkit/glkviewcontroller/1620706-timesincelastresume
    timeSinceLastResume(): NSTimeInterval;
    setTimeSinceLastResume(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/glkit/glkviewcontroller/1620726-timesincelastupdate
    timeSinceLastUpdate(): NSTimeInterval;
    setTimeSinceLastUpdate(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/glkit/glkviewcontroller/1620725-timesincelastdraw
    timeSinceLastDraw(): NSTimeInterval;
    setTimeSinceLastDraw(value: NSTimeInterval): void;
    //
    alloc():GLKViewController;
    //
    init():GLKViewController;
  }
}

declare const GLKViewController: cocoascript.GLKViewController;
declare namespace cocoascript {
  /**
   * Rendering loop callback methods for use with a
   * https://developer.apple.com/documentation/glkit/glkviewcontrollerdelegate
   */
  interface GLKViewControllerDelegate extends NSObject {
    // https://developer.apple.com/documentation/glkit/glkviewcontrollerdelegate/1620710-glkviewcontrollerupdate
    glkViewControllerUpdate(controller: GLKViewController):void;
    // https://developer.apple.com/documentation/glkit/glkviewcontrollerdelegate/1620776-glkviewcontroller
    glkViewController_willPause(controller: GLKViewController, pause: boolean):void;
  }
}
declare namespace cocoascript {
  /**
   * Drawing callback methods for use with a
   * https://developer.apple.com/documentation/glkit/glkviewdelegate
   */
  interface GLKViewDelegate extends NSObject {
    // https://developer.apple.com/documentation/glkit/glkviewdelegate/1615595-glkview
    glkView_drawInRect(view: GLKView, rect: CGRect):void;
  }
}
declare namespace cocoascript {
  /**
   * Information about OpenGL textures created by the
   * https://developer.apple.com/documentation/glkit/glktextureinfo
   */
  interface GLKTextureInfo extends NSObject {
    // https://developer.apple.com/documentation/glkit/glktextureinfo/1488763-name
    name(): any;
    setName(value: any): void;
    // https://developer.apple.com/documentation/glkit/glktextureinfo/1489087-target
    target(): any;
    setTarget(value: any): void;
    // https://developer.apple.com/documentation/glkit/glktextureinfo/1488622-height
    height(): any;
    setHeight(value: any): void;
    // https://developer.apple.com/documentation/glkit/glktextureinfo/1489126-width
    width(): any;
    setWidth(value: any): void;
    // https://developer.apple.com/documentation/glkit/glktextureinfo/1488624-textureorigin
    textureOrigin(): GLKTextureInfoOrigin;
    setTextureOrigin(value: GLKTextureInfoOrigin): void;
    // https://developer.apple.com/documentation/glkit/glktextureinfo/1489050-alphastate
    alphaState(): GLKTextureInfoAlphaState;
    setAlphaState(value: GLKTextureInfoAlphaState): void;
    // https://developer.apple.com/documentation/glkit/glktextureinfo/1488618-containsmipmaps
    containsMipmaps(): boolean;
    setContainsMipmaps(value: boolean): void;
    // https://developer.apple.com/documentation/glkit/glktextureinfo/1639613-arraylength
    arrayLength(): any;
    setArrayLength(value: any): void;
    // https://developer.apple.com/documentation/glkit/glktextureinfo/1639589-depth
    depth(): any;
    setDepth(value: any): void;
    // https://developer.apple.com/documentation/glkit/glktextureinfo/1639598-mimaplevelcount
    mimapLevelCount(): any;
    setMimapLevelCount(value: any): void;
    //
    alloc():GLKTextureInfo;
    //
    init():GLKTextureInfo;
  }
}

declare const GLKTextureInfo: cocoascript.GLKTextureInfo;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/glkviewdrawablecolorformat
  type GLKViewDrawableColorFormat = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/glkviewdrawabledepthformat
  type GLKViewDrawableDepthFormat = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/glkviewdrawablestencilformat
  type GLKViewDrawableStencilFormat = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/glkviewdrawablemultisample
  type GLKViewDrawableMultisample = any;
}
declare namespace cocoascript {
  /**
   * A utility class that simplifies loading OpenGL or OpenGL ES texture datas from a variety of image file formats.
   * https://developer.apple.com/documentation/glkit/glktextureloader
   */
  interface GLKTextureLoader extends NSObject {
    // https://developer.apple.com/documentation/glkit/glktextureloader/1620707-initwithsharegroup
    initWithSharegroup(sharegroup: EAGLSharegroup):GLKTextureLoader;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1489085-initwithsharecontext
    initWithShareContext(context: NSOpenGLContext):GLKTextureLoader;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1488932-texturewithcontentsoffile
    textureWithContentsOfFile_options_error(path: string | cocoascript.NSString, options: NSNumber, outError: NSError):GLKTextureInfo;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1489064-texturewithcontentsoffile
    textureWithContentsOfFile_options_queue_completionHandler(path: string | cocoascript.NSString, options: NSNumber, queue: dispatch_queue_t, block: GLKTextureLoaderCallback):void;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1489025-texturewithcontentsofurl
    textureWithContentsOfURL_options_error(url: NSURL, options: NSNumber, outError: NSError):GLKTextureInfo;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1488621-texturewithcontentsofurl
    textureWithContentsOfURL_options_queue_completionHandler(url: NSURL, options: NSNumber, queue: dispatch_queue_t, block: GLKTextureLoaderCallback):void;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1489081-texturewithcontentsofdata
    textureWithContentsOfData_options_error(data: NSData, options: NSNumber, outError: NSError):GLKTextureInfo;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1488905-texturewithcontentsofdata
    textureWithContentsOfData_options_queue_completionHandler(data: NSData, options: NSNumber, queue: dispatch_queue_t, block: GLKTextureLoaderCallback):void;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1488673-texturewithcgimage
    textureWithCGImage_options_error(cgImage: CGImageRef, options: NSNumber, outError: NSError):GLKTextureInfo;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1488861-texturewithcgimage
    textureWithCGImage_options_queue_completionHandler(cgImage: CGImageRef, options: NSNumber, queue: dispatch_queue_t, block: GLKTextureLoaderCallback):void;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1488848-cubemapwithcontentsoffile
    cubeMapWithContentsOfFile_options_error(path: string | cocoascript.NSString, options: NSNumber, outError: NSError):GLKTextureInfo;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1488617-cubemapwithcontentsoffile
    cubeMapWithContentsOfFile_options_queue_completionHandler(path: string | cocoascript.NSString, options: NSNumber, queue: dispatch_queue_t, block: GLKTextureLoaderCallback):void;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1488810-cubemapwithcontentsoffiles
    cubeMapWithContentsOfFiles_options_error(paths: GLKTextureLoader, options: NSNumber, outError: NSError):GLKTextureInfo;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1488854-cubemapwithcontentsoffiles
    cubeMapWithContentsOfFiles_options_queue_completionHandler(paths: GLKTextureLoader, options: NSNumber, queue: dispatch_queue_t, block: GLKTextureLoaderCallback):void;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1488743-cubemapwithcontentsofurl
    cubeMapWithContentsOfURL_options_error(url: NSURL, options: NSNumber, outError: NSError):GLKTextureInfo;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1488926-cubemapwithcontentsofurl
    cubeMapWithContentsOfURL_options_queue_completionHandler(url: NSURL, options: NSNumber, queue: dispatch_queue_t, block: GLKTextureLoaderCallback):void;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1639591-texturewithname
    textureWithName_scaleFactor_bundle_options_queue_completionHandler(name: string | cocoascript.NSString, scaleFactor: CGFloat, bundle: NSBundle, options: NSNumber, queue: dispatch_queue_t, block: GLKTextureLoaderCallback):void;
    // https://developer.apple.com/documentation/glkit/glktextureloader/1639590-texturewithname
    textureWithName_scaleFactor_bundle_options_error(name: string | cocoascript.NSString, scaleFactor: CGFloat, bundle: NSBundle, options: NSNumber, outError: NSError):GLKTextureInfo;
    //
    alloc():GLKTextureLoader;
    //
    init():GLKTextureLoader;
  }
}

declare const GLKTextureLoader: cocoascript.GLKTextureLoader;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/glktextureinfoalphastate
  type GLKTextureInfoAlphaState = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/glktextureinfoorigin
  type GLKTextureInfoOrigin = any;
}
declare namespace cocoascript {
  /**
   * A simple lighting and shading system for use in shader-based OpenGL rendering.
   * https://developer.apple.com/documentation/glkit/glkbaseeffect
   */
  interface GLKBaseEffect extends NSObject {
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1488835-label
    label(): string | cocoascript.NSString;
    setLabel(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1489030-transform
    transform(): GLKEffectPropertyTransform;
    setTransform(value: GLKEffectPropertyTransform): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1489037-lightingtype
    lightingType(): GLKLightingType;
    setLightingType(value: GLKLightingType): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1489036-lightmodeltwosided
    lightModelTwoSided(): GLboolean;
    setLightModelTwoSided(value: GLboolean): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1488753-material
    material(): GLKEffectPropertyMaterial;
    setMaterial(value: GLKEffectPropertyMaterial): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1489061-lightmodelambientcolor
    lightModelAmbientColor(): GLKVector4;
    setLightModelAmbientColor(value: GLKVector4): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1488785-light0
    light0(): GLKEffectPropertyLight;
    setLight0(value: GLKEffectPropertyLight): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1489095-light1
    light1(): GLKEffectPropertyLight;
    setLight1(value: GLKEffectPropertyLight): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1488671-light2
    light2(): GLKEffectPropertyLight;
    setLight2(value: GLKEffectPropertyLight): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1488664-texture2d0
    texture2d0(): GLKEffectPropertyTexture;
    setTexture2d0(value: GLKEffectPropertyTexture): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1488699-texture2d1
    texture2d1(): GLKEffectPropertyTexture;
    setTexture2d1(value: GLKEffectPropertyTexture): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1488830-textureorder
    textureOrder(): GLKEffectPropertyTexture;
    setTextureOrder(value: GLKEffectPropertyTexture): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1488697-fog
    fog(): GLKEffectPropertyFog;
    setFog(value: GLKEffectPropertyFog): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1488710-colormaterialenabled
    colorMaterialEnabled(): GLboolean;
    setColorMaterialEnabled(value: GLboolean): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1488783-useconstantcolor
    useConstantColor(): GLboolean;
    setUseConstantColor(value: GLboolean): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1488903-constantcolor
    constantColor(): GLKVector4;
    setConstantColor(value: GLKVector4): void;
    // https://developer.apple.com/documentation/glkit/glkbaseeffect/1489101-preparetodraw
    prepareToDraw():void;
    //
    alloc():GLKBaseEffect;
    //
    init():GLKBaseEffect;
  }
}

declare const GLKBaseEffect: cocoascript.GLKBaseEffect;
declare namespace cocoascript {
  /**
   * A lighting and shading system that supports reflection mapping for use in shader-based OpenGL rendering.
   * https://developer.apple.com/documentation/glkit/glkreflectionmapeffect
   */
  interface GLKReflectionMapEffect extends GLKBaseEffect {
    // https://developer.apple.com/documentation/glkit/glkreflectionmapeffect/1415310-preparetodraw
    prepareToDraw():void;
    // https://developer.apple.com/documentation/glkit/glkreflectionmapeffect/1415312-texturecubemap
    textureCubeMap(): GLKEffectPropertyTexture;
    setTextureCubeMap(value: GLKEffectPropertyTexture): void;
    // https://developer.apple.com/documentation/glkit/glkreflectionmapeffect/1415314-matrix
    matrix(): GLKMatrix3;
    setMatrix(value: GLKMatrix3): void;
    //
    alloc():GLKReflectionMapEffect;
    //
    init():GLKReflectionMapEffect;
  }
}

declare const GLKReflectionMapEffect: cocoascript.GLKReflectionMapEffect;
declare namespace cocoascript {
  /**
   * A simple skybox visual effect for use in shader-based OpenGL rendering.
   * https://developer.apple.com/documentation/glkit/glkskyboxeffect
   */
  interface GLKSkyboxEffect extends NSObject {
    // https://developer.apple.com/documentation/glkit/glkskyboxeffect/1489038-label
    label(): string | cocoascript.NSString;
    setLabel(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/glkit/glkskyboxeffect/1488887-preparetodraw
    prepareToDraw():void;
    // https://developer.apple.com/documentation/glkit/glkskyboxeffect/1488843-draw
    draw():void;
    // https://developer.apple.com/documentation/glkit/glkskyboxeffect/1488873-texturecubemap
    textureCubeMap(): GLKEffectPropertyTexture;
    setTextureCubeMap(value: GLKEffectPropertyTexture): void;
    // https://developer.apple.com/documentation/glkit/glkskyboxeffect/1488839-center
    center(): GLKVector3;
    setCenter(value: GLKVector3): void;
    // https://developer.apple.com/documentation/glkit/glkskyboxeffect/1488891-xsize
    xSize(): any;
    setXSize(value: any): void;
    // https://developer.apple.com/documentation/glkit/glkskyboxeffect/1489024-ysize
    ySize(): any;
    setYSize(value: any): void;
    // https://developer.apple.com/documentation/glkit/glkskyboxeffect/1488976-zsize
    zSize(): any;
    setZSize(value: any): void;
    // https://developer.apple.com/documentation/glkit/glkskyboxeffect/1489015-transform
    transform(): GLKEffectPropertyTransform;
    setTransform(value: GLKEffectPropertyTransform): void;
    //
    alloc():GLKSkyboxEffect;
    //
    init():GLKSkyboxEffect;
  }
}

declare const GLKSkyboxEffect: cocoascript.GLKSkyboxEffect;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/glkit/glkmesh
   */
  interface GLKMesh extends NSObject {
    // https://developer.apple.com/documentation/glkit/glkmesh/1488759-initwithmesh
    initWithMesh_error(mesh: MDLMesh, error: NSError):GLKMesh;
    // https://developer.apple.com/documentation/glkit/glkmesh/1489104-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/glkit/glkmesh/1489060-submeshes
    submeshes(): GLKSubmesh;
    setSubmeshes(value: GLKSubmesh): void;
    // https://developer.apple.com/documentation/glkit/glkmesh/1488688-vertexbuffers
    vertexBuffers(): GLKMeshBuffer;
    setVertexBuffers(value: GLKMeshBuffer): void;
    // https://developer.apple.com/documentation/glkit/glkmesh/1489043-vertexcount
    vertexCount(): NSUInteger;
    setVertexCount(value: NSUInteger): void;
    // https://developer.apple.com/documentation/glkit/glkmesh/1488990-vertexdescriptor
    vertexDescriptor(): MDLVertexDescriptor;
    setVertexDescriptor(value: MDLVertexDescriptor): void;
    // https://developer.apple.com/documentation/glkit/glkmesh/1488791-newmeshesfromasset
    newMeshesFromAsset_sourceMeshes_error(asset: MDLAsset, sourceMeshes: MDLMesh, error: NSError):GLKMesh;
    //
    alloc():GLKMesh;
    //
    init():GLKMesh;
  }
}

declare const GLKMesh: cocoascript.GLKMesh;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/glkit/glkmeshbuffer
   */
  interface GLKMeshBuffer extends NSObject {
    // https://developer.apple.com/documentation/glkit/glkmeshbuffer/1489083-allocator
    allocator(): GLKMeshBufferAllocator;
    setAllocator(value: GLKMeshBufferAllocator): void;
    // https://developer.apple.com/documentation/glkit/glkmeshbuffer/1488636-glbuffername
    glBufferName(): any;
    setGlBufferName(value: any): void;
    // https://developer.apple.com/documentation/glkit/glkmeshbuffer/1488631-length
    length(): NSUInteger;
    setLength(value: NSUInteger): void;
    // https://developer.apple.com/documentation/glkit/glkmeshbuffer/1488607-offset
    offset(): NSUInteger;
    setOffset(value: NSUInteger): void;
    // https://developer.apple.com/documentation/glkit/glkmeshbuffer/1488681-type
    type(): MDLMeshBufferType;
    setType(value: MDLMeshBufferType): void;
    // https://developer.apple.com/documentation/glkit/glkmeshbuffer/1538271-zone
    zone(): MDLMeshBufferZone;
    setZone(value: MDLMeshBufferZone): void;
    //
    alloc():GLKMeshBuffer;
    //
    init():GLKMeshBuffer;
  }
}

declare const GLKMeshBuffer: cocoascript.GLKMeshBuffer;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/glkit/glkmeshbufferallocator
   */
  interface GLKMeshBufferAllocator extends NSObject {
    //
    alloc():GLKMeshBufferAllocator;
    //
    init():GLKMeshBufferAllocator;
  }
}

declare const GLKMeshBufferAllocator: cocoascript.GLKMeshBufferAllocator;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/glkit/glksubmesh
   */
  interface GLKSubmesh extends NSObject {
    // https://developer.apple.com/documentation/glkit/glksubmesh/1488972-elementbuffer
    elementBuffer(): GLKMeshBuffer;
    setElementBuffer(value: GLKMeshBuffer): void;
    // https://developer.apple.com/documentation/glkit/glksubmesh/1489103-elementcount
    elementCount(): any;
    setElementCount(value: any): void;
    // https://developer.apple.com/documentation/glkit/glksubmesh/1489108-mesh
    mesh(): GLKMesh;
    setMesh(value: GLKMesh): void;
    // https://developer.apple.com/documentation/glkit/glksubmesh/1488690-mode
    mode(): any;
    setMode(value: any): void;
    // https://developer.apple.com/documentation/glkit/glksubmesh/1488724-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/glkit/glksubmesh/1489072-type
    type(): any;
    setType(value: any): void;
    //
    alloc():GLKSubmesh;
    //
    init():GLKSubmesh;
  }
}

declare const GLKSubmesh: cocoascript.GLKSubmesh;
declare namespace cocoascript {
  /**
   * A standard interface for objects that provide shader-based OpenGL rendering effects.
   * https://developer.apple.com/documentation/glkit/glknamedeffect
   */
  interface GLKNamedEffect {
    // https://developer.apple.com/documentation/glkit/glknamedeffect/1459375-preparetodraw
    prepareToDraw():void;
  }
}
declare namespace cocoascript {
  /**
   * The abstract superclass for configuration information used in GLKit rendering effects.
   * https://developer.apple.com/documentation/glkit/glkeffectproperty
   */
  interface GLKEffectProperty extends NSObject {
    //
    alloc():GLKEffectProperty;
    //
    init():GLKEffectProperty;
  }
}

declare const GLKEffectProperty: cocoascript.GLKEffectProperty;
declare namespace cocoascript {
  /**
   * Fog drawing information for use in GLKit rendering effects.
   * https://developer.apple.com/documentation/glkit/glkeffectpropertyfog
   */
  interface GLKEffectPropertyFog extends GLKEffectProperty {
    // https://developer.apple.com/documentation/glkit/glkeffectpropertyfog/1429941-enabled
    enabled(): GLboolean;
    setEnabled(value: GLboolean): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertyfog/1429943-mode
    mode(): any;
    setMode(value: any): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertyfog/1429938-color
    color(): GLKVector4;
    setColor(value: GLKVector4): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertyfog/1429947-density
    density(): any;
    setDensity(value: any): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertyfog/1429936-start
    start(): any;
    setStart(value: any): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertyfog/1429949-end
    end(): any;
    setEnd(value: any): void;
    //
    alloc():GLKEffectPropertyFog;
    //
    init():GLKEffectPropertyFog;
  }
}

declare const GLKEffectPropertyFog: cocoascript.GLKEffectPropertyFog;
declare namespace cocoascript {
  /**
   * Lighting information for use in GLKit rendering effects.
   * https://developer.apple.com/documentation/glkit/glkeffectpropertylight
   */
  interface GLKEffectPropertyLight extends GLKEffectProperty {
    // https://developer.apple.com/documentation/glkit/glkeffectpropertylight/1473558-enabled
    enabled(): GLboolean;
    setEnabled(value: GLboolean): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertylight/1473576-position
    position(): GLKVector4;
    setPosition(value: GLKVector4): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertylight/1473568-transform
    transform(): GLKEffectPropertyTransform;
    setTransform(value: GLKEffectPropertyTransform): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertylight/1473564-ambientcolor
    ambientColor(): GLKVector4;
    setAmbientColor(value: GLKVector4): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertylight/1473560-diffusecolor
    diffuseColor(): GLKVector4;
    setDiffuseColor(value: GLKVector4): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertylight/1473562-specularcolor
    specularColor(): GLKVector4;
    setSpecularColor(value: GLKVector4): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertylight/1473574-constantattenuation
    constantAttenuation(): any;
    setConstantAttenuation(value: any): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertylight/1473549-linearattenuation
    linearAttenuation(): any;
    setLinearAttenuation(value: any): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertylight/1473578-quadraticattenuation
    quadraticAttenuation(): any;
    setQuadraticAttenuation(value: any): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertylight/1473572-spotcutoff
    spotCutoff(): any;
    setSpotCutoff(value: any): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertylight/1473547-spotdirection
    spotDirection(): GLKVector3;
    setSpotDirection(value: GLKVector3): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertylight/1473551-spotexponent
    spotExponent(): any;
    setSpotExponent(value: any): void;
    //
    alloc():GLKEffectPropertyLight;
    //
    init():GLKEffectPropertyLight;
  }
}

declare const GLKEffectPropertyLight: cocoascript.GLKEffectPropertyLight;
declare namespace cocoascript {
  /**
   * Texture drawing parameters for use in GLKit rendering effects.
   * https://developer.apple.com/documentation/glkit/glkeffectpropertytexture
   */
  interface GLKEffectPropertyTexture extends GLKEffectProperty {
    // https://developer.apple.com/documentation/glkit/glkeffectpropertytexture/1488708-enabled
    enabled(): GLboolean;
    setEnabled(value: GLboolean): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertytexture/1488986-envmode
    envMode(): GLKTextureEnvMode;
    setEnvMode(value: GLKTextureEnvMode): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertytexture/1488884-name
    name(): any;
    setName(value: any): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertytexture/1488852-target
    target(): GLKTextureTarget;
    setTarget(value: GLKTextureTarget): void;
    //
    alloc():GLKEffectPropertyTexture;
    //
    init():GLKEffectPropertyTexture;
  }
}

declare const GLKEffectPropertyTexture: cocoascript.GLKEffectPropertyTexture;
declare namespace cocoascript {
  /**
   * Surface appearance properties for use in GLKit rendering effects.
   * https://developer.apple.com/documentation/glkit/glkeffectpropertymaterial
   */
  interface GLKEffectPropertyMaterial extends GLKEffectProperty {
    // https://developer.apple.com/documentation/glkit/glkeffectpropertymaterial/1409844-ambientcolor
    ambientColor(): GLKVector4;
    setAmbientColor(value: GLKVector4): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertymaterial/1409843-diffusecolor
    diffuseColor(): GLKVector4;
    setDiffuseColor(value: GLKVector4): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertymaterial/1409839-emissivecolor
    emissiveColor(): GLKVector4;
    setEmissiveColor(value: GLKVector4): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertymaterial/1409837-shininess
    shininess(): any;
    setShininess(value: any): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertymaterial/1409841-specularcolor
    specularColor(): GLKVector4;
    setSpecularColor(value: GLKVector4): void;
    //
    alloc():GLKEffectPropertyMaterial;
    //
    init():GLKEffectPropertyMaterial;
  }
}

declare const GLKEffectPropertyMaterial: cocoascript.GLKEffectPropertyMaterial;
declare namespace cocoascript {
  /**
   * Coordinate transform information for use in GLKit rendering effects.
   * https://developer.apple.com/documentation/glkit/glkeffectpropertytransform
   */
  interface GLKEffectPropertyTransform extends GLKEffectProperty {
    // https://developer.apple.com/documentation/glkit/glkeffectpropertytransform/1489097-modelviewmatrix
    modelviewMatrix(): GLKMatrix4;
    setModelviewMatrix(value: GLKMatrix4): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertytransform/1488648-normalmatrix
    normalMatrix(): GLKMatrix3;
    setNormalMatrix(value: GLKMatrix3): void;
    // https://developer.apple.com/documentation/glkit/glkeffectpropertytransform/1489114-projectionmatrix
    projectionMatrix(): GLKMatrix4;
    setProjectionMatrix(value: GLKMatrix4): void;
    //
    alloc():GLKEffectPropertyTransform;
    //
    init():GLKEffectPropertyTransform;
  }
}

declare const GLKEffectPropertyTransform: cocoascript.GLKEffectPropertyTransform;
declare namespace cocoascript {
  interface GLKMatrixStackRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/glktextureloadercallback
  type GLKTextureLoaderCallback = cocoascript.NSError;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/glktextureloadererror
  type GLKTextureLoaderError = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/glklightingtype
  type GLKLightingType = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/glkfogmode
  type GLKFogMode = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/glktextureenvmode
  type GLKTextureEnvMode = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/glktexturetarget
  type GLKTextureTarget = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/glkvertexattrib
  type GLKVertexAttrib = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/1462423-glkmatrix2
  type GLKMatrix2 = cocoascript.union;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/1462419-glkmatrix3
  type GLKMatrix3 = cocoascript.union;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/1462441-glkmatrix4
  type GLKMatrix4 = cocoascript.union;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/1462421-glkvector2
  type GLKVector2 = cocoascript.union;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/1462425-glkvector3
  type GLKVector3 = cocoascript.union;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/1462431-glkvector4
  type GLKVector4 = cocoascript.union;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/glkit/1462435-glkquaternion
  type GLKQuaternion = cocoascript.union;
}
declare namespace cocoascript {
  interface GLKVertexAttributeParameters {
  }
}
// https://developer.apple.com/documentation/glkit/glkmatrix3identity
declare const GLKMatrix3Identity: cocoascript.GLKMatrix3;
// https://developer.apple.com/documentation/glkit/glkmatrix4identity
declare const GLKMatrix4Identity: cocoascript.GLKMatrix4;
// https://developer.apple.com/documentation/glkit/glkquaternionidentity
declare const GLKQuaternionIdentity: cocoascript.GLKQuaternion;
