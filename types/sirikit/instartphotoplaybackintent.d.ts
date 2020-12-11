declare namespace cocoascript {
  /**
   * A request to search for photos and initiate a slideshow with the results.
   * doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent
   */
  interface INStartPhotoPlaybackIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1638354-initwithdatecreated
    initWithDateCreated_locationCreated_albumName_searchTerms_includedAttributes_excludedAttributes_peopleInPhoto(dateCreated: cocoascript.INDateComponentsRange, locationCreated: cocoascript.CLPlacemark, albumName: cocoascript.NSString, searchTerms: cocoascript.NSString, includedAttributes: cocoascript.INPhotoAttributeOptions, excludedAttributes: cocoascript.INPhotoAttributeOptions, peopleInPhoto: cocoascript.INPerson):cocoascript.INStartPhotoPlaybackIntent;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1638564-peopleinphoto
    peopleInPhoto(): cocoascript.INPerson;
    setPeopleInPhoto(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1638623-peopleinphotooperator
    peopleInPhotoOperator(): cocoascript.INConditionalOperator;
    setPeopleInPhotoOperator(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1639186-searchterms
    searchTerms(): cocoascript.NSString;
    setSearchTerms(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1639393-searchtermsoperator
    searchTermsOperator(): cocoascript.INConditionalOperator;
    setSearchTermsOperator(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1638645-datecreated
    dateCreated(): cocoascript.INDateComponentsRange;
    setDateCreated(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1638879-locationcreated
    locationCreated(): cocoascript.CLPlacemark;
    setLocationCreated(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1639239-albumname
    albumName(): cocoascript.NSString;
    setAlbumName(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1638591-includedattributes
    includedAttributes(): cocoascript.INPhotoAttributeOptions;
    setIncludedAttributes(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1638754-excludedattributes
    excludedAttributes(): cocoascript.INPhotoAttributeOptions;
    setExcludedAttributes(): void;
    //
    alloc():cocoascript.INStartPhotoPlaybackIntent;
    //
    init():cocoascript.INStartPhotoPlaybackIntent;
  }
}

declare const INStartPhotoPlaybackIntent: cocoascript.INStartPhotoPlaybackIntent;
