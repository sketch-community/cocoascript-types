declare namespace cocoascript {
/**
 * A dictionary of attributes that describe a font.
 * doc://com.apple.documentation/documentation/appkit/nsfontdescriptor
 */
interface NSFontDescriptor extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/1469991-initwithfontattributes
  initWithFontAttributes(attributes: cocoascript.NSFontDescriptor):cocoascript.NSFontDescriptor;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/1469987-fontdescriptorbyaddingattributes
  fontDescriptorByAddingAttributes(attributes: cocoascript.NSFontDescriptor):cocoascript.NSFontDescriptor;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/1469928-fontdescriptorwithface
  fontDescriptorWithFace(newFace: cocoascript.NSString):cocoascript.NSFontDescriptor;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/1469866-fontdescriptorwithfamily
  fontDescriptorWithFamily(newFamily: cocoascript.NSString):cocoascript.NSFontDescriptor;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/1469983-fontdescriptorwithmatrix
  fontDescriptorWithMatrix(matrix: cocoascript.NSAffineTransform):cocoascript.NSFontDescriptor;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/1469835-fontdescriptorwithsize
  fontDescriptorWithSize(newPointSize: cocoascript.CGFloat):cocoascript.NSFontDescriptor;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/1469843-fontdescriptorwithsymbolictraits
  fontDescriptorWithSymbolicTraits(symbolicTraits: cocoascript.NSFontDescriptorSymbolicTraits):cocoascript.NSFontDescriptor;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/3152380-fontdescriptorwithdesign
  fontDescriptorWithDesign(design: cocoascript.NSFontDescriptorSystemDesign):cocoascript.NSFontDescriptor;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/1469985-matchingfontdescriptorswithmanda
  matchingFontDescriptorsWithMandatoryKeys(mandatoryKeys: cocoascript.NSFontDescriptorAttributeName):cocoascript.NSFontDescriptor;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/1469839-matchingfontdescriptorwithmandat
  matchingFontDescriptorWithMandatoryKeys(mandatoryKeys: cocoascript.NSFontDescriptorAttributeName):cocoascript.NSFontDescriptor;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/1469831-fontattributes
  fontAttributes(): cocoascript.id;
  setFontAttributes(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/1469837-objectforkey
  objectForKey(attribute: cocoascript.NSFontDescriptorAttributeName):cocoascript.NSFontDescriptor;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/1469950-matrix
  matrix(): cocoascript.NSAffineTransform;
  setMatrix(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/1469829-pointsize
  pointSize(): cocoascript.CGFloat;
  setPointSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/1469948-postscriptname
  postscriptName(): cocoascript.NSString;
  setPostscriptName(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/1469858-symbolictraits
  symbolicTraits(): cocoascript.NSFontDescriptorSymbolicTraits;
  setSymbolicTraits(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfontdescriptor/2890793-requiresfontassetrequest
  requiresFontAssetRequest(): cocoascript.BOOL;
  setRequiresFontAssetRequest(): void;
  // 
  alloc():cocoascript.NSFontDescriptor;
  // 
  init():cocoascript.NSFontDescriptor;
}
}
declare const NSFontDescriptor: cocoascript.NSFontDescriptor;

