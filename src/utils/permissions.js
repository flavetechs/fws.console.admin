export const getUserDetails = () => {
    var user = sessionStorage.getItem('user');
    if(user!== 'undefined')
        return JSON.parse(user);
    else{
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('permissions');
        sessionStorage.removeItem('userDetail');
    }
}