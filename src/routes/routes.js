const ROUTES = {
  HOME: "/",
  EXPLORE: "/explore",
  EXPLORE_PAGES: {
    PV_SOLAR: "/explore/pv-solar",
    STORAGE: "/explore/storage",
    WIND: "/explore/wind",
    MICROGRIDS: "/explore/microgrids",
    MAPS: "/explore/maps"
  },
  PROJECT_BASE: "/project/",
  PROJECT: "/project/:projectId",
  INVESTOR: "/investor",
  INVESTOR_PAGES: {
    DASHBOARD: "/investor/dashboard",
    PROFILE: "/investor/profile",
    NOTIFICATIONS: "/investor/notifications",
    CONFIRMATION: "/investor/:id/confirm"
  },
  RECEIVER: "/receiver",
  RECEIVER_PAGES: {
    DASHBOARD: "/receiver/dashboard",
    NOTIFICATIONS: "/receiver/notifications",
    ORIGINATE: "/receiver/originate"
  },
  DEVELOPER: "/developer",
  DEVELOPER_PAGES: {
    DASHBOARD: "/developer/dashboard"
  },
  PROFILE: "/profile",
  PROFILE_PAGES: {
    DASHBOARD: "/profile/dashboard",
    SETTINGS: "/profile/settings",
    SETTINGS_PAGES: {
      ACCOUNT: "/profile/settings/account",
      SECURITY: "/profile/settings/security",
      ENTITY_PROFILE: "/profile/settings/entity",
      ENTITY_PROFILE_PAGES: {
        NEW_ENTITY: "/profile/settings/entity/register"
      },
      USER_PROFILES: "/profile/settings/users",
      USER_PROFILES_PAGES: {
        NEW_PROFILE: "/profile/settings/users/register/:userType",
        VERIFY: "/profile/settings/users/verify/:username/:userType"
      },
      FUNDS: "/profile/settings/funds",
      FUNDS_PAGES: {
        LOAD_FUNDS: "/profile/settings/funds/load/:username",
        WITHDRAW_FUNDS: "/profile/settings/funds/withdraw/:username"
      },
      LEGAL: "/profile/settings/legal"
    }
  },
  ABOUT: "/about",
  DEVELOPMENT: "/development",
  LOGIN: "/login",
  SIGNUP: "/signup",
  LOGOUT: "/logout"
};

export default ROUTES;
