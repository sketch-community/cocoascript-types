declare namespace cocoascript {
  /**
   * Information about a face detected in a still or video image.
   * doc://com.apple.documentation/documentation/coreimage/cifacefeature
   */
  interface CIFaceFeature extends CIFeature {
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1438068-bounds
    bounds(): cocoascript.CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1438165-hasfaceangle
    hasFaceAngle(): cocoascript.BOOL;
    setHasFaceAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437689-faceangle
    faceAngle(): number;
    setFaceAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437900-haslefteyeposition
    hasLeftEyePosition(): cocoascript.BOOL;
    setHasLeftEyePosition(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1438076-hasrighteyeposition
    hasRightEyePosition(): cocoascript.BOOL;
    setHasRightEyePosition(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437976-hasmouthposition
    hasMouthPosition(): cocoascript.BOOL;
    setHasMouthPosition(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437923-lefteyeposition
    leftEyePosition(): cocoascript.CGPoint;
    setLeftEyePosition(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1438213-righteyeposition
    rightEyePosition(): cocoascript.CGPoint;
    setRightEyePosition(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1438020-mouthposition
    mouthPosition(): cocoascript.CGPoint;
    setMouthPosition(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437882-hassmile
    hasSmile(): cocoascript.BOOL;
    setHasSmile(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437630-lefteyeclosed
    leftEyeClosed(): cocoascript.BOOL;
    setLeftEyeClosed(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437615-righteyeclosed
    rightEyeClosed(): cocoascript.BOOL;
    setRightEyeClosed(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437683-hastrackingid
    hasTrackingID(): cocoascript.BOOL;
    setHasTrackingID(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437709-trackingid
    trackingID(): number;
    setTrackingID(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437731-hastrackingframecount
    hasTrackingFrameCount(): cocoascript.BOOL;
    setHasTrackingFrameCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437953-trackingframecount
    trackingFrameCount(): number;
    setTrackingFrameCount(): void;
    //
    alloc():cocoascript.CIFaceFeature;
    //
    init():cocoascript.CIFaceFeature;
  }
}

declare const CIFaceFeature: cocoascript.CIFaceFeature;
