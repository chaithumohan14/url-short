interface Entry {
  [propname: string]: string;
}

class Database {
  private data: Entry = {
    a: "https://google.com",
    b: "https://facebook.com",
    c: "https://ibm.com",
  };

  getValue(key: string): string | null {
    if (Object.keys(this.data).includes(key)) {
      return this.data[key];
    } else {
      return null;
    }
  }

  setValue(key: string, value: string) {
    this.data[key] = value;
  }
}

export default Database;
