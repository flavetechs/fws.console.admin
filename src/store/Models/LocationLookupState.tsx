export interface ILocationLookupState {
    loading: boolean,
    message: string,
    isSuccessful: boolean,
    countryList: any[],
    stateList: any[],
    cityList: any[],
    selectedIds: any[],
    submittedSuccessfully: boolean,
}