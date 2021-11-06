declare namespace cocoascript {
  /**
   * The class responsible for displaying a lock icon that can be used to indicate that a user interface has restricted access.
   * https://developer.apple.com/documentation/securityinterface/sfauthorizationview
   */
  interface SFAuthorizationView extends NSView {
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationview/1411019-setstring
    setString(authorizationString: AuthorizationString):void;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationview/1411021-setauthorizationrights
    setAuthorizationRights(authorizationRights: AuthorizationRights):void;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationview/1411004-setautoupdate
    setAutoupdate(autoupdate: boolean):void;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationview/1411030-setautoupdate
    setAutoupdate_interval(autoupdate: boolean, interval: NSTimeInterval):void;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationview/1410998-setflags
    setFlags(flags: AuthorizationFlags):void;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationview/1411000-setenabled
    setEnabled(enabled: boolean):void;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationview/1410994-setdelegate
    setDelegate(delegate: SFAuthorizationView):void;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationview/1410996-delegate
    delegate():SFAuthorizationView;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationview/1411015-updatestatus
    updateStatus(inSender: SFAuthorizationView):boolean;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationview/1411032-authorization
    authorization():SFAuthorization;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationview/1410995-authorizationrights
    authorizationRights():AuthorizationRights;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationview/1411023-authorizationstate
    authorizationState():SFAuthorizationViewState;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationview/1411028-isenabled
    isEnabled():boolean;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationview/1411027-authorize
    authorize(inSender: SFAuthorizationView):boolean;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationview/1411025-deauthorize
    deauthorize(inSender: SFAuthorizationView):boolean;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411006-authorizationviewshoulddeauthori
    authorizationViewShouldDeauthorize(view: SFAuthorizationView):boolean;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411010-authorizationviewcreatedauthoriz
    authorizationViewCreatedAuthorization(view: SFAuthorizationView):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411002-authorizationviewdidauthorize
    authorizationViewDidAuthorize(view: SFAuthorizationView):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411017-authorizationviewdiddeauthorize
    authorizationViewDidDeauthorize(view: SFAuthorizationView):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1411034-authorizationviewdidhide
    authorizationViewDidHide(view: SFAuthorizationView):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1410992-authorizationviewreleasedauthori
    authorizationViewReleasedAuthorization(view: SFAuthorizationView):void;
    //
    alloc():SFAuthorizationView;
    //
    init():SFAuthorizationView;
  }
}

declare const SFAuthorizationView: cocoascript.SFAuthorizationView;
declare namespace cocoascript {
  /**
   * A panel or sheet that displays one or more certificates.
   * https://developer.apple.com/documentation/securityinterface/sfcertificatepanel
   */
  interface SFCertificatePanel extends NSPanel {
    // https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/1543245-sharedcertificatepanel
    sharedCertificatePanel():SFCertificatePanel;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/1543234-sethelpanchor
    setHelpAnchor(anchor: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/1543223-setshowshelp
    setShowsHelp(showsHelp: boolean):void;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/1543225-helpanchor
    helpAnchor():NSString;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/1543231-showshelp
    showsHelp():boolean;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/1543227-setalternatebuttontitle
    setAlternateButtonTitle(title: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/1543242-setdefaultbuttontitle
    setDefaultButtonTitle(title: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/1543239-setpolicies
    setPolicies(policies: SFCertificatePanel):void;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/1543232-policies
    policies():NSArray;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/1543229-beginsheetforwindow
    beginSheetForWindow_modalDelegate_didEndSelector_contextInfo_certificates_showGroup(docWindow: NSWindow, delegate: SFCertificatePanel, didEndSelector: SEL, contextInfo: void, certificates: NSArray, showGroup: boolean):void;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/1543228-beginsheetforwindow
    beginSheetForWindow_modalDelegate_didEndSelector_contextInfo_trust_showGroup(docWindow: NSWindow, delegate: SFCertificatePanel, didEndSelector: SEL, contextInfo: void, trust: SecTrustRef, showGroup: boolean):void;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/1543244-certificateview
    certificateView():SFCertificateView;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/1543240-runmodalforcertificates
    runModalForCertificates_showGroup(certificates: NSArray, showGroup: boolean):NSInteger;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/1543238-runmodalfortrust
    runModalForTrust_showGroup(trust: SecTrustRef, showGroup: boolean):NSInteger;
    // https://developer.apple.com/documentation/objectivec/nsobject/1514145-certificatepanelshowhelp
    certificatePanelShowHelp(sender: SFCertificatePanel):boolean;
    //
    alloc():SFCertificatePanel;
    //
    init():SFCertificatePanel;
  }
}

declare const SFCertificatePanel: cocoascript.SFCertificatePanel;
declare namespace cocoascript {
  /**
   * A panel or sheet containing a list of identities that a user can choose from.
   * https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel
   */
  interface SFChooseIdentityPanel extends NSPanel {
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556984-sharedchooseidentitypanel
    sharedChooseIdentityPanel():SFChooseIdentityPanel;
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556990-sethelpanchor
    setHelpAnchor(anchor: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556992-setshowshelp
    setShowsHelp(showsHelp: boolean):void;
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556996-helpanchor
    helpAnchor():NSString;
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556997-showshelp
    showsHelp():boolean;
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556993-setalternatebuttontitle
    setAlternateButtonTitle(title: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556989-setdefaultbuttontitle
    setDefaultButtonTitle(title: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556986-setpolicies
    setPolicies(policies: SFChooseIdentityPanel):void;
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556991-policies
    policies():NSArray;
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556994-informativetext
    informativeText():NSString;
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556983-setinformativetext
    setInformativeText(informativeText: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556987-beginsheetforwindow
    beginSheetForWindow_modalDelegate_didEndSelector_contextInfo_identities_message(docWindow: NSWindow, delegate: SFChooseIdentityPanel, didEndSelector: SEL, contextInfo: void, identities: NSArray, message: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556982-runmodalforidentities
    runModalForIdentities_message(identities: NSArray, message: string | cocoascript.NSString):NSInteger;
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556981-identity
    identity():SecIdentityRef;
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556985-domain
    domain():NSString;
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/1556988-setdomain
    setDomain(domainString: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1514140-chooseidentitypanelshowhelp
    chooseIdentityPanelShowHelp(sender: SFChooseIdentityPanel):boolean;
    //
    alloc():SFChooseIdentityPanel;
    //
    init():SFChooseIdentityPanel;
  }
}

declare const SFChooseIdentityPanel: cocoascript.SFChooseIdentityPanel;
declare namespace cocoascript {
  /**
   * Allows authorization plug-in developers to create a custom view their plug-in can display.
   * https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview
   */
  interface SFAuthorizationPluginView extends NSObject {
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1524417-initwithcallbacks
    initWithCallbacks_andEngineRef(callbacks: AuthorizationCallbacks, engineRef: AuthorizationEngineRef):SFAuthorizationPluginView;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1524415-callbacks
    callbacks():AuthorizationCallbacks;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1524422-engineref
    engineRef():AuthorizationEngineRef;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1524408-lasterror
    lastError():NSError;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1524388-buttonpressed
    buttonPressed(inButtonType: SFButtonType):void;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1524411-viewfortype
    viewForType(inType: SFViewType):NSView;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1524390-didactivate
    didActivate():void;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1524392-diddeactivate
    didDeactivate():void;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1524410-willactivatewithuser
    willActivateWithUser(inUserInformation: NSDictionary):void;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1524412-firstkeyview
    firstKeyView():NSView;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1524402-firstresponder
    firstResponder():NSResponder;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1524413-lastkeyview
    lastKeyView():NSView;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1524404-setenabled
    setEnabled(inEnabled: boolean):void;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1514136-displayview
    displayView():void;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1514134-setbutton
    setButton_enabled(inButtonType: SFButtonType, inEnabled: boolean):void;
    // https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/1514132-updateview
    updateView():void;
    //
    alloc():SFAuthorizationPluginView;
    //
    init():SFAuthorizationPluginView;
  }
}

declare const SFAuthorizationPluginView: cocoascript.SFAuthorizationPluginView;
declare namespace cocoascript {
  /**
   * A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.
   * https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel
   */
  interface SFCertificateTrustPanel extends SFCertificatePanel {
    // https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel/1518349-sharedcertificatetrustpanel
    sharedCertificateTrustPanel():SFCertificateTrustPanel;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel/1518350-beginsheetforwindow
    beginSheetForWindow_modalDelegate_didEndSelector_contextInfo_trust_message(docWindow: NSWindow, delegate: SFCertificateTrustPanel, didEndSelector: SEL, contextInfo: void, trust: SecTrustRef, message: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel/1518354-runmodalfortrust
    runModalForTrust_message(trust: SecTrustRef, message: string | cocoascript.NSString):NSInteger;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel/1518347-informativetext
    informativeText():NSString;
    // https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel/1518351-setinformativetext
    setInformativeText(informativeText: string | cocoascript.NSString):void;
    //
    alloc():SFCertificateTrustPanel;
    //
    init():SFCertificateTrustPanel;
  }
}

declare const SFCertificateTrustPanel: cocoascript.SFCertificateTrustPanel;
declare namespace cocoascript {
  /**
   * A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.
   * https://developer.apple.com/documentation/securityinterface/sfcertificateview
   */
  interface SFCertificateView extends NSVisualEffectView {
    // https://developer.apple.com/documentation/securityinterface/sfcertificateview/1588429-setcertificate
    setCertificate(certificate: SecCertificateRef):void;
    // https://developer.apple.com/documentation/securityinterface/sfcertificateview/1588428-setdetailsdisclosed
    setDetailsDisclosed(disclosed: boolean):void;
    // https://developer.apple.com/documentation/securityinterface/sfcertificateview/1588420-setdisplaydetails
    setDisplayDetails(display: boolean):void;
    // https://developer.apple.com/documentation/securityinterface/sfcertificateview/1588433-setdisplaytrust
    setDisplayTrust(display: boolean):void;
    // https://developer.apple.com/documentation/securityinterface/sfcertificateview/1588427-seteditabletrust
    setEditableTrust(editable: boolean):void;
    // https://developer.apple.com/documentation/securityinterface/sfcertificateview/1588423-setpolicies
    setPolicies(policies: SFCertificateView):void;
    // https://developer.apple.com/documentation/securityinterface/sfcertificateview/1588434-setpoliciesdisclosed
    setPoliciesDisclosed(disclosed: boolean):void;
    // https://developer.apple.com/documentation/securityinterface/sfcertificateview/1588426-certificate
    certificate():SecCertificateRef;
    // https://developer.apple.com/documentation/securityinterface/sfcertificateview/1588422-detailsdisplayed
    detailsDisplayed():boolean;
    // https://developer.apple.com/documentation/securityinterface/sfcertificateview/1588431-detailsdisclosed
    detailsDisclosed():boolean;
    // https://developer.apple.com/documentation/securityinterface/sfcertificateview/1588425-istrustdisplayed
    isTrustDisplayed():boolean;
    // https://developer.apple.com/documentation/securityinterface/sfcertificateview/1588421-iseditable
    isEditable():boolean;
    // https://developer.apple.com/documentation/securityinterface/sfcertificateview/1588432-policies
    policies():NSArray;
    // https://developer.apple.com/documentation/securityinterface/sfcertificateview/1588418-policiesdisclosed
    policiesDisclosed():boolean;
    // https://developer.apple.com/documentation/securityinterface/sfcertificateview/1588424-savetrustsettings
    saveTrustSettings():void;
    //
    alloc():SFCertificateView;
    //
    init():SFCertificateView;
  }
}

declare const SFCertificateView: cocoascript.SFCertificateView;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/securityinterface/sfchooseidentitytablecellview
   */
  interface SFChooseIdentityTableCellView extends NSTableCellView {
    // https://developer.apple.com/documentation/securityinterface/sfchooseidentitytablecellview/2880435-issuertextfield
    issuerTextField(): NSTextField;
    setIssuerTextField(value: NSTextField): void;
    //
    alloc():SFChooseIdentityTableCellView;
    //
    init():SFChooseIdentityTableCellView;
  }
}

declare const SFChooseIdentityTableCellView: cocoascript.SFChooseIdentityTableCellView;
declare namespace cocoascript {
  /**
   * A panel or sheet that allows the user to create a keychain.
   * https://developer.apple.com/documentation/securityinterface/sfkeychainsavepanel
   */
  interface SFKeychainSavePanel extends NSSavePanel {
    // https://developer.apple.com/documentation/securityinterface/sfkeychainsavepanel/1580411-sharedkeychainsavepanel
    sharedKeychainSavePanel():SFKeychainSavePanel;
    // https://developer.apple.com/documentation/securityinterface/sfkeychainsavepanel/1580414-setpassword
    setPassword(password: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/securityinterface/sfkeychainsavepanel/1580416-beginsheetfordirectory
    beginSheetForDirectory_file_modalForWindow_modalDelegate_didEndSelector_contextInfo(path: string | cocoascript.NSString, name: string | cocoascript.NSString, docWindow: NSWindow, delegate: SFKeychainSavePanel, didEndSelector: SEL, contextInfo: void):void;
    // https://developer.apple.com/documentation/securityinterface/sfkeychainsavepanel/1580415-runmodalfordirectory
    runModalForDirectory_file(path: string | cocoascript.NSString, name: string | cocoascript.NSString):NSInteger;
    // https://developer.apple.com/documentation/securityinterface/sfkeychainsavepanel/1580417-error
    error():NSError;
    // https://developer.apple.com/documentation/securityinterface/sfkeychainsavepanel/1580412-keychain
    keychain():SecKeychainRef;
    //
    alloc():SFKeychainSavePanel;
    //
    init():SFKeychainSavePanel;
  }
}

declare const SFKeychainSavePanel: cocoascript.SFKeychainSavePanel;
declare namespace cocoascript {
  /**
   * A panel or sheet that allows users to change their keychain settings.
   * https://developer.apple.com/documentation/securityinterface/sfkeychainsettingspanel
   */
  interface SFKeychainSettingsPanel extends NSPanel {
    // https://developer.apple.com/documentation/securityinterface/sfkeychainsettingspanel/1543503-sharedkeychainsettingspanel
    sharedKeychainSettingsPanel():SFKeychainSettingsPanel;
    // https://developer.apple.com/documentation/securityinterface/sfkeychainsettingspanel/1543505-beginsheetforwindow
    beginSheetForWindow_modalDelegate_didEndSelector_contextInfo_settings_keychain(docWindow: NSWindow, delegate: SFKeychainSettingsPanel, didEndSelector: SEL, contextInfo: void, settings: SecKeychainSettings, keychain: SecKeychainRef):void;
    // https://developer.apple.com/documentation/securityinterface/sfkeychainsettingspanel/1543500-runmodalforsettings
    runModalForSettings_keychain(settings: SecKeychainSettings, keychain: SecKeychainRef):NSInteger;
    //
    alloc():SFKeychainSettingsPanel;
    //
    init():SFKeychainSettingsPanel;
  }
}

declare const SFKeychainSettingsPanel: cocoascript.SFKeychainSettingsPanel;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/securityinterface/sfauthorizationviewstate
  type SFAuthorizationViewState = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/securityinterface/sfbuttontype
  type SFButtonType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/securityinterface/sfviewtype
  type SFViewType = number;
}
