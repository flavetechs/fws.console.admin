import axiosInstance from "../../axios/axiosInstance";
import { actions } from "../action-types/auth-action-types"

export const loginUser = ({ userName, password }) => (dispatch) => {

    dispatch({
        type: actions.LOGIN_USER_LOADING
    });

    const payload = {
        userName,
        password
    }


    const res ={
          "authResult": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtb25qb3NAZ21haWwuY29tIiwianRpIjoiOGQyMzM5ZDYtYTFiYy00ZDA0LTgyNzctZWJjODllMzE3MDZlIiwiZW1haWwiOiJtb25qb3NAZ21haWwuY29tIiwidXNlcklkIjoiZmExYzc0YjctOWQ5NS00ODZhLWI0YWEtNzExNzJkMzQ3YjBjIiwidXNlclR5cGUiOiIxIiwidXNlck5hbWUiOiJtb25qb3NAZ21haWwuY29tIiwibmFtZSI6Ik1vbmRheU1vIEpvc2h1YUpvaG4iLCJwZXJtaXNzaW9ucyI6ImFkZC1zZXNzaW9uLXNldHVwLGFkZC11c2VyLGFubm91bmNlbWVudC1saXN0LGNoYW5nZS1zZXNzaW9uLWluLXVuZW5yb2xsZWQsY2xhc3MtYXR0ZW5kYW5jZSxjbGFzcy1zZXR1cCxjcmVhdGUtYW5ub3VuY2VtZW50LGNyZWF0ZS1jbGFzcy1zZXR1cCxjcmVhdGUtc2Vzc2lvbi1jbGFzcyxjcmVhdGUtc3RhZmYsY3JlYXRlLXN0dWRlbnQsY3JlYXRlLXN1YmplY3Qtc2V0dXAsY3VtbXVsYXRpdmUtbWFzdGVyLWxpc3QsZGVsZXRlLWFubm91bmNlbWVudCxkZWxldGUtY2xhc3MtcmVnaXN0ZXIsZGVsZXRlLWNsYXNzLXNldHVwLGRlbGV0ZS1zZXNzaW9uLGRlbGV0ZS1zZXNzaW9uLWNsYXNzLGRlbGV0ZS1zdGFmZixkZWxldGUtc3R1ZGVudCxkZWxldGUtc3ViamVjdC1zZXR1cCxlZGl0LWFubm91bmNlbWVudCxlZGl0LWNsYXNzLXNldHVwLGVkaXQtcm9sZSxlZGl0LXNlc3Npb24tY2xhc3MsZWRpdC1zdGFmZixlZGl0LXN0dWRlbnQsZWRpdC1zdWJqZWN0LXNldHVwLGVucm9sbGVkLXN0dWRlbnRzLWxpc3QsZW5yb2xsLXN0dWRlbnRzLGV4cG9ydC1jdW1tdWxhdGl2ZS1tYXN0ZXIsZXhwb3J0LW1hc3Rlci1saXN0LGdyYWRlLXNldHRpbmcsbWFzdGVyLWxpc3QsbmV3LXJvbGUscG9ydGFsLXNldHRpbmcscHJldmlvdXMtdGVybXMtc2NvcmVzLHByaW50LXJlc3VsdCxwcm9tb3RlLXN0dWRlbnRzLHByb21vdGlvbi1saXN0LHB1Ymxpc2gtcmVzdWx0LHJvbGUtbGlzdCxzY29yZS1lbnRyeSxzZXNzaW9uLWNsYXNzLHNlc3Npb24tc2Vzc2lvbi1jbGFzcyxzZXNzaW9uLXNldHVwLHN0YWZmLWxpc3Qsc3R1ZGVudC1saXN0LHN1YmplY3Qtc2V0dXAsc3dpdGNoLXRlcm1zLHRlbXBsYXRlLXNldHRpbmcsdG90YWwtY2xhc3Nlcyx0b3RhbC1lbnJvbGxlZC1zdHVkZW50LHRvdGFsLXBpbnMsdG90YWwtc3RhZmYsdG90YWwtc3ViamVjdHMsdW5lbnJvbGxlZC1zdHVkZW50cy1saXN0LHVuZW5yb2xsLXN0dWRlbnRzLHVudXNlZC1waW5zLHVwbG9hZC1waW5zLHVzZWQtcGlucyx2aWV3LXJlc3VsdHMtdG8tcHVibGlzaCIsInRlYWNoZXJJZCI6ImI5YTliODgyLWRhMTUtNGY5My1hN2I2LTA4ZGEzZmUwOWVkOCIsInJvbGUiOlsic3VwZXJ2aXNvciIsIkludmlnaWxhdG9yX0RFTEVURUQiLCJFWEFNSU5FUlNfREVMRVRFRCIsIkV4YW1pbmVyIiwiU0NIT09MX0FETUlOIiwiU3BlY2lhbCBUZWFjaGVyIiwiVEVBQ0hFUiIsIlNUVURFTlQiXSwibmJmIjoxNjY1MDgwMjUyLCJleHAiOjE2NjUwODc0NTIsImlhdCI6MTY2NTA4MDI1Mn0.QmSEHOGPEZw4ZhTlACkXuDjHPUNH_iPgntyH4KawFu0",
            "refreshToken": "8d2339d6-a1bc-4d04-8277-ebc89e31706e"
          },
          "userDetail": {
            "userName": "MondayMo JoshuaJohn",
            "userType": "Teacher",
            "schoolName": "BOLUTECH",
            "schoolAbbreviation": "ABBCTV",
            "schoolLogo": "http://flavetech-001-site1.etempurl.com/SchoolLogo/549be867-89e2-4bda-8cef-a37b248c8ad0.jpg",
            "id": "b9a9b882-da15-4f93-a7b6-08da3fe09ed8",
            "userAccountId": "fa1c74b7-9d95-486a-b4aa-71172d347b0c",
            "isFirstTimeLogin": false
          }
        }
    
    dispatch({
                    type: actions.LOGIN_USER_SUCCESS,
                    payload: res
              });
    // axiosInstance.post('fws/user/api/v1/login', payload)
    //     .then((res) => {
    //         dispatch({
    //             type: actions.LOGIN_USER_SUCCESS,
    //             payload: res.data.result
    //         });
            
        // }).catch(err => {
        //     dispatch({
        //         type: actions.LOGIN_USER_FAILED,
        //         payload: err.response.data.message.friendlyMessage
        //     })
        // })
}

export const loginOutUser = () => {
    return {
        type: actions.LOG_OUT_USER
    }
}




export const generatePasswordResetLink = ({ resetOption, resetOptionValue, userType }) => (dispatch) => {

    dispatch({
        type: actions.GENERATE_PASSWORD_RESET_LINK_LOADING
    });

    const payload = {
        resetOption,
        resetOptionValue,
        userType
    }

    axiosInstance.post('/user/api/v1/generate/reset-link', payload)
        .then((res) => {
            dispatch({
                type: actions.GENERATE_PASSWORD_RESET_LINK_SUCCESS,
                payload: res.data.result
            });
        }).catch(err => {
            dispatch({
                type: actions.GENERATE_PASSWORD_RESET_LINK_FAILED,
                payload: err.response.data.result
            })
        })
}

export const ResetPassword = ({ userId, password, resetToken }) => (dispatch) => {

    dispatch({
        type: actions.RESET_PASSWORD_LOADING
    });

    const payload = {
        userId,
        password,
        resetToken
    }

    axiosInstance.post('/user/api/v1/reset/password', payload)
        .then((res) => {
            dispatch({
                type: actions.RESET_PASSWORD_LOADING,
                payload: res.data.result
            });
        }).catch(err => {
            dispatch({
                type: actions.RESET_PASSWORD_FAILED,
                payload: err.response.data.result
            })
        })
}

export const changeMyPassword = ({ userId, oldPassword, newPassword }) => (dispatch) => {
    dispatch({
        type: actions.LOGIN_USER_LOADING
    });

    const payload = {
        userId,
        oldPassword,
        newPassword
    }

    axiosInstance.post('user/api/v1/first-time/change-password', payload)
        .then((res) => {
            dispatch({
                type: actions.LOGIN_USER_SUCCESS,
                payload: res.data.result
            });
        }).catch(err => {
            dispatch({
                type: actions.LOGIN_USER_FAILED,
                payload: err.response.data.message.friendlyMessage
            })
        })
}
