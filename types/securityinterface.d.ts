declare namespace cocoascript {
  /**
   * The class responsible for displaying a lock icon that can be used to indicate that a user interface has restricted access.
   * doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview
   */
  interface SFAuthorizationView extends NSView {
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411019-setstring
    setString(authorizationString: cocoascript.AuthorizationString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411021-setauthorizationrights
    setAuthorizationRights(authorizationRights: cocoascript.AuthorizationRights):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411004-setautoupdate
    setAutoupdate(autoupdate: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411030-setautoupdate
    setAutoupdate_interval(autoupdate: cocoascript.BOOL, interval: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1410998-setflags
    setFlags(flags: cocoascript.AuthorizationFlags):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411000-setenabled
    setEnabled(enabled: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1410994-setdelegate
    setDelegate(delegate: cocoascript.SFAuthorizationView):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1410996-delegate
    delegate():cocoascript.SFAuthorizationView;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411015-updatestatus
    updateStatus(inSender: cocoascript.SFAuthorizationView):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411032-authorization
    authorization():cocoascript.SFAuthorization;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1410995-authorizationrights
    authorizationRights():cocoascript.AuthorizationRights;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411023-authorizationstate
    authorizationState():cocoascript.SFAuthorizationViewState;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411028-isenabled
    isEnabled():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411027-authorize
    authorize(inSender: cocoascript.SFAuthorizationView):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411025-deauthorize
    deauthorize(inSender: cocoascript.SFAuthorizationView):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1411006-authorizationviewshoulddeauthori
    authorizationViewShouldDeauthorize(view: cocoascript.SFAuthorizationView):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1411010-authorizationviewcreatedauthoriz
    authorizationViewCreatedAuthorization(view: cocoascript.SFAuthorizationView):void;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1411002-authorizationviewdidauthorize
    authorizationViewDidAuthorize(view: cocoascript.SFAuthorizationView):void;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1411017-authorizationviewdiddeauthorize
    authorizationViewDidDeauthorize(view: cocoascript.SFAuthorizationView):void;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1411034-authorizationviewdidhide
    authorizationViewDidHide(view: cocoascript.SFAuthorizationView):void;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1410992-authorizationviewreleasedauthori
    authorizationViewReleasedAuthorization(view: cocoascript.SFAuthorizationView):void;
    //
    alloc():cocoascript.SFAuthorizationView;
    //
    init():cocoascript.SFAuthorizationView;
  }
}

declare const SFAuthorizationView: cocoascript.SFAuthorizationView;
declare namespace cocoascript {
  /**
   * A panel or sheet that displays one or more certificates.
   * doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel
   */
  interface SFCertificatePanel extends NSPanel {
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543245-sharedcertificatepanel
    sharedCertificatePanel():cocoascript.SFCertificatePanel;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543234-sethelpanchor
    setHelpAnchor(anchor: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543223-setshowshelp
    setShowsHelp(showsHelp: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543225-helpanchor
    helpAnchor():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543231-showshelp
    showsHelp():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543227-setalternatebuttontitle
    setAlternateButtonTitle(title: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543242-setdefaultbuttontitle
    setDefaultButtonTitle(title: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543239-setpolicies
    setPolicies(policies: cocoascript.SFCertificatePanel):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543232-policies
    policies():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543229-beginsheetforwindow
    beginSheetForWindow_modalDelegate_didEndSelector_contextInfo_certificates_showGroup(docWindow: cocoascript.NSWindow, delegate: cocoascript.SFCertificatePanel, didEndSelector: cocoascript.SEL, contextInfo: void, certificates: cocoascript.NSArray, showGroup: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543228-beginsheetforwindow
    beginSheetForWindow_modalDelegate_didEndSelector_contextInfo_trust_showGroup(docWindow: cocoascript.NSWindow, delegate: cocoascript.SFCertificatePanel, didEndSelector: cocoascript.SEL, contextInfo: void, trust: cocoascript.SecTrustRef, showGroup: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543244-certificateview
    certificateView():cocoascript.SFCertificateView;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543240-runmodalforcertificates
    runModalForCertificates_showGroup(certificates: cocoascript.NSArray, showGroup: cocoascript.BOOL):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatepanel/1543238-runmodalfortrust
    runModalForTrust_showGroup(trust: cocoascript.SecTrustRef, showGroup: cocoascript.BOOL):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1514145-certificatepanelshowhelp
    certificatePanelShowHelp(sender: cocoascript.SFCertificatePanel):cocoascript.BOOL;
    //
    alloc():cocoascript.SFCertificatePanel;
    //
    init():cocoascript.SFCertificatePanel;
  }
}

declare const SFCertificatePanel: cocoascript.SFCertificatePanel;
declare namespace cocoascript {
  /**
   * A panel or sheet containing a list of identities that a user can choose from.
   * doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel
   */
  interface SFChooseIdentityPanel extends NSPanel {
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitypanel/1556984-sharedchooseidentitypanel
    sharedChooseIdentityPanel():cocoascript.SFChooseIdentityPanel;
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
declare namespace cocoascript {
  /**
   * Allows authorization plug-in developers to create a custom view their plug-in can display.
   * doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview
   */
  interface SFAuthorizationPluginView extends NSObject {
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524417-initwithcallbacks
    initWithCallbacks_andEngineRef(callbacks: cocoascript.AuthorizationCallbacks, engineRef: cocoascript.AuthorizationEngineRef):cocoascript.SFAuthorizationPluginView;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524415-callbacks
    callbacks():cocoascript.AuthorizationCallbacks;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524422-engineref
    engineRef():cocoascript.AuthorizationEngineRef;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524408-lasterror
    lastError():cocoascript.NSError;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524388-buttonpressed
    buttonPressed(inButtonType: cocoascript.SFButtonType):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524411-viewfortype
    viewForType(inType: cocoascript.SFViewType):cocoascript.NSView;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524390-didactivate
    didActivate():void;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524392-diddeactivate
    didDeactivate():void;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524410-willactivatewithuser
    willActivateWithUser(inUserInformation: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524412-firstkeyview
    firstKeyView():cocoascript.NSView;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524402-firstresponder
    firstResponder():cocoascript.NSResponder;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524413-lastkeyview
    lastKeyView():cocoascript.NSView;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524404-setenabled
    setEnabled(inEnabled: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1514136-displayview
    displayView():void;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1514134-setbutton
    setButton_enabled(inButtonType: cocoascript.SFButtonType, inEnabled: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1514132-updateview
    updateView():void;
    //
    alloc():cocoascript.SFAuthorizationPluginView;
    //
    init():cocoascript.SFAuthorizationPluginView;
  }
}

declare const SFAuthorizationPluginView: cocoascript.SFAuthorizationPluginView;
declare namespace cocoascript {
  /**
   * A panel or sheet that lets the user edit the trust settings in any of the certificates in a certificate chain.
   * doc://com.apple.documentation/documentation/securityinterface/sfcertificatetrustpanel
   */
  interface SFCertificateTrustPanel extends SFCertificatePanel {
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatetrustpanel/1518349-sharedcertificatetrustpanel
    sharedCertificateTrustPanel():cocoascript.SFCertificateTrustPanel;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatetrustpanel/1518350-beginsheetforwindow
    beginSheetForWindow_modalDelegate_didEndSelector_contextInfo_trust_message(docWindow: cocoascript.NSWindow, delegate: cocoascript.SFCertificateTrustPanel, didEndSelector: cocoascript.SEL, contextInfo: void, trust: cocoascript.SecTrustRef, message: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatetrustpanel/1518354-runmodalfortrust
    runModalForTrust_message(trust: cocoascript.SecTrustRef, message: cocoascript.NSString):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatetrustpanel/1518347-informativetext
    informativeText():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificatetrustpanel/1518351-setinformativetext
    setInformativeText(informativeText: cocoascript.NSString):void;
    //
    alloc():cocoascript.SFCertificateTrustPanel;
    //
    init():cocoascript.SFCertificateTrustPanel;
  }
}

declare const SFCertificateTrustPanel: cocoascript.SFCertificateTrustPanel;
declare namespace cocoascript {
  /**
   * A view that displays the contents of a certificate, with options to display certificate details, display trust settings, and allow users to edit a certificate’s trust settings.
   * doc://com.apple.documentation/documentation/securityinterface/sfcertificateview
   */
  interface SFCertificateView extends NSVisualEffectView {
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588429-setcertificate
    setCertificate(certificate: cocoascript.SecCertificateRef):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588428-setdetailsdisclosed
    setDetailsDisclosed(disclosed: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588420-setdisplaydetails
    setDisplayDetails(display: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588433-setdisplaytrust
    setDisplayTrust(display: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588427-seteditabletrust
    setEditableTrust(editable: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588423-setpolicies
    setPolicies(policies: cocoascript.SFCertificateView):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588434-setpoliciesdisclosed
    setPoliciesDisclosed(disclosed: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588426-certificate
    certificate():cocoascript.SecCertificateRef;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588422-detailsdisplayed
    detailsDisplayed():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588431-detailsdisclosed
    detailsDisclosed():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588425-istrustdisplayed
    isTrustDisplayed():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588421-iseditable
    isEditable():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588432-policies
    policies():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588418-policiesdisclosed
    policiesDisclosed():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityinterface/sfcertificateview/1588424-savetrustsettings
    saveTrustSettings():void;
    //
    alloc():cocoascript.SFCertificateView;
    //
    init():cocoascript.SFCertificateView;
  }
}

declare const SFCertificateView: cocoascript.SFCertificateView;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitytablecellview
   */
  interface SFChooseIdentityTableCellView extends NSTableCellView {
    // doc://com.apple.documentation/documentation/securityinterface/sfchooseidentitytablecellview/2880435-issuertextfield
    issuerTextField(): cocoascript.NSTextField;
    setIssuerTextField(): void;
    //
    alloc():cocoascript.SFChooseIdentityTableCellView;
    //
    init():cocoascript.SFChooseIdentityTableCellView;
  }
}

declare const SFChooseIdentityTableCellView: cocoascript.SFChooseIdentityTableCellView;
declare namespace cocoascript {
  /**
   * A panel or sheet that allows the user to create a keychain.
   * doc://com.apple.documentation/documentation/securityinterface/sfkeychainsavepanel
   */
  interface SFKeychainSavePanel extends NSSavePanel {
    // doc://com.apple.documentation/documentation/securityinterface/sfkeychainsavepanel/1580411-sharedkeychainsavepanel
    sharedKeychainSavePanel():cocoascript.SFKeychainSavePanel;
    // doc://com.apple.documentation/documentation/securityinterface/sfkeychainsavepanel/1580414-setpassword
    setPassword(password: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfkeychainsavepanel/1580416-beginsheetfordirectory
    beginSheetForDirectory_file_modalForWindow_modalDelegate_didEndSelector_contextInfo(path: cocoascript.NSString, name: cocoascript.NSString, docWindow: cocoascript.NSWindow, delegate: cocoascript.SFKeychainSavePanel, didEndSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfkeychainsavepanel/1580415-runmodalfordirectory
    runModalForDirectory_file(path: cocoascript.NSString, name: cocoascript.NSString):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/securityinterface/sfkeychainsavepanel/1580417-error
    error():cocoascript.NSError;
    // doc://com.apple.documentation/documentation/securityinterface/sfkeychainsavepanel/1580412-keychain
    keychain():cocoascript.SecKeychainRef;
    //
    alloc():cocoascript.SFKeychainSavePanel;
    //
    init():cocoascript.SFKeychainSavePanel;
  }
}

declare const SFKeychainSavePanel: cocoascript.SFKeychainSavePanel;
declare namespace cocoascript {
  /**
   * A panel or sheet that allows users to change their keychain settings.
   * doc://com.apple.documentation/documentation/securityinterface/sfkeychainsettingspanel
   */
  interface SFKeychainSettingsPanel extends NSPanel {
    // doc://com.apple.documentation/documentation/securityinterface/sfkeychainsettingspanel/1543503-sharedkeychainsettingspanel
    sharedKeychainSettingsPanel():cocoascript.SFKeychainSettingsPanel;
    // doc://com.apple.documentation/documentation/securityinterface/sfkeychainsettingspanel/1543505-beginsheetforwindow
    beginSheetForWindow_modalDelegate_didEndSelector_contextInfo_settings_keychain(docWindow: cocoascript.NSWindow, delegate: cocoascript.SFKeychainSettingsPanel, didEndSelector: cocoascript.SEL, contextInfo: void, settings: cocoascript.SecKeychainSettings, keychain: cocoascript.SecKeychainRef):void;
    // doc://com.apple.documentation/documentation/securityinterface/sfkeychainsettingspanel/1543500-runmodalforsettings
    runModalForSettings_keychain(settings: cocoascript.SecKeychainSettings, keychain: cocoascript.SecKeychainRef):cocoascript.NSInteger;
    //
    alloc():cocoascript.SFKeychainSettingsPanel;
    //
    init():cocoascript.SFKeychainSettingsPanel;
  }
}

declare const SFKeychainSettingsPanel: cocoascript.SFKeychainSettingsPanel;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationviewstate
  type SFAuthorizationViewState = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/securityinterface/sfbuttontype
  type SFButtonType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/securityinterface/sfviewtype
  type SFViewType = number;
}
