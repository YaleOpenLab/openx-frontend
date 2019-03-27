const caseToName = name => {
  const rexp = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
  return name.replace(rexp, "$1$4 $2$3$5");
};

export default caseToName;
