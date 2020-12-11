declare namespace cocoascript {
  /**
   * An object that can manipulate and provide information for a single instance of an app.
   * doc://com.apple.documentation/documentation/appkit/nsrunningapplication
   */
  interface NSRunningApplication extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1533604-currentapplication
    currentApplication(): cocoascript.NSRunningApplication;
    setCurrentApplication(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1528778-active
    active(): cocoascript.BOOL;
    setActive(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1528725-activatewithoptions
    activateWithOptions(options: cocoascript.NSApplicationActivationOptions):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1533103-activationpolicy
    activationPolicy(): cocoascript.NSApplicationActivationPolicy;
    setActivationPolicy(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1526608-hide
    hide():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1534676-unhide
    unhide():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1525949-hidden
    hidden(): cocoascript.BOOL;
    setHidden(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1526751-localizedname
    localizedName(): cocoascript.NSString;
    setLocalizedName(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1529885-icon
    icon(): cocoascript.NSImage;
    setIcon(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1529140-bundleidentifier
    bundleIdentifier(): cocoascript.NSString;
    setBundleIdentifier(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1535500-bundleurl
    bundleURL(): cocoascript.NSURL;
    setBundleURL(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1524287-executablearchitecture
    executableArchitecture(): cocoascript.NSInteger;
    setExecutableArchitecture(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1531062-executableurl
    executableURL(): cocoascript.NSURL;
    setExecutableURL(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1532595-launchdate
    launchDate(): cocoascript.NSDate;
    setLaunchDate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1532002-finishedlaunching
    finishedLaunching(): cocoascript.BOOL;
    setFinishedLaunching(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1526998-processidentifier
    processIdentifier(): any;
    setProcessIdentifier(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1525915-ownsmenubar
    ownsMenuBar(): cocoascript.BOOL;
    setOwnsMenuBar(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1530370-forceterminate
    forceTerminate():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1528922-terminate
    terminate():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsrunningapplication/1532239-terminated
    terminated(): cocoascript.BOOL;
    setTerminated(): void;
    //
    alloc():cocoascript.NSRunningApplication;
    //
    init():cocoascript.NSRunningApplication;
  }
}

declare const NSRunningApplication: cocoascript.NSRunningApplication;
