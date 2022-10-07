export const getUserDetails = () => {
    var userDetail = localStorage.getItem('userDetail');
    if(userDetail !== 'undefined')
        return JSON.parse(userDetail);
    else{
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        localStorage.removeItem('userDetail');
    }
}