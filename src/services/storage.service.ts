const prefix = "tumi";

class StorageService {
  private localStorage: any;
  private sessionStorage: any;
  constructor() {
    this.localStorage = window.localStorage;
    this.sessionStorage = window.sessionStorage;
  }

  // localStorage
  set(key: string, value: string) {
    this.localStorage.setItem(this.generateKey(key), value);
  }

  get(key: string) {
    return this.localStorage.getItem(this.generateKey(key));
  }

  remove(key: string) {
    this.localStorage.removeItem(this.generateKey(key));
  }

  setObject(key: string, value: string) {
    this.localStorage.setItem(this.generateKey(key), JSON.stringify(value));
  }

  getObject(key: string) {
    return JSON.parse(this.localStorage.getItem(this.generateKey(key)));
  }

  // sessionStorage
  setSession(key: string, value: string) {
    this.sessionStorage.setItem(this.generateKey(key), value);
  }

  getSession(key: string) {
    return this.sessionStorage.getItem(this.generateKey(key));
  }

  setSessionObject(key: string, value: string) {
    this.sessionStorage.setItem(this.generateKey(key), JSON.stringify(value));
  }

  getSessionObject(key: string) {
    return JSON.parse(this.sessionStorage.getItem(this.generateKey(key)));
  }

  generateKey(key: string) {
    return `${key}`;
  }
}

export default new StorageService();
