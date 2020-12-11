declare namespace cocoascript {
  /**
   * A panel or sheet containing a list of identities that a user can choose from.
   * doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel
   */
  interface SFChooseIdentityPanel extends NSPanel {
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556990-sethelpanchor
    setHelpAnchor(anchor: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556992-setshowshelp
    setShowsHelp(showsHelp: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556996-helpanchor
    helpAnchor():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556997-showshelp
    showsHelp():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556993-setalternatebuttontitle
    setAlternateButtonTitle(title: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556989-setdefaultbuttontitle
    setDefaultButtonTitle(title: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556986-setpolicies
    setPolicies(policies: cocoascript.SFChooseIdentityPanel):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556991-policies
    policies():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556994-informativetext
    informativeText():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556983-setinformativetext
    setInformativeText(informativeText: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556987-beginsheetforwindow
    beginSheetForWindow_modalDelegate_didEndSelector_contextInfo_identities_message(docWindow: cocoascript.NSWindow, delegate: cocoascript.SFChooseIdentityPanel, didEndSelector: cocoascript.SEL, contextInfo: void, identities: cocoascript.NSArray, message: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556982-runmodalforidentities
    runModalForIdentities_message(identities: cocoascript.NSArray, message: cocoascript.NSString):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556981-identity
    identity():cocoascript.SecIdentityRef;
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556985-domain
    domain():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556988-setdomain
    setDomain(domainString: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1514140-chooseidentitypanelshowhelp
    chooseIdentityPanelShowHelp(sender: cocoascript.SFChooseIdentityPanel):cocoascript.BOOL;
    //
    alloc():cocoascript.SFChooseIdentityPanel;
    //
    init():cocoascript.SFChooseIdentityPanel;
  }
}

declare const SFChooseIdentityPanel: cocoascript.SFChooseIdentityPanel;
