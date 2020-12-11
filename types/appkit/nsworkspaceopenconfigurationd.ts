declare namespace cocoascript {
  /**
   * The configuration options to use when opening URLs or launching apps.
   * doc://com.apple.documentation/documentation/appkit/nsworkspaceopenconfiguration
   */
  interface NSWorkspaceOpenConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsworkspaceopenconfiguration/3172716-requiresuniversallinks
    requiresUniversalLinks(): cocoascript.BOOL;
    setRequiresUniversalLinks(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspaceopenconfiguration/3172712-forprinting
    forPrinting(): cocoascript.BOOL;
    setForPrinting(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspaceopenconfiguration/3172704-activates
    activates(): cocoascript.BOOL;
    setActivates(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspaceopenconfiguration/3172705-addstorecentitems
    addsToRecentItems(): cocoascript.BOOL;
    setAddsToRecentItems(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspaceopenconfiguration/3172710-createsnewapplicationinstance
    createsNewApplicationInstance(): cocoascript.BOOL;
    setCreatesNewApplicationInstance(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspaceopenconfiguration/3172713-hides
    hides(): cocoascript.BOOL;
    setHides(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspaceopenconfiguration/3172714-hidesothers
    hidesOthers(): cocoascript.BOOL;
    setHidesOthers(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspaceopenconfiguration/3172715-promptsuserifneeded
    promptsUserIfNeeded(): cocoascript.BOOL;
    setPromptsUserIfNeeded(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspaceopenconfiguration/3172706-appleevent
    appleEvent(): cocoascript.NSAppleEventDescriptor;
    setAppleEvent(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspaceopenconfiguration/3172708-arguments
    arguments(): cocoascript.NSString;
    setArguments(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspaceopenconfiguration/3172711-environment
    environment(): cocoascript.NSString;
    setEnvironment(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspaceopenconfiguration/3172707-architecture
    architecture(): number;
    setArchitecture(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspaceopenconfiguration/3375728-allowsrunningapplicationsubstitu
    allowsRunningApplicationSubstitution(): cocoascript.BOOL;
    setAllowsRunningApplicationSubstitution(): void;
    //
    alloc():cocoascript.NSWorkspaceOpenConfiguration;
    //
    init():cocoascript.NSWorkspaceOpenConfiguration;
  }
}

declare const NSWorkspaceOpenConfiguration: cocoascript.NSWorkspaceOpenConfiguration;
