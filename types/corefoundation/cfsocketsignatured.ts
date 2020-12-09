declare namespace cocoascript {
/**
 * A structure that fully specifies the communication protocol and connection address of a CFSocket object.
 * doc://com.apple.documentation/documentation/corefoundation/cfsocketsignature
 */
interface CFSocketSignature {
  // doc://com.apple.documentation/documentation/corefoundation/cfsocketsignature/1542588-address
  address(): cocoascript.CFDataRef;
  setAddress(): void;
}
}

