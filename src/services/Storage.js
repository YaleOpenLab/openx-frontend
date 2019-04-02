class storageClass {
  storage = localStorage;

  get session() {
    return this.get("session");
  }

  set session(value) {
    return this.set("session", value);
  }

  constructor () {
    if (!storageClass.instance) {
      storageClass.instance = this
    }

    return storageClass.instance
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
Object.freeze(Storage);

export default Storage;
