import { locationDetail } from "../../components/Models/Sms/SmserviceDetail";

export interface ISmserviceState {
    loading: boolean,
    smservice:locationDetail[],
    message: string,
    isSuccessful: boolean,
    countries:locationDetail[],
    states:locationDetail[],
    baseUrlSuffixValidation:boolean,
    validationSuccessful:boolean,
    exportPinsCode:string,
}