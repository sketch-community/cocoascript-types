declare namespace cocoascript {
  /**
   * A GPU-based image processing routine that is optimized for blending two images.
   * doc://com.apple.documentation/documentation/coreimage/ciblendkernel
   */
  interface CIBlendKernel extends CIColorKernel {
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2919728-applywithforeground
    applyWithForeground_background(foreground: cocoascript.CIImage, background: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867388-clear
    clear(): cocoascript.CIBlendKernel;
    setClear(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867350-color
    color(): cocoascript.CIBlendKernel;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867391-colorburn
    colorBurn(): cocoascript.CIBlendKernel;
    setColorBurn(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867417-colordodge
    colorDodge(): cocoascript.CIBlendKernel;
    setColorDodge(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867384-componentadd
    componentAdd(): cocoascript.CIBlendKernel;
    setComponentAdd(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867433-componentmax
    componentMax(): cocoascript.CIBlendKernel;
    setComponentMax(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867425-componentmin
    componentMin(): cocoascript.CIBlendKernel;
    setComponentMin(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867406-componentmultiply
    componentMultiply(): cocoascript.CIBlendKernel;
    setComponentMultiply(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867348-darken
    darken(): cocoascript.CIBlendKernel;
    setDarken(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867351-darkercolor
    darkerColor(): cocoascript.CIBlendKernel;
    setDarkerColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867422-destination
    destination(): cocoascript.CIBlendKernel;
    setDestination(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867385-destinationatop
    destinationAtop(): cocoascript.CIBlendKernel;
    setDestinationAtop(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867352-destinationin
    destinationIn(): cocoascript.CIBlendKernel;
    setDestinationIn(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867368-destinationout
    destinationOut(): cocoascript.CIBlendKernel;
    setDestinationOut(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867432-destinationover
    destinationOver(): cocoascript.CIBlendKernel;
    setDestinationOver(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867416-difference
    difference(): cocoascript.CIBlendKernel;
    setDifference(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867410-divide
    divide(): cocoascript.CIBlendKernel;
    setDivide(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867343-exclusion
    exclusion(): cocoascript.CIBlendKernel;
    setExclusion(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867421-exclusiveor
    exclusiveOr(): cocoascript.CIBlendKernel;
    setExclusiveOr(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867418-hardlight
    hardLight(): cocoascript.CIBlendKernel;
    setHardLight(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867347-hardmix
    hardMix(): cocoascript.CIBlendKernel;
    setHardMix(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867408-hue
    hue(): cocoascript.CIBlendKernel;
    setHue(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867424-lighten
    lighten(): cocoascript.CIBlendKernel;
    setLighten(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867427-lightercolor
    lighterColor(): cocoascript.CIBlendKernel;
    setLighterColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867409-linearburn
    linearBurn(): cocoascript.CIBlendKernel;
    setLinearBurn(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867354-lineardodge
    linearDodge(): cocoascript.CIBlendKernel;
    setLinearDodge(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867435-linearlight
    linearLight(): cocoascript.CIBlendKernel;
    setLinearLight(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867423-luminosity
    luminosity(): cocoascript.CIBlendKernel;
    setLuminosity(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867419-multiply
    multiply(): cocoascript.CIBlendKernel;
    setMultiply(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867411-overlay
    overlay(): cocoascript.CIBlendKernel;
    setOverlay(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867420-pinlight
    pinLight(): cocoascript.CIBlendKernel;
    setPinLight(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867431-saturation
    saturation(): cocoascript.CIBlendKernel;
    setSaturation(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867356-screen
    screen(): cocoascript.CIBlendKernel;
    setScreen(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867434-softlight
    softLight(): cocoascript.CIBlendKernel;
    setSoftLight(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867407-source
    source(): cocoascript.CIBlendKernel;
    setSource(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867357-sourceatop
    sourceAtop(): cocoascript.CIBlendKernel;
    setSourceAtop(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867428-sourcein
    sourceIn(): cocoascript.CIBlendKernel;
    setSourceIn(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867415-sourceout
    sourceOut(): cocoascript.CIBlendKernel;
    setSourceOut(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867413-sourceover
    sourceOver(): cocoascript.CIBlendKernel;
    setSourceOver(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867370-subtract
    subtract(): cocoascript.CIBlendKernel;
    setSubtract(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867358-vividlight
    vividLight(): cocoascript.CIBlendKernel;
    setVividLight(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/3152403-applywithforeground
    applyWithForeground_background_colorSpace(foreground: cocoascript.CIImage, background: cocoascript.CIImage, colorSpace: cocoascript.CGColorSpaceRef):cocoascript.CIImage;
    //
    alloc():cocoascript.CIBlendKernel;
    //
    init():cocoascript.CIBlendKernel;
  }
}

declare const CIBlendKernel: cocoascript.CIBlendKernel;
