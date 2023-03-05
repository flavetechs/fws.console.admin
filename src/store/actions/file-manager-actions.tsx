import axiosInstance from "../../axios/axiosInstance";
import { actions } from "../action-types/file-manager-action-types";
import { errorModal, successModal } from "./alert-actions";

export const getAllFolders = (PageNumber:number,PageSize:number) => (dispatch: any) => {
    dispatch({
        type: actions.FILE_MANAGER_LOADING,
    });   
    axiosInstance.get(`/fws/filemanager/api/v1/get-all-folders?PageNumber=${PageNumber}&PageSize=${PageSize}`)
        .then((res) => {
            dispatch({
                type: actions.FETCH_FOLDERS_SUCCESS,
                payload: res.data.result,
            });
        })
        .catch((err :any) => {
            dispatch({
                type: actions.FILE_MANAGER_FAILED,
                payload: err?.response.data.result,
            });
        });
};

export const getAllFiles = (folderId:any,PageNumber:number,PageSize:number) => (dispatch: any) => {
    dispatch({
        type: actions.FILE_MANAGER_LOADING,
    });   
    axiosInstance.get(`fws/filemanager/api/v1/get-all-files/${folderId}?PageNumber=${PageNumber}&PageSize=${PageSize}`)
        .then((res) => {
            dispatch({
                type: actions.FETCH_FILE_BY_FOLDERID_SUCCESS,
                payload: res.data.result,
            });
        })
        .catch((err :any) => {
            dispatch({
                type: actions.FILE_MANAGER_FAILED,
                payload: err?.response.data.result,
            });
        });
};

export const downloadFile = (fileId:any,) => (dispatch: any) => {
    dispatch({
        type: actions.FILE_MANAGER_LOADING,
    });   
    axiosInstance.get(`fws/filemanager/api/v1/download-file?fileId=${fileId}`)
        .then((res) => {
            dispatch({
                type: actions.DOWNLOAD_FILE_SUCCESS,
                payload: res.data.result,
            });
        })
        .catch((err :any) => {
            dispatch({
                type: actions.FILE_MANAGER_FAILED,
                payload: err?.response.data.result,
            });
        });
};


export const createFolder = (filename: any) => (dispatch: any) => {
    dispatch({
        type: actions.FILE_MANAGER_LOADING
    });
                
    axiosInstance.post('/fws/filemanager/api/v1/create/folder',  filename)
        .then((res) => {
            dispatch({
                type: actions.CREATE_FOLDER_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            successModal(res.data.message.friendlyMessage)
            getAllFolders(1,10)(dispatch);
        }).catch((err :any) => {
            dispatch({
                type: actions.FILE_MANAGER_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
           errorModal(err?.response.data.message.friendlyMessage)
        });
}

    export const updateFolder = (fileProperties:any) => (dispatch: any) => {
    dispatch({
        type: actions.FILE_MANAGER_LOADING
    });
                
    axiosInstance.post('/fws/filemanager/api/v1/update/folder',  fileProperties)
        .then((res) => {
            dispatch({
                type: actions.UPDATE_FOLDER_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            successModal(res.data.message.friendlyMessage)
            getAllFolders(1,10)(dispatch);
        }).catch((err :any) => {
            dispatch({
                type: actions.FILE_MANAGER_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
           errorModal(err?.response.data.message.friendlyMessage)
        });
}

export const deleteFolder = (fileId:any,folderId:any) => (dispatch: any) => {
    dispatch({
        type: actions.FILE_MANAGER_LOADING
    });
                
    axiosInstance.post(`/fws/filemanager/api/v1/delete/folder?fileId=${fileId}`, )
        .then((res) => {
            dispatch({
                type: actions.DELETE_FOLDER_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            successModal(res.data.message.friendlyMessage)
          folderId ?
            getAllFiles(folderId,1,10)(dispatch)
            : getAllFolders(1,10)(dispatch)
        }).catch((err :any) => {
            dispatch({
                type: actions.FILE_MANAGER_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
           errorModal(err?.response.data.message.friendlyMessage)
        });
}

export const createFile  = (folderId:any, fileData: any) => (dispatch: any) => {
    dispatch({
        type: actions.FILE_MANAGER_LOADING
    });
                
    axiosInstance.post('/fws/filemanager/api/v1/create/file',  fileData)
        .then((res) => {
            dispatch({
                type: actions.CREATE_FILE_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            successModal(res.data.message.friendlyMessage)
            getAllFiles(folderId,1,10)(dispatch);
        }).catch((err :any) => {
            dispatch({
                type: actions.FILE_MANAGER_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
           errorModal(err?.response.data.message.friendlyMessage)
        });
}

    export const updateFile = (folderId:any,fileData:any) => (dispatch: any) => {
    dispatch({
        type: actions.FILE_MANAGER_LOADING
    });
                
    axiosInstance.post('/fws/filemanager/api/v1/update/file',  fileData)
        .then((res) => {
            dispatch({
                type: actions.UPDATE_FOLDER_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            successModal(res.data.message.friendlyMessage)
            getAllFiles(folderId,1,10)(dispatch);
        }).catch((err :any) => {
            dispatch({
                type: actions.FILE_MANAGER_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
           errorModal(err?.response.data.message.friendlyMessage)
        });
}

export const deleteFile = (folderId:any,fileIds:any) => (dispatch: any) => {
    dispatch({
        type: actions.FILE_MANAGER_LOADING
    });
                
    axiosInstance.post(`/fws/filemanager/api/v1/delete/files`,{fileIds} )
        .then((res) => {
            dispatch({
                type: actions.DELETE_FILE_SUCCESS,
                payload: res.data.message.friendlyMessage
            });
            successModal(res.data.message.friendlyMessage)
            getAllFiles(folderId,1,10)(dispatch);
        }).catch((err :any) => {
            dispatch({
                type: actions.FILE_MANAGER_FAILED,
                payload: err.response.data.message.friendlyMessage
            });
           errorModal(err?.response.data.message.friendlyMessage)
        });
}

