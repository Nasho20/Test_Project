import {
    AUTH_GET_PERMISSIONS,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_ERROR,
    AUTH_CHECK,
}  Form 'react-admin';

export default (type, params, props) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
    }
}