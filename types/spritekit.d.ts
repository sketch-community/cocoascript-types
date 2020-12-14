declare namespace cocoascript {
  /**
   * Methods your app can implement to respond when physics bodies come into contact.
   * doc://com.apple.documentation/documentation/spritekit/skphysicscontactdelegate
   */
  interface SKPhysicsContactDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skphysicscontactdelegate/1449595-didbegincontact
    didBeginContact(contact: SKPhysicsContact):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicscontactdelegate/1449599-didendcontact
    didEndContact(contact: SKPhysicsContact):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods to take custom control over the view's render rate.
   * doc://com.apple.documentation/documentation/spritekit/skviewdelegate
   */
  interface SKViewDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skviewdelegate/1642775-view
    view_shouldRenderAtTime(view: SKView, time: NSTimeInterval):BOOL;
  }
}
declare namespace cocoascript {
  /**
   * Methods that, when implemented, allow any class to participate in the SpriteKit render loop callbacks.
   * doc://com.apple.documentation/documentation/spritekit/skscenedelegate
   */
  interface SKSceneDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skscenedelegate/1519757-update
    update_forScene(currentTime: NSTimeInterval, scene: SKScene):void;
    // doc://com.apple.documentation/documentation/spritekit/skscenedelegate/1520071-didevaluateactionsforscene
    didEvaluateActionsForScene(scene: SKScene):void;
    // doc://com.apple.documentation/documentation/spritekit/skscenedelegate/1520392-didsimulatephysicsforscene
    didSimulatePhysicsForScene(scene: SKScene):void;
    // doc://com.apple.documentation/documentation/spritekit/skscenedelegate/1520375-didapplyconstraintsforscene
    didApplyConstraintsForScene(scene: SKScene):void;
    // doc://com.apple.documentation/documentation/spritekit/skscenedelegate/1519814-didfinishupdateforscene
    didFinishUpdateForScene(scene: SKScene):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol for objects that can be warped and animated by an
   * doc://com.apple.documentation/documentation/spritekit/skwarpable
   */
  interface SKWarpable extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skwarpable/1690947-subdivisionlevels
    subdivisionLevels(): NSInteger;
    setSubdivisionLevels(): void;
    // doc://com.apple.documentation/documentation/spritekit/skwarpable/1690953-warpgeometry
    warpGeometry(): SKWarpGeometry;
    setWarpGeometry(): void;
  }
}
declare namespace cocoascript {
  /**
   * An object that performs interpolation between values specified at different times (keyframes).
   * doc://com.apple.documentation/documentation/spritekit/skkeyframesequence
   */
  interface SKKeyframeSequence extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390896-initwithkeyframevalues
    initWithKeyframeValues_times(values: NSArray, times: NSNumber):SKKeyframeSequence;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390910-initwithcapacity
    initWithCapacity(numItems: NSUInteger):SKKeyframeSequence;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390892-initwithcoder
    initWithCoder(aDecoder: NSCoder):SKKeyframeSequence;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390894-addkeyframevalue
    addKeyframeValue_time(value: SKKeyframeSequence, time: CGFloat):void;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390920-removekeyframeatindex
    removeKeyframeAtIndex(index: NSUInteger):void;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390912-removelastkeyframe
    removeLastKeyframe():void;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390924-setkeyframetime
    setKeyframeTime_forIndex(time: CGFloat, index: NSUInteger):void;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390883-setkeyframevalue
    setKeyframeValue_forIndex(value: SKKeyframeSequence, index: NSUInteger):void;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390890-setkeyframevalue
    setKeyframeValue_time_forIndex(value: SKKeyframeSequence, time: CGFloat, index: NSUInteger):void;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390904-sampleattime
    sampleAtTime(time: CGFloat):SKKeyframeSequence;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390928-count
    count():NSUInteger;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390908-getkeyframetimeforindex
    getKeyframeTimeForIndex(index: NSUInteger):CGFloat;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390898-getkeyframevalueforindex
    getKeyframeValueForIndex(index: NSUInteger):SKKeyframeSequence;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390914-interpolationmode
    interpolationMode(): SKInterpolationMode;
    setInterpolationMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390900-repeatmode
    repeatMode(): SKRepeatMode;
    setRepeatMode(): void;
    //
    alloc():SKKeyframeSequence;
    //
    init():SKKeyframeSequence;
  }
}

declare const SKKeyframeSequence: cocoascript.SKKeyframeSequence;
declare namespace cocoascript {
  /**
   * An object used to perform an animated transition to a new scene.
   * doc://com.apple.documentation/documentation/spritekit/sktransition
   */
  interface SKTransition extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395897-crossfadewithduration
    crossFadeWithDuration(sec: NSTimeInterval):SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395899-doorsclosehorizontalwithduration
    doorsCloseHorizontalWithDuration(sec: NSTimeInterval):SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395914-doorscloseverticalwithduration
    doorsCloseVerticalWithDuration(sec: NSTimeInterval):SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395875-doorsopenhorizontalwithduration
    doorsOpenHorizontalWithDuration(sec: NSTimeInterval):SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395909-doorsopenverticalwithduration
    doorsOpenVerticalWithDuration(sec: NSTimeInterval):SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395881-doorwaywithduration
    doorwayWithDuration(sec: NSTimeInterval):SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395871-fadewithcolor
    fadeWithColor_duration(color: UIColor, sec: NSTimeInterval):SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395907-fadewithduration
    fadeWithDuration(sec: NSTimeInterval):SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395901-fliphorizontalwithduration
    flipHorizontalWithDuration(sec: NSTimeInterval):SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395889-flipverticalwithduration
    flipVerticalWithDuration(sec: NSTimeInterval):SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395905-moveinwithdirection
    moveInWithDirection_duration(direction: SKTransitionDirection, sec: NSTimeInterval):SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395903-pushwithdirection
    pushWithDirection_duration(direction: SKTransitionDirection, sec: NSTimeInterval):SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395887-revealwithdirection
    revealWithDirection_duration(direction: SKTransitionDirection, sec: NSTimeInterval):SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395895-transitionwithcifilter
    transitionWithCIFilter_duration(filter: CIFilter, sec: NSTimeInterval):SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395883-pausesincomingscene
    pausesIncomingScene(): BOOL;
    setPausesIncomingScene(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395877-pausesoutgoingscene
    pausesOutgoingScene(): BOOL;
    setPausesOutgoingScene(): void;
    //
    alloc():SKTransition;
    //
    init():SKTransition;
  }
}

declare const SKTransition: cocoascript.SKTransition;
declare namespace cocoascript {
  /**
   * An object that is run by a node to change its structure or content.
   * doc://com.apple.documentation/documentation/spritekit/skaction
   */
  interface SKAction extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skaction/1417790-duration
    duration(): NSTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/spritekit/skaction/1417807-timingmode
    timingMode(): SKActionTimingMode;
    setTimingMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skaction/1417666-timingfunction
    timingFunction(): SKActionTimingFunction;
    setTimingFunction(): void;
    // doc://com.apple.documentation/documentation/spritekit/skaction/1417718-speed
    speed(): CGFloat;
    setSpeed(): void;
    //
    alloc():SKAction;
    //
    init():SKAction;
  }
}

declare const SKAction: cocoascript.SKAction;
declare namespace cocoascript {
  /**
   * A container for uniform shader data.
   * doc://com.apple.documentation/documentation/spritekit/skuniform
   */
  interface SKUniform extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455458-uniformwithname
    uniformWithName(name: string | cocoascript.NSString):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455412-uniformwithname
    uniformWithName_float(name: string | cocoascript.NSString, value: number):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455472-uniformwithname
    uniformWithName_floatVector2(name: string | cocoascript.NSString, value: GLKVector2):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455414-uniformwithname
    uniformWithName_floatVector3(name: string | cocoascript.NSString, value: GLKVector3):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455465-uniformwithname
    uniformWithName_floatVector4(name: string | cocoascript.NSString, value: GLKVector4):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455463-uniformwithname
    uniformWithName_floatMatrix2(name: string | cocoascript.NSString, value: GLKMatrix2):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455402-uniformwithname
    uniformWithName_floatMatrix3(name: string | cocoascript.NSString, value: GLKMatrix3):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455446-uniformwithname
    uniformWithName_floatMatrix4(name: string | cocoascript.NSString, value: GLKMatrix4):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455470-uniformwithname
    uniformWithName_texture(name: string | cocoascript.NSString, texture: SKTexture):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455420-initwithname
    initWithName(name: string | cocoascript.NSString):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455447-initwithname
    initWithName_float(name: string | cocoascript.NSString, value: number):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455444-initwithname
    initWithName_floatVector2(name: string | cocoascript.NSString, value: GLKVector2):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455416-initwithname
    initWithName_floatVector3(name: string | cocoascript.NSString, value: GLKVector3):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455418-initwithname
    initWithName_floatVector4(name: string | cocoascript.NSString, value: GLKVector4):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455431-initwithname
    initWithName_floatMatrix2(name: string | cocoascript.NSString, value: GLKMatrix2):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455462-initwithname
    initWithName_floatMatrix3(name: string | cocoascript.NSString, value: GLKMatrix3):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455429-initwithname
    initWithName_floatMatrix4(name: string | cocoascript.NSString, value: GLKMatrix4):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455452-initwithname
    initWithName_texture(name: string | cocoascript.NSString, texture: SKTexture):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455442-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455440-uniformtype
    uniformType(): SKUniformType;
    setUniformType(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455406-floatvalue
    floatValue(): number;
    setFloatValue(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455436-floatvector2value
    floatVector2Value(): GLKVector2;
    setFloatVector2Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455434-floatvector3value
    floatVector3Value(): GLKVector3;
    setFloatVector3Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455404-floatvector4value
    floatVector4Value(): GLKVector4;
    setFloatVector4Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455410-floatmatrix2value
    floatMatrix2Value(): GLKMatrix2;
    setFloatMatrix2Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455438-floatmatrix3value
    floatMatrix3Value(): GLKMatrix3;
    setFloatMatrix3Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455460-floatmatrix4value
    floatMatrix4Value(): GLKMatrix4;
    setFloatMatrix4Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455449-texturevalue
    textureValue(): SKTexture;
    setTextureValue(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645806-initwithname
    initWithName_matrixFloat2x2(name: string | cocoascript.NSString, value: matrix_float2x2):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645799-initwithname
    initWithName_matrixFloat3x3(name: string | cocoascript.NSString, value: matrix_float3x3):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645816-initwithname
    initWithName_matrixFloat4x4(name: string | cocoascript.NSString, value: matrix_float4x4):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645782-initwithname
    initWithName_vectorFloat2(name: string | cocoascript.NSString, value: vector_float2):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645803-initwithname
    initWithName_vectorFloat3(name: string | cocoascript.NSString, value: vector_float3):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645808-initwithname
    initWithName_vectorFloat4(name: string | cocoascript.NSString, value: vector_float4):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645818-matrixfloat2x2value
    matrixFloat2x2Value(): matrix_float2x2;
    setMatrixFloat2x2Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645810-matrixfloat3x3value
    matrixFloat3x3Value(): matrix_float3x3;
    setMatrixFloat3x3Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645817-matrixfloat4x4value
    matrixFloat4x4Value(): matrix_float4x4;
    setMatrixFloat4x4Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645819-vectorfloat2value
    vectorFloat2Value(): vector_float2;
    setVectorFloat2Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645805-vectorfloat3value
    vectorFloat3Value(): vector_float3;
    setVectorFloat3Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645789-vectorfloat4value
    vectorFloat4Value(): vector_float4;
    setVectorFloat4Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1646689-uniformwithname
    uniformWithName_matrixFloat2x2(name: string | cocoascript.NSString, value: matrix_float2x2):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1646692-uniformwithname
    uniformWithName_matrixFloat3x3(name: string | cocoascript.NSString, value: matrix_float3x3):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1646694-uniformwithname
    uniformWithName_matrixFloat4x4(name: string | cocoascript.NSString, value: matrix_float4x4):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1646690-uniformwithname
    uniformWithName_vectorFloat2(name: string | cocoascript.NSString, value: vector_float2):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1646691-uniformwithname
    uniformWithName_vectorFloat3(name: string | cocoascript.NSString, value: vector_float3):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1646693-uniformwithname
    uniformWithName_vectorFloat4(name: string | cocoascript.NSString, value: vector_float4):SKUniform;
    //
    alloc():SKUniform;
    //
    init():SKUniform;
  }
}

declare const SKUniform: cocoascript.SKUniform;
declare namespace cocoascript {
  /**
   * An object that allows you to apply a custom fragment shader.
   * doc://com.apple.documentation/documentation/spritekit/skshader
   */
  interface SKShader extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477557-shaderwithfilenamed
    shaderWithFileNamed(name: string | cocoascript.NSString):SKShader;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477569-shaderwithsource
    shaderWithSource_uniforms(source: string | cocoascript.NSString, uniforms: SKUniform):SKShader;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477563-shaderwithsource
    shaderWithSource(source: string | cocoascript.NSString):SKShader;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477559-shader
    shader():SKShader;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477555-initwithsource
    initWithSource_uniforms(source: string | cocoascript.NSString, uniforms: SKUniform):SKShader;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477571-initwithsource
    initWithSource(source: string | cocoascript.NSString):SKShader;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477561-adduniform
    addUniform(uniform: SKUniform):void;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477553-removeuniformnamed
    removeUniformNamed(name: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477565-uniforms
    uniforms(): SKUniform;
    setUniforms(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477567-uniformnamed
    uniformNamed(name: string | cocoascript.NSString):SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1645287-attributes
    attributes(): SKAttribute;
    setAttributes(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477544-source
    source(): string | cocoascript.NSString;
    setSource(): void;
    //
    alloc():SKShader;
    //
    init():SKShader;
  }
}

declare const SKShader: cocoascript.SKShader;
declare namespace cocoascript {
  /**
   * The base class of all SpriteKit nodes.
   * doc://com.apple.documentation/documentation/spritekit/sknode
   */
  interface SKNode extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483097-init
    init():SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483038-node
    node():SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483083-nodewithfilenamed
    nodeWithFileNamed(filename: string | cocoascript.NSString):SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483142-initwithcoder
    initWithCoder(aDecoder: NSCoder):SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/3005334-nodewithfilenamed
    nodeWithFileNamed_securelyWithClasses_andError(filename: string | cocoascript.NSString, classes: Class, error: NSError):SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483101-position
    position(): CGPoint;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483026-frame
    frame(): CGRect;
    setFrame(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483066-calculateaccumulatedframe
    calculateAccumulatedFrame():CGRect;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483107-zposition
    zPosition(): CGFloat;
    setZPosition(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483089-zrotation
    zRotation(): CGFloat;
    setZRotation(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483126-setscale
    setScale(scale: CGFloat):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483087-xscale
    xScale(): CGFloat;
    setXScale(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483046-yscale
    yScale(): CGFloat;
    setYScale(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483064-scene
    scene(): SKScene;
    setScene(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483080-parent
    parent(): SKNode;
    setParent(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483028-children
    children(): SKNode;
    setChildren(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483054-addchild
    addChild(node: SKNode):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483062-insertchild
    insertChild_atIndex(node: SKNode, index: NSInteger):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483078-isequaltonode
    isEqualToNode(node: SKNode):BOOL;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483021-movetoparent
    moveToParent(parent: SKNode):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483119-removefromparent
    removeFromParent():void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483040-removeallchildren
    removeAllChildren():void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483091-removechildreninarray
    removeChildrenInArray(nodes: SKNode):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483111-inparenthierarchy
    inParentHierarchy(parent: SKNode):BOOL;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483136-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483060-childnodewithname
    childNodeWithName(name: string | cocoascript.NSString):SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483024-enumeratechildnodeswithname
    enumerateChildNodesWithName_usingBlock(name: string | cocoascript.NSString, block: BOOL):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483070-objectforkeyedsubscript
    objectForKeyedSubscript(name: string | cocoascript.NSString):SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483023-alpha
    alpha(): CGFloat;
    setAlpha(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483048-hidden
    hidden(): BOOL;
    setHidden(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483093-runaction
    runAction(action: SKAction):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483103-runaction
    runAction_completion(action: SKAction, block: void):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483042-runaction
    runAction_withKey(action: SKAction, key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483036-speed
    speed(): CGFloat;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483113-paused
    paused(): BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483138-actionforkey
    actionForKey(key: string | cocoascript.NSString):SKAction;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483081-hasactions
    hasActions():BOOL;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483030-removeallactions
    removeAllActions():void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483076-removeactionforkey
    removeActionForKey(key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483117-physicsbody
    physicsBody(): SKPhysicsBody;
    setPhysicsBody(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483124-constraints
    constraints(): SKConstraint;
    setConstraints(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483019-reachconstraints
    reachConstraints(): SKReachConstraints;
    setReachConstraints(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483140-intersectsnode
    intersectsNode(node: SKNode):BOOL;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1640688-entity
    entity(): GKEntity;
    setEntity(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483132-obstaclesfromnodebounds
    obstaclesFromNodeBounds(nodes: SKNode):GKPolygonObstacle;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483085-obstaclesfromnodephysicsbodies
    obstaclesFromNodePhysicsBodies(nodes: SKNode):GKPolygonObstacle;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483134-obstaclesfromspritetextures
    obstaclesFromSpriteTextures_accuracy(sprites: SKNode, accuracy: number):GKPolygonObstacle;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483109-userinteractionenabled
    userInteractionEnabled(): BOOL;
    setUserInteractionEnabled(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/2882953-focusbehavior
    focusBehavior(): SKNodeFocusBehavior;
    setFocusBehavior(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483044-containspoint
    containsPoint(p: CGPoint):BOOL;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483099-nodeatpoint
    nodeAtPoint(p: CGPoint):SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483072-nodesatpoint
    nodesAtPoint(p: CGPoint):SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483058-convertpoint
    convertPoint_fromNode(point: CGPoint, node: SKNode):CGPoint;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483056-convertpoint
    convertPoint_toNode(point: CGPoint, node: SKNode):CGPoint;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483121-userdata
    userData(): NSMutableDictionary;
    setUserData(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645045-accessibilitychildren
    accessibilityChildren(): NSArray;
    setAccessibilityChildren(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645044-accessibilityframe
    accessibilityFrame(): CGRect;
    setAccessibilityFrame(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645041-accessibilityhelp
    accessibilityHelp(): string | cocoascript.NSString;
    setAccessibilityHelp(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645039-accessibilitylabel
    accessibilityLabel(): string | cocoascript.NSString;
    setAccessibilityLabel(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645042-accessibilityparent
    accessibilityParent(): id;
    setAccessibilityParent(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645036-accessibilityrole
    accessibilityRole(): string | cocoascript.NSString;
    setAccessibilityRole(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645035-accessibilityroledescription
    accessibilityRoleDescription(): string | cocoascript.NSString;
    setAccessibilityRoleDescription(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645043-accessibilitysubrole
    accessibilitySubrole(): string | cocoascript.NSString;
    setAccessibilitySubrole(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645038-accessibilityelement
    accessibilityElement(): BOOL;
    setAccessibilityElement(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645037-accessibilityenabled
    accessibilityEnabled(): BOOL;
    setAccessibilityEnabled(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645040-accessibilityhittest
    accessibilityHitTest(point: CGPoint):SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1644181-attributevalues
    attributeValues(): SKAttributeValue;
    setAttributeValues(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1644180-setvalue
    setValue_forAttributeNamed(value: SKAttributeValue, key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1644182-valueforattributenamed
    valueForAttributeNamed(key: string | cocoascript.NSString):SKAttributeValue;
    //
    alloc():SKNode;
    //
    init():SKNode;
  }
}

declare const SKNode: cocoascript.SKNode;
declare namespace cocoascript {
  /**
   * A definition of a range of floating-point values.
   * doc://com.apple.documentation/documentation/spritekit/skrange
   */
  interface SKRange extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skrange/1534324-rangewithlowerlimit
    rangeWithLowerLimit_upperLimit(lower: CGFloat, upper: CGFloat):SKRange;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1519842-rangewithvalue
    rangeWithValue_variance(value: CGFloat, variance: CGFloat):SKRange;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1519920-rangewithnolimits
    rangeWithNoLimits():SKRange;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1520137-rangewithlowerlimit
    rangeWithLowerLimit(lower: CGFloat):SKRange;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1519559-rangewithupperlimit
    rangeWithUpperLimit(upper: CGFloat):SKRange;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1520276-rangewithconstantvalue
    rangeWithConstantValue(value: CGFloat):SKRange;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1520307-initwithlowerlimit
    initWithLowerLimit_upperLimit(lower: CGFloat, upper: CGFloat):SKRange;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1520000-lowerlimit
    lowerLimit(): CGFloat;
    setLowerLimit(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1519596-upperlimit
    upperLimit(): CGFloat;
    setUpperLimit(): void;
    //
    alloc():SKRange;
    //
    init():SKRange;
  }
}

declare const SKRange: cocoascript.SKRange;
declare namespace cocoascript {
  /**
   * A specification for constraining a node's position or rotation.
   * doc://com.apple.documentation/documentation/spritekit/skconstraint
   */
  interface SKConstraint extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519760-positionx
    positionX_Y(xRange: SKRange, yRange: SKRange):SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519716-positionx
    positionX(range: SKRange):SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1520356-positiony
    positionY(range: SKRange):SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519744-orienttonode
    orientToNode_offset(node: SKNode, radians: SKRange):SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519686-orienttopoint
    orientToPoint_offset(point: CGPoint, radians: SKRange):SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519627-orienttopoint
    orientToPoint_inNode_offset(point: CGPoint, node: SKNode, radians: SKRange):SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519706-zrotation
    zRotation(zRange: SKRange):SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519750-distance
    distance_toNode(range: SKRange, node: SKNode):SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519688-distance
    distance_toPoint(range: SKRange, point: CGPoint):SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519746-distance
    distance_toPoint_inNode(range: SKRange, point: CGPoint, node: SKNode):SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1520369-referencenode
    referenceNode(): SKNode;
    setReferenceNode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519669-enabled
    enabled(): BOOL;
    setEnabled(): void;
    //
    alloc():SKConstraint;
    //
    init():SKConstraint;
  }
}

declare const SKConstraint: cocoascript.SKConstraint;
declare namespace cocoascript {
  /**
   * An object that adds physics simulation to a node.
   * doc://com.apple.documentation/documentation/spritekit/skphysicsbody
   */
  interface SKPhysicsBody extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520261-bodywithcircleofradius
    bodyWithCircleOfRadius(r: CGFloat):SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519692-bodywithcircleofradius
    bodyWithCircleOfRadius_center(r: CGFloat, center: CGPoint):SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520295-bodywithrectangleofsize
    bodyWithRectangleOfSize(s: CGSize):SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519936-bodywithrectangleofsize
    bodyWithRectangleOfSize_center(s: CGSize, center: CGPoint):SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520379-bodywithpolygonfrompath
    bodyWithPolygonFromPath(path: CGPathRef):SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519690-bodywithtexture
    bodyWithTexture_size(texture: SKTexture, size: CGSize):SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519689-bodywithtexture
    bodyWithTexture_alphaThreshold_size(texture: SKTexture, alphaThreshold: number, size: CGSize):SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519736-bodywithbodies
    bodyWithBodies(bodies: SKPhysicsBody):SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520055-bodywithedgeloopfromrect
    bodyWithEdgeLoopFromRect(rect: CGRect):SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520401-bodywithedgefrompoint
    bodyWithEdgeFromPoint_toPoint(p1: CGPoint, p2: CGPoint):SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519732-bodywithedgeloopfrompath
    bodyWithEdgeLoopFromPath(path: CGPathRef):SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519871-bodywithedgechainfrompath
    bodyWithEdgeChainFromPath(path: CGPathRef):SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519774-affectedbygravity
    affectedByGravity(): BOOL;
    setAffectedByGravity(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519986-allowsrotation
    allowsRotation(): BOOL;
    setAllowsRotation(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520132-dynamic
    dynamic(): BOOL;
    setDynamic(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519906-mass
    mass(): CGFloat;
    setMass(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519983-density
    density(): CGFloat;
    setDensity(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520034-area
    area(): CGFloat;
    setArea(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519840-friction
    friction(): CGFloat;
    setFriction(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520447-restitution
    restitution(): CGFloat;
    setRestitution(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519796-lineardamping
    linearDamping(): CGFloat;
    setLinearDamping(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519913-angulardamping
    angularDamping(): CGFloat;
    setAngularDamping(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519869-categorybitmask
    categoryBitMask(): number;
    setCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520003-collisionbitmask
    collisionBitMask(): number;
    setCollisionBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520014-usesprecisecollisiondetection
    usesPreciseCollisionDetection(): BOOL;
    setUsesPreciseCollisionDetection(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519781-contacttestbitmask
    contactTestBitMask(): number;
    setContactTestBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520397-allcontactedbodies
    allContactedBodies():SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520430-applyforce
    applyForce(force: CGVector):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519588-applytorque
    applyTorque(torque: CGFloat):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520032-applyforce
    applyForce_atPoint(force: CGVector, point: CGPoint):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519900-applyimpulse
    applyImpulse(impulse: CGVector):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520122-applyangularimpulse
    applyAngularImpulse(impulse: CGFloat):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520407-applyimpulse
    applyImpulse_atPoint(impulse: CGVector, point: CGPoint):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519635-velocity
    velocity(): CGVector;
    setVelocity(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519766-angularvelocity
    angularVelocity(): CGFloat;
    setAngularVelocity(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520256-resting
    resting(): BOOL;
    setResting(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520049-node
    node(): SKNode;
    setNode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519849-joints
    joints(): SKPhysicsJoint;
    setJoints(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520280-fieldbitmask
    fieldBitMask(): number;
    setFieldBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519881-charge
    charge(): CGFloat;
    setCharge(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520354-pinned
    pinned(): BOOL;
    setPinned(): void;
    //
    alloc():SKPhysicsBody;
    //
    init():SKPhysicsBody;
  }
}

declare const SKPhysicsBody: cocoascript.SKPhysicsBody;
declare namespace cocoascript {
  /**
   * The definition of an arbitrary area.
   * doc://com.apple.documentation/documentation/spritekit/skregion
   */
  interface SKRegion extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skregion/1520061-infiniteregion
    infiniteRegion():SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1520385-initwithsize
    initWithSize(size: CGSize):SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1520219-initwithradius
    initWithRadius(radius: number):SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1519857-initwithpath
    initWithPath(path: CGPathRef):SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1519700-inverseregion
    inverseRegion():SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1519879-regionbydifferencefromregion
    regionByDifferenceFromRegion(region: SKRegion):SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1519646-regionbyintersectionwithregion
    regionByIntersectionWithRegion(region: SKRegion):SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1519702-regionbyunionwithregion
    regionByUnionWithRegion(region: SKRegion):SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1520042-path
    path(): CGPathRef;
    setPath(): void;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1519695-containspoint
    containsPoint(point: CGPoint):BOOL;
    //
    alloc():SKRegion;
    //
    init():SKRegion;
  }
}

declare const SKRegion: cocoascript.SKRegion;
declare namespace cocoascript {
  /**
   * An image, decoded on the GPU, that can be used to render various SpriteKit objects.
   * doc://com.apple.documentation/documentation/spritekit/sktexture
   */
  interface SKTexture extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/sktexture/1519772-size
    size():CGSize;
    // doc://com.apple.documentation/documentation/spritekit/sktexture/1519707-texturerect
    textureRect():CGRect;
    // doc://com.apple.documentation/documentation/spritekit/sktexture/1519659-filteringmode
    filteringMode(): SKTextureFilteringMode;
    setFilteringMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktexture/1519960-usesmipmaps
    usesMipmaps(): BOOL;
    setUsesMipmaps(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktexture/1519755-cgimage
    CGImage():CGImageRef;
    // doc://com.apple.documentation/documentation/spritekit/sktexture/1520172-preloadwithcompletionhandler
    preloadWithCompletionHandler(completionHandler: void):void;
    // doc://com.apple.documentation/documentation/spritekit/sktexture/1519817-preloadtextures
    preloadTextures_withCompletionHandler(textures: SKTexture, completionHandler: void):void;
    //
    alloc():SKTexture;
    //
    init():SKTexture;
  }
}

declare const SKTexture: cocoascript.SKTexture;
declare namespace cocoascript {
  /**
   * A two-dimensional array of images.
   * doc://com.apple.documentation/documentation/spritekit/sktilemapnode
   */
  interface SKTileMapNode extends SKNode {
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643608-anchorpoint
    anchorPoint(): CGPoint;
    setAnchorPoint(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643594-tilesize
    tileSize(): CGSize;
    setTileSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643610-tileset
    tileSet(): SKTileSet;
    setTileSet(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643600-numberofcolumns
    numberOfColumns(): NSUInteger;
    setNumberOfColumns(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643611-numberofrows
    numberOfRows(): NSUInteger;
    setNumberOfRows(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643599-centeroftileatcolumn
    centerOfTileAtColumn_row(column: NSUInteger, row: NSUInteger):CGPoint;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643617-tilecolumnindexfromposition
    tileColumnIndexFromPosition(position: CGPoint):NSUInteger;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643602-tiledefinitionatcolumn
    tileDefinitionAtColumn_row(column: NSUInteger, row: NSUInteger):SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643613-tilegroupatcolumn
    tileGroupAtColumn_row(column: NSUInteger, row: NSUInteger):SKTileGroup;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643614-tilerowindexfromposition
    tileRowIndexFromPosition(position: CGPoint):NSUInteger;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643595-mapsize
    mapSize(): CGSize;
    setMapSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643601-color
    color(): UIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643607-colorblendfactor
    colorBlendFactor(): CGFloat;
    setColorBlendFactor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643618-lightingbitmask
    lightingBitMask(): number;
    setLightingBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643598-blendmode
    blendMode(): SKBlendMode;
    setBlendMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643596-shader
    shader(): SKShader;
    setShader(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/2715851-attributevalues
    attributeValues(): SKAttributeValue;
    setAttributeValues(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/2715852-setvalue
    setValue_forAttributeNamed(value: SKAttributeValue, key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/2715847-valueforattributenamed
    valueForAttributeNamed(key: string | cocoascript.NSString):SKAttributeValue;
    //
    alloc():SKTileMapNode;
    //
    init():SKTileMapNode;
  }
}

declare const SKTileMapNode: cocoascript.SKTileMapNode;
declare namespace cocoascript {
  /**
   * A container for related tile groups.
   * doc://com.apple.documentation/documentation/spritekit/sktileset
   */
  interface SKTileSet extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643819-tilesetnamed
    tileSetNamed(name: string | cocoascript.NSString):SKTileSet;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643830-tilesetfromurl
    tileSetFromURL(url: NSURL):SKTileSet;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643885-initwithtilegroups
    initWithTileGroups(tileGroups: SKTileGroup):SKTileSet;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643872-tilesetwithtilegroups
    tileSetWithTileGroups(tileGroups: SKTileGroup):SKTileSet;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643896-initwithtilegroups
    initWithTileGroups_tileSetType(tileGroups: SKTileGroup, tileSetType: SKTileSetType):SKTileSet;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643843-tilesetwithtilegroups
    tileSetWithTileGroups_tileSetType(tileGroups: SKTileGroup, tileSetType: SKTileSetType):SKTileSet;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643878-defaulttilegroup
    defaultTileGroup(): SKTileGroup;
    setDefaultTileGroup(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643889-defaulttilesize
    defaultTileSize(): CGSize;
    setDefaultTileSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643888-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643874-tilegroups
    tileGroups(): SKTileGroup;
    setTileGroups(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643836-type
    type(): SKTileSetType;
    setType(): void;
    //
    alloc():SKTileSet;
    //
    init():SKTileSet;
  }
}

declare const SKTileSet: cocoascript.SKTileSet;
declare namespace cocoascript {
  /**
   * Rules that describe how various tiles should be placed in a map.
   * doc://com.apple.documentation/documentation/spritekit/sktilegrouprule
   */
  interface SKTileGroupRule extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/sktilegrouprule/1643837-initwithadjacency
    initWithAdjacency_tileDefinitions(adjacency: SKTileAdjacencyMask, tileDefinitions: SKTileDefinition):SKTileGroupRule;
    // doc://com.apple.documentation/documentation/spritekit/sktilegrouprule/1643846-tilegrouprulewithadjacency
    tileGroupRuleWithAdjacency_tileDefinitions(adjacency: SKTileAdjacencyMask, tileDefinitions: SKTileDefinition):SKTileGroupRule;
    // doc://com.apple.documentation/documentation/spritekit/sktilegrouprule/1643818-adjacency
    adjacency(): SKTileAdjacencyMask;
    setAdjacency(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilegrouprule/1643860-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilegrouprule/1643823-tiledefinitions
    tileDefinitions(): SKTileDefinition;
    setTileDefinitions(): void;
    //
    alloc():SKTileGroupRule;
    //
    init():SKTileGroupRule;
  }
}

declare const SKTileGroupRule: cocoascript.SKTileGroupRule;
declare namespace cocoascript {
  /**
   * A set of tiles that collectively define one type of terrain.
   * doc://com.apple.documentation/documentation/spritekit/sktilegroup
   */
  interface SKTileGroup extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/sktilegroup/1643832-initwithtiledefinition
    initWithTileDefinition(tileDefinition: SKTileDefinition):SKTileGroup;
    // doc://com.apple.documentation/documentation/spritekit/sktilegroup/1643887-tilegroupwithtiledefinition
    tileGroupWithTileDefinition(tileDefinition: SKTileDefinition):SKTileGroup;
    // doc://com.apple.documentation/documentation/spritekit/sktilegroup/1643839-initwithrules
    initWithRules(rules: SKTileGroupRule):SKTileGroup;
    // doc://com.apple.documentation/documentation/spritekit/sktilegroup/1643891-tilegroupwithrules
    tileGroupWithRules(rules: SKTileGroupRule):SKTileGroup;
    // doc://com.apple.documentation/documentation/spritekit/sktilegroup/1643893-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilegroup/1643867-rules
    rules(): SKTileGroupRule;
    setRules(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilegroup/1643840-emptytilegroup
    emptyTileGroup():SKTileGroup;
    //
    alloc():SKTileGroup;
    //
    init():SKTileGroup;
  }
}

declare const SKTileGroup: cocoascript.SKTileGroup;
declare namespace cocoascript {
  /**
   * A single tile that can be repeated in a tile map.
   * doc://com.apple.documentation/documentation/spritekit/sktiledefinition
   */
  interface SKTileDefinition extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645815-initwithtexture
    initWithTexture(texture: SKTexture):SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1646654-tiledefinitionwithtexture
    tileDefinitionWithTexture(texture: SKTexture):SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645778-initwithtexture
    initWithTexture_normalTexture_size(texture: SKTexture, normalTexture: SKTexture, size: CGSize):SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1646656-tiledefinitionwithtexture
    tileDefinitionWithTexture_normalTexture_size(texture: SKTexture, normalTexture: SKTexture, size: CGSize):SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645787-initwithtexture
    initWithTexture_size(texture: SKTexture, size: CGSize):SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1646652-tiledefinitionwithtexture
    tileDefinitionWithTexture_size(texture: SKTexture, size: CGSize):SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645814-initwithtextures
    initWithTextures_normalTextures_size_timePerFrame(textures: SKTexture, normalTextures: SKTexture, size: CGSize, timePerFrame: CGFloat):SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1646655-tiledefinitionwithtextures
    tileDefinitionWithTextures_normalTextures_size_timePerFrame(textures: SKTexture, normalTextures: SKTexture, size: CGSize, timePerFrame: CGFloat):SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645776-initwithtextures
    initWithTextures_size_timePerFrame(textures: SKTexture, size: CGSize, timePerFrame: CGFloat):SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1646653-tiledefinitionwithtextures
    tileDefinitionWithTextures_size_timePerFrame(textures: SKTexture, size: CGSize, timePerFrame: CGFloat):SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645804-fliphorizontally
    flipHorizontally(): BOOL;
    setFlipHorizontally(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645800-flipvertically
    flipVertically(): BOOL;
    setFlipVertically(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645775-rotation
    rotation(): SKTileDefinitionRotation;
    setRotation(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645802-textures
    textures(): SKTexture;
    setTextures(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645780-normaltextures
    normalTextures(): SKTexture;
    setNormalTextures(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645811-timeperframe
    timePerFrame(): CGFloat;
    setTimePerFrame(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645813-userdata
    userData(): NSMutableDictionary;
    setUserData(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645779-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645820-placementweight
    placementWeight(): NSUInteger;
    setPlacementWeight(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645790-size
    size(): CGSize;
    setSize(): void;
    //
    alloc():SKTileDefinition;
    //
    init():SKTileDefinition;
  }
}

declare const SKTileDefinition: cocoascript.SKTileDefinition;
declare namespace cocoascript {
  /**
   * A definition for a deformation of nodes that conform to
   * doc://com.apple.documentation/documentation/spritekit/skwarpgeometry
   */
  interface SKWarpGeometry extends NSObject {
    //
    alloc():SKWarpGeometry;
    //
    init():SKWarpGeometry;
  }
}

declare const SKWarpGeometry: cocoascript.SKWarpGeometry;
declare namespace cocoascript {
  /**
   * A collection of textures optimized for storage and drawing performance.
   * doc://com.apple.documentation/documentation/spritekit/sktextureatlas
   */
  interface SKTextureAtlas extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/sktextureatlas/1427375-texturenamed
    textureNamed(name: string | cocoascript.NSString):SKTexture;
    // doc://com.apple.documentation/documentation/spritekit/sktextureatlas/1427381-atlasnamed
    atlasNamed(name: string | cocoascript.NSString):SKTextureAtlas;
    // doc://com.apple.documentation/documentation/spritekit/sktextureatlas/1427383-atlaswithdictionary
    atlasWithDictionary(properties: SKTextureAtlas):SKTextureAtlas;
    // doc://com.apple.documentation/documentation/spritekit/sktextureatlas/1427385-preloadwithcompletionhandler
    preloadWithCompletionHandler(completionHandler: void):void;
    // doc://com.apple.documentation/documentation/spritekit/sktextureatlas/1427379-preloadtextureatlases
    preloadTextureAtlases_withCompletionHandler(textureAtlases: SKTextureAtlas, completionHandler: void):void;
    // doc://com.apple.documentation/documentation/spritekit/sktextureatlas/1427377-preloadtextureatlasesnamed
    preloadTextureAtlasesNamed_withCompletionHandler(atlasNames: string | cocoascript.NSString, completionHandler: SKTextureAtlas):void;
    // doc://com.apple.documentation/documentation/spritekit/sktextureatlas/1427373-texturenames
    textureNames(): string | cocoascript.NSString;
    setTextureNames(): void;
    //
    alloc():SKTextureAtlas;
    //
    init():SKTextureAtlas;
  }
}

declare const SKTextureAtlas: cocoascript.SKTextureAtlas;
declare namespace cocoascript {
  /**
   * The driver of the physics engine in a scene; it exposes the ability for you to configure and query the physics system.
   * doc://com.apple.documentation/documentation/spritekit/skphysicsworld
   */
  interface SKPhysicsWorld extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449623-gravity
    gravity(): CGVector;
    setGravity(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449611-speed
    speed(): CGFloat;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449617-addjoint
    addJoint(joint: SKPhysicsJoint):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449621-removealljoints
    removeAllJoints():void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449609-removejoint
    removeJoint(joint: SKPhysicsJoint):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449602-contactdelegate
    contactDelegate(): SKPhysicsContactDelegate;
    setContactDelegate(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449613-bodyalongraystart
    bodyAlongRayStart_end(start: CGPoint, end: CGPoint):SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449625-bodyatpoint
    bodyAtPoint(point: CGPoint):SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449604-bodyinrect
    bodyInRect(rect: CGRect):SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449615-enumeratebodiesalongraystart
    enumerateBodiesAlongRayStart_end_usingBlock(start: CGPoint, end: CGPoint, block: BOOL):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449597-enumeratebodiesatpoint
    enumerateBodiesAtPoint_usingBlock(point: CGPoint, block: BOOL):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449619-enumeratebodiesinrect
    enumerateBodiesInRect_usingBlock(rect: CGRect, block: BOOL):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449627-samplefieldsat
    sampleFieldsAt(position: vector_float3):vector_float3;
    //
    alloc():SKPhysicsWorld;
    //
    init():SKPhysicsWorld;
  }
}

declare const SKPhysicsWorld: cocoascript.SKPhysicsWorld;
declare namespace cocoascript {
  /**
   * The abstract superclass for objects that connect physics bodies.
   * doc://com.apple.documentation/documentation/spritekit/skphysicsjoint
   */
  interface SKPhysicsJoint extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjoint/1520403-bodya
    bodyA(): SKPhysicsBody;
    setBodyA(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjoint/1519693-bodyb
    bodyB(): SKPhysicsBody;
    setBodyB(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjoint/1519866-reactionforce
    reactionForce(): CGVector;
    setReactionForce(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjoint/1519682-reactiontorque
    reactionTorque(): CGFloat;
    setReactionTorque(): void;
    //
    alloc():SKPhysicsJoint;
    //
    init():SKPhysicsJoint;
  }
}

declare const SKPhysicsJoint: cocoascript.SKPhysicsJoint;
declare namespace cocoascript {
  /**
   * A specification of the degree of freedom when solving inverse kinematics.
   * doc://com.apple.documentation/documentation/spritekit/skreachconstraints
   */
  interface SKReachConstraints extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skreachconstraints/1520170-initwithloweranglelimit
    initWithLowerAngleLimit_upperAngleLimit(lowerAngleLimit: CGFloat, upperAngleLimit: CGFloat):SKReachConstraints;
    // doc://com.apple.documentation/documentation/spritekit/skreachconstraints/1519923-loweranglelimit
    lowerAngleLimit(): CGFloat;
    setLowerAngleLimit(): void;
    // doc://com.apple.documentation/documentation/spritekit/skreachconstraints/1519699-upperanglelimit
    upperAngleLimit(): CGFloat;
    setUpperAngleLimit(): void;
    //
    alloc():SKReachConstraints;
    //
    init():SKReachConstraints;
  }
}

declare const SKReachConstraints: cocoascript.SKReachConstraints;
declare namespace cocoascript {
  /**
   * A node that plays audio.
   * doc://com.apple.documentation/documentation/spritekit/skaudionode
   */
  interface SKAudioNode extends SKNode {
    // doc://com.apple.documentation/documentation/spritekit/skaudionode/1520232-initwithavaudionode
    initWithAVAudioNode(node: AVAudioNode):SKAudioNode;
    // doc://com.apple.documentation/documentation/spritekit/skaudionode/1519678-initwithfilenamed
    initWithFileNamed(name: string | cocoascript.NSString):SKAudioNode;
    // doc://com.apple.documentation/documentation/spritekit/skaudionode/1519661-initwithurl
    initWithURL(url: NSURL):SKAudioNode;
    // doc://com.apple.documentation/documentation/spritekit/skaudionode/1520341-initwithcoder
    initWithCoder(aDecoder: NSCoder):SKAudioNode;
    // doc://com.apple.documentation/documentation/spritekit/skaudionode/1519633-avaudionode
    avAudioNode(): AVAudioNode;
    setAvAudioNode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skaudionode/1520418-positional
    positional(): BOOL;
    setPositional(): void;
    // doc://com.apple.documentation/documentation/spritekit/skaudionode/1520336-autoplaylooped
    autoplayLooped(): BOOL;
    setAutoplayLooped(): void;
    //
    alloc():SKAudioNode;
    //
    init():SKAudioNode;
  }
}

declare const SKAudioNode: cocoascript.SKAudioNode;
declare namespace cocoascript {
  /**
   * A container for dynamic shader data associated with a node.
   * doc://com.apple.documentation/documentation/spritekit/skattributevalue
   */
  interface SKAttributeValue extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643441-init
    init():SKAttributeValue;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643428-valuewithfloat
    valueWithFloat(value: number):SKAttributeValue;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643427-valuewithvectorfloat2
    valueWithVectorFloat2(value: vector_float2):SKAttributeValue;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643421-valuewithvectorfloat3
    valueWithVectorFloat3(value: vector_float3):SKAttributeValue;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643436-valuewithvectorfloat4
    valueWithVectorFloat4(value: vector_float4):SKAttributeValue;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643424-floatvalue
    floatValue(): number;
    setFloatValue(): void;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643435-vectorfloat2value
    vectorFloat2Value(): vector_float2;
    setVectorFloat2Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643434-vectorfloat3value
    vectorFloat3Value(): vector_float3;
    setVectorFloat3Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643442-vectorfloat4value
    vectorFloat4Value(): vector_float4;
    setVectorFloat4Value(): void;
    //
    alloc():SKAttributeValue;
    //
    init():SKAttributeValue;
  }
}

declare const SKAttributeValue: cocoascript.SKAttributeValue;
declare namespace cocoascript {
  /**
   * A specification for dynamic per-node data used with a custom shader.
   * doc://com.apple.documentation/documentation/spritekit/skattribute
   */
  interface SKAttribute extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skattribute/1643431-initwithname
    initWithName_type(name: string | cocoascript.NSString, type: SKAttributeType):SKAttribute;
    // doc://com.apple.documentation/documentation/spritekit/skattribute/1643444-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/spritekit/skattribute/1643432-type
    type(): SKAttributeType;
    setType(): void;
    // doc://com.apple.documentation/documentation/spritekit/skattribute/1643426-attributewithname
    attributeWithName_type(name: string | cocoascript.NSString, type: SKAttributeType):SKAttribute;
    //
    alloc():SKAttribute;
    //
    init():SKAttribute;
  }
}

declare const SKAttribute: cocoascript.SKAttribute;
declare namespace cocoascript {
  /**
   * A definition for a grid-based deformation of nodes that conform to
   * doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid
   */
  interface SKWarpGeometryGrid extends SKWarpGeometry {
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690938-gridwithcolumns
    gridWithColumns_rows(cols: NSInteger, rows: NSInteger):SKWarpGeometryGrid;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690945-initwithcolumns
    initWithColumns_rows_sourcePositions_destPositions(cols: NSInteger, rows: NSInteger, sourcePositions: vector_float2, destPositions: vector_float2):SKWarpGeometryGrid;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690986-gridwithcolumns
    gridWithColumns_rows_sourcePositions_destPositions(cols: NSInteger, rows: NSInteger, sourcePositions: vector_float2, destPositions: vector_float2):SKWarpGeometryGrid;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690985-grid
    grid():SKWarpGeometryGrid;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690949-initwithcoder
    initWithCoder(aDecoder: NSCoder):SKWarpGeometryGrid;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690942-numberofcolumns
    numberOfColumns(): NSInteger;
    setNumberOfColumns(): void;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690943-numberofrows
    numberOfRows(): NSInteger;
    setNumberOfRows(): void;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690940-vertexcount
    vertexCount(): NSInteger;
    setVertexCount(): void;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690944-destpositionatindex
    destPositionAtIndex(index: NSInteger):vector_float2;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690952-sourcepositionatindex
    sourcePositionAtIndex(index: NSInteger):vector_float2;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690946-gridbyreplacingdestpositions
    gridByReplacingDestPositions(destPositions: vector_float2):SKWarpGeometryGrid;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690948-gridbyreplacingsourcepositions
    gridByReplacingSourcePositions(sourcePositions: vector_float2):SKWarpGeometryGrid;
    //
    alloc():SKWarpGeometryGrid;
    //
    init():SKWarpGeometryGrid;
  }
}

declare const SKWarpGeometryGrid: cocoascript.SKWarpGeometryGrid;
declare namespace cocoascript {
  /**
   * A view subclass that renders a SpriteKit scene.
   * doc://com.apple.documentation/documentation/spritekit/skview
   */
  interface SKView extends NSView {
    // doc://com.apple.documentation/documentation/spritekit/skview/1520084-scene
    scene(): SKScene;
    setScene(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519705-presentscene
    presentScene(scene: SKScene):void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520090-presentscene
    presentScene_transition(scene: SKScene, transition: SKTransition):void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519654-paused
    paused(): BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1642773-preferredframespersecond
    preferredFramesPerSecond(): NSInteger;
    setPreferredFramesPerSecond(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1642774-delegate
    delegate(): SKViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520008-frameinterval
    frameInterval(): NSInteger;
    setFrameInterval(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1642777-preferredframerate
    preferredFrameRate(): number;
    setPreferredFrameRate(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520215-ignoressiblingorder
    ignoresSiblingOrder(): BOOL;
    setIgnoresSiblingOrder(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519683-shouldcullnonvisiblenodes
    shouldCullNonVisibleNodes(): BOOL;
    setShouldCullNonVisibleNodes(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519697-allowstransparency
    allowsTransparency(): BOOL;
    setAllowsTransparency(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520229-asynchronous
    asynchronous(): BOOL;
    setAsynchronous(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519590-showsfps
    showsFPS(): BOOL;
    setShowsFPS(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520156-showsnodecount
    showsNodeCount(): BOOL;
    setShowsNodeCount(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520112-showsdrawcount
    showsDrawCount(): BOOL;
    setShowsDrawCount(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519652-showsquadcount
    showsQuadCount(): BOOL;
    setShowsQuadCount(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520389-showsphysics
    showsPhysics(): BOOL;
    setShowsPhysics(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520443-showsfields
    showsFields(): BOOL;
    setShowsFields(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520328-convertpoint
    convertPoint_fromScene(point: CGPoint, scene: SKScene):CGPoint;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519847-convertpoint
    convertPoint_toScene(point: CGPoint, scene: SKScene):CGPoint;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519994-texturefromnode
    textureFromNode_crop(node: SKNode, crop: CGRect):SKTexture;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520114-texturefromnode
    textureFromNode(node: SKNode):SKTexture;
    // doc://com.apple.documentation/documentation/spritekit/skview/3548062-disabledepthstencilbuffer
    disableDepthStencilBuffer(): BOOL;
    setDisableDepthStencilBuffer(): void;
    //
    alloc():SKView;
    //
    init():SKView;
  }
}

declare const SKView: cocoascript.SKView;
declare namespace cocoascript {
  /**
   * A description of the contact between two physics bodies.
   * doc://com.apple.documentation/documentation/spritekit/skphysicscontact
   */
  interface SKPhysicsContact extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skphysicscontact/1478533-bodya
    bodyA(): SKPhysicsBody;
    setBodyA(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicscontact/1478526-bodyb
    bodyB(): SKPhysicsBody;
    setBodyB(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicscontact/1478524-contactpoint
    contactPoint(): CGPoint;
    setContactPoint(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicscontact/1478523-collisionimpulse
    collisionImpulse(): CGFloat;
    setCollisionImpulse(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicscontact/1478528-contactnormal
    contactNormal(): CGVector;
    setContactNormal(): void;
    //
    alloc():SKPhysicsContact;
    //
    init():SKPhysicsContact;
  }
}

declare const SKPhysicsContact: cocoascript.SKPhysicsContact;
declare namespace cocoascript {
  /**
   * A node that applies physics effects to nearby nodes.
   * doc://com.apple.documentation/documentation/spritekit/skfieldnode
   */
  interface SKFieldNode extends SKNode {
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520225-dragfield
    dragField():SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520396-electricfield
    electricField():SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520145-lineargravityfieldwithvector
    linearGravityFieldWithVector(direction: vector_float3):SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520134-magneticfield
    magneticField():SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1519947-noisefieldwithsmoothness
    noiseFieldWithSmoothness_animationSpeed(smoothness: CGFloat, speed: CGFloat):SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520382-radialgravityfield
    radialGravityField():SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1519694-springfield
    springField():SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520018-turbulencefieldwithsmoothness
    turbulenceFieldWithSmoothness_animationSpeed(smoothness: CGFloat, speed: CGFloat):SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1519778-velocityfieldwithtexture
    velocityFieldWithTexture(velocityTexture: SKTexture):SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520271-velocityfieldwithvector
    velocityFieldWithVector(direction: vector_float3):SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520157-vortexfield
    vortexField():SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1519710-customfieldwithevaluationblock
    customFieldWithEvaluationBlock(block: SKFieldForceEvaluator):SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520079-enabled
    enabled(): BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520365-exclusive
    exclusive(): BOOL;
    setExclusive(): void;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1519551-region
    region(): SKRegion;
    setRegion(): void;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1519804-minimumradius
    minimumRadius(): number;
    setMinimumRadius(): void;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520143-categorybitmask
    categoryBitMask(): number;
    setCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520152-strength
    strength(): number;
    setStrength(): void;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520445-falloff
    falloff(): number;
    setFalloff(): void;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1519822-animationspeed
    animationSpeed(): number;
    setAnimationSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520273-smoothness
    smoothness(): number;
    setSmoothness(): void;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520091-direction
    direction(): vector_float3;
    setDirection(): void;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1519928-texture
    texture(): SKTexture;
    setTexture(): void;
    //
    alloc():SKFieldNode;
    //
    init():SKFieldNode;
  }
}

declare const SKFieldNode: cocoascript.SKFieldNode;
declare namespace cocoascript {
  /**
   * An object that organizes all of the active SpriteKit content.
   * doc://com.apple.documentation/documentation/spritekit/skscene
   */
  interface SKScene extends SKEffectNode {
    // doc://com.apple.documentation/documentation/spritekit/skscene/1536393-scenewithsize
    sceneWithSize(size: CGSize):SKScene;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520435-initwithsize
    initWithSize(size: CGSize):SKScene;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519831-size
    size(): CGSize;
    setSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519562-scalemode
    scaleMode(): SKSceneScaleMode;
    setScaleMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519696-camera
    camera(): SKCameraNode;
    setCamera(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519864-anchorpoint
    anchorPoint(): CGPoint;
    setAnchorPoint(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1645216-scenedidload
    sceneDidLoad():void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519545-didchangesize
    didChangeSize(oldSize: CGSize):void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519703-willmovefromview
    willMoveFromView(view: SKView):void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519607-didmovetoview
    didMoveToView(view: SKView):void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519802-update
    update(currentTime: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519903-didevaluateactions
    didEvaluateActions():void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519965-didsimulatephysics
    didSimulatePhysics():void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520006-didapplyconstraints
    didApplyConstraints():void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520269-didfinishupdate
    didFinishUpdate():void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520213-delegate
    delegate(): SKSceneDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519726-view
    view(): SKView;
    setView(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520278-backgroundcolor
    backgroundColor(): UIColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519584-physicsworld
    physicsWorld(): SKPhysicsWorld;
    setPhysicsWorld(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520363-listener
    listener(): SKNode;
    setListener(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519644-audioengine
    audioEngine(): AVAudioEngine;
    setAudioEngine(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520395-convertpointfromview
    convertPointFromView(point: CGPoint):CGPoint;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520082-convertpointtoview
    convertPointToView(point: CGPoint):CGPoint;
    //
    alloc():SKScene;
    //
    init():SKScene;
  }
}

declare const SKScene: cocoascript.SKScene;
declare namespace cocoascript {
  /**
   * A node that renders its children into a separate buffer, optionally applying an effect, before drawing the final result.
   * doc://com.apple.documentation/documentation/spritekit/skeffectnode
   */
  interface SKEffectNode extends SKNode {
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/1459392-filter
    filter(): CIFilter;
    setFilter(): void;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/1459385-shouldenableeffects
    shouldEnableEffects(): BOOL;
    setShouldEnableEffects(): void;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/1459390-shouldcenterfilter
    shouldCenterFilter(): BOOL;
    setShouldCenterFilter(): void;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/1459388-shader
    shader(): SKShader;
    setShader(): void;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/2715848-attributevalues
    attributeValues(): SKAttributeValue;
    setAttributeValues(): void;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/2715853-setvalue
    setValue_forAttributeNamed(value: SKAttributeValue, key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/2715844-valueforattributenamed
    valueForAttributeNamed(key: string | cocoascript.NSString):SKAttributeValue;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/1459381-shouldrasterize
    shouldRasterize(): BOOL;
    setShouldRasterize(): void;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/1459386-blendmode
    blendMode(): SKBlendMode;
    setBlendMode(): void;
    //
    alloc():SKEffectNode;
    //
    init():SKEffectNode;
  }
}

declare const SKEffectNode: cocoascript.SKEffectNode;
declare namespace cocoascript {
  /**
   * An image or solid color.
   * doc://com.apple.documentation/documentation/spritekit/skspritenode
   */
  interface SKSpriteNode extends SKNode {
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1520391-initwithimagenamed
    initWithImageNamed(name: string | cocoascript.NSString):SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519721-spritenodewithimagenamed
    spriteNodeWithImageNamed_normalMapped(name: string | cocoascript.NSString, generateNormalMap: BOOL):SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519942-initwithtexture
    initWithTexture(texture: SKTexture):SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1520029-initwithtexture
    initWithTexture_color_size(texture: SKTexture, color: UIColor, size: CGSize):SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1579717-spritenodewithcolor
    spriteNodeWithColor_size(color: UIColor, size: CGSize):SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1579718-spritenodewithimagenamed
    spriteNodeWithImageNamed(name: string | cocoascript.NSString):SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1579716-spritenodewithtexture
    spriteNodeWithTexture(texture: SKTexture):SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519812-spritenodewithtexture
    spriteNodeWithTexture_size(texture: SKTexture, size: CGSize):SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1520153-spritenodewithtexture
    spriteNodeWithTexture_normalMap(texture: SKTexture, normalMap: SKTexture):SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1520011-texture
    texture(): SKTexture;
    setTexture(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519762-initwithcolor
    initWithColor_size(color: UIColor, size: CGSize):SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1520399-initwithcoder
    initWithCoder(aDecoder: NSCoder):SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519668-size
    size(): CGSize;
    setSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1645445-scaletosize
    scaleToSize(size: CGSize):void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519877-anchorpoint
    anchorPoint(): CGPoint;
    setAnchorPoint(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1520119-centerrect
    centerRect(): CGRect;
    setCenterRect(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519639-color
    color(): UIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519780-colorblendfactor
    colorBlendFactor(): CGFloat;
    setColorBlendFactor(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519931-blendmode
    blendMode(): SKBlendMode;
    setBlendMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519637-lightingbitmask
    lightingBitMask(): number;
    setLightingBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519974-shadowedbitmask
    shadowedBitMask(): number;
    setShadowedBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1520325-shadowcastbitmask
    shadowCastBitMask(): number;
    setShadowCastBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519657-normaltexture
    normalTexture(): SKTexture;
    setNormalTexture(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519714-shader
    shader(): SKShader;
    setShader(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/2715845-attributevalues
    attributeValues(): SKAttributeValue;
    setAttributeValues(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/2715849-setvalue
    setValue_forAttributeNamed(value: SKAttributeValue, key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/2715846-valueforattributenamed
    valueForAttributeNamed(key: string | cocoascript.NSString):SKAttributeValue;
    //
    alloc():SKSpriteNode;
    //
    init():SKSpriteNode;
  }
}

declare const SKSpriteNode: cocoascript.SKSpriteNode;
declare namespace cocoascript {
  /**
   * A source of various particle effects.
   * doc://com.apple.documentation/documentation/spritekit/skemitternode
   */
  interface SKEmitterNode extends SKNode {
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398012-targetnode
    targetNode(): SKNode;
    setTargetNode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398027-advancesimulationtime
    advanceSimulationTime(sec: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398053-resetsimulation
    resetSimulation():void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398039-particlebirthrate
    particleBirthRate(): CGFloat;
    setParticleBirthRate(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398043-numparticlestoemit
    numParticlesToEmit(): NSUInteger;
    setNumParticlesToEmit(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397986-particlerenderorder
    particleRenderOrder(): SKParticleRenderOrder;
    setParticleRenderOrder(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398000-particlelifetime
    particleLifetime(): CGFloat;
    setParticleLifetime(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397994-particlelifetimerange
    particleLifetimeRange(): CGFloat;
    setParticleLifetimeRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398019-particleposition
    particlePosition(): CGPoint;
    setParticlePosition(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397972-particlepositionrange
    particlePositionRange(): CGVector;
    setParticlePositionRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398055-particlezposition
    particleZPosition(): CGFloat;
    setParticleZPosition(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397974-particlezpositionrange
    particleZPositionRange(): CGFloat;
    setParticleZPositionRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398061-particlespeed
    particleSpeed(): CGFloat;
    setParticleSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398045-particlespeedrange
    particleSpeedRange(): CGFloat;
    setParticleSpeedRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398035-emissionangle
    emissionAngle(): CGFloat;
    setEmissionAngle(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398067-emissionanglerange
    emissionAngleRange(): CGFloat;
    setEmissionAngleRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398017-xacceleration
    xAcceleration(): CGFloat;
    setXAcceleration(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397982-yacceleration
    yAcceleration(): CGFloat;
    setYAcceleration(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398008-particlezpositionspeed
    particleZPositionSpeed(): CGFloat;
    setParticleZPositionSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398025-particlerotation
    particleRotation(): CGFloat;
    setParticleRotation(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397996-particlerotationrange
    particleRotationRange(): CGFloat;
    setParticleRotationRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397968-particlerotationspeed
    particleRotationSpeed(): CGFloat;
    setParticleRotationSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398014-particlescale
    particleScale(): CGFloat;
    setParticleScale(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397990-particlescalerange
    particleScaleRange(): CGFloat;
    setParticleScaleRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398073-particlescalespeed
    particleScaleSpeed(): CGFloat;
    setParticleScaleSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398029-particlescalesequence
    particleScaleSequence(): SKKeyframeSequence;
    setParticleScaleSequence(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398004-particletexture
    particleTexture(): SKTexture;
    setParticleTexture(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398063-particlesize
    particleSize(): CGSize;
    setParticleSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397992-particlecolorsequence
    particleColorSequence(): SKKeyframeSequence;
    setParticleColorSequence(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398049-particlecolor
    particleColor(): UIColor;
    setParticleColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397976-particlecoloralpharange
    particleColorAlphaRange(): CGFloat;
    setParticleColorAlphaRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398075-particlecolorbluerange
    particleColorBlueRange(): CGFloat;
    setParticleColorBlueRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398065-particlecolorgreenrange
    particleColorGreenRange(): CGFloat;
    setParticleColorGreenRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397998-particlecolorredrange
    particleColorRedRange(): CGFloat;
    setParticleColorRedRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398051-particlecoloralphaspeed
    particleColorAlphaSpeed(): CGFloat;
    setParticleColorAlphaSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398023-particlecolorbluespeed
    particleColorBlueSpeed(): CGFloat;
    setParticleColorBlueSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398033-particlecolorgreenspeed
    particleColorGreenSpeed(): CGFloat;
    setParticleColorGreenSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398041-particlecolorredspeed
    particleColorRedSpeed(): CGFloat;
    setParticleColorRedSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397980-particlecolorblendfactorsequence
    particleColorBlendFactorSequence(): SKKeyframeSequence;
    setParticleColorBlendFactorSequence(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398071-particlecolorblendfactor
    particleColorBlendFactor(): CGFloat;
    setParticleColorBlendFactor(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398047-particlecolorblendfactorrange
    particleColorBlendFactorRange(): CGFloat;
    setParticleColorBlendFactorRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398037-particlecolorblendfactorspeed
    particleColorBlendFactorSpeed(): CGFloat;
    setParticleColorBlendFactorSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397978-particleblendmode
    particleBlendMode(): SKBlendMode;
    setParticleBlendMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398057-particlealphasequence
    particleAlphaSequence(): SKKeyframeSequence;
    setParticleAlphaSequence(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397988-particlealpha
    particleAlpha(): CGFloat;
    setParticleAlpha(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398031-particlealpharange
    particleAlphaRange(): CGFloat;
    setParticleAlphaRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398021-particlealphaspeed
    particleAlphaSpeed(): CGFloat;
    setParticleAlphaSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397970-particleaction
    particleAction(): SKAction;
    setParticleAction(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398006-fieldbitmask
    fieldBitMask(): number;
    setFieldBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398069-shader
    shader(): SKShader;
    setShader(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/2715850-attributevalues
    attributeValues(): SKAttributeValue;
    setAttributeValues(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/2715854-setvalue
    setValue_forAttributeNamed(value: SKAttributeValue, key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/2715842-valueforattributenamed
    valueForAttributeNamed(key: string | cocoascript.NSString):SKAttributeValue;
    //
    alloc():SKEmitterNode;
    //
    init():SKEmitterNode;
  }
}

declare const SKEmitterNode: cocoascript.SKEmitterNode;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/skinterpolationmode
  type SKInterpolationMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/skrepeatmode
  type SKRepeatMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/sktransitiondirection
  type SKTransitionDirection = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/skactiontimingmode
  type SKActionTimingMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/skactiontimingfunction
  type SKActionTimingFunction = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/skuniformtype
  type SKUniformType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A node that determines which parts of the scene are visible within a view.
   * doc://com.apple.documentation/documentation/spritekit/skcameranode
   */
  interface SKCameraNode extends SKNode {
    // doc://com.apple.documentation/documentation/spritekit/skcameranode/1434222-containednodeset
    containedNodeSet():SKNode;
    // doc://com.apple.documentation/documentation/spritekit/skcameranode/1434224-containsnode
    containsNode(node: SKNode):BOOL;
    //
    alloc():SKCameraNode;
    //
    init():SKCameraNode;
  }
}

declare const SKCameraNode: cocoascript.SKCameraNode;
declare namespace cocoascript {
  /**
   * A node that's defined in an archived
   * doc://com.apple.documentation/documentation/spritekit/skreferencenode
   */
  interface SKReferenceNode extends SKNode {
    // doc://com.apple.documentation/documentation/spritekit/skreferencenode/1508365-referencenodewithurl
    referenceNodeWithURL(referenceURL: NSURL):SKReferenceNode;
    // doc://com.apple.documentation/documentation/spritekit/skreferencenode/1508366-initwithurl
    initWithURL(url: NSURL):SKReferenceNode;
    // doc://com.apple.documentation/documentation/spritekit/skreferencenode/1508368-referencenodewithfilenamed
    referenceNodeWithFileNamed(fileName: string | cocoascript.NSString):SKReferenceNode;
    // doc://com.apple.documentation/documentation/spritekit/skreferencenode/1508369-initwithfilenamed
    initWithFileNamed(fileName: string | cocoascript.NSString):SKReferenceNode;
    // doc://com.apple.documentation/documentation/spritekit/skreferencenode/1508363-initwithcoder
    initWithCoder(aDecoder: NSCoder):SKReferenceNode;
    // doc://com.apple.documentation/documentation/spritekit/skreferencenode/1508371-resolvereferencenode
    resolveReferenceNode():void;
    // doc://com.apple.documentation/documentation/spritekit/skreferencenode/1508364-didloadreferencenode
    didLoadReferenceNode(node: SKNode):void;
    //
    alloc():SKReferenceNode;
    //
    init():SKReferenceNode;
  }
}

declare const SKReferenceNode: cocoascript.SKReferenceNode;
declare namespace cocoascript {
  /**
   * A mathematical shape that can be stroked or filled.
   * doc://com.apple.documentation/documentation/spritekit/skshapenode
   */
  interface SKShapeNode extends SKNode {
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520022-shapenodewithpath
    shapeNodeWithPath(path: CGPathRef):SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519649-shapenodewithpath
    shapeNodeWithPath_centered(path: CGPathRef, centered: BOOL):SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519741-path
    path(): CGPathRef;
    setPath(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520047-shapenodewithrect
    shapeNodeWithRect(rect: CGRect):SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520147-shapenodewithrectofsize
    shapeNodeWithRectOfSize(size: CGSize):SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519769-shapenodewithrect
    shapeNodeWithRect_cornerRadius(rect: CGRect, cornerRadius: CGFloat):SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519712-shapenodewithrectofsize
    shapeNodeWithRectOfSize_cornerRadius(size: CGSize, cornerRadius: CGFloat):SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519570-shapenodewithcircleofradius
    shapeNodeWithCircleOfRadius(radius: CGFloat):SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519980-shapenodewithellipseofsize
    shapeNodeWithEllipseOfSize(size: CGSize):SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520412-shapenodewithellipseinrect
    shapeNodeWithEllipseInRect(rect: CGRect):SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520120-shapenodewithpoints
    shapeNodeWithPoints_count(points: CGPoint, numPoints: any):SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520140-shapenodewithsplinepoints
    shapeNodeWithSplinePoints_count(points: CGPoint, numPoints: any):SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520154-fillcolor
    fillColor(): UIColor;
    setFillColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519956-filltexture
    fillTexture(): SKTexture;
    setFillTexture(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519885-linewidth
    lineWidth(): CGFloat;
    setLineWidth(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519748-strokecolor
    strokeColor(): UIColor;
    setStrokeColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519824-stroketexture
    strokeTexture(): SKTexture;
    setStrokeTexture(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520116-glowwidth
    glowWidth(): CGFloat;
    setGlowWidth(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520360-linecap
    lineCap(): CGLineCap;
    setLineCap(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520358-linejoin
    lineJoin(): CGLineJoin;
    setLineJoin(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520240-miterlimit
    miterLimit(): CGFloat;
    setMiterLimit(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519719-antialiased
    antialiased(): BOOL;
    setAntialiased(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520045-blendmode
    blendMode(): SKBlendMode;
    setBlendMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520398-linelength
    lineLength(): CGFloat;
    setLineLength(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519784-strokeshader
    strokeShader(): SKShader;
    setStrokeShader(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519629-fillshader
    fillShader(): SKShader;
    setFillShader(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/2715841-attributevalues
    attributeValues(): SKAttributeValue;
    setAttributeValues(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/2715855-setvalue
    setValue_forAttributeNamed(value: SKAttributeValue, key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/2715843-valueforattributenamed
    valueForAttributeNamed(key: string | cocoascript.NSString):SKAttributeValue;
    //
    alloc():SKShapeNode;
    //
    init():SKShapeNode;
  }
}

declare const SKShapeNode: cocoascript.SKShapeNode;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/sktexturefilteringmode
  type SKTextureFilteringMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A texture whose contents can be dynamically updated.
   * doc://com.apple.documentation/documentation/spritekit/skmutabletexture
   */
  interface SKMutableTexture extends SKTexture {
    // doc://com.apple.documentation/documentation/spritekit/skmutabletexture/1397874-mutabletexturewithsize
    mutableTextureWithSize(size: CGSize):SKMutableTexture;
    // doc://com.apple.documentation/documentation/spritekit/skmutabletexture/1397879-initwithsize
    initWithSize_pixelFormat(size: CGSize, format: number):SKMutableTexture;
    // doc://com.apple.documentation/documentation/spritekit/skmutabletexture/1397883-initwithsize
    initWithSize(size: CGSize):SKMutableTexture;
    // doc://com.apple.documentation/documentation/spritekit/skmutabletexture/1397881-modifypixeldatawithblock
    modifyPixelDataWithBlock(block: any):void;
    //
    alloc():SKMutableTexture;
    //
    init():SKMutableTexture;
  }
}

declare const SKMutableTexture: cocoascript.SKMutableTexture;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/sktilesettype
  type SKTileSetType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/sktileadjacencymask
  type SKTileAdjacencyMask = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/sktiledefinitionrotation
  type SKTileDefinitionRotation = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A joint that fuses two physics bodies together at a reference point.
   * doc://com.apple.documentation/documentation/spritekit/skphysicsjointfixed
   */
  interface SKPhysicsJointFixed extends SKPhysicsJoint {
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointfixed/1520076-jointwithbodya
    jointWithBodyA_bodyB_anchor(bodyA: SKPhysicsBody, bodyB: SKPhysicsBody, anchor: CGPoint):SKPhysicsJointFixed;
    //
    alloc():SKPhysicsJointFixed;
    //
    init():SKPhysicsJointFixed;
  }
}

declare const SKPhysicsJointFixed: cocoascript.SKPhysicsJointFixed;
declare namespace cocoascript {
  /**
   * A joint that imposes a maximum distance between two physics bodies, as if they were connected by a rope.
   * doc://com.apple.documentation/documentation/spritekit/skphysicsjointlimit
   */
  interface SKPhysicsJointLimit extends SKPhysicsJoint {
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointlimit/1520402-jointwithbodya
    jointWithBodyA_bodyB_anchorA_anchorB(bodyA: SKPhysicsBody, bodyB: SKPhysicsBody, anchorA: CGPoint, anchorB: CGPoint):SKPhysicsJointLimit;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointlimit/1519978-maxlength
    maxLength(): CGFloat;
    setMaxLength(): void;
    //
    alloc():SKPhysicsJointLimit;
    //
    init():SKPhysicsJointLimit;
  }
}

declare const SKPhysicsJointLimit: cocoascript.SKPhysicsJointLimit;
declare namespace cocoascript {
  /**
   * A joint that pins together two physics bodies, allowing independent rotation.
   * doc://com.apple.documentation/documentation/spritekit/skphysicsjointpin
   */
  interface SKPhysicsJointPin extends SKPhysicsJoint {
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointpin/1519698-jointwithbodya
    jointWithBodyA_bodyB_anchor(bodyA: SKPhysicsBody, bodyB: SKPhysicsBody, anchor: CGPoint):SKPhysicsJointPin;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointpin/1520259-rotationspeed
    rotationSpeed(): CGFloat;
    setRotationSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointpin/1520292-shouldenablelimits
    shouldEnableLimits(): BOOL;
    setShouldEnableLimits(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointpin/1520130-loweranglelimit
    lowerAngleLimit(): CGFloat;
    setLowerAngleLimit(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointpin/1519967-upperanglelimit
    upperAngleLimit(): CGFloat;
    setUpperAngleLimit(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointpin/1520299-frictiontorque
    frictionTorque(): CGFloat;
    setFrictionTorque(): void;
    //
    alloc():SKPhysicsJointPin;
    //
    init():SKPhysicsJointPin;
  }
}

declare const SKPhysicsJointPin: cocoascript.SKPhysicsJointPin;
declare namespace cocoascript {
  /**
   * A joint that allows two physics bodies to slide along an axis.
   * doc://com.apple.documentation/documentation/spritekit/skphysicsjointsliding
   */
  interface SKPhysicsJointSliding extends SKPhysicsJoint {
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointsliding/1520333-jointwithbodya
    jointWithBodyA_bodyB_anchor_axis(bodyA: SKPhysicsBody, bodyB: SKPhysicsBody, anchor: CGPoint, axis: CGVector):SKPhysicsJointSliding;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointsliding/1520053-shouldenablelimits
    shouldEnableLimits(): BOOL;
    setShouldEnableLimits(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointsliding/1519969-lowerdistancelimit
    lowerDistanceLimit(): CGFloat;
    setLowerDistanceLimit(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointsliding/1519836-upperdistancelimit
    upperDistanceLimit(): CGFloat;
    setUpperDistanceLimit(): void;
    //
    alloc():SKPhysicsJointSliding;
    //
    init():SKPhysicsJointSliding;
  }
}

declare const SKPhysicsJointSliding: cocoascript.SKPhysicsJointSliding;
declare namespace cocoascript {
  /**
   * A joint that simulates a spring connecting two physics bodies.
   * doc://com.apple.documentation/documentation/spritekit/skphysicsjointspring
   */
  interface SKPhysicsJointSpring extends SKPhysicsJoint {
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointspring/1519665-jointwithbodya
    jointWithBodyA_bodyB_anchorA_anchorB(bodyA: SKPhysicsBody, bodyB: SKPhysicsBody, anchorA: CGPoint, anchorB: CGPoint):SKPhysicsJointSpring;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointspring/1519709-damping
    damping(): CGFloat;
    setDamping(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointspring/1519806-frequency
    frequency(): CGFloat;
    setFrequency(): void;
    //
    alloc():SKPhysicsJointSpring;
    //
    init():SKPhysicsJointSpring;
  }
}

declare const SKPhysicsJointSpring: cocoascript.SKPhysicsJointSpring;
declare namespace cocoascript {
  /**
   * A node that lights surrounding nodes.
   * doc://com.apple.documentation/documentation/spritekit/sklightnode
   */
  interface SKLightNode extends SKNode {
    // doc://com.apple.documentation/documentation/spritekit/sklightnode/1519826-enabled
    enabled(): BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklightnode/1519940-categorybitmask
    categoryBitMask(): number;
    setCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklightnode/1520139-ambientcolor
    ambientColor(): UIColor;
    setAmbientColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklightnode/1520244-lightcolor
    lightColor(): UIColor;
    setLightColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklightnode/1519844-shadowcolor
    shadowColor(): UIColor;
    setShadowColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklightnode/1519776-falloff
    falloff(): CGFloat;
    setFalloff(): void;
    //
    alloc():SKLightNode;
    //
    init():SKLightNode;
  }
}

declare const SKLightNode: cocoascript.SKLightNode;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/skattributetype
  type SKAttributeType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An object that renders a scene into a custom Metal rendering pipeline and drives the scene update cycle.
   * doc://com.apple.documentation/documentation/spritekit/skrenderer
   */
  interface SKRenderer extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866072-rendererwithdevice
    rendererWithDevice(device: any):SKRenderer;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866081-scene
    scene(): SKScene;
    setScene(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866073-renderwithviewport
    renderWithViewport_commandBuffer_renderPassDescriptor(viewport: CGRect, commandBuffer: any, renderPassDescriptor: any):void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866083-renderwithviewport
    renderWithViewport_renderCommandEncoder_renderPassDescriptor_commandQueue(viewport: CGRect, renderCommandEncoder: any, renderPassDescriptor: any, commandQueue: any):void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866080-updateattime
    updateAtTime(currentTime: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866074-ignoressiblingorder
    ignoresSiblingOrder(): BOOL;
    setIgnoresSiblingOrder(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866075-shouldcullnonvisiblenodes
    shouldCullNonVisibleNodes(): BOOL;
    setShouldCullNonVisibleNodes(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866071-showsnodecount
    showsNodeCount(): BOOL;
    setShowsNodeCount(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866077-showsdrawcount
    showsDrawCount(): BOOL;
    setShowsDrawCount(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866078-showsquadcount
    showsQuadCount(): BOOL;
    setShowsQuadCount(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866076-showsphysics
    showsPhysics(): BOOL;
    setShowsPhysics(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866082-showsfields
    showsFields(): BOOL;
    setShowsFields(): void;
    //
    alloc():SKRenderer;
    //
    init():SKRenderer;
  }
}

declare const SKRenderer: cocoascript.SKRenderer;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/sknodefocusbehavior
  type SKNodeFocusBehavior = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/skfieldforceevaluator
  type SKFieldForceEvaluator = cocoascript.NSTimeInterval;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/skscenescalemode
  type SKSceneScaleMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A node that masks pixels drawn by its children so that only some pixels are seen.
   * doc://com.apple.documentation/documentation/spritekit/skcropnode
   */
  interface SKCropNode extends SKNode {
    // doc://com.apple.documentation/documentation/spritekit/skcropnode/1520449-masknode
    maskNode(): SKNode;
    setMaskNode(): void;
    //
    alloc():SKCropNode;
    //
    init():SKCropNode;
  }
}

declare const SKCropNode: cocoascript.SKCropNode;
declare namespace cocoascript {
  /**
   * A node that allows its children to rotate in 3D.
   * doc://com.apple.documentation/documentation/spritekit/sktransformnode
   */
  interface SKTransformNode extends SKNode {
    // doc://com.apple.documentation/documentation/spritekit/sktransformnode/2883239-xrotation
    xRotation(): CGFloat;
    setXRotation(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktransformnode/2883242-yrotation
    yRotation(): CGFloat;
    setYRotation(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktransformnode/2883246-seteulerangles
    setEulerAngles(euler: vector_float3):void;
    // doc://com.apple.documentation/documentation/spritekit/sktransformnode/2883240-setquaternion
    setQuaternion(quaternion: simd_quatf):void;
    // doc://com.apple.documentation/documentation/spritekit/sktransformnode/2883241-setrotationmatrix
    setRotationMatrix(rotationMatrix: matrix_float3x3):void;
    // doc://com.apple.documentation/documentation/spritekit/sktransformnode/2883245-eulerangles
    eulerAngles():vector_float3;
    // doc://com.apple.documentation/documentation/spritekit/sktransformnode/2883244-quaternion
    quaternion():simd_quatf;
    // doc://com.apple.documentation/documentation/spritekit/sktransformnode/2883247-rotationmatrix
    rotationMatrix():matrix_float3x3;
    //
    alloc():SKTransformNode;
    //
    init():SKTransformNode;
  }
}

declare const SKTransformNode: cocoascript.SKTransformNode;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/skblendmode
  type SKBlendMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A graphical element that draws text.
   * doc://com.apple.documentation/documentation/spritekit/sklabelnode
   */
  interface SKLabelNode extends SKNode {
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1519917-initwithfontnamed
    initWithFontNamed(fontName: string | cocoascript.NSString):SKLabelNode;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1576448-labelnodewithfontnamed
    labelNodeWithFontNamed(fontName: string | cocoascript.NSString):SKLabelNode;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1519612-labelnodewithtext
    labelNodeWithText(text: string | cocoascript.NSString):SKLabelNode;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/2865817-labelnodewithattributedtext
    labelNodeWithAttributedText(attributedText: NSAttributedString):SKLabelNode;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1519788-text
    text(): string | cocoascript.NSString;
    setText(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/2865816-attributedtext
    attributedText(): NSAttributedString;
    setAttributedText(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1520057-fontcolor
    fontColor(): UIColor;
    setFontColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1520129-fontname
    fontName(): string | cocoascript.NSString;
    setFontName(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1520208-fontsize
    fontSize(): CGFloat;
    setFontSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1519933-verticalalignmentmode
    verticalAlignmentMode(): SKLabelVerticalAlignmentMode;
    setVerticalAlignmentMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1519711-horizontalalignmentmode
    horizontalAlignmentMode(): SKLabelHorizontalAlignmentMode;
    setHorizontalAlignmentMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/2865814-preferredmaxlayoutwidth
    preferredMaxLayoutWidth(): CGFloat;
    setPreferredMaxLayoutWidth(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/2865818-linebreakmode
    lineBreakMode(): NSLineBreakMode;
    setLineBreakMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/2865815-numberoflines
    numberOfLines(): NSInteger;
    setNumberOfLines(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1519938-color
    color(): UIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1519724-colorblendfactor
    colorBlendFactor(): CGFloat;
    setColorBlendFactor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1519598-blendmode
    blendMode(): SKBlendMode;
    setBlendMode(): void;
    //
    alloc():SKLabelNode;
    //
    init():SKLabelNode;
  }
}

declare const SKLabelNode: cocoascript.SKLabelNode;
declare namespace cocoascript {
  /**
   * A graphical element that plays video content.
   * doc://com.apple.documentation/documentation/spritekit/skvideonode
   */
  interface SKVideoNode extends SKNode {
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407924-videonodewithfilenamed
    videoNodeWithFileNamed(videoFile: string | cocoascript.NSString):SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407920-videonodewithavplayer
    videoNodeWithAVPlayer(player: AVPlayer):SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407902-videonodewithurl
    videoNodeWithURL(videoURL: NSURL):SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407900-initwithavplayer
    initWithAVPlayer(player: AVPlayer):SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407922-initwithfilenamed
    initWithFileNamed(videoFile: string | cocoascript.NSString):SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407898-initwithurl
    initWithURL(url: NSURL):SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407907-initwithcoder
    initWithCoder(aDecoder: NSCoder):SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407918-initwithvideofilenamed
    initWithVideoFileNamed(videoFile: string | cocoascript.NSString):SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407908-initwithvideourl
    initWithVideoURL(url: NSURL):SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407904-anchorpoint
    anchorPoint(): CGPoint;
    setAnchorPoint(): void;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407916-size
    size(): CGSize;
    setSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407896-play
    play():void;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407910-pause
    pause():void;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407914-videonodewithvideofilenamed
    videoNodeWithVideoFileNamed(videoFile: string | cocoascript.NSString):SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407906-videonodewithvideourl
    videoNodeWithVideoURL(videoURL: NSURL):SKVideoNode;
    //
    alloc():SKVideoNode;
    //
    init():SKVideoNode;
  }
}

declare const SKVideoNode: cocoascript.SKVideoNode;
declare namespace cocoascript {
  /**
   * 3D SceneKit content drawn as a flattened sprite.
   * doc://com.apple.documentation/documentation/spritekit/sk3dnode
   */
  interface SK3DNode extends SKNode {
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1537481-nodewithviewportsize
    nodeWithViewportSize(viewportSize: CGSize):SK3DNode;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519708-initwithviewportsize
    initWithViewportSize(viewportSize: CGSize):SK3DNode;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519722-initwithcoder
    initWithCoder(aDecoder: NSCoder):SK3DNode;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1520078-viewportsize
    viewportSize(): CGSize;
    setViewportSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519834-scnscene
    scnScene(): any;
    setScnScene(): void;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519786-pointofview
    pointOfView(): any;
    setPointOfView(): void;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519676-autoenablesdefaultlighting
    autoenablesDefaultLighting(): BOOL;
    setAutoenablesDefaultLighting(): void;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1520297-playing
    playing(): BOOL;
    setPlaying(): void;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519549-loops
    loops(): BOOL;
    setLoops(): void;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519738-scenetime
    sceneTime(): NSTimeInterval;
    setSceneTime(): void;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519782-hittest
    hitTest_options(point: CGPoint, options: SK3DNode):any;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1520400-projectpoint
    projectPoint(point: vector_float3):vector_float3;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1520024-unprojectpoint
    unprojectPoint(point: vector_float3):vector_float3;
    //
    alloc():SK3DNode;
    //
    init():SK3DNode;
  }
}

declare const SK3DNode: cocoascript.SK3DNode;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/skparticlerenderorder
  type SKParticleRenderOrder = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/sklabelhorizontalalignmentmode
  type SKLabelHorizontalAlignmentMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/sklabelverticalalignmentmode
  type SKLabelVerticalAlignmentMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/spritekit/vector_float3
  type vector_float3 = any;
}
