declare namespace cocoascript {
/**
 * A protocol that enables encoding and decoding in a manner that is robust against object substitution attacks.
 * doc://com.apple.documentation/documentation/foundation/nssecurecoding
 */
interface NSSecureCoding extends NSCoding {
  // doc://com.apple.documentation/documentation/foundation/nssecurecoding/1855946-supportssecurecoding
  supportsSecureCoding(): cocoascript.BOOL;
  setSupportsSecureCoding(): void;
}
}

