declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikfiltercustomuiprovider
   */
  interface IKFilterCustomUIProvider {
    // doc://com.apple.documentation/documentation/quartz/ikfiltercustomuiprovider/1427525-provideviewforuiconfiguration
    provideViewForUIConfiguration_excludedKeys(inUIConfiguration: cocoascript.NSDictionary, inKeys: cocoascript.NSArray):cocoascript.IKFilterUIView;
  }
}
