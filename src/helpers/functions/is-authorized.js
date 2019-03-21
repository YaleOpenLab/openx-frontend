import Storage from "../../services/Storage";

const isAuthorized = () => {
  return !Storage.get("token") ? false : true;
};

export default isAuthorized;
