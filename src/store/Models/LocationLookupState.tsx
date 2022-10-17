import { CityDetail } from "../../components/fws-admin/Models/locationLookupModel/CityModel/CityState";
import { CountryDetail } from "../../components/fws-admin/Models/locationLookupModel/CountryModel/ListCountryState";
import { StateDetail } from "../../components/fws-admin/Models/locationLookupModel/StateModel/StateModel";

export interface ILocationLookupState {
    loading: boolean,
    message: string,
    isSuccessful: boolean,
    countryList: CountryDetail[],
    stateList: StateDetail[],
    cityList: CityDetail[],
    selectedIds: any[],
    submittedSuccessfully: boolean,
}