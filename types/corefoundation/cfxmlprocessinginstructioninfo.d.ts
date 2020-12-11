declare namespace cocoascript {
  /**
   * Contains the text of the processing instruction.
   * doc://com.apple.documentation/documentation/corefoundation/cfxmlprocessinginstructioninfo
   */
  interface CFXMLProcessingInstructionInfo {
    // doc://com.apple.documentation/documentation/corefoundation/cfxmlprocessinginstructioninfo/1443318-datastring
    dataString(): cocoascript.CFStringRef;
    setDataString(): void;
  }
}
