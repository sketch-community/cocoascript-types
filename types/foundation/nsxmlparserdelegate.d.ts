declare namespace cocoascript {
  /**
   * The interface an XML parser uses to inform its delegate about the content of the parsed document.
   * doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate
   */
  interface NSXMLParserDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1412065-parserdidstartdocument
    parserDidStartDocument(parser: cocoascript.NSXMLParser):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1418172-parserdidenddocument
    parserDidEndDocument(parser: cocoascript.NSXMLParser):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1415894-parser
    parser_didStartElement_namespaceURI_qualifiedName_attributes(parser: cocoascript.NSXMLParser, elementName: cocoascript.NSString, namespaceURI: cocoascript.NSString, qName: cocoascript.NSString, attributeDict: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1417955-parser
    parser_didEndElement_namespaceURI_qualifiedName(parser: cocoascript.NSXMLParser, elementName: cocoascript.NSString, namespaceURI: cocoascript.NSString, qName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1416738-parser
    parser_didStartMappingPrefix_toURI(parser: cocoascript.NSXMLParser, prefix: cocoascript.NSString, namespaceURI: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1412878-parser
    parser_didEndMappingPrefix(parser: cocoascript.NSXMLParser, prefix: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1416221-parser
    parser_resolveExternalEntityName_systemID(parser: cocoascript.NSXMLParser, name: cocoascript.NSString, systemID: cocoascript.NSString):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1412379-parser
    parser_parseErrorOccurred(parser: cocoascript.NSXMLParser, parseError: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1417838-parser
    parser_validationErrorOccurred(parser: cocoascript.NSXMLParser, validationError: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1412539-parser
    parser_foundCharacters(parser: cocoascript.NSXMLParser, string: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1416470-parser
    parser_foundIgnorableWhitespace(parser: cocoascript.NSXMLParser, whitespaceString: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1412929-parser
    parser_foundProcessingInstructionWithTarget_data(parser: cocoascript.NSXMLParser, target: cocoascript.NSString, data: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1417651-parser
    parser_foundComment(parser: cocoascript.NSXMLParser, comment: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1407687-parser
    parser_foundCDATA(parser: cocoascript.NSXMLParser, CDATABlock: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1416969-parser
    parser_foundAttributeDeclarationWithName_forElement_type_defaultValue(parser: cocoascript.NSXMLParser, attributeName: cocoascript.NSString, elementName: cocoascript.NSString, type: cocoascript.NSString, defaultValue: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1411043-parser
    parser_foundElementDeclarationWithName_model(parser: cocoascript.NSXMLParser, elementName: cocoascript.NSString, model: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1408156-parser
    parser_foundExternalEntityDeclarationWithName_publicID_systemID(parser: cocoascript.NSXMLParser, name: cocoascript.NSString, publicID: cocoascript.NSString, systemID: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1414803-parser
    parser_foundInternalEntityDeclarationWithName_value(parser: cocoascript.NSXMLParser, name: cocoascript.NSString, value: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1412907-parser
    parser_foundUnparsedEntityDeclarationWithName_publicID_systemID_notationName(parser: cocoascript.NSXMLParser, name: cocoascript.NSString, publicID: cocoascript.NSString, systemID: cocoascript.NSString, notationName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsxmlparserdelegate/1411925-parser
    parser_foundNotationDeclarationWithName_publicID_systemID(parser: cocoascript.NSXMLParser, name: cocoascript.NSString, publicID: cocoascript.NSString, systemID: cocoascript.NSString):void;
  }
}
