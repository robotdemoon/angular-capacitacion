export const ROUTES_PATHS = {
  AUTH: {
    DEFAULT: 'auth',
    LOGIN: 'login',
    REGISTER: 'register'
  }
}

export const INTERNAL_PATHS = {
  AUTH_DEFAULT: `${ROUTES_PATHS.AUTH.DEFAULT}`,
  AUTH_LOGIN: `${ROUTES_PATHS.AUTH.LOGIN}`,
  AUTH_REGISTER: `${ROUTES_PATHS.AUTH.REGISTER}`,
}


export const INTERNAL_ROUTES = {
  AUTH_LOGIN: `/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.AUTH_LOGIN}`,
  AUTH_REGISTER: `/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.AUTH_REGISTER}`,
}
