declare namespace cocoascript {
  /**
   * Properties affecting the behavior of a camera controller.
   * doc://com.apple.documentation/documentation/scenekit/scncameracontrolconfiguration
   */
  interface SCNCameraControlConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrolconfiguration/2867337-allowstranslation
    allowsTranslation(): BOOL;
    setAllowsTranslation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrolconfiguration/2867338-autoswitchtofreecamera
    autoSwitchToFreeCamera(): BOOL;
    setAutoSwitchToFreeCamera(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrolconfiguration/2867334-flymodevelocity
    flyModeVelocity(): CGFloat;
    setFlyModeVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrolconfiguration/2867342-pansensitivity
    panSensitivity(): CGFloat;
    setPanSensitivity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrolconfiguration/2867340-rotationsensitivity
    rotationSensitivity(): CGFloat;
    setRotationSensitivity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrolconfiguration/2867332-trucksensitivity
    truckSensitivity(): CGFloat;
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
    getBoundingBoxMin_max(min: SCNVector3, max: SCNVector3):BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnboundingvolume/1523886-getboundingspherecenter
    getBoundingSphereCenter_radius(center: SCNVector3, radius: CGFloat):BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnboundingvolume/1522866-setboundingboxmin
    setBoundingBoxMin_max(min: SCNVector3, max: SCNVector3):void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scncameracontrollerdelegate
   */
  interface SCNCameraControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrollerdelegate/2879192-camerainertiadidendforcontroller
    cameraInertiaDidEndForController(cameraController: SCNCameraController):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontrollerdelegate/2879194-camerainertiawillstartforcontrol
    cameraInertiaWillStartForController(cameraController: SCNCameraController):void;
  }
}
declare namespace cocoascript {
  /**
   * The common interface for attaching animations to nodes, geometries, materials, and other SceneKit objects.
   * doc://com.apple.documentation/documentation/scenekit/scnanimatable
   */
  interface SCNAnimatable extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1523386-addanimation
    addAnimation_forKey(animation: SCNAnimation, key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1524020-animationforkey
    animationForKey(key: string | cocoascript.NSString):CAAnimation;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1523610-animationkeys
    animationKeys(): string | cocoascript.NSString;
    setAnimationKeys(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1522762-removeallanimations
    removeAllAnimations():void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1522880-removeanimationforkey
    removeAnimationForKey(key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1522841-removeanimationforkey
    removeAnimationForKey_fadeOutDuration(key: string | cocoascript.NSString, duration: CGFloat):void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1523592-pauseanimationforkey
    pauseAnimationForKey(key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1523332-resumeanimationforkey
    resumeAnimationForKey(key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1523703-isanimationforkeypaused
    isAnimationForKeyPaused(key: string | cocoascript.NSString):BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/2866031-addanimationplayer
    addAnimationPlayer_forKey(player: SCNAnimationPlayer, key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/2866026-animationplayerforkey
    animationPlayerForKey(key: string | cocoascript.NSString):SCNAnimationPlayer;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/2887039-removeanimationforkey
    removeAnimationForKey_blendOutDuration(key: string | cocoascript.NSString, duration: CGFloat):void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimatable/1778343-setspeed
    setSpeed_forAnimationKey(speed: CGFloat, key: string | cocoascript.NSString):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods your app can implement to participate in SceneKit’s animation loop or perform additional rendering.
   * doc://com.apple.documentation/documentation/scenekit/scnscenerendererdelegate
   */
  interface SCNSceneRendererDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnscenerendererdelegate/1522937-renderer
    renderer_updateAtTime(renderer: SCNSceneRenderer, time: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerendererdelegate/1523038-renderer
    renderer_didApplyAnimationsAtTime(renderer: SCNSceneRenderer, time: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerendererdelegate/1522738-renderer
    renderer_didSimulatePhysicsAtTime(renderer: SCNSceneRenderer, time: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerendererdelegate/1523483-renderer
    renderer_willRenderScene_atTime(renderer: SCNSceneRenderer, scene: any, time: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerendererdelegate/1524233-renderer
    renderer_didRenderScene_atTime(renderer: SCNSceneRenderer, scene: any, time: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerendererdelegate/2919554-renderer
    renderer_didApplyConstraintsAtTime(renderer: SCNSceneRenderer, time: NSTimeInterval):void;
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
    presentScene_withTransition_incomingPointOfView_completionHandler(scene: any, transition: SKTransition, pointOfView: any, completionHandler: void):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523982-pointofview
    pointOfView(): any;
    setPointOfView(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523812-autoenablesdefaultlighting
    autoenablesDefaultLighting(): BOOL;
    setAutoenablesDefaultLighting(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1524026-jitteringenabled
    jitteringEnabled(): BOOL;
    setJitteringEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522763-showsstatistics
    showsStatistics(): BOOL;
    setShowsStatistics(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523281-debugoptions
    debugOptions(): SCNDebugOptions;
    setDebugOptions(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522616-renderingapi
    renderingAPI(): SCNRenderingAPI;
    setRenderingAPI(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522680-scenetime
    sceneTime(): NSTimeInterval;
    setSceneTime(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523401-playing
    playing(): BOOL;
    setPlaying(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522878-loops
    loops(): BOOL;
    setLoops(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522798-prepareobject
    prepareObject_shouldAbortBlock(object: SCNSceneRenderer, block: void):BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523375-prepareobjects
    prepareObjects_withCompletionHandler(objects: NSArray, completionHandler: BOOL):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522929-hittest
    hitTest_options(point: CGPoint, options: SCNSceneRenderer):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522647-isnodeinsidefrustum
    isNodeInsideFrustum_withPointOfView(node: any, pointOfView: any):BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522942-nodesinsidefrustumwithpointofvie
    nodesInsideFrustumWithPointOfView(pointOfView: any):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1524089-projectpoint
    projectPoint(point: SCNVector3):SCNVector3;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522631-unprojectpoint
    unprojectPoint(point: SCNVector3):SCNVector3;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522671-delegate
    delegate(): SCNSceneRendererDelegate;
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
    overlaySKScene(): SKScene;
    setOverlaySKScene(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523747-audiolistener
    audioListener(): any;
    setAudioListener(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1523582-audioenvironmentnode
    audioEnvironmentNode(): AVAudioEnvironmentNode;
    setAudioEnvironmentNode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522686-audioengine
    audioEngine(): AVAudioEngine;
    setAudioEngine(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/3672179-currentrenderpassdescriptor
    currentRenderPassDescriptor(): any;
    setCurrentRenderPassDescriptor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/1522854-currenttime
    currentTime(): NSTimeInterval;
    setCurrentTime(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/3240646-currentviewport
    currentViewport(): CGRect;
    setCurrentViewport(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/3227912-temporalantialiasingenabled
    temporalAntialiasingEnabled(): BOOL;
    setTemporalAntialiasingEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenerenderer/3174885-usesreversez
    usesReverseZ(): BOOL;
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
    renderNode_renderer_arguments(node: any, renderer: SCNRenderer, arguments: SCNNodeRendererDelegate):void;
  }
}
declare namespace cocoascript {
  /**
   * An object that manages a Metal buffer used by a custom shader program.
   * doc://com.apple.documentation/documentation/scenekit/scnbufferstream
   */
  interface SCNBufferStream extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnbufferstream/1523175-writebytes
    writeBytes_length(bytes: void, length: NSUInteger):void;
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
    runAction(action: SCNAction):void;
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1524219-runaction
    runAction_completionHandler(action: SCNAction, block: void):void;
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1524222-runaction
    runAction_forKey(action: SCNAction, key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1522791-runaction
    runAction_forKey_completionHandler(action: SCNAction, key: string | cocoascript.NSString, block: void):void;
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1523287-actionforkey
    actionForKey(key: string | cocoascript.NSString):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1523794-hasactions
    hasActions(): BOOL;
    setHasActions(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1523036-actionkeys
    actionKeys(): string | cocoascript.NSString;
    setActionKeys(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnactionable/1523617-removeactionforkey
    removeActionForKey(key: string | cocoascript.NSString):void;
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
    technique(): SCNTechnique;
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
    program_handleError(program: SCNProgram, error: NSError):void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogramdelegate/1523068-programisopaque
    programIsOpaque(program: SCNProgram):BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnprogramdelegate/1524155-program
    program_bindValueForSymbol_atLocation_programID_renderer(program: SCNProgram, symbol: string | cocoascript.NSString, location: number, programID: number, renderer: SCNRenderer):BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnprogramdelegate/1523857-program
    program_unbindValueForSymbol_atLocation_programID_renderer(program: SCNProgram, symbol: string | cocoascript.NSString, location: number, programID: number, renderer: SCNRenderer):void;
  }
}
// doc://com.apple.documentation/documentation/scenekit/scnerrordomain
declare const SCNErrorDomain: string | cocoascript.NSString;
declare namespace cocoascript {
  /**
   * Methods you can implement to participate in the process of exporting a scene to a file.
   * doc://com.apple.documentation/documentation/scenekit/scnsceneexportdelegate
   */
  interface SCNSceneExportDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnsceneexportdelegate/1524221-writeimage
    writeImage_withSceneDocumentURL_originalImageURL(image: UIImage, documentURL: NSURL, originalImageURL: NSURL):NSURL;
  }
}
declare namespace cocoascript {
  /**
   * Methods for customizing SceneKit's rendering of geometry and materials using Metal or OpenGL shader programs.
   * doc://com.apple.documentation/documentation/scenekit/scnshadable
   */
  interface SCNShadable extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnshadable/1523689-program
    program(): SCNProgram;
    setProgram(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnshadable/1523348-shadermodifiers
    shaderModifiers(): string | cocoascript.NSString;
    setShaderModifiers(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnshadable/1523063-handlebindingofsymbol
    handleBindingOfSymbol_usingBlock(symbol: string | cocoascript.NSString, block: SCNBindingBlock):void;
    // doc://com.apple.documentation/documentation/scenekit/scnshadable/1522783-handleunbindingofsymbol
    handleUnbindingOfSymbol_usingBlock(symbol: string | cocoascript.NSString, block: SCNBindingBlock):void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraintdelegate
   */
  interface SCNAvoidOccluderConstraintDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraintdelegate/2887040-avoidoccluderconstraint
    avoidOccluderConstraint_didAvoidOccluder_forNode(constraint: SCNAvoidOccluderConstraint, occluder: any, node: any):void;
    // doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraintdelegate/2887038-avoidoccluderconstraint
    avoidOccluderConstraint_shouldAvoidOccluder_forNode(constraint: SCNAvoidOccluderConstraint, occluder: any, node: any):BOOL;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to respond when a contact or collision occurs between two physics bodies in a scene.
   * doc://com.apple.documentation/documentation/scenekit/scnphysicscontactdelegate
   */
  interface SCNPhysicsContactDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontactdelegate/1512835-physicsworld
    physicsWorld_didBeginContact(world: SCNPhysicsWorld, contact: SCNPhysicsContact):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontactdelegate/1512865-physicsworld
    physicsWorld_didUpdateContact(world: SCNPhysicsWorld, contact: SCNPhysicsContact):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontactdelegate/1512883-physicsworld
    physicsWorld_didEndContact(world: SCNPhysicsWorld, contact: SCNPhysicsContact):void;
  }
}
declare namespace cocoascript {
  /**
   * The appearance and physical characteristics of an individual wheel associated with an physics vehicle behavior.
   * doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel
   */
  interface SCNPhysicsVehicleWheel extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387989-wheelwithnode
    wheelWithNode(node: any):SCNPhysicsVehicleWheel;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387959-connectionposition
    connectionPosition(): SCNVector3;
    setConnectionPosition(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387969-axle
    axle(): SCNVector3;
    setAxle(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387882-steeringaxis
    steeringAxis(): SCNVector3;
    setSteeringAxis(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387991-radius
    radius(): CGFloat;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387904-frictionslip
    frictionSlip(): CGFloat;
    setFrictionSlip(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387983-suspensionstiffness
    suspensionStiffness(): CGFloat;
    setSuspensionStiffness(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387971-suspensioncompression
    suspensionCompression(): CGFloat;
    setSuspensionCompression(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387886-suspensiondamping
    suspensionDamping(): CGFloat;
    setSuspensionDamping(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387928-maximumsuspensiontravel
    maximumSuspensionTravel(): CGFloat;
    setMaximumSuspensionTravel(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387934-maximumsuspensionforce
    maximumSuspensionForce(): CGFloat;
    setMaximumSuspensionForce(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387880-suspensionrestlength
    suspensionRestLength(): CGFloat;
    setSuspensionRestLength(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehiclewheel/1387892-node
    node(): any;
    setNode(): void;
    //
    alloc():SCNPhysicsVehicleWheel;
    //
    init():SCNPhysicsVehicleWheel;
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
    dragField():SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388160-vortexfield
    vortexField():SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388115-radialgravityfield
    radialGravityField():SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388130-lineargravityfield
    linearGravityField():SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388150-noisefieldwithsmoothness
    noiseFieldWithSmoothness_animationSpeed(smoothness: CGFloat, speed: CGFloat):SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388162-turbulencefieldwithsmoothness
    turbulenceFieldWithSmoothness_animationSpeed(smoothness: CGFloat, speed: CGFloat):SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388134-springfield
    springField():SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388152-electricfield
    electricField():SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388168-magneticfield
    magneticField():SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388140-customfieldwithevaluationblock
    customFieldWithEvaluationBlock(block: SCNFieldForceEvaluator):SCNPhysicsField;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388138-halfextent
    halfExtent(): SCNVector3;
    setHalfExtent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388136-scope
    scope(): SCNPhysicsFieldScope;
    setScope(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388158-usesellipsoidalextent
    usesEllipsoidalExtent(): BOOL;
    setUsesEllipsoidalExtent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388154-offset
    offset(): SCNVector3;
    setOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388128-direction
    direction(): SCNVector3;
    setDirection(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388132-strength
    strength(): CGFloat;
    setStrength(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388146-falloffexponent
    falloffExponent(): CGFloat;
    setFalloffExponent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388148-minimumdistance
    minimumDistance(): CGFloat;
    setMinimumDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388117-active
    active(): BOOL;
    setActive(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388126-exclusive
    exclusive(): BOOL;
    setExclusive(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsfield/1388119-categorybitmask
    categoryBitMask(): NSUInteger;
    setCategoryBitMask(): void;
    //
    alloc():SCNPhysicsField;
    //
    init():SCNPhysicsField;
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
    nodeWithGeometry(geometry: SCNGeometry):any;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1419841-nodewithmdlobject
    nodeWithMDLObject(mdlObject: MDLObject):any;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881843-simdtransform
    simdTransform(): simd_float4x4;
    setSimdTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881846-simdposition
    simdPosition(): simd_float3;
    setSimdPosition(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881845-simdrotation
    simdRotation(): simd_float4;
    setSimdRotation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881859-simdeulerangles
    simdEulerAngles(): simd_float3;
    setSimdEulerAngles(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881854-simdorientation
    simdOrientation(): simd_quatf;
    setSimdOrientation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881847-simdscale
    simdScale(): simd_float3;
    setSimdScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881849-simdpivot
    simdPivot(): simd_float4x4;
    setSimdPivot(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408014-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408004-light
    light(): SCNLight;
    setLight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407976-camera
    camera(): SCNCamera;
    setCamera(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407966-geometry
    geometry(): SCNGeometry;
    setGeometry(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408022-morpher
    morpher(): SCNMorpher;
    setMorpher(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407953-skinner
    skinner(): SCNSkinner;
    setSkinner(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407994-categorybitmask
    categoryBitMask(): NSUInteger;
    setCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408016-constraints
    constraints(): SCNConstraint;
    setConstraints(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408030-presentationnode
    presentationNode(): any;
    setPresentationNode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407962-paused
    paused(): BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407967-hidden
    hidden(): BOOL;
    setHidden(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408010-opacity
    opacity(): CGFloat;
    setOpacity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407978-renderingorder
    renderingOrder(): NSInteger;
    setRenderingOrder(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407955-castsshadow
    castsShadow(): BOOL;
    setCastsShadow(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1690499-movabilityhint
    movabilityHint(): SCNMovabilityHint;
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
    insertChildNode_atIndex(child: any, index: NSUInteger):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407991-removefromparentnode
    removeFromParentNode():void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408002-replacechildnode
    replaceChildNode_with(oldChild: any, newChild: any):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407982-childnodespassingtest
    childNodesPassingTest(predicate: BOOL):any;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407951-childnodewithname
    childNodeWithName_recursively(name: string | cocoascript.NSString, recursively: BOOL):any;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408032-enumeratechildnodesusingblock
    enumerateChildNodesUsingBlock(block: BOOL):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1642248-enumeratehierarchyusingblock
    enumerateHierarchyUsingBlock(block: BOOL):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407949-filters
    filters(): CIFilter;
    setFilters(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408012-rendererdelegate
    rendererDelegate(): SCNNodeRendererDelegate;
    setRendererDelegate(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407988-physicsbody
    physicsBody(): SCNPhysicsBody;
    setPhysicsBody(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408006-physicsfield
    physicsField(): SCNPhysicsField;
    setPhysicsField(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1523123-addparticlesystem
    addParticleSystem(system: SCNParticleSystem):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1522705-particlesystems
    particleSystems(): SCNParticleSystem;
    setParticleSystems(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1524014-removeparticlesystem
    removeParticleSystem(system: SCNParticleSystem):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1522801-removeallparticlesystems
    removeAllParticleSystems():void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1523464-addaudioplayer
    addAudioPlayer(player: SCNAudioPlayer):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1523244-audioplayers
    audioPlayers(): SCNAudioPlayer;
    setAudioPlayers(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1522767-removeaudioplayer
    removeAudioPlayer(player: SCNAudioPlayer):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1523570-removeallaudioplayers
    removeAllAudioPlayers():void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408046-clone
    clone():any;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407960-flattenedclone
    flattenedClone():any;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407998-hittestwithsegmentfrompoint
    hitTestWithSegmentFromPoint_toPoint_options(pointA: SCNVector3, pointB: SCNVector3, options: any):any;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881861-simdrotateby
    simdRotateBy_aroundTarget(worldRotation: simd_quatf, worldTarget: simd_float3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881858-simdlocaltranslateby
    simdLocalTranslateBy(translation: simd_float3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881844-simdlocalrotateby
    simdLocalRotateBy(rotation: simd_quatf):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881870-simdlookat
    simdLookAt(worldTarget: simd_float3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881848-simdlookat
    simdLookAt_up_localFront(worldTarget: simd_float3, worldUp: simd_float3, localFront: simd_float3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881851-simdlocalright
    simdLocalRight(): simd_float3;
    setSimdLocalRight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881872-simdlocalup
    simdLocalUp(): simd_float3;
    setSimdLocalUp(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881864-simdlocalfront
    simdLocalFront(): simd_float3;
    setSimdLocalFront(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881857-simdworldright
    simdWorldRight(): simd_float3;
    setSimdWorldRight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881867-simdworldup
    simdWorldUp(): simd_float3;
    setSimdWorldUp(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881863-simdworldfront
    simdWorldFront(): simd_float3;
    setSimdWorldFront(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881868-simdworldtransform
    simdWorldTransform(): simd_float4x4;
    setSimdWorldTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881865-simdworldorientation
    simdWorldOrientation(): simd_quatf;
    setSimdWorldOrientation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881856-simdworldposition
    simdWorldPosition(): simd_float3;
    setSimdWorldPosition(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881852-simdconvertposition
    simdConvertPosition_fromNode(position: simd_float3, node: any):simd_float3;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881869-simdconvertposition
    simdConvertPosition_toNode(position: simd_float3, node: any):simd_float3;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881866-simdconverttransform
    simdConvertTransform_fromNode(transform: simd_float4x4, node: any):simd_float4x4;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881855-simdconverttransform
    simdConvertTransform_toNode(transform: simd_float4x4, node: any):simd_float4x4;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881842-simdconvertvector
    simdConvertVector_fromNode(vector: simd_float3, node: any):simd_float3;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881850-simdconvertvector
    simdConvertVector_toNode(vector: simd_float3, node: any):simd_float3;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2881853-focusbehavior
    focusBehavior(): SCNNodeFocusBehavior;
    setFocusBehavior(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2873004-entity
    entity(): GKEntity;
    setEntity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407964-transform
    transform(): SCNMatrix4;
    setTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408026-position
    position(): SCNVector3;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408034-rotation
    rotation(): SCNVector4;
    setRotation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407980-eulerangles
    eulerAngles(): SCNVector3;
    setEulerAngles(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408048-orientation
    orientation(): SCNQuaternion;
    setOrientation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408050-scale
    scale(): SCNVector3;
    setScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408044-pivot
    pivot(): SCNMatrix4;
    setPivot(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867399-rotateby
    rotateBy_aroundTarget(worldRotation: SCNQuaternion, worldTarget: SCNVector3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867383-localtranslateby
    localTranslateBy(translation: SCNVector3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867398-localrotateby
    localRotateBy(rotation: SCNQuaternion):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867394-lookat
    lookAt(worldTarget: SCNVector3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867396-lookat
    lookAt_up_localFront(worldTarget: SCNVector3, worldUp: SCNVector3, localFront: SCNVector3):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867400-localright
    localRight(): SCNVector3;
    setLocalRight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867386-localup
    localUp(): SCNVector3;
    setLocalUp(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867393-localfront
    localFront(): SCNVector3;
    setLocalFront(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867404-worldright
    worldRight(): SCNVector3;
    setWorldRight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867395-worldup
    worldUp(): SCNVector3;
    setWorldUp(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867392-worldfront
    worldFront(): SCNVector3;
    setWorldFront(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407970-worldtransform
    worldTransform(): SCNMatrix4;
    setWorldTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867401-setworldtransform
    setWorldTransform(worldTransform: SCNMatrix4):void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867402-worldorientation
    worldOrientation(): SCNQuaternion;
    setWorldOrientation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867405-worldposition
    worldPosition(): SCNVector3;
    setWorldPosition(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1408018-convertposition
    convertPosition_fromNode(position: SCNVector3, node: any):SCNVector3;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407990-convertposition
    convertPosition_toNode(position: SCNVector3, node: any):SCNVector3;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407996-converttransform
    convertTransform_fromNode(transform: SCNMatrix4, node: any):SCNMatrix4;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/1407986-converttransform
    convertTransform_toNode(transform: SCNMatrix4, node: any):SCNMatrix4;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867403-convertvector
    convertVector_fromNode(vector: SCNVector3, node: any):SCNVector3;
    // doc://com.apple.documentation/documentation/scenekit/scnnode/2867397-convertvector
    convertVector_toNode(vector: SCNVector3, node: any):SCNVector3;
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
    camera():SCNCamera;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1419839-camerawithmdlcamera
    cameraWithMDLCamera(mdlCamera: MDLCamera):SCNCamera;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436623-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436592-znear
    zNear(): number;
    setZNear(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436596-zfar
    zFar(): number;
    setZFar(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436610-automaticallyadjustszrange
    automaticallyAdjustsZRange(): BOOL;
    setAutomaticallyAdjustsZRange(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2867510-fieldofview
    fieldOfView(): CGFloat;
    setFieldOfView(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2867556-focallength
    focalLength(): CGFloat;
    setFocalLength(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2867499-sensorheight
    sensorHeight(): CGFloat;
    setSensorHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2878134-projectiondirection
    projectionDirection(): SCNCameraProjectionDirection;
    setProjectionDirection(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1690501-projectiontransform
    projectionTransform(): SCNMatrix4;
    setProjectionTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436621-usesorthographicprojection
    usesOrthographicProjection(): BOOL;
    setUsesOrthographicProjection(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436612-orthographicscale
    orthographicScale(): number;
    setOrthographicScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436625-categorybitmask
    categoryBitMask(): NSUInteger;
    setCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2881741-wantsdepthoffield
    wantsDepthOfField(): BOOL;
    setWantsDepthOfField(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2867518-focusdistance
    focusDistance(): CGFloat;
    setFocusDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2867490-fstop
    fStop(): CGFloat;
    setFStop(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2867484-aperturebladecount
    apertureBladeCount(): NSInteger;
    setApertureBladeCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2872999-focalblursamplecount
    focalBlurSampleCount(): NSInteger;
    setFocalBlurSampleCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644099-motionblurintensity
    motionBlurIntensity(): CGFloat;
    setMotionBlurIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644101-wantshdr
    wantsHDR(): BOOL;
    setWantsHDR(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644105-exposureoffset
    exposureOffset(): CGFloat;
    setExposureOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644097-averagegray
    averageGray(): CGFloat;
    setAverageGray(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644110-whitepoint
    whitePoint(): CGFloat;
    setWhitePoint(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644103-minimumexposure
    minimumExposure(): CGFloat;
    setMinimumExposure(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644120-maximumexposure
    maximumExposure(): CGFloat;
    setMaximumExposure(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644117-wantsexposureadaptation
    wantsExposureAdaptation(): BOOL;
    setWantsExposureAdaptation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644093-exposureadaptationbrighteningspe
    exposureAdaptationBrighteningSpeedFactor(): CGFloat;
    setExposureAdaptationBrighteningSpeedFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644094-exposureadaptationdarkeningspeed
    exposureAdaptationDarkeningSpeedFactor(): CGFloat;
    setExposureAdaptationDarkeningSpeedFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644112-contrast
    contrast(): CGFloat;
    setContrast(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644100-saturation
    saturation(): CGFloat;
    setSaturation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644114-colorgrading
    colorGrading(): SCNMaterialProperty;
    setColorGrading(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644104-bloomintensity
    bloomIntensity(): CGFloat;
    setBloomIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644098-bloomthreshold
    bloomThreshold(): CGFloat;
    setBloomThreshold(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644096-bloomblurradius
    bloomBlurRadius(): CGFloat;
    setBloomBlurRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644108-colorfringeintensity
    colorFringeIntensity(): CGFloat;
    setColorFringeIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644113-colorfringestrength
    colorFringeStrength(): CGFloat;
    setColorFringeStrength(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644106-vignettingintensity
    vignettingIntensity(): CGFloat;
    setVignettingIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1644118-vignettingpower
    vignettingPower(): CGFloat;
    setVignettingPower(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2874249-screenspaceambientocclusioninten
    screenSpaceAmbientOcclusionIntensity(): CGFloat;
    setScreenSpaceAmbientOcclusionIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2874248-screenspaceambientocclusionradiu
    screenSpaceAmbientOcclusionRadius(): CGFloat;
    setScreenSpaceAmbientOcclusionRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2874250-screenspaceambientocclusionbias
    screenSpaceAmbientOcclusionBias(): CGFloat;
    setScreenSpaceAmbientOcclusionBias(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2874251-screenspaceambientocclusiondepth
    screenSpaceAmbientOcclusionDepthThreshold(): CGFloat;
    setScreenSpaceAmbientOcclusionDepthThreshold(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/2875550-screenspaceambientocclusionnorma
    screenSpaceAmbientOcclusionNormalThreshold(): CGFloat;
    setScreenSpaceAmbientOcclusionNormalThreshold(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436598-yfov
    yFov(): number;
    setYFov(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436608-xfov
    xFov(): number;
    setXFov(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436600-focaldistance
    focalDistance(): CGFloat;
    setFocalDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436604-focalsize
    focalSize(): CGFloat;
    setFocalSize(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436606-focalblurradius
    focalBlurRadius(): CGFloat;
    setFocalBlurRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436594-aperture
    aperture(): CGFloat;
    setAperture(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3227909-bloomiterationcount
    bloomIterationCount(): NSInteger;
    setBloomIterationCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3088922-bloomiterationspread
    bloomIterationSpread(): CGFloat;
    setBloomIterationSpread(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3075417-grainintensity
    grainIntensity(): CGFloat;
    setGrainIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3075418-grainiscolored
    grainIsColored(): BOOL;
    setGrainIsColored(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3075419-grainscale
    grainScale(): CGFloat;
    setGrainScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3088923-whitebalancetemperature
    whiteBalanceTemperature(): CGFloat;
    setWhiteBalanceTemperature(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3088924-whitebalancetint
    whiteBalanceTint(): CGFloat;
    setWhiteBalanceTint(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/3123432-projectiontransformwithviewports
    projectionTransformWithViewportSize(viewportSize: CGSize):SCNMatrix4;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436619-projectiontransform
    projectionTransform():SCNMatrix4;
    // doc://com.apple.documentation/documentation/scenekit/scncamera/1436590-setprojectiontransform
    setProjectionTransform(projectionTransform: SCNMatrix4):void;
    //
    alloc():SCNCamera;
    //
    init():SCNCamera;
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
    material():SCNMaterial;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1419835-materialwithmdlmaterial
    materialWithMDLMaterial(mdlMaterial: MDLMaterial):SCNMaterial;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462525-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462518-lightingmodelname
    lightingModelName(): SCNLightingModel;
    setLightingModelName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462589-diffuse
    diffuse(): SCNMaterialProperty;
    setDiffuse(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1640554-metalness
    metalness(): SCNMaterialProperty;
    setMetalness(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1640555-roughness
    roughness(): SCNMaterialProperty;
    setRoughness(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462542-normal
    normal(): SCNMaterialProperty;
    setNormal(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/2867516-displacement
    displacement(): SCNMaterialProperty;
    setDisplacement(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462527-emission
    emission(): SCNMaterialProperty;
    setEmission(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462524-selfillumination
    selfIllumination(): SCNMaterialProperty;
    setSelfIllumination(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462579-ambientocclusion
    ambientOcclusion(): SCNMaterialProperty;
    setAmbientOcclusion(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462589-diffuse
    diffuse(): SCNMaterialProperty;
    setDiffuse(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462558-ambient
    ambient(): SCNMaterialProperty;
    setAmbient(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462516-specular
    specular(): SCNMaterialProperty;
    setSpecular(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462520-reflective
    reflective(): SCNMaterialProperty;
    setReflective(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462575-multiply
    multiply(): SCNMaterialProperty;
    setMultiply(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462583-transparent
    transparent(): SCNMaterialProperty;
    setTransparent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462533-shininess
    shininess(): CGFloat;
    setShininess(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462587-fresnelexponent
    fresnelExponent(): CGFloat;
    setFresnelExponent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462522-locksambientwithdiffuse
    locksAmbientWithDiffuse(): BOOL;
    setLocksAmbientWithDiffuse(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462567-transparency
    transparency(): CGFloat;
    setTransparency(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462549-transparencymode
    transparencyMode(): SCNTransparencyMode;
    setTransparencyMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462585-blendmode
    blendMode(): SCNBlendMode;
    setBlendMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462580-litperpixel
    litPerPixel(): BOOL;
    setLitPerPixel(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462531-doublesided
    doubleSided(): BOOL;
    setDoubleSided(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462571-cullmode
    cullMode(): SCNCullMode;
    setCullMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/2867442-fillmode
    fillMode(): SCNFillMode;
    setFillMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462545-writestodepthbuffer
    writesToDepthBuffer(): BOOL;
    setWritesToDepthBuffer(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/1462562-readsfromdepthbuffer
    readsFromDepthBuffer(): BOOL;
    setReadsFromDepthBuffer(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/2867554-colorbufferwritemask
    colorBufferWriteMask(): SCNColorMask;
    setColorBufferWriteMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/3075420-clearcoat
    clearCoat(): SCNMaterialProperty;
    setClearCoat(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/3075421-clearcoatnormal
    clearCoatNormal(): SCNMaterialProperty;
    setClearCoatNormal(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterial/3075422-clearcoatroughness
    clearCoatRoughness(): SCNMaterialProperty;
    setClearCoatRoughness(): void;
    //
    alloc():SCNMaterial;
    //
    init():SCNMaterial;
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
    influenceFactor(): CGFloat;
    setInfluenceFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnconstraint/2873378-enabled
    enabled(): BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnconstraint/2867541-incremental
    incremental(): BOOL;
    setIncremental(): void;
    //
    alloc():SCNConstraint;
    //
    init():SCNConstraint;
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
    shapeWithGeometry_options(geometry: SCNGeometry, options: SCNPhysicsShape):SCNPhysicsShape;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsshape/1508889-shapewithnode
    shapeWithNode_options(node: any, options: SCNPhysicsShape):SCNPhysicsShape;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsshape/1508886-shapewithshapes
    shapeWithShapes_transforms(shapes: SCNPhysicsShape, transforms: NSValue):SCNPhysicsShape;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsshape/1508888-sourceobject
    sourceObject(): id;
    setSourceObject(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsshape/1508904-options
    options(): id;
    setOptions(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsshape/1508898-transforms
    transforms(): NSValue;
    setTransforms(): void;
    //
    alloc():SCNPhysicsShape;
    //
    init():SCNPhysicsShape;
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
    bodyWithType_shape(type: SCNPhysicsBodyType, shape: SCNPhysicsShape):SCNPhysicsBody;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514791-staticbody
    staticBody():SCNPhysicsBody;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514766-dynamicbody
    dynamicBody():SCNPhysicsBody;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514776-kinematicbody
    kinematicBody():SCNPhysicsBody;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514789-physicsshape
    physicsShape(): SCNPhysicsShape;
    setPhysicsShape(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514787-type
    type(): SCNPhysicsBodyType;
    setType(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514753-velocityfactor
    velocityFactor(): SCNVector3;
    setVelocityFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514748-angularvelocityfactor
    angularVelocityFactor(): SCNVector3;
    setAngularVelocityFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514738-affectedbygravity
    affectedByGravity(): BOOL;
    setAffectedByGravity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514755-mass
    mass(): CGFloat;
    setMass(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514786-charge
    charge(): CGFloat;
    setCharge(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514794-friction
    friction(): CGFloat;
    setFriction(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514737-rollingfriction
    rollingFriction(): CGFloat;
    setRollingFriction(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514740-restitution
    restitution(): CGFloat;
    setRestitution(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514763-damping
    damping(): CGFloat;
    setDamping(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514792-angulardamping
    angularDamping(): CGFloat;
    setAngularDamping(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514777-momentofinertia
    momentOfInertia(): SCNVector3;
    setMomentOfInertia(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514761-usesdefaultmomentofinertia
    usesDefaultMomentOfInertia(): BOOL;
    setUsesDefaultMomentOfInertia(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/3013742-centerofmassoffset
    centerOfMassOffset(): SCNVector3;
    setCenterOfMassOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514768-categorybitmask
    categoryBitMask(): NSUInteger;
    setCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514746-contacttestbitmask
    contactTestBitMask(): NSUInteger;
    setContactTestBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514772-collisionbitmask
    collisionBitMask(): NSUInteger;
    setCollisionBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/3013743-continuouscollisiondetectionthre
    continuousCollisionDetectionThreshold(): CGFloat;
    setContinuousCollisionDetectionThreshold(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514801-applyforce
    applyForce_impulse(direction: SCNVector3, impulse: BOOL):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514750-applyforce
    applyForce_atPosition_impulse(direction: SCNVector3, position: SCNVector3, impulse: BOOL):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514752-applytorque
    applyTorque_impulse(torque: SCNVector4, impulse: BOOL):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514735-clearallforces
    clearAllForces():void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514757-velocity
    velocity(): SCNVector3;
    setVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514770-angularvelocity
    angularVelocity(): SCNVector4;
    setAngularVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514795-isresting
    isResting(): BOOL;
    setIsResting(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514742-allowsresting
    allowsResting(): BOOL;
    setAllowsResting(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/3013745-setresting
    setResting(resting: BOOL):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/1514782-resettransform
    resetTransform():void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/3022237-angularrestingthreshold
    angularRestingThreshold(): CGFloat;
    setAngularRestingThreshold(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsbody/3022238-linearrestingthreshold
    linearRestingThreshold(): CGFloat;
    setLinearRestingThreshold(): void;
    //
    alloc():SCNPhysicsBody;
    //
    init():SCNPhysicsBody;
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
    techniqueWithDictionary(dictionary: SCNTechnique):SCNTechnique;
    // doc://com.apple.documentation/documentation/scenekit/scntechnique/1520497-techniquebysequencingtechniques
    techniqueBySequencingTechniques(techniques: SCNTechnique):SCNTechnique;
    // doc://com.apple.documentation/documentation/scenekit/scntechnique/1520492-dictionaryrepresentation
    dictionaryRepresentation(): id;
    setDictionaryRepresentation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntechnique/1520490-handlebindingofsymbol
    handleBindingOfSymbol_usingBlock(symbol: string | cocoascript.NSString, block: SCNBindingBlock):void;
    // doc://com.apple.documentation/documentation/scenekit/scntechnique/1520495-setobject
    setObject_forKeyedSubscript(obj: SCNTechnique, key: NSCopying):void;
    // doc://com.apple.documentation/documentation/scenekit/scntechnique/1520493-objectforkeyedsubscript
    objectForKeyedSubscript(key: SCNTechnique):SCNTechnique;
    // doc://com.apple.documentation/documentation/scenekit/scntechnique/3229865-library
    library(): MTLLibrary;
    setLibrary(): void;
    //
    alloc():SCNTechnique;
    //
    init():SCNTechnique;
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
    levelOfDetailWithGeometry_screenSpaceRadius(geometry: SCNGeometry, radius: CGFloat):SCNLevelOfDetail;
    // doc://com.apple.documentation/documentation/scenekit/scnlevelofdetail/1522802-levelofdetailwithgeometry
    levelOfDetailWithGeometry_worldSpaceDistance(geometry: SCNGeometry, distance: CGFloat):SCNLevelOfDetail;
    // doc://com.apple.documentation/documentation/scenekit/scnlevelofdetail/1522819-geometry
    geometry(): SCNGeometry;
    setGeometry(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlevelofdetail/1523554-screenspaceradius
    screenSpaceRadius(): CGFloat;
    setScreenSpaceRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlevelofdetail/1524159-worldspacedistance
    worldSpaceDistance(): CGFloat;
    setWorldSpaceDistance(): void;
    //
    alloc():SCNLevelOfDetail;
    //
    init():SCNLevelOfDetail;
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
    audioSourceNamed(fileName: string | cocoascript.NSString):SCNAudioSource;
    // doc://com.apple.documentation/documentation/scenekit/scnaudiosource/1524225-initwithfilenamed
    initWithFileNamed(name: string | cocoascript.NSString):SCNAudioSource;
    // doc://com.apple.documentation/documentation/scenekit/scnaudiosource/1523264-initwithurl
    initWithURL(url: NSURL):SCNAudioSource;
    // doc://com.apple.documentation/documentation/scenekit/scnaudiosource/1524185-positional
    positional(): BOOL;
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
    loops(): BOOL;
    setLoops(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaudiosource/1523475-shouldstream
    shouldStream(): BOOL;
    setShouldStream(): void;
    //
    alloc():SCNAudioSource;
    //
    init():SCNAudioSource;
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
    light():SCNLight;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1419849-lightwithmdllight
    lightWithMDLLight(mdlLight: MDLLight):SCNLight;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522919-type
    type(): SCNLightType;
    setType(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523627-color
    color(): id;
    setColor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1640545-temperature
    temperature(): CGFloat;
    setTemperature(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1640548-intensity
    intensity(): CGFloat;
    setIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/2921276-sphericalharmonicscoefficients
    sphericalHarmonicsCoefficients(): NSData;
    setSphericalHarmonicsCoefficients(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522839-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523345-attributeforkey
    attributeForKey(key: string | cocoascript.NSString):SCNLight;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523148-setattribute
    setAttribute_forKey(attribute: SCNLight, key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1524223-attenuationstartdistance
    attenuationStartDistance(): CGFloat;
    setAttenuationStartDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1524140-attenuationenddistance
    attenuationEndDistance(): CGFloat;
    setAttenuationEndDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522879-attenuationfalloffexponent
    attenuationFalloffExponent(): CGFloat;
    setAttenuationFalloffExponent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522797-spotinnerangle
    spotInnerAngle(): CGFloat;
    setSpotInnerAngle(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523382-spotouterangle
    spotOuterAngle(): CGFloat;
    setSpotOuterAngle(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523524-gobo
    gobo(): SCNMaterialProperty;
    setGobo(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523816-castsshadow
    castsShadow(): BOOL;
    setCastsShadow(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523724-shadowradius
    shadowRadius(): CGFloat;
    setShadowRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522864-shadowcolor
    shadowColor(): id;
    setShadowColor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1524127-shadowmapsize
    shadowMapSize(): CGSize;
    setShadowMapSize(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523300-shadowsamplecount
    shadowSampleCount(): NSUInteger;
    setShadowSampleCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522847-shadowmode
    shadowMode(): SCNShadowMode;
    setShadowMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522849-shadowbias
    shadowBias(): CGFloat;
    setShadowBias(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523951-orthographicscale
    orthographicScale(): CGFloat;
    setOrthographicScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522845-zfar
    zFar(): CGFloat;
    setZFar(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1522630-znear
    zNear(): CGFloat;
    setZNear(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1523669-categorybitmask
    categoryBitMask(): NSUInteger;
    setCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/1640546-iesprofileurl
    IESProfileURL(): NSURL;
    setIESProfileURL(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042452-areaextents
    areaExtents(): simd_float3;
    setAreaExtents(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042453-areapolygonvertices
    areaPolygonVertices(): NSValue;
    setAreaPolygonVertices(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042454-areatype
    areaType(): SCNLightAreaType;
    setAreaType(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/2879207-automaticallyadjustsshadowprojec
    automaticallyAdjustsShadowProjection(): BOOL;
    setAutomaticallyAdjustsShadowProjection(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042455-doublesided
    doubleSided(): BOOL;
    setDoubleSided(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042456-drawsarea
    drawsArea(): BOOL;
    setDrawsArea(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/2879200-forcesbackfacecasters
    forcesBackFaceCasters(): BOOL;
    setForcesBackFaceCasters(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/2865867-maximumshadowdistance
    maximumShadowDistance(): CGFloat;
    setMaximumShadowDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042457-parallaxcenteroffset
    parallaxCenterOffset(): simd_float3;
    setParallaxCenterOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042458-parallaxcorrectionenabled
    parallaxCorrectionEnabled(): BOOL;
    setParallaxCorrectionEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042459-parallaxextentsfactor
    parallaxExtentsFactor(): simd_float3;
    setParallaxExtentsFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042460-probeenvironment
    probeEnvironment(): SCNMaterialProperty;
    setProbeEnvironment(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042461-probeextents
    probeExtents(): simd_float3;
    setProbeExtents(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042462-probeoffset
    probeOffset(): simd_float3;
    setProbeOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042463-probetype
    probeType(): SCNLightProbeType;
    setProbeType(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/3042464-probeupdatetype
    probeUpdateType(): SCNLightProbeUpdateType;
    setProbeUpdateType(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/2875915-sampledistributedshadowmaps
    sampleDistributedShadowMaps(): BOOL;
    setSampleDistributedShadowMaps(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/2865865-shadowcascadecount
    shadowCascadeCount(): NSUInteger;
    setShadowCascadeCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlight/2865866-shadowcascadesplittingfactor
    shadowCascadeSplittingFactor(): CGFloat;
    setShadowCascadeSplittingFactor(): void;
    //
    alloc():SCNLight;
    //
    init():SCNLight;
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
    particleSystem():SCNParticleSystem;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522772-particlesystemnamed
    particleSystemNamed_inDirectory(name: string | cocoascript.NSString, directory: string | cocoascript.NSString):SCNParticleSystem;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523998-emissionduration
    emissionDuration(): CGFloat;
    setEmissionDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523842-emissiondurationvariation
    emissionDurationVariation(): CGFloat;
    setEmissionDurationVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522998-idleduration
    idleDuration(): CGFloat;
    setIdleDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523018-idledurationvariation
    idleDurationVariation(): CGFloat;
    setIdleDurationVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522618-loops
    loops(): BOOL;
    setLoops(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522597-warmupduration
    warmupDuration(): CGFloat;
    setWarmupDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522857-birthrate
    birthRate(): CGFloat;
    setBirthRate(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524147-birthratevariation
    birthRateVariation(): CGFloat;
    setBirthRateVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522737-emittershape
    emitterShape(): SCNGeometry;
    setEmitterShape(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522899-birthlocation
    birthLocation(): SCNParticleBirthLocation;
    setBirthLocation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523361-birthdirection
    birthDirection(): SCNParticleBirthDirection;
    setBirthDirection(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523600-emittingdirection
    emittingDirection(): SCNVector3;
    setEmittingDirection(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522862-spreadingangle
    spreadingAngle(): CGFloat;
    setSpreadingAngle(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523896-particleangle
    particleAngle(): CGFloat;
    setParticleAngle(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522828-particleanglevariation
    particleAngleVariation(): CGFloat;
    setParticleAngleVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523946-particlevelocity
    particleVelocity(): CGFloat;
    setParticleVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524157-particlevelocityvariation
    particleVelocityVariation(): CGFloat;
    setParticleVelocityVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522757-particleangularvelocity
    particleAngularVelocity(): CGFloat;
    setParticleAngularVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523590-particleangularvelocityvariation
    particleAngularVelocityVariation(): CGFloat;
    setParticleAngularVelocityVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523575-particlelifespan
    particleLifeSpan(): CGFloat;
    setParticleLifeSpan(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523567-particlelifespanvariation
    particleLifeSpanVariation(): CGFloat;
    setParticleLifeSpanVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523508-particlesize
    particleSize(): CGFloat;
    setParticleSize(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522716-particlesizevariation
    particleSizeVariation(): CGFloat;
    setParticleSizeVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523248-particlecolor
    particleColor(): UIColor;
    setParticleColor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523639-particlecolorvariation
    particleColorVariation(): SCNVector4;
    setParticleColorVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524153-particleimage
    particleImage(): id;
    setParticleImage(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523317-fresnelexponent
    fresnelExponent(): CGFloat;
    setFresnelExponent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523338-stretchfactor
    stretchFactor(): CGFloat;
    setStretchFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523340-imagesequencerowcount
    imageSequenceRowCount(): NSUInteger;
    setImageSequenceRowCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523462-imagesequencecolumncount
    imageSequenceColumnCount(): NSUInteger;
    setImageSequenceColumnCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523511-imagesequenceinitialframe
    imageSequenceInitialFrame(): CGFloat;
    setImageSequenceInitialFrame(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523821-imagesequenceinitialframevariati
    imageSequenceInitialFrameVariation(): CGFloat;
    setImageSequenceInitialFrameVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524075-imagesequenceframerate
    imageSequenceFrameRate(): CGFloat;
    setImageSequenceFrameRate(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523667-imagesequenceframeratevariation
    imageSequenceFrameRateVariation(): CGFloat;
    setImageSequenceFrameRateVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522816-imagesequenceanimationmode
    imageSequenceAnimationMode(): SCNParticleImageSequenceAnimationMode;
    setImageSequenceAnimationMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523452-affectedbygravity
    affectedByGravity(): BOOL;
    setAffectedByGravity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523353-affectedbyphysicsfields
    affectedByPhysicsFields(): BOOL;
    setAffectedByPhysicsFields(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523516-collidernodes
    colliderNodes(): any;
    setColliderNodes(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523357-particlediesoncollision
    particleDiesOnCollision(): BOOL;
    setParticleDiesOnCollision(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522766-acceleration
    acceleration(): SCNVector3;
    setAcceleration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522931-dampingfactor
    dampingFactor(): CGFloat;
    setDampingFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522607-particlemass
    particleMass(): CGFloat;
    setParticleMass(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523408-particlemassvariation
    particleMassVariation(): CGFloat;
    setParticleMassVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523156-particlecharge
    particleCharge(): CGFloat;
    setParticleCharge(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523377-particlechargevariation
    particleChargeVariation(): CGFloat;
    setParticleChargeVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522637-particlebounce
    particleBounce(): CGFloat;
    setParticleBounce(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522662-particlebouncevariation
    particleBounceVariation(): CGFloat;
    setParticleBounceVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524010-particlefriction
    particleFriction(): CGFloat;
    setParticleFriction(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522868-particlefrictionvariation
    particleFrictionVariation(): CGFloat;
    setParticleFrictionVariation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524068-systemspawnedoncollision
    systemSpawnedOnCollision(): SCNParticleSystem;
    setSystemSpawnedOnCollision(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524091-systemspawnedondying
    systemSpawnedOnDying(): SCNParticleSystem;
    setSystemSpawnedOnDying(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522751-systemspawnedonliving
    systemSpawnedOnLiving(): SCNParticleSystem;
    setSystemSpawnedOnLiving(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523728-blendmode
    blendMode(): SCNParticleBlendMode;
    setBlendMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523131-orientationmode
    orientationMode(): SCNParticleOrientationMode;
    setOrientationMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522795-sortingmode
    sortingMode(): SCNParticleSortingMode;
    setSortingMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522794-lightingenabled
    lightingEnabled(): BOOL;
    setLightingEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523901-blackpassenabled
    blackPassEnabled(): BOOL;
    setBlackPassEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522855-local
    local(): BOOL;
    setLocal(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522968-reset
    reset():void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522988-speedfactor
    speedFactor(): CGFloat;
    setSpeedFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523251-handleevent
    handleEvent_forProperties_withBlock(event: SCNParticleEvent, properties: SCNParticleProperty, block: SCNParticleEventBlock):void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522775-propertycontrollers
    propertyControllers(): SCNParticlePropertyController;
    setPropertyControllers(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1522635-addmodifierforproperties
    addModifierForProperties_atStage_withBlock(properties: SCNParticleProperty, stage: SCNParticleModifierStage, block: SCNParticleModifierBlock):void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1524077-removemodifiersofstage
    removeModifiersOfStage(stage: SCNParticleModifierStage):void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/1523614-removeallmodifiers
    removeAllModifiers():void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/2866184-orientationdirection
    orientationDirection(): SCNVector3;
    setOrientationDirection(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/2866186-particleintensity
    particleIntensity(): CGFloat;
    setParticleIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlesystem/2866185-particleintensityvariation
    particleIntensityVariation(): CGFloat;
    setParticleIntensityVariation(): void;
    //
    alloc():SCNParticleSystem;
    //
    init():SCNParticleSystem;
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
    controllerWithAnimation(animation: CAAnimation):SCNParticlePropertyController;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontroller/1523707-animation
    animation(): CAAnimation;
    setAnimation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontroller/1522852-inputmode
    inputMode(): SCNParticleInputMode;
    setInputMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontroller/1523994-inputbias
    inputBias(): CGFloat;
    setInputBias(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontroller/1522903-inputscale
    inputScale(): CGFloat;
    setInputScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontroller/1522895-inputorigin
    inputOrigin(): any;
    setInputOrigin(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontroller/1522973-inputproperty
    inputProperty(): SCNParticleProperty;
    setInputProperty(): void;
    //
    alloc():SCNParticlePropertyController;
    //
    init():SCNParticlePropertyController;
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
    program():SCNProgram;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1522891-vertexshader
    vertexShader(): string | cocoascript.NSString;
    setVertexShader(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1523135-fragmentshader
    fragmentShader(): string | cocoascript.NSString;
    setFragmentShader(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1524049-geometryshader
    geometryShader(): string | cocoascript.NSString;
    setGeometryShader(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1523852-tessellationcontrolshader
    tessellationControlShader(): string | cocoascript.NSString;
    setTessellationControlShader(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1523760-tessellationevaluationshader
    tessellationEvaluationShader(): string | cocoascript.NSString;
    setTessellationEvaluationShader(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1522730-setsemantic
    setSemantic_forSymbol_options(semantic: string | cocoascript.NSString, symbol: string | cocoascript.NSString, options: SCNProgram):void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1523350-semanticforsymbol
    semanticForSymbol(symbol: string | cocoascript.NSString):NSString;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1522611-delegate
    delegate(): SCNProgramDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1522844-opaque
    opaque(): BOOL;
    setOpaque(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1524047-handlebindingofbuffernamed
    handleBindingOfBufferNamed_frequency_usingBlock(name: string | cocoascript.NSString, frequency: SCNBufferFrequency, block: SCNBufferBindingBlock):void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1522799-vertexfunctionname
    vertexFunctionName(): string | cocoascript.NSString;
    setVertexFunctionName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1524012-fragmentfunctionname
    fragmentFunctionName(): string | cocoascript.NSString;
    setFragmentFunctionName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnprogram/1522934-library
    library(): MTLLibrary;
    setLibrary(): void;
    //
    alloc():SCNProgram;
    //
    init():SCNProgram;
  }
}

declare const SCNProgram: cocoascript.SCNProgram;
// doc://com.apple.documentation/documentation/scenekit/scnprogrammappingchannelkey
declare const SCNProgramMappingChannelKey: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/scenekit/scnmodeltransform
declare const SCNModelTransform: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/scenekit/scnmodelviewprojectiontransform
declare const SCNModelViewProjectionTransform: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/scenekit/scnmodelviewtransform
declare const SCNModelViewTransform: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/scenekit/scnnormaltransform
declare const SCNNormalTransform: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/scenekit/scnprojectiontransform
declare const SCNProjectionTransform: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/scenekit/scnviewtransform
declare const SCNViewTransform: string | cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A simple, reusable animation that changes attributes of any node you attach it to.
   * doc://com.apple.documentation/documentation/scenekit/scnaction
   */
  interface SCNAction extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523238-movebyx
    moveByX_y_z_duration(deltaX: CGFloat, deltaY: CGFloat, deltaZ: CGFloat, duration: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522605-moveby
    moveBy_duration(delta: SCNVector3, duration: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522826-moveto
    moveTo_duration(location: SCNVector3, duration: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523522-rotatebyx
    rotateByX_y_z_duration(xAngle: CGFloat, yAngle: CGFloat, zAngle: CGFloat, duration: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1524044-rotatetox
    rotateToX_y_z_duration(xAngle: CGFloat, yAngle: CGFloat, zAngle: CGFloat, duration: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522808-rotatetox
    rotateToX_y_z_duration_shortestUnitArc(xAngle: CGFloat, yAngle: CGFloat, zAngle: CGFloat, duration: NSTimeInterval, shortestUnitArc: BOOL):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523805-rotatebyangle
    rotateByAngle_aroundAxis_duration(angle: CGFloat, axis: SCNVector3, duration: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1524191-rotatetoaxisangle
    rotateToAxisAngle_duration(axisAngle: SCNVector4, duration: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523129-scaleby
    scaleBy_duration(scale: CGFloat, sec: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523322-scaleto
    scaleTo_duration(scale: CGFloat, sec: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522777-fadeinwithduration
    fadeInWithDuration(sec: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523922-fadeoutwithduration
    fadeOutWithDuration(sec: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523595-fadeopacityby
    fadeOpacityBy_duration(factor: CGFloat, sec: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523875-fadeopacityto
    fadeOpacityTo_duration(opacity: CGFloat, sec: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523487-hide
    hide():SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1524205-unhide
    unhide():SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522966-removefromparentnode
    removeFromParentNode():SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523651-playaudiosource
    playAudioSource_waitForCompletion(source: SCNAudioSource, wait: BOOL):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522779-group
    group(actions: SCNAction):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522793-sequence
    sequence(actions: SCNAction):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522764-repeataction
    repeatAction_count(action: SCNAction, count: NSUInteger):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522908-repeatactionforever
    repeatActionForever(action: SCNAction):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523915-waitforduration
    waitForDuration(sec: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523086-waitforduration
    waitForDuration_withRange(sec: NSTimeInterval, durationRange: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523637-runblock
    runBlock(block: any):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522875-runblock
    runBlock_queue(block: any, queue: dispatch_queue_t):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523692-customactionwithduration
    customActionWithDuration_actionBlock(seconds: NSTimeInterval, block: CGFloat):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1523984-javascriptactionwithscript
    javaScriptActionWithScript_duration(script: string | cocoascript.NSString, seconds: NSTimeInterval):SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522815-reversedaction
    reversedAction():SCNAction;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1524162-duration
    duration(): NSTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1522811-speed
    speed(): CGFloat;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1524055-timingmode
    timingMode(): SCNActionTimingMode;
    setTimingMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaction/1524130-timingfunction
    timingFunction(): SCNActionTimingFunction;
    setTimingFunction(): void;
    //
    alloc():SCNAction;
    //
    init():SCNAction;
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
    geometryWithSources_elements(sources: SCNGeometrySource, elements: SCNGeometryElement):SCNGeometry;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1585530-geometry
    geometry():SCNGeometry;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1419845-geometrywithmdlmesh
    geometryWithMDLMesh(mdlMesh: MDLMesh):SCNGeometry;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1522953-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523472-materials
    materials(): SCNMaterial;
    setMaterials(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523485-firstmaterial
    firstMaterial(): SCNMaterial;
    setFirstMaterial(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523789-materialwithname
    materialWithName(name: string | cocoascript.NSString):SCNMaterial;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1522876-insertmaterial
    insertMaterial_atIndex(material: SCNMaterial, index: NSUInteger):void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1522646-removematerialatindex
    removeMaterialAtIndex(index: NSUInteger):void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1522714-replacematerialatindex
    replaceMaterialAtIndex_withMaterial(index: NSUInteger, material: SCNMaterial):void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523046-geometryelements
    geometryElements(): SCNGeometryElement;
    setGeometryElements(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523662-geometrysources
    geometrySources(): SCNGeometrySource;
    setGeometrySources(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523800-geometryelementcount
    geometryElementCount(): NSInteger;
    setGeometryElementCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523266-geometryelementatindex
    geometryElementAtIndex(elementIndex: NSInteger):SCNGeometryElement;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1522926-geometrysourcesforsemantic
    geometrySourcesForSemantic(semantic: SCNGeometrySourceSemantic):SCNGeometrySource;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523745-levelsofdetail
    levelsOfDetail(): SCNLevelOfDetail;
    setLevelsOfDetail(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1524177-subdivisionlevel
    subdivisionLevel(): NSUInteger;
    setSubdivisionLevel(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523246-edgecreaseselement
    edgeCreasesElement(): SCNGeometryElement;
    setEdgeCreasesElement(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/1523479-edgecreasessource
    edgeCreasesSource(): SCNGeometrySource;
    setEdgeCreasesSource(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/2888353-wantsadaptivesubdivision
    wantsAdaptiveSubdivision(): BOOL;
    setWantsAdaptiveSubdivision(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometry/2867472-tessellator
    tessellator(): SCNGeometryTessellator;
    setTessellator(): void;
    //
    alloc():SCNGeometry;
    //
    init():SCNGeometry;
  }
}

declare const SCNGeometry: cocoascript.SCNGeometry;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnanimationplayer
   */
  interface SCNAnimationPlayer extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2866046-animationplayerwithanimation
    animationPlayerWithAnimation(animation: SCNAnimation):SCNAnimationPlayer;
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2866065-animation
    animation(): SCNAnimation;
    setAnimation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2881688-blendfactor
    blendFactor(): CGFloat;
    setBlendFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2866058-paused
    paused(): BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2866041-speed
    speed(): CGFloat;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2866049-play
    play():void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2866055-stop
    stop():void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimationplayer/2887037-stopwithblendoutduration
    stopWithBlendOutDuration(duration: NSTimeInterval):void;
    //
    alloc():SCNAnimationPlayer;
    //
    init():SCNAnimationPlayer;
  }
}

declare const SCNAnimationPlayer: cocoascript.SCNAnimationPlayer;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnanimation-erl
   */
  interface SCNAnimation extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866056-animationwithcaanimation
    animationWithCAAnimation(caAnimation: CAAnimation):SCNAnimation;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866053-animationwithcontentsofurl
    animationWithContentsOfURL(animationUrl: NSURL):SCNAnimation;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866042-animationnamed
    animationNamed(animationName: string | cocoascript.NSString):SCNAnimation;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866063-animationdidstart
    animationDidStart(): SCNAnimationDidStartBlock;
    setAnimationDidStart(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866040-animationdidstop
    animationDidStop(): SCNAnimationDidStopBlock;
    setAnimationDidStop(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866038-animationevents
    animationEvents(): SCNAnimationEvent;
    setAnimationEvents(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878140-autoreverses
    autoreverses(): BOOL;
    setAutoreverses(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2881689-blendinduration
    blendInDuration(): NSTimeInterval;
    setBlendInDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2881690-blendoutduration
    blendOutDuration(): NSTimeInterval;
    setBlendOutDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866057-duration
    duration(): NSTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878138-fillsbackward
    fillsBackward(): BOOL;
    setFillsBackward(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878132-fillsforward
    fillsForward(): BOOL;
    setFillsForward(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866062-additive
    additive(): BOOL;
    setAdditive(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878139-appliedoncompletion
    appliedOnCompletion(): BOOL;
    setAppliedOnCompletion(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2866047-cumulative
    cumulative(): BOOL;
    setCumulative(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878126-removedoncompletion
    removedOnCompletion(): BOOL;
    setRemovedOnCompletion(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878148-keypath
    keyPath(): string | cocoascript.NSString;
    setKeyPath(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878146-repeatcount
    repeatCount(): CGFloat;
    setRepeatCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878135-startdelay
    startDelay(): NSTimeInterval;
    setStartDelay(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878147-timeoffset
    timeOffset(): NSTimeInterval;
    setTimeOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878143-timingfunction
    timingFunction(): SCNTimingFunction;
    setTimingFunction(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnanimation/2878127-usesscenetimebase
    usesSceneTimeBase(): BOOL;
    setUsesSceneTimeBase(): void;
    //
    alloc():SCNAnimation;
    //
    init():SCNAnimation;
  }
}

declare const SCNAnimation: cocoascript.SCNAnimation;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator
   */
  interface SCNGeometryTessellator extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889889-smoothingmode
    smoothingMode(): SCNTessellationSmoothingMode;
    setSmoothingMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889886-edgetessellationfactor
    edgeTessellationFactor(): CGFloat;
    setEdgeTessellationFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889878-insidetessellationfactor
    insideTessellationFactor(): CGFloat;
    setInsideTessellationFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889881-adaptive
    adaptive(): BOOL;
    setAdaptive(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889879-screenspace
    screenSpace(): BOOL;
    setScreenSpace(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889888-maximumedgelength
    maximumEdgeLength(): CGFloat;
    setMaximumEdgeLength(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889887-tessellationfactorscale
    tessellationFactorScale(): CGFloat;
    setTessellationFactorScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrytessellator/2889882-tessellationpartitionmode
    tessellationPartitionMode(): MTLTessellationPartitionMode;
    setTessellationPartitionMode(): void;
    //
    alloc():SCNGeometryTessellator;
    //
    init():SCNGeometryTessellator;
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
    alloc():SCNPhysicsBehavior;
    //
    init():SCNPhysicsBehavior;
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
    materialPropertyWithContents(contents: SCNMaterialProperty):SCNMaterialProperty;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395372-contents
    contents(): id;
    setContents(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395407-intensity
    intensity(): CGFloat;
    setIntensity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395388-contentstransform
    contentsTransform(): SCNMatrix4;
    setContentsTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395384-wraps
    wrapS(): SCNWrapMode;
    setWrapS(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395382-wrapt
    wrapT(): SCNWrapMode;
    setWrapT(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395390-minificationfilter
    minificationFilter(): SCNFilterMode;
    setMinificationFilter(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395378-magnificationfilter
    magnificationFilter(): SCNFilterMode;
    setMagnificationFilter(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395398-mipfilter
    mipFilter(): SCNFilterMode;
    setMipFilter(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395402-maxanisotropy
    maxAnisotropy(): CGFloat;
    setMaxAnisotropy(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395405-mappingchannel
    mappingChannel(): NSInteger;
    setMappingChannel(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/1395376-bordercolor
    borderColor(): id;
    setBorderColor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmaterialproperty/2865880-texturecomponents
    textureComponents(): SCNColorMask;
    setTextureComponents(): void;
    //
    alloc():SCNMaterialProperty;
    //
    init():SCNMaterialProperty;
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
    gravity(): SCNVector3;
    setGravity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512851-speed
    speed(): CGFloat;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512881-timestep
    timeStep(): NSTimeInterval;
    setTimeStep(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512877-updatecollisionpairs
    updateCollisionPairs():void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512839-addbehavior
    addBehavior(behavior: SCNPhysicsBehavior):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512870-removebehavior
    removeBehavior(behavior: SCNPhysicsBehavior):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512853-allbehaviors
    allBehaviors(): SCNPhysicsBehavior;
    setAllBehaviors(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512849-removeallbehaviors
    removeAllBehaviors():void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512843-contactdelegate
    contactDelegate(): SCNPhysicsContactDelegate;
    setContactDelegate(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512875-contacttestbetweenbody
    contactTestBetweenBody_andBody_options(bodyA: SCNPhysicsBody, bodyB: SCNPhysicsBody, options: SCNPhysicsWorld):SCNPhysicsContact;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512841-contacttestwithbody
    contactTestWithBody_options(body: SCNPhysicsBody, options: SCNPhysicsWorld):SCNPhysicsContact;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512857-raytestwithsegmentfrompoint
    rayTestWithSegmentFromPoint_toPoint_options(origin: SCNVector3, dest: SCNVector3, options: SCNPhysicsWorld):any;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsworld/1512859-convexsweeptestwithshape
    convexSweepTestWithShape_fromTransform_toTransform_options(shape: SCNPhysicsShape, from: SCNMatrix4, to: SCNMatrix4, options: SCNPhysicsWorld):SCNPhysicsContact;
    //
    alloc():SCNPhysicsWorld;
    //
    init():SCNPhysicsWorld;
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
    skinnerWithBaseGeometry_bones_boneInverseBindTransforms_boneWeights_boneIndices(baseGeometry: SCNGeometry, bones: any, boneInverseBindTransforms: NSValue, boneWeights: SCNGeometrySource, boneIndices: SCNGeometrySource):SCNSkinner;
    // doc://com.apple.documentation/documentation/scenekit/scnskinner/1522823-basegeometry
    baseGeometry(): SCNGeometry;
    setBaseGeometry(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnskinner/1523160-basegeometrybindtransform
    baseGeometryBindTransform(): SCNMatrix4;
    setBaseGeometryBindTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnskinner/1523048-skeleton
    skeleton(): any;
    setSkeleton(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnskinner/1522732-bones
    bones(): any;
    setBones(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnskinner/1523802-boneinversebindtransforms
    boneInverseBindTransforms(): NSValue;
    setBoneInverseBindTransforms(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnskinner/1522986-boneweights
    boneWeights(): SCNGeometrySource;
    setBoneWeights(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnskinner/1524117-boneindices
    boneIndices(): SCNGeometrySource;
    setBoneIndices(): void;
    //
    alloc():SCNSkinner;
    //
    init():SCNSkinner;
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
    targets(): SCNGeometry;
    setTargets(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmorpher/1522940-weightfortargetatindex
    weightForTargetAtIndex(targetIndex: NSUInteger):CGFloat;
    // doc://com.apple.documentation/documentation/scenekit/scnmorpher/1522886-setweight
    setWeight_forTargetAtIndex(weight: CGFloat, targetIndex: NSUInteger):void;
    // doc://com.apple.documentation/documentation/scenekit/scnmorpher/1523754-calculationmode
    calculationMode(): SCNMorpherCalculationMode;
    setCalculationMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmorpher/2875540-unifiesnormals
    unifiesNormals(): BOOL;
    setUnifiesNormals(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmorpher/2873319-weights
    weights(): NSNumber;
    setWeights(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnmorpher/2915238-setweight
    setWeight_forTargetNamed(weight: CGFloat, targetName: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnmorpher/2915239-weightfortargetnamed
    weightForTargetNamed(targetName: string | cocoascript.NSString):CGFloat;
    //
    alloc():SCNMorpher;
    //
    init():SCNMorpher;
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
    sceneNamed(name: string | cocoascript.NSString):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522851-scenenamed
    sceneNamed_inDirectory_options(name: string | cocoascript.NSString, directory: string | cocoascript.NSString, options: any):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522660-scenewithurl
    sceneWithURL_options_error(url: NSURL, options: any, error: NSError):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1419833-scenewithmdlasset
    sceneWithMDLAsset(mdlAsset: MDLAsset):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1523604-paused
    paused(): BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1524029-rootnode
    rootNode(): any;
    setRootNode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1523665-background
    background(): SCNMaterialProperty;
    setBackground(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1639532-lightingenvironment
    lightingEnvironment(): SCNMaterialProperty;
    setLightingEnvironment(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522858-attributeforkey
    attributeForKey(key: string | cocoascript.NSString):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1524229-setattribute
    setAttribute_forKey(attribute: any, key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1523577-writetourl
    writeToURL_options_delegate_progressHandler(url: NSURL, options: any, delegate: SCNSceneExportDelegate, progressHandler: SCNSceneExportProgressHandler):BOOL;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522790-fogstartdistance
    fogStartDistance(): CGFloat;
    setFogStartDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1523836-fogenddistance
    fogEndDistance(): CGFloat;
    setFogEndDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1523776-fogdensityexponent
    fogDensityExponent(): CGFloat;
    setFogDensityExponent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522774-fogcolor
    fogColor(): id;
    setFogColor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522643-physicsworld
    physicsWorld(): SCNPhysicsWorld;
    setPhysicsWorld(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1523359-addparticlesystem
    addParticleSystem_withTransform(system: SCNParticleSystem, transform: SCNMatrix4):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522787-particlesystems
    particleSystems(): SCNParticleSystem;
    setParticleSystems(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1523498-removeparticlesystem
    removeParticleSystem(system: SCNParticleSystem):void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/1522786-removeallparticlesystems
    removeAllParticleSystems():void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/3227910-screenspacereflectionmaximumdist
    screenSpaceReflectionMaximumDistance(): CGFloat;
    setScreenSpaceReflectionMaximumDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/3075424-screenspacereflectionsamplecount
    screenSpaceReflectionSampleCount(): NSInteger;
    setScreenSpaceReflectionSampleCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/3227911-screenspacereflectionstride
    screenSpaceReflectionStride(): CGFloat;
    setScreenSpaceReflectionStride(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscene/3075425-wantsscreenspacereflection
    wantsScreenSpaceReflection(): BOOL;
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
    geometrySourceWithData_semantic_vectorCount_floatComponents_componentsPerVector_bytesPerComponent_dataOffset_dataStride(data: NSData, semantic: SCNGeometrySourceSemantic, vectorCount: NSInteger, floatComponents: BOOL, componentsPerVector: NSInteger, bytesPerComponent: NSInteger, offset: NSInteger, stride: NSInteger):SCNGeometrySource;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1523882-geometrysourcewithvertices
    geometrySourceWithVertices_count(vertices: SCNVector3, count: NSInteger):SCNGeometrySource;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522882-geometrysourcewithnormals
    geometrySourceWithNormals_count(normals: SCNVector3, count: NSInteger):SCNGeometrySource;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522718-geometrysourcewithtexturecoordin
    geometrySourceWithTextureCoordinates_count(texcoord: CGPoint, count: NSInteger):SCNGeometrySource;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522881-data
    data(): NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1523071-semantic
    semantic(): SCNGeometrySourceSemantic;
    setSemantic(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522648-vectorcount
    vectorCount(): NSInteger;
    setVectorCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522920-floatcomponents
    floatComponents(): BOOL;
    setFloatComponents(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522832-componentspervector
    componentsPerVector(): NSInteger;
    setComponentsPerVector(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522633-bytespercomponent
    bytesPerComponent(): NSInteger;
    setBytesPerComponent(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522834-dataoffset
    dataOffset(): NSInteger;
    setDataOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1524197-datastride
    dataStride(): NSInteger;
    setDataStride(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometrysource/1522873-geometrysourcewithbuffer
    geometrySourceWithBuffer_vertexFormat_semantic_vertexCount_dataOffset_dataStride(buffer: MTLBuffer, vertexFormat: MTLVertexFormat, semantic: SCNGeometrySourceSemantic, vertexCount: NSInteger, offset: NSInteger, stride: NSInteger):SCNGeometrySource;
    //
    alloc():SCNGeometrySource;
    //
    init():SCNGeometrySource;
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
    geometryElementWithData_primitiveType_primitiveCount_bytesPerIndex(data: NSData, primitiveType: SCNGeometryPrimitiveType, primitiveCount: NSInteger, bytesPerIndex: NSInteger):SCNGeometryElement;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/1419843-geometryelementwithmdlsubmesh
    geometryElementWithMDLSubmesh(mdlSubMesh: MDLSubmesh):SCNGeometryElement;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/1523367-data
    data(): NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/1522720-bytesperindex
    bytesPerIndex(): NSInteger;
    setBytesPerIndex(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/1522917-primitivetype
    primitiveType(): SCNGeometryPrimitiveType;
    setPrimitiveType(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/1523404-primitivecount
    primitiveCount(): NSInteger;
    setPrimitiveCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/2867463-primitiverange
    primitiveRange(): NSRange;
    setPrimitiveRange(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/2867479-pointsize
    pointSize(): CGFloat;
    setPointSize(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/2867439-minimumpointscreenspaceradius
    minimumPointScreenSpaceRadius(): CGFloat;
    setMinimumPointScreenSpaceRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/2867561-maximumpointscreenspaceradius
    maximumPointScreenSpaceRadius(): CGFloat;
    setMaximumPointScreenSpaceRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scngeometryelement/3600286-geometryelementwithbuffer
    geometryElementWithBuffer_primitiveType_primitiveCount_bytesPerIndex(buffer: MTLBuffer, primitiveType: SCNGeometryPrimitiveType, primitiveCount: NSInteger, bytesPerIndex: NSInteger):SCNGeometryElement;
    //
    alloc():SCNGeometryElement;
    //
    init():SCNGeometryElement;
  }
}

declare const SCNGeometryElement: cocoascript.SCNGeometryElement;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scntimingfunction
   */
  interface SCNTimingFunction extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scntimingfunction/2866052-functionwithcamediatimingfunctio
    functionWithCAMediaTimingFunction(caTimingFunction: CAMediaTimingFunction):SCNTimingFunction;
    // doc://com.apple.documentation/documentation/scenekit/scntimingfunction/2866061-functionwithtimingmode
    functionWithTimingMode(timingMode: SCNActionTimingMode):SCNTimingFunction;
    //
    alloc():SCNTimingFunction;
    //
    init():SCNTimingFunction;
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
    initWithFrame_options(frame: CGRect, options: SCNView):SCNView;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1523904-scene
    scene(): any;
    setScene(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1523088-backgroundcolor
    backgroundColor(): NSColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1621205-preferredframespersecond
    preferredFramesPerSecond(): NSInteger;
    setPreferredFramesPerSecond(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/2867339-renderscontinuously
    rendersContinuously(): BOOL;
    setRendersContinuously(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1524085-antialiasingmode
    antialiasingMode(): SCNAntialiasingMode;
    setAntialiasingMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1523171-allowscameracontrol
    allowsCameraControl(): BOOL;
    setAllowsCameraControl(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/2867333-cameracontrolconfiguration
    cameraControlConfiguration(): SCNCameraControlConfiguration;
    setCameraControlConfiguration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/2867336-defaultcameracontroller
    defaultCameraController(): SCNCameraController;
    setDefaultCameraController(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1522825-pause
    pause(sender: SCNView):void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1523699-play
    play(sender: SCNView):void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1524132-stop
    stop(sender: SCNView):void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1524031-snapshot
    snapshot():UIImage;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1621072-eaglcontext
    eaglContext(): EAGLContext;
    setEaglContext(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1522850-openglcontext
    openGLContext(): NSOpenGLContext;
    setOpenGLContext(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/1523612-pixelformat
    pixelFormat(): NSOpenGLPixelFormat;
    setPixelFormat(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnview/3242930-drawableresizesasynchronously
    drawableResizesAsynchronously(): BOOL;
    setDrawableResizesAsynchronously(): void;
    //
    alloc():SCNView;
    //
    init():SCNView;
  }
}

declare const SCNView: cocoascript.SCNView;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scncameracontroller
   */
  interface SCNCameraController extends NSObject {
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2873257-delegate
    delegate(): SCNCameraControllerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867559-automatictarget
    automaticTarget(): BOOL;
    setAutomaticTarget(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867546-inertiaenabled
    inertiaEnabled(): BOOL;
    setInertiaEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867498-inertiafriction
    inertiaFriction(): number;
    setInertiaFriction(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867445-interactionmode
    interactionMode(): SCNInteractionMode;
    setInteractionMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2873256-inertiarunning
    inertiaRunning(): BOOL;
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
    target(): SCNVector3;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2902229-worldup
    worldUp(): SCNVector3;
    setWorldUp(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867444-begininteraction
    beginInteraction_withViewport(location: CGPoint, viewport: CGSize):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867500-clearroll
    clearRoll():void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867496-continueinteraction
    continueInteraction_withViewport_sensitivity(location: CGPoint, viewport: CGSize, sensitivity: CGFloat):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2919425-dollyby
    dollyBy_onScreenPoint_viewport(delta: number, point: CGPoint, viewport: CGSize):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2919424-dollytotarget
    dollyToTarget(delta: number):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867469-endinteraction
    endInteraction_withViewport_velocity(location: CGPoint, viewport: CGSize, velocity: CGPoint):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2875846-framenodes
    frameNodes(nodes: any):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867487-rollby
    rollBy_aroundScreenPoint_viewport(delta: number, point: CGPoint, viewport: CGSize):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2881832-rollaroundtarget
    rollAroundTarget(delta: number):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867552-rotatebyx
    rotateByX_Y(deltaX: number, deltaY: number):void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2873258-stopinertia
    stopInertia():void;
    // doc://com.apple.documentation/documentation/scenekit/scncameracontroller/2867569-translateincameraspacebyx
    translateInCameraSpaceByX_Y_Z(deltaX: number, deltaY: number, deltaZ: number):void;
    //
    alloc():SCNCameraController;
    //
    init():SCNCameraController;
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
    animationDuration(): CFTimeInterval;
    setAnimationDuration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1522614-animationtimingfunction
    animationTimingFunction(): CAMediaTimingFunction;
    setAnimationTimingFunction(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1524238-disableactions
    disableActions(): BOOL;
    setDisableActions(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1523660-completionblock
    completionBlock(): void;
    setCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1523078-lock
    lock():void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1523166-unlock
    unlock():void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1524124-setvalue
    setValue_forKey(value: SCNTransaction, key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/scenekit/scntransaction/1523919-valueforkey
    valueForKey(key: string | cocoascript.NSString):SCNTransaction;
    //
    alloc():SCNTransaction;
    //
    init():SCNTransaction;
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
    animationEventWithKeyTime_block(time: CGFloat, eventBlock: SCNAnimationEventBlock):SCNAnimationEvent;
    //
    alloc():SCNAnimationEvent;
    //
    init():SCNAnimationEvent;
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
    alloc():SCNLayer;
    //
    init():SCNLayer;
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
    rendererWithDevice_options(device: any, options: NSDictionary):SCNRenderer;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/1518408-rendererwithcontext
    rendererWithContext_options(context: EAGLContext, options: NSDictionary):SCNRenderer;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/1518400-scene
    scene(): any;
    setScene(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/1518410-nextframetime
    nextFrameTime(): CFTimeInterval;
    setNextFrameTime(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/1518401-renderattime
    renderAtTime_viewport_commandBuffer_passDescriptor(time: CFTimeInterval, viewport: CGRect, commandBuffer: any, renderPassDescriptor: any):void;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/1518403-render
    render():void;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/1518402-renderattime
    renderAtTime(time: CFTimeInterval):void;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/1641767-snapshotattime
    snapshotAtTime_withSize_antialiasingMode(time: CFTimeInterval, size: CGSize, antialiasingMode: SCNAntialiasingMode):UIImage;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/2866140-renderwithviewport
    renderWithViewport_commandBuffer_passDescriptor(viewport: CGRect, commandBuffer: any, renderPassDescriptor: any):void;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/2866142-updateattime
    updateAtTime(time: CFTimeInterval):void;
    // doc://com.apple.documentation/documentation/scenekit/scnrenderer/2097153-updateprobes
    updateProbes_atTime(lightProbes: any, time: CFTimeInterval):void;
    //
    alloc():SCNRenderer;
    //
    init():SCNRenderer;
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
    geometryIndex(): NSInteger;
    setGeometryIndex(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1522888-faceindex
    faceIndex(): NSInteger;
    setFaceIndex(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1523032-localcoordinates
    localCoordinates(): SCNVector3;
    setLocalCoordinates(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1523058-worldcoordinates
    worldCoordinates(): SCNVector3;
    setWorldCoordinates(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1523953-localnormal
    localNormal(): SCNVector3;
    setLocalNormal(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1524066-worldnormal
    worldNormal(): SCNVector3;
    setWorldNormal(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1523496-modeltransform
    modelTransform(): SCNMatrix4;
    setModelTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1522771-texturecoordinateswithmappingcha
    textureCoordinatesWithMappingChannel(channel: NSInteger):CGPoint;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/1823463-bonenode
    boneNode(): any;
    setBoneNode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/3042447-simdlocalcoordinates
    simdLocalCoordinates(): simd_float3;
    setSimdLocalCoordinates(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/3042448-simdlocalnormal
    simdLocalNormal(): simd_float3;
    setSimdLocalNormal(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/3042449-simdmodeltransform
    simdModelTransform(): simd_float4x4;
    setSimdModelTransform(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/3042450-simdworldcoordinates
    simdWorldCoordinates(): simd_float3;
    setSimdWorldCoordinates(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnhittestresult/3042451-simdworldnormal
    simdWorldNormal(): simd_float3;
    setSimdWorldNormal(): void;
    //
    alloc():any;
    //
    init():any;
  }
}

declare const SCNHitTestResult: any;
// doc://com.apple.documentation/documentation/scenekit/scnpreferredrenderingapikey
declare const SCNPreferredRenderingAPIKey: SCNViewOption;
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
declare const SCNShaderModifierEntryPointGeometry: SCNShaderModifierEntryPoint;
// doc://com.apple.documentation/documentation/scenekit/scnshadermodifierentrypointsurface
declare const SCNShaderModifierEntryPointSurface: SCNShaderModifierEntryPoint;
// doc://com.apple.documentation/documentation/scenekit/scnshadermodifierentrypointlightingmodel
declare const SCNShaderModifierEntryPointLightingModel: SCNShaderModifierEntryPoint;
// doc://com.apple.documentation/documentation/scenekit/scnshadermodifierentrypointfragment
declare const SCNShaderModifierEntryPointFragment: SCNShaderModifierEntryPoint;
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
    avoidOccluderConstraintWithTarget(target: any):SCNAvoidOccluderConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraint/2873377-bias
    bias(): CGFloat;
    setBias(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraint/2873376-occludercategorybitmask
    occluderCategoryBitMask(): NSUInteger;
    setOccluderCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraint/2873370-target
    target(): any;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnavoidoccluderconstraint/2878131-delegate
    delegate(): SCNAvoidOccluderConstraintDelegate;
    setDelegate(): void;
    //
    alloc():SCNAvoidOccluderConstraint;
    //
    init():SCNAvoidOccluderConstraint;
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
    contactPoint(): SCNVector3;
    setContactPoint(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontact/1522833-contactnormal
    contactNormal(): SCNVector3;
    setContactNormal(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontact/1523944-collisionimpulse
    collisionImpulse(): CGFloat;
    setCollisionImpulse(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontact/1522870-penetrationdistance
    penetrationDistance(): CGFloat;
    setPenetrationDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicscontact/2902236-sweeptestfraction
    sweepTestFraction(): CGFloat;
    setSweepTestFraction(): void;
    //
    alloc():SCNPhysicsContact;
    //
    init():SCNPhysicsContact;
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
    vehicleWithChassisBody_wheels(chassisBody: SCNPhysicsBody, wheels: SCNPhysicsVehicleWheel):SCNPhysicsVehicle;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehicle/1387985-chassisbody
    chassisBody(): SCNPhysicsBody;
    setChassisBody(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehicle/1387906-wheels
    wheels(): SCNPhysicsVehicleWheel;
    setWheels(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehicle/1387963-applyengineforce
    applyEngineForce_forWheelAtIndex(value: CGFloat, index: NSInteger):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehicle/1387894-applybrakingforce
    applyBrakingForce_forWheelAtIndex(value: CGFloat, index: NSInteger):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehicle/1387952-setsteeringangle
    setSteeringAngle_forWheelAtIndex(value: CGFloat, index: NSInteger):void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsvehicle/1387910-speedinkilometersperhour
    speedInKilometersPerHour(): CGFloat;
    setSpeedInKilometersPerHour(): void;
    //
    alloc():SCNPhysicsVehicle;
    //
    init():SCNPhysicsVehicle;
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
    initWithURL(referenceURL: NSURL):SCNReferenceNode;
    // doc://com.apple.documentation/documentation/scenekit/scnreferencenode/1551036-referencenodewithurl
    referenceNodeWithURL(referenceURL: NSURL):SCNReferenceNode;
    // doc://com.apple.documentation/documentation/scenekit/scnreferencenode/1522733-referenceurl
    referenceURL(): NSURL;
    setReferenceURL(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreferencenode/1522996-loadingpolicy
    loadingPolicy(): SCNReferenceLoadingPolicy;
    setLoadingPolicy(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreferencenode/1523204-load
    load():void;
    // doc://com.apple.documentation/documentation/scenekit/scnreferencenode/1523906-loaded
    loaded(): BOOL;
    setLoaded(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreferencenode/1523566-unload
    unload():void;
    // doc://com.apple.documentation/documentation/scenekit/scnreferencenode/1524061-initwithcoder
    initWithCoder(aDecoder: NSCoder):SCNReferenceNode;
    //
    alloc():SCNReferenceNode;
    //
    init():SCNReferenceNode;
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
    lookAtConstraintWithTarget(target: any):SCNLookAtConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scnlookatconstraint/1468675-gimballockenabled
    gimbalLockEnabled(): BOOL;
    setGimbalLockEnabled(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlookatconstraint/1468677-target
    target():any;
    // doc://com.apple.documentation/documentation/scenekit/scnlookatconstraint/2867570-localfront
    localFront(): SCNVector3;
    setLocalFront(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlookatconstraint/2867488-targetoffset
    targetOffset(): SCNVector3;
    setTargetOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlookatconstraint/2902240-worldup
    worldUp(): SCNVector3;
    setWorldUp(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnlookatconstraint/1644027-settarget
    setTarget(target: any):void;
    //
    alloc():SCNLookAtConstraint;
    //
    init():SCNLookAtConstraint;
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
    boxWithWidth_height_length_chamferRadius(width: CGFloat, height: CGFloat, length: CGFloat, chamferRadius: CGFloat):SCNBox;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1523898-width
    width(): CGFloat;
    setWidth(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1522901-height
    height(): CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1523514-length
    length(): CGFloat;
    setLength(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1523559-widthsegmentcount
    widthSegmentCount(): NSInteger;
    setWidthSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1522869-heightsegmentcount
    heightSegmentCount(): NSInteger;
    setHeightSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1523721-lengthsegmentcount
    lengthSegmentCount(): NSInteger;
    setLengthSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1523302-chamferradius
    chamferRadius(): CGFloat;
    setChamferRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnbox/1522976-chamfersegmentcount
    chamferSegmentCount(): NSInteger;
    setChamferSegmentCount(): void;
    //
    alloc():SCNBox;
    //
    init():SCNBox;
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
    sphereWithRadius(radius: CGFloat):SCNSphere;
    // doc://com.apple.documentation/documentation/scenekit/scnsphere/1523787-radius
    radius(): CGFloat;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnsphere/1523268-geodesic
    geodesic(): BOOL;
    setGeodesic(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnsphere/1523912-segmentcount
    segmentCount(): NSInteger;
    setSegmentCount(): void;
    //
    alloc():SCNSphere;
    //
    init():SCNSphere;
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
    pyramidWithWidth_height_length(width: CGFloat, height: CGFloat, length: CGFloat):SCNPyramid;
    // doc://com.apple.documentation/documentation/scenekit/scnpyramid/1522613-width
    width(): CGFloat;
    setWidth(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnpyramid/1522805-height
    height(): CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnpyramid/1524203-length
    length(): CGFloat;
    setLength(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnpyramid/1523083-widthsegmentcount
    widthSegmentCount(): NSInteger;
    setWidthSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnpyramid/1524059-heightsegmentcount
    heightSegmentCount(): NSInteger;
    setHeightSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnpyramid/1524227-lengthsegmentcount
    lengthSegmentCount(): NSInteger;
    setLengthSegmentCount(): void;
    //
    alloc():SCNPyramid;
    //
    init():SCNPyramid;
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
    coneWithTopRadius_bottomRadius_height(topRadius: CGFloat, bottomRadius: CGFloat, height: CGFloat):SCNCone;
    // doc://com.apple.documentation/documentation/scenekit/scncone/1524240-topradius
    topRadius(): CGFloat;
    setTopRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncone/1523198-bottomradius
    bottomRadius(): CGFloat;
    setBottomRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncone/1523219-height
    height(): CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncone/1523942-radialsegmentcount
    radialSegmentCount(): NSInteger;
    setRadialSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncone/1524113-heightsegmentcount
    heightSegmentCount(): NSInteger;
    setHeightSegmentCount(): void;
    //
    alloc():SCNCone;
    //
    init():SCNCone;
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
    cylinderWithRadius_height(radius: CGFloat, height: CGFloat):SCNCylinder;
    // doc://com.apple.documentation/documentation/scenekit/scncylinder/1522674-radius
    radius(): CGFloat;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncylinder/1523678-height
    height(): CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncylinder/1524002-radialsegmentcount
    radialSegmentCount(): NSInteger;
    setRadialSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncylinder/1523330-heightsegmentcount
    heightSegmentCount(): NSInteger;
    setHeightSegmentCount(): void;
    //
    alloc():SCNCylinder;
    //
    init():SCNCylinder;
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
    capsuleWithCapRadius_height(capRadius: CGFloat, height: CGFloat):SCNCapsule;
    // doc://com.apple.documentation/documentation/scenekit/scncapsule/1523926-capradius
    capRadius(): CGFloat;
    setCapRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncapsule/1522789-height
    height(): CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncapsule/1522735-radialsegmentcount
    radialSegmentCount(): NSInteger;
    setRadialSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncapsule/1523561-capsegmentcount
    capSegmentCount(): NSInteger;
    setCapSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scncapsule/1523697-heightsegmentcount
    heightSegmentCount(): NSInteger;
    setHeightSegmentCount(): void;
    //
    alloc():SCNCapsule;
    //
    init():SCNCapsule;
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
    initWithSource(source: SCNAudioSource):SCNAudioPlayer;
    // doc://com.apple.documentation/documentation/scenekit/scnaudioplayer/1523010-initwithavaudionode
    initWithAVAudioNode(audioNode: AVAudioNode):SCNAudioPlayer;
    // doc://com.apple.documentation/documentation/scenekit/scnaudioplayer/1533919-audioplayerwithsource
    audioPlayerWithSource(source: SCNAudioSource):SCNAudioPlayer;
    // doc://com.apple.documentation/documentation/scenekit/scnaudioplayer/1533927-audioplayerwithavaudionode
    audioPlayerWithAVAudioNode(audioNode: AVAudioNode):SCNAudioPlayer;
    // doc://com.apple.documentation/documentation/scenekit/scnaudioplayer/1523059-audiosource
    audioSource(): SCNAudioSource;
    setAudioSource(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaudioplayer/1522747-audionode
    audioNode(): AVAudioNode;
    setAudioNode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaudioplayer/1524115-willstartplayback
    willStartPlayback(): void;
    setWillStartPlayback(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaudioplayer/1522818-didfinishplayback
    didFinishPlayback(): void;
    setDidFinishPlayback(): void;
    //
    alloc():SCNAudioPlayer;
    //
    init():SCNAudioPlayer;
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
declare const SCNParticlePropertyColor: SCNParticleProperty;
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
declare const SCNGeometrySourceSemanticVertex: SCNGeometrySourceSemantic;
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemanticnormal
declare const SCNGeometrySourceSemanticNormal: SCNGeometrySourceSemantic;
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemanticcolor
declare const SCNGeometrySourceSemanticColor: SCNGeometrySourceSemantic;
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemanticboneindices
declare const SCNGeometrySourceSemanticBoneIndices: SCNGeometrySourceSemantic;
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemanticboneweights
declare const SCNGeometrySourceSemanticBoneWeights: SCNGeometrySourceSemantic;
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemantictexcoord
declare const SCNGeometrySourceSemanticTexcoord: SCNGeometrySourceSemantic;
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
    sceneSourceWithURL_options(url: NSURL, options: SCNSceneSource):SCNSceneSource;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1573764-scenesourcewithdata
    sceneSourceWithData_options(data: NSData, options: SCNSceneSource):SCNSceneSource;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1522629-initwithurl
    initWithURL_options(url: NSURL, options: SCNSceneSource):SCNSceneSource;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1523500-initwithdata
    initWithData_options(data: NSData, options: SCNSceneSource):SCNSceneSource;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1522887-scenewithoptions
    sceneWithOptions_statusHandler(options: SCNSceneSource, statusHandler: SCNSceneSourceStatusHandler):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1523962-scenewithoptions
    sceneWithOptions_error(options: SCNSceneSource, error: NSError):any;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1523656-identifiersofentrieswithclass
    identifiersOfEntriesWithClass(entryClass: Class):NSString;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1573762-entrywithidentifier
    entryWithIdentifier_withClass(uid: string | cocoascript.NSString, entryClass: Class):SCNSceneSource;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1523055-entriespassingtest
    entriesPassingTest(predicate: BOOL):SCNSceneSource;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1524038-url
    url(): NSURL;
    setUrl(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1523061-data
    data(): NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnscenesource/1523277-propertyforkey
    propertyForKey(key: string | cocoascript.NSString):SCNSceneSource;
    //
    alloc():SCNSceneSource;
    //
    init():SCNSceneSource;
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
    planeWithWidth_height(width: CGFloat, height: CGFloat):SCNPlane;
    // doc://com.apple.documentation/documentation/scenekit/scnplane/1523782-width
    width(): CGFloat;
    setWidth(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnplane/1522837-height
    height(): CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnplane/1523991-widthsegmentcount
    widthSegmentCount(): NSInteger;
    setWidthSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnplane/1522889-heightsegmentcount
    heightSegmentCount(): NSInteger;
    setHeightSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnplane/1523005-cornerradius
    cornerRadius(): CGFloat;
    setCornerRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnplane/1524234-cornersegmentcount
    cornerSegmentCount(): NSInteger;
    setCornerSegmentCount(): void;
    //
    alloc():SCNPlane;
    //
    init():SCNPlane;
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
    tubeWithInnerRadius_outerRadius_height(innerRadius: CGFloat, outerRadius: CGFloat, height: CGFloat):SCNTube;
    // doc://com.apple.documentation/documentation/scenekit/scntube/1523270-outerradius
    outerRadius(): CGFloat;
    setOuterRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntube/1524070-innerradius
    innerRadius(): CGFloat;
    setInnerRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntube/1522640-height
    height(): CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntube/1523619-radialsegmentcount
    radialSegmentCount(): NSInteger;
    setRadialSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntube/1523080-heightsegmentcount
    heightSegmentCount(): NSInteger;
    setHeightSegmentCount(): void;
    //
    alloc():SCNTube;
    //
    init():SCNTube;
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
    torusWithRingRadius_pipeRadius(ringRadius: CGFloat, pipeRadius: CGFloat):SCNTorus;
    // doc://com.apple.documentation/documentation/scenekit/scntorus/1522906-ringradius
    ringRadius(): CGFloat;
    setRingRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntorus/1522623-piperadius
    pipeRadius(): CGFloat;
    setPipeRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntorus/1523598-ringsegmentcount
    ringSegmentCount(): NSInteger;
    setRingSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntorus/1522807-pipesegmentcount
    pipeSegmentCount(): NSInteger;
    setPipeSegmentCount(): void;
    //
    alloc():SCNTorus;
    //
    init():SCNTorus;
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
    textWithString_extrusionDepth(string: SCNText, extrusionDepth: CGFloat):SCNText;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523439-string
    string(): id;
    setString(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523273-font
    font(): UIFont;
    setFont(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523654-containerframe
    containerFrame(): CGRect;
    setContainerFrame(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523585-wrapped
    wrapped(): BOOL;
    setWrapped(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523158-alignmentmode
    alignmentMode(): string | cocoascript.NSString;
    setAlignmentMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523414-truncationmode
    truncationMode(): string | cocoascript.NSString;
    setTruncationMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523680-textsize
    textSize(): CGSize;
    setTextSize(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1524111-flatness
    flatness(): CGFloat;
    setFlatness(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1522604-extrusiondepth
    extrusionDepth(): CGFloat;
    setExtrusionDepth(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1522846-chamferradius
    chamferRadius(): CGFloat;
    setChamferRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1572699-chamfersegmentcount
    chamferSegmentCount(): NSInteger;
    setChamferSegmentCount(): void;
    // doc://com.apple.documentation/documentation/scenekit/scntext/1523334-chamferprofile
    chamferProfile(): UIBezierPath;
    setChamferProfile(): void;
    //
    alloc():SCNText;
    //
    init():SCNText;
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
    shapeWithPath_extrusionDepth(path: UIBezierPath, extrusionDepth: CGFloat):SCNShape;
    // doc://com.apple.documentation/documentation/scenekit/scnshape/1523365-extrusiondepth
    extrusionDepth(): CGFloat;
    setExtrusionDepth(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnshape/1523434-path
    path(): UIBezierPath;
    setPath(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnshape/1523989-chamfermode
    chamferMode(): SCNChamferMode;
    setChamferMode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnshape/1522865-chamferprofile
    chamferProfile(): UIBezierPath;
    setChamferProfile(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnshape/1524145-chamferradius
    chamferRadius(): CGFloat;
    setChamferRadius(): void;
    //
    alloc():SCNShape;
    //
    init():SCNShape;
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
    jointWithBodyA_axisA_anchorA_bodyB_axisB_anchorB(bodyA: SCNPhysicsBody, axisA: SCNVector3, anchorA: SCNVector3, bodyB: SCNPhysicsBody, axisB: SCNVector3, anchorB: SCNVector3):SCNPhysicsHingeJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint/1387977-jointwithbody
    jointWithBody_axis_anchor(body: SCNPhysicsBody, axis: SCNVector3, anchor: SCNVector3):SCNPhysicsHingeJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint/1387973-bodya
    bodyA(): SCNPhysicsBody;
    setBodyA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint/1387888-axisa
    axisA(): SCNVector3;
    setAxisA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint/1387936-anchora
    anchorA(): SCNVector3;
    setAnchorA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint/1387918-bodyb
    bodyB(): SCNPhysicsBody;
    setBodyB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint/1387914-axisb
    axisB(): SCNVector3;
    setAxisB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicshingejoint/1387979-anchorb
    anchorB(): SCNVector3;
    setAnchorB(): void;
    //
    alloc():SCNPhysicsHingeJoint;
    //
    init():SCNPhysicsHingeJoint;
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
    jointWithBodyA_anchorA_bodyB_anchorB(bodyA: SCNPhysicsBody, anchorA: SCNVector3, bodyB: SCNPhysicsBody, anchorB: SCNVector3):SCNPhysicsBallSocketJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsballsocketjoint/1387975-jointwithbody
    jointWithBody_anchor(body: SCNPhysicsBody, anchor: SCNVector3):SCNPhysicsBallSocketJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsballsocketjoint/1387981-bodya
    bodyA(): SCNPhysicsBody;
    setBodyA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsballsocketjoint/1387956-anchora
    anchorA(): SCNVector3;
    setAnchorA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsballsocketjoint/1387902-bodyb
    bodyB(): SCNPhysicsBody;
    setBodyB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsballsocketjoint/1387965-anchorb
    anchorB(): SCNVector3;
    setAnchorB(): void;
    //
    alloc():SCNPhysicsBallSocketJoint;
    //
    init():SCNPhysicsBallSocketJoint;
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
    jointWithBodyA_axisA_anchorA_bodyB_axisB_anchorB(bodyA: SCNPhysicsBody, axisA: SCNVector3, anchorA: SCNVector3, bodyB: SCNPhysicsBody, axisB: SCNVector3, anchorB: SCNVector3):SCNPhysicsSliderJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387932-jointwithbody
    jointWithBody_axis_anchor(body: SCNPhysicsBody, axis: SCNVector3, anchor: SCNVector3):SCNPhysicsSliderJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387987-bodya
    bodyA(): SCNPhysicsBody;
    setBodyA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387900-axisa
    axisA(): SCNVector3;
    setAxisA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387958-anchora
    anchorA(): SCNVector3;
    setAnchorA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387896-bodyb
    bodyB(): SCNPhysicsBody;
    setBodyB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387948-axisb
    axisB(): SCNVector3;
    setAxisB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387916-anchorb
    anchorB(): SCNVector3;
    setAnchorB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387920-minimumlinearlimit
    minimumLinearLimit(): CGFloat;
    setMinimumLinearLimit(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387890-maximumlinearlimit
    maximumLinearLimit(): CGFloat;
    setMaximumLinearLimit(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387967-minimumangularlimit
    minimumAngularLimit(): CGFloat;
    setMinimumAngularLimit(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387924-maximumangularlimit
    maximumAngularLimit(): CGFloat;
    setMaximumAngularLimit(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387938-motortargetlinearvelocity
    motorTargetLinearVelocity(): CGFloat;
    setMotorTargetLinearVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387954-motormaximumforce
    motorMaximumForce(): CGFloat;
    setMotorMaximumForce(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387908-motortargetangularvelocity
    motorTargetAngularVelocity(): CGFloat;
    setMotorTargetAngularVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicssliderjoint/1387961-motormaximumtorque
    motorMaximumTorque(): CGFloat;
    setMotorMaximumTorque(): void;
    //
    alloc():SCNPhysicsSliderJoint;
    //
    init():SCNPhysicsSliderJoint;
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
declare const SCNPreferLowPowerDeviceKey: SCNViewOption;
// doc://com.apple.documentation/documentation/scenekit/scnpreferreddevicekey
declare const SCNPreferredDeviceKey: SCNViewOption;
// doc://com.apple.documentation/documentation/scenekit/scnlighttypespot
declare const SCNLightTypeSpot: SCNLightType;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceanimationimportpolicyplayusingscenetimebase
declare const SCNSceneSourceAnimationImportPolicyPlayUsingSceneTimeBase: SCNSceneSourceAnimationImportPolicy;
// doc://com.apple.documentation/documentation/scenekit/scnhittestoptionsearchmode
declare const SCNHitTestOptionSearchMode: SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestbackfacecullingkey
declare const SCNHitTestBackFaceCullingKey: SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestboundingboxonlykey
declare const SCNHitTestBoundingBoxOnlyKey: SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestoptioncategorybitmask
declare const SCNHitTestOptionCategoryBitMask: SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestcliptozrangekey
declare const SCNHitTestClipToZRangeKey: SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestignorechildnodeskey
declare const SCNHitTestIgnoreChildNodesKey: SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestignorehiddennodeskey
declare const SCNHitTestIgnoreHiddenNodesKey: SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestrootnodekey
declare const SCNHitTestRootNodeKey: SCNHitTestOption;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnhittestsearchmode
  type SCNHitTestSearchMode = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/scenekit/scnhittestfirstfoundonlykey
declare const SCNHitTestFirstFoundOnlyKey: SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestsortresultskey
declare const SCNHitTestSortResultsKey: SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnhittestoptionignorelightarea
declare const SCNHitTestOptionIgnoreLightArea: SCNHitTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnvector3zero
declare const SCNVector3Zero: SCNVector3;
// doc://com.apple.documentation/documentation/scenekit/scnvector4zero
declare const SCNVector4Zero: SCNVector4;
declare namespace cocoascript {
  /**
   * A constraint that orients a node to always point toward the current camera.
   * doc://com.apple.documentation/documentation/scenekit/scnbillboardconstraint
   */
  interface SCNBillboardConstraint extends SCNConstraint {
    // doc://com.apple.documentation/documentation/scenekit/scnbillboardconstraint/1468673-billboardconstraint
    billboardConstraint():SCNBillboardConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scnbillboardconstraint/1468685-freeaxes
    freeAxes(): SCNBillboardAxis;
    setFreeAxes(): void;
    //
    alloc():SCNBillboardConstraint;
    //
    init():SCNBillboardConstraint;
  }
}

declare const SCNBillboardConstraint: cocoascript.SCNBillboardConstraint;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scndistanceconstraint
   */
  interface SCNDistanceConstraint extends SCNConstraint {
    // doc://com.apple.documentation/documentation/scenekit/scndistanceconstraint/2873360-distanceconstraintwithtarget
    distanceConstraintWithTarget(target: any):SCNDistanceConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scndistanceconstraint/2873358-maximumdistance
    maximumDistance(): CGFloat;
    setMaximumDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scndistanceconstraint/2873385-minimumdistance
    minimumDistance(): CGFloat;
    setMinimumDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scndistanceconstraint/2873381-target
    target(): any;
    setTarget(): void;
    //
    alloc():SCNDistanceConstraint;
    //
    init():SCNDistanceConstraint;
  }
}

declare const SCNDistanceConstraint: cocoascript.SCNDistanceConstraint;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnaccelerationconstraint
   */
  interface SCNAccelerationConstraint extends SCNConstraint {
    // doc://com.apple.documentation/documentation/scenekit/scnaccelerationconstraint/2873359-damping
    damping(): CGFloat;
    setDamping(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaccelerationconstraint/2873367-decelerationdistance
    decelerationDistance(): CGFloat;
    setDecelerationDistance(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaccelerationconstraint/2873355-maximumlinearacceleration
    maximumLinearAcceleration(): CGFloat;
    setMaximumLinearAcceleration(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaccelerationconstraint/2873384-maximumlinearvelocity
    maximumLinearVelocity(): CGFloat;
    setMaximumLinearVelocity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnaccelerationconstraint/2873352-accelerationconstraint
    accelerationConstraint():SCNAccelerationConstraint;
    //
    alloc():SCNAccelerationConstraint;
    //
    init():SCNAccelerationConstraint;
  }
}

declare const SCNAccelerationConstraint: cocoascript.SCNAccelerationConstraint;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnsliderconstraint
   */
  interface SCNSliderConstraint extends SCNConstraint {
    // doc://com.apple.documentation/documentation/scenekit/scnsliderconstraint/2873372-collisioncategorybitmask
    collisionCategoryBitMask(): NSUInteger;
    setCollisionCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnsliderconstraint/2873373-offset
    offset(): SCNVector3;
    setOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnsliderconstraint/2873368-radius
    radius(): CGFloat;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnsliderconstraint/2873363-sliderconstraint
    sliderConstraint():SCNSliderConstraint;
    //
    alloc():SCNSliderConstraint;
    //
    init():SCNSliderConstraint;
  }
}

declare const SCNSliderConstraint: cocoascript.SCNSliderConstraint;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint
   */
  interface SCNReplicatorConstraint extends SCNConstraint {
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873356-replicatorconstraintwithtarget
    replicatorConstraintWithTarget(target: any):SCNReplicatorConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873365-orientationoffset
    orientationOffset(): SCNQuaternion;
    setOrientationOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873379-positionoffset
    positionOffset(): SCNVector3;
    setPositionOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873374-replicatesorientation
    replicatesOrientation(): BOOL;
    setReplicatesOrientation(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873353-replicatesposition
    replicatesPosition(): BOOL;
    setReplicatesPosition(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873371-replicatesscale
    replicatesScale(): BOOL;
    setReplicatesScale(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873366-scaleoffset
    scaleOffset(): SCNVector3;
    setScaleOffset(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnreplicatorconstraint/2873361-target
    target(): any;
    setTarget(): void;
    //
    alloc():SCNReplicatorConstraint;
    //
    init():SCNReplicatorConstraint;
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
    initWithChainRootNode(chainRootNode: any):SCNIKConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scnikconstraint/1468653-inversekinematicsconstraintwithc
    inverseKinematicsConstraintWithChainRootNode(chainRootNode: any):SCNIKConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scnikconstraint/1468690-chainrootnode
    chainRootNode(): any;
    setChainRootNode(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnikconstraint/1468681-maxallowedrotationangleforjoint
    maxAllowedRotationAngleForJoint(node: any):CGFloat;
    // doc://com.apple.documentation/documentation/scenekit/scnikconstraint/1468649-setmaxallowedrotationangle
    setMaxAllowedRotationAngle_forJoint(angle: CGFloat, node: any):void;
    // doc://com.apple.documentation/documentation/scenekit/scnikconstraint/1468651-targetposition
    targetPosition(): SCNVector3;
    setTargetPosition(): void;
    //
    alloc():SCNIKConstraint;
    //
    init():SCNIKConstraint;
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
    transformConstraintInWorldSpace_withBlock(world: BOOL, block: SCNMatrix4):SCNTransformConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scntransformconstraint/2867503-orientationconstraintinworldspac
    orientationConstraintInWorldSpace_withBlock(world: BOOL, block: SCNQuaternion):SCNTransformConstraint;
    // doc://com.apple.documentation/documentation/scenekit/scntransformconstraint/2867461-positionconstraintinworldspace
    positionConstraintInWorldSpace_withBlock(world: BOOL, block: SCNVector3):SCNTransformConstraint;
    //
    alloc():SCNTransformConstraint;
    //
    init():SCNTransformConstraint;
  }
}

declare const SCNTransformConstraint: cocoascript.SCNTransformConstraint;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint
   */
  interface SCNPhysicsConeTwistJoint extends SCNPhysicsBehavior {
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865898-jointwithbody
    jointWithBody_frame(body: SCNPhysicsBody, frame: SCNMatrix4):SCNPhysicsConeTwistJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865905-jointwithbodya
    jointWithBodyA_frameA_bodyB_frameB(bodyA: SCNPhysicsBody, frameA: SCNMatrix4, bodyB: SCNPhysicsBody, frameB: SCNMatrix4):SCNPhysicsConeTwistJoint;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865904-bodya
    bodyA(): SCNPhysicsBody;
    setBodyA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865899-bodyb
    bodyB(): SCNPhysicsBody;
    setBodyB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865902-framea
    frameA(): SCNMatrix4;
    setFrameA(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865900-frameb
    frameB(): SCNMatrix4;
    setFrameB(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865907-maximumangularlimit1
    maximumAngularLimit1(): CGFloat;
    setMaximumAngularLimit1(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865897-maximumangularlimit2
    maximumAngularLimit2(): CGFloat;
    setMaximumAngularLimit2(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnphysicsconetwistjoint/2865906-maximumtwistangle
    maximumTwistAngle(): CGFloat;
    setMaximumTwistAngle(): void;
    //
    alloc():SCNPhysicsConeTwistJoint;
    //
    init():SCNPhysicsConeTwistJoint;
  }
}

declare const SCNPhysicsConeTwistJoint: cocoascript.SCNPhysicsConeTwistJoint;
// doc://com.apple.documentation/documentation/scenekit/scnmatrix4identity
declare const SCNMatrix4Identity: SCNMatrix4;
// doc://com.apple.documentation/documentation/scenekit/scnlightingmodelphysicallybased
declare const SCNLightingModelPhysicallyBased: SCNLightingModel;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnquaternion
  type SCNQuaternion = cocoascript.SCNVector4;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnreferenceloadingpolicy
  type SCNReferenceLoadingPolicy = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/scenekit/scnlightingmodelblinn
declare const SCNLightingModelBlinn: SCNLightingModel;
// doc://com.apple.documentation/documentation/scenekit/scnlightingmodelconstant
declare const SCNLightingModelConstant: SCNLightingModel;
// doc://com.apple.documentation/documentation/scenekit/scnlightingmodellambert
declare const SCNLightingModelLambert: SCNLightingModel;
// doc://com.apple.documentation/documentation/scenekit/scnlightingmodelphong
declare const SCNLightingModelPhong: SCNLightingModel;
// doc://com.apple.documentation/documentation/scenekit/scnlightingmodelshadowonly
declare const SCNLightingModelShadowOnly: SCNLightingModel;
// doc://com.apple.documentation/documentation/scenekit/scnlighttypeambient
declare const SCNLightTypeAmbient: SCNLightType;
declare namespace cocoascript {
  /**
   * A plane that can optionally display a reflection of the scene above it.
   * doc://com.apple.documentation/documentation/scenekit/scnfloor
   */
  interface SCNFloor extends SCNGeometry {
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/1572698-floor
    floor():SCNFloor;
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/1524175-reflectivity
    reflectivity(): CGFloat;
    setReflectivity(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/1522781-reflectionfalloffend
    reflectionFalloffEnd(): CGFloat;
    setReflectionFalloffEnd(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/1524237-reflectionfalloffstart
    reflectionFalloffStart(): CGFloat;
    setReflectionFalloffStart(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/1522809-reflectionresolutionscalefactor
    reflectionResolutionScaleFactor(): CGFloat;
    setReflectionResolutionScaleFactor(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/1845281-reflectioncategorybitmask
    reflectionCategoryBitMask(): NSUInteger;
    setReflectionCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/1845280-width
    width(): CGFloat;
    setWidth(): void;
    // doc://com.apple.documentation/documentation/scenekit/scnfloor/2091890-length
    length(): CGFloat;
    setLength(): void;
    //
    alloc():SCNFloor;
    //
    init():SCNFloor;
  }
}

declare const SCNFloor: cocoascript.SCNFloor;
// doc://com.apple.documentation/documentation/scenekit/scnphysicsshapetypekey
declare const SCNPhysicsShapeTypeKey: SCNPhysicsShapeOption;
// doc://com.apple.documentation/documentation/scenekit/scnphysicsshapekeepascompoundkey
declare const SCNPhysicsShapeKeepAsCompoundKey: SCNPhysicsShapeOption;
// doc://com.apple.documentation/documentation/scenekit/scnphysicsshapetypeboundingbox
declare const SCNPhysicsShapeTypeBoundingBox: SCNPhysicsShapeType;
// doc://com.apple.documentation/documentation/scenekit/scnphysicsshapeoptioncollisionmargin
declare const SCNPhysicsShapeOptionCollisionMargin: SCNPhysicsShapeOption;
// doc://com.apple.documentation/documentation/scenekit/scnphysicsshapescalekey
declare const SCNPhysicsShapeScaleKey: SCNPhysicsShapeOption;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnphysicsshapetype
  type SCNPhysicsShapeType = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/scenekit/scnlighttypeies
declare const SCNLightTypeIES: SCNLightType;
// doc://com.apple.documentation/documentation/scenekit/scnlighttypedirectional
declare const SCNLightTypeDirectional: SCNLightType;
// doc://com.apple.documentation/documentation/scenekit/scnlighttypeomni
declare const SCNLightTypeOmni: SCNLightType;
// doc://com.apple.documentation/documentation/scenekit/scnlighttypeprobe
declare const SCNLightTypeProbe: SCNLightType;
// doc://com.apple.documentation/documentation/scenekit/scnlighttypearea
declare const SCNLightTypeArea: SCNLightType;
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
declare const SCNParticlePropertyAngle: SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyangularvelocity
declare const SCNParticlePropertyAngularVelocity: SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertybounce
declare const SCNParticlePropertyBounce: SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycharge
declare const SCNParticlePropertyCharge: SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontactnormal
declare const SCNParticlePropertyContactNormal: SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertycontactpoint
declare const SCNParticlePropertyContactPoint: SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyframe
declare const SCNParticlePropertyFrame: SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyframerate
declare const SCNParticlePropertyFrameRate: SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyfriction
declare const SCNParticlePropertyFriction: SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertylife
declare const SCNParticlePropertyLife: SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyopacity
declare const SCNParticlePropertyOpacity: SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyposition
declare const SCNParticlePropertyPosition: SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyrotationaxis
declare const SCNParticlePropertyRotationAxis: SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertysize
declare const SCNParticlePropertySize: SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scnparticlepropertyvelocity
declare const SCNParticlePropertyVelocity: SCNParticleProperty;
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemantictangent
declare const SCNGeometrySourceSemanticTangent: SCNGeometrySourceSemantic;
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
declare const SCNGeometrySourceSemanticVertexCrease: SCNGeometrySourceSemantic;
// doc://com.apple.documentation/documentation/scenekit/scngeometrysourcesemanticedgecrease
declare const SCNGeometrySourceSemanticEdgeCrease: SCNGeometrySourceSemantic;
// doc://com.apple.documentation/documentation/scenekit/scnphysicstestsearchmodekey
declare const SCNPhysicsTestSearchModeKey: SCNPhysicsTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnphysicstestbackfacecullingkey
declare const SCNPhysicsTestBackfaceCullingKey: SCNPhysicsTestOption;
// doc://com.apple.documentation/documentation/scenekit/scnphysicstestcollisionbitmaskkey
declare const SCNPhysicsTestCollisionBitMaskKey: SCNPhysicsTestOption;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnphysicstestsearchmode
  type SCNPhysicsTestSearchMode = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/scenekit/scnsceneendtimeattributekey
declare const SCNSceneEndTimeAttributeKey: SCNSceneAttribute;
// doc://com.apple.documentation/documentation/scenekit/scnsceneframerateattributekey
declare const SCNSceneFrameRateAttributeKey: SCNSceneAttribute;
// doc://com.apple.documentation/documentation/scenekit/scnscenestarttimeattributekey
declare const SCNSceneStartTimeAttributeKey: SCNSceneAttribute;
// doc://com.apple.documentation/documentation/scenekit/scnsceneupaxisattributekey
declare const SCNSceneUpAxisAttributeKey: SCNSceneAttribute;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnscenesourceanimationimportpolicy
  type SCNSceneSourceAnimationImportPolicy = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/scenekit/scnbillboardaxis
  type SCNBillboardAxis = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/scenekit/scnphysicsshapetypeconvexhull
declare const SCNPhysicsShapeTypeConvexHull: SCNPhysicsShapeType;
// doc://com.apple.documentation/documentation/scenekit/scnphysicsshapetypeconcavepolyhedron
declare const SCNPhysicsShapeTypeConcavePolyhedron: SCNPhysicsShapeType;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceanimationimportpolicykey
declare const SCNSceneSourceAnimationImportPolicyKey: SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceassetdirectoryurlskey
declare const SCNSceneSourceAssetDirectoryURLsKey: SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourcecheckconsistencykey
declare const SCNSceneSourceCheckConsistencyKey: SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceconverttoyupkey
declare const SCNSceneSourceConvertToYUpKey: SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceconvertunitstometerskey
declare const SCNSceneSourceConvertUnitsToMetersKey: SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourcecreatenormalsifabsentkey
declare const SCNSceneSourceCreateNormalsIfAbsentKey: SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceflattenscenekey
declare const SCNSceneSourceFlattenSceneKey: SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceoverrideasseturlskey
declare const SCNSceneSourceOverrideAssetURLsKey: SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceloadingoptionpreserveoriginaltopology
declare const SCNSceneSourceLoadingOptionPreserveOriginalTopology: SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourcestrictconformancekey
declare const SCNSceneSourceStrictConformanceKey: SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceusesafemodekey
declare const SCNSceneSourceUseSafeModeKey: SCNSceneSourceLoadingOption;
// doc://com.apple.documentation/documentation/scenekit/scnphysicstestsearchmodeany
declare const SCNPhysicsTestSearchModeAny: SCNPhysicsTestSearchMode;
// doc://com.apple.documentation/documentation/scenekit/scnphysicstestsearchmodeall
declare const SCNPhysicsTestSearchModeAll: SCNPhysicsTestSearchMode;
// doc://com.apple.documentation/documentation/scenekit/scnphysicstestsearchmodeclosest
declare const SCNPhysicsTestSearchModeClosest: SCNPhysicsTestSearchMode;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceanimationimportpolicydonotplay
declare const SCNSceneSourceAnimationImportPolicyDoNotPlay: SCNSceneSourceAnimationImportPolicy;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceanimationimportpolicyplay
declare const SCNSceneSourceAnimationImportPolicyPlay: SCNSceneSourceAnimationImportPolicy;
// doc://com.apple.documentation/documentation/scenekit/scnscenesourceanimationimportpolicyplayrepeatedly
declare const SCNSceneSourceAnimationImportPolicyPlayRepeatedly: SCNSceneSourceAnimationImportPolicy;
