declare namespace cocoascript {
/**
 * An interface that enables the delegate of a metadata query to provide substitute results or attributes.
 * doc://com.apple.documentation/documentation/foundation/nsmetadataquerydelegate
 */
interface NSMetadataQueryDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquerydelegate/1407317-metadataquery
  metadataQuery_replacementObjectForResultObject(query: cocoascript.NSMetadataQuery, result: cocoascript.NSMetadataItem):cocoascript.NSMetadataQueryDelegate;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquerydelegate/1414215-metadataquery
  metadataQuery_replacementValueForAttribute_value(query: cocoascript.NSMetadataQuery, attrName: cocoascript.NSString, attrValue: cocoascript.NSMetadataQueryDelegate):cocoascript.NSMetadataQueryDelegate;
}
}

