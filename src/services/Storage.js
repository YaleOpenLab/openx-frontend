class storageClass {
  storage = sessionStorage;

  get session() {
    // must contain password & pwhash
    return this.get("session");
  }

  set session(value) {
    return this.set("session", value);
  }

  get(key) {
    return JSON.parse(this.storage.getItem(key));
  }

  set(key, value) {
    return this.storage.setItem(key, JSON.stringify(value));
  }

  clear() {
    return this.storage.clear();
  }
}
const Storage = new storageClass();

export default Storage;
