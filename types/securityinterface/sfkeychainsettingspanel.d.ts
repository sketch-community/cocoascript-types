declare namespace cocoascript {
  /**
   * A panel or sheet that allows users to change their keychain settings.
   * doc://com.apple.documentation/documentation/securityinterface/sfkeychainsettingspanel
   */
  interface SFKeychainSettingsPanel extends NSPanel {
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
