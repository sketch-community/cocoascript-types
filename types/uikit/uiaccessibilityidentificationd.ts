declare namespace cocoascript {
/**
 * Methods that associate a unique identifier with elements in your user interface. 
 * doc://com.apple.documentation/documentation/uikit/uiaccessibilityidentification
 */
interface UIAccessibilityIdentification extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilityidentification/1623132-accessibilityidentifier
  accessibilityIdentifier(): cocoascript.NSString;
  setAccessibilityIdentifier(): void;
}
}

