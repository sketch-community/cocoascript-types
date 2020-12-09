declare namespace cocoascript {
/**
 * A description of an attribute of a Core Data entity that derives its value from one or more other properties.
 * doc://com.apple.documentation/documentation/coredata/nsderivedattributedescription
 */
interface NSDerivedAttributeDescription extends NSAttributeDescription {
  // doc://com.apple.documentation/documentation/coredata/nsderivedattributedescription/3174854-derivationexpression
  derivationExpression(): cocoascript.NSExpression;
  setDerivationExpression(): void;
  // 
  alloc():cocoascript.NSDerivedAttributeDescription;
  // 
  init():cocoascript.NSDerivedAttributeDescription;
}
}
declare const NSDerivedAttributeDescription: cocoascript.NSDerivedAttributeDescription;

