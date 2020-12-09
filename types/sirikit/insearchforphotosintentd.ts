declare namespace cocoascript {
/**
 * A request for the list of photos that match the specified criteria.
 * doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent
 */
interface INSearchForPhotosIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1638173-initwithdatecreated
  initWithDateCreated_locationCreated_albumName_searchTerms_includedAttributes_excludedAttributes_peopleInPhoto(dateCreated: cocoascript.INDateComponentsRange, locationCreated: cocoascript.CLPlacemark, albumName: cocoascript.NSString, searchTerms: cocoascript.NSString, includedAttributes: cocoascript.INPhotoAttributeOptions, excludedAttributes: cocoascript.INPhotoAttributeOptions, peopleInPhoto: cocoascript.INPerson):cocoascript.INSearchForPhotosIntent;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1639439-peopleinphoto
  peopleInPhoto(): cocoascript.INPerson;
  setPeopleInPhoto(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1638821-peopleinphotooperator
  peopleInPhotoOperator(): cocoascript.INConditionalOperator;
  setPeopleInPhotoOperator(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1638728-searchterms
  searchTerms(): cocoascript.NSString;
  setSearchTerms(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1639233-searchtermsoperator
  searchTermsOperator(): cocoascript.INConditionalOperator;
  setSearchTermsOperator(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1639043-datecreated
  dateCreated(): cocoascript.INDateComponentsRange;
  setDateCreated(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1638736-locationcreated
  locationCreated(): cocoascript.CLPlacemark;
  setLocationCreated(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1638234-albumname
  albumName(): cocoascript.NSString;
  setAlbumName(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1638191-includedattributes
  includedAttributes(): cocoascript.INPhotoAttributeOptions;
  setIncludedAttributes(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1638212-excludedattributes
  excludedAttributes(): cocoascript.INPhotoAttributeOptions;
  setExcludedAttributes(): void;
  // 
  alloc():cocoascript.INSearchForPhotosIntent;
  // 
  init():cocoascript.INSearchForPhotosIntent;
}
}
declare const INSearchForPhotosIntent: cocoascript.INSearchForPhotosIntent;

