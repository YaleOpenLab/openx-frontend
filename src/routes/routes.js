const ROUTES = {
  HOME: "/",
  EXPLORE: "/explore",
  EXPLORE_PAGES: {
    PV_SOLAR: "/explore/pv-solar",
    STORAGE: "/explore/storage",
    WIND: "/explore/wind",
    SYSTEMS: "/explore/systems"
  },
  PROJECT_BASE: "/project/",
  PROJECT: "/project/:projectId",
  INVESTOR: "/investor",
  INVESTOR_PAGES: {
    DASHBOARD: "/investor/dashboard",
    PROFILE: "/investor/porofile",
    NOTIFICATIONS: "/investor/notifications",
    CONFIRMATION: "/investor/confirm",
  },
  RECEIVER: "/receiver",
  DEVELOPER: "/developer",
  PROFILE: "/profile",
  PROFILE_PAGES: {
    DASHBOARD: "/profile/dashboard",
    SETTINGS: "/profile/settings",
    SETTINGS_PAGES: {
      ACCOUNT: "/profile/settings/account",
      SECURITY: "/profile/settings/security",
      ENTITY_PROFILE: "/profile/settings/entity",
      USER_PROFILES: "/profile/settings/users",
      PREFERENCES: "/profile/settings/preferences",
      LEGAL: "/profile/settings/legal",
    }
  },
  ABOUT: "/about",
  LOGIN: "/login",
  SIGNUP: "/signup",
  LOGOUT: "/logout",
};

export default ROUTES;
