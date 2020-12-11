declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinkpolicysettingsinfo
   */
  interface BluetoothHCILinkPolicySettingsInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinkpolicysettingsinfo/1433945-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinkpolicysettingsinfo/1431770-settings
    settings(): cocoascript.BluetoothHCILinkPolicySettings;
    setSettings(): void;
  }
}
