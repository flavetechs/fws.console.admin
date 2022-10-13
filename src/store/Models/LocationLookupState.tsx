export interface ILocationLookupState {
    loading: boolean,
    message: string,
    isSuccessful: false,
    countryList: Array<[]>,
    stateList: Array<[]>,
    cityList: Array<[]>,
    selectedIds: Array<[]>,
    submittedSuccessfully: boolean,
}