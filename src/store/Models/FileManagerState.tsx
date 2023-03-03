import { FileManagerDetail } from "../../components/Models/file-manager/FileManagerDetail";


export interface IFileManagerState {
    loading: boolean,
    message: string,
    isSuccessful: boolean,
    files:  FileManagerDetail[],
    folders: FileManagerDetail[],
    filterProps:any,
    downloadedFile:any,
}