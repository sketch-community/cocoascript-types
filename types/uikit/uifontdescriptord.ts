declare namespace cocoascript {
/**
 * A collection of attributes that describes a font.
 * doc://com.apple.documentation/documentation/uikit/uifontdescriptor
 */
interface UIFontDescriptor extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616666-fontdescriptorbyaddingattributes
  fontDescriptorByAddingAttributes(attributes: cocoascript.UIFontDescriptor):cocoascript.UIFontDescriptor;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/3151797-fontdescriptorwithdesign
  fontDescriptorWithDesign(design: cocoascript.UIFontDescriptorSystemDesign):cocoascript.UIFontDescriptor;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616676-fontdescriptorwithfamily
  fontDescriptorWithFamily(newFamily: cocoascript.NSString):cocoascript.UIFontDescriptor;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616681-fontdescriptorwithface
  fontDescriptorWithFace(newFace: cocoascript.NSString):cocoascript.UIFontDescriptor;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616731-fontdescriptorwithmatrix
  fontDescriptorWithMatrix(matrix: cocoascript.CGAffineTransform):cocoascript.UIFontDescriptor;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616675-fontdescriptorwithsize
  fontDescriptorWithSize(newPointSize: cocoascript.CGFloat):cocoascript.UIFontDescriptor;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616665-fontdescriptorwithsymbolictraits
  fontDescriptorWithSymbolicTraits(symbolicTraits: cocoascript.UIFontDescriptorSymbolicTraits):cocoascript.UIFontDescriptor;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616679-initwithfontattributes
  initWithFontAttributes(attributes: cocoascript.UIFontDescriptor):cocoascript.UIFontDescriptor;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616667-init
  init():cocoascript.UIFontDescriptor;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616662-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIFontDescriptor;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616699-matchingfontdescriptorswithmanda
  matchingFontDescriptorsWithMandatoryKeys(mandatoryKeys: cocoascript.UIFontDescriptorAttributeName):cocoascript.UIFontDescriptor;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616698-fontattributes
  fontAttributes(): cocoascript.id;
  setFontAttributes(): void;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616713-matrix
  matrix(): cocoascript.CGAffineTransform;
  setMatrix(): void;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616733-objectforkey
  objectForKey(anAttribute: cocoascript.UIFontDescriptorAttributeName):cocoascript.UIFontDescriptor;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616696-pointsize
  pointSize(): cocoascript.CGFloat;
  setPointSize(): void;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616693-postscriptname
  postscriptName(): cocoascript.NSString;
  setPostscriptName(): void;
  // doc://com.apple.documentation/documentation/uikit/uifontdescriptor/1616723-symbolictraits
  symbolicTraits(): cocoascript.UIFontDescriptorSymbolicTraits;
  setSymbolicTraits(): void;
  // 
  alloc():cocoascript.UIFontDescriptor;
  // 
  init():cocoascript.UIFontDescriptor;
}
}
declare const UIFontDescriptor: cocoascript.UIFontDescriptor;

