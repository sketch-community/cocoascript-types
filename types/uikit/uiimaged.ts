declare namespace cocoascript {
  /**
   * An object that manages image data in your app.
   * doc://com.apple.documentation/documentation/uikit/uiimage
   */
  interface UIImage extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624112-initwithcontentsoffile
    initWithContentsOfFile(path: cocoascript.NSString):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624106-initwithdata
    initWithData(data: cocoascript.NSData):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624109-initwithdata
    initWithData_scale(data: cocoascript.NSData, scale: cocoascript.CGFloat):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624090-initwithcgimage
    initWithCGImage(cgImage: cocoascript.CGImageRef):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624091-initwithcgimage
    initWithCGImage_scale_orientation(cgImage: cocoascript.CGImageRef, scale: cocoascript.CGFloat, orientation: cocoascript.UIImageOrientation):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624114-initwithciimage
    initWithCIImage(ciImage: cocoascript.CIImage):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624150-initwithciimage
    initWithCIImage_scale_orientation(ciImage: cocoascript.CIImage, scale: cocoascript.CGFloat, orientation: cocoascript.UIImageOrientation):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3294228-imagewithconfiguration
    imageWithConfiguration(configuration: cocoascript.UIImageConfiguration):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3294225-imagebyapplyingsymbolconfigurati
    imageByApplyingSymbolConfiguration(configuration: cocoascript.UIImageSymbolConfiguration):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624140-imageflippedforrighttoleftlayout
    imageFlippedForRightToLeftLayoutDirection():cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/2113668-imagewithhorizontallyflippedorie
    imageWithHorizontallyFlippedOrientation():cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624153-imagewithrenderingmode
    imageWithRenderingMode(renderingMode: cocoascript.UIImageRenderingMode):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624100-imagewithalignmentrectinsets
    imageWithAlignmentRectInsets(alignmentInsets: cocoascript.UIEdgeInsets):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624102-resizableimagewithcapinsets
    resizableImageWithCapInsets(capInsets: cocoascript.UIEdgeInsets):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624127-resizableimagewithcapinsets
    resizableImageWithCapInsets_resizingMode(capInsets: cocoascript.UIEdgeInsets, resizingMode: cocoascript.UIImageResizingMode):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3294229-imagewithoutbaseline
    imageWithoutBaseline():cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3294227-imagewithbaselineoffsetfrombotto
    imageWithBaselineOffsetFromBottom(baselineOffset: cocoascript.CGFloat):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3294220-addimage
    addImage(): cocoascript.UIImage;
    setAddImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3294230-removeimage
    removeImage(): cocoascript.UIImage;
    setRemoveImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3294219-actionsimage
    actionsImage(): cocoascript.UIImage;
    setActionsImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3343561-checkmarkimage
    checkmarkImage(): cocoascript.UIImage;
    setCheckmarkImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3343562-strokedcheckmarkimage
    strokedCheckmarkImage(): cocoascript.UIImage;
    setStrokedCheckmarkImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624147-cgimage
    CGImage(): cocoascript.CGImageRef;
    setCGImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624159-cgimage
    CGImage():cocoascript.CGImageRef;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624129-ciimage
    CIImage(): cocoascript.CIImage;
    setCIImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624117-images
    images(): cocoascript.UIImage;
    setImages(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624151-imageasset
    imageAsset(): cocoascript.UIImageAsset;
    setImageAsset(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624110-scale
    scale(): cocoascript.CGFloat;
    setScale(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624105-size
    size(): cocoascript.CGSize;
    setSize(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624141-imageorientation
    imageOrientation(): cocoascript.UIImageOrientation;
    setImageOrientation(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624128-flipsforrighttoleftlayoutdirecti
    flipsForRightToLeftLayoutDirection(): cocoascript.BOOL;
    setFlipsForRightToLeftLayoutDirection(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624157-resizingmode
    resizingMode(): cocoascript.UIImageResizingMode;
    setResizingMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624155-duration
    duration(): cocoascript.NSTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624097-capinsets
    capInsets(): cocoascript.UIEdgeInsets;
    setCapInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624139-alignmentrectinsets
    alignmentRectInsets(): cocoascript.UIEdgeInsets;
    setAlignmentRectInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3294232-symbolimage
    symbolImage(): cocoascript.BOOL;
    setSymbolImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3294223-configuration
    configuration(): cocoascript.UIImageConfiguration;
    setConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3294231-symbolconfiguration
    symbolConfiguration(): cocoascript.UIImageSymbolConfiguration;
    setSymbolConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624158-traitcollection
    traitCollection(): cocoascript.UITraitCollection;
    setTraitCollection(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3294224-hasbaseline
    hasBaseline(): cocoascript.BOOL;
    setHasBaseline(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3294221-baselineoffsetfrombottom
    baselineOffsetFromBottom(): cocoascript.CGFloat;
    setBaselineOffsetFromBottom(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624122-renderingmode
    renderingMode(): cocoascript.UIImageRenderingMode;
    setRenderingMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1649497-imagerendererformat
    imageRendererFormat(): cocoascript.UIGraphicsImageRendererFormat;
    setImageRendererFormat(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3327300-imagewithtintcolor
    imageWithTintColor(color: cocoascript.UIColor):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/3327301-imagewithtintcolor
    imageWithTintColor_renderingMode(color: cocoascript.UIColor, renderingMode: cocoascript.UIImageRenderingMode):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624132-drawatpoint
    drawAtPoint(point: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624095-drawatpoint
    drawAtPoint_blendMode_alpha(point: cocoascript.CGPoint, blendMode: cocoascript.CGBlendMode, alpha: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624092-drawinrect
    drawInRect(rect: cocoascript.CGRect):void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624101-drawinrect
    drawInRect_blendMode_alpha(rect: cocoascript.CGRect, blendMode: cocoascript.CGBlendMode, alpha: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624144-drawaspatterninrect
    drawAsPatternInRect(rect: cocoascript.CGRect):void;
    // doc://com.apple.documentation/documentation/uikit/1624115-uiimagejpegrepresentation
    UIImageJPEGRepresentation(): cocoascript.CGFloat;
    setUIImageJPEGRepresentation(): void;
    // doc://com.apple.documentation/documentation/uikit/1624096-uiimagepngrepresentation
    UIImagePNGRepresentation(): cocoascript.UIImage;
    setUIImagePNGRepresentation(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624145-stretchableimagewithleftcapwidth
    stretchableImageWithLeftCapWidth_topCapHeight(leftCapWidth: cocoascript.NSInteger, topCapHeight: cocoascript.NSInteger):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624148-leftcapwidth
    leftCapWidth(): cocoascript.NSInteger;
    setLeftCapWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uiimage/1624116-topcapheight
    topCapHeight(): cocoascript.NSInteger;
    setTopCapHeight(): void;
    //
    alloc():cocoascript.UIImage;
    //
    init():cocoascript.UIImage;
  }
}

declare const UIImage: cocoascript.UIImage;
