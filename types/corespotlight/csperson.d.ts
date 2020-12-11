declare namespace cocoascript {
  /**
   * An object representing a person in the context of search results.
   * doc://com.apple.documentation/documentation/corespotlight/csperson
   */
  interface CSPerson extends NSObject {
    // doc://com.apple.documentation/documentation/corespotlight/csperson/1618464-initwithdisplayname
    initWithDisplayName_handles_handleIdentifier(displayName: cocoascript.NSString, handles: cocoascript.NSString, handleIdentifier: cocoascript.NSString):cocoascript.CSPerson;
    // doc://com.apple.documentation/documentation/corespotlight/csperson/1618468-contactidentifier
    contactIdentifier(): cocoascript.NSString;
    setContactIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/csperson/1618469-displayname
    displayName(): cocoascript.NSString;
    setDisplayName(): void;
    // doc://com.apple.documentation/documentation/corespotlight/csperson/1618466-handleidentifier
    handleIdentifier(): cocoascript.NSString;
    setHandleIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/csperson/1618465-handles
    handles(): cocoascript.NSString;
    setHandles(): void;
    //
    alloc():cocoascript.CSPerson;
    //
    init():cocoascript.CSPerson;
  }
}

declare const CSPerson: cocoascript.CSPerson;
