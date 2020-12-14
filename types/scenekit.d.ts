declare namespace cocoascript {
  /**
   * Properties affecting the behavior of a camera controller.
   * doc://com.apple.documentation/documentation/scenekit/scncameracontrolconfiguration
   */
  interface SCNCameraControlConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrolconfiguration/2867337-allowstranslation
    allowsTranslation(): cocoascript.BOOL;
    setAllowsTranslation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrolconfiguration/2867338-autoswitchtofreecamera
    autoSwitchToFreeCamera(): cocoascript.BOOL;
    setAutoSwitchToFreeCamera(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrolconfiguration/2867334-flymodevelocity
    flyModeVelocity(): cocoascript.CGFloat;
    setFlyModeVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrolconfiguration/2867342-pansensitivity
    panSensitivity(): cocoascript.CGFloat;
    setPanSensitivity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrolconfiguration/2867340-rotationsensitivity
    rotationSensitivity(): cocoascript.CGFloat;
    setRotationSensitivity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrolconfiguration/2867332-trucksensitivity
    truckSensitivity(): cocoascript.CGFloat;
    setTruckSensitivity(): void;
  }
}
declare namespace cocoascript {
  /**
   * Methods common to the
   * doc://com.apple.documentation/documentation/scenekit/scnboundingvolume
   */
  interface SCNBoundingVolume extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnboundingvolume/1522872-getboundingboxmin
    getBoundingBoxMin_max(min: cocoascript.SCNVector3, max: cocoascript.SCNVector3):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnboundingvolume/1523886-getboundingspherecenter
    getBoundingSphereCenter_radius(center: cocoascript.SCNVector3, radius: cocoascript.CGFloat):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnboundingvolume/1522866-setboundingboxmin
    setBoundingBoxMin_max(min: cocoascript.SCNVector3, max: cocoascript.SCNVector3):void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scncameracontrollerdelegate
   */
  interface SCNCameraControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrollerdelegate/2879192-camerainertiadidendforcontroller
    cameraInertiaDidEndForController(cameraController: cocoascript.SCNCameraController):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrollerdelegate/2879194-camerainertiawillstartforcontrol
    cameraInertiaWillStartForController(cameraController: cocoascript.SCNCameraController):void;
  }
}
declare namespace cocoascript {
  /**
   * The common interface for attaching animations to nodes, geometries, materials, and other SceneKit objects.
   * doc://com.apple.documentation/documentation/scenekit/scnanimatable
   */
  interface SCNAnimatable extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1523386-addanimation
    addAnimation_forKey(animation: cocoascript.SCNAnimation, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1524020-animationforkey
    animationForKey(key: cocoascript.NSString):cocoascript.CAAnimation;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1523610-animationkeys
    animationKeys(): cocoascript.NSString;
    setAnimationKeys(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1522762-removeallanimations
    removeAllAnimations():void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1522880-removeanimationforkey
    removeAnimationForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1522841-removeanimationforkey
    removeAnimationForKey_fadeOutDuration(key: cocoascript.NSString, duration: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1523592-pauseanimationforkey
    pauseAnimationForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1523332-resumeanimationforkey
    resumeAnimationForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1523703-isanimationforkeypaused
    isAnimationForKeyPaused(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/2866031-addanimationplayer
    addAnimationPlayer_forKey(player: cocoascript.SCNAnimationPlayer, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/2866026-animationplayerforkey
    animationPlayerForKey(key: cocoascript.NSString):cocoascript.SCNAnimationPlayer;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/2887039-removeanimationforkey
    removeAnimationForKey_blendOutDuration(key: cocoascript.NSString, duration: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1778343-setspeed
    setSpeed_forAnimationKey(speed: cocoascript.CGFloat, key: cocoascript.NSString):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods your app can implement to participate in SceneKit’s animation loop or perform additional rendering.
   * doc://com.apple.documentation/documentation/scenekit/scnscenerendererdelegate
   */
  interface SCNSceneRendererDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnscenerendererdelegate/1522937-renderer
    renderer_updateAtTime(renderer: cocoascript.SCNSceneRenderer, time: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerendererdelegate/1523038-renderer
    renderer_didApplyAnimationsAtTime(renderer: cocoascript.SCNSceneRenderer, time: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerendererdelegate/1522738-renderer
    renderer_didSimulatePhysicsAtTime(renderer: cocoascript.SCNSceneRenderer, time: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerendererdelegate/1523483-renderer
    renderer_willRenderScene_atTime(renderer: cocoascript.SCNSceneRenderer, scene: any, time: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerendererdelegate/1524233-renderer
    renderer_didRenderScene_atTime(renderer: cocoascript.SCNSceneRenderer, scene: any, time: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerendererdelegate/2919554-renderer
    renderer_didApplyConstraintsAtTime(renderer: cocoascript.SCNSceneRenderer, time: cocoascript.NSTimeInterval):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods and properties common to the
   * doc://com.apple.documentation/documentation/scenekit/scnscenerenderer
   */
  interface SCNSceneRenderer extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523956-scene
    scene(): any;
    setScene(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523028-presentscene
    presentScene_withTransition_incomingPointOfView_completionHandler(scene: any, transition: cocoascript.SKTransition, pointOfView: any, completionHandler: void):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523982-pointofview
    pointOfView(): any;
    setPointOfView(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523812-autoenablesdefaultlighting
    autoenablesDefaultLighting(): cocoascript.BOOL;
    setAutoenablesDefaultLighting(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1524026-jitteringenabled
    jitteringEnabled(): cocoascript.BOOL;
    setJitteringEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522763-showsstatistics
    showsStatistics(): cocoascript.BOOL;
    setShowsStatistics(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523281-debugoptions
    debugOptions(): cocoascript.SCNDebugOptions;
    setDebugOptions(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522616-renderingapi
    renderingAPI(): cocoascript.SCNRenderingAPI;
    setRenderingAPI(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522680-scenetime
    sceneTime(): cocoascript.NSTimeInterval;
    setSceneTime(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523401-playing
    playing(): cocoascript.BOOL;
    setPlaying(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522878-loops
    loops(): cocoascript.BOOL;
    setLoops(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522798-prepareobject
    prepareObject_shouldAbortBlock(object: cocoascript.SCNSceneRenderer, block: void):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523375-prepareobjects
    prepareObjects_withCompletionHandler(objects: cocoascript.NSArray, completionHandler: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522929-hittest
    hitTest_options(point: cocoascript.CGPoint, options: cocoascript.SCNSceneRenderer):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522647-isnodeinsidefrustum
    isNodeInsideFrustum_withPointOfView(node: any, pointOfView: any):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522942-nodesinsidefrustumwithpointofvie
    nodesInsideFrustumWithPointOfView(pointOfView: any):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1524089-projectpoint
    projectPoint(point: cocoascript.SCNVector3):cocoascript.SCNVector3;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522631-unprojectpoint
    unprojectPoint(point: cocoascript.SCNVector3):cocoascript.SCNVector3;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522671-delegate
    delegate(): cocoascript.SCNSceneRendererDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522609-currentrendercommandencoder
    currentRenderCommandEncoder(): any;
    setCurrentRenderCommandEncoder(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523935-device
    device(): any;
    setDevice(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523974-commandqueue
    commandQueue(): any;
    setCommandQueue(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523701-colorpixelformat
    colorPixelFormat(): any;
    setColorPixelFormat(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523780-depthpixelformat
    depthPixelFormat(): any;
    setDepthPixelFormat(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523315-stencilpixelformat
    stencilPixelFormat(): any;
    setStencilPixelFormat(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522840-context
    context(): void;
    setContext(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1524051-overlayskscene
    overlaySKScene(): cocoascript.SKScene;
    setOverlaySKScene(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523747-audiolistener
    audioListener(): any;
    setAudioListener(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523582-audioenvironmentnode
    audioEnvironmentNode(): cocoascript.AVAudioEnvironmentNode;
    setAudioEnvironmentNode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522686-audioengine
    audioEngine(): cocoascript.AVAudioEngine;
    setAudioEngine(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/3672179-currentrenderpassdescriptor
    currentRenderPassDescriptor(): any;
    setCurrentRenderPassDescriptor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522854-currenttime
    currentTime(): cocoascript.NSTimeInterval;
    setCurrentTime(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/3240646-currentviewport
    currentViewport(): cocoascript.CGRect;
    setCurrentViewport(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/3227912-temporalantialiasingenabled
    temporalAntialiasingEnabled(): cocoascript.BOOL;
    setTemporalAntialiasingEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/3174885-usesreversez
    usesReverseZ(): cocoascript.BOOL;
    setUsesReverseZ(): void;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to use your own custom Metal or OpenGL drawing code to render content for a node.
   * doc://com.apple.documentation/documentation/scenekit/scnnoderendererdelegate
   */
  interface SCNNodeRendererDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnnoderendererdelegate/1407993-rendernode
    renderNode_renderer_arguments(node: any, renderer: cocoascript.SCNRenderer, arguments: cocoascript.SCNNodeRendererDelegate):void;
  }
}
declare namespace cocoascript {
  /**
   * An object that manages a Metal buffer used by a custom shader program.
   * doc://com.apple.documentation/documentation/scenekit/scnbufferstream
   */
  interface SCNBufferStream extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnbufferstream/1523175-writebytes
    writeBytes_length(bytes: void, length: cocoascript.NSUInteger):void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnanimation
   */
  interface SCNAnimation extends NSObject {
  }
}
declare namespace cocoascript {
  /**
   * Methods for running actions on nodes.
   * doc://com.apple.documentation/documentation/scenekit/scnactionable
   */
  interface SCNActionable extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1523164-runaction
    runAction(action: cocoascript.SCNAction):void;
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1524219-runaction
    runAction_completionHandler(action: cocoascript.SCNAction, block: void):void;
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1524222-runaction
    runAction_forKey(action: cocoascript.SCNAction, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1522791-runaction
    runAction_forKey_completionHandler(action: cocoascript.SCNAction, key: cocoascript.NSString, block: void):void;
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1523287-actionforkey
    actionForKey(key: cocoascript.NSString):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1523794-hasactions
    hasActions(): cocoascript.BOOL;
    setHasActions(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1523036-actionkeys
    actionKeys(): cocoascript.NSString;
    setActionKeys(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1523617-removeactionforkey
    removeActionForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1524181-removeallactions
    removeAllActions():void;
  }
}
declare namespace cocoascript {
  /**
   * The common interface for SceneKit objects that support multipass rendering using
   * doc://com.apple.documentation/documentation/scenekit/scntechniquesupport
   */
  interface SCNTechniqueSupport extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scntechniquesupport/1520496-technique
    technique(): cocoascript.SCNTechnique;
    setTechnique(): void;
  }
}
declare namespace cocoascript {
  /**
   * The interface for tracking errors that occur when compiling shader source code.
   * doc://com.apple.documentation/documentation/scenekit/scnprogramdelegate
   */
  interface SCNProgramDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnprogramdelegate/1523007-program
    program_handleError(program: cocoascript.SCNProgram, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogramdelegate/1523068-programisopaque
    programIsOpaque(program: cocoascript.SCNProgram):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnprogramdelegate/1524155-program
    program_bindValueForSymbol_atLocation_programID_renderer(program: cocoascript.SCNProgram, symbol: cocoascript.NSString, location: number, programID: number, renderer: cocoascript.SCNRenderer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnprogramdelegate/1523857-program
    program_unbindValueForSymbol_atLocation_programID_renderer(program: cocoascript.SCNProgram, symbol: cocoascript.NSString, location: number, programID: number, renderer: cocoascript.SCNRenderer):void;
  }
}
// doc://com.apple.documentation/documentation/scenekit/scnerrordomain
declare const SCNErrorDomain: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * Methods you can implement to participate in the process of exporting a scene to a file.
   * doc://com.apple.documentation/documentation/scenekit/scnsceneexportdelegate
   */
  interface SCNSceneExportDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnsceneexportdelegate/1524221-writeimage
    writeImage_withSceneDocumentURL_originalImageURL(image: cocoascript.UIImage, documentURL: cocoascript.NSURL, originalImageURL: cocoascript.NSURL):cocoascript.NSURL;
  }
}
declare namespace cocoascript {
  /**
   * Methods for customizing SceneKit's rendering of geometry and materials using Metal or OpenGL shader programs.
   * doc://com.apple.documentation/documentation/scenekit/scnshadable
   */
  interface SCNShadable extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnshadable/1523689-program
    program(): cocoascript.SCNProgram;
    setProgram(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnshadable/1523348-shadermodifiers
    shaderModifiers(): cocoascript.NSString;
    setShaderModifiers(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnshadable/1523063-handlebindingofsymbol
    handleBindingOfSymbol_usingBlock(symbol: cocoascript.NSString, block: cocoascript.SCNBindingBlock):void;
    // doc://com.apple.documentation/documentation/scenekit/scnshadable/1522783-handleunbindingofsymbol
    handleUnbindingOfSymbol_usingBlock(symbol: cocoascript.NSString, block: cocoascript.SCNBindingBlock):void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraintdelegate
   */
  interface SCNAvoidOccluderConstraintDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraintdelegate/2887040-avoidoccluderconstraint
    avoidOccluderConstraint_didAvoidOccluder_forNode(constraint: cocoascript.SCNAvoidOccluderConstraint, occluder: any, node: any):void;
    // doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraintdelegate/2887038-avoidoccluderconstraint
    avoidOccluderConstraint_shouldAvoidOccluder_forNode(constraint: cocoascript.SCNAvoidOccluderConstraint, occluder: any, node: any):cocoascript.BOOL;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to respond when a contact or collision occurs between two physics bodies in a scene.
   * doc://com.apple.documentation/documentation/scenekit/scnphysicscontactdelegate
   */
  interface SCNPhysicsContactDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontactdelegate/1512835-physicsworld
    physicsWorld_didBeginContact(world: cocoascript.SCNPhysicsWorld, contact: cocoascript.SCNPhysicsContact):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontactdelegate/1512865-physicsworld
    physicsWorld_didUpdateContact(world: cocoascript.SCNPhysicsWorld, contact: cocoascript.SCNPhysicsContact):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontactdelegate/1512883-physicsworld
    physicsWorld_didEndContact(world: cocoascript.SCNPhysicsWorld, contact: cocoascript.SCNPhysicsContact):void;
  }
}
declare namespace cocoascript {
  /**
   * The appearance and physical characteristics of an individual wheel associated with an physics vehicle behavior.
   * doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel
   */
  interface SCNPhysicsVehicleWheel extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387989-wheelwithnode
    wheelWithNode(node: any):cocoascript.SCNPhysicsVehicleWheel;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387959-connectionposition
    connectionPosition(): cocoascript.SCNVector3;
    setConnectionPosition(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387969-axle
    axle(): cocoascript.SCNVector3;
    setAxle(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387882-steeringaxis
    steeringAxis(): cocoascript.SCNVector3;
    setSteeringAxis(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387991-radius
    radius(): cocoascript.CGFloat;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387904-frictionslip
    frictionSlip(): cocoascript.CGFloat;
    setFrictionSlip(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387983-suspensionstiffness
    suspensionStiffness(): cocoascript.CGFloat;
    setSuspensionStiffness(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387971-suspensioncompression
    suspensionCompression(): cocoascript.CGFloat;
    setSuspensionCompression(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387886-suspensiondamping
    suspensionDamping(): cocoascript.CGFloat;
    setSuspensionDamping(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387928-maximumsuspensiontravel
    maximumSuspensionTravel(): cocoascript.CGFloat;
    setMaximumSuspensionTravel(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387934-maximumsuspensionforce
    maximumSuspensionForce(): cocoascript.CGFloat;
    setMaximumSuspensionForce(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387880-suspensionrestlength
    suspensionRestLength(): cocoascript.CGFloat;
    setSuspensionRestLength(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387892-node
    node(): any;
    setNode(): void;
    //
    alloc():cocoascript.SCNPhysicsVehicleWheel;
    //
    init():cocoascript.SCNPhysicsVehicleWheel;
  }
}

declare const SCNPhysicsVehicleWheel: cocoascript.SCNPhysicsVehicleWheel;
declare namespace cocoascript {
  /**
   * An object that applies forces, such as gravitation, electromagnetism, and turbulence, to physics bodies within a certain area of effect.
   * doc://com.apple.documentation/documentation/scenekit/scnphysicsfield
   */
  interface SCNPhysicsField extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388164-dragfield
    dragField():cocoascript.SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388160-vortexfield
    vortexField():cocoascript.SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388115-radialgravityfield
    radialGravityField():cocoascript.SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388130-lineargravityfield
    linearGravityField():cocoascript.SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388150-noisefieldwithsmoothness
    noiseFieldWithSmoothness_animationSpeed(smoothness: cocoascript.CGFloat, speed: cocoascript.CGFloat):cocoascript.SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388162-turbulencefieldwithsmoothness
    turbulenceFieldWithSmoothness_animationSpeed(smoothness: cocoascript.CGFloat, speed: cocoascript.CGFloat):cocoascript.SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388134-springfield
    springField():cocoascript.SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388152-electricfield
    electricField():cocoascript.SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388168-magneticfield
    magneticField():cocoascript.SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388140-customfieldwithevaluationblock
    customFieldWithEvaluationBlock(block: cocoascript.SCNFieldForceEvaluator):cocoascript.SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388138-halfextent
    halfExtent(): cocoascript.SCNVector3;
    setHalfExtent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388136-scope
    scope(): cocoascript.SCNPhysicsFieldScope;
    setScope(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388158-usesellipsoidalextent
    usesEllipsoidalExtent(): cocoascript.BOOL;
    setUsesEllipsoidalExtent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388154-offset
    offset(): cocoascript.SCNVector3;
    setOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388128-direction
    direction(): cocoascript.SCNVector3;
    setDirection(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388132-strength
    strength(): cocoascript.CGFloat;
    setStrength(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388146-falloffexponent
    falloffExponent(): cocoascript.CGFloat;
    setFalloffExponent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388148-minimumdistance
    minimumDistance(): cocoascript.CGFloat;
    setMinimumDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388117-active
    active(): cocoascript.BOOL;
    setActive(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388126-exclusive
    exclusive(): cocoascript.BOOL;
    setExclusive(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388119-categorybitmask
    categoryBitMask(): cocoascript.NSUInteger;
    setCategoryBitMask(): void;
    //
    alloc():cocoascript.SCNPhysicsField;
    //
    init():cocoascript.SCNPhysicsField;
  }
}

declare const SCNPhysicsField: cocoascript.SCNPhysicsField;
declare namespace cocoascript {
  /**
   * A structural element of a scene graph, representing a position and transform in a 3D coordinate space, to which you can attach geometry, lights, cameras, or other displayable content.
   * doc://com.apple.documentation/documentation/scenekit/scnnode
   */
  interface SCNNode extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407972-node
    node():any;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408020-nodewithgeometry
    nodeWithGeometry(geometry: cocoascript.SCNGeometry):any;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1419841-nodewithmdlobject
    nodeWithMDLObject(mdlObject: cocoascript.MDLObject):any;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881843-simdtransform
    simdTransform(): cocoascript.simd_float4x4;
    setSimdTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881846-simdposition
    simdPosition(): cocoascript.simd_float3;
    setSimdPosition(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881845-simdrotation
    simdRotation(): cocoascript.simd_float4;
    setSimdRotation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881859-simdeulerangles
    simdEulerAngles(): cocoascript.simd_float3;
    setSimdEulerAngles(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881854-simdorientation
    simdOrientation(): cocoascript.simd_quatf;
    setSimdOrientation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881847-simdscale
    simdScale(): cocoascript.simd_float3;
    setSimdScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881849-simdpivot
    simdPivot(): cocoascript.simd_float4x4;
    setSimdPivot(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408014-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408004-light
    light(): cocoascript.SCNLight;
    setLight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407976-camera
    camera(): cocoascript.SCNCamera;
    setCamera(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407966-geometry
    geometry(): cocoascript.SCNGeometry;
    setGeometry(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408022-morpher
    morpher(): cocoascript.SCNMorpher;
    setMorpher(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407953-skinner
    skinner(): cocoascript.SCNSkinner;
    setSkinner(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407994-categorybitmask
    categoryBitMask(): cocoascript.NSUInteger;
    setCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408016-constraints
    constraints(): cocoascript.SCNConstraint;
    setConstraints(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408030-presentationnode
    presentationNode(): any;
    setPresentationNode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407962-paused
    paused(): cocoascript.BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407967-hidden
    hidden(): cocoascript.BOOL;
    setHidden(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408010-opacity
    opacity(): cocoascript.CGFloat;
    setOpacity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407978-renderingorder
    renderingOrder(): cocoascript.NSInteger;
    setRenderingOrder(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407955-castsshadow
    castsShadow(): cocoascript.BOOL;
    setCastsShadow(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1690499-movabilityhint
    movabilityHint(): cocoascript.SCNMovabilityHint;
    setMovabilityHint(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407968-parentnode
    parentNode(): any;
    setParentNode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407984-childnodes
    childNodes(): any;
    setChildNodes(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407974-addchildnode
    addChildNode(child: any):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407958-insertchildnode
    insertChildNode_atIndex(child: any, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407991-removefromparentnode
    removeFromParentNode():void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408002-replacechildnode
    replaceChildNode_with(oldChild: any, newChild: any):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407982-childnodespassingtest
    childNodesPassingTest(predicate: cocoascript.BOOL):any;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407951-childnodewithname
    childNodeWithName_recursively(name: cocoascript.NSString, recursively: cocoascript.BOOL):any;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408032-enumeratechildnodesusingblock
    enumerateChildNodesUsingBlock(block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1642248-enumeratehierarchyusingblock
    enumerateHierarchyUsingBlock(block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407949-filters
    filters(): cocoascript.CIFilter;
    setFilters(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408012-rendererdelegate
    rendererDelegate(): cocoascript.SCNNodeRendererDelegate;
    setRendererDelegate(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407988-physicsbody
    physicsBody(): cocoascript.SCNPhysicsBody;
    setPhysicsBody(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408006-physicsfield
    physicsField(): cocoascript.SCNPhysicsField;
    setPhysicsField(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1523123-addparticlesystem
    addParticleSystem(system: cocoascript.SCNParticleSystem):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1522705-particlesystems
    particleSystems(): cocoascript.SCNParticleSystem;
    setParticleSystems(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1524014-removeparticlesystem
    removeParticleSystem(system: cocoascript.SCNParticleSystem):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1522801-removeallparticlesystems
    removeAllParticleSystems():void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1523464-addaudioplayer
    addAudioPlayer(player: cocoascript.SCNAudioPlayer):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1523244-audioplayers
    audioPlayers(): cocoascript.SCNAudioPlayer;
    setAudioPlayers(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1522767-removeaudioplayer
    removeAudioPlayer(player: cocoascript.SCNAudioPlayer):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1523570-removeallaudioplayers
    removeAllAudioPlayers():void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408046-clone
    clone():any;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407960-flattenedclone
    flattenedClone():any;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407998-hittestwithsegmentfrompoint
    hitTestWithSegmentFromPoint_toPoint_options(pointA: cocoascript.SCNVector3, pointB: cocoascript.SCNVector3, options: any):any;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881861-simdrotateby
    simdRotateBy_aroundTarget(worldRotation: cocoascript.simd_quatf, worldTarget: cocoascript.simd_float3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881858-simdlocaltranslateby
    simdLocalTranslateBy(translation: cocoascript.simd_float3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881844-simdlocalrotateby
    simdLocalRotateBy(rotation: cocoascript.simd_quatf):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881870-simdlookat
    simdLookAt(worldTarget: cocoascript.simd_float3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881848-simdlookat
    simdLookAt_up_localFront(worldTarget: cocoascript.simd_float3, worldUp: cocoascript.simd_float3, localFront: cocoascript.simd_float3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881851-simdlocalright
    simdLocalRight(): cocoascript.simd_float3;
    setSimdLocalRight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881872-simdlocalup
    simdLocalUp(): cocoascript.simd_float3;
    setSimdLocalUp(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881864-simdlocalfront
    simdLocalFront(): cocoascript.simd_float3;
    setSimdLocalFront(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881857-simdworldright
    simdWorldRight(): cocoascript.simd_float3;
    setSimdWorldRight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881867-simdworldup
    simdWorldUp(): cocoascript.simd_float3;
    setSimdWorldUp(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881863-simdworldfront
    simdWorldFront(): cocoascript.simd_float3;
    setSimdWorldFront(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881868-simdworldtransform
    simdWorldTransform(): cocoascript.simd_float4x4;
    setSimdWorldTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881865-simdworldorientation
    simdWorldOrientation(): cocoascript.simd_quatf;
    setSimdWorldOrientation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881856-simdworldposition
    simdWorldPosition(): cocoascript.simd_float3;
    setSimdWorldPosition(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881852-simdconvertposition
    simdConvertPosition_fromNode(position: cocoascript.simd_float3, node: any):cocoascript.simd_float3;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881869-simdconvertposition
    simdConvertPosition_toNode(position: cocoascript.simd_float3, node: any):cocoascript.simd_float3;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881866-simdconverttransform
    simdConvertTransform_fromNode(transform: cocoascript.simd_float4x4, node: any):cocoascript.simd_float4x4;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881855-simdconverttransform
    simdConvertTransform_toNode(transform: cocoascript.simd_float4x4, node: any):cocoascript.simd_float4x4;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881842-simdconvertvector
    simdConvertVector_fromNode(vector: cocoascript.simd_float3, node: any):cocoascript.simd_float3;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881850-simdconvertvector
    simdConvertVector_toNode(vector: cocoascript.simd_float3, node: any):cocoascript.simd_float3;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881853-focusbehavior
    focusBehavior(): cocoascript.SCNNodeFocusBehavior;
    setFocusBehavior(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2873004-entity
    entity(): cocoascript.GKEntity;
    setEntity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407964-transform
    transform(): cocoascript.SCNMatrix4;
    setTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408026-position
    position(): cocoascript.SCNVector3;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408034-rotation
    rotation(): cocoascript.SCNVector4;
    setRotation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407980-eulerangles
    eulerAngles(): cocoascript.SCNVector3;
    setEulerAngles(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408048-orientation
    orientation(): cocoascript.SCNQuaternion;
    setOrientation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408050-scale
    scale(): cocoascript.SCNVector3;
    setScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408044-pivot
    pivot(): cocoascript.SCNMatrix4;
    setPivot(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867399-rotateby
    rotateBy_aroundTarget(worldRotation: cocoascript.SCNQuaternion, worldTarget: cocoascript.SCNVector3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867383-localtranslateby
    localTranslateBy(translation: cocoascript.SCNVector3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867398-localrotateby
    localRotateBy(rotation: cocoascript.SCNQuaternion):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867394-lookat
    lookAt(worldTarget: cocoascript.SCNVector3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867396-lookat
    lookAt_up_localFront(worldTarget: cocoascript.SCNVector3, worldUp: cocoascript.SCNVector3, localFront: cocoascript.SCNVector3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867400-localright
    localRight(): cocoascript.SCNVector3;
    setLocalRight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867386-localup
    localUp(): cocoascript.SCNVector3;
    setLocalUp(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867393-localfront
    localFront(): cocoascript.SCNVector3;
    setLocalFront(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867404-worldright
    worldRight(): cocoascript.SCNVector3;
    setWorldRight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867395-worldup
    worldUp(): cocoascript.SCNVector3;
    setWorldUp(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867392-worldfront
    worldFront(): cocoascript.SCNVector3;
    setWorldFront(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407970-worldtransform
    worldTransform(): cocoascript.SCNMatrix4;
    setWorldTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867401-setworldtransform
    setWorldTransform(worldTransform: cocoascript.SCNMatrix4):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867402-worldorientation
    worldOrientation(): cocoascript.SCNQuaternion;
    setWorldOrientation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867405-worldposition
    worldPosition(): cocoascript.SCNVector3;
    setWorldPosition(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408018-convertposition
    convertPosition_fromNode(position: cocoascript.SCNVector3, node: any):cocoascript.SCNVector3;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407990-convertposition
    convertPosition_toNode(position: cocoascript.SCNVector3, node: any):cocoascript.SCNVector3;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407996-converttransform
    convertTransform_fromNode(transform: cocoascript.SCNMatrix4, node: any):cocoascript.SCNMatrix4;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407986-converttransform
    convertTransform_toNode(transform: cocoascript.SCNMatrix4, node: any):cocoascript.SCNMatrix4;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867403-convertvector
    convertVector_fromNode(vector: cocoascript.SCNVector3, node: any):cocoascript.SCNVector3;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867397-convertvector
    convertVector_toNode(vector: cocoascript.SCNVector3, node: any):cocoascript.SCNVector3;
    //
    alloc():any;
    //
    init():any;
  }
}

declare const SCNNode: any;
declare namespace cocoascript {
  /**
   * A set of camera attributes that can be attached to a node to provide a point of view for displaying the scene.
   * doc://com.apple.documentation/documentation/scenekit/scncamera
   */
  interface SCNCamera extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436602-camera
    camera():cocoascript.SCNCamera;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1419839-camerawithmdlcamera
    cameraWithMDLCamera(mdlCamera: cocoascript.MDLCamera):cocoascript.SCNCamera;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436623-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436592-znear
    zNear(): number;
    setZNear(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436596-zfar
    zFar(): number;
    setZFar(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436610-automaticallyadjustszrange
    automaticallyAdjustsZRange(): cocoascript.BOOL;
    setAutomaticallyAdjustsZRange(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2867510-fieldofview
    fieldOfView(): cocoascript.CGFloat;
    setFieldOfView(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2867556-focallength
    focalLength(): cocoascript.CGFloat;
    setFocalLength(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2867499-sensorheight
    sensorHeight(): cocoascript.CGFloat;
    setSensorHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2878134-projectiondirection
    projectionDirection(): cocoascript.SCNCameraProjectionDirection;
    setProjectionDirection(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1690501-projectiontransform
    projectionTransform(): cocoascript.SCNMatrix4;
    setProjectionTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436621-usesorthographicprojection
    usesOrthographicProjection(): cocoascript.BOOL;
    setUsesOrthographicProjection(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436612-orthographicscale
    orthographicScale(): number;
    setOrthographicScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436625-categorybitmask
    categoryBitMask(): cocoascript.NSUInteger;
    setCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2881741-wantsdepthoffield
    wantsDepthOfField(): cocoascript.BOOL;
    setWantsDepthOfField(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2867518-focusdistance
    focusDistance(): cocoascript.CGFloat;
    setFocusDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2867490-fstop
    fStop(): cocoascript.CGFloat;
    setFStop(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2867484-aperturebladecount
    apertureBladeCount(): cocoascript.NSInteger;
    setApertureBladeCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2872999-focalblursamplecount
    focalBlurSampleCount(): cocoascript.NSInteger;
    setFocalBlurSampleCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644099-motionblurintensity
    motionBlurIntensity(): cocoascript.CGFloat;
    setMotionBlurIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644101-wantshdr
    wantsHDR(): cocoascript.BOOL;
    setWantsHDR(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644105-exposureoffset
    exposureOffset(): cocoascript.CGFloat;
    setExposureOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644097-averagegray
    averageGray(): cocoascript.CGFloat;
    setAverageGray(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644110-whitepoint
    whitePoint(): cocoascript.CGFloat;
    setWhitePoint(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644103-minimumexposure
    minimumExposure(): cocoascript.CGFloat;
    setMinimumExposure(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644120-maximumexposure
    maximumExposure(): cocoascript.CGFloat;
    setMaximumExposure(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644117-wantsexposureadaptation
    wantsExposureAdaptation(): cocoascript.BOOL;
    setWantsExposureAdaptation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644093-exposureadaptationbrighteningspe
    exposureAdaptationBrighteningSpeedFactor(): cocoascript.CGFloat;
    setExposureAdaptationBrighteningSpeedFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644094-exposureadaptationdarkeningspeed
    exposureAdaptationDarkeningSpeedFactor(): cocoascript.CGFloat;
    setExposureAdaptationDarkeningSpeedFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644112-contrast
    contrast(): cocoascript.CGFloat;
    setContrast(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644100-saturation
    saturation(): cocoascript.CGFloat;
    setSaturation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644114-colorgrading
    colorGrading(): cocoascript.SCNMaterialProperty;
    setColorGrading(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644104-bloomintensity
    bloomIntensity(): cocoascript.CGFloat;
    setBloomIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644098-bloomthreshold
    bloomThreshold(): cocoascript.CGFloat;
    setBloomThreshold(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644096-bloomblurradius
    bloomBlurRadius(): cocoascript.CGFloat;
    setBloomBlurRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644108-colorfringeintensity
    colorFringeIntensity(): cocoascript.CGFloat;
    setColorFringeIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644113-colorfringestrength
    colorFringeStrength(): cocoascript.CGFloat;
    setColorFringeStrength(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644106-vignettingintensity
    vignettingIntensity(): cocoascript.CGFloat;
    setVignettingIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644118-vignettingpower
    vignettingPower(): cocoascript.CGFloat;
    setVignettingPower(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2874249-screenspaceambientocclusioninten
    screenSpaceAmbientOcclusionIntensity(): cocoascript.CGFloat;
    setScreenSpaceAmbientOcclusionIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2874248-screenspaceambientocclusionradiu
    screenSpaceAmbientOcclusionRadius(): cocoascript.CGFloat;
    setScreenSpaceAmbientOcclusionRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2874250-screenspaceambientocclusionbias
    screenSpaceAmbientOcclusionBias(): cocoascript.CGFloat;
    setScreenSpaceAmbientOcclusionBias(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2874251-screenspaceambientocclusiondepth
    screenSpaceAmbientOcclusionDepthThreshold(): cocoascript.CGFloat;
    setScreenSpaceAmbientOcclusionDepthThreshold(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2875550-screenspaceambientocclusionnorma
    screenSpaceAmbientOcclusionNormalThreshold(): cocoascript.CGFloat;
    setScreenSpaceAmbientOcclusionNormalThreshold(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436598-yfov
    yFov(): number;
    setYFov(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436608-xfov
    xFov(): number;
    setXFov(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436600-focaldistance
    focalDistance(): cocoascript.CGFloat;
    setFocalDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436604-focalsize
    focalSize(): cocoascript.CGFloat;
    setFocalSize(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436606-focalblurradius
    focalBlurRadius(): cocoascript.CGFloat;
    setFocalBlurRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436594-aperture
    aperture(): cocoascript.CGFloat;
    setAperture(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3227909-bloomiterationcount
    bloomIterationCount(): cocoascript.NSInteger;
    setBloomIterationCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3088922-bloomiterationspread
    bloomIterationSpread(): cocoascript.CGFloat;
    setBloomIterationSpread(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3075417-grainintensity
    grainIntensity(): cocoascript.CGFloat;
    setGrainIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3075418-grainiscolored
    grainIsColored(): cocoascript.BOOL;
    setGrainIsColored(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3075419-grainscale
    grainScale(): cocoascript.CGFloat;
    setGrainScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3088923-whitebalancetemperature
    whiteBalanceTemperature(): cocoascript.CGFloat;
    setWhiteBalanceTemperature(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3088924-whitebalancetint
    whiteBalanceTint(): cocoascript.CGFloat;
    setWhiteBalanceTint(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3123432-projectiontransformwithviewports
    projectionTransformWithViewportSize(viewportSize: cocoascript.CGSize):cocoascript.SCNMatrix4;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436619-projectiontransform
    projectionTransform():cocoascript.SCNMatrix4;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436590-setprojectiontransform
    setProjectionTransform(projectionTransform: cocoascript.SCNMatrix4):void;
    //
    alloc():cocoascript.SCNCamera;
    //
    init():cocoascript.SCNCamera;
  }
}

declare const SCNCamera: cocoascript.SCNCamera;
declare namespace cocoascript {
  /**
   * A set of shading attributes that define the appearance of a geometry's surface when rendered.
   * doc://com.apple.documentation/documentation/scenekit/scnmaterial
   */
  interface SCNMaterial extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462552-material
    material():cocoascript.SCNMaterial;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1419835-materialwithmdlmaterial
    materialWithMDLMaterial(mdlMaterial: cocoascript.MDLMaterial):cocoascript.SCNMaterial;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462525-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462518-lightingmodelname
    lightingModelName(): cocoascript.SCNLightingModel;
    setLightingModelName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462589-diffuse
    diffuse(): cocoascript.SCNMaterialProperty;
    setDiffuse(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1640554-metalness
    metalness(): cocoascript.SCNMaterialProperty;
    setMetalness(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1640555-roughness
    roughness(): cocoascript.SCNMaterialProperty;
    setRoughness(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462542-normal
    normal(): cocoascript.SCNMaterialProperty;
    setNormal(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/2867516-displacement
    displacement(): cocoascript.SCNMaterialProperty;
    setDisplacement(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462527-emission
    emission(): cocoascript.SCNMaterialProperty;
    setEmission(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462524-selfillumination
    selfIllumination(): cocoascript.SCNMaterialProperty;
    setSelfIllumination(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462579-ambientocclusion
    ambientOcclusion(): cocoascript.SCNMaterialProperty;
    setAmbientOcclusion(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462589-diffuse
    diffuse(): cocoascript.SCNMaterialProperty;
    setDiffuse(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462558-ambient
    ambient(): cocoascript.SCNMaterialProperty;
    setAmbient(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462516-specular
    specular(): cocoascript.SCNMaterialProperty;
    setSpecular(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462520-reflective
    reflective(): cocoascript.SCNMaterialProperty;
    setReflective(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462575-multiply
    multiply(): cocoascript.SCNMaterialProperty;
    setMultiply(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462583-transparent
    transparent(): cocoascript.SCNMaterialProperty;
    setTransparent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462533-shininess
    shininess(): cocoascript.CGFloat;
    setShininess(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462587-fresnelexponent
    fresnelExponent(): cocoascript.CGFloat;
    setFresnelExponent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462522-locksambientwithdiffuse
    locksAmbientWithDiffuse(): cocoascript.BOOL;
    setLocksAmbientWithDiffuse(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462567-transparency
    transparency(): cocoascript.CGFloat;
    setTransparency(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462549-transparencymode
    transparencyMode(): cocoascript.SCNTransparencyMode;
    setTransparencyMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462585-blendmode
    blendMode(): cocoascript.SCNBlendMode;
    setBlendMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462580-litperpixel
    litPerPixel(): cocoascript.BOOL;
    setLitPerPixel(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462531-doublesided
    doubleSided(): cocoascript.BOOL;
    setDoubleSided(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462571-cullmode
    cullMode(): cocoascript.SCNCullMode;
    setCullMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/2867442-fillmode
    fillMode(): cocoascript.SCNFillMode;
    setFillMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462545-writestodepthbuffer
    writesToDepthBuffer(): cocoascript.BOOL;
    setWritesToDepthBuffer(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462562-readsfromdepthbuffer
    readsFromDepthBuffer(): cocoascript.BOOL;
    setReadsFromDepthBuffer(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/2867554-colorbufferwritemask
    colorBufferWriteMask(): cocoascript.SCNColorMask;
    setColorBufferWriteMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/3075420-clearcoat
    clearCoat(): cocoascript.SCNMaterialProperty;
    setClearCoat(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/3075421-clearcoatnormal
    clearCoatNormal(): cocoascript.SCNMaterialProperty;
    setClearCoatNormal(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/3075422-clearcoatroughness
    clearCoatRoughness(): cocoascript.SCNMaterialProperty;
    setClearCoatRoughness(): void;
    //
    alloc():cocoascript.SCNMaterial;
    //
    init():cocoascript.SCNMaterial;
  }
}

declare const SCNMaterial: cocoascript.SCNMaterial;
declare namespace cocoascript {
  /**
   * The abstract superclass for objects that automatically adjust the position, rotation, or scale of a node based on specified rules.
   * doc://com.apple.documentation/documentation/scenekit/scnconstraint
   */
  interface SCNConstraint extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnconstraint/1468692-influencefactor
    influenceFactor(): cocoascript.CGFloat;
    setInfluenceFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnconstraint/2873378-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnconstraint/2867541-incremental
    incremental(): cocoascript.BOOL;
    setIncremental(): void;
    //
    alloc():cocoascript.SCNConstraint;
    //
    init():cocoascript.SCNConstraint;
  }
}

declare const SCNConstraint: cocoascript.SCNConstraint;
declare namespace cocoascript {
  /**
   * An abstraction of a physics body’s solid volume for tuning collision detection.
   * doc://com.apple.documentation/documentation/scenekit/scnphysicsshape
   */
  interface SCNPhysicsShape extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsshape/1508897-shapewithgeometry
    shapeWithGeometry_options(geometry: cocoascript.SCNGeometry, options: cocoascript.SCNPhysicsShape):cocoascript.SCNPhysicsShape;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsshape/1508889-shapewithnode
    shapeWithNode_options(node: any, options: cocoascript.SCNPhysicsShape):cocoascript.SCNPhysicsShape;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsshape/1508886-shapewithshapes
    shapeWithShapes_transforms(shapes: cocoascript.SCNPhysicsShape, transforms: cocoascript.NSValue):cocoascript.SCNPhysicsShape;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsshape/1508888-sourceobject
    sourceObject(): cocoascript.id;
    setSourceObject(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsshape/1508904-options
    options(): cocoascript.id;
    setOptions(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsshape/1508898-transforms
    transforms(): cocoascript.NSValue;
    setTransforms(): void;
    //
    alloc():cocoascript.SCNPhysicsShape;
    //
    init():cocoascript.SCNPhysicsShape;
  }
}

declare const SCNPhysicsShape: cocoascript.SCNPhysicsShape;
declare namespace cocoascript {
  /**
   * The physics simulation attributes attached to a scene graph node.
   * doc://com.apple.documentation/documentation/scenekit/scnphysicsbody
   */
  interface SCNPhysicsBody extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514797-bodywithtype
    bodyWithType_shape(type: cocoascript.SCNPhysicsBodyType, shape: cocoascript.SCNPhysicsShape):cocoascript.SCNPhysicsBody;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514791-staticbody
    staticBody():cocoascript.SCNPhysicsBody;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514766-dynamicbody
    dynamicBody():cocoascript.SCNPhysicsBody;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514776-kinematicbody
    kinematicBody():cocoascript.SCNPhysicsBody;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514789-physicsshape
    physicsShape(): cocoascript.SCNPhysicsShape;
    setPhysicsShape(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514787-type
    type(): cocoascript.SCNPhysicsBodyType;
    setType(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514753-velocityfactor
    velocityFactor(): cocoascript.SCNVector3;
    setVelocityFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514748-angularvelocityfactor
    angularVelocityFactor(): cocoascript.SCNVector3;
    setAngularVelocityFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514738-affectedbygravity
    affectedByGravity(): cocoascript.BOOL;
    setAffectedByGravity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514755-mass
    mass(): cocoascript.CGFloat;
    setMass(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514786-charge
    charge(): cocoascript.CGFloat;
    setCharge(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514794-friction
    friction(): cocoascript.CGFloat;
    setFriction(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514737-rollingfriction
    rollingFriction(): cocoascript.CGFloat;
    setRollingFriction(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514740-restitution
    restitution(): cocoascript.CGFloat;
    setRestitution(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514763-damping
    damping(): cocoascript.CGFloat;
    setDamping(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514792-angulardamping
    angularDamping(): cocoascript.CGFloat;
    setAngularDamping(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514777-momentofinertia
    momentOfInertia(): cocoascript.SCNVector3;
    setMomentOfInertia(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514761-usesdefaultmomentofinertia
    usesDefaultMomentOfInertia(): cocoascript.BOOL;
    setUsesDefaultMomentOfInertia(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/3013742-centerofmassoffset
    centerOfMassOffset(): cocoascript.SCNVector3;
    setCenterOfMassOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514768-categorybitmask
    categoryBitMask(): cocoascript.NSUInteger;
    setCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514746-contacttestbitmask
    contactTestBitMask(): cocoascript.NSUInteger;
    setContactTestBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514772-collisionbitmask
    collisionBitMask(): cocoascript.NSUInteger;
    setCollisionBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/3013743-continuouscollisiondetectionthre
    continuousCollisionDetectionThreshold(): cocoascript.CGFloat;
    setContinuousCollisionDetectionThreshold(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514801-applyforce
    applyForce_impulse(direction: cocoascript.SCNVector3, impulse: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514750-applyforce
    applyForce_atPosition_impulse(direction: cocoascript.SCNVector3, position: cocoascript.SCNVector3, impulse: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514752-applytorque
    applyTorque_impulse(torque: cocoascript.SCNVector4, impulse: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514735-clearallforces
    clearAllForces():void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514757-velocity
    velocity(): cocoascript.SCNVector3;
    setVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514770-angularvelocity
    angularVelocity(): cocoascript.SCNVector4;
    setAngularVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514795-isresting
    isResting(): cocoascript.BOOL;
    setIsResting(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514742-allowsresting
    allowsResting(): cocoascript.BOOL;
    setAllowsResting(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/3013745-setresting
    setResting(resting: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514782-resettransform
    resetTransform():void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/3022237-angularrestingthreshold
    angularRestingThreshold(): cocoascript.CGFloat;
    setAngularRestingThreshold(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/3022238-linearrestingthreshold
    linearRestingThreshold(): cocoascript.CGFloat;
    setLinearRestingThreshold(): void;
    //
    alloc():cocoascript.SCNPhysicsBody;
    //
    init():cocoascript.SCNPhysicsBody;
  }
}

declare const SCNPhysicsBody: cocoascript.SCNPhysicsBody;
declare namespace cocoascript {
  /**
   * A specification for augmenting or postprocessing SceneKit's rendering of a scene using additional drawing passes with custom Metal or OpenGL shaders.
   * doc://com.apple.documentation/documentation/scenekit/scntechnique
   */
  interface SCNTechnique extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scntechnique/1520494-techniquewithdictionary
    techniqueWithDictionary(dictionary: cocoascript.SCNTechnique):cocoascript.SCNTechnique;
    // doc://com.apple.documentation/documentation/scenekit/scntechnique/1520497-techniquebysequencingtechniques
    techniqueBySequencingTechniques(techniques: cocoascript.SCNTechnique):cocoascript.SCNTechnique;
    // doc://com.apple.documentation/documentation/scenekit/scntechnique/1520492-dictionaryrepresentation
    dictionaryRepresentation(): cocoascript.id;
    setDictionaryRepresentation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntechnique/1520490-handlebindingofsymbol
    handleBindingOfSymbol_usingBlock(symbol: cocoascript.NSString, block: cocoascript.SCNBindingBlock):void;
    // doc://com.apple.documentation/documentation/scenekit/scntechnique/1520495-setobject
    setObject_forKeyedSubscript(obj: cocoascript.SCNTechnique, key: cocoascript.NSCopying):void;
    // doc://com.apple.documentation/documentation/scenekit/scntechnique/1520493-objectforkeyedsubscript
    objectForKeyedSubscript(key: cocoascript.SCNTechnique):cocoascript.SCNTechnique;
    // doc://com.apple.documentation/documentation/scenekit/scntechnique/3229865-library
    library(): cocoascript.MTLLibrary;
    setLibrary(): void;
    //
    alloc():cocoascript.SCNTechnique;
    //
    init():cocoascript.SCNTechnique;
  }
}

declare const SCNTechnique: cocoascript.SCNTechnique;
declare namespace cocoascript {
  /**
   * An alternate resolution for a geometry that SceneKit automatically substitutes to improve rendering performance.
   * doc://com.apple.documentation/documentation/scenekit/scnlevelofdetail
   */
  interface SCNLevelOfDetail extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnlevelofdetail/1523557-levelofdetailwithgeometry
    levelOfDetailWithGeometry_screenSpaceRadius(geometry: cocoascript.SCNGeometry, radius: cocoascript.CGFloat):cocoascript.SCNLevelOfDetail;
    // doc://com.apple.documentation/documentation/scenekit/scnlevelofdetail/1522802-levelofdetailwithgeometry
    levelOfDetailWithGeometry_worldSpaceDistance(geometry: cocoascript.SCNGeometry, distance: cocoascript.CGFloat):cocoascript.SCNLevelOfDetail;
    // doc://com.apple.documentation/documentation/scenekit/scnlevelofdetail/1522819-geometry
    geometry(): cocoascript.SCNGeometry;
    setGeometry(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlevelofdetail/1523554-screenspaceradius
    screenSpaceRadius(): cocoascript.CGFloat;
    setScreenSpaceRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlevelofdetail/1524159-worldspacedistance
    worldSpaceDistance(): cocoascript.CGFloat;
    setWorldSpaceDistance(): void;
    //
    alloc():cocoascript.SCNLevelOfDetail;
    //
    init():cocoascript.SCNLevelOfDetail;
  }
}

declare const SCNLevelOfDetail: cocoascript.SCNLevelOfDetail;
declare namespace cocoascript {
  /**
   * A simple, reusable audio source—music or sound effects loaded from a file—for use in positional audio playback.
   * doc://com.apple.documentation/documentation/scenekit/scnaudiosource
   */
  interface SCNAudioSource extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnaudiosource/1524138-audiosourcenamed
    audioSourceNamed(fileName: cocoascript.NSString):cocoascript.SCNAudioSource;
    // doc://com.apple.documentation/documentation/scenekit/scnaudiosource/1524225-initwithfilenamed
    initWithFileNamed(name: cocoascript.NSString):cocoascript.SCNAudioSource;
    // doc://com.apple.documentation/documentation/scenekit/scnaudiosource/1523264-initwithurl
    initWithURL(url: cocoascript.NSURL):cocoascript.SCNAudioSource;
    // doc://com.apple.documentation/documentation/scenekit/scnaudiosource/1524185-positional
    positional(): cocoascript.BOOL;
    setPositional(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaudiosource/1523399-load
    load():void;
    // doc://com.apple.documentation/documentation/scenekit/scnaudiosource/1524106-volume
    volume(): number;
    setVolume(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaudiosource/1524189-rate
    rate(): number;
    setRate(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaudiosource/1523450-reverbblend
    reverbBlend(): number;
    setReverbBlend(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaudiosource/1524183-loops
    loops(): cocoascript.BOOL;
    setLoops(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaudiosource/1523475-shouldstream
    shouldStream(): cocoascript.BOOL;
    setShouldStream(): void;
    //
    alloc():cocoascript.SCNAudioSource;
    //
    init():cocoascript.SCNAudioSource;
  }
}

declare const SCNAudioSource: cocoascript.SCNAudioSource;
declare namespace cocoascript {
  /**
   * A light source that can be attached to a node to illuminate the scene.
   * doc://com.apple.documentation/documentation/scenekit/scnlight
   */
  interface SCNLight extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1542979-light
    light():cocoascript.SCNLight;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1419849-lightwithmdllight
    lightWithMDLLight(mdlLight: cocoascript.MDLLight):cocoascript.SCNLight;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522919-type
    type(): cocoascript.SCNLightType;
    setType(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523627-color
    color(): cocoascript.id;
    setColor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1640545-temperature
    temperature(): cocoascript.CGFloat;
    setTemperature(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1640548-intensity
    intensity(): cocoascript.CGFloat;
    setIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/2921276-sphericalharmonicscoefficients
    sphericalHarmonicsCoefficients(): cocoascript.NSData;
    setSphericalHarmonicsCoefficients(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522839-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523345-attributeforkey
    attributeForKey(key: cocoascript.NSString):cocoascript.SCNLight;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523148-setattribute
    setAttribute_forKey(attribute: cocoascript.SCNLight, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1524223-attenuationstartdistance
    attenuationStartDistance(): cocoascript.CGFloat;
    setAttenuationStartDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1524140-attenuationenddistance
    attenuationEndDistance(): cocoascript.CGFloat;
    setAttenuationEndDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522879-attenuationfalloffexponent
    attenuationFalloffExponent(): cocoascript.CGFloat;
    setAttenuationFalloffExponent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522797-spotinnerangle
    spotInnerAngle(): cocoascript.CGFloat;
    setSpotInnerAngle(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523382-spotouterangle
    spotOuterAngle(): cocoascript.CGFloat;
    setSpotOuterAngle(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523524-gobo
    gobo(): cocoascript.SCNMaterialProperty;
    setGobo(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523816-castsshadow
    castsShadow(): cocoascript.BOOL;
    setCastsShadow(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523724-shadowradius
    shadowRadius(): cocoascript.CGFloat;
    setShadowRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522864-shadowcolor
    shadowColor(): cocoascript.id;
    setShadowColor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1524127-shadowmapsize
    shadowMapSize(): cocoascript.CGSize;
    setShadowMapSize(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523300-shadowsamplecount
    shadowSampleCount(): cocoascript.NSUInteger;
    setShadowSampleCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522847-shadowmode
    shadowMode(): cocoascript.SCNShadowMode;
    setShadowMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522849-shadowbias
    shadowBias(): cocoascript.CGFloat;
    setShadowBias(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523951-orthographicscale
    orthographicScale(): cocoascript.CGFloat;
    setOrthographicScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522845-zfar
    zFar(): cocoascript.CGFloat;
    setZFar(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522630-znear
    zNear(): cocoascript.CGFloat;
    setZNear(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523669-categorybitmask
    categoryBitMask(): cocoascript.NSUInteger;
    setCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1640546-iesprofileurl
    IESProfileURL(): cocoascript.NSURL;
    setIESProfileURL(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042452-areaextents
    areaExtents(): cocoascript.simd_float3;
    setAreaExtents(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042453-areapolygonvertices
    areaPolygonVertices(): cocoascript.NSValue;
    setAreaPolygonVertices(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042454-areatype
    areaType(): cocoascript.SCNLightAreaType;
    setAreaType(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/2879207-automaticallyadjustsshadowprojec
    automaticallyAdjustsShadowProjection(): cocoascript.BOOL;
    setAutomaticallyAdjustsShadowProjection(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042455-doublesided
    doubleSided(): cocoascript.BOOL;
    setDoubleSided(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042456-drawsarea
    drawsArea(): cocoascript.BOOL;
    setDrawsArea(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/2879200-forcesbackfacecasters
    forcesBackFaceCasters(): cocoascript.BOOL;
    setForcesBackFaceCasters(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/2865867-maximumshadowdistance
    maximumShadowDistance(): cocoascript.CGFloat;
    setMaximumShadowDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042457-parallaxcenteroffset
    parallaxCenterOffset(): cocoascript.simd_float3;
    setParallaxCenterOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042458-parallaxcorrectionenabled
    parallaxCorrectionEnabled(): cocoascript.BOOL;
    setParallaxCorrectionEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042459-parallaxextentsfactor
    parallaxExtentsFactor(): cocoascript.simd_float3;
    setParallaxExtentsFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042460-probeenvironment
    probeEnvironment(): cocoascript.SCNMaterialProperty;
    setProbeEnvironment(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042461-probeextents
    probeExtents(): cocoascript.simd_float3;
    setProbeExtents(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042462-probeoffset
    probeOffset(): cocoascript.simd_float3;
    setProbeOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042463-probetype
    probeType(): cocoascript.SCNLightProbeType;
    setProbeType(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042464-probeupdatetype
    probeUpdateType(): cocoascript.SCNLightProbeUpdateType;
    setProbeUpdateType(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/2875915-sampledistributedshadowmaps
    sampleDistributedShadowMaps(): cocoascript.BOOL;
    setSampleDistributedShadowMaps(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/2865865-shadowcascadecount
    shadowCascadeCount(): cocoascript.NSUInteger;
    setShadowCascadeCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/2865866-shadowcascadesplittingfactor
    shadowCascadeSplittingFactor(): cocoascript.CGFloat;
    setShadowCascadeSplittingFactor(): void;
    //
    alloc():cocoascript.SCNLight;
    //
    init():cocoascript.SCNLight;
  }
}

declare const SCNLight: cocoascript.SCNLight;
declare namespace cocoascript {
  /**
   * An object that animates and renders a system of small image sprites using a high-level simulation whose general behavior you specify.
   * doc://com.apple.documentation/documentation/scenekit/scnparticlesystem
   */
  interface SCNParticleSystem extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1564486-particlesystem
    particleSystem():cocoascript.SCNParticleSystem;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522772-particlesystemnamed
    particleSystemNamed_inDirectory(name: cocoascript.NSString, directory: cocoascript.NSString):cocoascript.SCNParticleSystem;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523998-emissionduration
    emissionDuration(): cocoascript.CGFloat;
    setEmissionDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523842-emissiondurationvariation
    emissionDurationVariation(): cocoascript.CGFloat;
    setEmissionDurationVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522998-idleduration
    idleDuration(): cocoascript.CGFloat;
    setIdleDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523018-idledurationvariation
    idleDurationVariation(): cocoascript.CGFloat;
    setIdleDurationVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522618-loops
    loops(): cocoascript.BOOL;
    setLoops(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522597-warmupduration
    warmupDuration(): cocoascript.CGFloat;
    setWarmupDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522857-birthrate
    birthRate(): cocoascript.CGFloat;
    setBirthRate(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524147-birthratevariation
    birthRateVariation(): cocoascript.CGFloat;
    setBirthRateVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522737-emittershape
    emitterShape(): cocoascript.SCNGeometry;
    setEmitterShape(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522899-birthlocation
    birthLocation(): cocoascript.SCNParticleBirthLocation;
    setBirthLocation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523361-birthdirection
    birthDirection(): cocoascript.SCNParticleBirthDirection;
    setBirthDirection(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523600-emittingdirection
    emittingDirection(): cocoascript.SCNVector3;
    setEmittingDirection(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522862-spreadingangle
    spreadingAngle(): cocoascript.CGFloat;
    setSpreadingAngle(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523896-particleangle
    particleAngle(): cocoascript.CGFloat;
    setParticleAngle(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522828-particleanglevariation
    particleAngleVariation(): cocoascript.CGFloat;
    setParticleAngleVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523946-particlevelocity
    particleVelocity(): cocoascript.CGFloat;
    setParticleVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524157-particlevelocityvariation
    particleVelocityVariation(): cocoascript.CGFloat;
    setParticleVelocityVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522757-particleangularvelocity
    particleAngularVelocity(): cocoascript.CGFloat;
    setParticleAngularVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523590-particleangularvelocityvariation
    particleAngularVelocityVariation(): cocoascript.CGFloat;
    setParticleAngularVelocityVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523575-particlelifespan
    particleLifeSpan(): cocoascript.CGFloat;
    setParticleLifeSpan(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523567-particlelifespanvariation
    particleLifeSpanVariation(): cocoascript.CGFloat;
    setParticleLifeSpanVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523508-particlesize
    particleSize(): cocoascript.CGFloat;
    setParticleSize(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522716-particlesizevariation
    particleSizeVariation(): cocoascript.CGFloat;
    setParticleSizeVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523248-particlecolor
    particleColor(): cocoascript.UIColor;
    setParticleColor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523639-particlecolorvariation
    particleColorVariation(): cocoascript.SCNVector4;
    setParticleColorVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524153-particleimage
    particleImage(): cocoascript.id;
    setParticleImage(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523317-fresnelexponent
    fresnelExponent(): cocoascript.CGFloat;
    setFresnelExponent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523338-stretchfactor
    stretchFactor(): cocoascript.CGFloat;
    setStretchFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523340-imagesequencerowcount
    imageSequenceRowCount(): cocoascript.NSUInteger;
    setImageSequenceRowCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523462-imagesequencecolumncount
    imageSequenceColumnCount(): cocoascript.NSUInteger;
    setImageSequenceColumnCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523511-imagesequenceinitialframe
    imageSequenceInitialFrame(): cocoascript.CGFloat;
    setImageSequenceInitialFrame(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523821-imagesequenceinitialframevariati
    imageSequenceInitialFrameVariation(): cocoascript.CGFloat;
    setImageSequenceInitialFrameVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524075-imagesequenceframerate
    imageSequenceFrameRate(): cocoascript.CGFloat;
    setImageSequenceFrameRate(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523667-imagesequenceframeratevariation
    imageSequenceFrameRateVariation(): cocoascript.CGFloat;
    setImageSequenceFrameRateVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522816-imagesequenceanimationmode
    imageSequenceAnimationMode(): cocoascript.SCNParticleImageSequenceAnimationMode;
    setImageSequenceAnimationMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523452-affectedbygravity
    affectedByGravity(): cocoascript.BOOL;
    setAffectedByGravity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523353-affectedbyphysicsfields
    affectedByPhysicsFields(): cocoascript.BOOL;
    setAffectedByPhysicsFields(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523516-collidernodes
    colliderNodes(): any;
    setColliderNodes(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523357-particlediesoncollision
    particleDiesOnCollision(): cocoascript.BOOL;
    setParticleDiesOnCollision(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522766-acceleration
    acceleration(): cocoascript.SCNVector3;
    setAcceleration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522931-dampingfactor
    dampingFactor(): cocoascript.CGFloat;
    setDampingFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522607-particlemass
    particleMass(): cocoascript.CGFloat;
    setParticleMass(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523408-particlemassvariation
    particleMassVariation(): cocoascript.CGFloat;
    setParticleMassVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523156-particlecharge
    particleCharge(): cocoascript.CGFloat;
    setParticleCharge(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523377-particlechargevariation
    particleChargeVariation(): cocoascript.CGFloat;
    setParticleChargeVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522637-particlebounce
    particleBounce(): cocoascript.CGFloat;
    setParticleBounce(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522662-particlebouncevariation
    particleBounceVariation(): cocoascript.CGFloat;
    setParticleBounceVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524010-particlefriction
    particleFriction(): cocoascript.CGFloat;
    setParticleFriction(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522868-particlefrictionvariation
    particleFrictionVariation(): cocoascript.CGFloat;
    setParticleFrictionVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524068-systemspawnedoncollision
    systemSpawnedOnCollision(): cocoascript.SCNParticleSystem;
    setSystemSpawnedOnCollision(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524091-systemspawnedondying
    systemSpawnedOnDying(): cocoascript.SCNParticleSystem;
    setSystemSpawnedOnDying(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522751-systemspawnedonliving
    systemSpawnedOnLiving(): cocoascript.SCNParticleSystem;
    setSystemSpawnedOnLiving(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523728-blendmode
    blendMode(): cocoascript.SCNParticleBlendMode;
    setBlendMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523131-orientationmode
    orientationMode(): cocoascript.SCNParticleOrientationMode;
    setOrientationMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522795-sortingmode
    sortingMode(): cocoascript.SCNParticleSortingMode;
    setSortingMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522794-lightingenabled
    lightingEnabled(): cocoascript.BOOL;
    setLightingEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523901-blackpassenabled
    blackPassEnabled(): cocoascript.BOOL;
    setBlackPassEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522855-local
    local(): cocoascript.BOOL;
    setLocal(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522968-reset
    reset():void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522988-speedfactor
    speedFactor(): cocoascript.CGFloat;
    setSpeedFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523251-handleevent
    handleEvent_forProperties_withBlock(event: cocoascript.SCNParticleEvent, properties: cocoascript.SCNParticleProperty, block: cocoascript.SCNParticleEventBlock):void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522775-propertycontrollers
    propertyControllers(): cocoascript.SCNParticlePropertyController;
    setPropertyControllers(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522635-addmodifierforproperties
    addModifierForProperties_atStage_withBlock(properties: cocoascript.SCNParticleProperty, stage: cocoascript.SCNParticleModifierStage, block: cocoascript.SCNParticleModifierBlock):void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524077-removemodifiersofstage
    removeModifiersOfStage(stage: cocoascript.SCNParticleModifierStage):void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523614-removeallmodifiers
    removeAllModifiers():void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/2866184-orientationdirection
    orientationDirection(): cocoascript.SCNVector3;
    setOrientationDirection(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/2866186-particleintensity
    particleIntensity(): cocoascript.CGFloat;
    setParticleIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/2866185-particleintensityvariation
    particleIntensityVariation(): cocoascript.CGFloat;
    setParticleIntensityVariation(): void;
    //
    alloc():cocoascript.SCNParticleSystem;
    //
    init():cocoascript.SCNParticleSystem;
  }
}

declare const SCNParticleSystem: cocoascript.SCNParticleSystem;
declare namespace cocoascript {
  /**
   * An animation for a single property of the individual particles rendered by a particle system.
   * doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontroller
   */
  interface SCNParticlePropertyController extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontroller/1523579-controllerwithanimation
    controllerWithAnimation(animation: cocoascript.CAAnimation):cocoascript.SCNParticlePropertyController;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontroller/1523707-animation
    animation(): cocoascript.CAAnimation;
    setAnimation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontroller/1522852-inputmode
    inputMode(): cocoascript.SCNParticleInputMode;
    setInputMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontroller/1523994-inputbias
    inputBias(): cocoascript.CGFloat;
    setInputBias(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontroller/1522903-inputscale
    inputScale(): cocoascript.CGFloat;
    setInputScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontroller/1522895-inputorigin
    inputOrigin(): any;
    setInputOrigin(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontroller/1522973-inputproperty
    inputProperty(): cocoascript.SCNParticleProperty;
    setInputProperty(): void;
    //
    alloc():cocoascript.SCNParticlePropertyController;
    //
    init():cocoascript.SCNParticlePropertyController;
  }
}

declare const SCNParticlePropertyController: cocoascript.SCNParticlePropertyController;
declare namespace cocoascript {
  /**
   * A complete Metal or OpenGL shader program that replaces SceneKit's rendering of a geometry or material.
   * doc://com.apple.documentation/documentation/scenekit/scnprogram
   */
  interface SCNProgram extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1565076-program
    program():cocoascript.SCNProgram;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1522891-vertexshader
    vertexShader(): cocoascript.NSString;
    setVertexShader(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1523135-fragmentshader
    fragmentShader(): cocoascript.NSString;
    setFragmentShader(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1524049-geometryshader
    geometryShader(): cocoascript.NSString;
    setGeometryShader(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1523852-tessellationcontrolshader
    tessellationControlShader(): cocoascript.NSString;
    setTessellationControlShader(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1523760-tessellationevaluationshader
    tessellationEvaluationShader(): cocoascript.NSString;
    setTessellationEvaluationShader(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1522730-setsemantic
    setSemantic_forSymbol_options(semantic: cocoascript.NSString, symbol: cocoascript.NSString, options: cocoascript.SCNProgram):void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1523350-semanticforsymbol
    semanticForSymbol(symbol: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1522611-delegate
    delegate(): cocoascript.SCNProgramDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1522844-opaque
    opaque(): cocoascript.BOOL;
    setOpaque(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1524047-handlebindingofbuffernamed
    handleBindingOfBufferNamed_frequency_usingBlock(name: cocoascript.NSString, frequency: cocoascript.SCNBufferFrequency, block: cocoascript.SCNBufferBindingBlock):void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1522799-vertexfunctionname
    vertexFunctionName(): cocoascript.NSString;
    setVertexFunctionName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1524012-fragmentfunctionname
    fragmentFunctionName(): cocoascript.NSString;
    setFragmentFunctionName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1522934-library
    library(): cocoascript.MTLLibrary;
    setLibrary(): void;
    //
    alloc():cocoascript.SCNProgram;
    //
    init():cocoascript.SCNProgram;
  }
}

declare const SCNProgram: cocoascript.SCNProgram;
// doc://com.apple.documentation/documentation/scenekit/scnprogrammappingchannelkey
declare const SCNProgramMappingChannelKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/scenekit/scnmodeltransform
declare const SCNModelTransform: cocoascript.NSString;
// doc://com.apple.documentation/documentation/scenekit/scnmodelviewprojectiontransform
declare const SCNModelViewProjectionTransform: cocoascript.NSString;
// doc://com.apple.documentation/documentation/scenekit/scnmodelviewtransform
declare const SCNModelViewTransform: cocoascript.NSString;
// doc://com.apple.documentation/documentation/scenekit/scnnormaltransform
declare const SCNNormalTransform: cocoascript.NSString;
// doc://com.apple.documentation/documentation/scenekit/scnprojectiontransform
declare const SCNProjectionTransform: cocoascript.NSString;
// doc://com.apple.documentation/documentation/scenekit/scnviewtransform
declare const SCNViewTransform: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A simple, reusable animation that changes attributes of any node you attach it to.
   * doc://com.apple.documentation/documentation/scenekit/scnaction
   */
  interface SCNAction extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523238-movebyx
    moveByX_y_z_duration(deltaX: cocoascript.CGFloat, deltaY: cocoascript.CGFloat, deltaZ: cocoascript.CGFloat, duration: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522605-moveby
    moveBy_duration(delta: cocoascript.SCNVector3, duration: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522826-moveto
    moveTo_duration(location: cocoascript.SCNVector3, duration: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523522-rotatebyx
    rotateByX_y_z_duration(xAngle: cocoascript.CGFloat, yAngle: cocoascript.CGFloat, zAngle: cocoascript.CGFloat, duration: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1524044-rotatetox
    rotateToX_y_z_duration(xAngle: cocoascript.CGFloat, yAngle: cocoascript.CGFloat, zAngle: cocoascript.CGFloat, duration: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522808-rotatetox
    rotateToX_y_z_duration_shortestUnitArc(xAngle: cocoascript.CGFloat, yAngle: cocoascript.CGFloat, zAngle: cocoascript.CGFloat, duration: cocoascript.NSTimeInterval, shortestUnitArc: cocoascript.BOOL):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523805-rotatebyangle
    rotateByAngle_aroundAxis_duration(angle: cocoascript.CGFloat, axis: cocoascript.SCNVector3, duration: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1524191-rotatetoaxisangle
    rotateToAxisAngle_duration(axisAngle: cocoascript.SCNVector4, duration: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523129-scaleby
    scaleBy_duration(scale: cocoascript.CGFloat, sec: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523322-scaleto
    scaleTo_duration(scale: cocoascript.CGFloat, sec: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522777-fadeinwithduration
    fadeInWithDuration(sec: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523922-fadeoutwithduration
    fadeOutWithDuration(sec: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523595-fadeopacityby
    fadeOpacityBy_duration(factor: cocoascript.CGFloat, sec: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523875-fadeopacityto
    fadeOpacityTo_duration(opacity: cocoascript.CGFloat, sec: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523487-hide
    hide():cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1524205-unhide
    unhide():cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522966-removefromparentnode
    removeFromParentNode():cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523651-playaudiosource
    playAudioSource_waitForCompletion(source: cocoascript.SCNAudioSource, wait: cocoascript.BOOL):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522779-group
    group(actions: cocoascript.SCNAction):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522793-sequence
    sequence(actions: cocoascript.SCNAction):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522764-repeataction
    repeatAction_count(action: cocoascript.SCNAction, count: cocoascript.NSUInteger):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522908-repeatactionforever
    repeatActionForever(action: cocoascript.SCNAction):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523915-waitforduration
    waitForDuration(sec: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523086-waitforduration
    waitForDuration_withRange(sec: cocoascript.NSTimeInterval, durationRange: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523637-runblock
    runBlock(block: any):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522875-runblock
    runBlock_queue(block: any, queue: cocoascript.dispatch_queue_t):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523692-customactionwithduration
    customActionWithDuration_actionBlock(seconds: cocoascript.NSTimeInterval, block: cocoascript.CGFloat):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523984-javascriptactionwithscript
    javaScriptActionWithScript_duration(script: cocoascript.NSString, seconds: cocoascript.NSTimeInterval):cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522815-reversedaction
    reversedAction():cocoascript.SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1524162-duration
    duration(): cocoascript.NSTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522811-speed
    speed(): cocoascript.CGFloat;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1524055-timingmode
    timingMode(): cocoascript.SCNActionTimingMode;
    setTimingMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1524130-timingfunction
    timingFunction(): cocoascript.SCNActionTimingFunction;
    setTimingFunction(): void;
    //
    alloc():cocoascript.SCNAction;
    //
    init():cocoascript.SCNAction;
  }
}

declare const SCNAction: cocoascript.SCNAction;
declare namespace cocoascript {
  /**
   * A three-dimensional shape (also called a model or mesh) that can be displayed in a scene, with attached materials that define its appearance.
   * doc://com.apple.documentation/documentation/scenekit/scngeometry
   */
  interface SCNGeometry extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1522803-geometrywithsources
    geometryWithSources_elements(sources: cocoascript.SCNGeometrySource, elements: cocoascript.SCNGeometryElement):cocoascript.SCNGeometry;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1585530-geometry
    geometry():cocoascript.SCNGeometry;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1419845-geometrywithmdlmesh
    geometryWithMDLMesh(mdlMesh: cocoascript.MDLMesh):cocoascript.SCNGeometry;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1522953-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523472-materials
    materials(): cocoascript.SCNMaterial;
    setMaterials(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523485-firstmaterial
    firstMaterial(): cocoascript.SCNMaterial;
    setFirstMaterial(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523789-materialwithname
    materialWithName(name: cocoascript.NSString):cocoascript.SCNMaterial;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1522876-insertmaterial
    insertMaterial_atIndex(material: cocoascript.SCNMaterial, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1522646-removematerialatindex
    removeMaterialAtIndex(index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1522714-replacematerialatindex
    replaceMaterialAtIndex_withMaterial(index: cocoascript.NSUInteger, material: cocoascript.SCNMaterial):void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523046-geometryelements
    geometryElements(): cocoascript.SCNGeometryElement;
    setGeometryElements(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523662-geometrysources
    geometrySources(): cocoascript.SCNGeometrySource;
    setGeometrySources(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523800-geometryelementcount
    geometryElementCount(): cocoascript.NSInteger;
    setGeometryElementCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523266-geometryelementatindex
    geometryElementAtIndex(elementIndex: cocoascript.NSInteger):cocoascript.SCNGeometryElement;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1522926-geometrysourcesforsemantic
    geometrySourcesForSemantic(semantic: cocoascript.SCNGeometrySourceSemantic):cocoascript.SCNGeometrySource;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523745-levelsofdetail
    levelsOfDetail(): cocoascript.SCNLevelOfDetail;
    setLevelsOfDetail(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1524177-subdivisionlevel
    subdivisionLevel(): cocoascript.NSUInteger;
    setSubdivisionLevel(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523246-edgecreaseselement
    edgeCreasesElement(): cocoascript.SCNGeometryElement;
    setEdgeCreasesElement(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523479-edgecreasessource
    edgeCreasesSource(): cocoascript.SCNGeometrySource;
    setEdgeCreasesSource(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/2888353-wantsadaptivesubdivision
    wantsAdaptiveSubdivision(): cocoascript.BOOL;
    setWantsAdaptiveSubdivision(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/2867472-tessellator
    tessellator(): cocoascript.SCNGeometryTessellator;
    setTessellator(): void;
    //
    alloc():cocoascript.SCNGeometry;
    //
    init():cocoascript.SCNGeometry;
  }
}

declare const SCNGeometry: cocoascript.SCNGeometry;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnanimationplayer
   */
  interface SCNAnimationPlayer extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2866046-animationplayerwithanimation
    animationPlayerWithAnimation(animation: cocoascript.SCNAnimation):cocoascript.SCNAnimationPlayer;
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2866065-animation
    animation(): cocoascript.SCNAnimation;
    setAnimation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2881688-blendfactor
    blendFactor(): cocoascript.CGFloat;
    setBlendFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2866058-paused
    paused(): cocoascript.BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2866041-speed
    speed(): cocoascript.CGFloat;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2866049-play
    play():void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2866055-stop
    stop():void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2887037-stopwithblendoutduration
    stopWithBlendOutDuration(duration: cocoascript.NSTimeInterval):void;
    //
    alloc():cocoascript.SCNAnimationPlayer;
    //
    init():cocoascript.SCNAnimationPlayer;
  }
}

declare const SCNAnimationPlayer: cocoascript.SCNAnimationPlayer;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnanimation-erl
   */
  interface SCNAnimation extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866056-animationwithcaanimation
    animationWithCAAnimation(caAnimation: cocoascript.CAAnimation):cocoascript.SCNAnimation;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866053-animationwithcontentsofurl
    animationWithContentsOfURL(animationUrl: cocoascript.NSURL):cocoascript.SCNAnimation;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866042-animationnamed
    animationNamed(animationName: cocoascript.NSString):cocoascript.SCNAnimation;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866063-animationdidstart
    animationDidStart(): cocoascript.SCNAnimationDidStartBlock;
    setAnimationDidStart(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866040-animationdidstop
    animationDidStop(): cocoascript.SCNAnimationDidStopBlock;
    setAnimationDidStop(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866038-animationevents
    animationEvents(): cocoascript.SCNAnimationEvent;
    setAnimationEvents(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878140-autoreverses
    autoreverses(): cocoascript.BOOL;
    setAutoreverses(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2881689-blendinduration
    blendInDuration(): cocoascript.NSTimeInterval;
    setBlendInDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2881690-blendoutduration
    blendOutDuration(): cocoascript.NSTimeInterval;
    setBlendOutDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866057-duration
    duration(): cocoascript.NSTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878138-fillsbackward
    fillsBackward(): cocoascript.BOOL;
    setFillsBackward(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878132-fillsforward
    fillsForward(): cocoascript.BOOL;
    setFillsForward(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866062-additive
    additive(): cocoascript.BOOL;
    setAdditive(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878139-appliedoncompletion
    appliedOnCompletion(): cocoascript.BOOL;
    setAppliedOnCompletion(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866047-cumulative
    cumulative(): cocoascript.BOOL;
    setCumulative(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878126-removedoncompletion
    removedOnCompletion(): cocoascript.BOOL;
    setRemovedOnCompletion(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878148-keypath
    keyPath(): cocoascript.NSString;
    setKeyPath(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878146-repeatcount
    repeatCount(): cocoascript.CGFloat;
    setRepeatCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878135-startdelay
    startDelay(): cocoascript.NSTimeInterval;
    setStartDelay(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878147-timeoffset
    timeOffset(): cocoascript.NSTimeInterval;
    setTimeOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878143-timingfunction
    timingFunction(): cocoascript.SCNTimingFunction;
    setTimingFunction(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878127-usesscenetimebase
    usesSceneTimeBase(): cocoascript.BOOL;
    setUsesSceneTimeBase(): void;
    //
    alloc():cocoascript.SCNAnimation;
    //
    init():cocoascript.SCNAnimation;
  }
}

declare const SCNAnimation: cocoascript.SCNAnimation;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator
   */
  interface SCNGeometryTessellator extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889889-smoothingmode
    smoothingMode(): cocoascript.SCNTessellationSmoothingMode;
    setSmoothingMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889886-edgetessellationfactor
    edgeTessellationFactor(): cocoascript.CGFloat;
    setEdgeTessellationFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889878-insidetessellationfactor
    insideTessellationFactor(): cocoascript.CGFloat;
    setInsideTessellationFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889881-adaptive
    adaptive(): cocoascript.BOOL;
    setAdaptive(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889879-screenspace
    screenSpace(): cocoascript.BOOL;
    setScreenSpace(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889888-maximumedgelength
    maximumEdgeLength(): cocoascript.CGFloat;
    setMaximumEdgeLength(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889887-tessellationfactorscale
    tessellationFactorScale(): cocoascript.CGFloat;
    setTessellationFactorScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889882-tessellationpartitionmode
    tessellationPartitionMode(): cocoascript.MTLTessellationPartitionMode;
    setTessellationPartitionMode(): void;
    //
    alloc():cocoascript.SCNGeometryTessellator;
    //
    init():cocoascript.SCNGeometryTessellator;
  }
}

declare const SCNGeometryTessellator: cocoascript.SCNGeometryTessellator;
declare namespace cocoascript {
  /**
   * The abstract superclass for joints, vehicle simulations, and other high-level behaviors that incorporate multiple physics bodies.
   * doc://com.apple.documentation/documentation/scenekit/scnphysicsbehavior
   */
  interface SCNPhysicsBehavior extends NSObject {
    //
    alloc():cocoascript.SCNPhysicsBehavior;
    //
    init():cocoascript.SCNPhysicsBehavior;
  }
}

declare const SCNPhysicsBehavior: cocoascript.SCNPhysicsBehavior;
declare namespace cocoascript {
  /**
   * A container for the color or texture of one of a material’s visual properties.
   * doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty
   */
  interface SCNMaterialProperty extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395386-materialpropertywithcontents
    materialPropertyWithContents(contents: cocoascript.SCNMaterialProperty):cocoascript.SCNMaterialProperty;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395372-contents
    contents(): cocoascript.id;
    setContents(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395407-intensity
    intensity(): cocoascript.CGFloat;
    setIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395388-contentstransform
    contentsTransform(): cocoascript.SCNMatrix4;
    setContentsTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395384-wraps
    wrapS(): cocoascript.SCNWrapMode;
    setWrapS(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395382-wrapt
    wrapT(): cocoascript.SCNWrapMode;
    setWrapT(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395390-minificationfilter
    minificationFilter(): cocoascript.SCNFilterMode;
    setMinificationFilter(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395378-magnificationfilter
    magnificationFilter(): cocoascript.SCNFilterMode;
    setMagnificationFilter(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395398-mipfilter
    mipFilter(): cocoascript.SCNFilterMode;
    setMipFilter(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395402-maxanisotropy
    maxAnisotropy(): cocoascript.CGFloat;
    setMaxAnisotropy(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395405-mappingchannel
    mappingChannel(): cocoascript.NSInteger;
    setMappingChannel(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395376-bordercolor
    borderColor(): cocoascript.id;
    setBorderColor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/2865880-texturecomponents
    textureComponents(): cocoascript.SCNColorMask;
    setTextureComponents(): void;
    //
    alloc():cocoascript.SCNMaterialProperty;
    //
    init():cocoascript.SCNMaterialProperty;
  }
}

declare const SCNMaterialProperty: cocoascript.SCNMaterialProperty;
declare namespace cocoascript {
  /**
   * The global simulation of collisions, gravity, joints, and other physics effects in a scene.
   * doc://com.apple.documentation/documentation/scenekit/scnphysicsworld
   */
  interface SCNPhysicsWorld extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512855-gravity
    gravity(): cocoascript.SCNVector3;
    setGravity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512851-speed
    speed(): cocoascript.CGFloat;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512881-timestep
    timeStep(): cocoascript.NSTimeInterval;
    setTimeStep(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512877-updatecollisionpairs
    updateCollisionPairs():void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512839-addbehavior
    addBehavior(behavior: cocoascript.SCNPhysicsBehavior):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512870-removebehavior
    removeBehavior(behavior: cocoascript.SCNPhysicsBehavior):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512853-allbehaviors
    allBehaviors(): cocoascript.SCNPhysicsBehavior;
    setAllBehaviors(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512849-removeallbehaviors
    removeAllBehaviors():void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512843-contactdelegate
    contactDelegate(): cocoascript.SCNPhysicsContactDelegate;
    setContactDelegate(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512875-contacttestbetweenbody
    contactTestBetweenBody_andBody_options(bodyA: cocoascript.SCNPhysicsBody, bodyB: cocoascript.SCNPhysicsBody, options: cocoascript.SCNPhysicsWorld):cocoascript.SCNPhysicsContact;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512841-contacttestwithbody
    contactTestWithBody_options(body: cocoascript.SCNPhysicsBody, options: cocoascript.SCNPhysicsWorld):cocoascript.SCNPhysicsContact;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512857-raytestwithsegmentfrompoint
    rayTestWithSegmentFromPoint_toPoint_options(origin: cocoascript.SCNVector3, dest: cocoascript.SCNVector3, options: cocoascript.SCNPhysicsWorld):any;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512859-convexsweeptestwithshape
    convexSweepTestWithShape_fromTransform_toTransform_options(shape: cocoascript.SCNPhysicsShape, from: cocoascript.SCNMatrix4, to: cocoascript.SCNMatrix4, options: cocoascript.SCNPhysicsWorld):cocoascript.SCNPhysicsContact;
    //
    alloc():cocoascript.SCNPhysicsWorld;
    //
    init():cocoascript.SCNPhysicsWorld;
  }
}

declare const SCNPhysicsWorld: cocoascript.SCNPhysicsWorld;
declare namespace cocoascript {
  /**
   * An object that manages the relationship between skeletal animations and the nodes and geometries they animate.
   * doc://com.apple.documentation/documentation/scenekit/scnskinner
   */
  interface SCNSkinner extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnskinner/1523964-skinnerwithbasegeometry
    skinnerWithBaseGeometry_bones_boneInverseBindTransforms_boneWeights_boneIndices(baseGeometry: cocoascript.SCNGeometry, bones: any, boneInverseBindTransforms: cocoascript.NSValue, boneWeights: cocoascript.SCNGeometrySource, boneIndices: cocoascript.SCNGeometrySource):cocoascript.SCNSkinner;
    // doc://com.apple.documentation/documentation/scenekit/scnskinner/1522823-basegeometry
    baseGeometry(): cocoascript.SCNGeometry;
    setBaseGeometry(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnskinner/1523160-basegeometrybindtransform
    baseGeometryBindTransform(): cocoascript.SCNMatrix4;
    setBaseGeometryBindTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnskinner/1523048-skeleton
    skeleton(): any;
    setSkeleton(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnskinner/1522732-bones
    bones(): any;
    setBones(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnskinner/1523802-boneinversebindtransforms
    boneInverseBindTransforms(): cocoascript.NSValue;
    setBoneInverseBindTransforms(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnskinner/1522986-boneweights
    boneWeights(): cocoascript.SCNGeometrySource;
    setBoneWeights(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnskinner/1524117-boneindices
    boneIndices(): cocoascript.SCNGeometrySource;
    setBoneIndices(): void;
    //
    alloc():cocoascript.SCNSkinner;
    //
    init():cocoascript.SCNSkinner;
  }
}

declare const SCNSkinner: cocoascript.SCNSkinner;
declare namespace cocoascript {
  /**
   * An object that manages smooth transitions between a node's base geometry and one or more target geometries.
   * doc://com.apple.documentation/documentation/scenekit/scnmorpher
   */
  interface SCNMorpher extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnmorpher/1523572-targets
    targets(): cocoascript.SCNGeometry;
    setTargets(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmorpher/1522940-weightfortargetatindex
    weightForTargetAtIndex(targetIndex: cocoascript.NSUInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/scenekit/scnmorpher/1522886-setweight
    setWeight_forTargetAtIndex(weight: cocoascript.CGFloat, targetIndex: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/scenekit/scnmorpher/1523754-calculationmode
    calculationMode(): cocoascript.SCNMorpherCalculationMode;
    setCalculationMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmorpher/2875540-unifiesnormals
    unifiesNormals(): cocoascript.BOOL;
    setUnifiesNormals(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmorpher/2873319-weights
    weights(): cocoascript.NSNumber;
    setWeights(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmorpher/2915238-setweight
    setWeight_forTargetNamed(weight: cocoascript.CGFloat, targetName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnmorpher/2915239-weightfortargetnamed
    weightForTargetNamed(targetName: cocoascript.NSString):cocoascript.CGFloat;
    //
    alloc():cocoascript.SCNMorpher;
    //
    init():cocoascript.SCNMorpher;
  }
}

declare const SCNMorpher: cocoascript.SCNMorpher;
declare namespace cocoascript {
  /**
   * A container for the node hierarchy and global properties that together form a displayable 3D scene.
   * doc://com.apple.documentation/documentation/scenekit/scnscene
   */
  interface SCNScene extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1574179-scene
    scene():any;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1523355-scenenamed
    sceneNamed(name: cocoascript.NSString):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522851-scenenamed
    sceneNamed_inDirectory_options(name: cocoascript.NSString, directory: cocoascript.NSString, options: any):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522660-scenewithurl
    sceneWithURL_options_error(url: cocoascript.NSURL, options: any, error: cocoascript.NSError):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1419833-scenewithmdlasset
    sceneWithMDLAsset(mdlAsset: cocoascript.MDLAsset):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1523604-paused
    paused(): cocoascript.BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1524029-rootnode
    rootNode(): any;
    setRootNode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1523665-background
    background(): cocoascript.SCNMaterialProperty;
    setBackground(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1639532-lightingenvironment
    lightingEnvironment(): cocoascript.SCNMaterialProperty;
    setLightingEnvironment(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522858-attributeforkey
    attributeForKey(key: cocoascript.NSString):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1524229-setattribute
    setAttribute_forKey(attribute: any, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1523577-writetourl
    writeToURL_options_delegate_progressHandler(url: cocoascript.NSURL, options: any, delegate: cocoascript.SCNSceneExportDelegate, progressHandler: cocoascript.SCNSceneExportProgressHandler):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522790-fogstartdistance
    fogStartDistance(): cocoascript.CGFloat;
    setFogStartDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1523836-fogenddistance
    fogEndDistance(): cocoascript.CGFloat;
    setFogEndDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1523776-fogdensityexponent
    fogDensityExponent(): cocoascript.CGFloat;
    setFogDensityExponent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522774-fogcolor
    fogColor(): cocoascript.id;
    setFogColor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522643-physicsworld
    physicsWorld(): cocoascript.SCNPhysicsWorld;
    setPhysicsWorld(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1523359-addparticlesystem
    addParticleSystem_withTransform(system: cocoascript.SCNParticleSystem, transform: cocoascript.SCNMatrix4):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522787-particlesystems
    particleSystems(): cocoascript.SCNParticleSystem;
    setParticleSystems(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1523498-removeparticlesystem
    removeParticleSystem(system: cocoascript.SCNParticleSystem):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522786-removeallparticlesystems
    removeAllParticleSystems():void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/3227910-screenspacereflectionmaximumdist
    screenSpaceReflectionMaximumDistance(): cocoascript.CGFloat;
    setScreenSpaceReflectionMaximumDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/3075424-screenspacereflectionsamplecount
    screenSpaceReflectionSampleCount(): cocoascript.NSInteger;
    setScreenSpaceReflectionSampleCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/3227911-screenspacereflectionstride
    screenSpaceReflectionStride(): cocoascript.CGFloat;
    setScreenSpaceReflectionStride(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/3075425-wantsscreenspacereflection
    wantsScreenSpaceReflection(): cocoascript.BOOL;
    setWantsScreenSpaceReflection(): void;
    //
    alloc():any;
    //
    init():any;
  }
}

declare const SCNScene: any;
declare namespace cocoascript {
  /**
   * A container for vertex data forming part of the definition for a three-dimensional object, or geometry.
   * doc://com.apple.documentation/documentation/scenekit/scngeometrysource
   */
  interface SCNGeometrySource extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1523320-geometrysourcewithdata
    geometrySourceWithData_semantic_vectorCount_floatComponents_componentsPerVector_bytesPerComponent_dataOffset_dataStride(data: cocoascript.NSData, semantic: cocoascript.SCNGeometrySourceSemantic, vectorCount: cocoascript.NSInteger, floatComponents: cocoascript.BOOL, componentsPerVector: cocoascript.NSInteger, bytesPerComponent: cocoascript.NSInteger, offset: cocoascript.NSInteger, stride: cocoascript.NSInteger):cocoascript.SCNGeometrySource;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1523882-geometrysourcewithvertices
    geometrySourceWithVertices_count(vertices: cocoascript.SCNVector3, count: cocoascript.NSInteger):cocoascript.SCNGeometrySource;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522882-geometrysourcewithnormals
    geometrySourceWithNormals_count(normals: cocoascript.SCNVector3, count: cocoascript.NSInteger):cocoascript.SCNGeometrySource;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522718-geometrysourcewithtexturecoordin
    geometrySourceWithTextureCoordinates_count(texcoord: cocoascript.CGPoint, count: cocoascript.NSInteger):cocoascript.SCNGeometrySource;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522881-data
    data(): cocoascript.NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1523071-semantic
    semantic(): cocoascript.SCNGeometrySourceSemantic;
    setSemantic(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522648-vectorcount
    vectorCount(): cocoascript.NSInteger;
    setVectorCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522920-floatcomponents
    floatComponents(): cocoascript.BOOL;
    setFloatComponents(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522832-componentspervector
    componentsPerVector(): cocoascript.NSInteger;
    setComponentsPerVector(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522633-bytespercomponent
    bytesPerComponent(): cocoascript.NSInteger;
    setBytesPerComponent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522834-dataoffset
    dataOffset(): cocoascript.NSInteger;
    setDataOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1524197-datastride
    dataStride(): cocoascript.NSInteger;
    setDataStride(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522873-geometrysourcewithbuffer
    geometrySourceWithBuffer_vertexFormat_semantic_vertexCount_dataOffset_dataStride(buffer: cocoascript.MTLBuffer, vertexFormat: cocoascript.MTLVertexFormat, semantic: cocoascript.SCNGeometrySourceSemantic, vertexCount: cocoascript.NSInteger, offset: cocoascript.NSInteger, stride: cocoascript.NSInteger):cocoascript.SCNGeometrySource;
    //
    alloc():cocoascript.SCNGeometrySource;
    //
    init():cocoascript.SCNGeometrySource;
  }
}

declare const SCNGeometrySource: cocoascript.SCNGeometrySource;
declare namespace cocoascript {
  /**
   * A container for index data describing how vertices connect to define a three-dimensional object, or geometry.
   * doc://com.apple.documentation/documentation/scenekit/scngeometryelement
   */
  interface SCNGeometryElement extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/1522615-geometryelementwithdata
    geometryElementWithData_primitiveType_primitiveCount_bytesPerIndex(data: cocoascript.NSData, primitiveType: cocoascript.SCNGeometryPrimitiveType, primitiveCount: cocoascript.NSInteger, bytesPerIndex: cocoascript.NSInteger):cocoascript.SCNGeometryElement;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/1419843-geometryelementwithmdlsubmesh
    geometryElementWithMDLSubmesh(mdlSubMesh: cocoascript.MDLSubmesh):cocoascript.SCNGeometryElement;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/1523367-data
    data(): cocoascript.NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/1522720-bytesperindex
    bytesPerIndex(): cocoascript.NSInteger;
    setBytesPerIndex(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/1522917-primitivetype
    primitiveType(): cocoascript.SCNGeometryPrimitiveType;
    setPrimitiveType(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/1523404-primitivecount
    primitiveCount(): cocoascript.NSInteger;
    setPrimitiveCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/2867463-primitiverange
    primitiveRange(): cocoascript.NSRange;
    setPrimitiveRange(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/2867479-pointsize
    pointSize(): cocoascript.CGFloat;
    setPointSize(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/2867439-minimumpointscreenspaceradius
    minimumPointScreenSpaceRadius(): cocoascript.CGFloat;
    setMinimumPointScreenSpaceRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/2867561-maximumpointscreenspaceradius
    maximumPointScreenSpaceRadius(): cocoascript.CGFloat;
    setMaximumPointScreenSpaceRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/3600286-geometryelementwithbuffer
    geometryElementWithBuffer_primitiveType_primitiveCount_bytesPerIndex(buffer: cocoascript.MTLBuffer, primitiveType: cocoascript.SCNGeometryPrimitiveType, primitiveCount: cocoascript.NSInteger, bytesPerIndex: cocoascript.NSInteger):cocoascript.SCNGeometryElement;
    //
    alloc():cocoascript.SCNGeometryElement;
    //
    init():cocoascript.SCNGeometryElement;
  }
}

declare const SCNGeometryElement: cocoascript.SCNGeometryElement;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scntimingfunction
   */
  interface SCNTimingFunction extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scntimingfunction/2866052-functionwithcamediatimingfunctio
    functionWithCAMediaTimingFunction(caTimingFunction: cocoascript.CAMediaTimingFunction):cocoascript.SCNTimingFunction;
    // doc://com.apple.documentation/documentation/scenekit/scntimingfunction/2866061-functionwithtimingmode
    functionWithTimingMode(timingMode: cocoascript.SCNActionTimingMode):cocoascript.SCNTimingFunction;
    //
    alloc():cocoascript.SCNTimingFunction;
    //
    init():cocoascript.SCNTimingFunction;
  }
}

declare const SCNTimingFunction: cocoascript.SCNTimingFunction;
declare namespace cocoascript {
  /**
   * A view for displaying 3D SceneKit content.
   * doc://com.apple.documentation/documentation/scenekit/scnview
   */
  interface SCNView extends NSView {
    // doc://com.apple.documentation/documentation/scenekit/scnview/1524215-initwithframe
    initWithFrame_options(frame: cocoascript.CGRect, options: cocoascript.SCNView):cocoascript.SCNView;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1523904-scene
    scene(): any;
    setScene(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1523088-backgroundcolor
    backgroundColor(): cocoascript.NSColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1621205-preferredframespersecond
    preferredFramesPerSecond(): cocoascript.NSInteger;
    setPreferredFramesPerSecond(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/2867339-renderscontinuously
    rendersContinuously(): cocoascript.BOOL;
    setRendersContinuously(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1524085-antialiasingmode
    antialiasingMode(): cocoascript.SCNAntialiasingMode;
    setAntialiasingMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1523171-allowscameracontrol
    allowsCameraControl(): cocoascript.BOOL;
    setAllowsCameraControl(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/2867333-cameracontrolconfiguration
    cameraControlConfiguration(): cocoascript.SCNCameraControlConfiguration;
    setCameraControlConfiguration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/2867336-defaultcameracontroller
    defaultCameraController(): cocoascript.SCNCameraController;
    setDefaultCameraController(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1522825-pause
    pause(sender: cocoascript.SCNView):void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1523699-play
    play(sender: cocoascript.SCNView):void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1524132-stop
    stop(sender: cocoascript.SCNView):void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1524031-snapshot
    snapshot():cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1621072-eaglcontext
    eaglContext(): cocoascript.EAGLContext;
    setEaglContext(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1522850-openglcontext
    openGLContext(): cocoascript.NSOpenGLContext;
    setOpenGLContext(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1523612-pixelformat
    pixelFormat(): cocoascript.NSOpenGLPixelFormat;
    setPixelFormat(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/3242930-drawableresizesasynchronously
    drawableResizesAsynchronously(): cocoascript.BOOL;
    setDrawableResizesAsynchronously(): void;
    //
    alloc():cocoascript.SCNView;
    //
    init():cocoascript.SCNView;
  }
}

declare const SCNView: cocoascript.SCNView;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scncameracontroller
   */
  interface SCNCameraController extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2873257-delegate
    delegate(): cocoascript.SCNCameraControllerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867559-automatictarget
    automaticTarget(): cocoascript.BOOL;
    setAutomaticTarget(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867546-inertiaenabled
    inertiaEnabled(): cocoascript.BOOL;
    setInertiaEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867498-inertiafriction
    inertiaFriction(): number;
    setInertiaFriction(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867445-interactionmode
    interactionMode(): cocoascript.SCNInteractionMode;
    setInteractionMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2873256-inertiarunning
    inertiaRunning(): cocoascript.BOOL;
    setInertiaRunning(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2902228-maximumhorizontalangle
    maximumHorizontalAngle(): number;
    setMaximumHorizontalAngle(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2902227-maximumverticalangle
    maximumVerticalAngle(): number;
    setMaximumVerticalAngle(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2921252-minimumhorizontalangle
    minimumHorizontalAngle(): number;
    setMinimumHorizontalAngle(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2921251-minimumverticalangle
    minimumVerticalAngle(): number;
    setMinimumVerticalAngle(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867440-pointofview
    pointOfView(): any;
    setPointOfView(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867539-target
    target(): cocoascript.SCNVector3;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2902229-worldup
    worldUp(): cocoascript.SCNVector3;
    setWorldUp(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867444-begininteraction
    beginInteraction_withViewport(location: cocoascript.CGPoint, viewport: cocoascript.CGSize):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867500-clearroll
    clearRoll():void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867496-continueinteraction
    continueInteraction_withViewport_sensitivity(location: cocoascript.CGPoint, viewport: cocoascript.CGSize, sensitivity: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2919425-dollyby
    dollyBy_onScreenPoint_viewport(delta: number, point: cocoascript.CGPoint, viewport: cocoascript.CGSize):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2919424-dollytotarget
    dollyToTarget(delta: number):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867469-endinteraction
    endInteraction_withViewport_velocity(location: cocoascript.CGPoint, viewport: cocoascript.CGSize, velocity: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2875846-framenodes
    frameNodes(nodes: any):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867487-rollby
    rollBy_aroundScreenPoint_viewport(delta: number, point: cocoascript.CGPoint, viewport: cocoascript.CGSize):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2881832-rollaroundtarget
    rollAroundTarget(delta: number):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867552-rotatebyx
    rotateByX_Y(deltaX: number, deltaY: number):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2873258-stopinertia
    stopInertia():void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867569-translateincameraspacebyx
    translateInCameraSpaceByX_Y_Z(deltaX: number, deltaY: number, deltaZ: number):void;
    //
    alloc():cocoascript.SCNCameraController;
    //
    init():cocoascript.SCNCameraController;
  }
}

declare const SCNCameraController: cocoascript.SCNCameraController;
declare namespace cocoascript {
  /**
   * A mechanism for creating implicit animations and combining scene graph changes into atomic updates.
   * doc://com.apple.documentation/documentation/scenekit/scntransaction
   */
  interface SCNTransaction extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1522820-begin
    begin():void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1523436-commit
    commit():void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1522860-flush
    flush():void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1523888-animationduration
    animationDuration(): cocoascript.CFTimeInterval;
    setAnimationDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1522614-animationtimingfunction
    animationTimingFunction(): cocoascript.CAMediaTimingFunction;
    setAnimationTimingFunction(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1524238-disableactions
    disableActions(): cocoascript.BOOL;
    setDisableActions(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1523660-completionblock
    completionBlock(): void;
    setCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1523078-lock
    lock():void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1523166-unlock
    unlock():void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1524124-setvalue
    setValue_forKey(value: cocoascript.SCNTransaction, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1523919-valueforkey
    valueForKey(key: cocoascript.NSString):cocoascript.SCNTransaction;
    //
    alloc():cocoascript.SCNTransaction;
    //
    init():cocoascript.SCNTransaction;
  }
}

declare const SCNTransaction: cocoascript.SCNTransaction;
declare namespace cocoascript {
  /**
   * A container for a block to be executed at a specific time during playback of an animation.
   * doc://com.apple.documentation/documentation/scenekit/scnanimationevent
   */
  interface SCNAnimationEvent extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnanimationevent/1524004-animationeventwithkeytime
    animationEventWithKeyTime_block(time: cocoascript.CGFloat, eventBlock: cocoascript.SCNAnimationEventBlock):cocoascript.SCNAnimationEvent;
    //
    alloc():cocoascript.SCNAnimationEvent;
    //
    init():cocoascript.SCNAnimationEvent;
  }
}

declare const SCNAnimationEvent: cocoascript.SCNAnimationEvent;
declare namespace cocoascript {
  /**
   * A Core Animation layer that renders a SceneKit scene as its content.
   * doc://com.apple.documentation/documentation/scenekit/scnlayer
   */
  interface SCNLayer extends CAOpenGLLayer {
    // doc://com.apple.documentation/documentation/scenekit/scnlayer/1393188-scene
    scene(): any;
    setScene(): void;
    //
    alloc():cocoascript.SCNLayer;
    //
    init():cocoascript.SCNLayer;
  }
}

declare const SCNLayer: cocoascript.SCNLayer;
declare namespace cocoascript {
  /**
   * A renderer for displaying a SceneKit scene in an existing Metal workflow or OpenGL context.
   * doc://com.apple.documentation/documentation/scenekit/scnrenderer
   */
  interface SCNRenderer extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/1518404-rendererwithdevice
    rendererWithDevice_options(device: any, options: cocoascript.NSDictionary):cocoascript.SCNRenderer;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/1518408-rendererwithcontext
    rendererWithContext_options(context: cocoascript.EAGLContext, options: cocoascript.NSDictionary):cocoascript.SCNRenderer;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/1518400-scene
    scene(): any;
    setScene(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/1518410-nextframetime
    nextFrameTime(): cocoascript.CFTimeInterval;
    setNextFrameTime(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/1518401-renderattime
    renderAtTime_viewport_commandBuffer_passDescriptor(time: cocoascript.CFTimeInterval, viewport: cocoascript.CGRect, commandBuffer: any, renderPassDescriptor: any):void;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/1518403-render
    render():void;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/1518402-renderattime
    renderAtTime(time: cocoascript.CFTimeInterval):void;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/1641767-snapshotattime
    snapshotAtTime_withSize_antialiasingMode(time: cocoascript.CFTimeInterval, size: cocoascript.CGSize, antialiasingMode: cocoascript.SCNAntialiasingMode):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/2866140-renderwithviewport
    renderWithViewport_commandBuffer_passDescriptor(viewport: cocoascript.CGRect, commandBuffer: any, renderPassDescriptor: any):void;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/2866142-updateattime
    updateAtTime(time: cocoascript.CFTimeInterval):void;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/2097153-updateprobes
    updateProbes_atTime(lightProbes: any, time: cocoascript.CFTimeInterval):void;
    //
    alloc():cocoascript.SCNRenderer;
    //
    init():cocoascript.SCNRenderer;
  }
}

declare const SCNRenderer: cocoascript.SCNRenderer;
declare namespace cocoascript {
  /**
   * Information about the result of a scene-space or view-space search for scene elements.
   * doc://com.apple.documentation/documentation/scenekit/scnhittestresult
   */
  interface SCNHitTestResult extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1523256-node
    node(): any;
    setNode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1522625-geometryindex
    geometryIndex(): cocoascript.NSInteger;
    setGeometryIndex(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1522888-faceindex
    faceIndex(): cocoascript.NSInteger;
    setFaceIndex(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1523032-localcoordinates
    localCoordinates(): cocoascript.SCNVector3;
    setLocalCoordinates(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1523058-worldcoordinates
    worldCoordinates(): cocoascript.SCNVector3;
    setWorldCoordinates(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1523953-localnormal
    localNormal(): cocoascript.SCNVector3;
    setLocalNormal(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1524066-worldnormal
    worldNormal(): cocoascript.SCNVector3;
    setWorldNormal(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1523496-modeltransform
    modelTransform(): cocoascript.SCNMatrix4;
    setModelTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1522771-texturecoordinateswithmappingcha
    textureCoordinatesWithMappingChannel(channel: cocoascript.NSInteger):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1823463-bonenode
    boneNode(): any;
    setBoneNode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/3042447-simdlocalcoordinates
    simdLocalCoordinates(): cocoascript.simd_float3;
    setSimdLocalCoordinates(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/3042448-simdlocalnormal
    simdLocalNormal(): cocoascript.simd_float3;
    setSimdLocalNormal(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/3042449-simdmodeltransform
    simdModelTransform(): cocoascript.simd_float4x4;
    setSimdModelTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/3042450-simdworldcoordinates
    simdWorldCoordinates(): cocoascript.simd_float3;
    setSimdWorldCoordinates(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/3042451-simdworldnormal
    simdWorldNormal(): cocoascript.simd_float3;
    setSimdWorldNormal(): void;
    //
    alloc():any;
    //
    init():any;
  }
}

declare const SCNHitTestResult: any;
// doc://com.apple.documentation/documentation/scenekit/scnpreferredrenderingapikey
declare const SCNPreferredRenderingAPIKey: cocoascript.SCNViewOption;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scndebugoptions
  type SCNDebugOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnrenderingapi
  type SCNRenderingAPI = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnhittestoption
  type SCNHitTestOption = cocoascript.NSString;
}
declare namespace cocoascript {
  interface SCNVector3 {
  }
}
declare namespace cocoascript {
  interface SCNVector4 {
  }
}
// doc://com.apple.documentation/documentation/scenekit/scnshadermodifierentrypointgeometry
declare const SCNShaderModifierEntryPointGeometry: cocoascript.SCNShaderModifierEntryPoint;
// doc://com.apple.documentation/documentation/scenekit/scnshadermodifierentrypointsurface
declare const SCNShaderModifierEntryPointSurface: cocoascript.SCNShaderModifierEntryPoint;
// doc://com.apple.documentation/documentation/scenekit/scnshadermodifierentrypointlightingmodel
declare const SCNShaderModifierEntryPointLightingModel: cocoascript.SCNShaderModifierEntryPoint;
// doc://com.apple.documentation/documentation/scenekit/scnshadermodifierentrypointfragment
declare const SCNShaderModifierEntryPointFragment: cocoascript.SCNShaderModifierEntryPoint;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnbindingblock
  type SCNBindingBlock = cocoascript.SCNRenderer;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnshadermodifierentrypoint
  type SCNShaderModifierEntryPoint = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraint
   */
  interface SCNAvoidOccluderConstraint extends SCNConstraint {
    // doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraint/2873380-avoidoccluderconstraintwithtarge
    avoidOccluderConstraintWithTarget(target: any):cocoascript.SCNAvoidOccluderConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraint/2873377-bias
    bias(): cocoascript.CGFloat;
    setBias(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraint/2873376-occludercategorybitmask
    occluderCategoryBitMask(): cocoascript.NSUInteger;
    setOccluderCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraint/2873370-target
    target(): any;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraint/2878131-delegate
    delegate(): cocoascript.SCNAvoidOccluderConstraintDelegate;
    setDelegate(): void;
    //
    alloc():cocoascript.SCNAvoidOccluderConstraint;
    //
    init():cocoascript.SCNAvoidOccluderConstraint;
  }
}

declare const SCNAvoidOccluderConstraint: cocoascript.SCNAvoidOccluderConstraint;
declare namespace cocoascript {
  /**
   * Detailed information about a contact between two physics bodies in a scene’s physics simulation.
   * doc://com.apple.documentation/documentation/scenekit/scnphysicscontact
   */
  interface SCNPhysicsContact extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontact/1523445-nodea
    nodeA(): any;
    setNodeA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontact/1524232-nodeb
    nodeB(): any;
    setNodeB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontact/1523810-contactpoint
    contactPoint(): cocoascript.SCNVector3;
    setContactPoint(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontact/1522833-contactnormal
    contactNormal(): cocoascript.SCNVector3;
    setContactNormal(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontact/1523944-collisionimpulse
    collisionImpulse(): cocoascript.CGFloat;
    setCollisionImpulse(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontact/1522870-penetrationdistance
    penetrationDistance(): cocoascript.CGFloat;
    setPenetrationDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontact/2902236-sweeptestfraction
    sweepTestFraction(): cocoascript.CGFloat;
    setSweepTestFraction(): void;
    //
    alloc():cocoascript.SCNPhysicsContact;
    //
    init():cocoascript.SCNPhysicsContact;
  }
}

declare const SCNPhysicsContact: cocoascript.SCNPhysicsContact;
declare namespace cocoascript {
  /**
   * A physics behavior that modifies a physics body to behave like a car, motorcycle, or other wheeled vehicle.
   * doc://com.apple.documentation/documentation/scenekit/scnphysicsvehicle
   */
  interface SCNPhysicsVehicle extends SCNPhysicsBehavior {
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehicle/1387943-vehiclewithchassisbody
    vehicleWithChassisBody_wheels(chassisBody: cocoascript.SCNPhysicsBody, wheels: cocoascript.SCNPhysicsVehicleWheel):cocoascript.SCNPhysicsVehicle;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehicle/1387985-chassisbody
    chassisBody(): cocoascript.SCNPhysicsBody;
    setChassisBody(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehicle/1387906-wheels
    wheels(): cocoascript.SCNPhysicsVehicleWheel;
    setWheels(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehicle/1387963-applyengineforce
    applyEngineForce_forWheelAtIndex(value: cocoascript.CGFloat, index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehicle/1387894-applybrakingforce
    applyBrakingForce_forWheelAtIndex(value: cocoascript.CGFloat, index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehicle/1387952-setsteeringangle
    setSteeringAngle_forWheelAtIndex(value: cocoascript.CGFloat, index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehicle/1387910-speedinkilometersperhour
    speedInKilometersPerHour(): cocoascript.CGFloat;
    setSpeedInKilometersPerHour(): void;
    //
    alloc():cocoascript.SCNPhysicsVehicle;
    //
    init():cocoascript.SCNPhysicsVehicle;
  }
}

declare const SCNPhysicsVehicle: cocoascript.SCNPhysicsVehicle;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnfieldforceevaluator
  type SCNFieldForceEvaluator = cocoascript.NSTimeInterval;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnphysicsfieldscope
  type SCNPhysicsFieldScope = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnmovabilityhint
  type SCNMovabilityHint = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnnodefocusbehavior
  type SCNNodeFocusBehavior = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A scene graph node that serves as a placeholder for content to be loaded from a separate scene file.
   * doc://com.apple.documentation/documentation/scenekit/scnreferencenode
   */
  interface SCNReferenceNode extends SCNNode {
    // doc://com.apple.documentation/documentation/scenekit/scnreferencenode/1523967-initwithurl
    initWithURL(referenceURL: cocoascript.NSURL):cocoascript.SCNReferenceNode;
    // doc://com.apple.documentation/documentation/scenekit/scnreferencenode/1551036-referencenodewithurl
    referenceNodeWithURL(referenceURL: cocoascript.NSURL):cocoascript.SCNReferenceNode;
    // doc://com.apple.documentation/documentation/scenekit/scnreferencenode/1522733-referenceurl
    referenceURL(): cocoascript.NSURL;
    setReferenceURL(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreferencenode/1522996-loadingpolicy
    loadingPolicy(): cocoascript.SCNReferenceLoadingPolicy;
    setLoadingPolicy(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreferencenode/1523204-load
    load():void;
    // doc://com.apple.documentation/documentation/scenekit/scnreferencenode/1523906-loaded
    loaded(): cocoascript.BOOL;
    setLoaded(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreferencenode/1523566-unload
    unload():void;
    // doc://com.apple.documentation/documentation/scenekit/scnreferencenode/1524061-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.SCNReferenceNode;
    //
    alloc():cocoascript.SCNReferenceNode;
    //
    init():cocoascript.SCNReferenceNode;
  }
}

declare const SCNReferenceNode: cocoascript.SCNReferenceNode;
declare namespace cocoascript {
  /**
   * A constraint that orients a node to always point toward a specified other node.
   * doc://com.apple.documentation/documentation/scenekit/scnlookatconstraint
   */
  interface SCNLookAtConstraint extends SCNConstraint {
    // doc://com.apple.documentation/documentation/scenekit/scnlookatconstraint/1468683-lookatconstraintwithtarget
    lookAtConstraintWithTarget(target: any):cocoascript.SCNLookAtConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scnlookatconstraint/1468675-gimballockenabled
    gimbalLockEnabled(): cocoascript.BOOL;
    setGimbalLockEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlookatconstraint/1468677-target
    target():any;
    // doc://com.apple.documentation/documentation/scenekit/scnlookatconstraint/2867570-localfront
    localFront(): cocoascript.SCNVector3;
    setLocalFront(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlookatconstraint/2867488-targetoffset
    targetOffset(): cocoascript.SCNVector3;
    setTargetOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlookatconstraint/2902240-worldup
    worldUp(): cocoascript.SCNVector3;
    setWorldUp(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlookatconstraint/1644027-settarget
    setTarget(target: any):void;
    //
    alloc():cocoascript.SCNLookAtConstraint;
    //
    init():cocoascript.SCNLookAtConstraint;
  }
}

declare const SCNLookAtConstraint: cocoascript.SCNLookAtConstraint;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scncameraprojectiondirection
  type SCNCameraProjectionDirection = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnlightingmodel
  type SCNLightingModel = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scntransparencymode
  type SCNTransparencyMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnblendmode
  type SCNBlendMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scncullmode
  type SCNCullMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnfillmode
  type SCNFillMode = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scncolormask
  type SCNColorMask = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A six-sided polyhedron geometry whose faces are all rectangles, optionally with rounded edges and corners.
   * doc://com.apple.documentation/documentation/scenekit/scnbox
   */
  interface SCNBox extends SCNGeometry {
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1522620-boxwithwidth
    boxWithWidth_height_length_chamferRadius(width: cocoascript.CGFloat, height: cocoascript.CGFloat, length: cocoascript.CGFloat, chamferRadius: cocoascript.CGFloat):cocoascript.SCNBox;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1523898-width
    width(): cocoascript.CGFloat;
    setWidth(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1522901-height
    height(): cocoascript.CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1523514-length
    length(): cocoascript.CGFloat;
    setLength(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1523559-widthsegmentcount
    widthSegmentCount(): cocoascript.NSInteger;
    setWidthSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1522869-heightsegmentcount
    heightSegmentCount(): cocoascript.NSInteger;
    setHeightSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1523721-lengthsegmentcount
    lengthSegmentCount(): cocoascript.NSInteger;
    setLengthSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1523302-chamferradius
    chamferRadius(): cocoascript.CGFloat;
    setChamferRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1522976-chamfersegmentcount
    chamferSegmentCount(): cocoascript.NSInteger;
    setChamferSegmentCount(): void;
    //
    alloc():cocoascript.SCNBox;
    //
    init():cocoascript.SCNBox;
  }
}

declare const SCNBox: cocoascript.SCNBox;
declare namespace cocoascript {
  /**
   * A sphere (or ball or globe) geometry.
   * doc://com.apple.documentation/documentation/scenekit/scnsphere
   */
  interface SCNSphere extends SCNGeometry {
    // doc://com.apple.documentation/documentation/scenekit/scnsphere/1522601-spherewithradius
    sphereWithRadius(radius: cocoascript.CGFloat):cocoascript.SCNSphere;
    // doc://com.apple.documentation/documentation/scenekit/scnsphere/1523787-radius
    radius(): cocoascript.CGFloat;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnsphere/1523268-geodesic
    geodesic(): cocoascript.BOOL;
    setGeodesic(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnsphere/1523912-segmentcount
    segmentCount(): cocoascript.NSInteger;
    setSegmentCount(): void;
    //
    alloc():cocoascript.SCNSphere;
    //
    init():cocoascript.SCNSphere;
  }
}

declare const SCNSphere: cocoascript.SCNSphere;
declare namespace cocoascript {
  /**
   * A right rectangular pyramid geometry.
   * doc://com.apple.documentation/documentation/scenekit/scnpyramid
   */
  interface SCNPyramid extends SCNGeometry {
    // doc://com.apple.documentation/documentation/scenekit/scnpyramid/1523254-pyramidwithwidth
    pyramidWithWidth_height_length(width: cocoascript.CGFloat, height: cocoascript.CGFloat, length: cocoascript.CGFloat):cocoascript.SCNPyramid;
    // doc://com.apple.documentation/documentation/scenekit/scnpyramid/1522613-width
    width(): cocoascript.CGFloat;
    setWidth(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnpyramid/1522805-height
    height(): cocoascript.CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnpyramid/1524203-length
    length(): cocoascript.CGFloat;
    setLength(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnpyramid/1523083-widthsegmentcount
    widthSegmentCount(): cocoascript.NSInteger;
    setWidthSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnpyramid/1524059-heightsegmentcount
    heightSegmentCount(): cocoascript.NSInteger;
    setHeightSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnpyramid/1524227-lengthsegmentcount
    lengthSegmentCount(): cocoascript.NSInteger;
    setLengthSegmentCount(): void;
    //
    alloc():cocoascript.SCNPyramid;
    //
    init():cocoascript.SCNPyramid;
  }
}

declare const SCNPyramid: cocoascript.SCNPyramid;
declare namespace cocoascript {
  /**
   * A right circular cone or frustum geometry.
   * doc://com.apple.documentation/documentation/scenekit/scncone
   */
  interface SCNCone extends SCNGeometry {
    // doc://com.apple.documentation/documentation/scenekit/scncone/1522863-conewithtopradius
    coneWithTopRadius_bottomRadius_height(topRadius: cocoascript.CGFloat, bottomRadius: cocoascript.CGFloat, height: cocoascript.CGFloat):cocoascript.SCNCone;
    // doc://com.apple.documentation/documentation/scenekit/scncone/1524240-topradius
    topRadius(): cocoascript.CGFloat;
    setTopRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncone/1523198-bottomradius
    bottomRadius(): cocoascript.CGFloat;
    setBottomRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncone/1523219-height
    height(): cocoascript.CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncone/1523942-radialsegmentcount
    radialSegmentCount(): cocoascript.NSInteger;
    setRadialSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncone/1524113-heightsegmentcount
    heightSegmentCount(): cocoascript.NSInteger;
    setHeightSegmentCount(): void;
    //
    alloc():cocoascript.SCNCone;
    //
    init():cocoascript.SCNCone;
  }
}

declare const SCNCone: cocoascript.SCNCone;
declare namespace cocoascript {
  /**
   * A right circular cylinder geometry.
   * doc://com.apple.documentation/documentation/scenekit/scncylinder
   */
  interface SCNCylinder extends SCNGeometry {
    // doc://com.apple.documentation/documentation/scenekit/scncylinder/1523685-cylinderwithradius
    cylinderWithRadius_height(radius: cocoascript.CGFloat, height: cocoascript.CGFloat):cocoascript.SCNCylinder;
    // doc://com.apple.documentation/documentation/scenekit/scncylinder/1522674-radius
    radius(): cocoascript.CGFloat;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncylinder/1523678-height
    height(): cocoascript.CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncylinder/1524002-radialsegmentcount
    radialSegmentCount(): cocoascript.NSInteger;
    setRadialSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncylinder/1523330-heightsegmentcount
    heightSegmentCount(): cocoascript.NSInteger;
    setHeightSegmentCount(): void;
    //
    alloc():cocoascript.SCNCylinder;
    //
    init():cocoascript.SCNCylinder;
  }
}

declare const SCNCylinder: cocoascript.SCNCylinder;
declare namespace cocoascript {
  /**
   * A right circular cylinder geometry whose ends are capped with hemispheres.
   * doc://com.apple.documentation/documentation/scenekit/scncapsule
   */
  interface SCNCapsule extends SCNGeometry {
    // doc://com.apple.documentation/documentation/scenekit/scncapsule/1523790-capsulewithcapradius
    capsuleWithCapRadius_height(capRadius: cocoascript.CGFloat, height: cocoascript.CGFloat):cocoascript.SCNCapsule;
    // doc://com.apple.documentation/documentation/scenekit/scncapsule/1523926-capradius
    capRadius(): cocoascript.CGFloat;
    setCapRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncapsule/1522789-height
    height(): cocoascript.CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncapsule/1522735-radialsegmentcount
    radialSegmentCount(): cocoascript.NSInteger;
    setRadialSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncapsule/1523561-capsegmentcount
    capSegmentCount(): cocoascript.NSInteger;
    setCapSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncapsule/1523697-heightsegmentcount
    heightSegmentCount(): cocoascript.NSInteger;
    setHeightSegmentCount(): void;
    //
    alloc():cocoascript.SCNCapsule;
    //
    init():cocoascript.SCNCapsule;
  }
}

declare const SCNCapsule: cocoascript.SCNCapsule;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnphysicsshapeoption
  type SCNPhysicsShapeOption = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnphysicscollisioncategory
  type SCNPhysicsCollisionCategory = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnphysicsbodytype
  type SCNPhysicsBodyType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A controller for playback of a positional audio source in a SceneKit scene.
   * doc://com.apple.documentation/documentation/scenekit/scnaudioplayer
   */
  interface SCNAudioPlayer extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnaudioplayer/1522736-initwithsource
    initWithSource(source: cocoascript.SCNAudioSource):cocoascript.SCNAudioPlayer;
    // doc://com.apple.documentation/documentation/scenekit/scnaudioplayer/1523010-initwithavaudionode
    initWithAVAudioNode(audioNode: cocoascript.AVAudioNode):cocoascript.SCNAudioPlayer;
    // doc://com.apple.documentation/documentation/scenekit/scnaudioplayer/1533919-audioplayerwithsource
    audioPlayerWithSource(source: cocoascript.SCNAudioSource):cocoascript.SCNAudioPlayer;
    // doc://com.apple.documentation/documentation/scenekit/scnaudioplayer/1533927-audioplayerwithavaudionode
    audioPlayerWithAVAudioNode(audioNode: cocoascript.AVAudioNode):cocoascript.SCNAudioPlayer;
    // doc://com.apple.documentation/documentation/scenekit/scnaudioplayer/1523059-audiosource
    audioSource(): cocoascript.SCNAudioSource;
    setAudioSource(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaudioplayer/1522747-audionode
    audioNode(): cocoascript.AVAudioNode;
    setAudioNode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaudioplayer/1524115-willstartplayback
    willStartPlayback(): void;
    setWillStartPlayback(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaudioplayer/1522818-didfinishplayback
    didFinishPlayback(): void;
    setDidFinishPlayback(): void;
    //
    alloc():cocoascript.SCNAudioPlayer;
    //
    init():cocoascript.SCNAudioPlayer;
  }
}

declare const SCNAudioPlayer: cocoascript.SCNAudioPlayer;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnlighttype
  type SCNLightType = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnshadowmode
  type SCNShadowMode = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycolor
declare const SCNParticlePropertyColor: cocoascript.SCNParticleProperty;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnparticlebirthlocation
  type SCNParticleBirthLocation = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnparticlebirthdirection
  type SCNParticleBirthDirection = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnparticleimagesequenceanimationmode
  type SCNParticleImageSequenceAnimationMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnparticleblendmode
  type SCNParticleBlendMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnparticleorientationmode
  type SCNParticleOrientationMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnparticlesortingmode
  type SCNParticleSortingMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnparticleevent
  type SCNParticleEvent = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnparticleeventblock
  type SCNParticleEventBlock = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnparticleproperty
  type SCNParticleProperty = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnparticlemodifierstage
  type SCNParticleModifierStage = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnparticlemodifierblock
  type SCNParticleModifierBlock = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnparticleinputmode
  type SCNParticleInputMode = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemanticvertex
declare const SCNGeometrySourceSemanticVertex: cocoascript.SCNGeometrySourceSemantic;
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemanticnormal
declare const SCNGeometrySourceSemanticNormal: cocoascript.SCNGeometrySourceSemantic;
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemanticcolor
declare const SCNGeometrySourceSemanticColor: cocoascript.SCNGeometrySourceSemantic;
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemanticboneindices
declare const SCNGeometrySourceSemanticBoneIndices: cocoascript.SCNGeometrySourceSemantic;
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemanticboneweights
declare const SCNGeometrySourceSemanticBoneWeights: cocoascript.SCNGeometrySourceSemantic;
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemantictexcoord
declare const SCNGeometrySourceSemanticTexcoord: cocoascript.SCNGeometrySourceSemantic;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnbufferfrequency
  type SCNBufferFrequency = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnbufferbindingblock
  type SCNBufferBindingBlock = cocoascript.SCNRenderer;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnactiontimingmode
  type SCNActionTimingMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnactiontimingfunction
  type SCNActionTimingFunction = number;
}
declare namespace cocoascript {
  /**
   * An object that manages the data-reading tasks associated with loading scene contents from a file or data.
   * doc://com.apple.documentation/documentation/scenekit/scnscenesource
   */
  interface SCNSceneSource extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1573763-scenesourcewithurl
    sceneSourceWithURL_options(url: cocoascript.NSURL, options: cocoascript.SCNSceneSource):cocoascript.SCNSceneSource;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1573764-scenesourcewithdata
    sceneSourceWithData_options(data: cocoascript.NSData, options: cocoascript.SCNSceneSource):cocoascript.SCNSceneSource;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1522629-initwithurl
    initWithURL_options(url: cocoascript.NSURL, options: cocoascript.SCNSceneSource):cocoascript.SCNSceneSource;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1523500-initwithdata
    initWithData_options(data: cocoascript.NSData, options: cocoascript.SCNSceneSource):cocoascript.SCNSceneSource;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1522887-scenewithoptions
    sceneWithOptions_statusHandler(options: cocoascript.SCNSceneSource, statusHandler: cocoascript.SCNSceneSourceStatusHandler):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1523962-scenewithoptions
    sceneWithOptions_error(options: cocoascript.SCNSceneSource, error: cocoascript.NSError):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1523656-identifiersofentrieswithclass
    identifiersOfEntriesWithClass(entryClass: cocoascript.Class):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1573762-entrywithidentifier
    entryWithIdentifier_withClass(uid: cocoascript.NSString, entryClass: cocoascript.Class):cocoascript.SCNSceneSource;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1523055-entriespassingtest
    entriesPassingTest(predicate: cocoascript.BOOL):cocoascript.SCNSceneSource;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1524038-url
    url(): cocoascript.NSURL;
    setUrl(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1523061-data
    data(): cocoascript.NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1523277-propertyforkey
    propertyForKey(key: cocoascript.NSString):cocoascript.SCNSceneSource;
    //
    alloc():cocoascript.SCNSceneSource;
    //
    init():cocoascript.SCNSceneSource;
  }
}

declare const SCNSceneSource: cocoascript.SCNSceneSource;
declare namespace cocoascript {
  /**
   * A rectangular, one-sided plane geometry of specified width and height.
   * doc://com.apple.documentation/documentation/scenekit/scnplane
   */
  interface SCNPlane extends SCNGeometry {
    // doc://com.apple.documentation/documentation/scenekit/scnplane/1523631-planewithwidth
    planeWithWidth_height(width: cocoascript.CGFloat, height: cocoascript.CGFloat):cocoascript.SCNPlane;
    // doc://com.apple.documentation/documentation/scenekit/scnplane/1523782-width
    width(): cocoascript.CGFloat;
    setWidth(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnplane/1522837-height
    height(): cocoascript.CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnplane/1523991-widthsegmentcount
    widthSegmentCount(): cocoascript.NSInteger;
    setWidthSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnplane/1522889-heightsegmentcount
    heightSegmentCount(): cocoascript.NSInteger;
    setHeightSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnplane/1523005-cornerradius
    cornerRadius(): cocoascript.CGFloat;
    setCornerRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnplane/1524234-cornersegmentcount
    cornerSegmentCount(): cocoascript.NSInteger;
    setCornerSegmentCount(): void;
    //
    alloc():cocoascript.SCNPlane;
    //
    init():cocoascript.SCNPlane;
  }
}

declare const SCNPlane: cocoascript.SCNPlane;
declare namespace cocoascript {
  /**
   * A tube or pipe geometry—a right circular cylinder with a circular hole along its central axis.
   * doc://com.apple.documentation/documentation/scenekit/scntube
   */
  interface SCNTube extends SCNGeometry {
    // doc://com.apple.documentation/documentation/scenekit/scntube/1522843-tubewithinnerradius
    tubeWithInnerRadius_outerRadius_height(innerRadius: cocoascript.CGFloat, outerRadius: cocoascript.CGFloat, height: cocoascript.CGFloat):cocoascript.SCNTube;
    // doc://com.apple.documentation/documentation/scenekit/scntube/1523270-outerradius
    outerRadius(): cocoascript.CGFloat;
    setOuterRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntube/1524070-innerradius
    innerRadius(): cocoascript.CGFloat;
    setInnerRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntube/1522640-height
    height(): cocoascript.CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntube/1523619-radialsegmentcount
    radialSegmentCount(): cocoascript.NSInteger;
    setRadialSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntube/1523080-heightsegmentcount
    heightSegmentCount(): cocoascript.NSInteger;
    setHeightSegmentCount(): void;
    //
    alloc():cocoascript.SCNTube;
    //
    init():cocoascript.SCNTube;
  }
}

declare const SCNTube: cocoascript.SCNTube;
declare namespace cocoascript {
  /**
   * A torus, or ring-shaped geometry.
   * doc://com.apple.documentation/documentation/scenekit/scntorus
   */
  interface SCNTorus extends SCNGeometry {
    // doc://com.apple.documentation/documentation/scenekit/scntorus/1523833-toruswithringradius
    torusWithRingRadius_pipeRadius(ringRadius: cocoascript.CGFloat, pipeRadius: cocoascript.CGFloat):cocoascript.SCNTorus;
    // doc://com.apple.documentation/documentation/scenekit/scntorus/1522906-ringradius
    ringRadius(): cocoascript.CGFloat;
    setRingRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntorus/1522623-piperadius
    pipeRadius(): cocoascript.CGFloat;
    setPipeRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntorus/1523598-ringsegmentcount
    ringSegmentCount(): cocoascript.NSInteger;
    setRingSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntorus/1522807-pipesegmentcount
    pipeSegmentCount(): cocoascript.NSInteger;
    setPipeSegmentCount(): void;
    //
    alloc():cocoascript.SCNTorus;
    //
    init():cocoascript.SCNTorus;
  }
}

declare const SCNTorus: cocoascript.SCNTorus;
declare namespace cocoascript {
  /**
   * A geometry based on a string of text, optionally extruded to create a three-dimensional object.
   * doc://com.apple.documentation/documentation/scenekit/scntext
   */
  interface SCNText extends SCNGeometry {
    // doc://com.apple.documentation/documentation/scenekit/scntext/1522734-textwithstring
    textWithString_extrusionDepth(string: cocoascript.SCNText, extrusionDepth: cocoascript.CGFloat):cocoascript.SCNText;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523439-string
    string(): cocoascript.id;
    setString(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523273-font
    font(): cocoascript.UIFont;
    setFont(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523654-containerframe
    containerFrame(): cocoascript.CGRect;
    setContainerFrame(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523585-wrapped
    wrapped(): cocoascript.BOOL;
    setWrapped(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523158-alignmentmode
    alignmentMode(): cocoascript.NSString;
    setAlignmentMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523414-truncationmode
    truncationMode(): cocoascript.NSString;
    setTruncationMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523680-textsize
    textSize(): cocoascript.CGSize;
    setTextSize(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1524111-flatness
    flatness(): cocoascript.CGFloat;
    setFlatness(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1522604-extrusiondepth
    extrusionDepth(): cocoascript.CGFloat;
    setExtrusionDepth(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1522846-chamferradius
    chamferRadius(): cocoascript.CGFloat;
    setChamferRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1572699-chamfersegmentcount
    chamferSegmentCount(): cocoascript.NSInteger;
    setChamferSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523334-chamferprofile
    chamferProfile(): cocoascript.UIBezierPath;
    setChamferProfile(): void;
    //
    alloc():cocoascript.SCNText;
    //
    init():cocoascript.SCNText;
  }
}

declare const SCNText: cocoascript.SCNText;
declare namespace cocoascript {
  /**
   * A geometry based on a two-dimensional path, optionally extruded to create a three-dimensional object.
   * doc://com.apple.documentation/documentation/scenekit/scnshape
   */
  interface SCNShape extends SCNGeometry {
    // doc://com.apple.documentation/documentation/scenekit/scnshape/1523432-shapewithpath
    shapeWithPath_extrusionDepth(path: cocoascript.UIBezierPath, extrusionDepth: cocoascript.CGFloat):cocoascript.SCNShape;
    // doc://com.apple.documentation/documentation/scenekit/scnshape/1523365-extrusiondepth
    extrusionDepth(): cocoascript.CGFloat;
    setExtrusionDepth(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnshape/1523434-path
    path(): cocoascript.UIBezierPath;
    setPath(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnshape/1523989-chamfermode
    chamferMode(): cocoascript.SCNChamferMode;
    setChamferMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnshape/1522865-chamferprofile
    chamferProfile(): cocoascript.UIBezierPath;
    setChamferProfile(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnshape/1524145-chamferradius
    chamferRadius(): cocoascript.CGFloat;
    setChamferRadius(): void;
    //
    alloc():cocoascript.SCNShape;
    //
    init():cocoascript.SCNShape;
  }
}

declare const SCNShape: cocoascript.SCNShape;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnanimationdidstartblock
  type SCNAnimationDidStartBlock = cocoascript.SCNAnimatable;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnanimationdidstopblock
  type SCNAnimationDidStopBlock = cocoascript.BOOL;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scntessellationsmoothingmode
  type SCNTessellationSmoothingMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A physics behavior that connects two bodies and allows them to pivot around each other on a single axis.
   * doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint
   */
  interface SCNPhysicsHingeJoint extends SCNPhysicsBehavior {
    // doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint/1387898-jointwithbodya
    jointWithBodyA_axisA_anchorA_bodyB_axisB_anchorB(bodyA: cocoascript.SCNPhysicsBody, axisA: cocoascript.SCNVector3, anchorA: cocoascript.SCNVector3, bodyB: cocoascript.SCNPhysicsBody, axisB: cocoascript.SCNVector3, anchorB: cocoascript.SCNVector3):cocoascript.SCNPhysicsHingeJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint/1387977-jointwithbody
    jointWithBody_axis_anchor(body: cocoascript.SCNPhysicsBody, axis: cocoascript.SCNVector3, anchor: cocoascript.SCNVector3):cocoascript.SCNPhysicsHingeJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint/1387973-bodya
    bodyA(): cocoascript.SCNPhysicsBody;
    setBodyA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint/1387888-axisa
    axisA(): cocoascript.SCNVector3;
    setAxisA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint/1387936-anchora
    anchorA(): cocoascript.SCNVector3;
    setAnchorA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint/1387918-bodyb
    bodyB(): cocoascript.SCNPhysicsBody;
    setBodyB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint/1387914-axisb
    axisB(): cocoascript.SCNVector3;
    setAxisB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint/1387979-anchorb
    anchorB(): cocoascript.SCNVector3;
    setAnchorB(): void;
    //
    alloc():cocoascript.SCNPhysicsHingeJoint;
    //
    init():cocoascript.SCNPhysicsHingeJoint;
  }
}

declare const SCNPhysicsHingeJoint: cocoascript.SCNPhysicsHingeJoint;
declare namespace cocoascript {
  /**
   * A physics behavior that connects two physics bodies and allows them to pivot around each other in any direction.
   * doc://com.apple.documentation/documentation/scenekit/scnphysicsballsocketjoint
   */
  interface SCNPhysicsBallSocketJoint extends SCNPhysicsBehavior {
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsballsocketjoint/1387926-jointwithbodya
    jointWithBodyA_anchorA_bodyB_anchorB(bodyA: cocoascript.SCNPhysicsBody, anchorA: cocoascript.SCNVector3, bodyB: cocoascript.SCNPhysicsBody, anchorB: cocoascript.SCNVector3):cocoascript.SCNPhysicsBallSocketJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsballsocketjoint/1387975-jointwithbody
    jointWithBody_anchor(body: cocoascript.SCNPhysicsBody, anchor: cocoascript.SCNVector3):cocoascript.SCNPhysicsBallSocketJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsballsocketjoint/1387981-bodya
    bodyA(): cocoascript.SCNPhysicsBody;
    setBodyA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsballsocketjoint/1387956-anchora
    anchorA(): cocoascript.SCNVector3;
    setAnchorA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsballsocketjoint/1387902-bodyb
    bodyB(): cocoascript.SCNPhysicsBody;
    setBodyB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsballsocketjoint/1387965-anchorb
    anchorB(): cocoascript.SCNVector3;
    setAnchorB(): void;
    //
    alloc():cocoascript.SCNPhysicsBallSocketJoint;
    //
    init():cocoascript.SCNPhysicsBallSocketJoint;
  }
}

declare const SCNPhysicsBallSocketJoint: cocoascript.SCNPhysicsBallSocketJoint;
declare namespace cocoascript {
  /**
   * A physics behavior that connects two bodies and allows them to slide against each other and rotate around their connecting points.
   * doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint
   */
  interface SCNPhysicsSliderJoint extends SCNPhysicsBehavior {
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387922-jointwithbodya
    jointWithBodyA_axisA_anchorA_bodyB_axisB_anchorB(bodyA: cocoascript.SCNPhysicsBody, axisA: cocoascript.SCNVector3, anchorA: cocoascript.SCNVector3, bodyB: cocoascript.SCNPhysicsBody, axisB: cocoascript.SCNVector3, anchorB: cocoascript.SCNVector3):cocoascript.SCNPhysicsSliderJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387932-jointwithbody
    jointWithBody_axis_anchor(body: cocoascript.SCNPhysicsBody, axis: cocoascript.SCNVector3, anchor: cocoascript.SCNVector3):cocoascript.SCNPhysicsSliderJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387987-bodya
    bodyA(): cocoascript.SCNPhysicsBody;
    setBodyA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387900-axisa
    axisA(): cocoascript.SCNVector3;
    setAxisA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387958-anchora
    anchorA(): cocoascript.SCNVector3;
    setAnchorA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387896-bodyb
    bodyB(): cocoascript.SCNPhysicsBody;
    setBodyB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387948-axisb
    axisB(): cocoascript.SCNVector3;
    setAxisB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387916-anchorb
    anchorB(): cocoascript.SCNVector3;
    setAnchorB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387920-minimumlinearlimit
    minimumLinearLimit(): cocoascript.CGFloat;
    setMinimumLinearLimit(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387890-maximumlinearlimit
    maximumLinearLimit(): cocoascript.CGFloat;
    setMaximumLinearLimit(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387967-minimumangularlimit
    minimumAngularLimit(): cocoascript.CGFloat;
    setMinimumAngularLimit(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387924-maximumangularlimit
    maximumAngularLimit(): cocoascript.CGFloat;
    setMaximumAngularLimit(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387938-motortargetlinearvelocity
    motorTargetLinearVelocity(): cocoascript.CGFloat;
    setMotorTargetLinearVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387954-motormaximumforce
    motorMaximumForce(): cocoascript.CGFloat;
    setMotorMaximumForce(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387908-motortargetangularvelocity
    motorTargetAngularVelocity(): cocoascript.CGFloat;
    setMotorTargetAngularVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387961-motormaximumtorque
    motorMaximumTorque(): cocoascript.CGFloat;
    setMotorMaximumTorque(): void;
    //
    alloc():cocoascript.SCNPhysicsSliderJoint;
    //
    init():cocoascript.SCNPhysicsSliderJoint;
  }
}

declare const SCNPhysicsSliderJoint: cocoascript.SCNPhysicsSliderJoint;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnwrapmode
  type SCNWrapMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnfiltermode
  type SCNFilterMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnphysicstestoption
  type SCNPhysicsTestOption = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnmorphercalculationmode
  type SCNMorpherCalculationMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnsceneattribute
  type SCNSceneAttribute = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnsceneexportprogresshandler
  type SCNSceneExportProgressHandler = cocoascript.BOOL;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemantic
  type SCNGeometrySourceSemantic = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scngeometryprimitivetype
  type SCNGeometryPrimitiveType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  interface SCNMatrix4 {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnviewoption
  type SCNViewOption = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnantialiasingmode
  type SCNAntialiasingMode = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scninteractionmode
  type SCNInteractionMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnanimationeventblock
  type SCNAnimationEventBlock = cocoascript.BOOL;
}
// doc://com.apple.documentation/documentation/scenekit/scnpreferlowpowerdevicekey
declare const SCNPreferLowPowerDeviceKey: cocoascript.SCNViewOption;
// doc://com.apple.documentation/documentation/scenekit/scnpreferreddevicekey
declare const SCNPreferredDeviceKey: cocoascript.SCNViewOption;
// doc://com.apple.documentation/documentation/scenekit/scnlighttypespot
declare const SCNLightTypeSpot: cocoascript.SCNLightType;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceanimationimportpolicyplayusingscenetimebase
declare const SCNSceneSourceAnimationImportPolicyPlayUsingSceneTimeBase: cocoascript.SCNSceneSourceAnimationImportPolicy;
// doc://com.apple.documentation/documentation/scenekit/scnhittestoptionsearchmode
declare const SCNHitTestOptionSearchMode: cocoascript.SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestbackfacecullingkey
declare const SCNHitTestBackFaceCullingKey: cocoascript.SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestboundingboxonlykey
declare const SCNHitTestBoundingBoxOnlyKey: cocoascript.SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestoptioncategorybitmask
declare const SCNHitTestOptionCategoryBitMask: cocoascript.SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestcliptozrangekey
declare const SCNHitTestClipToZRangeKey: cocoascript.SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestignorechildnodeskey
declare const SCNHitTestIgnoreChildNodesKey: cocoascript.SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestignorehiddennodeskey
declare const SCNHitTestIgnoreHiddenNodesKey: cocoascript.SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestrootnodekey
declare const SCNHitTestRootNodeKey: cocoascript.SCNHitTestOption;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnhittestsearchmode
  type SCNHitTestSearchMode = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/scenekit/scnhittestfirstfoundonlykey
declare const SCNHitTestFirstFoundOnlyKey: cocoascript.SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestsortresultskey
declare const SCNHitTestSortResultsKey: cocoascript.SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestoptionignorelightarea
declare const SCNHitTestOptionIgnoreLightArea: cocoascript.SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnvector3zero
declare const SCNVector3Zero: cocoascript.SCNVector3;
// doc://com.apple.documentation/documentation/scenekit/scnvector4zero
declare const SCNVector4Zero: cocoascript.SCNVector4;
declare namespace cocoascript {
  /**
   * A constraint that orients a node to always point toward the current camera.
   * doc://com.apple.documentation/documentation/scenekit/scnbillboardconstraint
   */
  interface SCNBillboardConstraint extends SCNConstraint {
    // doc://com.apple.documentation/documentation/scenekit/scnbillboardconstraint/1468673-billboardconstraint
    billboardConstraint():cocoascript.SCNBillboardConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scnbillboardconstraint/1468685-freeaxes
    freeAxes(): cocoascript.SCNBillboardAxis;
    setFreeAxes(): void;
    //
    alloc():cocoascript.SCNBillboardConstraint;
    //
    init():cocoascript.SCNBillboardConstraint;
  }
}

declare const SCNBillboardConstraint: cocoascript.SCNBillboardConstraint;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scndistanceconstraint
   */
  interface SCNDistanceConstraint extends SCNConstraint {
    // doc://com.apple.documentation/documentation/scenekit/scndistanceconstraint/2873360-distanceconstraintwithtarget
    distanceConstraintWithTarget(target: any):cocoascript.SCNDistanceConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scndistanceconstraint/2873358-maximumdistance
    maximumDistance(): cocoascript.CGFloat;
    setMaximumDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scndistanceconstraint/2873385-minimumdistance
    minimumDistance(): cocoascript.CGFloat;
    setMinimumDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scndistanceconstraint/2873381-target
    target(): any;
    setTarget(): void;
    //
    alloc():cocoascript.SCNDistanceConstraint;
    //
    init():cocoascript.SCNDistanceConstraint;
  }
}

declare const SCNDistanceConstraint: cocoascript.SCNDistanceConstraint;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnaccelerationconstraint
   */
  interface SCNAccelerationConstraint extends SCNConstraint {
    // doc://com.apple.documentation/documentation/scenekit/scnaccelerationconstraint/2873359-damping
    damping(): cocoascript.CGFloat;
    setDamping(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaccelerationconstraint/2873367-decelerationdistance
    decelerationDistance(): cocoascript.CGFloat;
    setDecelerationDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaccelerationconstraint/2873355-maximumlinearacceleration
    maximumLinearAcceleration(): cocoascript.CGFloat;
    setMaximumLinearAcceleration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaccelerationconstraint/2873384-maximumlinearvelocity
    maximumLinearVelocity(): cocoascript.CGFloat;
    setMaximumLinearVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaccelerationconstraint/2873352-accelerationconstraint
    accelerationConstraint():cocoascript.SCNAccelerationConstraint;
    //
    alloc():cocoascript.SCNAccelerationConstraint;
    //
    init():cocoascript.SCNAccelerationConstraint;
  }
}

declare const SCNAccelerationConstraint: cocoascript.SCNAccelerationConstraint;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnsliderconstraint
   */
  interface SCNSliderConstraint extends SCNConstraint {
    // doc://com.apple.documentation/documentation/scenekit/scnsliderconstraint/2873372-collisioncategorybitmask
    collisionCategoryBitMask(): cocoascript.NSUInteger;
    setCollisionCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnsliderconstraint/2873373-offset
    offset(): cocoascript.SCNVector3;
    setOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnsliderconstraint/2873368-radius
    radius(): cocoascript.CGFloat;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnsliderconstraint/2873363-sliderconstraint
    sliderConstraint():cocoascript.SCNSliderConstraint;
    //
    alloc():cocoascript.SCNSliderConstraint;
    //
    init():cocoascript.SCNSliderConstraint;
  }
}

declare const SCNSliderConstraint: cocoascript.SCNSliderConstraint;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint
   */
  interface SCNReplicatorConstraint extends SCNConstraint {
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873356-replicatorconstraintwithtarget
    replicatorConstraintWithTarget(target: any):cocoascript.SCNReplicatorConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873365-orientationoffset
    orientationOffset(): cocoascript.SCNQuaternion;
    setOrientationOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873379-positionoffset
    positionOffset(): cocoascript.SCNVector3;
    setPositionOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873374-replicatesorientation
    replicatesOrientation(): cocoascript.BOOL;
    setReplicatesOrientation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873353-replicatesposition
    replicatesPosition(): cocoascript.BOOL;
    setReplicatesPosition(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873371-replicatesscale
    replicatesScale(): cocoascript.BOOL;
    setReplicatesScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873366-scaleoffset
    scaleOffset(): cocoascript.SCNVector3;
    setScaleOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873361-target
    target(): any;
    setTarget(): void;
    //
    alloc():cocoascript.SCNReplicatorConstraint;
    //
    init():cocoascript.SCNReplicatorConstraint;
  }
}

declare const SCNReplicatorConstraint: cocoascript.SCNReplicatorConstraint;
declare namespace cocoascript {
  /**
   * A constraint that applies inverse kinematics to make a chain of nodes “reach” toward a target point.
   * doc://com.apple.documentation/documentation/scenekit/scnikconstraint
   */
  interface SCNIKConstraint extends SCNConstraint {
    // doc://com.apple.documentation/documentation/scenekit/scnikconstraint/1468694-initwithchainrootnode
    initWithChainRootNode(chainRootNode: any):cocoascript.SCNIKConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scnikconstraint/1468653-inversekinematicsconstraintwithc
    inverseKinematicsConstraintWithChainRootNode(chainRootNode: any):cocoascript.SCNIKConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scnikconstraint/1468690-chainrootnode
    chainRootNode(): any;
    setChainRootNode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnikconstraint/1468681-maxallowedrotationangleforjoint
    maxAllowedRotationAngleForJoint(node: any):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/scenekit/scnikconstraint/1468649-setmaxallowedrotationangle
    setMaxAllowedRotationAngle_forJoint(angle: cocoascript.CGFloat, node: any):void;
    // doc://com.apple.documentation/documentation/scenekit/scnikconstraint/1468651-targetposition
    targetPosition(): cocoascript.SCNVector3;
    setTargetPosition(): void;
    //
    alloc():cocoascript.SCNIKConstraint;
    //
    init():cocoascript.SCNIKConstraint;
  }
}

declare const SCNIKConstraint: cocoascript.SCNIKConstraint;
declare namespace cocoascript {
  /**
   * A constraint that runs a specified block to compute a new transform (position, rotation, and scale) for each node that the constraint affects.
   * doc://com.apple.documentation/documentation/scenekit/scntransformconstraint
   */
  interface SCNTransformConstraint extends SCNConstraint {
    // doc://com.apple.documentation/documentation/scenekit/scntransformconstraint/1468679-transformconstraintinworldspace
    transformConstraintInWorldSpace_withBlock(world: cocoascript.BOOL, block: cocoascript.SCNMatrix4):cocoascript.SCNTransformConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scntransformconstraint/2867503-orientationconstraintinworldspac
    orientationConstraintInWorldSpace_withBlock(world: cocoascript.BOOL, block: cocoascript.SCNQuaternion):cocoascript.SCNTransformConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scntransformconstraint/2867461-positionconstraintinworldspace
    positionConstraintInWorldSpace_withBlock(world: cocoascript.BOOL, block: cocoascript.SCNVector3):cocoascript.SCNTransformConstraint;
    //
    alloc():cocoascript.SCNTransformConstraint;
    //
    init():cocoascript.SCNTransformConstraint;
  }
}

declare const SCNTransformConstraint: cocoascript.SCNTransformConstraint;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint
   */
  interface SCNPhysicsConeTwistJoint extends SCNPhysicsBehavior {
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865898-jointwithbody
    jointWithBody_frame(body: cocoascript.SCNPhysicsBody, frame: cocoascript.SCNMatrix4):cocoascript.SCNPhysicsConeTwistJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865905-jointwithbodya
    jointWithBodyA_frameA_bodyB_frameB(bodyA: cocoascript.SCNPhysicsBody, frameA: cocoascript.SCNMatrix4, bodyB: cocoascript.SCNPhysicsBody, frameB: cocoascript.SCNMatrix4):cocoascript.SCNPhysicsConeTwistJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865904-bodya
    bodyA(): cocoascript.SCNPhysicsBody;
    setBodyA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865899-bodyb
    bodyB(): cocoascript.SCNPhysicsBody;
    setBodyB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865902-framea
    frameA(): cocoascript.SCNMatrix4;
    setFrameA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865900-frameb
    frameB(): cocoascript.SCNMatrix4;
    setFrameB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865907-maximumangularlimit1
    maximumAngularLimit1(): cocoascript.CGFloat;
    setMaximumAngularLimit1(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865897-maximumangularlimit2
    maximumAngularLimit2(): cocoascript.CGFloat;
    setMaximumAngularLimit2(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865906-maximumtwistangle
    maximumTwistAngle(): cocoascript.CGFloat;
    setMaximumTwistAngle(): void;
    //
    alloc():cocoascript.SCNPhysicsConeTwistJoint;
    //
    init():cocoascript.SCNPhysicsConeTwistJoint;
  }
}

declare const SCNPhysicsConeTwistJoint: cocoascript.SCNPhysicsConeTwistJoint;
// doc://com.apple.documentation/documentation/scenekit/scnmatrix4identity
declare const SCNMatrix4Identity: cocoascript.SCNMatrix4;
// doc://com.apple.documentation/documentation/scenekit/scnlightingmodelphysicallybased
declare const SCNLightingModelPhysicallyBased: cocoascript.SCNLightingModel;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnquaternion
  type SCNQuaternion = cocoascript.SCNVector4;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnreferenceloadingpolicy
  type SCNReferenceLoadingPolicy = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/scenekit/scnlightingmodelblinn
declare const SCNLightingModelBlinn: cocoascript.SCNLightingModel;
// doc://com.apple.documentation/documentation/scenekit/scnlightingmodelconstant
declare const SCNLightingModelConstant: cocoascript.SCNLightingModel;
// doc://com.apple.documentation/documentation/scenekit/scnlightingmodellambert
declare const SCNLightingModelLambert: cocoascript.SCNLightingModel;
// doc://com.apple.documentation/documentation/scenekit/scnlightingmodelphong
declare const SCNLightingModelPhong: cocoascript.SCNLightingModel;
// doc://com.apple.documentation/documentation/scenekit/scnlightingmodelshadowonly
declare const SCNLightingModelShadowOnly: cocoascript.SCNLightingModel;
// doc://com.apple.documentation/documentation/scenekit/scnlighttypeambient
declare const SCNLightTypeAmbient: cocoascript.SCNLightType;
declare namespace cocoascript {
  /**
   * A plane that can optionally display a reflection of the scene above it.
   * doc://com.apple.documentation/documentation/scenekit/scnfloor
   */
  interface SCNFloor extends SCNGeometry {
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/1572698-floor
    floor():cocoascript.SCNFloor;
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/1524175-reflectivity
    reflectivity(): cocoascript.CGFloat;
    setReflectivity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/1522781-reflectionfalloffend
    reflectionFalloffEnd(): cocoascript.CGFloat;
    setReflectionFalloffEnd(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/1524237-reflectionfalloffstart
    reflectionFalloffStart(): cocoascript.CGFloat;
    setReflectionFalloffStart(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/1522809-reflectionresolutionscalefactor
    reflectionResolutionScaleFactor(): cocoascript.CGFloat;
    setReflectionResolutionScaleFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/1845281-reflectioncategorybitmask
    reflectionCategoryBitMask(): cocoascript.NSUInteger;
    setReflectionCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/1845280-width
    width(): cocoascript.CGFloat;
    setWidth(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/2091890-length
    length(): cocoascript.CGFloat;
    setLength(): void;
    //
    alloc():cocoascript.SCNFloor;
    //
    init():cocoascript.SCNFloor;
  }
}

declare const SCNFloor: cocoascript.SCNFloor;
// doc://com.apple.documentation/documentation/scenekit/scnphysicsshapetypekey
declare const SCNPhysicsShapeTypeKey: cocoascript.SCNPhysicsShapeOption;
// doc://com.apple.documentation/documentation/scenekit/scnphysicsshapekeepascompoundkey
declare const SCNPhysicsShapeKeepAsCompoundKey: cocoascript.SCNPhysicsShapeOption;
// doc://com.apple.documentation/documentation/scenekit/scnphysicsshapetypeboundingbox
declare const SCNPhysicsShapeTypeBoundingBox: cocoascript.SCNPhysicsShapeType;
// doc://com.apple.documentation/documentation/scenekit/scnphysicsshapeoptioncollisionmargin
declare const SCNPhysicsShapeOptionCollisionMargin: cocoascript.SCNPhysicsShapeOption;
// doc://com.apple.documentation/documentation/scenekit/scnphysicsshapescalekey
declare const SCNPhysicsShapeScaleKey: cocoascript.SCNPhysicsShapeOption;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnphysicsshapetype
  type SCNPhysicsShapeType = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/scenekit/scnlighttypeies
declare const SCNLightTypeIES: cocoascript.SCNLightType;
// doc://com.apple.documentation/documentation/scenekit/scnlighttypedirectional
declare const SCNLightTypeDirectional: cocoascript.SCNLightType;
// doc://com.apple.documentation/documentation/scenekit/scnlighttypeomni
declare const SCNLightTypeOmni: cocoascript.SCNLightType;
// doc://com.apple.documentation/documentation/scenekit/scnlighttypeprobe
declare const SCNLightTypeProbe: cocoascript.SCNLightType;
// doc://com.apple.documentation/documentation/scenekit/scnlighttypearea
declare const SCNLightTypeArea: cocoascript.SCNLightType;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnlightareatype
  type SCNLightAreaType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnlightprobetype
  type SCNLightProbeType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnlightprobeupdatetype
  type SCNLightProbeUpdateType = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyangle
declare const SCNParticlePropertyAngle: cocoascript.SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyangularvelocity
declare const SCNParticlePropertyAngularVelocity: cocoascript.SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertybounce
declare const SCNParticlePropertyBounce: cocoascript.SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycharge
declare const SCNParticlePropertyCharge: cocoascript.SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontactnormal
declare const SCNParticlePropertyContactNormal: cocoascript.SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontactpoint
declare const SCNParticlePropertyContactPoint: cocoascript.SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyframe
declare const SCNParticlePropertyFrame: cocoascript.SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyframerate
declare const SCNParticlePropertyFrameRate: cocoascript.SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyfriction
declare const SCNParticlePropertyFriction: cocoascript.SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertylife
declare const SCNParticlePropertyLife: cocoascript.SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyopacity
declare const SCNParticlePropertyOpacity: cocoascript.SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyposition
declare const SCNParticlePropertyPosition: cocoascript.SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyrotationaxis
declare const SCNParticlePropertyRotationAxis: cocoascript.SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertysize
declare const SCNParticlePropertySize: cocoascript.SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyvelocity
declare const SCNParticlePropertyVelocity: cocoascript.SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemantictangent
declare const SCNGeometrySourceSemanticTangent: cocoascript.SCNGeometrySourceSemantic;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnscenesourcestatushandler
  type SCNSceneSourceStatusHandler = cocoascript.BOOL;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnscenesourceloadingoption
  type SCNSceneSourceLoadingOption = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnscenesourcestatus
  type SCNSceneSourceStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnchamfermode
  type SCNChamferMode = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemanticvertexcrease
declare const SCNGeometrySourceSemanticVertexCrease: cocoascript.SCNGeometrySourceSemantic;
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemanticedgecrease
declare const SCNGeometrySourceSemanticEdgeCrease: cocoascript.SCNGeometrySourceSemantic;
// doc://com.apple.documentation/documentation/scenekit/scnphysicstestsearchmodekey
declare const SCNPhysicsTestSearchModeKey: cocoascript.SCNPhysicsTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnphysicstestbackfacecullingkey
declare const SCNPhysicsTestBackfaceCullingKey: cocoascript.SCNPhysicsTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnphysicstestcollisionbitmaskkey
declare const SCNPhysicsTestCollisionBitMaskKey: cocoascript.SCNPhysicsTestOption;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnphysicstestsearchmode
  type SCNPhysicsTestSearchMode = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/scenekit/scnsceneendtimeattributekey
declare const SCNSceneEndTimeAttributeKey: cocoascript.SCNSceneAttribute;
// doc://com.apple.documentation/documentation/scenekit/scnsceneframerateattributekey
declare const SCNSceneFrameRateAttributeKey: cocoascript.SCNSceneAttribute;
// doc://com.apple.documentation/documentation/scenekit/scnscenestarttimeattributekey
declare const SCNSceneStartTimeAttributeKey: cocoascript.SCNSceneAttribute;
// doc://com.apple.documentation/documentation/scenekit/scnsceneupaxisattributekey
declare const SCNSceneUpAxisAttributeKey: cocoascript.SCNSceneAttribute;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnscenesourceanimationimportpolicy
  type SCNSceneSourceAnimationImportPolicy = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnbillboardaxis
  type SCNBillboardAxis = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/scenekit/scnphysicsshapetypeconvexhull
declare const SCNPhysicsShapeTypeConvexHull: cocoascript.SCNPhysicsShapeType;
// doc://com.apple.documentation/documentation/scenekit/scnphysicsshapetypeconcavepolyhedron
declare const SCNPhysicsShapeTypeConcavePolyhedron: cocoascript.SCNPhysicsShapeType;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceanimationimportpolicykey
declare const SCNSceneSourceAnimationImportPolicyKey: cocoascript.SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceassetdirectoryurlskey
declare const SCNSceneSourceAssetDirectoryURLsKey: cocoascript.SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourcecheckconsistencykey
declare const SCNSceneSourceCheckConsistencyKey: cocoascript.SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceconverttoyupkey
declare const SCNSceneSourceConvertToYUpKey: cocoascript.SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceconvertunitstometerskey
declare const SCNSceneSourceConvertUnitsToMetersKey: cocoascript.SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourcecreatenormalsifabsentkey
declare const SCNSceneSourceCreateNormalsIfAbsentKey: cocoascript.SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceflattenscenekey
declare const SCNSceneSourceFlattenSceneKey: cocoascript.SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceoverrideasseturlskey
declare const SCNSceneSourceOverrideAssetURLsKey: cocoascript.SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceloadingoptionpreserveoriginaltopology
declare const SCNSceneSourceLoadingOptionPreserveOriginalTopology: cocoascript.SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourcestrictconformancekey
declare const SCNSceneSourceStrictConformanceKey: cocoascript.SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceusesafemodekey
declare const SCNSceneSourceUseSafeModeKey: cocoascript.SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnphysicstestsearchmodeany
declare const SCNPhysicsTestSearchModeAny: cocoascript.SCNPhysicsTestSearchMode;
// doc://com.apple.documentation/documentation/scenekit/scnphysicstestsearchmodeall
declare const SCNPhysicsTestSearchModeAll: cocoascript.SCNPhysicsTestSearchMode;
// doc://com.apple.documentation/documentation/scenekit/scnphysicstestsearchmodeclosest
declare const SCNPhysicsTestSearchModeClosest: cocoascript.SCNPhysicsTestSearchMode;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceanimationimportpolicydonotplay
declare const SCNSceneSourceAnimationImportPolicyDoNotPlay: cocoascript.SCNSceneSourceAnimationImportPolicy;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceanimationimportpolicyplay
declare const SCNSceneSourceAnimationImportPolicyPlay: cocoascript.SCNSceneSourceAnimationImportPolicy;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceanimationimportpolicyplayrepeatedly
declare const SCNSceneSourceAnimationImportPolicyPlayRepeatedly: cocoascript.SCNSceneSourceAnimationImportPolicy;
