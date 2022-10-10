export const getUserDetails = () => {
    var userDetail = sessionStorage.getItem('userDetail');
    if(userDetail !== 'undefined')
        return JSON.parse(userDetail);
    else{
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('permissions');
        sessionStorage.removeItem('userDetail');
    }
}