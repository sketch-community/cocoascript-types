declare namespace cocoascript {
  /**
   * An object that represents a custom color space.
   * doc://com.apple.documentation/documentation/appkit/nscolorspace
   */
  interface NSColorSpace extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412066-devicergbcolorspace
    deviceRGBColorSpace(): cocoascript.NSColorSpace;
    setDeviceRGBColorSpace(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412082-genericrgbcolorspace
    genericRGBColorSpace(): cocoascript.NSColorSpace;
    setGenericRGBColorSpace(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412090-devicecmykcolorspace
    deviceCMYKColorSpace(): cocoascript.NSColorSpace;
    setDeviceCMYKColorSpace(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412088-genericcmykcolorspace
    genericCMYKColorSpace(): cocoascript.NSColorSpace;
    setGenericCMYKColorSpace(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412084-devicegraycolorspace
    deviceGrayColorSpace(): cocoascript.NSColorSpace;
    setDeviceGrayColorSpace(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412060-genericgraycolorspace
    genericGrayColorSpace(): cocoascript.NSColorSpace;
    setGenericGrayColorSpace(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412071-srgbcolorspace
    sRGBColorSpace(): cocoascript.NSColorSpace;
    setSRGBColorSpace(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1644175-extendedsrgbcolorspace
    extendedSRGBColorSpace(): cocoascript.NSColorSpace;
    setExtendedSRGBColorSpace(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1644170-displayp3colorspace
    displayP3ColorSpace(): cocoascript.NSColorSpace;
    setDisplayP3ColorSpace(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412103-genericgamma22graycolorspace
    genericGamma22GrayColorSpace(): cocoascript.NSColorSpace;
    setGenericGamma22GrayColorSpace(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1644177-extendedgenericgamma22graycolors
    extendedGenericGamma22GrayColorSpace(): cocoascript.NSColorSpace;
    setExtendedGenericGamma22GrayColorSpace(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412064-adobergb1998colorspace
    adobeRGB1998ColorSpace(): cocoascript.NSColorSpace;
    setAdobeRGB1998ColorSpace(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412059-initwithcgcolorspace
    initWithCGColorSpace(cgColorSpace: cocoascript.CGColorSpaceRef):cocoascript.NSColorSpace;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412062-initwithcolorsyncprofile
    initWithColorSyncProfile(prof: void):cocoascript.NSColorSpace;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412094-initwithiccprofiledata
    initWithICCProfileData(iccData: cocoascript.NSData):cocoascript.NSColorSpace;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412073-cgcolorspace
    CGColorSpace(): cocoascript.CGColorSpaceRef;
    setCGColorSpace(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412095-colorspacemodel
    colorSpaceModel(): cocoascript.NSColorSpaceModel;
    setColorSpaceModel(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412076-colorsyncprofile
    colorSyncProfile(): void;
    setColorSyncProfile(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412078-iccprofiledata
    ICCProfileData(): cocoascript.NSData;
    setICCProfileData(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412072-localizedname
    localizedName(): cocoascript.NSString;
    setLocalizedName(): void;
    // doc://com.apple.documentation/documentation/appkit/nscolorspace/1412099-numberofcolorcomponents
    numberOfColorComponents(): cocoascript.NSInteger;
    setNumberOfColorComponents(): void;
    //
    alloc():cocoascript.NSColorSpace;
    //
    init():cocoascript.NSColorSpace;
  }
}

declare const NSColorSpace: cocoascript.NSColorSpace;
