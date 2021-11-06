declare namespace cocoascript {
  /**
   * A structural element of a scene graph, representing a position and transform in a 3D coordinate space, to which you can attach geometry, lights, cameras, or other displayable content.
   * https://developer.apple.com/documentation/scenekit/scnnode
   */
  interface SCNNode extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnnode/1407972-node
    node():any;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408020-nodewithgeometry
    nodeWithGeometry(geometry: SCNGeometry):any;
    // https://developer.apple.com/documentation/scenekit/scnnode/1419841-nodewithmdlobject
    nodeWithMDLObject(mdlObject: MDLObject):any;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881843-simdtransform
    simdTransform(): simd_float4x4;
    setSimdTransform(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881846-simdposition
    simdPosition(): simd_float3;
    setSimdPosition(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881845-simdrotation
    simdRotation(): simd_float4;
    setSimdRotation(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881859-simdeulerangles
    simdEulerAngles(): simd_float3;
    setSimdEulerAngles(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881854-simdorientation
    simdOrientation(): simd_quatf;
    setSimdOrientation(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881847-simdscale
    simdScale(): simd_float3;
    setSimdScale(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881849-simdpivot
    simdPivot(): simd_float4x4;
    setSimdPivot(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408014-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408004-light
    light(): SCNLight;
    setLight(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407976-camera
    camera(): SCNCamera;
    setCamera(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407966-geometry
    geometry(): SCNGeometry;
    setGeometry(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408022-morpher
    morpher(): SCNMorpher;
    setMorpher(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407953-skinner
    skinner(): SCNSkinner;
    setSkinner(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407994-categorybitmask
    categoryBitMask(): NSUInteger;
    setCategoryBitMask(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408016-constraints
    constraints(): SCNConstraint;
    setConstraints(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408030-presentationnode
    presentationNode(): any;
    setPresentationNode(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407962-paused
    paused(): BOOL;
    setPaused(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407967-hidden
    hidden(): BOOL;
    setHidden(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408010-opacity
    opacity(): CGFloat;
    setOpacity(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407978-renderingorder
    renderingOrder(): NSInteger;
    setRenderingOrder(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407955-castsshadow
    castsShadow(): BOOL;
    setCastsShadow(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1690499-movabilityhint
    movabilityHint(): SCNMovabilityHint;
    setMovabilityHint(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407968-parentnode
    parentNode(): any;
    setParentNode(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407984-childnodes
    childNodes(): any;
    setChildNodes(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407974-addchildnode
    addChildNode(child: any):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407958-insertchildnode
    insertChildNode_atIndex(child: any, index: NSUInteger):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407991-removefromparentnode
    removeFromParentNode():void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408002-replacechildnode
    replaceChildNode_with(oldChild: any, newChild: any):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407982-childnodespassingtest
    childNodesPassingTest(predicate: BOOL):any;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407951-childnodewithname
    childNodeWithName_recursively(name: string | cocoascript.NSString, recursively: BOOL):any;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408032-enumeratechildnodesusingblock
    enumerateChildNodesUsingBlock(block: BOOL):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1642248-enumeratehierarchyusingblock
    enumerateHierarchyUsingBlock(block: BOOL):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407949-filters
    filters(): CIFilter;
    setFilters(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408012-rendererdelegate
    rendererDelegate(): SCNNodeRendererDelegate;
    setRendererDelegate(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407988-physicsbody
    physicsBody(): SCNPhysicsBody;
    setPhysicsBody(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408006-physicsfield
    physicsField(): SCNPhysicsField;
    setPhysicsField(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1523123-addparticlesystem
    addParticleSystem(system: SCNParticleSystem):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1522705-particlesystems
    particleSystems(): SCNParticleSystem;
    setParticleSystems(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1524014-removeparticlesystem
    removeParticleSystem(system: SCNParticleSystem):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1522801-removeallparticlesystems
    removeAllParticleSystems():void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1523464-addaudioplayer
    addAudioPlayer(player: SCNAudioPlayer):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1523244-audioplayers
    audioPlayers(): SCNAudioPlayer;
    setAudioPlayers(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1522767-removeaudioplayer
    removeAudioPlayer(player: SCNAudioPlayer):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1523570-removeallaudioplayers
    removeAllAudioPlayers():void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408046-clone
    clone():any;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407960-flattenedclone
    flattenedClone():any;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407998-hittestwithsegmentfrompoint
    hitTestWithSegmentFromPoint_toPoint_options(pointA: SCNVector3, pointB: SCNVector3, options: any):any;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881861-simdrotateby
    simdRotateBy_aroundTarget(worldRotation: simd_quatf, worldTarget: simd_float3):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881858-simdlocaltranslateby
    simdLocalTranslateBy(translation: simd_float3):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881844-simdlocalrotateby
    simdLocalRotateBy(rotation: simd_quatf):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881870-simdlookat
    simdLookAt(worldTarget: simd_float3):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881848-simdlookat
    simdLookAt_up_localFront(worldTarget: simd_float3, worldUp: simd_float3, localFront: simd_float3):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881851-simdlocalright
    simdLocalRight(): simd_float3;
    setSimdLocalRight(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881872-simdlocalup
    simdLocalUp(): simd_float3;
    setSimdLocalUp(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881864-simdlocalfront
    simdLocalFront(): simd_float3;
    setSimdLocalFront(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881857-simdworldright
    simdWorldRight(): simd_float3;
    setSimdWorldRight(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881867-simdworldup
    simdWorldUp(): simd_float3;
    setSimdWorldUp(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881863-simdworldfront
    simdWorldFront(): simd_float3;
    setSimdWorldFront(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881868-simdworldtransform
    simdWorldTransform(): simd_float4x4;
    setSimdWorldTransform(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881865-simdworldorientation
    simdWorldOrientation(): simd_quatf;
    setSimdWorldOrientation(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881856-simdworldposition
    simdWorldPosition(): simd_float3;
    setSimdWorldPosition(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881852-simdconvertposition
    simdConvertPosition_fromNode(position: simd_float3, node: any):simd_float3;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881869-simdconvertposition
    simdConvertPosition_toNode(position: simd_float3, node: any):simd_float3;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881866-simdconverttransform
    simdConvertTransform_fromNode(transform: simd_float4x4, node: any):simd_float4x4;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881855-simdconverttransform
    simdConvertTransform_toNode(transform: simd_float4x4, node: any):simd_float4x4;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881842-simdconvertvector
    simdConvertVector_fromNode(vector: simd_float3, node: any):simd_float3;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881850-simdconvertvector
    simdConvertVector_toNode(vector: simd_float3, node: any):simd_float3;
    // https://developer.apple.com/documentation/scenekit/scnnode/2881853-focusbehavior
    focusBehavior(): SCNNodeFocusBehavior;
    setFocusBehavior(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2873004-entity
    entity(): GKEntity;
    setEntity(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407964-transform
    transform(): SCNMatrix4;
    setTransform(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408026-position
    position(): SCNVector3;
    setPosition(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408034-rotation
    rotation(): SCNVector4;
    setRotation(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407980-eulerangles
    eulerAngles(): SCNVector3;
    setEulerAngles(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408048-orientation
    orientation(): SCNQuaternion;
    setOrientation(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408050-scale
    scale(): SCNVector3;
    setScale(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408044-pivot
    pivot(): SCNMatrix4;
    setPivot(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867399-rotateby
    rotateBy_aroundTarget(worldRotation: SCNQuaternion, worldTarget: SCNVector3):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867383-localtranslateby
    localTranslateBy(translation: SCNVector3):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867398-localrotateby
    localRotateBy(rotation: SCNQuaternion):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867394-lookat
    lookAt(worldTarget: SCNVector3):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867396-lookat
    lookAt_up_localFront(worldTarget: SCNVector3, worldUp: SCNVector3, localFront: SCNVector3):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867400-localright
    localRight(): SCNVector3;
    setLocalRight(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867386-localup
    localUp(): SCNVector3;
    setLocalUp(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867393-localfront
    localFront(): SCNVector3;
    setLocalFront(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867404-worldright
    worldRight(): SCNVector3;
    setWorldRight(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867395-worldup
    worldUp(): SCNVector3;
    setWorldUp(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867392-worldfront
    worldFront(): SCNVector3;
    setWorldFront(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407970-worldtransform
    worldTransform(): SCNMatrix4;
    setWorldTransform(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867401-setworldtransform
    setWorldTransform(worldTransform: SCNMatrix4):void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867402-worldorientation
    worldOrientation(): SCNQuaternion;
    setWorldOrientation(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867405-worldposition
    worldPosition(): SCNVector3;
    setWorldPosition(): void;
    // https://developer.apple.com/documentation/scenekit/scnnode/1408018-convertposition
    convertPosition_fromNode(position: SCNVector3, node: any):SCNVector3;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407990-convertposition
    convertPosition_toNode(position: SCNVector3, node: any):SCNVector3;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407996-converttransform
    convertTransform_fromNode(transform: SCNMatrix4, node: any):SCNMatrix4;
    // https://developer.apple.com/documentation/scenekit/scnnode/1407986-converttransform
    convertTransform_toNode(transform: SCNMatrix4, node: any):SCNMatrix4;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867403-convertvector
    convertVector_fromNode(vector: SCNVector3, node: any):SCNVector3;
    // https://developer.apple.com/documentation/scenekit/scnnode/2867397-convertvector
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
   * Properties affecting the behavior of a camera controller.
   * https://developer.apple.com/documentation/scenekit/scncameracontrolconfiguration
   */
  interface SCNCameraControlConfiguration extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scncameracontrolconfiguration/2867337-allowstranslation
    allowsTranslation(): BOOL;
    setAllowsTranslation(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontrolconfiguration/2867338-autoswitchtofreecamera
    autoSwitchToFreeCamera(): BOOL;
    setAutoSwitchToFreeCamera(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontrolconfiguration/2867334-flymodevelocity
    flyModeVelocity(): CGFloat;
    setFlyModeVelocity(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontrolconfiguration/2867342-pansensitivity
    panSensitivity(): CGFloat;
    setPanSensitivity(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontrolconfiguration/2867340-rotationsensitivity
    rotationSensitivity(): CGFloat;
    setRotationSensitivity(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontrolconfiguration/2867332-trucksensitivity
    truckSensitivity(): CGFloat;
    setTruckSensitivity(): void;
  }
}
declare namespace cocoascript {
  /**
   * Methods common to the
   * https://developer.apple.com/documentation/scenekit/scnboundingvolume
   */
  interface SCNBoundingVolume extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnboundingvolume/1522872-getboundingboxmin
    getBoundingBoxMin_max(min: SCNVector3, max: SCNVector3):BOOL;
    // https://developer.apple.com/documentation/scenekit/scnboundingvolume/1523886-getboundingspherecenter
    getBoundingSphereCenter_radius(center: SCNVector3, radius: CGFloat):BOOL;
    // https://developer.apple.com/documentation/scenekit/scnboundingvolume/1522866-setboundingboxmin
    setBoundingBoxMin_max(min: SCNVector3, max: SCNVector3):void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/scenekit/scncameracontrollerdelegate
   */
  interface SCNCameraControllerDelegate extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scncameracontrollerdelegate/2879192-camerainertiadidendforcontroller
    cameraInertiaDidEndForController(cameraController: SCNCameraController):void;
    // https://developer.apple.com/documentation/scenekit/scncameracontrollerdelegate/2879194-camerainertiawillstartforcontrol
    cameraInertiaWillStartForController(cameraController: SCNCameraController):void;
  }
}
declare namespace cocoascript {
  /**
   * The common interface for attaching animations to nodes, geometries, materials, and other SceneKit objects.
   * https://developer.apple.com/documentation/scenekit/scnanimatable
   */
  interface SCNAnimatable extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnanimatable/1523386-addanimation
    addAnimation_forKey(animation: SCNAnimation, key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/scenekit/scnanimatable/1524020-animationforkey
    animationForKey(key: string | cocoascript.NSString):CAAnimation;
    // https://developer.apple.com/documentation/scenekit/scnanimatable/1523610-animationkeys
    animationKeys(): string | cocoascript.NSString;
    setAnimationKeys(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimatable/1522762-removeallanimations
    removeAllAnimations():void;
    // https://developer.apple.com/documentation/scenekit/scnanimatable/1522880-removeanimationforkey
    removeAnimationForKey(key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/scenekit/scnanimatable/1522841-removeanimationforkey
    removeAnimationForKey_fadeOutDuration(key: string | cocoascript.NSString, duration: CGFloat):void;
    // https://developer.apple.com/documentation/scenekit/scnanimatable/1523592-pauseanimationforkey
    pauseAnimationForKey(key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/scenekit/scnanimatable/1523332-resumeanimationforkey
    resumeAnimationForKey(key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/scenekit/scnanimatable/1523703-isanimationforkeypaused
    isAnimationForKeyPaused(key: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/scenekit/scnanimatable/2866031-addanimationplayer
    addAnimationPlayer_forKey(player: SCNAnimationPlayer, key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/scenekit/scnanimatable/2866026-animationplayerforkey
    animationPlayerForKey(key: string | cocoascript.NSString):SCNAnimationPlayer;
    // https://developer.apple.com/documentation/scenekit/scnanimatable/2887039-removeanimationforkey
    removeAnimationForKey_blendOutDuration(key: string | cocoascript.NSString, duration: CGFloat):void;
    // https://developer.apple.com/documentation/scenekit/scnanimatable/1778343-setspeed
    setSpeed_forAnimationKey(speed: CGFloat, key: string | cocoascript.NSString):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods your app can implement to participate in SceneKit’s animation loop or perform additional rendering.
   * https://developer.apple.com/documentation/scenekit/scnscenerendererdelegate
   */
  interface SCNSceneRendererDelegate extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnscenerendererdelegate/1522937-renderer
    renderer_updateAtTime(renderer: SCNSceneRenderer, time: NSTimeInterval):void;
    // https://developer.apple.com/documentation/scenekit/scnscenerendererdelegate/1523038-renderer
    renderer_didApplyAnimationsAtTime(renderer: SCNSceneRenderer, time: NSTimeInterval):void;
    // https://developer.apple.com/documentation/scenekit/scnscenerendererdelegate/1522738-renderer
    renderer_didSimulatePhysicsAtTime(renderer: SCNSceneRenderer, time: NSTimeInterval):void;
    // https://developer.apple.com/documentation/scenekit/scnscenerendererdelegate/1523483-renderer
    renderer_willRenderScene_atTime(renderer: SCNSceneRenderer, scene: any, time: NSTimeInterval):void;
    // https://developer.apple.com/documentation/scenekit/scnscenerendererdelegate/1524233-renderer
    renderer_didRenderScene_atTime(renderer: SCNSceneRenderer, scene: any, time: NSTimeInterval):void;
    // https://developer.apple.com/documentation/scenekit/scnscenerendererdelegate/2919554-renderer
    renderer_didApplyConstraintsAtTime(renderer: SCNSceneRenderer, time: NSTimeInterval):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods and properties common to the
   * https://developer.apple.com/documentation/scenekit/scnscenerenderer
   */
  interface SCNSceneRenderer extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1523956-scene
    scene(): any;
    setScene(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1523028-presentscene
    presentScene_withTransition_incomingPointOfView_completionHandler(scene: any, transition: SKTransition, pointOfView: any, completionHandler: void):void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1523982-pointofview
    pointOfView(): any;
    setPointOfView(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1523812-autoenablesdefaultlighting
    autoenablesDefaultLighting(): BOOL;
    setAutoenablesDefaultLighting(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1524026-jitteringenabled
    jitteringEnabled(): BOOL;
    setJitteringEnabled(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1522763-showsstatistics
    showsStatistics(): BOOL;
    setShowsStatistics(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1523281-debugoptions
    debugOptions(): SCNDebugOptions;
    setDebugOptions(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1522616-renderingapi
    renderingAPI(): SCNRenderingAPI;
    setRenderingAPI(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1522680-scenetime
    sceneTime(): NSTimeInterval;
    setSceneTime(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1523401-playing
    playing(): BOOL;
    setPlaying(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1522878-loops
    loops(): BOOL;
    setLoops(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1522798-prepareobject
    prepareObject_shouldAbortBlock(object: SCNSceneRenderer, block: void):BOOL;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1523375-prepareobjects
    prepareObjects_withCompletionHandler(objects: NSArray, completionHandler: BOOL):void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1522929-hittest
    hitTest_options(point: CGPoint, options: SCNSceneRenderer):any;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1522647-isnodeinsidefrustum
    isNodeInsideFrustum_withPointOfView(node: any, pointOfView: any):BOOL;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1522942-nodesinsidefrustumwithpointofvie
    nodesInsideFrustumWithPointOfView(pointOfView: any):any;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1524089-projectpoint
    projectPoint(point: SCNVector3):SCNVector3;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1522631-unprojectpoint
    unprojectPoint(point: SCNVector3):SCNVector3;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1522671-delegate
    delegate(): SCNSceneRendererDelegate;
    setDelegate(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1522609-currentrendercommandencoder
    currentRenderCommandEncoder(): any;
    setCurrentRenderCommandEncoder(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1523935-device
    device(): any;
    setDevice(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1523974-commandqueue
    commandQueue(): any;
    setCommandQueue(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1523701-colorpixelformat
    colorPixelFormat(): any;
    setColorPixelFormat(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1523780-depthpixelformat
    depthPixelFormat(): any;
    setDepthPixelFormat(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1523315-stencilpixelformat
    stencilPixelFormat(): any;
    setStencilPixelFormat(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1522840-context
    context(): void;
    setContext(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1524051-overlayskscene
    overlaySKScene(): SKScene;
    setOverlaySKScene(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1523747-audiolistener
    audioListener(): any;
    setAudioListener(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1523582-audioenvironmentnode
    audioEnvironmentNode(): AVAudioEnvironmentNode;
    setAudioEnvironmentNode(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1522686-audioengine
    audioEngine(): AVAudioEngine;
    setAudioEngine(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/3672179-currentrenderpassdescriptor
    currentRenderPassDescriptor(): any;
    setCurrentRenderPassDescriptor(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/1522854-currenttime
    currentTime(): NSTimeInterval;
    setCurrentTime(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/3240646-currentviewport
    currentViewport(): CGRect;
    setCurrentViewport(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/3227912-temporalantialiasingenabled
    temporalAntialiasingEnabled(): BOOL;
    setTemporalAntialiasingEnabled(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenerenderer/3174885-usesreversez
    usesReverseZ(): BOOL;
    setUsesReverseZ(): void;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to use your own custom Metal or OpenGL drawing code to render content for a node.
   * https://developer.apple.com/documentation/scenekit/scnnoderendererdelegate
   */
  interface SCNNodeRendererDelegate extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnnoderendererdelegate/1407993-rendernode
    renderNode_renderer_arguments(node: any, renderer: SCNRenderer, arguments: SCNNodeRendererDelegate):void;
  }
}
declare namespace cocoascript {
  /**
   * An object that manages a Metal buffer used by a custom shader program.
   * https://developer.apple.com/documentation/scenekit/scnbufferstream
   */
  interface SCNBufferStream extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnbufferstream/1523175-writebytes
    writeBytes_length(bytes: void, length: NSUInteger):void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/scenekit/scnanimation
   */
  interface SCNAnimation extends NSObject {
  }
}
declare namespace cocoascript {
  /**
   * Methods for running actions on nodes.
   * https://developer.apple.com/documentation/scenekit/scnactionable
   */
  interface SCNActionable extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnactionable/1523164-runaction
    runAction(action: SCNAction):void;
    // https://developer.apple.com/documentation/scenekit/scnactionable/1524219-runaction
    runAction_completionHandler(action: SCNAction, block: void):void;
    // https://developer.apple.com/documentation/scenekit/scnactionable/1524222-runaction
    runAction_forKey(action: SCNAction, key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/scenekit/scnactionable/1522791-runaction
    runAction_forKey_completionHandler(action: SCNAction, key: string | cocoascript.NSString, block: void):void;
    // https://developer.apple.com/documentation/scenekit/scnactionable/1523287-actionforkey
    actionForKey(key: string | cocoascript.NSString):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnactionable/1523794-hasactions
    hasActions(): BOOL;
    setHasActions(): void;
    // https://developer.apple.com/documentation/scenekit/scnactionable/1523036-actionkeys
    actionKeys(): string | cocoascript.NSString;
    setActionKeys(): void;
    // https://developer.apple.com/documentation/scenekit/scnactionable/1523617-removeactionforkey
    removeActionForKey(key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/scenekit/scnactionable/1524181-removeallactions
    removeAllActions():void;
  }
}
declare namespace cocoascript {
  /**
   * The common interface for SceneKit objects that support multipass rendering using
   * https://developer.apple.com/documentation/scenekit/scntechniquesupport
   */
  interface SCNTechniqueSupport extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scntechniquesupport/1520496-technique
    technique(): SCNTechnique;
    setTechnique(): void;
  }
}
declare namespace cocoascript {
  /**
   * The interface for tracking errors that occur when compiling shader source code.
   * https://developer.apple.com/documentation/scenekit/scnprogramdelegate
   */
  interface SCNProgramDelegate extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnprogramdelegate/1523007-program
    program_handleError(program: SCNProgram, error: NSError):void;
    // https://developer.apple.com/documentation/scenekit/scnprogramdelegate/1523068-programisopaque
    programIsOpaque(program: SCNProgram):BOOL;
    // https://developer.apple.com/documentation/scenekit/scnprogramdelegate/1524155-program
    program_bindValueForSymbol_atLocation_programID_renderer(program: SCNProgram, symbol: string | cocoascript.NSString, location: number, programID: number, renderer: SCNRenderer):BOOL;
    // https://developer.apple.com/documentation/scenekit/scnprogramdelegate/1523857-program
    program_unbindValueForSymbol_atLocation_programID_renderer(program: SCNProgram, symbol: string | cocoascript.NSString, location: number, programID: number, renderer: SCNRenderer):void;
  }
}
// https://developer.apple.com/documentation/scenekit/scnerrordomain
declare const SCNErrorDomain: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * Methods you can implement to participate in the process of exporting a scene to a file.
   * https://developer.apple.com/documentation/scenekit/scnsceneexportdelegate
   */
  interface SCNSceneExportDelegate extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnsceneexportdelegate/1524221-writeimage
    writeImage_withSceneDocumentURL_originalImageURL(image: UIImage, documentURL: NSURL, originalImageURL: NSURL):NSURL;
  }
}
declare namespace cocoascript {
  /**
   * Methods for customizing SceneKit's rendering of geometry and materials using Metal or OpenGL shader programs.
   * https://developer.apple.com/documentation/scenekit/scnshadable
   */
  interface SCNShadable extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnshadable/1523689-program
    program(): SCNProgram;
    setProgram(): void;
    // https://developer.apple.com/documentation/scenekit/scnshadable/1523348-shadermodifiers
    shaderModifiers(): string | cocoascript.NSString;
    setShaderModifiers(): void;
    // https://developer.apple.com/documentation/scenekit/scnshadable/1523063-handlebindingofsymbol
    handleBindingOfSymbol_usingBlock(symbol: string | cocoascript.NSString, block: SCNBindingBlock):void;
    // https://developer.apple.com/documentation/scenekit/scnshadable/1522783-handleunbindingofsymbol
    handleUnbindingOfSymbol_usingBlock(symbol: string | cocoascript.NSString, block: SCNBindingBlock):void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/scenekit/scnavoidoccluderconstraintdelegate
   */
  interface SCNAvoidOccluderConstraintDelegate extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnavoidoccluderconstraintdelegate/2887040-avoidoccluderconstraint
    avoidOccluderConstraint_didAvoidOccluder_forNode(constraint: SCNAvoidOccluderConstraint, occluder: any, node: any):void;
    // https://developer.apple.com/documentation/scenekit/scnavoidoccluderconstraintdelegate/2887038-avoidoccluderconstraint
    avoidOccluderConstraint_shouldAvoidOccluder_forNode(constraint: SCNAvoidOccluderConstraint, occluder: any, node: any):BOOL;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to respond when a contact or collision occurs between two physics bodies in a scene.
   * https://developer.apple.com/documentation/scenekit/scnphysicscontactdelegate
   */
  interface SCNPhysicsContactDelegate extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnphysicscontactdelegate/1512835-physicsworld
    physicsWorld_didBeginContact(world: SCNPhysicsWorld, contact: SCNPhysicsContact):void;
    // https://developer.apple.com/documentation/scenekit/scnphysicscontactdelegate/1512865-physicsworld
    physicsWorld_didUpdateContact(world: SCNPhysicsWorld, contact: SCNPhysicsContact):void;
    // https://developer.apple.com/documentation/scenekit/scnphysicscontactdelegate/1512883-physicsworld
    physicsWorld_didEndContact(world: SCNPhysicsWorld, contact: SCNPhysicsContact):void;
  }
}
declare namespace cocoascript {
  /**
   * The appearance and physical characteristics of an individual wheel associated with an physics vehicle behavior.
   * https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel
   */
  interface SCNPhysicsVehicleWheel extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/1387989-wheelwithnode
    wheelWithNode(node: any):SCNPhysicsVehicleWheel;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/1387959-connectionposition
    connectionPosition(): SCNVector3;
    setConnectionPosition(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/1387969-axle
    axle(): SCNVector3;
    setAxle(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/1387882-steeringaxis
    steeringAxis(): SCNVector3;
    setSteeringAxis(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/1387991-radius
    radius(): CGFloat;
    setRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/1387904-frictionslip
    frictionSlip(): CGFloat;
    setFrictionSlip(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/1387983-suspensionstiffness
    suspensionStiffness(): CGFloat;
    setSuspensionStiffness(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/1387971-suspensioncompression
    suspensionCompression(): CGFloat;
    setSuspensionCompression(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/1387886-suspensiondamping
    suspensionDamping(): CGFloat;
    setSuspensionDamping(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/1387928-maximumsuspensiontravel
    maximumSuspensionTravel(): CGFloat;
    setMaximumSuspensionTravel(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/1387934-maximumsuspensionforce
    maximumSuspensionForce(): CGFloat;
    setMaximumSuspensionForce(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/1387880-suspensionrestlength
    suspensionRestLength(): CGFloat;
    setSuspensionRestLength(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/1387892-node
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
   * https://developer.apple.com/documentation/scenekit/scnphysicsfield
   */
  interface SCNPhysicsField extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388164-dragfield
    dragField():SCNPhysicsField;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388160-vortexfield
    vortexField():SCNPhysicsField;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388115-radialgravityfield
    radialGravityField():SCNPhysicsField;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388130-lineargravityfield
    linearGravityField():SCNPhysicsField;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388150-noisefieldwithsmoothness
    noiseFieldWithSmoothness_animationSpeed(smoothness: CGFloat, speed: CGFloat):SCNPhysicsField;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388162-turbulencefieldwithsmoothness
    turbulenceFieldWithSmoothness_animationSpeed(smoothness: CGFloat, speed: CGFloat):SCNPhysicsField;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388134-springfield
    springField():SCNPhysicsField;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388152-electricfield
    electricField():SCNPhysicsField;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388168-magneticfield
    magneticField():SCNPhysicsField;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388140-customfieldwithevaluationblock
    customFieldWithEvaluationBlock(block: SCNFieldForceEvaluator):SCNPhysicsField;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388138-halfextent
    halfExtent(): SCNVector3;
    setHalfExtent(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388136-scope
    scope(): SCNPhysicsFieldScope;
    setScope(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388158-usesellipsoidalextent
    usesEllipsoidalExtent(): BOOL;
    setUsesEllipsoidalExtent(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388154-offset
    offset(): SCNVector3;
    setOffset(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388128-direction
    direction(): SCNVector3;
    setDirection(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388132-strength
    strength(): CGFloat;
    setStrength(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388146-falloffexponent
    falloffExponent(): CGFloat;
    setFalloffExponent(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388148-minimumdistance
    minimumDistance(): CGFloat;
    setMinimumDistance(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388117-active
    active(): BOOL;
    setActive(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388126-exclusive
    exclusive(): BOOL;
    setExclusive(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsfield/1388119-categorybitmask
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
   * A set of camera attributes that can be attached to a node to provide a point of view for displaying the scene.
   * https://developer.apple.com/documentation/scenekit/scncamera
   */
  interface SCNCamera extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scncamera/1436602-camera
    camera():SCNCamera;
    // https://developer.apple.com/documentation/scenekit/scncamera/1419839-camerawithmdlcamera
    cameraWithMDLCamera(mdlCamera: MDLCamera):SCNCamera;
    // https://developer.apple.com/documentation/scenekit/scncamera/1436623-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1436592-znear
    zNear(): number;
    setZNear(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1436596-zfar
    zFar(): number;
    setZFar(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1436610-automaticallyadjustszrange
    automaticallyAdjustsZRange(): BOOL;
    setAutomaticallyAdjustsZRange(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/2867510-fieldofview
    fieldOfView(): CGFloat;
    setFieldOfView(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/2867556-focallength
    focalLength(): CGFloat;
    setFocalLength(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/2867499-sensorheight
    sensorHeight(): CGFloat;
    setSensorHeight(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/2878134-projectiondirection
    projectionDirection(): SCNCameraProjectionDirection;
    setProjectionDirection(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1690501-projectiontransform
    projectionTransform(): SCNMatrix4;
    setProjectionTransform(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1436621-usesorthographicprojection
    usesOrthographicProjection(): BOOL;
    setUsesOrthographicProjection(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1436612-orthographicscale
    orthographicScale(): number;
    setOrthographicScale(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1436625-categorybitmask
    categoryBitMask(): NSUInteger;
    setCategoryBitMask(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/2881741-wantsdepthoffield
    wantsDepthOfField(): BOOL;
    setWantsDepthOfField(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/2867518-focusdistance
    focusDistance(): CGFloat;
    setFocusDistance(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/2867490-fstop
    fStop(): CGFloat;
    setFStop(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/2867484-aperturebladecount
    apertureBladeCount(): NSInteger;
    setApertureBladeCount(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/2872999-focalblursamplecount
    focalBlurSampleCount(): NSInteger;
    setFocalBlurSampleCount(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644099-motionblurintensity
    motionBlurIntensity(): CGFloat;
    setMotionBlurIntensity(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644101-wantshdr
    wantsHDR(): BOOL;
    setWantsHDR(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644105-exposureoffset
    exposureOffset(): CGFloat;
    setExposureOffset(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644097-averagegray
    averageGray(): CGFloat;
    setAverageGray(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644110-whitepoint
    whitePoint(): CGFloat;
    setWhitePoint(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644103-minimumexposure
    minimumExposure(): CGFloat;
    setMinimumExposure(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644120-maximumexposure
    maximumExposure(): CGFloat;
    setMaximumExposure(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644117-wantsexposureadaptation
    wantsExposureAdaptation(): BOOL;
    setWantsExposureAdaptation(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644093-exposureadaptationbrighteningspe
    exposureAdaptationBrighteningSpeedFactor(): CGFloat;
    setExposureAdaptationBrighteningSpeedFactor(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644094-exposureadaptationdarkeningspeed
    exposureAdaptationDarkeningSpeedFactor(): CGFloat;
    setExposureAdaptationDarkeningSpeedFactor(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644112-contrast
    contrast(): CGFloat;
    setContrast(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644100-saturation
    saturation(): CGFloat;
    setSaturation(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644114-colorgrading
    colorGrading(): SCNMaterialProperty;
    setColorGrading(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644104-bloomintensity
    bloomIntensity(): CGFloat;
    setBloomIntensity(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644098-bloomthreshold
    bloomThreshold(): CGFloat;
    setBloomThreshold(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644096-bloomblurradius
    bloomBlurRadius(): CGFloat;
    setBloomBlurRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644108-colorfringeintensity
    colorFringeIntensity(): CGFloat;
    setColorFringeIntensity(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644113-colorfringestrength
    colorFringeStrength(): CGFloat;
    setColorFringeStrength(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644106-vignettingintensity
    vignettingIntensity(): CGFloat;
    setVignettingIntensity(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1644118-vignettingpower
    vignettingPower(): CGFloat;
    setVignettingPower(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/2874249-screenspaceambientocclusioninten
    screenSpaceAmbientOcclusionIntensity(): CGFloat;
    setScreenSpaceAmbientOcclusionIntensity(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/2874248-screenspaceambientocclusionradiu
    screenSpaceAmbientOcclusionRadius(): CGFloat;
    setScreenSpaceAmbientOcclusionRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/2874250-screenspaceambientocclusionbias
    screenSpaceAmbientOcclusionBias(): CGFloat;
    setScreenSpaceAmbientOcclusionBias(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/2874251-screenspaceambientocclusiondepth
    screenSpaceAmbientOcclusionDepthThreshold(): CGFloat;
    setScreenSpaceAmbientOcclusionDepthThreshold(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/2875550-screenspaceambientocclusionnorma
    screenSpaceAmbientOcclusionNormalThreshold(): CGFloat;
    setScreenSpaceAmbientOcclusionNormalThreshold(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1436598-yfov
    yFov(): number;
    setYFov(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1436608-xfov
    xFov(): number;
    setXFov(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1436600-focaldistance
    focalDistance(): CGFloat;
    setFocalDistance(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1436604-focalsize
    focalSize(): CGFloat;
    setFocalSize(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1436606-focalblurradius
    focalBlurRadius(): CGFloat;
    setFocalBlurRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/1436594-aperture
    aperture(): CGFloat;
    setAperture(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/3227909-bloomiterationcount
    bloomIterationCount(): NSInteger;
    setBloomIterationCount(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/3088922-bloomiterationspread
    bloomIterationSpread(): CGFloat;
    setBloomIterationSpread(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/3075417-grainintensity
    grainIntensity(): CGFloat;
    setGrainIntensity(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/3075418-grainiscolored
    grainIsColored(): BOOL;
    setGrainIsColored(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/3075419-grainscale
    grainScale(): CGFloat;
    setGrainScale(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/3088923-whitebalancetemperature
    whiteBalanceTemperature(): CGFloat;
    setWhiteBalanceTemperature(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/3088924-whitebalancetint
    whiteBalanceTint(): CGFloat;
    setWhiteBalanceTint(): void;
    // https://developer.apple.com/documentation/scenekit/scncamera/3123432-projectiontransformwithviewports
    projectionTransformWithViewportSize(viewportSize: CGSize):SCNMatrix4;
    // https://developer.apple.com/documentation/scenekit/scncamera/1436619-projectiontransform
    projectionTransform():SCNMatrix4;
    // https://developer.apple.com/documentation/scenekit/scncamera/1436590-setprojectiontransform
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
   * https://developer.apple.com/documentation/scenekit/scnmaterial
   */
  interface SCNMaterial extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462552-material
    material():SCNMaterial;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1419835-materialwithmdlmaterial
    materialWithMDLMaterial(mdlMaterial: MDLMaterial):SCNMaterial;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462525-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462518-lightingmodelname
    lightingModelName(): SCNLightingModel;
    setLightingModelName(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462589-diffuse
    diffuse(): SCNMaterialProperty;
    setDiffuse(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1640554-metalness
    metalness(): SCNMaterialProperty;
    setMetalness(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1640555-roughness
    roughness(): SCNMaterialProperty;
    setRoughness(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462542-normal
    normal(): SCNMaterialProperty;
    setNormal(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/2867516-displacement
    displacement(): SCNMaterialProperty;
    setDisplacement(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462527-emission
    emission(): SCNMaterialProperty;
    setEmission(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462524-selfillumination
    selfIllumination(): SCNMaterialProperty;
    setSelfIllumination(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462579-ambientocclusion
    ambientOcclusion(): SCNMaterialProperty;
    setAmbientOcclusion(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462589-diffuse
    diffuse(): SCNMaterialProperty;
    setDiffuse(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462558-ambient
    ambient(): SCNMaterialProperty;
    setAmbient(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462516-specular
    specular(): SCNMaterialProperty;
    setSpecular(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462520-reflective
    reflective(): SCNMaterialProperty;
    setReflective(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462575-multiply
    multiply(): SCNMaterialProperty;
    setMultiply(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462583-transparent
    transparent(): SCNMaterialProperty;
    setTransparent(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462533-shininess
    shininess(): CGFloat;
    setShininess(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462587-fresnelexponent
    fresnelExponent(): CGFloat;
    setFresnelExponent(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462522-locksambientwithdiffuse
    locksAmbientWithDiffuse(): BOOL;
    setLocksAmbientWithDiffuse(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462567-transparency
    transparency(): CGFloat;
    setTransparency(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462549-transparencymode
    transparencyMode(): SCNTransparencyMode;
    setTransparencyMode(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462585-blendmode
    blendMode(): SCNBlendMode;
    setBlendMode(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462580-litperpixel
    litPerPixel(): BOOL;
    setLitPerPixel(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462531-doublesided
    doubleSided(): BOOL;
    setDoubleSided(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462571-cullmode
    cullMode(): SCNCullMode;
    setCullMode(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/2867442-fillmode
    fillMode(): SCNFillMode;
    setFillMode(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462545-writestodepthbuffer
    writesToDepthBuffer(): BOOL;
    setWritesToDepthBuffer(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/1462562-readsfromdepthbuffer
    readsFromDepthBuffer(): BOOL;
    setReadsFromDepthBuffer(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/2867554-colorbufferwritemask
    colorBufferWriteMask(): SCNColorMask;
    setColorBufferWriteMask(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/3075420-clearcoat
    clearCoat(): SCNMaterialProperty;
    setClearCoat(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/3075421-clearcoatnormal
    clearCoatNormal(): SCNMaterialProperty;
    setClearCoatNormal(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterial/3075422-clearcoatroughness
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
   * https://developer.apple.com/documentation/scenekit/scnconstraint
   */
  interface SCNConstraint extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnconstraint/1468692-influencefactor
    influenceFactor(): CGFloat;
    setInfluenceFactor(): void;
    // https://developer.apple.com/documentation/scenekit/scnconstraint/2873378-enabled
    enabled(): BOOL;
    setEnabled(): void;
    // https://developer.apple.com/documentation/scenekit/scnconstraint/2867541-incremental
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
   * https://developer.apple.com/documentation/scenekit/scnphysicsshape
   */
  interface SCNPhysicsShape extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnphysicsshape/1508897-shapewithgeometry
    shapeWithGeometry_options(geometry: SCNGeometry, options: SCNPhysicsShape):SCNPhysicsShape;
    // https://developer.apple.com/documentation/scenekit/scnphysicsshape/1508889-shapewithnode
    shapeWithNode_options(node: any, options: SCNPhysicsShape):SCNPhysicsShape;
    // https://developer.apple.com/documentation/scenekit/scnphysicsshape/1508886-shapewithshapes
    shapeWithShapes_transforms(shapes: SCNPhysicsShape, transforms: NSValue):SCNPhysicsShape;
    // https://developer.apple.com/documentation/scenekit/scnphysicsshape/1508888-sourceobject
    sourceObject(): id;
    setSourceObject(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsshape/1508904-options
    options(): id;
    setOptions(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsshape/1508898-transforms
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
   * https://developer.apple.com/documentation/scenekit/scnphysicsbody
   */
  interface SCNPhysicsBody extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514797-bodywithtype
    bodyWithType_shape(type: SCNPhysicsBodyType, shape: SCNPhysicsShape):SCNPhysicsBody;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514791-staticbody
    staticBody():SCNPhysicsBody;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514766-dynamicbody
    dynamicBody():SCNPhysicsBody;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514776-kinematicbody
    kinematicBody():SCNPhysicsBody;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514789-physicsshape
    physicsShape(): SCNPhysicsShape;
    setPhysicsShape(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514787-type
    type(): SCNPhysicsBodyType;
    setType(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514753-velocityfactor
    velocityFactor(): SCNVector3;
    setVelocityFactor(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514748-angularvelocityfactor
    angularVelocityFactor(): SCNVector3;
    setAngularVelocityFactor(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514738-affectedbygravity
    affectedByGravity(): BOOL;
    setAffectedByGravity(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514755-mass
    mass(): CGFloat;
    setMass(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514786-charge
    charge(): CGFloat;
    setCharge(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514794-friction
    friction(): CGFloat;
    setFriction(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514737-rollingfriction
    rollingFriction(): CGFloat;
    setRollingFriction(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514740-restitution
    restitution(): CGFloat;
    setRestitution(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514763-damping
    damping(): CGFloat;
    setDamping(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514792-angulardamping
    angularDamping(): CGFloat;
    setAngularDamping(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514777-momentofinertia
    momentOfInertia(): SCNVector3;
    setMomentOfInertia(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514761-usesdefaultmomentofinertia
    usesDefaultMomentOfInertia(): BOOL;
    setUsesDefaultMomentOfInertia(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/3013742-centerofmassoffset
    centerOfMassOffset(): SCNVector3;
    setCenterOfMassOffset(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514768-categorybitmask
    categoryBitMask(): NSUInteger;
    setCategoryBitMask(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514746-contacttestbitmask
    contactTestBitMask(): NSUInteger;
    setContactTestBitMask(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514772-collisionbitmask
    collisionBitMask(): NSUInteger;
    setCollisionBitMask(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/3013743-continuouscollisiondetectionthre
    continuousCollisionDetectionThreshold(): CGFloat;
    setContinuousCollisionDetectionThreshold(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514801-applyforce
    applyForce_impulse(direction: SCNVector3, impulse: BOOL):void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514750-applyforce
    applyForce_atPosition_impulse(direction: SCNVector3, position: SCNVector3, impulse: BOOL):void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514752-applytorque
    applyTorque_impulse(torque: SCNVector4, impulse: BOOL):void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514735-clearallforces
    clearAllForces():void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514757-velocity
    velocity(): SCNVector3;
    setVelocity(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514770-angularvelocity
    angularVelocity(): SCNVector4;
    setAngularVelocity(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514795-isresting
    isResting(): BOOL;
    setIsResting(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514742-allowsresting
    allowsResting(): BOOL;
    setAllowsResting(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/3013745-setresting
    setResting(resting: BOOL):void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/1514782-resettransform
    resetTransform():void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/3022237-angularrestingthreshold
    angularRestingThreshold(): CGFloat;
    setAngularRestingThreshold(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsbody/3022238-linearrestingthreshold
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
   * https://developer.apple.com/documentation/scenekit/scntechnique
   */
  interface SCNTechnique extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scntechnique/1520494-techniquewithdictionary
    techniqueWithDictionary(dictionary: SCNTechnique):SCNTechnique;
    // https://developer.apple.com/documentation/scenekit/scntechnique/1520497-techniquebysequencingtechniques
    techniqueBySequencingTechniques(techniques: SCNTechnique):SCNTechnique;
    // https://developer.apple.com/documentation/scenekit/scntechnique/1520492-dictionaryrepresentation
    dictionaryRepresentation(): id;
    setDictionaryRepresentation(): void;
    // https://developer.apple.com/documentation/scenekit/scntechnique/1520490-handlebindingofsymbol
    handleBindingOfSymbol_usingBlock(symbol: string | cocoascript.NSString, block: SCNBindingBlock):void;
    // https://developer.apple.com/documentation/scenekit/scntechnique/1520495-setobject
    setObject_forKeyedSubscript(obj: SCNTechnique, key: NSCopying):void;
    // https://developer.apple.com/documentation/scenekit/scntechnique/1520493-objectforkeyedsubscript
    objectForKeyedSubscript(key: SCNTechnique):SCNTechnique;
    // https://developer.apple.com/documentation/scenekit/scntechnique/3229865-library
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
   * https://developer.apple.com/documentation/scenekit/scnlevelofdetail
   */
  interface SCNLevelOfDetail extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnlevelofdetail/1523557-levelofdetailwithgeometry
    levelOfDetailWithGeometry_screenSpaceRadius(geometry: SCNGeometry, radius: CGFloat):SCNLevelOfDetail;
    // https://developer.apple.com/documentation/scenekit/scnlevelofdetail/1522802-levelofdetailwithgeometry
    levelOfDetailWithGeometry_worldSpaceDistance(geometry: SCNGeometry, distance: CGFloat):SCNLevelOfDetail;
    // https://developer.apple.com/documentation/scenekit/scnlevelofdetail/1522819-geometry
    geometry(): SCNGeometry;
    setGeometry(): void;
    // https://developer.apple.com/documentation/scenekit/scnlevelofdetail/1523554-screenspaceradius
    screenSpaceRadius(): CGFloat;
    setScreenSpaceRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scnlevelofdetail/1524159-worldspacedistance
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
   * https://developer.apple.com/documentation/scenekit/scnaudiosource
   */
  interface SCNAudioSource extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnaudiosource/1524138-audiosourcenamed
    audioSourceNamed(fileName: string | cocoascript.NSString):SCNAudioSource;
    // https://developer.apple.com/documentation/scenekit/scnaudiosource/1524225-initwithfilenamed
    initWithFileNamed(name: string | cocoascript.NSString):SCNAudioSource;
    // https://developer.apple.com/documentation/scenekit/scnaudiosource/1523264-initwithurl
    initWithURL(url: NSURL):SCNAudioSource;
    // https://developer.apple.com/documentation/scenekit/scnaudiosource/1524185-positional
    positional(): BOOL;
    setPositional(): void;
    // https://developer.apple.com/documentation/scenekit/scnaudiosource/1523399-load
    load():void;
    // https://developer.apple.com/documentation/scenekit/scnaudiosource/1524106-volume
    volume(): number;
    setVolume(): void;
    // https://developer.apple.com/documentation/scenekit/scnaudiosource/1524189-rate
    rate(): number;
    setRate(): void;
    // https://developer.apple.com/documentation/scenekit/scnaudiosource/1523450-reverbblend
    reverbBlend(): number;
    setReverbBlend(): void;
    // https://developer.apple.com/documentation/scenekit/scnaudiosource/1524183-loops
    loops(): BOOL;
    setLoops(): void;
    // https://developer.apple.com/documentation/scenekit/scnaudiosource/1523475-shouldstream
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
   * https://developer.apple.com/documentation/scenekit/scnlight
   */
  interface SCNLight extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnlight/1542979-light
    light():SCNLight;
    // https://developer.apple.com/documentation/scenekit/scnlight/1419849-lightwithmdllight
    lightWithMDLLight(mdlLight: MDLLight):SCNLight;
    // https://developer.apple.com/documentation/scenekit/scnlight/1522919-type
    type(): SCNLightType;
    setType(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1523627-color
    color(): id;
    setColor(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1640545-temperature
    temperature(): CGFloat;
    setTemperature(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1640548-intensity
    intensity(): CGFloat;
    setIntensity(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/2921276-sphericalharmonicscoefficients
    sphericalHarmonicsCoefficients(): NSData;
    setSphericalHarmonicsCoefficients(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1522839-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1523345-attributeforkey
    attributeForKey(key: string | cocoascript.NSString):SCNLight;
    // https://developer.apple.com/documentation/scenekit/scnlight/1523148-setattribute
    setAttribute_forKey(attribute: SCNLight, key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1524223-attenuationstartdistance
    attenuationStartDistance(): CGFloat;
    setAttenuationStartDistance(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1524140-attenuationenddistance
    attenuationEndDistance(): CGFloat;
    setAttenuationEndDistance(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1522879-attenuationfalloffexponent
    attenuationFalloffExponent(): CGFloat;
    setAttenuationFalloffExponent(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1522797-spotinnerangle
    spotInnerAngle(): CGFloat;
    setSpotInnerAngle(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1523382-spotouterangle
    spotOuterAngle(): CGFloat;
    setSpotOuterAngle(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1523524-gobo
    gobo(): SCNMaterialProperty;
    setGobo(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1523816-castsshadow
    castsShadow(): BOOL;
    setCastsShadow(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1523724-shadowradius
    shadowRadius(): CGFloat;
    setShadowRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1522864-shadowcolor
    shadowColor(): id;
    setShadowColor(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1524127-shadowmapsize
    shadowMapSize(): CGSize;
    setShadowMapSize(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1523300-shadowsamplecount
    shadowSampleCount(): NSUInteger;
    setShadowSampleCount(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1522847-shadowmode
    shadowMode(): SCNShadowMode;
    setShadowMode(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1522849-shadowbias
    shadowBias(): CGFloat;
    setShadowBias(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1523951-orthographicscale
    orthographicScale(): CGFloat;
    setOrthographicScale(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1522845-zfar
    zFar(): CGFloat;
    setZFar(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1522630-znear
    zNear(): CGFloat;
    setZNear(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1523669-categorybitmask
    categoryBitMask(): NSUInteger;
    setCategoryBitMask(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/1640546-iesprofileurl
    IESProfileURL(): NSURL;
    setIESProfileURL(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/3042452-areaextents
    areaExtents(): simd_float3;
    setAreaExtents(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/3042453-areapolygonvertices
    areaPolygonVertices(): NSValue;
    setAreaPolygonVertices(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/3042454-areatype
    areaType(): SCNLightAreaType;
    setAreaType(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/2879207-automaticallyadjustsshadowprojec
    automaticallyAdjustsShadowProjection(): BOOL;
    setAutomaticallyAdjustsShadowProjection(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/3042455-doublesided
    doubleSided(): BOOL;
    setDoubleSided(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/3042456-drawsarea
    drawsArea(): BOOL;
    setDrawsArea(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/2879200-forcesbackfacecasters
    forcesBackFaceCasters(): BOOL;
    setForcesBackFaceCasters(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/2865867-maximumshadowdistance
    maximumShadowDistance(): CGFloat;
    setMaximumShadowDistance(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/3042457-parallaxcenteroffset
    parallaxCenterOffset(): simd_float3;
    setParallaxCenterOffset(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/3042458-parallaxcorrectionenabled
    parallaxCorrectionEnabled(): BOOL;
    setParallaxCorrectionEnabled(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/3042459-parallaxextentsfactor
    parallaxExtentsFactor(): simd_float3;
    setParallaxExtentsFactor(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/3042460-probeenvironment
    probeEnvironment(): SCNMaterialProperty;
    setProbeEnvironment(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/3042461-probeextents
    probeExtents(): simd_float3;
    setProbeExtents(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/3042462-probeoffset
    probeOffset(): simd_float3;
    setProbeOffset(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/3042463-probetype
    probeType(): SCNLightProbeType;
    setProbeType(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/3042464-probeupdatetype
    probeUpdateType(): SCNLightProbeUpdateType;
    setProbeUpdateType(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/2875915-sampledistributedshadowmaps
    sampleDistributedShadowMaps(): BOOL;
    setSampleDistributedShadowMaps(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/2865865-shadowcascadecount
    shadowCascadeCount(): NSUInteger;
    setShadowCascadeCount(): void;
    // https://developer.apple.com/documentation/scenekit/scnlight/2865866-shadowcascadesplittingfactor
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
   * https://developer.apple.com/documentation/scenekit/scnparticlesystem
   */
  interface SCNParticleSystem extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1564486-particlesystem
    particleSystem():SCNParticleSystem;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522772-particlesystemnamed
    particleSystemNamed_inDirectory(name: string | cocoascript.NSString, directory: string | cocoascript.NSString):SCNParticleSystem;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523998-emissionduration
    emissionDuration(): CGFloat;
    setEmissionDuration(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523842-emissiondurationvariation
    emissionDurationVariation(): CGFloat;
    setEmissionDurationVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522998-idleduration
    idleDuration(): CGFloat;
    setIdleDuration(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523018-idledurationvariation
    idleDurationVariation(): CGFloat;
    setIdleDurationVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522618-loops
    loops(): BOOL;
    setLoops(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522597-warmupduration
    warmupDuration(): CGFloat;
    setWarmupDuration(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522857-birthrate
    birthRate(): CGFloat;
    setBirthRate(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1524147-birthratevariation
    birthRateVariation(): CGFloat;
    setBirthRateVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522737-emittershape
    emitterShape(): SCNGeometry;
    setEmitterShape(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522899-birthlocation
    birthLocation(): SCNParticleBirthLocation;
    setBirthLocation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523361-birthdirection
    birthDirection(): SCNParticleBirthDirection;
    setBirthDirection(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523600-emittingdirection
    emittingDirection(): SCNVector3;
    setEmittingDirection(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522862-spreadingangle
    spreadingAngle(): CGFloat;
    setSpreadingAngle(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523896-particleangle
    particleAngle(): CGFloat;
    setParticleAngle(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522828-particleanglevariation
    particleAngleVariation(): CGFloat;
    setParticleAngleVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523946-particlevelocity
    particleVelocity(): CGFloat;
    setParticleVelocity(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1524157-particlevelocityvariation
    particleVelocityVariation(): CGFloat;
    setParticleVelocityVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522757-particleangularvelocity
    particleAngularVelocity(): CGFloat;
    setParticleAngularVelocity(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523590-particleangularvelocityvariation
    particleAngularVelocityVariation(): CGFloat;
    setParticleAngularVelocityVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523575-particlelifespan
    particleLifeSpan(): CGFloat;
    setParticleLifeSpan(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523567-particlelifespanvariation
    particleLifeSpanVariation(): CGFloat;
    setParticleLifeSpanVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523508-particlesize
    particleSize(): CGFloat;
    setParticleSize(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522716-particlesizevariation
    particleSizeVariation(): CGFloat;
    setParticleSizeVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523248-particlecolor
    particleColor(): UIColor;
    setParticleColor(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523639-particlecolorvariation
    particleColorVariation(): SCNVector4;
    setParticleColorVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1524153-particleimage
    particleImage(): id;
    setParticleImage(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523317-fresnelexponent
    fresnelExponent(): CGFloat;
    setFresnelExponent(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523338-stretchfactor
    stretchFactor(): CGFloat;
    setStretchFactor(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523340-imagesequencerowcount
    imageSequenceRowCount(): NSUInteger;
    setImageSequenceRowCount(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523462-imagesequencecolumncount
    imageSequenceColumnCount(): NSUInteger;
    setImageSequenceColumnCount(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523511-imagesequenceinitialframe
    imageSequenceInitialFrame(): CGFloat;
    setImageSequenceInitialFrame(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523821-imagesequenceinitialframevariati
    imageSequenceInitialFrameVariation(): CGFloat;
    setImageSequenceInitialFrameVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1524075-imagesequenceframerate
    imageSequenceFrameRate(): CGFloat;
    setImageSequenceFrameRate(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523667-imagesequenceframeratevariation
    imageSequenceFrameRateVariation(): CGFloat;
    setImageSequenceFrameRateVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522816-imagesequenceanimationmode
    imageSequenceAnimationMode(): SCNParticleImageSequenceAnimationMode;
    setImageSequenceAnimationMode(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523452-affectedbygravity
    affectedByGravity(): BOOL;
    setAffectedByGravity(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523353-affectedbyphysicsfields
    affectedByPhysicsFields(): BOOL;
    setAffectedByPhysicsFields(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523516-collidernodes
    colliderNodes(): any;
    setColliderNodes(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523357-particlediesoncollision
    particleDiesOnCollision(): BOOL;
    setParticleDiesOnCollision(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522766-acceleration
    acceleration(): SCNVector3;
    setAcceleration(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522931-dampingfactor
    dampingFactor(): CGFloat;
    setDampingFactor(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522607-particlemass
    particleMass(): CGFloat;
    setParticleMass(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523408-particlemassvariation
    particleMassVariation(): CGFloat;
    setParticleMassVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523156-particlecharge
    particleCharge(): CGFloat;
    setParticleCharge(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523377-particlechargevariation
    particleChargeVariation(): CGFloat;
    setParticleChargeVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522637-particlebounce
    particleBounce(): CGFloat;
    setParticleBounce(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522662-particlebouncevariation
    particleBounceVariation(): CGFloat;
    setParticleBounceVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1524010-particlefriction
    particleFriction(): CGFloat;
    setParticleFriction(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522868-particlefrictionvariation
    particleFrictionVariation(): CGFloat;
    setParticleFrictionVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1524068-systemspawnedoncollision
    systemSpawnedOnCollision(): SCNParticleSystem;
    setSystemSpawnedOnCollision(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1524091-systemspawnedondying
    systemSpawnedOnDying(): SCNParticleSystem;
    setSystemSpawnedOnDying(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522751-systemspawnedonliving
    systemSpawnedOnLiving(): SCNParticleSystem;
    setSystemSpawnedOnLiving(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523728-blendmode
    blendMode(): SCNParticleBlendMode;
    setBlendMode(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523131-orientationmode
    orientationMode(): SCNParticleOrientationMode;
    setOrientationMode(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522795-sortingmode
    sortingMode(): SCNParticleSortingMode;
    setSortingMode(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522794-lightingenabled
    lightingEnabled(): BOOL;
    setLightingEnabled(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523901-blackpassenabled
    blackPassEnabled(): BOOL;
    setBlackPassEnabled(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522855-local
    local(): BOOL;
    setLocal(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522968-reset
    reset():void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522988-speedfactor
    speedFactor(): CGFloat;
    setSpeedFactor(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523251-handleevent
    handleEvent_forProperties_withBlock(event: SCNParticleEvent, properties: SCNParticleProperty, block: SCNParticleEventBlock):void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522775-propertycontrollers
    propertyControllers(): SCNParticlePropertyController;
    setPropertyControllers(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1522635-addmodifierforproperties
    addModifierForProperties_atStage_withBlock(properties: SCNParticleProperty, stage: SCNParticleModifierStage, block: SCNParticleModifierBlock):void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1524077-removemodifiersofstage
    removeModifiersOfStage(stage: SCNParticleModifierStage):void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/1523614-removeallmodifiers
    removeAllModifiers():void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/2866184-orientationdirection
    orientationDirection(): SCNVector3;
    setOrientationDirection(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/2866186-particleintensity
    particleIntensity(): CGFloat;
    setParticleIntensity(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/2866185-particleintensityvariation
    particleIntensityVariation(): CGFloat;
    setParticleIntensityVariation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlesystem/3747130-writestodepthbuffer
    writesToDepthBuffer(): BOOL;
    setWritesToDepthBuffer(): void;
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
   * https://developer.apple.com/documentation/scenekit/scnparticlepropertycontroller
   */
  interface SCNParticlePropertyController extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnparticlepropertycontroller/1523579-controllerwithanimation
    controllerWithAnimation(animation: CAAnimation):SCNParticlePropertyController;
    // https://developer.apple.com/documentation/scenekit/scnparticlepropertycontroller/1523707-animation
    animation(): CAAnimation;
    setAnimation(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlepropertycontroller/1522852-inputmode
    inputMode(): SCNParticleInputMode;
    setInputMode(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlepropertycontroller/1523994-inputbias
    inputBias(): CGFloat;
    setInputBias(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlepropertycontroller/1522903-inputscale
    inputScale(): CGFloat;
    setInputScale(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlepropertycontroller/1522895-inputorigin
    inputOrigin(): any;
    setInputOrigin(): void;
    // https://developer.apple.com/documentation/scenekit/scnparticlepropertycontroller/1522973-inputproperty
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
   * https://developer.apple.com/documentation/scenekit/scnprogram
   */
  interface SCNProgram extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnprogram/1565076-program
    program():SCNProgram;
    // https://developer.apple.com/documentation/scenekit/scnprogram/1522891-vertexshader
    vertexShader(): string | cocoascript.NSString;
    setVertexShader(): void;
    // https://developer.apple.com/documentation/scenekit/scnprogram/1523135-fragmentshader
    fragmentShader(): string | cocoascript.NSString;
    setFragmentShader(): void;
    // https://developer.apple.com/documentation/scenekit/scnprogram/1524049-geometryshader
    geometryShader(): string | cocoascript.NSString;
    setGeometryShader(): void;
    // https://developer.apple.com/documentation/scenekit/scnprogram/1523852-tessellationcontrolshader
    tessellationControlShader(): string | cocoascript.NSString;
    setTessellationControlShader(): void;
    // https://developer.apple.com/documentation/scenekit/scnprogram/1523760-tessellationevaluationshader
    tessellationEvaluationShader(): string | cocoascript.NSString;
    setTessellationEvaluationShader(): void;
    // https://developer.apple.com/documentation/scenekit/scnprogram/1522730-setsemantic
    setSemantic_forSymbol_options(semantic: string | cocoascript.NSString, symbol: string | cocoascript.NSString, options: SCNProgram):void;
    // https://developer.apple.com/documentation/scenekit/scnprogram/1523350-semanticforsymbol
    semanticForSymbol(symbol: string | cocoascript.NSString):NSString;
    // https://developer.apple.com/documentation/scenekit/scnprogram/1522611-delegate
    delegate(): SCNProgramDelegate;
    setDelegate(): void;
    // https://developer.apple.com/documentation/scenekit/scnprogram/1522844-opaque
    opaque(): BOOL;
    setOpaque(): void;
    // https://developer.apple.com/documentation/scenekit/scnprogram/1524047-handlebindingofbuffernamed
    handleBindingOfBufferNamed_frequency_usingBlock(name: string | cocoascript.NSString, frequency: SCNBufferFrequency, block: SCNBufferBindingBlock):void;
    // https://developer.apple.com/documentation/scenekit/scnprogram/1522799-vertexfunctionname
    vertexFunctionName(): string | cocoascript.NSString;
    setVertexFunctionName(): void;
    // https://developer.apple.com/documentation/scenekit/scnprogram/1524012-fragmentfunctionname
    fragmentFunctionName(): string | cocoascript.NSString;
    setFragmentFunctionName(): void;
    // https://developer.apple.com/documentation/scenekit/scnprogram/1522934-library
    library(): MTLLibrary;
    setLibrary(): void;
    //
    alloc():SCNProgram;
    //
    init():SCNProgram;
  }
}

declare const SCNProgram: cocoascript.SCNProgram;
// https://developer.apple.com/documentation/scenekit/scnprogrammappingchannelkey
declare const SCNProgramMappingChannelKey: cocoascript.NSString;
// https://developer.apple.com/documentation/scenekit/scnmodeltransform
declare const SCNModelTransform: cocoascript.NSString;
// https://developer.apple.com/documentation/scenekit/scnmodelviewprojectiontransform
declare const SCNModelViewProjectionTransform: cocoascript.NSString;
// https://developer.apple.com/documentation/scenekit/scnmodelviewtransform
declare const SCNModelViewTransform: cocoascript.NSString;
// https://developer.apple.com/documentation/scenekit/scnnormaltransform
declare const SCNNormalTransform: cocoascript.NSString;
// https://developer.apple.com/documentation/scenekit/scnprojectiontransform
declare const SCNProjectionTransform: cocoascript.NSString;
// https://developer.apple.com/documentation/scenekit/scnviewtransform
declare const SCNViewTransform: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A simple, reusable animation that changes attributes of any node you attach it to.
   * https://developer.apple.com/documentation/scenekit/scnaction
   */
  interface SCNAction extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnaction/1523238-movebyx
    moveByX_y_z_duration(deltaX: CGFloat, deltaY: CGFloat, deltaZ: CGFloat, duration: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1522605-moveby
    moveBy_duration(delta: SCNVector3, duration: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1522826-moveto
    moveTo_duration(location: SCNVector3, duration: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1523522-rotatebyx
    rotateByX_y_z_duration(xAngle: CGFloat, yAngle: CGFloat, zAngle: CGFloat, duration: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1524044-rotatetox
    rotateToX_y_z_duration(xAngle: CGFloat, yAngle: CGFloat, zAngle: CGFloat, duration: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1522808-rotatetox
    rotateToX_y_z_duration_shortestUnitArc(xAngle: CGFloat, yAngle: CGFloat, zAngle: CGFloat, duration: NSTimeInterval, shortestUnitArc: BOOL):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1523805-rotatebyangle
    rotateByAngle_aroundAxis_duration(angle: CGFloat, axis: SCNVector3, duration: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1524191-rotatetoaxisangle
    rotateToAxisAngle_duration(axisAngle: SCNVector4, duration: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1523129-scaleby
    scaleBy_duration(scale: CGFloat, sec: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1523322-scaleto
    scaleTo_duration(scale: CGFloat, sec: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1522777-fadeinwithduration
    fadeInWithDuration(sec: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1523922-fadeoutwithduration
    fadeOutWithDuration(sec: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1523595-fadeopacityby
    fadeOpacityBy_duration(factor: CGFloat, sec: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1523875-fadeopacityto
    fadeOpacityTo_duration(opacity: CGFloat, sec: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1523487-hide
    hide():SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1524205-unhide
    unhide():SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1522966-removefromparentnode
    removeFromParentNode():SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1523651-playaudiosource
    playAudioSource_waitForCompletion(source: SCNAudioSource, wait: BOOL):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1522779-group
    group(actions: SCNAction):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1522793-sequence
    sequence(actions: SCNAction):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1522764-repeataction
    repeatAction_count(action: SCNAction, count: NSUInteger):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1522908-repeatactionforever
    repeatActionForever(action: SCNAction):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1523915-waitforduration
    waitForDuration(sec: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1523086-waitforduration
    waitForDuration_withRange(sec: NSTimeInterval, durationRange: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1523637-runblock
    runBlock(block: any):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1522875-runblock
    runBlock_queue(block: any, queue: dispatch_queue_t):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1523692-customactionwithduration
    customActionWithDuration_actionBlock(seconds: NSTimeInterval, block: CGFloat):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1523984-javascriptactionwithscript
    javaScriptActionWithScript_duration(script: string | cocoascript.NSString, seconds: NSTimeInterval):SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1522815-reversedaction
    reversedAction():SCNAction;
    // https://developer.apple.com/documentation/scenekit/scnaction/1524162-duration
    duration(): NSTimeInterval;
    setDuration(): void;
    // https://developer.apple.com/documentation/scenekit/scnaction/1522811-speed
    speed(): CGFloat;
    setSpeed(): void;
    // https://developer.apple.com/documentation/scenekit/scnaction/1524055-timingmode
    timingMode(): SCNActionTimingMode;
    setTimingMode(): void;
    // https://developer.apple.com/documentation/scenekit/scnaction/1524130-timingfunction
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
   * https://developer.apple.com/documentation/scenekit/scngeometry
   */
  interface SCNGeometry extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scngeometry/1522803-geometrywithsources
    geometryWithSources_elements(sources: SCNGeometrySource, elements: SCNGeometryElement):SCNGeometry;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1585530-geometry
    geometry():SCNGeometry;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1419845-geometrywithmdlmesh
    geometryWithMDLMesh(mdlMesh: MDLMesh):SCNGeometry;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1522953-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1523472-materials
    materials(): SCNMaterial;
    setMaterials(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1523485-firstmaterial
    firstMaterial(): SCNMaterial;
    setFirstMaterial(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1523789-materialwithname
    materialWithName(name: string | cocoascript.NSString):SCNMaterial;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1522876-insertmaterial
    insertMaterial_atIndex(material: SCNMaterial, index: NSUInteger):void;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1522646-removematerialatindex
    removeMaterialAtIndex(index: NSUInteger):void;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1522714-replacematerialatindex
    replaceMaterialAtIndex_withMaterial(index: NSUInteger, material: SCNMaterial):void;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1523046-geometryelements
    geometryElements(): SCNGeometryElement;
    setGeometryElements(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1523662-geometrysources
    geometrySources(): SCNGeometrySource;
    setGeometrySources(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1523800-geometryelementcount
    geometryElementCount(): NSInteger;
    setGeometryElementCount(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1523266-geometryelementatindex
    geometryElementAtIndex(elementIndex: NSInteger):SCNGeometryElement;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1522926-geometrysourcesforsemantic
    geometrySourcesForSemantic(semantic: SCNGeometrySourceSemantic):SCNGeometrySource;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1523745-levelsofdetail
    levelsOfDetail(): SCNLevelOfDetail;
    setLevelsOfDetail(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1524177-subdivisionlevel
    subdivisionLevel(): NSUInteger;
    setSubdivisionLevel(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1523246-edgecreaseselement
    edgeCreasesElement(): SCNGeometryElement;
    setEdgeCreasesElement(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometry/1523479-edgecreasessource
    edgeCreasesSource(): SCNGeometrySource;
    setEdgeCreasesSource(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometry/2888353-wantsadaptivesubdivision
    wantsAdaptiveSubdivision(): BOOL;
    setWantsAdaptiveSubdivision(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometry/2867472-tessellator
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
   * https://developer.apple.com/documentation/scenekit/scnanimationplayer
   */
  interface SCNAnimationPlayer extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnanimationplayer/2866046-animationplayerwithanimation
    animationPlayerWithAnimation(animation: SCNAnimation):SCNAnimationPlayer;
    // https://developer.apple.com/documentation/scenekit/scnanimationplayer/2866065-animation
    animation(): SCNAnimation;
    setAnimation(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimationplayer/2881688-blendfactor
    blendFactor(): CGFloat;
    setBlendFactor(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimationplayer/2866058-paused
    paused(): BOOL;
    setPaused(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimationplayer/2866041-speed
    speed(): CGFloat;
    setSpeed(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimationplayer/2866049-play
    play():void;
    // https://developer.apple.com/documentation/scenekit/scnanimationplayer/2866055-stop
    stop():void;
    // https://developer.apple.com/documentation/scenekit/scnanimationplayer/2887037-stopwithblendoutduration
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
   * https://developer.apple.com/documentation/scenekit/scnanimation-erl
   */
  interface SCNAnimation extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnanimation/2866056-animationwithcaanimation
    animationWithCAAnimation(caAnimation: CAAnimation):SCNAnimation;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2866053-animationwithcontentsofurl
    animationWithContentsOfURL(animationUrl: NSURL):SCNAnimation;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2866042-animationnamed
    animationNamed(animationName: string | cocoascript.NSString):SCNAnimation;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2866063-animationdidstart
    animationDidStart(): SCNAnimationDidStartBlock;
    setAnimationDidStart(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2866040-animationdidstop
    animationDidStop(): SCNAnimationDidStopBlock;
    setAnimationDidStop(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2866038-animationevents
    animationEvents(): SCNAnimationEvent;
    setAnimationEvents(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2878140-autoreverses
    autoreverses(): BOOL;
    setAutoreverses(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2881689-blendinduration
    blendInDuration(): NSTimeInterval;
    setBlendInDuration(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2881690-blendoutduration
    blendOutDuration(): NSTimeInterval;
    setBlendOutDuration(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2866057-duration
    duration(): NSTimeInterval;
    setDuration(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2878138-fillsbackward
    fillsBackward(): BOOL;
    setFillsBackward(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2878132-fillsforward
    fillsForward(): BOOL;
    setFillsForward(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2866062-additive
    additive(): BOOL;
    setAdditive(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2878139-appliedoncompletion
    appliedOnCompletion(): BOOL;
    setAppliedOnCompletion(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2866047-cumulative
    cumulative(): BOOL;
    setCumulative(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2878126-removedoncompletion
    removedOnCompletion(): BOOL;
    setRemovedOnCompletion(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2878148-keypath
    keyPath(): string | cocoascript.NSString;
    setKeyPath(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2878146-repeatcount
    repeatCount(): CGFloat;
    setRepeatCount(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2878135-startdelay
    startDelay(): NSTimeInterval;
    setStartDelay(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2878147-timeoffset
    timeOffset(): NSTimeInterval;
    setTimeOffset(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2878143-timingfunction
    timingFunction(): SCNTimingFunction;
    setTimingFunction(): void;
    // https://developer.apple.com/documentation/scenekit/scnanimation/2878127-usesscenetimebase
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
   * https://developer.apple.com/documentation/scenekit/scngeometrytessellator
   */
  interface SCNGeometryTessellator extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scngeometrytessellator/2889889-smoothingmode
    smoothingMode(): SCNTessellationSmoothingMode;
    setSmoothingMode(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometrytessellator/2889886-edgetessellationfactor
    edgeTessellationFactor(): CGFloat;
    setEdgeTessellationFactor(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometrytessellator/2889878-insidetessellationfactor
    insideTessellationFactor(): CGFloat;
    setInsideTessellationFactor(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometrytessellator/2889881-adaptive
    adaptive(): BOOL;
    setAdaptive(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometrytessellator/2889879-screenspace
    screenSpace(): BOOL;
    setScreenSpace(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometrytessellator/2889888-maximumedgelength
    maximumEdgeLength(): CGFloat;
    setMaximumEdgeLength(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometrytessellator/2889887-tessellationfactorscale
    tessellationFactorScale(): CGFloat;
    setTessellationFactorScale(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometrytessellator/2889882-tessellationpartitionmode
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
   * https://developer.apple.com/documentation/scenekit/scnphysicsbehavior
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
   * https://developer.apple.com/documentation/scenekit/scnmaterialproperty
   */
  interface SCNMaterialProperty extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnmaterialproperty/1395386-materialpropertywithcontents
    materialPropertyWithContents(contents: SCNMaterialProperty):SCNMaterialProperty;
    // https://developer.apple.com/documentation/scenekit/scnmaterialproperty/1395372-contents
    contents(): id;
    setContents(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterialproperty/1395407-intensity
    intensity(): CGFloat;
    setIntensity(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterialproperty/1395388-contentstransform
    contentsTransform(): SCNMatrix4;
    setContentsTransform(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterialproperty/1395384-wraps
    wrapS(): SCNWrapMode;
    setWrapS(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterialproperty/1395382-wrapt
    wrapT(): SCNWrapMode;
    setWrapT(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterialproperty/1395390-minificationfilter
    minificationFilter(): SCNFilterMode;
    setMinificationFilter(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterialproperty/1395378-magnificationfilter
    magnificationFilter(): SCNFilterMode;
    setMagnificationFilter(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterialproperty/1395398-mipfilter
    mipFilter(): SCNFilterMode;
    setMipFilter(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterialproperty/1395402-maxanisotropy
    maxAnisotropy(): CGFloat;
    setMaxAnisotropy(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterialproperty/1395405-mappingchannel
    mappingChannel(): NSInteger;
    setMappingChannel(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterialproperty/1395376-bordercolor
    borderColor(): id;
    setBorderColor(): void;
    // https://developer.apple.com/documentation/scenekit/scnmaterialproperty/2865880-texturecomponents
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
   * https://developer.apple.com/documentation/scenekit/scnphysicsworld
   */
  interface SCNPhysicsWorld extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnphysicsworld/1512855-gravity
    gravity(): SCNVector3;
    setGravity(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsworld/1512851-speed
    speed(): CGFloat;
    setSpeed(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsworld/1512881-timestep
    timeStep(): NSTimeInterval;
    setTimeStep(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsworld/1512877-updatecollisionpairs
    updateCollisionPairs():void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsworld/1512839-addbehavior
    addBehavior(behavior: SCNPhysicsBehavior):void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsworld/1512870-removebehavior
    removeBehavior(behavior: SCNPhysicsBehavior):void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsworld/1512853-allbehaviors
    allBehaviors(): SCNPhysicsBehavior;
    setAllBehaviors(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsworld/1512849-removeallbehaviors
    removeAllBehaviors():void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsworld/1512843-contactdelegate
    contactDelegate(): SCNPhysicsContactDelegate;
    setContactDelegate(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsworld/1512875-contacttestbetweenbody
    contactTestBetweenBody_andBody_options(bodyA: SCNPhysicsBody, bodyB: SCNPhysicsBody, options: SCNPhysicsWorld):SCNPhysicsContact;
    // https://developer.apple.com/documentation/scenekit/scnphysicsworld/1512841-contacttestwithbody
    contactTestWithBody_options(body: SCNPhysicsBody, options: SCNPhysicsWorld):SCNPhysicsContact;
    // https://developer.apple.com/documentation/scenekit/scnphysicsworld/1512857-raytestwithsegmentfrompoint
    rayTestWithSegmentFromPoint_toPoint_options(origin: SCNVector3, dest: SCNVector3, options: SCNPhysicsWorld):any;
    // https://developer.apple.com/documentation/scenekit/scnphysicsworld/1512859-convexsweeptestwithshape
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
   * https://developer.apple.com/documentation/scenekit/scnskinner
   */
  interface SCNSkinner extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnskinner/1523964-skinnerwithbasegeometry
    skinnerWithBaseGeometry_bones_boneInverseBindTransforms_boneWeights_boneIndices(baseGeometry: SCNGeometry, bones: any, boneInverseBindTransforms: NSValue, boneWeights: SCNGeometrySource, boneIndices: SCNGeometrySource):SCNSkinner;
    // https://developer.apple.com/documentation/scenekit/scnskinner/1522823-basegeometry
    baseGeometry(): SCNGeometry;
    setBaseGeometry(): void;
    // https://developer.apple.com/documentation/scenekit/scnskinner/1523160-basegeometrybindtransform
    baseGeometryBindTransform(): SCNMatrix4;
    setBaseGeometryBindTransform(): void;
    // https://developer.apple.com/documentation/scenekit/scnskinner/1523048-skeleton
    skeleton(): any;
    setSkeleton(): void;
    // https://developer.apple.com/documentation/scenekit/scnskinner/1522732-bones
    bones(): any;
    setBones(): void;
    // https://developer.apple.com/documentation/scenekit/scnskinner/1523802-boneinversebindtransforms
    boneInverseBindTransforms(): NSValue;
    setBoneInverseBindTransforms(): void;
    // https://developer.apple.com/documentation/scenekit/scnskinner/1522986-boneweights
    boneWeights(): SCNGeometrySource;
    setBoneWeights(): void;
    // https://developer.apple.com/documentation/scenekit/scnskinner/1524117-boneindices
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
   * https://developer.apple.com/documentation/scenekit/scnmorpher
   */
  interface SCNMorpher extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnmorpher/1523572-targets
    targets(): SCNGeometry;
    setTargets(): void;
    // https://developer.apple.com/documentation/scenekit/scnmorpher/1522940-weightfortargetatindex
    weightForTargetAtIndex(targetIndex: NSUInteger):CGFloat;
    // https://developer.apple.com/documentation/scenekit/scnmorpher/1522886-setweight
    setWeight_forTargetAtIndex(weight: CGFloat, targetIndex: NSUInteger):void;
    // https://developer.apple.com/documentation/scenekit/scnmorpher/1523754-calculationmode
    calculationMode(): SCNMorpherCalculationMode;
    setCalculationMode(): void;
    // https://developer.apple.com/documentation/scenekit/scnmorpher/2875540-unifiesnormals
    unifiesNormals(): BOOL;
    setUnifiesNormals(): void;
    // https://developer.apple.com/documentation/scenekit/scnmorpher/2873319-weights
    weights(): NSNumber;
    setWeights(): void;
    // https://developer.apple.com/documentation/scenekit/scnmorpher/2915238-setweight
    setWeight_forTargetNamed(weight: CGFloat, targetName: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/scenekit/scnmorpher/2915239-weightfortargetnamed
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
   * https://developer.apple.com/documentation/scenekit/scnscene
   */
  interface SCNScene extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnscene/1574179-scene
    scene():any;
    // https://developer.apple.com/documentation/scenekit/scnscene/1523355-scenenamed
    sceneNamed(name: string | cocoascript.NSString):any;
    // https://developer.apple.com/documentation/scenekit/scnscene/1522851-scenenamed
    sceneNamed_inDirectory_options(name: string | cocoascript.NSString, directory: string | cocoascript.NSString, options: any):any;
    // https://developer.apple.com/documentation/scenekit/scnscene/1522660-scenewithurl
    sceneWithURL_options_error(url: NSURL, options: any, error: NSError):any;
    // https://developer.apple.com/documentation/scenekit/scnscene/1419833-scenewithmdlasset
    sceneWithMDLAsset(mdlAsset: MDLAsset):any;
    // https://developer.apple.com/documentation/scenekit/scnscene/1523604-paused
    paused(): BOOL;
    setPaused(): void;
    // https://developer.apple.com/documentation/scenekit/scnscene/1524029-rootnode
    rootNode(): any;
    setRootNode(): void;
    // https://developer.apple.com/documentation/scenekit/scnscene/1523665-background
    background(): SCNMaterialProperty;
    setBackground(): void;
    // https://developer.apple.com/documentation/scenekit/scnscene/1639532-lightingenvironment
    lightingEnvironment(): SCNMaterialProperty;
    setLightingEnvironment(): void;
    // https://developer.apple.com/documentation/scenekit/scnscene/1522858-attributeforkey
    attributeForKey(key: string | cocoascript.NSString):any;
    // https://developer.apple.com/documentation/scenekit/scnscene/1524229-setattribute
    setAttribute_forKey(attribute: any, key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/scenekit/scnscene/1523577-writetourl
    writeToURL_options_delegate_progressHandler(url: NSURL, options: any, delegate: SCNSceneExportDelegate, progressHandler: SCNSceneExportProgressHandler):BOOL;
    // https://developer.apple.com/documentation/scenekit/scnscene/1522790-fogstartdistance
    fogStartDistance(): CGFloat;
    setFogStartDistance(): void;
    // https://developer.apple.com/documentation/scenekit/scnscene/1523836-fogenddistance
    fogEndDistance(): CGFloat;
    setFogEndDistance(): void;
    // https://developer.apple.com/documentation/scenekit/scnscene/1523776-fogdensityexponent
    fogDensityExponent(): CGFloat;
    setFogDensityExponent(): void;
    // https://developer.apple.com/documentation/scenekit/scnscene/1522774-fogcolor
    fogColor(): id;
    setFogColor(): void;
    // https://developer.apple.com/documentation/scenekit/scnscene/1522643-physicsworld
    physicsWorld(): SCNPhysicsWorld;
    setPhysicsWorld(): void;
    // https://developer.apple.com/documentation/scenekit/scnscene/1523359-addparticlesystem
    addParticleSystem_withTransform(system: SCNParticleSystem, transform: SCNMatrix4):void;
    // https://developer.apple.com/documentation/scenekit/scnscene/1522787-particlesystems
    particleSystems(): SCNParticleSystem;
    setParticleSystems(): void;
    // https://developer.apple.com/documentation/scenekit/scnscene/1523498-removeparticlesystem
    removeParticleSystem(system: SCNParticleSystem):void;
    // https://developer.apple.com/documentation/scenekit/scnscene/1522786-removeallparticlesystems
    removeAllParticleSystems():void;
    // https://developer.apple.com/documentation/scenekit/scnscene/3227910-screenspacereflectionmaximumdist
    screenSpaceReflectionMaximumDistance(): CGFloat;
    setScreenSpaceReflectionMaximumDistance(): void;
    // https://developer.apple.com/documentation/scenekit/scnscene/3075424-screenspacereflectionsamplecount
    screenSpaceReflectionSampleCount(): NSInteger;
    setScreenSpaceReflectionSampleCount(): void;
    // https://developer.apple.com/documentation/scenekit/scnscene/3227911-screenspacereflectionstride
    screenSpaceReflectionStride(): CGFloat;
    setScreenSpaceReflectionStride(): void;
    // https://developer.apple.com/documentation/scenekit/scnscene/3075425-wantsscreenspacereflection
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
   * https://developer.apple.com/documentation/scenekit/scngeometrysource
   */
  interface SCNGeometrySource extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scngeometrysource/1523320-geometrysourcewithdata
    geometrySourceWithData_semantic_vectorCount_floatComponents_componentsPerVector_bytesPerComponent_dataOffset_dataStride(data: NSData, semantic: SCNGeometrySourceSemantic, vectorCount: NSInteger, floatComponents: BOOL, componentsPerVector: NSInteger, bytesPerComponent: NSInteger, offset: NSInteger, stride: NSInteger):SCNGeometrySource;
    // https://developer.apple.com/documentation/scenekit/scngeometrysource/1523882-geometrysourcewithvertices
    geometrySourceWithVertices_count(vertices: SCNVector3, count: NSInteger):SCNGeometrySource;
    // https://developer.apple.com/documentation/scenekit/scngeometrysource/1522882-geometrysourcewithnormals
    geometrySourceWithNormals_count(normals: SCNVector3, count: NSInteger):SCNGeometrySource;
    // https://developer.apple.com/documentation/scenekit/scngeometrysource/1522718-geometrysourcewithtexturecoordin
    geometrySourceWithTextureCoordinates_count(texcoord: CGPoint, count: NSInteger):SCNGeometrySource;
    // https://developer.apple.com/documentation/scenekit/scngeometrysource/1522881-data
    data(): NSData;
    setData(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometrysource/1523071-semantic
    semantic(): SCNGeometrySourceSemantic;
    setSemantic(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometrysource/1522648-vectorcount
    vectorCount(): NSInteger;
    setVectorCount(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometrysource/1522920-floatcomponents
    floatComponents(): BOOL;
    setFloatComponents(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometrysource/1522832-componentspervector
    componentsPerVector(): NSInteger;
    setComponentsPerVector(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometrysource/1522633-bytespercomponent
    bytesPerComponent(): NSInteger;
    setBytesPerComponent(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometrysource/1522834-dataoffset
    dataOffset(): NSInteger;
    setDataOffset(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometrysource/1524197-datastride
    dataStride(): NSInteger;
    setDataStride(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometrysource/1522873-geometrysourcewithbuffer
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
   * https://developer.apple.com/documentation/scenekit/scngeometryelement
   */
  interface SCNGeometryElement extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scngeometryelement/1522615-geometryelementwithdata
    geometryElementWithData_primitiveType_primitiveCount_bytesPerIndex(data: NSData, primitiveType: SCNGeometryPrimitiveType, primitiveCount: NSInteger, bytesPerIndex: NSInteger):SCNGeometryElement;
    // https://developer.apple.com/documentation/scenekit/scngeometryelement/1419843-geometryelementwithmdlsubmesh
    geometryElementWithMDLSubmesh(mdlSubMesh: MDLSubmesh):SCNGeometryElement;
    // https://developer.apple.com/documentation/scenekit/scngeometryelement/1523367-data
    data(): NSData;
    setData(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometryelement/1522720-bytesperindex
    bytesPerIndex(): NSInteger;
    setBytesPerIndex(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometryelement/1522917-primitivetype
    primitiveType(): SCNGeometryPrimitiveType;
    setPrimitiveType(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometryelement/1523404-primitivecount
    primitiveCount(): NSInteger;
    setPrimitiveCount(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometryelement/2867463-primitiverange
    primitiveRange(): NSRange;
    setPrimitiveRange(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometryelement/2867479-pointsize
    pointSize(): CGFloat;
    setPointSize(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometryelement/2867439-minimumpointscreenspaceradius
    minimumPointScreenSpaceRadius(): CGFloat;
    setMinimumPointScreenSpaceRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometryelement/2867561-maximumpointscreenspaceradius
    maximumPointScreenSpaceRadius(): CGFloat;
    setMaximumPointScreenSpaceRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scngeometryelement/3600286-geometryelementwithbuffer
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
   * https://developer.apple.com/documentation/scenekit/scntimingfunction
   */
  interface SCNTimingFunction extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scntimingfunction/2866052-functionwithcamediatimingfunctio
    functionWithCAMediaTimingFunction(caTimingFunction: CAMediaTimingFunction):SCNTimingFunction;
    // https://developer.apple.com/documentation/scenekit/scntimingfunction/2866061-functionwithtimingmode
    functionWithTimingMode(timingMode: SCNActionTimingMode):SCNTimingFunction;
    //
    alloc():SCNTimingFunction;
    //
    init():SCNTimingFunction;
  }
}

declare const SCNTimingFunction: cocoascript.SCNTimingFunction;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnmovabilityhint
  type SCNMovabilityHint = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnhittestoption
  type SCNHitTestOption = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnnodefocusbehavior
  type SCNNodeFocusBehavior = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A scene graph node that serves as a placeholder for content to be loaded from a separate scene file.
   * https://developer.apple.com/documentation/scenekit/scnreferencenode
   */
  interface SCNReferenceNode extends SCNNode {
    // https://developer.apple.com/documentation/scenekit/scnreferencenode/1523967-initwithurl
    initWithURL(referenceURL: NSURL):SCNReferenceNode;
    // https://developer.apple.com/documentation/scenekit/scnreferencenode/1551036-referencenodewithurl
    referenceNodeWithURL(referenceURL: NSURL):SCNReferenceNode;
    // https://developer.apple.com/documentation/scenekit/scnreferencenode/1522733-referenceurl
    referenceURL(): NSURL;
    setReferenceURL(): void;
    // https://developer.apple.com/documentation/scenekit/scnreferencenode/1522996-loadingpolicy
    loadingPolicy(): SCNReferenceLoadingPolicy;
    setLoadingPolicy(): void;
    // https://developer.apple.com/documentation/scenekit/scnreferencenode/1523204-load
    load():void;
    // https://developer.apple.com/documentation/scenekit/scnreferencenode/1523906-loaded
    loaded(): BOOL;
    setLoaded(): void;
    // https://developer.apple.com/documentation/scenekit/scnreferencenode/1523566-unload
    unload():void;
    // https://developer.apple.com/documentation/scenekit/scnreferencenode/1524061-initwithcoder
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
   * A view for displaying 3D SceneKit content.
   * https://developer.apple.com/documentation/scenekit/scnview
   */
  interface SCNView extends NSView {
    // https://developer.apple.com/documentation/scenekit/scnview/1524215-initwithframe
    initWithFrame_options(frame: CGRect, options: SCNView):SCNView;
    // https://developer.apple.com/documentation/scenekit/scnview/1523904-scene
    scene(): any;
    setScene(): void;
    // https://developer.apple.com/documentation/scenekit/scnview/1523088-backgroundcolor
    backgroundColor(): NSColor;
    setBackgroundColor(): void;
    // https://developer.apple.com/documentation/scenekit/scnview/1621205-preferredframespersecond
    preferredFramesPerSecond(): NSInteger;
    setPreferredFramesPerSecond(): void;
    // https://developer.apple.com/documentation/scenekit/scnview/2867339-renderscontinuously
    rendersContinuously(): BOOL;
    setRendersContinuously(): void;
    // https://developer.apple.com/documentation/scenekit/scnview/1524085-antialiasingmode
    antialiasingMode(): SCNAntialiasingMode;
    setAntialiasingMode(): void;
    // https://developer.apple.com/documentation/scenekit/scnview/1523171-allowscameracontrol
    allowsCameraControl(): BOOL;
    setAllowsCameraControl(): void;
    // https://developer.apple.com/documentation/scenekit/scnview/2867333-cameracontrolconfiguration
    cameraControlConfiguration(): SCNCameraControlConfiguration;
    setCameraControlConfiguration(): void;
    // https://developer.apple.com/documentation/scenekit/scnview/2867336-defaultcameracontroller
    defaultCameraController(): SCNCameraController;
    setDefaultCameraController(): void;
    // https://developer.apple.com/documentation/scenekit/scnview/1522825-pause
    pause(sender: SCNView):void;
    // https://developer.apple.com/documentation/scenekit/scnview/1523699-play
    play(sender: SCNView):void;
    // https://developer.apple.com/documentation/scenekit/scnview/1524132-stop
    stop(sender: SCNView):void;
    // https://developer.apple.com/documentation/scenekit/scnview/1524031-snapshot
    snapshot():UIImage;
    // https://developer.apple.com/documentation/scenekit/scnview/1621072-eaglcontext
    eaglContext(): EAGLContext;
    setEaglContext(): void;
    // https://developer.apple.com/documentation/scenekit/scnview/1522850-openglcontext
    openGLContext(): NSOpenGLContext;
    setOpenGLContext(): void;
    // https://developer.apple.com/documentation/scenekit/scnview/1523612-pixelformat
    pixelFormat(): NSOpenGLPixelFormat;
    setPixelFormat(): void;
    // https://developer.apple.com/documentation/scenekit/scnview/3242930-drawableresizesasynchronously
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
   * https://developer.apple.com/documentation/scenekit/scncameracontroller
   */
  interface SCNCameraController extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2873257-delegate
    delegate(): SCNCameraControllerDelegate;
    setDelegate(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2867559-automatictarget
    automaticTarget(): BOOL;
    setAutomaticTarget(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2867546-inertiaenabled
    inertiaEnabled(): BOOL;
    setInertiaEnabled(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2867498-inertiafriction
    inertiaFriction(): number;
    setInertiaFriction(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2867445-interactionmode
    interactionMode(): SCNInteractionMode;
    setInteractionMode(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2873256-inertiarunning
    inertiaRunning(): BOOL;
    setInertiaRunning(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2902228-maximumhorizontalangle
    maximumHorizontalAngle(): number;
    setMaximumHorizontalAngle(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2902227-maximumverticalangle
    maximumVerticalAngle(): number;
    setMaximumVerticalAngle(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2921252-minimumhorizontalangle
    minimumHorizontalAngle(): number;
    setMinimumHorizontalAngle(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2921251-minimumverticalangle
    minimumVerticalAngle(): number;
    setMinimumVerticalAngle(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2867440-pointofview
    pointOfView(): any;
    setPointOfView(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2867539-target
    target(): SCNVector3;
    setTarget(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2902229-worldup
    worldUp(): SCNVector3;
    setWorldUp(): void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2867444-begininteraction
    beginInteraction_withViewport(location: CGPoint, viewport: CGSize):void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2867500-clearroll
    clearRoll():void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2867496-continueinteraction
    continueInteraction_withViewport_sensitivity(location: CGPoint, viewport: CGSize, sensitivity: CGFloat):void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2919425-dollyby
    dollyBy_onScreenPoint_viewport(delta: number, point: CGPoint, viewport: CGSize):void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2919424-dollytotarget
    dollyToTarget(delta: number):void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2867469-endinteraction
    endInteraction_withViewport_velocity(location: CGPoint, viewport: CGSize, velocity: CGPoint):void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2875846-framenodes
    frameNodes(nodes: any):void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2867487-rollby
    rollBy_aroundScreenPoint_viewport(delta: number, point: CGPoint, viewport: CGSize):void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2881832-rollaroundtarget
    rollAroundTarget(delta: number):void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2867552-rotatebyx
    rotateByX_Y(deltaX: number, deltaY: number):void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2873258-stopinertia
    stopInertia():void;
    // https://developer.apple.com/documentation/scenekit/scncameracontroller/2867569-translateincameraspacebyx
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
   * https://developer.apple.com/documentation/scenekit/scntransaction
   */
  interface SCNTransaction extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scntransaction/1522820-begin
    begin():void;
    // https://developer.apple.com/documentation/scenekit/scntransaction/1523436-commit
    commit():void;
    // https://developer.apple.com/documentation/scenekit/scntransaction/1522860-flush
    flush():void;
    // https://developer.apple.com/documentation/scenekit/scntransaction/1523888-animationduration
    animationDuration(): CFTimeInterval;
    setAnimationDuration(): void;
    // https://developer.apple.com/documentation/scenekit/scntransaction/1522614-animationtimingfunction
    animationTimingFunction(): CAMediaTimingFunction;
    setAnimationTimingFunction(): void;
    // https://developer.apple.com/documentation/scenekit/scntransaction/1524238-disableactions
    disableActions(): BOOL;
    setDisableActions(): void;
    // https://developer.apple.com/documentation/scenekit/scntransaction/1523660-completionblock
    completionBlock(): void;
    setCompletionBlock(): void;
    // https://developer.apple.com/documentation/scenekit/scntransaction/1523078-lock
    lock():void;
    // https://developer.apple.com/documentation/scenekit/scntransaction/1523166-unlock
    unlock():void;
    // https://developer.apple.com/documentation/scenekit/scntransaction/1524124-setvalue
    setValue_forKey(value: SCNTransaction, key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/scenekit/scntransaction/1523919-valueforkey
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
   * https://developer.apple.com/documentation/scenekit/scnanimationevent
   */
  interface SCNAnimationEvent extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnanimationevent/1524004-animationeventwithkeytime
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
   * https://developer.apple.com/documentation/scenekit/scnlayer
   */
  interface SCNLayer extends CAOpenGLLayer {
    // https://developer.apple.com/documentation/scenekit/scnlayer/1393188-scene
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
   * https://developer.apple.com/documentation/scenekit/scnrenderer
   */
  interface SCNRenderer extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnrenderer/1518404-rendererwithdevice
    rendererWithDevice_options(device: any, options: NSDictionary):SCNRenderer;
    // https://developer.apple.com/documentation/scenekit/scnrenderer/1518408-rendererwithcontext
    rendererWithContext_options(context: EAGLContext, options: NSDictionary):SCNRenderer;
    // https://developer.apple.com/documentation/scenekit/scnrenderer/1518400-scene
    scene(): any;
    setScene(): void;
    // https://developer.apple.com/documentation/scenekit/scnrenderer/1518410-nextframetime
    nextFrameTime(): CFTimeInterval;
    setNextFrameTime(): void;
    // https://developer.apple.com/documentation/scenekit/scnrenderer/1518401-renderattime
    renderAtTime_viewport_commandBuffer_passDescriptor(time: CFTimeInterval, viewport: CGRect, commandBuffer: any, renderPassDescriptor: any):void;
    // https://developer.apple.com/documentation/scenekit/scnrenderer/1518403-render
    render():void;
    // https://developer.apple.com/documentation/scenekit/scnrenderer/1518402-renderattime
    renderAtTime(time: CFTimeInterval):void;
    // https://developer.apple.com/documentation/scenekit/scnrenderer/1641767-snapshotattime
    snapshotAtTime_withSize_antialiasingMode(time: CFTimeInterval, size: CGSize, antialiasingMode: SCNAntialiasingMode):UIImage;
    // https://developer.apple.com/documentation/scenekit/scnrenderer/2866140-renderwithviewport
    renderWithViewport_commandBuffer_passDescriptor(viewport: CGRect, commandBuffer: any, renderPassDescriptor: any):void;
    // https://developer.apple.com/documentation/scenekit/scnrenderer/2866142-updateattime
    updateAtTime(time: CFTimeInterval):void;
    // https://developer.apple.com/documentation/scenekit/scnrenderer/2097153-updateprobes
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
   * https://developer.apple.com/documentation/scenekit/scnhittestresult
   */
  interface SCNHitTestResult extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnhittestresult/1523256-node
    node(): any;
    setNode(): void;
    // https://developer.apple.com/documentation/scenekit/scnhittestresult/1522625-geometryindex
    geometryIndex(): NSInteger;
    setGeometryIndex(): void;
    // https://developer.apple.com/documentation/scenekit/scnhittestresult/1522888-faceindex
    faceIndex(): NSInteger;
    setFaceIndex(): void;
    // https://developer.apple.com/documentation/scenekit/scnhittestresult/1523032-localcoordinates
    localCoordinates(): SCNVector3;
    setLocalCoordinates(): void;
    // https://developer.apple.com/documentation/scenekit/scnhittestresult/1523058-worldcoordinates
    worldCoordinates(): SCNVector3;
    setWorldCoordinates(): void;
    // https://developer.apple.com/documentation/scenekit/scnhittestresult/1523953-localnormal
    localNormal(): SCNVector3;
    setLocalNormal(): void;
    // https://developer.apple.com/documentation/scenekit/scnhittestresult/1524066-worldnormal
    worldNormal(): SCNVector3;
    setWorldNormal(): void;
    // https://developer.apple.com/documentation/scenekit/scnhittestresult/1523496-modeltransform
    modelTransform(): SCNMatrix4;
    setModelTransform(): void;
    // https://developer.apple.com/documentation/scenekit/scnhittestresult/1522771-texturecoordinateswithmappingcha
    textureCoordinatesWithMappingChannel(channel: NSInteger):CGPoint;
    // https://developer.apple.com/documentation/scenekit/scnhittestresult/1823463-bonenode
    boneNode(): any;
    setBoneNode(): void;
    // https://developer.apple.com/documentation/scenekit/scnhittestresult/3042447-simdlocalcoordinates
    simdLocalCoordinates(): simd_float3;
    setSimdLocalCoordinates(): void;
    // https://developer.apple.com/documentation/scenekit/scnhittestresult/3042448-simdlocalnormal
    simdLocalNormal(): simd_float3;
    setSimdLocalNormal(): void;
    // https://developer.apple.com/documentation/scenekit/scnhittestresult/3042449-simdmodeltransform
    simdModelTransform(): simd_float4x4;
    setSimdModelTransform(): void;
    // https://developer.apple.com/documentation/scenekit/scnhittestresult/3042450-simdworldcoordinates
    simdWorldCoordinates(): simd_float3;
    setSimdWorldCoordinates(): void;
    // https://developer.apple.com/documentation/scenekit/scnhittestresult/3042451-simdworldnormal
    simdWorldNormal(): simd_float3;
    setSimdWorldNormal(): void;
    //
    alloc():any;
    //
    init():any;
  }
}

declare const SCNHitTestResult: any;
// https://developer.apple.com/documentation/scenekit/scnpreferredrenderingapikey
declare const SCNPreferredRenderingAPIKey: cocoascript.SCNViewOption;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scndebugoptions
  type SCNDebugOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnrenderingapi
  type SCNRenderingAPI = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  interface SCNVector3 {
  }
}
declare namespace cocoascript {
  interface SCNVector4 {
  }
}
// https://developer.apple.com/documentation/scenekit/scnshadermodifierentrypointgeometry
declare const SCNShaderModifierEntryPointGeometry: cocoascript.SCNShaderModifierEntryPoint;
// https://developer.apple.com/documentation/scenekit/scnshadermodifierentrypointsurface
declare const SCNShaderModifierEntryPointSurface: cocoascript.SCNShaderModifierEntryPoint;
// https://developer.apple.com/documentation/scenekit/scnshadermodifierentrypointlightingmodel
declare const SCNShaderModifierEntryPointLightingModel: cocoascript.SCNShaderModifierEntryPoint;
// https://developer.apple.com/documentation/scenekit/scnshadermodifierentrypointfragment
declare const SCNShaderModifierEntryPointFragment: cocoascript.SCNShaderModifierEntryPoint;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnbindingblock
  type SCNBindingBlock = cocoascript.SCNRenderer;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnshadermodifierentrypoint
  type SCNShaderModifierEntryPoint = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/scenekit/scnavoidoccluderconstraint
   */
  interface SCNAvoidOccluderConstraint extends SCNConstraint {
    // https://developer.apple.com/documentation/scenekit/scnavoidoccluderconstraint/2873380-avoidoccluderconstraintwithtarge
    avoidOccluderConstraintWithTarget(target: any):SCNAvoidOccluderConstraint;
    // https://developer.apple.com/documentation/scenekit/scnavoidoccluderconstraint/2873377-bias
    bias(): CGFloat;
    setBias(): void;
    // https://developer.apple.com/documentation/scenekit/scnavoidoccluderconstraint/2873376-occludercategorybitmask
    occluderCategoryBitMask(): NSUInteger;
    setOccluderCategoryBitMask(): void;
    // https://developer.apple.com/documentation/scenekit/scnavoidoccluderconstraint/2873370-target
    target(): any;
    setTarget(): void;
    // https://developer.apple.com/documentation/scenekit/scnavoidoccluderconstraint/2878131-delegate
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
   * https://developer.apple.com/documentation/scenekit/scnphysicscontact
   */
  interface SCNPhysicsContact extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnphysicscontact/1523445-nodea
    nodeA(): any;
    setNodeA(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicscontact/1524232-nodeb
    nodeB(): any;
    setNodeB(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicscontact/1523810-contactpoint
    contactPoint(): SCNVector3;
    setContactPoint(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicscontact/1522833-contactnormal
    contactNormal(): SCNVector3;
    setContactNormal(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicscontact/1523944-collisionimpulse
    collisionImpulse(): CGFloat;
    setCollisionImpulse(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicscontact/1522870-penetrationdistance
    penetrationDistance(): CGFloat;
    setPenetrationDistance(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicscontact/2902236-sweeptestfraction
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
   * https://developer.apple.com/documentation/scenekit/scnphysicsvehicle
   */
  interface SCNPhysicsVehicle extends SCNPhysicsBehavior {
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehicle/1387943-vehiclewithchassisbody
    vehicleWithChassisBody_wheels(chassisBody: SCNPhysicsBody, wheels: SCNPhysicsVehicleWheel):SCNPhysicsVehicle;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehicle/1387985-chassisbody
    chassisBody(): SCNPhysicsBody;
    setChassisBody(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehicle/1387906-wheels
    wheels(): SCNPhysicsVehicleWheel;
    setWheels(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehicle/1387963-applyengineforce
    applyEngineForce_forWheelAtIndex(value: CGFloat, index: NSInteger):void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehicle/1387894-applybrakingforce
    applyBrakingForce_forWheelAtIndex(value: CGFloat, index: NSInteger):void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehicle/1387952-setsteeringangle
    setSteeringAngle_forWheelAtIndex(value: CGFloat, index: NSInteger):void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsvehicle/1387910-speedinkilometersperhour
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
  // https://developer.apple.com/documentation/scenekit/scnfieldforceevaluator
  type SCNFieldForceEvaluator = cocoascript.NSTimeInterval;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnphysicsfieldscope
  type SCNPhysicsFieldScope = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A constraint that orients a node to always point toward a specified other node.
   * https://developer.apple.com/documentation/scenekit/scnlookatconstraint
   */
  interface SCNLookAtConstraint extends SCNConstraint {
    // https://developer.apple.com/documentation/scenekit/scnlookatconstraint/1468683-lookatconstraintwithtarget
    lookAtConstraintWithTarget(target: any):SCNLookAtConstraint;
    // https://developer.apple.com/documentation/scenekit/scnlookatconstraint/1468675-gimballockenabled
    gimbalLockEnabled(): BOOL;
    setGimbalLockEnabled(): void;
    // https://developer.apple.com/documentation/scenekit/scnlookatconstraint/1468677-target
    target():any;
    // https://developer.apple.com/documentation/scenekit/scnlookatconstraint/2867570-localfront
    localFront(): SCNVector3;
    setLocalFront(): void;
    // https://developer.apple.com/documentation/scenekit/scnlookatconstraint/2867488-targetoffset
    targetOffset(): SCNVector3;
    setTargetOffset(): void;
    // https://developer.apple.com/documentation/scenekit/scnlookatconstraint/2902240-worldup
    worldUp(): SCNVector3;
    setWorldUp(): void;
    // https://developer.apple.com/documentation/scenekit/scnlookatconstraint/1644027-settarget
    setTarget(target: any):void;
    //
    alloc():SCNLookAtConstraint;
    //
    init():SCNLookAtConstraint;
  }
}

declare const SCNLookAtConstraint: cocoascript.SCNLookAtConstraint;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scncameraprojectiondirection
  type SCNCameraProjectionDirection = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnlightingmodel
  type SCNLightingModel = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scntransparencymode
  type SCNTransparencyMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnblendmode
  type SCNBlendMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scncullmode
  type SCNCullMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnfillmode
  type SCNFillMode = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scncolormask
  type SCNColorMask = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A six-sided polyhedron geometry whose faces are all rectangles, optionally with rounded edges and corners.
   * https://developer.apple.com/documentation/scenekit/scnbox
   */
  interface SCNBox extends SCNGeometry {
    // https://developer.apple.com/documentation/scenekit/scnbox/1522620-boxwithwidth
    boxWithWidth_height_length_chamferRadius(width: CGFloat, height: CGFloat, length: CGFloat, chamferRadius: CGFloat):SCNBox;
    // https://developer.apple.com/documentation/scenekit/scnbox/1523898-width
    width(): CGFloat;
    setWidth(): void;
    // https://developer.apple.com/documentation/scenekit/scnbox/1522901-height
    height(): CGFloat;
    setHeight(): void;
    // https://developer.apple.com/documentation/scenekit/scnbox/1523514-length
    length(): CGFloat;
    setLength(): void;
    // https://developer.apple.com/documentation/scenekit/scnbox/1523559-widthsegmentcount
    widthSegmentCount(): NSInteger;
    setWidthSegmentCount(): void;
    // https://developer.apple.com/documentation/scenekit/scnbox/1522869-heightsegmentcount
    heightSegmentCount(): NSInteger;
    setHeightSegmentCount(): void;
    // https://developer.apple.com/documentation/scenekit/scnbox/1523721-lengthsegmentcount
    lengthSegmentCount(): NSInteger;
    setLengthSegmentCount(): void;
    // https://developer.apple.com/documentation/scenekit/scnbox/1523302-chamferradius
    chamferRadius(): CGFloat;
    setChamferRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scnbox/1522976-chamfersegmentcount
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
   * https://developer.apple.com/documentation/scenekit/scnsphere
   */
  interface SCNSphere extends SCNGeometry {
    // https://developer.apple.com/documentation/scenekit/scnsphere/1522601-spherewithradius
    sphereWithRadius(radius: CGFloat):SCNSphere;
    // https://developer.apple.com/documentation/scenekit/scnsphere/1523787-radius
    radius(): CGFloat;
    setRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scnsphere/1523268-geodesic
    geodesic(): BOOL;
    setGeodesic(): void;
    // https://developer.apple.com/documentation/scenekit/scnsphere/1523912-segmentcount
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
   * https://developer.apple.com/documentation/scenekit/scnpyramid
   */
  interface SCNPyramid extends SCNGeometry {
    // https://developer.apple.com/documentation/scenekit/scnpyramid/1523254-pyramidwithwidth
    pyramidWithWidth_height_length(width: CGFloat, height: CGFloat, length: CGFloat):SCNPyramid;
    // https://developer.apple.com/documentation/scenekit/scnpyramid/1522613-width
    width(): CGFloat;
    setWidth(): void;
    // https://developer.apple.com/documentation/scenekit/scnpyramid/1522805-height
    height(): CGFloat;
    setHeight(): void;
    // https://developer.apple.com/documentation/scenekit/scnpyramid/1524203-length
    length(): CGFloat;
    setLength(): void;
    // https://developer.apple.com/documentation/scenekit/scnpyramid/1523083-widthsegmentcount
    widthSegmentCount(): NSInteger;
    setWidthSegmentCount(): void;
    // https://developer.apple.com/documentation/scenekit/scnpyramid/1524059-heightsegmentcount
    heightSegmentCount(): NSInteger;
    setHeightSegmentCount(): void;
    // https://developer.apple.com/documentation/scenekit/scnpyramid/1524227-lengthsegmentcount
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
   * https://developer.apple.com/documentation/scenekit/scncone
   */
  interface SCNCone extends SCNGeometry {
    // https://developer.apple.com/documentation/scenekit/scncone/1522863-conewithtopradius
    coneWithTopRadius_bottomRadius_height(topRadius: CGFloat, bottomRadius: CGFloat, height: CGFloat):SCNCone;
    // https://developer.apple.com/documentation/scenekit/scncone/1524240-topradius
    topRadius(): CGFloat;
    setTopRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scncone/1523198-bottomradius
    bottomRadius(): CGFloat;
    setBottomRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scncone/1523219-height
    height(): CGFloat;
    setHeight(): void;
    // https://developer.apple.com/documentation/scenekit/scncone/1523942-radialsegmentcount
    radialSegmentCount(): NSInteger;
    setRadialSegmentCount(): void;
    // https://developer.apple.com/documentation/scenekit/scncone/1524113-heightsegmentcount
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
   * https://developer.apple.com/documentation/scenekit/scncylinder
   */
  interface SCNCylinder extends SCNGeometry {
    // https://developer.apple.com/documentation/scenekit/scncylinder/1523685-cylinderwithradius
    cylinderWithRadius_height(radius: CGFloat, height: CGFloat):SCNCylinder;
    // https://developer.apple.com/documentation/scenekit/scncylinder/1522674-radius
    radius(): CGFloat;
    setRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scncylinder/1523678-height
    height(): CGFloat;
    setHeight(): void;
    // https://developer.apple.com/documentation/scenekit/scncylinder/1524002-radialsegmentcount
    radialSegmentCount(): NSInteger;
    setRadialSegmentCount(): void;
    // https://developer.apple.com/documentation/scenekit/scncylinder/1523330-heightsegmentcount
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
   * https://developer.apple.com/documentation/scenekit/scncapsule
   */
  interface SCNCapsule extends SCNGeometry {
    // https://developer.apple.com/documentation/scenekit/scncapsule/1523790-capsulewithcapradius
    capsuleWithCapRadius_height(capRadius: CGFloat, height: CGFloat):SCNCapsule;
    // https://developer.apple.com/documentation/scenekit/scncapsule/1523926-capradius
    capRadius(): CGFloat;
    setCapRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scncapsule/1522789-height
    height(): CGFloat;
    setHeight(): void;
    // https://developer.apple.com/documentation/scenekit/scncapsule/1522735-radialsegmentcount
    radialSegmentCount(): NSInteger;
    setRadialSegmentCount(): void;
    // https://developer.apple.com/documentation/scenekit/scncapsule/1523561-capsegmentcount
    capSegmentCount(): NSInteger;
    setCapSegmentCount(): void;
    // https://developer.apple.com/documentation/scenekit/scncapsule/1523697-heightsegmentcount
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
  // https://developer.apple.com/documentation/scenekit/scnphysicsshapeoption
  type SCNPhysicsShapeOption = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnphysicscollisioncategory
  type SCNPhysicsCollisionCategory = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnphysicsbodytype
  type SCNPhysicsBodyType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A controller for playback of a positional audio source in a SceneKit scene.
   * https://developer.apple.com/documentation/scenekit/scnaudioplayer
   */
  interface SCNAudioPlayer extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnaudioplayer/1522736-initwithsource
    initWithSource(source: SCNAudioSource):SCNAudioPlayer;
    // https://developer.apple.com/documentation/scenekit/scnaudioplayer/1523010-initwithavaudionode
    initWithAVAudioNode(audioNode: AVAudioNode):SCNAudioPlayer;
    // https://developer.apple.com/documentation/scenekit/scnaudioplayer/1533919-audioplayerwithsource
    audioPlayerWithSource(source: SCNAudioSource):SCNAudioPlayer;
    // https://developer.apple.com/documentation/scenekit/scnaudioplayer/1533927-audioplayerwithavaudionode
    audioPlayerWithAVAudioNode(audioNode: AVAudioNode):SCNAudioPlayer;
    // https://developer.apple.com/documentation/scenekit/scnaudioplayer/1523059-audiosource
    audioSource(): SCNAudioSource;
    setAudioSource(): void;
    // https://developer.apple.com/documentation/scenekit/scnaudioplayer/1522747-audionode
    audioNode(): AVAudioNode;
    setAudioNode(): void;
    // https://developer.apple.com/documentation/scenekit/scnaudioplayer/1524115-willstartplayback
    willStartPlayback(): void;
    setWillStartPlayback(): void;
    // https://developer.apple.com/documentation/scenekit/scnaudioplayer/1522818-didfinishplayback
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
  // https://developer.apple.com/documentation/scenekit/scnlighttype
  type SCNLightType = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnshadowmode
  type SCNShadowMode = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/scenekit/scnparticlepropertycolor
declare const SCNParticlePropertyColor: cocoascript.SCNParticleProperty;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnparticlebirthlocation
  type SCNParticleBirthLocation = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnparticlebirthdirection
  type SCNParticleBirthDirection = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnparticleimagesequenceanimationmode
  type SCNParticleImageSequenceAnimationMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnparticleblendmode
  type SCNParticleBlendMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnparticleorientationmode
  type SCNParticleOrientationMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnparticlesortingmode
  type SCNParticleSortingMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnparticleevent
  type SCNParticleEvent = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnparticleeventblock
  type SCNParticleEventBlock = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnparticleproperty
  type SCNParticleProperty = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnparticlemodifierstage
  type SCNParticleModifierStage = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnparticlemodifierblock
  type SCNParticleModifierBlock = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnparticleinputmode
  type SCNParticleInputMode = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/scenekit/scngeometrysourcesemanticvertex
declare const SCNGeometrySourceSemanticVertex: cocoascript.SCNGeometrySourceSemantic;
// https://developer.apple.com/documentation/scenekit/scngeometrysourcesemanticnormal
declare const SCNGeometrySourceSemanticNormal: cocoascript.SCNGeometrySourceSemantic;
// https://developer.apple.com/documentation/scenekit/scngeometrysourcesemanticcolor
declare const SCNGeometrySourceSemanticColor: cocoascript.SCNGeometrySourceSemantic;
// https://developer.apple.com/documentation/scenekit/scngeometrysourcesemanticboneindices
declare const SCNGeometrySourceSemanticBoneIndices: cocoascript.SCNGeometrySourceSemantic;
// https://developer.apple.com/documentation/scenekit/scngeometrysourcesemanticboneweights
declare const SCNGeometrySourceSemanticBoneWeights: cocoascript.SCNGeometrySourceSemantic;
// https://developer.apple.com/documentation/scenekit/scngeometrysourcesemantictexcoord
declare const SCNGeometrySourceSemanticTexcoord: cocoascript.SCNGeometrySourceSemantic;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnbufferfrequency
  type SCNBufferFrequency = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnbufferbindingblock
  type SCNBufferBindingBlock = cocoascript.SCNRenderer;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnactiontimingmode
  type SCNActionTimingMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnactiontimingfunction
  type SCNActionTimingFunction = number;
}
declare namespace cocoascript {
  /**
   * An object that manages the data-reading tasks associated with loading scene contents from a file or data.
   * https://developer.apple.com/documentation/scenekit/scnscenesource
   */
  interface SCNSceneSource extends NSObject {
    // https://developer.apple.com/documentation/scenekit/scnscenesource/1573763-scenesourcewithurl
    sceneSourceWithURL_options(url: NSURL, options: SCNSceneSource):SCNSceneSource;
    // https://developer.apple.com/documentation/scenekit/scnscenesource/1573764-scenesourcewithdata
    sceneSourceWithData_options(data: NSData, options: SCNSceneSource):SCNSceneSource;
    // https://developer.apple.com/documentation/scenekit/scnscenesource/1522629-initwithurl
    initWithURL_options(url: NSURL, options: SCNSceneSource):SCNSceneSource;
    // https://developer.apple.com/documentation/scenekit/scnscenesource/1523500-initwithdata
    initWithData_options(data: NSData, options: SCNSceneSource):SCNSceneSource;
    // https://developer.apple.com/documentation/scenekit/scnscenesource/1522887-scenewithoptions
    sceneWithOptions_statusHandler(options: SCNSceneSource, statusHandler: SCNSceneSourceStatusHandler):any;
    // https://developer.apple.com/documentation/scenekit/scnscenesource/1523962-scenewithoptions
    sceneWithOptions_error(options: SCNSceneSource, error: NSError):any;
    // https://developer.apple.com/documentation/scenekit/scnscenesource/1523656-identifiersofentrieswithclass
    identifiersOfEntriesWithClass(entryClass: Class):NSString;
    // https://developer.apple.com/documentation/scenekit/scnscenesource/1573762-entrywithidentifier
    entryWithIdentifier_withClass(uid: string | cocoascript.NSString, entryClass: Class):SCNSceneSource;
    // https://developer.apple.com/documentation/scenekit/scnscenesource/1523055-entriespassingtest
    entriesPassingTest(predicate: BOOL):SCNSceneSource;
    // https://developer.apple.com/documentation/scenekit/scnscenesource/1524038-url
    url(): NSURL;
    setUrl(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenesource/1523061-data
    data(): NSData;
    setData(): void;
    // https://developer.apple.com/documentation/scenekit/scnscenesource/1523277-propertyforkey
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
   * https://developer.apple.com/documentation/scenekit/scnplane
   */
  interface SCNPlane extends SCNGeometry {
    // https://developer.apple.com/documentation/scenekit/scnplane/1523631-planewithwidth
    planeWithWidth_height(width: CGFloat, height: CGFloat):SCNPlane;
    // https://developer.apple.com/documentation/scenekit/scnplane/1523782-width
    width(): CGFloat;
    setWidth(): void;
    // https://developer.apple.com/documentation/scenekit/scnplane/1522837-height
    height(): CGFloat;
    setHeight(): void;
    // https://developer.apple.com/documentation/scenekit/scnplane/1523991-widthsegmentcount
    widthSegmentCount(): NSInteger;
    setWidthSegmentCount(): void;
    // https://developer.apple.com/documentation/scenekit/scnplane/1522889-heightsegmentcount
    heightSegmentCount(): NSInteger;
    setHeightSegmentCount(): void;
    // https://developer.apple.com/documentation/scenekit/scnplane/1523005-cornerradius
    cornerRadius(): CGFloat;
    setCornerRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scnplane/1524234-cornersegmentcount
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
   * https://developer.apple.com/documentation/scenekit/scntube
   */
  interface SCNTube extends SCNGeometry {
    // https://developer.apple.com/documentation/scenekit/scntube/1522843-tubewithinnerradius
    tubeWithInnerRadius_outerRadius_height(innerRadius: CGFloat, outerRadius: CGFloat, height: CGFloat):SCNTube;
    // https://developer.apple.com/documentation/scenekit/scntube/1523270-outerradius
    outerRadius(): CGFloat;
    setOuterRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scntube/1524070-innerradius
    innerRadius(): CGFloat;
    setInnerRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scntube/1522640-height
    height(): CGFloat;
    setHeight(): void;
    // https://developer.apple.com/documentation/scenekit/scntube/1523619-radialsegmentcount
    radialSegmentCount(): NSInteger;
    setRadialSegmentCount(): void;
    // https://developer.apple.com/documentation/scenekit/scntube/1523080-heightsegmentcount
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
   * https://developer.apple.com/documentation/scenekit/scntorus
   */
  interface SCNTorus extends SCNGeometry {
    // https://developer.apple.com/documentation/scenekit/scntorus/1523833-toruswithringradius
    torusWithRingRadius_pipeRadius(ringRadius: CGFloat, pipeRadius: CGFloat):SCNTorus;
    // https://developer.apple.com/documentation/scenekit/scntorus/1522906-ringradius
    ringRadius(): CGFloat;
    setRingRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scntorus/1522623-piperadius
    pipeRadius(): CGFloat;
    setPipeRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scntorus/1523598-ringsegmentcount
    ringSegmentCount(): NSInteger;
    setRingSegmentCount(): void;
    // https://developer.apple.com/documentation/scenekit/scntorus/1522807-pipesegmentcount
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
   * https://developer.apple.com/documentation/scenekit/scntext
   */
  interface SCNText extends SCNGeometry {
    // https://developer.apple.com/documentation/scenekit/scntext/1522734-textwithstring
    textWithString_extrusionDepth(string: SCNText, extrusionDepth: CGFloat):SCNText;
    // https://developer.apple.com/documentation/scenekit/scntext/1523439-string
    string(): id;
    setString(): void;
    // https://developer.apple.com/documentation/scenekit/scntext/1523273-font
    font(): UIFont;
    setFont(): void;
    // https://developer.apple.com/documentation/scenekit/scntext/1523654-containerframe
    containerFrame(): CGRect;
    setContainerFrame(): void;
    // https://developer.apple.com/documentation/scenekit/scntext/1523585-wrapped
    wrapped(): BOOL;
    setWrapped(): void;
    // https://developer.apple.com/documentation/scenekit/scntext/1523158-alignmentmode
    alignmentMode(): string | cocoascript.NSString;
    setAlignmentMode(): void;
    // https://developer.apple.com/documentation/scenekit/scntext/1523414-truncationmode
    truncationMode(): string | cocoascript.NSString;
    setTruncationMode(): void;
    // https://developer.apple.com/documentation/scenekit/scntext/1523680-textsize
    textSize(): CGSize;
    setTextSize(): void;
    // https://developer.apple.com/documentation/scenekit/scntext/1524111-flatness
    flatness(): CGFloat;
    setFlatness(): void;
    // https://developer.apple.com/documentation/scenekit/scntext/1522604-extrusiondepth
    extrusionDepth(): CGFloat;
    setExtrusionDepth(): void;
    // https://developer.apple.com/documentation/scenekit/scntext/1522846-chamferradius
    chamferRadius(): CGFloat;
    setChamferRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scntext/1572699-chamfersegmentcount
    chamferSegmentCount(): NSInteger;
    setChamferSegmentCount(): void;
    // https://developer.apple.com/documentation/scenekit/scntext/1523334-chamferprofile
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
   * https://developer.apple.com/documentation/scenekit/scnshape
   */
  interface SCNShape extends SCNGeometry {
    // https://developer.apple.com/documentation/scenekit/scnshape/1523432-shapewithpath
    shapeWithPath_extrusionDepth(path: UIBezierPath, extrusionDepth: CGFloat):SCNShape;
    // https://developer.apple.com/documentation/scenekit/scnshape/1523365-extrusiondepth
    extrusionDepth(): CGFloat;
    setExtrusionDepth(): void;
    // https://developer.apple.com/documentation/scenekit/scnshape/1523434-path
    path(): UIBezierPath;
    setPath(): void;
    // https://developer.apple.com/documentation/scenekit/scnshape/1523989-chamfermode
    chamferMode(): SCNChamferMode;
    setChamferMode(): void;
    // https://developer.apple.com/documentation/scenekit/scnshape/1522865-chamferprofile
    chamferProfile(): UIBezierPath;
    setChamferProfile(): void;
    // https://developer.apple.com/documentation/scenekit/scnshape/1524145-chamferradius
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
  // https://developer.apple.com/documentation/scenekit/scnanimationdidstartblock
  type SCNAnimationDidStartBlock = cocoascript.SCNAnimatable;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnanimationdidstopblock
  type SCNAnimationDidStopBlock = cocoascript.BOOL;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scntessellationsmoothingmode
  type SCNTessellationSmoothingMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A physics behavior that connects two bodies and allows them to pivot around each other on a single axis.
   * https://developer.apple.com/documentation/scenekit/scnphysicshingejoint
   */
  interface SCNPhysicsHingeJoint extends SCNPhysicsBehavior {
    // https://developer.apple.com/documentation/scenekit/scnphysicshingejoint/1387898-jointwithbodya
    jointWithBodyA_axisA_anchorA_bodyB_axisB_anchorB(bodyA: SCNPhysicsBody, axisA: SCNVector3, anchorA: SCNVector3, bodyB: SCNPhysicsBody, axisB: SCNVector3, anchorB: SCNVector3):SCNPhysicsHingeJoint;
    // https://developer.apple.com/documentation/scenekit/scnphysicshingejoint/1387977-jointwithbody
    jointWithBody_axis_anchor(body: SCNPhysicsBody, axis: SCNVector3, anchor: SCNVector3):SCNPhysicsHingeJoint;
    // https://developer.apple.com/documentation/scenekit/scnphysicshingejoint/1387973-bodya
    bodyA(): SCNPhysicsBody;
    setBodyA(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicshingejoint/1387888-axisa
    axisA(): SCNVector3;
    setAxisA(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicshingejoint/1387936-anchora
    anchorA(): SCNVector3;
    setAnchorA(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicshingejoint/1387918-bodyb
    bodyB(): SCNPhysicsBody;
    setBodyB(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicshingejoint/1387914-axisb
    axisB(): SCNVector3;
    setAxisB(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicshingejoint/1387979-anchorb
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
   * https://developer.apple.com/documentation/scenekit/scnphysicsballsocketjoint
   */
  interface SCNPhysicsBallSocketJoint extends SCNPhysicsBehavior {
    // https://developer.apple.com/documentation/scenekit/scnphysicsballsocketjoint/1387926-jointwithbodya
    jointWithBodyA_anchorA_bodyB_anchorB(bodyA: SCNPhysicsBody, anchorA: SCNVector3, bodyB: SCNPhysicsBody, anchorB: SCNVector3):SCNPhysicsBallSocketJoint;
    // https://developer.apple.com/documentation/scenekit/scnphysicsballsocketjoint/1387975-jointwithbody
    jointWithBody_anchor(body: SCNPhysicsBody, anchor: SCNVector3):SCNPhysicsBallSocketJoint;
    // https://developer.apple.com/documentation/scenekit/scnphysicsballsocketjoint/1387981-bodya
    bodyA(): SCNPhysicsBody;
    setBodyA(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsballsocketjoint/1387956-anchora
    anchorA(): SCNVector3;
    setAnchorA(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsballsocketjoint/1387902-bodyb
    bodyB(): SCNPhysicsBody;
    setBodyB(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsballsocketjoint/1387965-anchorb
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
   * https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint
   */
  interface SCNPhysicsSliderJoint extends SCNPhysicsBehavior {
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387922-jointwithbodya
    jointWithBodyA_axisA_anchorA_bodyB_axisB_anchorB(bodyA: SCNPhysicsBody, axisA: SCNVector3, anchorA: SCNVector3, bodyB: SCNPhysicsBody, axisB: SCNVector3, anchorB: SCNVector3):SCNPhysicsSliderJoint;
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387932-jointwithbody
    jointWithBody_axis_anchor(body: SCNPhysicsBody, axis: SCNVector3, anchor: SCNVector3):SCNPhysicsSliderJoint;
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387987-bodya
    bodyA(): SCNPhysicsBody;
    setBodyA(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387900-axisa
    axisA(): SCNVector3;
    setAxisA(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387958-anchora
    anchorA(): SCNVector3;
    setAnchorA(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387896-bodyb
    bodyB(): SCNPhysicsBody;
    setBodyB(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387948-axisb
    axisB(): SCNVector3;
    setAxisB(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387916-anchorb
    anchorB(): SCNVector3;
    setAnchorB(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387920-minimumlinearlimit
    minimumLinearLimit(): CGFloat;
    setMinimumLinearLimit(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387890-maximumlinearlimit
    maximumLinearLimit(): CGFloat;
    setMaximumLinearLimit(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387967-minimumangularlimit
    minimumAngularLimit(): CGFloat;
    setMinimumAngularLimit(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387924-maximumangularlimit
    maximumAngularLimit(): CGFloat;
    setMaximumAngularLimit(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387938-motortargetlinearvelocity
    motorTargetLinearVelocity(): CGFloat;
    setMotorTargetLinearVelocity(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387954-motormaximumforce
    motorMaximumForce(): CGFloat;
    setMotorMaximumForce(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387908-motortargetangularvelocity
    motorTargetAngularVelocity(): CGFloat;
    setMotorTargetAngularVelocity(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint/1387961-motormaximumtorque
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
  // https://developer.apple.com/documentation/scenekit/scnwrapmode
  type SCNWrapMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnfiltermode
  type SCNFilterMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnphysicstestoption
  type SCNPhysicsTestOption = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnmorphercalculationmode
  type SCNMorpherCalculationMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnsceneattribute
  type SCNSceneAttribute = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnsceneexportprogresshandler
  type SCNSceneExportProgressHandler = cocoascript.BOOL;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scngeometrysourcesemantic
  type SCNGeometrySourceSemantic = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scngeometryprimitivetype
  type SCNGeometryPrimitiveType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  interface SCNMatrix4 {
  }
}
// https://developer.apple.com/documentation/scenekit/scnmatrix4identity
declare const SCNMatrix4Identity: cocoascript.SCNMatrix4;
// https://developer.apple.com/documentation/scenekit/scnlightingmodelphysicallybased
declare const SCNLightingModelPhysicallyBased: cocoascript.SCNLightingModel;
declare namespace cocoascript {
  /**
   * A constraint that runs a specified block to compute a new transform (position, rotation, and scale) for each node that the constraint affects.
   * https://developer.apple.com/documentation/scenekit/scntransformconstraint
   */
  interface SCNTransformConstraint extends SCNConstraint {
    // https://developer.apple.com/documentation/scenekit/scntransformconstraint/1468679-transformconstraintinworldspace
    transformConstraintInWorldSpace_withBlock(world: BOOL, block: SCNMatrix4):SCNTransformConstraint;
    // https://developer.apple.com/documentation/scenekit/scntransformconstraint/2867503-orientationconstraintinworldspac
    orientationConstraintInWorldSpace_withBlock(world: BOOL, block: SCNQuaternion):SCNTransformConstraint;
    // https://developer.apple.com/documentation/scenekit/scntransformconstraint/2867461-positionconstraintinworldspace
    positionConstraintInWorldSpace_withBlock(world: BOOL, block: SCNVector3):SCNTransformConstraint;
    //
    alloc():SCNTransformConstraint;
    //
    init():SCNTransformConstraint;
  }
}

declare const SCNTransformConstraint: cocoascript.SCNTransformConstraint;
// https://developer.apple.com/documentation/scenekit/scnhittestoptionsearchmode
declare const SCNHitTestOptionSearchMode: cocoascript.SCNHitTestOption;
// https://developer.apple.com/documentation/scenekit/scnhittestbackfacecullingkey
declare const SCNHitTestBackFaceCullingKey: cocoascript.SCNHitTestOption;
// https://developer.apple.com/documentation/scenekit/scnhittestboundingboxonlykey
declare const SCNHitTestBoundingBoxOnlyKey: cocoascript.SCNHitTestOption;
// https://developer.apple.com/documentation/scenekit/scnhittestoptioncategorybitmask
declare const SCNHitTestOptionCategoryBitMask: cocoascript.SCNHitTestOption;
// https://developer.apple.com/documentation/scenekit/scnhittestcliptozrangekey
declare const SCNHitTestClipToZRangeKey: cocoascript.SCNHitTestOption;
// https://developer.apple.com/documentation/scenekit/scnhittestignorechildnodeskey
declare const SCNHitTestIgnoreChildNodesKey: cocoascript.SCNHitTestOption;
// https://developer.apple.com/documentation/scenekit/scnhittestignorehiddennodeskey
declare const SCNHitTestIgnoreHiddenNodesKey: cocoascript.SCNHitTestOption;
// https://developer.apple.com/documentation/scenekit/scnhittestrootnodekey
declare const SCNHitTestRootNodeKey: cocoascript.SCNHitTestOption;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnhittestsearchmode
  type SCNHitTestSearchMode = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/scenekit/scnhittestfirstfoundonlykey
declare const SCNHitTestFirstFoundOnlyKey: cocoascript.SCNHitTestOption;
// https://developer.apple.com/documentation/scenekit/scnhittestsortresultskey
declare const SCNHitTestSortResultsKey: cocoascript.SCNHitTestOption;
// https://developer.apple.com/documentation/scenekit/scnhittestoptionignorelightarea
declare const SCNHitTestOptionIgnoreLightArea: cocoascript.SCNHitTestOption;
declare namespace cocoascript {
  /**
   * A constraint that orients a node to always point toward the current camera.
   * https://developer.apple.com/documentation/scenekit/scnbillboardconstraint
   */
  interface SCNBillboardConstraint extends SCNConstraint {
    // https://developer.apple.com/documentation/scenekit/scnbillboardconstraint/1468673-billboardconstraint
    billboardConstraint():SCNBillboardConstraint;
    // https://developer.apple.com/documentation/scenekit/scnbillboardconstraint/1468685-freeaxes
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
  // https://developer.apple.com/documentation/scenekit/scnquaternion
  type SCNQuaternion = cocoascript.SCNVector4;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnreferenceloadingpolicy
  type SCNReferenceLoadingPolicy = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnviewoption
  type SCNViewOption = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnantialiasingmode
  type SCNAntialiasingMode = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scninteractionmode
  type SCNInteractionMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnanimationeventblock
  type SCNAnimationEventBlock = cocoascript.BOOL;
}
// https://developer.apple.com/documentation/scenekit/scnpreferlowpowerdevicekey
declare const SCNPreferLowPowerDeviceKey: cocoascript.SCNViewOption;
// https://developer.apple.com/documentation/scenekit/scnpreferreddevicekey
declare const SCNPreferredDeviceKey: cocoascript.SCNViewOption;
// https://developer.apple.com/documentation/scenekit/scnlighttypespot
declare const SCNLightTypeSpot: cocoascript.SCNLightType;
// https://developer.apple.com/documentation/scenekit/scnscenesourceanimationimportpolicyplayusingscenetimebase
declare const SCNSceneSourceAnimationImportPolicyPlayUsingSceneTimeBase: cocoascript.SCNSceneSourceAnimationImportPolicy;
// https://developer.apple.com/documentation/scenekit/scnvector3zero
declare const SCNVector3Zero: cocoascript.SCNVector3;
// https://developer.apple.com/documentation/scenekit/scnvector4zero
declare const SCNVector4Zero: cocoascript.SCNVector4;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/scenekit/scndistanceconstraint
   */
  interface SCNDistanceConstraint extends SCNConstraint {
    // https://developer.apple.com/documentation/scenekit/scndistanceconstraint/2873360-distanceconstraintwithtarget
    distanceConstraintWithTarget(target: any):SCNDistanceConstraint;
    // https://developer.apple.com/documentation/scenekit/scndistanceconstraint/2873358-maximumdistance
    maximumDistance(): CGFloat;
    setMaximumDistance(): void;
    // https://developer.apple.com/documentation/scenekit/scndistanceconstraint/2873385-minimumdistance
    minimumDistance(): CGFloat;
    setMinimumDistance(): void;
    // https://developer.apple.com/documentation/scenekit/scndistanceconstraint/2873381-target
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
   * https://developer.apple.com/documentation/scenekit/scnaccelerationconstraint
   */
  interface SCNAccelerationConstraint extends SCNConstraint {
    // https://developer.apple.com/documentation/scenekit/scnaccelerationconstraint/2873359-damping
    damping(): CGFloat;
    setDamping(): void;
    // https://developer.apple.com/documentation/scenekit/scnaccelerationconstraint/2873367-decelerationdistance
    decelerationDistance(): CGFloat;
    setDecelerationDistance(): void;
    // https://developer.apple.com/documentation/scenekit/scnaccelerationconstraint/2873355-maximumlinearacceleration
    maximumLinearAcceleration(): CGFloat;
    setMaximumLinearAcceleration(): void;
    // https://developer.apple.com/documentation/scenekit/scnaccelerationconstraint/2873384-maximumlinearvelocity
    maximumLinearVelocity(): CGFloat;
    setMaximumLinearVelocity(): void;
    // https://developer.apple.com/documentation/scenekit/scnaccelerationconstraint/2873352-accelerationconstraint
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
   * https://developer.apple.com/documentation/scenekit/scnsliderconstraint
   */
  interface SCNSliderConstraint extends SCNConstraint {
    // https://developer.apple.com/documentation/scenekit/scnsliderconstraint/2873372-collisioncategorybitmask
    collisionCategoryBitMask(): NSUInteger;
    setCollisionCategoryBitMask(): void;
    // https://developer.apple.com/documentation/scenekit/scnsliderconstraint/2873373-offset
    offset(): SCNVector3;
    setOffset(): void;
    // https://developer.apple.com/documentation/scenekit/scnsliderconstraint/2873368-radius
    radius(): CGFloat;
    setRadius(): void;
    // https://developer.apple.com/documentation/scenekit/scnsliderconstraint/2873363-sliderconstraint
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
   * https://developer.apple.com/documentation/scenekit/scnreplicatorconstraint
   */
  interface SCNReplicatorConstraint extends SCNConstraint {
    // https://developer.apple.com/documentation/scenekit/scnreplicatorconstraint/2873356-replicatorconstraintwithtarget
    replicatorConstraintWithTarget(target: any):SCNReplicatorConstraint;
    // https://developer.apple.com/documentation/scenekit/scnreplicatorconstraint/2873365-orientationoffset
    orientationOffset(): SCNQuaternion;
    setOrientationOffset(): void;
    // https://developer.apple.com/documentation/scenekit/scnreplicatorconstraint/2873379-positionoffset
    positionOffset(): SCNVector3;
    setPositionOffset(): void;
    // https://developer.apple.com/documentation/scenekit/scnreplicatorconstraint/2873374-replicatesorientation
    replicatesOrientation(): BOOL;
    setReplicatesOrientation(): void;
    // https://developer.apple.com/documentation/scenekit/scnreplicatorconstraint/2873353-replicatesposition
    replicatesPosition(): BOOL;
    setReplicatesPosition(): void;
    // https://developer.apple.com/documentation/scenekit/scnreplicatorconstraint/2873371-replicatesscale
    replicatesScale(): BOOL;
    setReplicatesScale(): void;
    // https://developer.apple.com/documentation/scenekit/scnreplicatorconstraint/2873366-scaleoffset
    scaleOffset(): SCNVector3;
    setScaleOffset(): void;
    // https://developer.apple.com/documentation/scenekit/scnreplicatorconstraint/2873361-target
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
   * https://developer.apple.com/documentation/scenekit/scnikconstraint
   */
  interface SCNIKConstraint extends SCNConstraint {
    // https://developer.apple.com/documentation/scenekit/scnikconstraint/1468694-initwithchainrootnode
    initWithChainRootNode(chainRootNode: any):SCNIKConstraint;
    // https://developer.apple.com/documentation/scenekit/scnikconstraint/1468653-inversekinematicsconstraintwithc
    inverseKinematicsConstraintWithChainRootNode(chainRootNode: any):SCNIKConstraint;
    // https://developer.apple.com/documentation/scenekit/scnikconstraint/1468690-chainrootnode
    chainRootNode(): any;
    setChainRootNode(): void;
    // https://developer.apple.com/documentation/scenekit/scnikconstraint/1468681-maxallowedrotationangleforjoint
    maxAllowedRotationAngleForJoint(node: any):CGFloat;
    // https://developer.apple.com/documentation/scenekit/scnikconstraint/1468649-setmaxallowedrotationangle
    setMaxAllowedRotationAngle_forJoint(angle: CGFloat, node: any):void;
    // https://developer.apple.com/documentation/scenekit/scnikconstraint/1468651-targetposition
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
   * https://developer.apple.com/documentation/scenekit/scnphysicsconetwistjoint
   */
  interface SCNPhysicsConeTwistJoint extends SCNPhysicsBehavior {
    // https://developer.apple.com/documentation/scenekit/scnphysicsconetwistjoint/2865898-jointwithbody
    jointWithBody_frame(body: SCNPhysicsBody, frame: SCNMatrix4):SCNPhysicsConeTwistJoint;
    // https://developer.apple.com/documentation/scenekit/scnphysicsconetwistjoint/2865905-jointwithbodya
    jointWithBodyA_frameA_bodyB_frameB(bodyA: SCNPhysicsBody, frameA: SCNMatrix4, bodyB: SCNPhysicsBody, frameB: SCNMatrix4):SCNPhysicsConeTwistJoint;
    // https://developer.apple.com/documentation/scenekit/scnphysicsconetwistjoint/2865904-bodya
    bodyA(): SCNPhysicsBody;
    setBodyA(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsconetwistjoint/2865899-bodyb
    bodyB(): SCNPhysicsBody;
    setBodyB(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsconetwistjoint/2865902-framea
    frameA(): SCNMatrix4;
    setFrameA(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsconetwistjoint/2865900-frameb
    frameB(): SCNMatrix4;
    setFrameB(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsconetwistjoint/2865907-maximumangularlimit1
    maximumAngularLimit1(): CGFloat;
    setMaximumAngularLimit1(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsconetwistjoint/2865897-maximumangularlimit2
    maximumAngularLimit2(): CGFloat;
    setMaximumAngularLimit2(): void;
    // https://developer.apple.com/documentation/scenekit/scnphysicsconetwistjoint/2865906-maximumtwistangle
    maximumTwistAngle(): CGFloat;
    setMaximumTwistAngle(): void;
    //
    alloc():SCNPhysicsConeTwistJoint;
    //
    init():SCNPhysicsConeTwistJoint;
  }
}

declare const SCNPhysicsConeTwistJoint: cocoascript.SCNPhysicsConeTwistJoint;
// https://developer.apple.com/documentation/scenekit/scnlightingmodelblinn
declare const SCNLightingModelBlinn: cocoascript.SCNLightingModel;
// https://developer.apple.com/documentation/scenekit/scnlightingmodelconstant
declare const SCNLightingModelConstant: cocoascript.SCNLightingModel;
// https://developer.apple.com/documentation/scenekit/scnlightingmodellambert
declare const SCNLightingModelLambert: cocoascript.SCNLightingModel;
// https://developer.apple.com/documentation/scenekit/scnlightingmodelphong
declare const SCNLightingModelPhong: cocoascript.SCNLightingModel;
// https://developer.apple.com/documentation/scenekit/scnlightingmodelshadowonly
declare const SCNLightingModelShadowOnly: cocoascript.SCNLightingModel;
// https://developer.apple.com/documentation/scenekit/scnlighttypeambient
declare const SCNLightTypeAmbient: cocoascript.SCNLightType;
declare namespace cocoascript {
  /**
   * A plane that can optionally display a reflection of the scene above it.
   * https://developer.apple.com/documentation/scenekit/scnfloor
   */
  interface SCNFloor extends SCNGeometry {
    // https://developer.apple.com/documentation/scenekit/scnfloor/1572698-floor
    floor():SCNFloor;
    // https://developer.apple.com/documentation/scenekit/scnfloor/1524175-reflectivity
    reflectivity(): CGFloat;
    setReflectivity(): void;
    // https://developer.apple.com/documentation/scenekit/scnfloor/1522781-reflectionfalloffend
    reflectionFalloffEnd(): CGFloat;
    setReflectionFalloffEnd(): void;
    // https://developer.apple.com/documentation/scenekit/scnfloor/1524237-reflectionfalloffstart
    reflectionFalloffStart(): CGFloat;
    setReflectionFalloffStart(): void;
    // https://developer.apple.com/documentation/scenekit/scnfloor/1522809-reflectionresolutionscalefactor
    reflectionResolutionScaleFactor(): CGFloat;
    setReflectionResolutionScaleFactor(): void;
    // https://developer.apple.com/documentation/scenekit/scnfloor/1845281-reflectioncategorybitmask
    reflectionCategoryBitMask(): NSUInteger;
    setReflectionCategoryBitMask(): void;
    // https://developer.apple.com/documentation/scenekit/scnfloor/1845280-width
    width(): CGFloat;
    setWidth(): void;
    // https://developer.apple.com/documentation/scenekit/scnfloor/2091890-length
    length(): CGFloat;
    setLength(): void;
    //
    alloc():SCNFloor;
    //
    init():SCNFloor;
  }
}

declare const SCNFloor: cocoascript.SCNFloor;
// https://developer.apple.com/documentation/scenekit/scnphysicsshapetypekey
declare const SCNPhysicsShapeTypeKey: cocoascript.SCNPhysicsShapeOption;
// https://developer.apple.com/documentation/scenekit/scnphysicsshapekeepascompoundkey
declare const SCNPhysicsShapeKeepAsCompoundKey: cocoascript.SCNPhysicsShapeOption;
// https://developer.apple.com/documentation/scenekit/scnphysicsshapetypeboundingbox
declare const SCNPhysicsShapeTypeBoundingBox: cocoascript.SCNPhysicsShapeType;
// https://developer.apple.com/documentation/scenekit/scnphysicsshapeoptioncollisionmargin
declare const SCNPhysicsShapeOptionCollisionMargin: cocoascript.SCNPhysicsShapeOption;
// https://developer.apple.com/documentation/scenekit/scnphysicsshapescalekey
declare const SCNPhysicsShapeScaleKey: cocoascript.SCNPhysicsShapeOption;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnphysicsshapetype
  type SCNPhysicsShapeType = cocoascript.NSString;
}
// https://developer.apple.com/documentation/scenekit/scnlighttypeies
declare const SCNLightTypeIES: cocoascript.SCNLightType;
// https://developer.apple.com/documentation/scenekit/scnlighttypedirectional
declare const SCNLightTypeDirectional: cocoascript.SCNLightType;
// https://developer.apple.com/documentation/scenekit/scnlighttypeomni
declare const SCNLightTypeOmni: cocoascript.SCNLightType;
// https://developer.apple.com/documentation/scenekit/scnlighttypeprobe
declare const SCNLightTypeProbe: cocoascript.SCNLightType;
// https://developer.apple.com/documentation/scenekit/scnlighttypearea
declare const SCNLightTypeArea: cocoascript.SCNLightType;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnlightareatype
  type SCNLightAreaType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnlightprobetype
  type SCNLightProbeType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnlightprobeupdatetype
  type SCNLightProbeUpdateType = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/scenekit/scnparticlepropertyangle
declare const SCNParticlePropertyAngle: cocoascript.SCNParticleProperty;
// https://developer.apple.com/documentation/scenekit/scnparticlepropertyangularvelocity
declare const SCNParticlePropertyAngularVelocity: cocoascript.SCNParticleProperty;
// https://developer.apple.com/documentation/scenekit/scnparticlepropertybounce
declare const SCNParticlePropertyBounce: cocoascript.SCNParticleProperty;
// https://developer.apple.com/documentation/scenekit/scnparticlepropertycharge
declare const SCNParticlePropertyCharge: cocoascript.SCNParticleProperty;
// https://developer.apple.com/documentation/scenekit/scnparticlepropertycontactnormal
declare const SCNParticlePropertyContactNormal: cocoascript.SCNParticleProperty;
// https://developer.apple.com/documentation/scenekit/scnparticlepropertycontactpoint
declare const SCNParticlePropertyContactPoint: cocoascript.SCNParticleProperty;
// https://developer.apple.com/documentation/scenekit/scnparticlepropertyframe
declare const SCNParticlePropertyFrame: cocoascript.SCNParticleProperty;
// https://developer.apple.com/documentation/scenekit/scnparticlepropertyframerate
declare const SCNParticlePropertyFrameRate: cocoascript.SCNParticleProperty;
// https://developer.apple.com/documentation/scenekit/scnparticlepropertyfriction
declare const SCNParticlePropertyFriction: cocoascript.SCNParticleProperty;
// https://developer.apple.com/documentation/scenekit/scnparticlepropertylife
declare const SCNParticlePropertyLife: cocoascript.SCNParticleProperty;
// https://developer.apple.com/documentation/scenekit/scnparticlepropertyopacity
declare const SCNParticlePropertyOpacity: cocoascript.SCNParticleProperty;
// https://developer.apple.com/documentation/scenekit/scnparticlepropertyposition
declare const SCNParticlePropertyPosition: cocoascript.SCNParticleProperty;
// https://developer.apple.com/documentation/scenekit/scnparticlepropertyrotationaxis
declare const SCNParticlePropertyRotationAxis: cocoascript.SCNParticleProperty;
// https://developer.apple.com/documentation/scenekit/scnparticlepropertysize
declare const SCNParticlePropertySize: cocoascript.SCNParticleProperty;
// https://developer.apple.com/documentation/scenekit/scnparticlepropertyvelocity
declare const SCNParticlePropertyVelocity: cocoascript.SCNParticleProperty;
// https://developer.apple.com/documentation/scenekit/scngeometrysourcesemantictangent
declare const SCNGeometrySourceSemanticTangent: cocoascript.SCNGeometrySourceSemantic;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnscenesourcestatushandler
  type SCNSceneSourceStatusHandler = cocoascript.BOOL;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnscenesourceloadingoption
  type SCNSceneSourceLoadingOption = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnscenesourcestatus
  type SCNSceneSourceStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnchamfermode
  type SCNChamferMode = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/scenekit/scngeometrysourcesemanticvertexcrease
declare const SCNGeometrySourceSemanticVertexCrease: cocoascript.SCNGeometrySourceSemantic;
// https://developer.apple.com/documentation/scenekit/scngeometrysourcesemanticedgecrease
declare const SCNGeometrySourceSemanticEdgeCrease: cocoascript.SCNGeometrySourceSemantic;
// https://developer.apple.com/documentation/scenekit/scnphysicstestsearchmodekey
declare const SCNPhysicsTestSearchModeKey: cocoascript.SCNPhysicsTestOption;
// https://developer.apple.com/documentation/scenekit/scnphysicstestbackfacecullingkey
declare const SCNPhysicsTestBackfaceCullingKey: cocoascript.SCNPhysicsTestOption;
// https://developer.apple.com/documentation/scenekit/scnphysicstestcollisionbitmaskkey
declare const SCNPhysicsTestCollisionBitMaskKey: cocoascript.SCNPhysicsTestOption;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnphysicstestsearchmode
  type SCNPhysicsTestSearchMode = cocoascript.NSString;
}
// https://developer.apple.com/documentation/scenekit/scnsceneendtimeattributekey
declare const SCNSceneEndTimeAttributeKey: cocoascript.SCNSceneAttribute;
// https://developer.apple.com/documentation/scenekit/scnsceneframerateattributekey
declare const SCNSceneFrameRateAttributeKey: cocoascript.SCNSceneAttribute;
// https://developer.apple.com/documentation/scenekit/scnscenestarttimeattributekey
declare const SCNSceneStartTimeAttributeKey: cocoascript.SCNSceneAttribute;
// https://developer.apple.com/documentation/scenekit/scnsceneupaxisattributekey
declare const SCNSceneUpAxisAttributeKey: cocoascript.SCNSceneAttribute;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnbillboardaxis
  type SCNBillboardAxis = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/scenekit/scnscenesourceanimationimportpolicy
  type SCNSceneSourceAnimationImportPolicy = cocoascript.NSString;
}
// https://developer.apple.com/documentation/scenekit/scnphysicsshapetypeconvexhull
declare const SCNPhysicsShapeTypeConvexHull: cocoascript.SCNPhysicsShapeType;
// https://developer.apple.com/documentation/scenekit/scnphysicsshapetypeconcavepolyhedron
declare const SCNPhysicsShapeTypeConcavePolyhedron: cocoascript.SCNPhysicsShapeType;
// https://developer.apple.com/documentation/scenekit/scnscenesourceanimationimportpolicykey
declare const SCNSceneSourceAnimationImportPolicyKey: cocoascript.SCNSceneSourceLoadingOption;
// https://developer.apple.com/documentation/scenekit/scnscenesourceassetdirectoryurlskey
declare const SCNSceneSourceAssetDirectoryURLsKey: cocoascript.SCNSceneSourceLoadingOption;
// https://developer.apple.com/documentation/scenekit/scnscenesourcecheckconsistencykey
declare const SCNSceneSourceCheckConsistencyKey: cocoascript.SCNSceneSourceLoadingOption;
// https://developer.apple.com/documentation/scenekit/scnscenesourceconverttoyupkey
declare const SCNSceneSourceConvertToYUpKey: cocoascript.SCNSceneSourceLoadingOption;
// https://developer.apple.com/documentation/scenekit/scnscenesourceconvertunitstometerskey
declare const SCNSceneSourceConvertUnitsToMetersKey: cocoascript.SCNSceneSourceLoadingOption;
// https://developer.apple.com/documentation/scenekit/scnscenesourcecreatenormalsifabsentkey
declare const SCNSceneSourceCreateNormalsIfAbsentKey: cocoascript.SCNSceneSourceLoadingOption;
// https://developer.apple.com/documentation/scenekit/scnscenesourceflattenscenekey
declare const SCNSceneSourceFlattenSceneKey: cocoascript.SCNSceneSourceLoadingOption;
// https://developer.apple.com/documentation/scenekit/scnscenesourceoverrideasseturlskey
declare const SCNSceneSourceOverrideAssetURLsKey: cocoascript.SCNSceneSourceLoadingOption;
// https://developer.apple.com/documentation/scenekit/scnscenesourceloadingoptionpreserveoriginaltopology
declare const SCNSceneSourceLoadingOptionPreserveOriginalTopology: cocoascript.SCNSceneSourceLoadingOption;
// https://developer.apple.com/documentation/scenekit/scnscenesourcestrictconformancekey
declare const SCNSceneSourceStrictConformanceKey: cocoascript.SCNSceneSourceLoadingOption;
// https://developer.apple.com/documentation/scenekit/scnscenesourceusesafemodekey
declare const SCNSceneSourceUseSafeModeKey: cocoascript.SCNSceneSourceLoadingOption;
// https://developer.apple.com/documentation/scenekit/scnphysicstestsearchmodeany
declare const SCNPhysicsTestSearchModeAny: cocoascript.SCNPhysicsTestSearchMode;
// https://developer.apple.com/documentation/scenekit/scnphysicstestsearchmodeall
declare const SCNPhysicsTestSearchModeAll: cocoascript.SCNPhysicsTestSearchMode;
// https://developer.apple.com/documentation/scenekit/scnphysicstestsearchmodeclosest
declare const SCNPhysicsTestSearchModeClosest: cocoascript.SCNPhysicsTestSearchMode;
// https://developer.apple.com/documentation/scenekit/scnscenesourceanimationimportpolicydonotplay
declare const SCNSceneSourceAnimationImportPolicyDoNotPlay: cocoascript.SCNSceneSourceAnimationImportPolicy;
// https://developer.apple.com/documentation/scenekit/scnscenesourceanimationimportpolicyplay
declare const SCNSceneSourceAnimationImportPolicyPlay: cocoascript.SCNSceneSourceAnimationImportPolicy;
// https://developer.apple.com/documentation/scenekit/scnscenesourceanimationimportpolicyplayrepeatedly
declare const SCNSceneSourceAnimationImportPolicyPlayRepeatedly: cocoascript.SCNSceneSourceAnimationImportPolicy;
