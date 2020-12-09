declare namespace cocoascript {
/**
 * A set of methods that defines a way to add animation to an existing class with a minimum of API impact. 
 * doc://com.apple.documentation/documentation/appkit/nsanimatablepropertycontainer
 */
interface NSAnimatablePropertyContainer {
  // doc://com.apple.documentation/documentation/appkit/nsanimatablepropertycontainer/1530511-animator
  animator():cocoascript.NSAnimatablePropertyContainer;
  // doc://com.apple.documentation/documentation/appkit/nsanimatablepropertycontainer/1534096-animations
  animations(): cocoascript.id;
  setAnimations(): void;
  // doc://com.apple.documentation/documentation/appkit/nsanimatablepropertycontainer/1526209-animationforkey
  animationForKey(key: cocoascript.NSAnimatablePropertyKey):cocoascript.NSAnimatablePropertyContainer;
}
}

