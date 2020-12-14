declare namespace cocoascript {
  /**
   * Methods your app can implement to respond when physics bodies come into contact.
   * doc://com.apple.documentation/documentation/spritekit/skphysicscontactdelegate
   */
  interface SKPhysicsContactDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skphysicscontactdelegate/1449595-didbegincontact
    didBeginContact(contact: cocoascript.SKPhysicsContact):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicscontactdelegate/1449599-didendcontact
    didEndContact(contact: cocoascript.SKPhysicsContact):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods to take custom control over the view's render rate.
   * doc://com.apple.documentation/documentation/spritekit/skviewdelegate
   */
  interface SKViewDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skviewdelegate/1642775-view
    view_shouldRenderAtTime(view: cocoascript.SKView, time: cocoascript.NSTimeInterval):cocoascript.BOOL;
  }
}
declare namespace cocoascript {
  /**
   * Methods that, when implemented, allow any class to participate in the SpriteKit render loop callbacks.
   * doc://com.apple.documentation/documentation/spritekit/skscenedelegate
   */
  interface SKSceneDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skscenedelegate/1519757-update
    update_forScene(currentTime: cocoascript.NSTimeInterval, scene: cocoascript.SKScene):void;
    // doc://com.apple.documentation/documentation/spritekit/skscenedelegate/1520071-didevaluateactionsforscene
    didEvaluateActionsForScene(scene: cocoascript.SKScene):void;
    // doc://com.apple.documentation/documentation/spritekit/skscenedelegate/1520392-didsimulatephysicsforscene
    didSimulatePhysicsForScene(scene: cocoascript.SKScene):void;
    // doc://com.apple.documentation/documentation/spritekit/skscenedelegate/1520375-didapplyconstraintsforscene
    didApplyConstraintsForScene(scene: cocoascript.SKScene):void;
    // doc://com.apple.documentation/documentation/spritekit/skscenedelegate/1519814-didfinishupdateforscene
    didFinishUpdateForScene(scene: cocoascript.SKScene):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol for objects that can be warped and animated by an
   * doc://com.apple.documentation/documentation/spritekit/skwarpable
   */
  interface SKWarpable extends NSObject {
    // doc://com.apple.documentation/documentation/spritekit/skwarpable/1690947-subdivisionlevels
    subdivisionLevels(): cocoascript.NSInteger;
    setSubdivisionLevels(): void;
    // doc://com.apple.documentation/documentation/spritekit/skwarpable/1690953-warpgeometry
    warpGeometry(): cocoascript.SKWarpGeometry;
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
    initWithKeyframeValues_times(values: cocoascript.NSArray, times: cocoascript.NSNumber):cocoascript.SKKeyframeSequence;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390910-initwithcapacity
    initWithCapacity(numItems: cocoascript.NSUInteger):cocoascript.SKKeyframeSequence;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390892-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.SKKeyframeSequence;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390894-addkeyframevalue
    addKeyframeValue_time(value: cocoascript.SKKeyframeSequence, time: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390920-removekeyframeatindex
    removeKeyframeAtIndex(index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390912-removelastkeyframe
    removeLastKeyframe():void;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390924-setkeyframetime
    setKeyframeTime_forIndex(time: cocoascript.CGFloat, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390883-setkeyframevalue
    setKeyframeValue_forIndex(value: cocoascript.SKKeyframeSequence, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390890-setkeyframevalue
    setKeyframeValue_time_forIndex(value: cocoascript.SKKeyframeSequence, time: cocoascript.CGFloat, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390904-sampleattime
    sampleAtTime(time: cocoascript.CGFloat):cocoascript.SKKeyframeSequence;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390928-count
    count():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390908-getkeyframetimeforindex
    getKeyframeTimeForIndex(index: cocoascript.NSUInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390898-getkeyframevalueforindex
    getKeyframeValueForIndex(index: cocoascript.NSUInteger):cocoascript.SKKeyframeSequence;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390914-interpolationmode
    interpolationMode(): cocoascript.SKInterpolationMode;
    setInterpolationMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skkeyframesequence/1390900-repeatmode
    repeatMode(): cocoascript.SKRepeatMode;
    setRepeatMode(): void;
    //
    alloc():cocoascript.SKKeyframeSequence;
    //
    init():cocoascript.SKKeyframeSequence;
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
    crossFadeWithDuration(sec: cocoascript.NSTimeInterval):cocoascript.SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395899-doorsclosehorizontalwithduration
    doorsCloseHorizontalWithDuration(sec: cocoascript.NSTimeInterval):cocoascript.SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395914-doorscloseverticalwithduration
    doorsCloseVerticalWithDuration(sec: cocoascript.NSTimeInterval):cocoascript.SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395875-doorsopenhorizontalwithduration
    doorsOpenHorizontalWithDuration(sec: cocoascript.NSTimeInterval):cocoascript.SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395909-doorsopenverticalwithduration
    doorsOpenVerticalWithDuration(sec: cocoascript.NSTimeInterval):cocoascript.SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395881-doorwaywithduration
    doorwayWithDuration(sec: cocoascript.NSTimeInterval):cocoascript.SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395871-fadewithcolor
    fadeWithColor_duration(color: cocoascript.UIColor, sec: cocoascript.NSTimeInterval):cocoascript.SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395907-fadewithduration
    fadeWithDuration(sec: cocoascript.NSTimeInterval):cocoascript.SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395901-fliphorizontalwithduration
    flipHorizontalWithDuration(sec: cocoascript.NSTimeInterval):cocoascript.SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395889-flipverticalwithduration
    flipVerticalWithDuration(sec: cocoascript.NSTimeInterval):cocoascript.SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395905-moveinwithdirection
    moveInWithDirection_duration(direction: cocoascript.SKTransitionDirection, sec: cocoascript.NSTimeInterval):cocoascript.SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395903-pushwithdirection
    pushWithDirection_duration(direction: cocoascript.SKTransitionDirection, sec: cocoascript.NSTimeInterval):cocoascript.SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395887-revealwithdirection
    revealWithDirection_duration(direction: cocoascript.SKTransitionDirection, sec: cocoascript.NSTimeInterval):cocoascript.SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395895-transitionwithcifilter
    transitionWithCIFilter_duration(filter: cocoascript.CIFilter, sec: cocoascript.NSTimeInterval):cocoascript.SKTransition;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395883-pausesincomingscene
    pausesIncomingScene(): cocoascript.BOOL;
    setPausesIncomingScene(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktransition/1395877-pausesoutgoingscene
    pausesOutgoingScene(): cocoascript.BOOL;
    setPausesOutgoingScene(): void;
    //
    alloc():cocoascript.SKTransition;
    //
    init():cocoascript.SKTransition;
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
    duration(): cocoascript.NSTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/spritekit/skaction/1417807-timingmode
    timingMode(): cocoascript.SKActionTimingMode;
    setTimingMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skaction/1417666-timingfunction
    timingFunction(): cocoascript.SKActionTimingFunction;
    setTimingFunction(): void;
    // doc://com.apple.documentation/documentation/spritekit/skaction/1417718-speed
    speed(): cocoascript.CGFloat;
    setSpeed(): void;
    //
    alloc():cocoascript.SKAction;
    //
    init():cocoascript.SKAction;
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
    uniformWithName(name: cocoascript.NSString):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455412-uniformwithname
    uniformWithName_float(name: cocoascript.NSString, value: number):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455472-uniformwithname
    uniformWithName_floatVector2(name: cocoascript.NSString, value: cocoascript.GLKVector2):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455414-uniformwithname
    uniformWithName_floatVector3(name: cocoascript.NSString, value: cocoascript.GLKVector3):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455465-uniformwithname
    uniformWithName_floatVector4(name: cocoascript.NSString, value: cocoascript.GLKVector4):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455463-uniformwithname
    uniformWithName_floatMatrix2(name: cocoascript.NSString, value: cocoascript.GLKMatrix2):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455402-uniformwithname
    uniformWithName_floatMatrix3(name: cocoascript.NSString, value: cocoascript.GLKMatrix3):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455446-uniformwithname
    uniformWithName_floatMatrix4(name: cocoascript.NSString, value: cocoascript.GLKMatrix4):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455470-uniformwithname
    uniformWithName_texture(name: cocoascript.NSString, texture: cocoascript.SKTexture):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455420-initwithname
    initWithName(name: cocoascript.NSString):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455447-initwithname
    initWithName_float(name: cocoascript.NSString, value: number):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455444-initwithname
    initWithName_floatVector2(name: cocoascript.NSString, value: cocoascript.GLKVector2):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455416-initwithname
    initWithName_floatVector3(name: cocoascript.NSString, value: cocoascript.GLKVector3):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455418-initwithname
    initWithName_floatVector4(name: cocoascript.NSString, value: cocoascript.GLKVector4):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455431-initwithname
    initWithName_floatMatrix2(name: cocoascript.NSString, value: cocoascript.GLKMatrix2):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455462-initwithname
    initWithName_floatMatrix3(name: cocoascript.NSString, value: cocoascript.GLKMatrix3):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455429-initwithname
    initWithName_floatMatrix4(name: cocoascript.NSString, value: cocoascript.GLKMatrix4):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455452-initwithname
    initWithName_texture(name: cocoascript.NSString, texture: cocoascript.SKTexture):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455442-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455440-uniformtype
    uniformType(): cocoascript.SKUniformType;
    setUniformType(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455406-floatvalue
    floatValue(): number;
    setFloatValue(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455436-floatvector2value
    floatVector2Value(): cocoascript.GLKVector2;
    setFloatVector2Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455434-floatvector3value
    floatVector3Value(): cocoascript.GLKVector3;
    setFloatVector3Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455404-floatvector4value
    floatVector4Value(): cocoascript.GLKVector4;
    setFloatVector4Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455410-floatmatrix2value
    floatMatrix2Value(): cocoascript.GLKMatrix2;
    setFloatMatrix2Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455438-floatmatrix3value
    floatMatrix3Value(): cocoascript.GLKMatrix3;
    setFloatMatrix3Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455460-floatmatrix4value
    floatMatrix4Value(): cocoascript.GLKMatrix4;
    setFloatMatrix4Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1455449-texturevalue
    textureValue(): cocoascript.SKTexture;
    setTextureValue(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645806-initwithname
    initWithName_matrixFloat2x2(name: cocoascript.NSString, value: cocoascript.matrix_float2x2):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645799-initwithname
    initWithName_matrixFloat3x3(name: cocoascript.NSString, value: cocoascript.matrix_float3x3):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645816-initwithname
    initWithName_matrixFloat4x4(name: cocoascript.NSString, value: cocoascript.matrix_float4x4):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645782-initwithname
    initWithName_vectorFloat2(name: cocoascript.NSString, value: cocoascript.vector_float2):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645803-initwithname
    initWithName_vectorFloat3(name: cocoascript.NSString, value: cocoascript.vector_float3):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645808-initwithname
    initWithName_vectorFloat4(name: cocoascript.NSString, value: cocoascript.vector_float4):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645818-matrixfloat2x2value
    matrixFloat2x2Value(): cocoascript.matrix_float2x2;
    setMatrixFloat2x2Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645810-matrixfloat3x3value
    matrixFloat3x3Value(): cocoascript.matrix_float3x3;
    setMatrixFloat3x3Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645817-matrixfloat4x4value
    matrixFloat4x4Value(): cocoascript.matrix_float4x4;
    setMatrixFloat4x4Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645819-vectorfloat2value
    vectorFloat2Value(): cocoascript.vector_float2;
    setVectorFloat2Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645805-vectorfloat3value
    vectorFloat3Value(): cocoascript.vector_float3;
    setVectorFloat3Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1645789-vectorfloat4value
    vectorFloat4Value(): cocoascript.vector_float4;
    setVectorFloat4Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1646689-uniformwithname
    uniformWithName_matrixFloat2x2(name: cocoascript.NSString, value: cocoascript.matrix_float2x2):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1646692-uniformwithname
    uniformWithName_matrixFloat3x3(name: cocoascript.NSString, value: cocoascript.matrix_float3x3):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1646694-uniformwithname
    uniformWithName_matrixFloat4x4(name: cocoascript.NSString, value: cocoascript.matrix_float4x4):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1646690-uniformwithname
    uniformWithName_vectorFloat2(name: cocoascript.NSString, value: cocoascript.vector_float2):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1646691-uniformwithname
    uniformWithName_vectorFloat3(name: cocoascript.NSString, value: cocoascript.vector_float3):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skuniform/1646693-uniformwithname
    uniformWithName_vectorFloat4(name: cocoascript.NSString, value: cocoascript.vector_float4):cocoascript.SKUniform;
    //
    alloc():cocoascript.SKUniform;
    //
    init():cocoascript.SKUniform;
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
    shaderWithFileNamed(name: cocoascript.NSString):cocoascript.SKShader;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477569-shaderwithsource
    shaderWithSource_uniforms(source: cocoascript.NSString, uniforms: cocoascript.SKUniform):cocoascript.SKShader;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477563-shaderwithsource
    shaderWithSource(source: cocoascript.NSString):cocoascript.SKShader;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477559-shader
    shader():cocoascript.SKShader;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477555-initwithsource
    initWithSource_uniforms(source: cocoascript.NSString, uniforms: cocoascript.SKUniform):cocoascript.SKShader;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477571-initwithsource
    initWithSource(source: cocoascript.NSString):cocoascript.SKShader;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477561-adduniform
    addUniform(uniform: cocoascript.SKUniform):void;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477553-removeuniformnamed
    removeUniformNamed(name: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477565-uniforms
    uniforms(): cocoascript.SKUniform;
    setUniforms(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477567-uniformnamed
    uniformNamed(name: cocoascript.NSString):cocoascript.SKUniform;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1645287-attributes
    attributes(): cocoascript.SKAttribute;
    setAttributes(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshader/1477544-source
    source(): cocoascript.NSString;
    setSource(): void;
    //
    alloc():cocoascript.SKShader;
    //
    init():cocoascript.SKShader;
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
    init():cocoascript.SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483038-node
    node():cocoascript.SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483083-nodewithfilenamed
    nodeWithFileNamed(filename: cocoascript.NSString):cocoascript.SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483142-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/3005334-nodewithfilenamed
    nodeWithFileNamed_securelyWithClasses_andError(filename: cocoascript.NSString, classes: cocoascript.Class, error: cocoascript.NSError):cocoascript.SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483101-position
    position(): cocoascript.CGPoint;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483026-frame
    frame(): cocoascript.CGRect;
    setFrame(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483066-calculateaccumulatedframe
    calculateAccumulatedFrame():cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483107-zposition
    zPosition(): cocoascript.CGFloat;
    setZPosition(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483089-zrotation
    zRotation(): cocoascript.CGFloat;
    setZRotation(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483126-setscale
    setScale(scale: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483087-xscale
    xScale(): cocoascript.CGFloat;
    setXScale(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483046-yscale
    yScale(): cocoascript.CGFloat;
    setYScale(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483064-scene
    scene(): cocoascript.SKScene;
    setScene(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483080-parent
    parent(): cocoascript.SKNode;
    setParent(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483028-children
    children(): cocoascript.SKNode;
    setChildren(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483054-addchild
    addChild(node: cocoascript.SKNode):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483062-insertchild
    insertChild_atIndex(node: cocoascript.SKNode, index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483078-isequaltonode
    isEqualToNode(node: cocoascript.SKNode):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483021-movetoparent
    moveToParent(parent: cocoascript.SKNode):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483119-removefromparent
    removeFromParent():void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483040-removeallchildren
    removeAllChildren():void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483091-removechildreninarray
    removeChildrenInArray(nodes: cocoascript.SKNode):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483111-inparenthierarchy
    inParentHierarchy(parent: cocoascript.SKNode):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483136-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483060-childnodewithname
    childNodeWithName(name: cocoascript.NSString):cocoascript.SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483024-enumeratechildnodeswithname
    enumerateChildNodesWithName_usingBlock(name: cocoascript.NSString, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483070-objectforkeyedsubscript
    objectForKeyedSubscript(name: cocoascript.NSString):cocoascript.SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483023-alpha
    alpha(): cocoascript.CGFloat;
    setAlpha(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483048-hidden
    hidden(): cocoascript.BOOL;
    setHidden(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483093-runaction
    runAction(action: cocoascript.SKAction):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483103-runaction
    runAction_completion(action: cocoascript.SKAction, block: void):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483042-runaction
    runAction_withKey(action: cocoascript.SKAction, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483036-speed
    speed(): cocoascript.CGFloat;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483113-paused
    paused(): cocoascript.BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483138-actionforkey
    actionForKey(key: cocoascript.NSString):cocoascript.SKAction;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483081-hasactions
    hasActions():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483030-removeallactions
    removeAllActions():void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483076-removeactionforkey
    removeActionForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483117-physicsbody
    physicsBody(): cocoascript.SKPhysicsBody;
    setPhysicsBody(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483124-constraints
    constraints(): cocoascript.SKConstraint;
    setConstraints(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483019-reachconstraints
    reachConstraints(): cocoascript.SKReachConstraints;
    setReachConstraints(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483140-intersectsnode
    intersectsNode(node: cocoascript.SKNode):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1640688-entity
    entity(): cocoascript.GKEntity;
    setEntity(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483132-obstaclesfromnodebounds
    obstaclesFromNodeBounds(nodes: cocoascript.SKNode):cocoascript.GKPolygonObstacle;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483085-obstaclesfromnodephysicsbodies
    obstaclesFromNodePhysicsBodies(nodes: cocoascript.SKNode):cocoascript.GKPolygonObstacle;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483134-obstaclesfromspritetextures
    obstaclesFromSpriteTextures_accuracy(sprites: cocoascript.SKNode, accuracy: number):cocoascript.GKPolygonObstacle;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483109-userinteractionenabled
    userInteractionEnabled(): cocoascript.BOOL;
    setUserInteractionEnabled(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/2882953-focusbehavior
    focusBehavior(): cocoascript.SKNodeFocusBehavior;
    setFocusBehavior(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483044-containspoint
    containsPoint(p: cocoascript.CGPoint):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483099-nodeatpoint
    nodeAtPoint(p: cocoascript.CGPoint):cocoascript.SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483072-nodesatpoint
    nodesAtPoint(p: cocoascript.CGPoint):cocoascript.SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483058-convertpoint
    convertPoint_fromNode(point: cocoascript.CGPoint, node: cocoascript.SKNode):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483056-convertpoint
    convertPoint_toNode(point: cocoascript.CGPoint, node: cocoascript.SKNode):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1483121-userdata
    userData(): cocoascript.NSMutableDictionary;
    setUserData(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645045-accessibilitychildren
    accessibilityChildren(): cocoascript.NSArray;
    setAccessibilityChildren(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645044-accessibilityframe
    accessibilityFrame(): cocoascript.CGRect;
    setAccessibilityFrame(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645041-accessibilityhelp
    accessibilityHelp(): cocoascript.NSString;
    setAccessibilityHelp(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645039-accessibilitylabel
    accessibilityLabel(): cocoascript.NSString;
    setAccessibilityLabel(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645042-accessibilityparent
    accessibilityParent(): cocoascript.id;
    setAccessibilityParent(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645036-accessibilityrole
    accessibilityRole(): cocoascript.NSString;
    setAccessibilityRole(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645035-accessibilityroledescription
    accessibilityRoleDescription(): cocoascript.NSString;
    setAccessibilityRoleDescription(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645043-accessibilitysubrole
    accessibilitySubrole(): cocoascript.NSString;
    setAccessibilitySubrole(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645038-accessibilityelement
    accessibilityElement(): cocoascript.BOOL;
    setAccessibilityElement(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645037-accessibilityenabled
    accessibilityEnabled(): cocoascript.BOOL;
    setAccessibilityEnabled(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1645040-accessibilityhittest
    accessibilityHitTest(point: cocoascript.CGPoint):cocoascript.SKNode;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1644181-attributevalues
    attributeValues(): cocoascript.SKAttributeValue;
    setAttributeValues(): void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1644180-setvalue
    setValue_forAttributeNamed(value: cocoascript.SKAttributeValue, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/sknode/1644182-valueforattributenamed
    valueForAttributeNamed(key: cocoascript.NSString):cocoascript.SKAttributeValue;
    //
    alloc():cocoascript.SKNode;
    //
    init():cocoascript.SKNode;
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
    rangeWithLowerLimit_upperLimit(lower: cocoascript.CGFloat, upper: cocoascript.CGFloat):cocoascript.SKRange;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1519842-rangewithvalue
    rangeWithValue_variance(value: cocoascript.CGFloat, variance: cocoascript.CGFloat):cocoascript.SKRange;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1519920-rangewithnolimits
    rangeWithNoLimits():cocoascript.SKRange;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1520137-rangewithlowerlimit
    rangeWithLowerLimit(lower: cocoascript.CGFloat):cocoascript.SKRange;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1519559-rangewithupperlimit
    rangeWithUpperLimit(upper: cocoascript.CGFloat):cocoascript.SKRange;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1520276-rangewithconstantvalue
    rangeWithConstantValue(value: cocoascript.CGFloat):cocoascript.SKRange;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1520307-initwithlowerlimit
    initWithLowerLimit_upperLimit(lower: cocoascript.CGFloat, upper: cocoascript.CGFloat):cocoascript.SKRange;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1520000-lowerlimit
    lowerLimit(): cocoascript.CGFloat;
    setLowerLimit(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrange/1519596-upperlimit
    upperLimit(): cocoascript.CGFloat;
    setUpperLimit(): void;
    //
    alloc():cocoascript.SKRange;
    //
    init():cocoascript.SKRange;
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
    positionX_Y(xRange: cocoascript.SKRange, yRange: cocoascript.SKRange):cocoascript.SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519716-positionx
    positionX(range: cocoascript.SKRange):cocoascript.SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1520356-positiony
    positionY(range: cocoascript.SKRange):cocoascript.SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519744-orienttonode
    orientToNode_offset(node: cocoascript.SKNode, radians: cocoascript.SKRange):cocoascript.SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519686-orienttopoint
    orientToPoint_offset(point: cocoascript.CGPoint, radians: cocoascript.SKRange):cocoascript.SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519627-orienttopoint
    orientToPoint_inNode_offset(point: cocoascript.CGPoint, node: cocoascript.SKNode, radians: cocoascript.SKRange):cocoascript.SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519706-zrotation
    zRotation(zRange: cocoascript.SKRange):cocoascript.SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519750-distance
    distance_toNode(range: cocoascript.SKRange, node: cocoascript.SKNode):cocoascript.SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519688-distance
    distance_toPoint(range: cocoascript.SKRange, point: cocoascript.CGPoint):cocoascript.SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519746-distance
    distance_toPoint_inNode(range: cocoascript.SKRange, point: cocoascript.CGPoint, node: cocoascript.SKNode):cocoascript.SKConstraint;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1520369-referencenode
    referenceNode(): cocoascript.SKNode;
    setReferenceNode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skconstraint/1519669-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    //
    alloc():cocoascript.SKConstraint;
    //
    init():cocoascript.SKConstraint;
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
    bodyWithCircleOfRadius(r: cocoascript.CGFloat):cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519692-bodywithcircleofradius
    bodyWithCircleOfRadius_center(r: cocoascript.CGFloat, center: cocoascript.CGPoint):cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520295-bodywithrectangleofsize
    bodyWithRectangleOfSize(s: cocoascript.CGSize):cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519936-bodywithrectangleofsize
    bodyWithRectangleOfSize_center(s: cocoascript.CGSize, center: cocoascript.CGPoint):cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520379-bodywithpolygonfrompath
    bodyWithPolygonFromPath(path: cocoascript.CGPathRef):cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519690-bodywithtexture
    bodyWithTexture_size(texture: cocoascript.SKTexture, size: cocoascript.CGSize):cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519689-bodywithtexture
    bodyWithTexture_alphaThreshold_size(texture: cocoascript.SKTexture, alphaThreshold: number, size: cocoascript.CGSize):cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519736-bodywithbodies
    bodyWithBodies(bodies: cocoascript.SKPhysicsBody):cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520055-bodywithedgeloopfromrect
    bodyWithEdgeLoopFromRect(rect: cocoascript.CGRect):cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520401-bodywithedgefrompoint
    bodyWithEdgeFromPoint_toPoint(p1: cocoascript.CGPoint, p2: cocoascript.CGPoint):cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519732-bodywithedgeloopfrompath
    bodyWithEdgeLoopFromPath(path: cocoascript.CGPathRef):cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519871-bodywithedgechainfrompath
    bodyWithEdgeChainFromPath(path: cocoascript.CGPathRef):cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519774-affectedbygravity
    affectedByGravity(): cocoascript.BOOL;
    setAffectedByGravity(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519986-allowsrotation
    allowsRotation(): cocoascript.BOOL;
    setAllowsRotation(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520132-dynamic
    dynamic(): cocoascript.BOOL;
    setDynamic(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519906-mass
    mass(): cocoascript.CGFloat;
    setMass(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519983-density
    density(): cocoascript.CGFloat;
    setDensity(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520034-area
    area(): cocoascript.CGFloat;
    setArea(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519840-friction
    friction(): cocoascript.CGFloat;
    setFriction(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520447-restitution
    restitution(): cocoascript.CGFloat;
    setRestitution(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519796-lineardamping
    linearDamping(): cocoascript.CGFloat;
    setLinearDamping(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519913-angulardamping
    angularDamping(): cocoascript.CGFloat;
    setAngularDamping(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519869-categorybitmask
    categoryBitMask(): number;
    setCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520003-collisionbitmask
    collisionBitMask(): number;
    setCollisionBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520014-usesprecisecollisiondetection
    usesPreciseCollisionDetection(): cocoascript.BOOL;
    setUsesPreciseCollisionDetection(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519781-contacttestbitmask
    contactTestBitMask(): number;
    setContactTestBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520397-allcontactedbodies
    allContactedBodies():cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520430-applyforce
    applyForce(force: cocoascript.CGVector):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519588-applytorque
    applyTorque(torque: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520032-applyforce
    applyForce_atPoint(force: cocoascript.CGVector, point: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519900-applyimpulse
    applyImpulse(impulse: cocoascript.CGVector):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520122-applyangularimpulse
    applyAngularImpulse(impulse: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520407-applyimpulse
    applyImpulse_atPoint(impulse: cocoascript.CGVector, point: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519635-velocity
    velocity(): cocoascript.CGVector;
    setVelocity(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519766-angularvelocity
    angularVelocity(): cocoascript.CGFloat;
    setAngularVelocity(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520256-resting
    resting(): cocoascript.BOOL;
    setResting(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520049-node
    node(): cocoascript.SKNode;
    setNode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519849-joints
    joints(): cocoascript.SKPhysicsJoint;
    setJoints(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520280-fieldbitmask
    fieldBitMask(): number;
    setFieldBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1519881-charge
    charge(): cocoascript.CGFloat;
    setCharge(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsbody/1520354-pinned
    pinned(): cocoascript.BOOL;
    setPinned(): void;
    //
    alloc():cocoascript.SKPhysicsBody;
    //
    init():cocoascript.SKPhysicsBody;
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
    infiniteRegion():cocoascript.SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1520385-initwithsize
    initWithSize(size: cocoascript.CGSize):cocoascript.SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1520219-initwithradius
    initWithRadius(radius: number):cocoascript.SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1519857-initwithpath
    initWithPath(path: cocoascript.CGPathRef):cocoascript.SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1519700-inverseregion
    inverseRegion():cocoascript.SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1519879-regionbydifferencefromregion
    regionByDifferenceFromRegion(region: cocoascript.SKRegion):cocoascript.SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1519646-regionbyintersectionwithregion
    regionByIntersectionWithRegion(region: cocoascript.SKRegion):cocoascript.SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1519702-regionbyunionwithregion
    regionByUnionWithRegion(region: cocoascript.SKRegion):cocoascript.SKRegion;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1520042-path
    path(): cocoascript.CGPathRef;
    setPath(): void;
    // doc://com.apple.documentation/documentation/spritekit/skregion/1519695-containspoint
    containsPoint(point: cocoascript.CGPoint):cocoascript.BOOL;
    //
    alloc():cocoascript.SKRegion;
    //
    init():cocoascript.SKRegion;
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
    size():cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/spritekit/sktexture/1519707-texturerect
    textureRect():cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/spritekit/sktexture/1519659-filteringmode
    filteringMode(): cocoascript.SKTextureFilteringMode;
    setFilteringMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktexture/1519960-usesmipmaps
    usesMipmaps(): cocoascript.BOOL;
    setUsesMipmaps(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktexture/1519755-cgimage
    CGImage():cocoascript.CGImageRef;
    // doc://com.apple.documentation/documentation/spritekit/sktexture/1520172-preloadwithcompletionhandler
    preloadWithCompletionHandler(completionHandler: void):void;
    // doc://com.apple.documentation/documentation/spritekit/sktexture/1519817-preloadtextures
    preloadTextures_withCompletionHandler(textures: cocoascript.SKTexture, completionHandler: void):void;
    //
    alloc():cocoascript.SKTexture;
    //
    init():cocoascript.SKTexture;
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
    anchorPoint(): cocoascript.CGPoint;
    setAnchorPoint(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643594-tilesize
    tileSize(): cocoascript.CGSize;
    setTileSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643610-tileset
    tileSet(): cocoascript.SKTileSet;
    setTileSet(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643600-numberofcolumns
    numberOfColumns(): cocoascript.NSUInteger;
    setNumberOfColumns(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643611-numberofrows
    numberOfRows(): cocoascript.NSUInteger;
    setNumberOfRows(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643599-centeroftileatcolumn
    centerOfTileAtColumn_row(column: cocoascript.NSUInteger, row: cocoascript.NSUInteger):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643617-tilecolumnindexfromposition
    tileColumnIndexFromPosition(position: cocoascript.CGPoint):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643602-tiledefinitionatcolumn
    tileDefinitionAtColumn_row(column: cocoascript.NSUInteger, row: cocoascript.NSUInteger):cocoascript.SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643613-tilegroupatcolumn
    tileGroupAtColumn_row(column: cocoascript.NSUInteger, row: cocoascript.NSUInteger):cocoascript.SKTileGroup;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643614-tilerowindexfromposition
    tileRowIndexFromPosition(position: cocoascript.CGPoint):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643595-mapsize
    mapSize(): cocoascript.CGSize;
    setMapSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643601-color
    color(): cocoascript.UIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643607-colorblendfactor
    colorBlendFactor(): cocoascript.CGFloat;
    setColorBlendFactor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643618-lightingbitmask
    lightingBitMask(): number;
    setLightingBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643598-blendmode
    blendMode(): cocoascript.SKBlendMode;
    setBlendMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/1643596-shader
    shader(): cocoascript.SKShader;
    setShader(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/2715851-attributevalues
    attributeValues(): cocoascript.SKAttributeValue;
    setAttributeValues(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/2715852-setvalue
    setValue_forAttributeNamed(value: cocoascript.SKAttributeValue, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/sktilemapnode/2715847-valueforattributenamed
    valueForAttributeNamed(key: cocoascript.NSString):cocoascript.SKAttributeValue;
    //
    alloc():cocoascript.SKTileMapNode;
    //
    init():cocoascript.SKTileMapNode;
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
    tileSetNamed(name: cocoascript.NSString):cocoascript.SKTileSet;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643830-tilesetfromurl
    tileSetFromURL(url: cocoascript.NSURL):cocoascript.SKTileSet;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643885-initwithtilegroups
    initWithTileGroups(tileGroups: cocoascript.SKTileGroup):cocoascript.SKTileSet;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643872-tilesetwithtilegroups
    tileSetWithTileGroups(tileGroups: cocoascript.SKTileGroup):cocoascript.SKTileSet;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643896-initwithtilegroups
    initWithTileGroups_tileSetType(tileGroups: cocoascript.SKTileGroup, tileSetType: cocoascript.SKTileSetType):cocoascript.SKTileSet;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643843-tilesetwithtilegroups
    tileSetWithTileGroups_tileSetType(tileGroups: cocoascript.SKTileGroup, tileSetType: cocoascript.SKTileSetType):cocoascript.SKTileSet;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643878-defaulttilegroup
    defaultTileGroup(): cocoascript.SKTileGroup;
    setDefaultTileGroup(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643889-defaulttilesize
    defaultTileSize(): cocoascript.CGSize;
    setDefaultTileSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643888-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643874-tilegroups
    tileGroups(): cocoascript.SKTileGroup;
    setTileGroups(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktileset/1643836-type
    type(): cocoascript.SKTileSetType;
    setType(): void;
    //
    alloc():cocoascript.SKTileSet;
    //
    init():cocoascript.SKTileSet;
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
    initWithAdjacency_tileDefinitions(adjacency: cocoascript.SKTileAdjacencyMask, tileDefinitions: cocoascript.SKTileDefinition):cocoascript.SKTileGroupRule;
    // doc://com.apple.documentation/documentation/spritekit/sktilegrouprule/1643846-tilegrouprulewithadjacency
    tileGroupRuleWithAdjacency_tileDefinitions(adjacency: cocoascript.SKTileAdjacencyMask, tileDefinitions: cocoascript.SKTileDefinition):cocoascript.SKTileGroupRule;
    // doc://com.apple.documentation/documentation/spritekit/sktilegrouprule/1643818-adjacency
    adjacency(): cocoascript.SKTileAdjacencyMask;
    setAdjacency(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilegrouprule/1643860-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilegrouprule/1643823-tiledefinitions
    tileDefinitions(): cocoascript.SKTileDefinition;
    setTileDefinitions(): void;
    //
    alloc():cocoascript.SKTileGroupRule;
    //
    init():cocoascript.SKTileGroupRule;
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
    initWithTileDefinition(tileDefinition: cocoascript.SKTileDefinition):cocoascript.SKTileGroup;
    // doc://com.apple.documentation/documentation/spritekit/sktilegroup/1643887-tilegroupwithtiledefinition
    tileGroupWithTileDefinition(tileDefinition: cocoascript.SKTileDefinition):cocoascript.SKTileGroup;
    // doc://com.apple.documentation/documentation/spritekit/sktilegroup/1643839-initwithrules
    initWithRules(rules: cocoascript.SKTileGroupRule):cocoascript.SKTileGroup;
    // doc://com.apple.documentation/documentation/spritekit/sktilegroup/1643891-tilegroupwithrules
    tileGroupWithRules(rules: cocoascript.SKTileGroupRule):cocoascript.SKTileGroup;
    // doc://com.apple.documentation/documentation/spritekit/sktilegroup/1643893-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilegroup/1643867-rules
    rules(): cocoascript.SKTileGroupRule;
    setRules(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktilegroup/1643840-emptytilegroup
    emptyTileGroup():cocoascript.SKTileGroup;
    //
    alloc():cocoascript.SKTileGroup;
    //
    init():cocoascript.SKTileGroup;
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
    initWithTexture(texture: cocoascript.SKTexture):cocoascript.SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1646654-tiledefinitionwithtexture
    tileDefinitionWithTexture(texture: cocoascript.SKTexture):cocoascript.SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645778-initwithtexture
    initWithTexture_normalTexture_size(texture: cocoascript.SKTexture, normalTexture: cocoascript.SKTexture, size: cocoascript.CGSize):cocoascript.SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1646656-tiledefinitionwithtexture
    tileDefinitionWithTexture_normalTexture_size(texture: cocoascript.SKTexture, normalTexture: cocoascript.SKTexture, size: cocoascript.CGSize):cocoascript.SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645787-initwithtexture
    initWithTexture_size(texture: cocoascript.SKTexture, size: cocoascript.CGSize):cocoascript.SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1646652-tiledefinitionwithtexture
    tileDefinitionWithTexture_size(texture: cocoascript.SKTexture, size: cocoascript.CGSize):cocoascript.SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645814-initwithtextures
    initWithTextures_normalTextures_size_timePerFrame(textures: cocoascript.SKTexture, normalTextures: cocoascript.SKTexture, size: cocoascript.CGSize, timePerFrame: cocoascript.CGFloat):cocoascript.SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1646655-tiledefinitionwithtextures
    tileDefinitionWithTextures_normalTextures_size_timePerFrame(textures: cocoascript.SKTexture, normalTextures: cocoascript.SKTexture, size: cocoascript.CGSize, timePerFrame: cocoascript.CGFloat):cocoascript.SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645776-initwithtextures
    initWithTextures_size_timePerFrame(textures: cocoascript.SKTexture, size: cocoascript.CGSize, timePerFrame: cocoascript.CGFloat):cocoascript.SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1646653-tiledefinitionwithtextures
    tileDefinitionWithTextures_size_timePerFrame(textures: cocoascript.SKTexture, size: cocoascript.CGSize, timePerFrame: cocoascript.CGFloat):cocoascript.SKTileDefinition;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645804-fliphorizontally
    flipHorizontally(): cocoascript.BOOL;
    setFlipHorizontally(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645800-flipvertically
    flipVertically(): cocoascript.BOOL;
    setFlipVertically(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645775-rotation
    rotation(): cocoascript.SKTileDefinitionRotation;
    setRotation(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645802-textures
    textures(): cocoascript.SKTexture;
    setTextures(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645780-normaltextures
    normalTextures(): cocoascript.SKTexture;
    setNormalTextures(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645811-timeperframe
    timePerFrame(): cocoascript.CGFloat;
    setTimePerFrame(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645813-userdata
    userData(): cocoascript.NSMutableDictionary;
    setUserData(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645779-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645820-placementweight
    placementWeight(): cocoascript.NSUInteger;
    setPlacementWeight(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktiledefinition/1645790-size
    size(): cocoascript.CGSize;
    setSize(): void;
    //
    alloc():cocoascript.SKTileDefinition;
    //
    init():cocoascript.SKTileDefinition;
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
    alloc():cocoascript.SKWarpGeometry;
    //
    init():cocoascript.SKWarpGeometry;
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
    textureNamed(name: cocoascript.NSString):cocoascript.SKTexture;
    // doc://com.apple.documentation/documentation/spritekit/sktextureatlas/1427381-atlasnamed
    atlasNamed(name: cocoascript.NSString):cocoascript.SKTextureAtlas;
    // doc://com.apple.documentation/documentation/spritekit/sktextureatlas/1427383-atlaswithdictionary
    atlasWithDictionary(properties: cocoascript.SKTextureAtlas):cocoascript.SKTextureAtlas;
    // doc://com.apple.documentation/documentation/spritekit/sktextureatlas/1427385-preloadwithcompletionhandler
    preloadWithCompletionHandler(completionHandler: void):void;
    // doc://com.apple.documentation/documentation/spritekit/sktextureatlas/1427379-preloadtextureatlases
    preloadTextureAtlases_withCompletionHandler(textureAtlases: cocoascript.SKTextureAtlas, completionHandler: void):void;
    // doc://com.apple.documentation/documentation/spritekit/sktextureatlas/1427377-preloadtextureatlasesnamed
    preloadTextureAtlasesNamed_withCompletionHandler(atlasNames: cocoascript.NSString, completionHandler: cocoascript.SKTextureAtlas):void;
    // doc://com.apple.documentation/documentation/spritekit/sktextureatlas/1427373-texturenames
    textureNames(): cocoascript.NSString;
    setTextureNames(): void;
    //
    alloc():cocoascript.SKTextureAtlas;
    //
    init():cocoascript.SKTextureAtlas;
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
    gravity(): cocoascript.CGVector;
    setGravity(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449611-speed
    speed(): cocoascript.CGFloat;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449617-addjoint
    addJoint(joint: cocoascript.SKPhysicsJoint):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449621-removealljoints
    removeAllJoints():void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449609-removejoint
    removeJoint(joint: cocoascript.SKPhysicsJoint):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449602-contactdelegate
    contactDelegate(): cocoascript.SKPhysicsContactDelegate;
    setContactDelegate(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449613-bodyalongraystart
    bodyAlongRayStart_end(start: cocoascript.CGPoint, end: cocoascript.CGPoint):cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449625-bodyatpoint
    bodyAtPoint(point: cocoascript.CGPoint):cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449604-bodyinrect
    bodyInRect(rect: cocoascript.CGRect):cocoascript.SKPhysicsBody;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449615-enumeratebodiesalongraystart
    enumerateBodiesAlongRayStart_end_usingBlock(start: cocoascript.CGPoint, end: cocoascript.CGPoint, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449597-enumeratebodiesatpoint
    enumerateBodiesAtPoint_usingBlock(point: cocoascript.CGPoint, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449619-enumeratebodiesinrect
    enumerateBodiesInRect_usingBlock(rect: cocoascript.CGRect, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsworld/1449627-samplefieldsat
    sampleFieldsAt(position: cocoascript.vector_float3):cocoascript.vector_float3;
    //
    alloc():cocoascript.SKPhysicsWorld;
    //
    init():cocoascript.SKPhysicsWorld;
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
    bodyA(): cocoascript.SKPhysicsBody;
    setBodyA(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjoint/1519693-bodyb
    bodyB(): cocoascript.SKPhysicsBody;
    setBodyB(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjoint/1519866-reactionforce
    reactionForce(): cocoascript.CGVector;
    setReactionForce(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjoint/1519682-reactiontorque
    reactionTorque(): cocoascript.CGFloat;
    setReactionTorque(): void;
    //
    alloc():cocoascript.SKPhysicsJoint;
    //
    init():cocoascript.SKPhysicsJoint;
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
    initWithLowerAngleLimit_upperAngleLimit(lowerAngleLimit: cocoascript.CGFloat, upperAngleLimit: cocoascript.CGFloat):cocoascript.SKReachConstraints;
    // doc://com.apple.documentation/documentation/spritekit/skreachconstraints/1519923-loweranglelimit
    lowerAngleLimit(): cocoascript.CGFloat;
    setLowerAngleLimit(): void;
    // doc://com.apple.documentation/documentation/spritekit/skreachconstraints/1519699-upperanglelimit
    upperAngleLimit(): cocoascript.CGFloat;
    setUpperAngleLimit(): void;
    //
    alloc():cocoascript.SKReachConstraints;
    //
    init():cocoascript.SKReachConstraints;
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
    initWithAVAudioNode(node: cocoascript.AVAudioNode):cocoascript.SKAudioNode;
    // doc://com.apple.documentation/documentation/spritekit/skaudionode/1519678-initwithfilenamed
    initWithFileNamed(name: cocoascript.NSString):cocoascript.SKAudioNode;
    // doc://com.apple.documentation/documentation/spritekit/skaudionode/1519661-initwithurl
    initWithURL(url: cocoascript.NSURL):cocoascript.SKAudioNode;
    // doc://com.apple.documentation/documentation/spritekit/skaudionode/1520341-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.SKAudioNode;
    // doc://com.apple.documentation/documentation/spritekit/skaudionode/1519633-avaudionode
    avAudioNode(): cocoascript.AVAudioNode;
    setAvAudioNode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skaudionode/1520418-positional
    positional(): cocoascript.BOOL;
    setPositional(): void;
    // doc://com.apple.documentation/documentation/spritekit/skaudionode/1520336-autoplaylooped
    autoplayLooped(): cocoascript.BOOL;
    setAutoplayLooped(): void;
    //
    alloc():cocoascript.SKAudioNode;
    //
    init():cocoascript.SKAudioNode;
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
    init():cocoascript.SKAttributeValue;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643428-valuewithfloat
    valueWithFloat(value: number):cocoascript.SKAttributeValue;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643427-valuewithvectorfloat2
    valueWithVectorFloat2(value: cocoascript.vector_float2):cocoascript.SKAttributeValue;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643421-valuewithvectorfloat3
    valueWithVectorFloat3(value: cocoascript.vector_float3):cocoascript.SKAttributeValue;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643436-valuewithvectorfloat4
    valueWithVectorFloat4(value: cocoascript.vector_float4):cocoascript.SKAttributeValue;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643424-floatvalue
    floatValue(): number;
    setFloatValue(): void;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643435-vectorfloat2value
    vectorFloat2Value(): cocoascript.vector_float2;
    setVectorFloat2Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643434-vectorfloat3value
    vectorFloat3Value(): cocoascript.vector_float3;
    setVectorFloat3Value(): void;
    // doc://com.apple.documentation/documentation/spritekit/skattributevalue/1643442-vectorfloat4value
    vectorFloat4Value(): cocoascript.vector_float4;
    setVectorFloat4Value(): void;
    //
    alloc():cocoascript.SKAttributeValue;
    //
    init():cocoascript.SKAttributeValue;
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
    initWithName_type(name: cocoascript.NSString, type: cocoascript.SKAttributeType):cocoascript.SKAttribute;
    // doc://com.apple.documentation/documentation/spritekit/skattribute/1643444-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/spritekit/skattribute/1643432-type
    type(): cocoascript.SKAttributeType;
    setType(): void;
    // doc://com.apple.documentation/documentation/spritekit/skattribute/1643426-attributewithname
    attributeWithName_type(name: cocoascript.NSString, type: cocoascript.SKAttributeType):cocoascript.SKAttribute;
    //
    alloc():cocoascript.SKAttribute;
    //
    init():cocoascript.SKAttribute;
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
    gridWithColumns_rows(cols: cocoascript.NSInteger, rows: cocoascript.NSInteger):cocoascript.SKWarpGeometryGrid;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690945-initwithcolumns
    initWithColumns_rows_sourcePositions_destPositions(cols: cocoascript.NSInteger, rows: cocoascript.NSInteger, sourcePositions: cocoascript.vector_float2, destPositions: cocoascript.vector_float2):cocoascript.SKWarpGeometryGrid;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690986-gridwithcolumns
    gridWithColumns_rows_sourcePositions_destPositions(cols: cocoascript.NSInteger, rows: cocoascript.NSInteger, sourcePositions: cocoascript.vector_float2, destPositions: cocoascript.vector_float2):cocoascript.SKWarpGeometryGrid;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690985-grid
    grid():cocoascript.SKWarpGeometryGrid;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690949-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.SKWarpGeometryGrid;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690942-numberofcolumns
    numberOfColumns(): cocoascript.NSInteger;
    setNumberOfColumns(): void;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690943-numberofrows
    numberOfRows(): cocoascript.NSInteger;
    setNumberOfRows(): void;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690940-vertexcount
    vertexCount(): cocoascript.NSInteger;
    setVertexCount(): void;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690944-destpositionatindex
    destPositionAtIndex(index: cocoascript.NSInteger):cocoascript.vector_float2;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690952-sourcepositionatindex
    sourcePositionAtIndex(index: cocoascript.NSInteger):cocoascript.vector_float2;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690946-gridbyreplacingdestpositions
    gridByReplacingDestPositions(destPositions: cocoascript.vector_float2):cocoascript.SKWarpGeometryGrid;
    // doc://com.apple.documentation/documentation/spritekit/skwarpgeometrygrid/1690948-gridbyreplacingsourcepositions
    gridByReplacingSourcePositions(sourcePositions: cocoascript.vector_float2):cocoascript.SKWarpGeometryGrid;
    //
    alloc():cocoascript.SKWarpGeometryGrid;
    //
    init():cocoascript.SKWarpGeometryGrid;
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
    scene(): cocoascript.SKScene;
    setScene(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519705-presentscene
    presentScene(scene: cocoascript.SKScene):void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520090-presentscene
    presentScene_transition(scene: cocoascript.SKScene, transition: cocoascript.SKTransition):void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519654-paused
    paused(): cocoascript.BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1642773-preferredframespersecond
    preferredFramesPerSecond(): cocoascript.NSInteger;
    setPreferredFramesPerSecond(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1642774-delegate
    delegate(): cocoascript.SKViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520008-frameinterval
    frameInterval(): cocoascript.NSInteger;
    setFrameInterval(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1642777-preferredframerate
    preferredFrameRate(): number;
    setPreferredFrameRate(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520215-ignoressiblingorder
    ignoresSiblingOrder(): cocoascript.BOOL;
    setIgnoresSiblingOrder(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519683-shouldcullnonvisiblenodes
    shouldCullNonVisibleNodes(): cocoascript.BOOL;
    setShouldCullNonVisibleNodes(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519697-allowstransparency
    allowsTransparency(): cocoascript.BOOL;
    setAllowsTransparency(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520229-asynchronous
    asynchronous(): cocoascript.BOOL;
    setAsynchronous(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519590-showsfps
    showsFPS(): cocoascript.BOOL;
    setShowsFPS(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520156-showsnodecount
    showsNodeCount(): cocoascript.BOOL;
    setShowsNodeCount(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520112-showsdrawcount
    showsDrawCount(): cocoascript.BOOL;
    setShowsDrawCount(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519652-showsquadcount
    showsQuadCount(): cocoascript.BOOL;
    setShowsQuadCount(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520389-showsphysics
    showsPhysics(): cocoascript.BOOL;
    setShowsPhysics(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520443-showsfields
    showsFields(): cocoascript.BOOL;
    setShowsFields(): void;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520328-convertpoint
    convertPoint_fromScene(point: cocoascript.CGPoint, scene: cocoascript.SKScene):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519847-convertpoint
    convertPoint_toScene(point: cocoascript.CGPoint, scene: cocoascript.SKScene):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/spritekit/skview/1519994-texturefromnode
    textureFromNode_crop(node: cocoascript.SKNode, crop: cocoascript.CGRect):cocoascript.SKTexture;
    // doc://com.apple.documentation/documentation/spritekit/skview/1520114-texturefromnode
    textureFromNode(node: cocoascript.SKNode):cocoascript.SKTexture;
    // doc://com.apple.documentation/documentation/spritekit/skview/3548062-disabledepthstencilbuffer
    disableDepthStencilBuffer(): cocoascript.BOOL;
    setDisableDepthStencilBuffer(): void;
    //
    alloc():cocoascript.SKView;
    //
    init():cocoascript.SKView;
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
    bodyA(): cocoascript.SKPhysicsBody;
    setBodyA(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicscontact/1478526-bodyb
    bodyB(): cocoascript.SKPhysicsBody;
    setBodyB(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicscontact/1478524-contactpoint
    contactPoint(): cocoascript.CGPoint;
    setContactPoint(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicscontact/1478523-collisionimpulse
    collisionImpulse(): cocoascript.CGFloat;
    setCollisionImpulse(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicscontact/1478528-contactnormal
    contactNormal(): cocoascript.CGVector;
    setContactNormal(): void;
    //
    alloc():cocoascript.SKPhysicsContact;
    //
    init():cocoascript.SKPhysicsContact;
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
    dragField():cocoascript.SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520396-electricfield
    electricField():cocoascript.SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520145-lineargravityfieldwithvector
    linearGravityFieldWithVector(direction: cocoascript.vector_float3):cocoascript.SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520134-magneticfield
    magneticField():cocoascript.SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1519947-noisefieldwithsmoothness
    noiseFieldWithSmoothness_animationSpeed(smoothness: cocoascript.CGFloat, speed: cocoascript.CGFloat):cocoascript.SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520382-radialgravityfield
    radialGravityField():cocoascript.SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1519694-springfield
    springField():cocoascript.SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520018-turbulencefieldwithsmoothness
    turbulenceFieldWithSmoothness_animationSpeed(smoothness: cocoascript.CGFloat, speed: cocoascript.CGFloat):cocoascript.SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1519778-velocityfieldwithtexture
    velocityFieldWithTexture(velocityTexture: cocoascript.SKTexture):cocoascript.SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520271-velocityfieldwithvector
    velocityFieldWithVector(direction: cocoascript.vector_float3):cocoascript.SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520157-vortexfield
    vortexField():cocoascript.SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1519710-customfieldwithevaluationblock
    customFieldWithEvaluationBlock(block: cocoascript.SKFieldForceEvaluator):cocoascript.SKFieldNode;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520079-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1520365-exclusive
    exclusive(): cocoascript.BOOL;
    setExclusive(): void;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1519551-region
    region(): cocoascript.SKRegion;
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
    direction(): cocoascript.vector_float3;
    setDirection(): void;
    // doc://com.apple.documentation/documentation/spritekit/skfieldnode/1519928-texture
    texture(): cocoascript.SKTexture;
    setTexture(): void;
    //
    alloc():cocoascript.SKFieldNode;
    //
    init():cocoascript.SKFieldNode;
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
    sceneWithSize(size: cocoascript.CGSize):cocoascript.SKScene;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520435-initwithsize
    initWithSize(size: cocoascript.CGSize):cocoascript.SKScene;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519831-size
    size(): cocoascript.CGSize;
    setSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519562-scalemode
    scaleMode(): cocoascript.SKSceneScaleMode;
    setScaleMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519696-camera
    camera(): cocoascript.SKCameraNode;
    setCamera(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519864-anchorpoint
    anchorPoint(): cocoascript.CGPoint;
    setAnchorPoint(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1645216-scenedidload
    sceneDidLoad():void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519545-didchangesize
    didChangeSize(oldSize: cocoascript.CGSize):void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519703-willmovefromview
    willMoveFromView(view: cocoascript.SKView):void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519607-didmovetoview
    didMoveToView(view: cocoascript.SKView):void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519802-update
    update(currentTime: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519903-didevaluateactions
    didEvaluateActions():void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519965-didsimulatephysics
    didSimulatePhysics():void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520006-didapplyconstraints
    didApplyConstraints():void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520269-didfinishupdate
    didFinishUpdate():void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520213-delegate
    delegate(): cocoascript.SKSceneDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519726-view
    view(): cocoascript.SKView;
    setView(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520278-backgroundcolor
    backgroundColor(): cocoascript.UIColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519584-physicsworld
    physicsWorld(): cocoascript.SKPhysicsWorld;
    setPhysicsWorld(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520363-listener
    listener(): cocoascript.SKNode;
    setListener(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1519644-audioengine
    audioEngine(): cocoascript.AVAudioEngine;
    setAudioEngine(): void;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520395-convertpointfromview
    convertPointFromView(point: cocoascript.CGPoint):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/spritekit/skscene/1520082-convertpointtoview
    convertPointToView(point: cocoascript.CGPoint):cocoascript.CGPoint;
    //
    alloc():cocoascript.SKScene;
    //
    init():cocoascript.SKScene;
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
    filter(): cocoascript.CIFilter;
    setFilter(): void;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/1459385-shouldenableeffects
    shouldEnableEffects(): cocoascript.BOOL;
    setShouldEnableEffects(): void;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/1459390-shouldcenterfilter
    shouldCenterFilter(): cocoascript.BOOL;
    setShouldCenterFilter(): void;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/1459388-shader
    shader(): cocoascript.SKShader;
    setShader(): void;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/2715848-attributevalues
    attributeValues(): cocoascript.SKAttributeValue;
    setAttributeValues(): void;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/2715853-setvalue
    setValue_forAttributeNamed(value: cocoascript.SKAttributeValue, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/2715844-valueforattributenamed
    valueForAttributeNamed(key: cocoascript.NSString):cocoascript.SKAttributeValue;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/1459381-shouldrasterize
    shouldRasterize(): cocoascript.BOOL;
    setShouldRasterize(): void;
    // doc://com.apple.documentation/documentation/spritekit/skeffectnode/1459386-blendmode
    blendMode(): cocoascript.SKBlendMode;
    setBlendMode(): void;
    //
    alloc():cocoascript.SKEffectNode;
    //
    init():cocoascript.SKEffectNode;
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
    initWithImageNamed(name: cocoascript.NSString):cocoascript.SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519721-spritenodewithimagenamed
    spriteNodeWithImageNamed_normalMapped(name: cocoascript.NSString, generateNormalMap: cocoascript.BOOL):cocoascript.SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519942-initwithtexture
    initWithTexture(texture: cocoascript.SKTexture):cocoascript.SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1520029-initwithtexture
    initWithTexture_color_size(texture: cocoascript.SKTexture, color: cocoascript.UIColor, size: cocoascript.CGSize):cocoascript.SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1579717-spritenodewithcolor
    spriteNodeWithColor_size(color: cocoascript.UIColor, size: cocoascript.CGSize):cocoascript.SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1579718-spritenodewithimagenamed
    spriteNodeWithImageNamed(name: cocoascript.NSString):cocoascript.SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1579716-spritenodewithtexture
    spriteNodeWithTexture(texture: cocoascript.SKTexture):cocoascript.SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519812-spritenodewithtexture
    spriteNodeWithTexture_size(texture: cocoascript.SKTexture, size: cocoascript.CGSize):cocoascript.SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1520153-spritenodewithtexture
    spriteNodeWithTexture_normalMap(texture: cocoascript.SKTexture, normalMap: cocoascript.SKTexture):cocoascript.SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1520011-texture
    texture(): cocoascript.SKTexture;
    setTexture(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519762-initwithcolor
    initWithColor_size(color: cocoascript.UIColor, size: cocoascript.CGSize):cocoascript.SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1520399-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.SKSpriteNode;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519668-size
    size(): cocoascript.CGSize;
    setSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1645445-scaletosize
    scaleToSize(size: cocoascript.CGSize):void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519877-anchorpoint
    anchorPoint(): cocoascript.CGPoint;
    setAnchorPoint(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1520119-centerrect
    centerRect(): cocoascript.CGRect;
    setCenterRect(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519639-color
    color(): cocoascript.UIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519780-colorblendfactor
    colorBlendFactor(): cocoascript.CGFloat;
    setColorBlendFactor(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519931-blendmode
    blendMode(): cocoascript.SKBlendMode;
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
    normalTexture(): cocoascript.SKTexture;
    setNormalTexture(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/1519714-shader
    shader(): cocoascript.SKShader;
    setShader(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/2715845-attributevalues
    attributeValues(): cocoascript.SKAttributeValue;
    setAttributeValues(): void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/2715849-setvalue
    setValue_forAttributeNamed(value: cocoascript.SKAttributeValue, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/skspritenode/2715846-valueforattributenamed
    valueForAttributeNamed(key: cocoascript.NSString):cocoascript.SKAttributeValue;
    //
    alloc():cocoascript.SKSpriteNode;
    //
    init():cocoascript.SKSpriteNode;
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
    targetNode(): cocoascript.SKNode;
    setTargetNode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398027-advancesimulationtime
    advanceSimulationTime(sec: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398053-resetsimulation
    resetSimulation():void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398039-particlebirthrate
    particleBirthRate(): cocoascript.CGFloat;
    setParticleBirthRate(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398043-numparticlestoemit
    numParticlesToEmit(): cocoascript.NSUInteger;
    setNumParticlesToEmit(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397986-particlerenderorder
    particleRenderOrder(): cocoascript.SKParticleRenderOrder;
    setParticleRenderOrder(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398000-particlelifetime
    particleLifetime(): cocoascript.CGFloat;
    setParticleLifetime(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397994-particlelifetimerange
    particleLifetimeRange(): cocoascript.CGFloat;
    setParticleLifetimeRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398019-particleposition
    particlePosition(): cocoascript.CGPoint;
    setParticlePosition(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397972-particlepositionrange
    particlePositionRange(): cocoascript.CGVector;
    setParticlePositionRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398055-particlezposition
    particleZPosition(): cocoascript.CGFloat;
    setParticleZPosition(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397974-particlezpositionrange
    particleZPositionRange(): cocoascript.CGFloat;
    setParticleZPositionRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398061-particlespeed
    particleSpeed(): cocoascript.CGFloat;
    setParticleSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398045-particlespeedrange
    particleSpeedRange(): cocoascript.CGFloat;
    setParticleSpeedRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398035-emissionangle
    emissionAngle(): cocoascript.CGFloat;
    setEmissionAngle(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398067-emissionanglerange
    emissionAngleRange(): cocoascript.CGFloat;
    setEmissionAngleRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398017-xacceleration
    xAcceleration(): cocoascript.CGFloat;
    setXAcceleration(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397982-yacceleration
    yAcceleration(): cocoascript.CGFloat;
    setYAcceleration(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398008-particlezpositionspeed
    particleZPositionSpeed(): cocoascript.CGFloat;
    setParticleZPositionSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398025-particlerotation
    particleRotation(): cocoascript.CGFloat;
    setParticleRotation(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397996-particlerotationrange
    particleRotationRange(): cocoascript.CGFloat;
    setParticleRotationRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397968-particlerotationspeed
    particleRotationSpeed(): cocoascript.CGFloat;
    setParticleRotationSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398014-particlescale
    particleScale(): cocoascript.CGFloat;
    setParticleScale(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397990-particlescalerange
    particleScaleRange(): cocoascript.CGFloat;
    setParticleScaleRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398073-particlescalespeed
    particleScaleSpeed(): cocoascript.CGFloat;
    setParticleScaleSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398029-particlescalesequence
    particleScaleSequence(): cocoascript.SKKeyframeSequence;
    setParticleScaleSequence(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398004-particletexture
    particleTexture(): cocoascript.SKTexture;
    setParticleTexture(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398063-particlesize
    particleSize(): cocoascript.CGSize;
    setParticleSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397992-particlecolorsequence
    particleColorSequence(): cocoascript.SKKeyframeSequence;
    setParticleColorSequence(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398049-particlecolor
    particleColor(): cocoascript.UIColor;
    setParticleColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397976-particlecoloralpharange
    particleColorAlphaRange(): cocoascript.CGFloat;
    setParticleColorAlphaRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398075-particlecolorbluerange
    particleColorBlueRange(): cocoascript.CGFloat;
    setParticleColorBlueRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398065-particlecolorgreenrange
    particleColorGreenRange(): cocoascript.CGFloat;
    setParticleColorGreenRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397998-particlecolorredrange
    particleColorRedRange(): cocoascript.CGFloat;
    setParticleColorRedRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398051-particlecoloralphaspeed
    particleColorAlphaSpeed(): cocoascript.CGFloat;
    setParticleColorAlphaSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398023-particlecolorbluespeed
    particleColorBlueSpeed(): cocoascript.CGFloat;
    setParticleColorBlueSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398033-particlecolorgreenspeed
    particleColorGreenSpeed(): cocoascript.CGFloat;
    setParticleColorGreenSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398041-particlecolorredspeed
    particleColorRedSpeed(): cocoascript.CGFloat;
    setParticleColorRedSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397980-particlecolorblendfactorsequence
    particleColorBlendFactorSequence(): cocoascript.SKKeyframeSequence;
    setParticleColorBlendFactorSequence(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398071-particlecolorblendfactor
    particleColorBlendFactor(): cocoascript.CGFloat;
    setParticleColorBlendFactor(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398047-particlecolorblendfactorrange
    particleColorBlendFactorRange(): cocoascript.CGFloat;
    setParticleColorBlendFactorRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398037-particlecolorblendfactorspeed
    particleColorBlendFactorSpeed(): cocoascript.CGFloat;
    setParticleColorBlendFactorSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397978-particleblendmode
    particleBlendMode(): cocoascript.SKBlendMode;
    setParticleBlendMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398057-particlealphasequence
    particleAlphaSequence(): cocoascript.SKKeyframeSequence;
    setParticleAlphaSequence(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397988-particlealpha
    particleAlpha(): cocoascript.CGFloat;
    setParticleAlpha(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398031-particlealpharange
    particleAlphaRange(): cocoascript.CGFloat;
    setParticleAlphaRange(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398021-particlealphaspeed
    particleAlphaSpeed(): cocoascript.CGFloat;
    setParticleAlphaSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1397970-particleaction
    particleAction(): cocoascript.SKAction;
    setParticleAction(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398006-fieldbitmask
    fieldBitMask(): number;
    setFieldBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/1398069-shader
    shader(): cocoascript.SKShader;
    setShader(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/2715850-attributevalues
    attributeValues(): cocoascript.SKAttributeValue;
    setAttributeValues(): void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/2715854-setvalue
    setValue_forAttributeNamed(value: cocoascript.SKAttributeValue, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/skemitternode/2715842-valueforattributenamed
    valueForAttributeNamed(key: cocoascript.NSString):cocoascript.SKAttributeValue;
    //
    alloc():cocoascript.SKEmitterNode;
    //
    init():cocoascript.SKEmitterNode;
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
    containedNodeSet():cocoascript.SKNode;
    // doc://com.apple.documentation/documentation/spritekit/skcameranode/1434224-containsnode
    containsNode(node: cocoascript.SKNode):cocoascript.BOOL;
    //
    alloc():cocoascript.SKCameraNode;
    //
    init():cocoascript.SKCameraNode;
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
    referenceNodeWithURL(referenceURL: cocoascript.NSURL):cocoascript.SKReferenceNode;
    // doc://com.apple.documentation/documentation/spritekit/skreferencenode/1508366-initwithurl
    initWithURL(url: cocoascript.NSURL):cocoascript.SKReferenceNode;
    // doc://com.apple.documentation/documentation/spritekit/skreferencenode/1508368-referencenodewithfilenamed
    referenceNodeWithFileNamed(fileName: cocoascript.NSString):cocoascript.SKReferenceNode;
    // doc://com.apple.documentation/documentation/spritekit/skreferencenode/1508369-initwithfilenamed
    initWithFileNamed(fileName: cocoascript.NSString):cocoascript.SKReferenceNode;
    // doc://com.apple.documentation/documentation/spritekit/skreferencenode/1508363-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.SKReferenceNode;
    // doc://com.apple.documentation/documentation/spritekit/skreferencenode/1508371-resolvereferencenode
    resolveReferenceNode():void;
    // doc://com.apple.documentation/documentation/spritekit/skreferencenode/1508364-didloadreferencenode
    didLoadReferenceNode(node: cocoascript.SKNode):void;
    //
    alloc():cocoascript.SKReferenceNode;
    //
    init():cocoascript.SKReferenceNode;
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
    shapeNodeWithPath(path: cocoascript.CGPathRef):cocoascript.SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519649-shapenodewithpath
    shapeNodeWithPath_centered(path: cocoascript.CGPathRef, centered: cocoascript.BOOL):cocoascript.SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519741-path
    path(): cocoascript.CGPathRef;
    setPath(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520047-shapenodewithrect
    shapeNodeWithRect(rect: cocoascript.CGRect):cocoascript.SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520147-shapenodewithrectofsize
    shapeNodeWithRectOfSize(size: cocoascript.CGSize):cocoascript.SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519769-shapenodewithrect
    shapeNodeWithRect_cornerRadius(rect: cocoascript.CGRect, cornerRadius: cocoascript.CGFloat):cocoascript.SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519712-shapenodewithrectofsize
    shapeNodeWithRectOfSize_cornerRadius(size: cocoascript.CGSize, cornerRadius: cocoascript.CGFloat):cocoascript.SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519570-shapenodewithcircleofradius
    shapeNodeWithCircleOfRadius(radius: cocoascript.CGFloat):cocoascript.SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519980-shapenodewithellipseofsize
    shapeNodeWithEllipseOfSize(size: cocoascript.CGSize):cocoascript.SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520412-shapenodewithellipseinrect
    shapeNodeWithEllipseInRect(rect: cocoascript.CGRect):cocoascript.SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520120-shapenodewithpoints
    shapeNodeWithPoints_count(points: cocoascript.CGPoint, numPoints: any):cocoascript.SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520140-shapenodewithsplinepoints
    shapeNodeWithSplinePoints_count(points: cocoascript.CGPoint, numPoints: any):cocoascript.SKShapeNode;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520154-fillcolor
    fillColor(): cocoascript.UIColor;
    setFillColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519956-filltexture
    fillTexture(): cocoascript.SKTexture;
    setFillTexture(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519885-linewidth
    lineWidth(): cocoascript.CGFloat;
    setLineWidth(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519748-strokecolor
    strokeColor(): cocoascript.UIColor;
    setStrokeColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519824-stroketexture
    strokeTexture(): cocoascript.SKTexture;
    setStrokeTexture(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520116-glowwidth
    glowWidth(): cocoascript.CGFloat;
    setGlowWidth(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520360-linecap
    lineCap(): cocoascript.CGLineCap;
    setLineCap(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520358-linejoin
    lineJoin(): cocoascript.CGLineJoin;
    setLineJoin(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520240-miterlimit
    miterLimit(): cocoascript.CGFloat;
    setMiterLimit(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519719-antialiased
    antialiased(): cocoascript.BOOL;
    setAntialiased(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520045-blendmode
    blendMode(): cocoascript.SKBlendMode;
    setBlendMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1520398-linelength
    lineLength(): cocoascript.CGFloat;
    setLineLength(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519784-strokeshader
    strokeShader(): cocoascript.SKShader;
    setStrokeShader(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/1519629-fillshader
    fillShader(): cocoascript.SKShader;
    setFillShader(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/2715841-attributevalues
    attributeValues(): cocoascript.SKAttributeValue;
    setAttributeValues(): void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/2715855-setvalue
    setValue_forAttributeNamed(value: cocoascript.SKAttributeValue, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/spritekit/skshapenode/2715843-valueforattributenamed
    valueForAttributeNamed(key: cocoascript.NSString):cocoascript.SKAttributeValue;
    //
    alloc():cocoascript.SKShapeNode;
    //
    init():cocoascript.SKShapeNode;
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
    mutableTextureWithSize(size: cocoascript.CGSize):cocoascript.SKMutableTexture;
    // doc://com.apple.documentation/documentation/spritekit/skmutabletexture/1397879-initwithsize
    initWithSize_pixelFormat(size: cocoascript.CGSize, format: number):cocoascript.SKMutableTexture;
    // doc://com.apple.documentation/documentation/spritekit/skmutabletexture/1397883-initwithsize
    initWithSize(size: cocoascript.CGSize):cocoascript.SKMutableTexture;
    // doc://com.apple.documentation/documentation/spritekit/skmutabletexture/1397881-modifypixeldatawithblock
    modifyPixelDataWithBlock(block: any):void;
    //
    alloc():cocoascript.SKMutableTexture;
    //
    init():cocoascript.SKMutableTexture;
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
    jointWithBodyA_bodyB_anchor(bodyA: cocoascript.SKPhysicsBody, bodyB: cocoascript.SKPhysicsBody, anchor: cocoascript.CGPoint):cocoascript.SKPhysicsJointFixed;
    //
    alloc():cocoascript.SKPhysicsJointFixed;
    //
    init():cocoascript.SKPhysicsJointFixed;
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
    jointWithBodyA_bodyB_anchorA_anchorB(bodyA: cocoascript.SKPhysicsBody, bodyB: cocoascript.SKPhysicsBody, anchorA: cocoascript.CGPoint, anchorB: cocoascript.CGPoint):cocoascript.SKPhysicsJointLimit;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointlimit/1519978-maxlength
    maxLength(): cocoascript.CGFloat;
    setMaxLength(): void;
    //
    alloc():cocoascript.SKPhysicsJointLimit;
    //
    init():cocoascript.SKPhysicsJointLimit;
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
    jointWithBodyA_bodyB_anchor(bodyA: cocoascript.SKPhysicsBody, bodyB: cocoascript.SKPhysicsBody, anchor: cocoascript.CGPoint):cocoascript.SKPhysicsJointPin;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointpin/1520259-rotationspeed
    rotationSpeed(): cocoascript.CGFloat;
    setRotationSpeed(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointpin/1520292-shouldenablelimits
    shouldEnableLimits(): cocoascript.BOOL;
    setShouldEnableLimits(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointpin/1520130-loweranglelimit
    lowerAngleLimit(): cocoascript.CGFloat;
    setLowerAngleLimit(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointpin/1519967-upperanglelimit
    upperAngleLimit(): cocoascript.CGFloat;
    setUpperAngleLimit(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointpin/1520299-frictiontorque
    frictionTorque(): cocoascript.CGFloat;
    setFrictionTorque(): void;
    //
    alloc():cocoascript.SKPhysicsJointPin;
    //
    init():cocoascript.SKPhysicsJointPin;
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
    jointWithBodyA_bodyB_anchor_axis(bodyA: cocoascript.SKPhysicsBody, bodyB: cocoascript.SKPhysicsBody, anchor: cocoascript.CGPoint, axis: cocoascript.CGVector):cocoascript.SKPhysicsJointSliding;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointsliding/1520053-shouldenablelimits
    shouldEnableLimits(): cocoascript.BOOL;
    setShouldEnableLimits(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointsliding/1519969-lowerdistancelimit
    lowerDistanceLimit(): cocoascript.CGFloat;
    setLowerDistanceLimit(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointsliding/1519836-upperdistancelimit
    upperDistanceLimit(): cocoascript.CGFloat;
    setUpperDistanceLimit(): void;
    //
    alloc():cocoascript.SKPhysicsJointSliding;
    //
    init():cocoascript.SKPhysicsJointSliding;
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
    jointWithBodyA_bodyB_anchorA_anchorB(bodyA: cocoascript.SKPhysicsBody, bodyB: cocoascript.SKPhysicsBody, anchorA: cocoascript.CGPoint, anchorB: cocoascript.CGPoint):cocoascript.SKPhysicsJointSpring;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointspring/1519709-damping
    damping(): cocoascript.CGFloat;
    setDamping(): void;
    // doc://com.apple.documentation/documentation/spritekit/skphysicsjointspring/1519806-frequency
    frequency(): cocoascript.CGFloat;
    setFrequency(): void;
    //
    alloc():cocoascript.SKPhysicsJointSpring;
    //
    init():cocoascript.SKPhysicsJointSpring;
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
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklightnode/1519940-categorybitmask
    categoryBitMask(): number;
    setCategoryBitMask(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklightnode/1520139-ambientcolor
    ambientColor(): cocoascript.UIColor;
    setAmbientColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklightnode/1520244-lightcolor
    lightColor(): cocoascript.UIColor;
    setLightColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklightnode/1519844-shadowcolor
    shadowColor(): cocoascript.UIColor;
    setShadowColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklightnode/1519776-falloff
    falloff(): cocoascript.CGFloat;
    setFalloff(): void;
    //
    alloc():cocoascript.SKLightNode;
    //
    init():cocoascript.SKLightNode;
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
    rendererWithDevice(device: any):cocoascript.SKRenderer;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866081-scene
    scene(): cocoascript.SKScene;
    setScene(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866073-renderwithviewport
    renderWithViewport_commandBuffer_renderPassDescriptor(viewport: cocoascript.CGRect, commandBuffer: any, renderPassDescriptor: any):void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866083-renderwithviewport
    renderWithViewport_renderCommandEncoder_renderPassDescriptor_commandQueue(viewport: cocoascript.CGRect, renderCommandEncoder: any, renderPassDescriptor: any, commandQueue: any):void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866080-updateattime
    updateAtTime(currentTime: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866074-ignoressiblingorder
    ignoresSiblingOrder(): cocoascript.BOOL;
    setIgnoresSiblingOrder(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866075-shouldcullnonvisiblenodes
    shouldCullNonVisibleNodes(): cocoascript.BOOL;
    setShouldCullNonVisibleNodes(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866071-showsnodecount
    showsNodeCount(): cocoascript.BOOL;
    setShowsNodeCount(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866077-showsdrawcount
    showsDrawCount(): cocoascript.BOOL;
    setShowsDrawCount(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866078-showsquadcount
    showsQuadCount(): cocoascript.BOOL;
    setShowsQuadCount(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866076-showsphysics
    showsPhysics(): cocoascript.BOOL;
    setShowsPhysics(): void;
    // doc://com.apple.documentation/documentation/spritekit/skrenderer/2866082-showsfields
    showsFields(): cocoascript.BOOL;
    setShowsFields(): void;
    //
    alloc():cocoascript.SKRenderer;
    //
    init():cocoascript.SKRenderer;
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
    maskNode(): cocoascript.SKNode;
    setMaskNode(): void;
    //
    alloc():cocoascript.SKCropNode;
    //
    init():cocoascript.SKCropNode;
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
    xRotation(): cocoascript.CGFloat;
    setXRotation(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktransformnode/2883242-yrotation
    yRotation(): cocoascript.CGFloat;
    setYRotation(): void;
    // doc://com.apple.documentation/documentation/spritekit/sktransformnode/2883246-seteulerangles
    setEulerAngles(euler: cocoascript.vector_float3):void;
    // doc://com.apple.documentation/documentation/spritekit/sktransformnode/2883240-setquaternion
    setQuaternion(quaternion: cocoascript.simd_quatf):void;
    // doc://com.apple.documentation/documentation/spritekit/sktransformnode/2883241-setrotationmatrix
    setRotationMatrix(rotationMatrix: cocoascript.matrix_float3x3):void;
    // doc://com.apple.documentation/documentation/spritekit/sktransformnode/2883245-eulerangles
    eulerAngles():cocoascript.vector_float3;
    // doc://com.apple.documentation/documentation/spritekit/sktransformnode/2883244-quaternion
    quaternion():cocoascript.simd_quatf;
    // doc://com.apple.documentation/documentation/spritekit/sktransformnode/2883247-rotationmatrix
    rotationMatrix():cocoascript.matrix_float3x3;
    //
    alloc():cocoascript.SKTransformNode;
    //
    init():cocoascript.SKTransformNode;
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
    initWithFontNamed(fontName: cocoascript.NSString):cocoascript.SKLabelNode;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1576448-labelnodewithfontnamed
    labelNodeWithFontNamed(fontName: cocoascript.NSString):cocoascript.SKLabelNode;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1519612-labelnodewithtext
    labelNodeWithText(text: cocoascript.NSString):cocoascript.SKLabelNode;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/2865817-labelnodewithattributedtext
    labelNodeWithAttributedText(attributedText: cocoascript.NSAttributedString):cocoascript.SKLabelNode;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1519788-text
    text(): cocoascript.NSString;
    setText(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/2865816-attributedtext
    attributedText(): cocoascript.NSAttributedString;
    setAttributedText(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1520057-fontcolor
    fontColor(): cocoascript.UIColor;
    setFontColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1520129-fontname
    fontName(): cocoascript.NSString;
    setFontName(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1520208-fontsize
    fontSize(): cocoascript.CGFloat;
    setFontSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1519933-verticalalignmentmode
    verticalAlignmentMode(): cocoascript.SKLabelVerticalAlignmentMode;
    setVerticalAlignmentMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1519711-horizontalalignmentmode
    horizontalAlignmentMode(): cocoascript.SKLabelHorizontalAlignmentMode;
    setHorizontalAlignmentMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/2865814-preferredmaxlayoutwidth
    preferredMaxLayoutWidth(): cocoascript.CGFloat;
    setPreferredMaxLayoutWidth(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/2865818-linebreakmode
    lineBreakMode(): cocoascript.NSLineBreakMode;
    setLineBreakMode(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/2865815-numberoflines
    numberOfLines(): cocoascript.NSInteger;
    setNumberOfLines(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1519938-color
    color(): cocoascript.UIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1519724-colorblendfactor
    colorBlendFactor(): cocoascript.CGFloat;
    setColorBlendFactor(): void;
    // doc://com.apple.documentation/documentation/spritekit/sklabelnode/1519598-blendmode
    blendMode(): cocoascript.SKBlendMode;
    setBlendMode(): void;
    //
    alloc():cocoascript.SKLabelNode;
    //
    init():cocoascript.SKLabelNode;
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
    videoNodeWithFileNamed(videoFile: cocoascript.NSString):cocoascript.SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407920-videonodewithavplayer
    videoNodeWithAVPlayer(player: cocoascript.AVPlayer):cocoascript.SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407902-videonodewithurl
    videoNodeWithURL(videoURL: cocoascript.NSURL):cocoascript.SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407900-initwithavplayer
    initWithAVPlayer(player: cocoascript.AVPlayer):cocoascript.SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407922-initwithfilenamed
    initWithFileNamed(videoFile: cocoascript.NSString):cocoascript.SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407898-initwithurl
    initWithURL(url: cocoascript.NSURL):cocoascript.SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407907-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407918-initwithvideofilenamed
    initWithVideoFileNamed(videoFile: cocoascript.NSString):cocoascript.SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407908-initwithvideourl
    initWithVideoURL(url: cocoascript.NSURL):cocoascript.SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407904-anchorpoint
    anchorPoint(): cocoascript.CGPoint;
    setAnchorPoint(): void;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407916-size
    size(): cocoascript.CGSize;
    setSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407896-play
    play():void;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407910-pause
    pause():void;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407914-videonodewithvideofilenamed
    videoNodeWithVideoFileNamed(videoFile: cocoascript.NSString):cocoascript.SKVideoNode;
    // doc://com.apple.documentation/documentation/spritekit/skvideonode/1407906-videonodewithvideourl
    videoNodeWithVideoURL(videoURL: cocoascript.NSURL):cocoascript.SKVideoNode;
    //
    alloc():cocoascript.SKVideoNode;
    //
    init():cocoascript.SKVideoNode;
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
    nodeWithViewportSize(viewportSize: cocoascript.CGSize):cocoascript.SK3DNode;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519708-initwithviewportsize
    initWithViewportSize(viewportSize: cocoascript.CGSize):cocoascript.SK3DNode;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519722-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.SK3DNode;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1520078-viewportsize
    viewportSize(): cocoascript.CGSize;
    setViewportSize(): void;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519834-scnscene
    scnScene(): any;
    setScnScene(): void;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519786-pointofview
    pointOfView(): any;
    setPointOfView(): void;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519676-autoenablesdefaultlighting
    autoenablesDefaultLighting(): cocoascript.BOOL;
    setAutoenablesDefaultLighting(): void;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1520297-playing
    playing(): cocoascript.BOOL;
    setPlaying(): void;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519549-loops
    loops(): cocoascript.BOOL;
    setLoops(): void;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519738-scenetime
    sceneTime(): cocoascript.NSTimeInterval;
    setSceneTime(): void;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1519782-hittest
    hitTest_options(point: cocoascript.CGPoint, options: cocoascript.SK3DNode):any;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1520400-projectpoint
    projectPoint(point: cocoascript.vector_float3):cocoascript.vector_float3;
    // doc://com.apple.documentation/documentation/spritekit/sk3dnode/1520024-unprojectpoint
    unprojectPoint(point: cocoascript.vector_float3):cocoascript.vector_float3;
    //
    alloc():cocoascript.SK3DNode;
    //
    init():cocoascript.SK3DNode;
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
