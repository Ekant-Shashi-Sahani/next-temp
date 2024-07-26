import { baseFunc, nextFetch } from "./server-base";

class API {
  url = "";
  api = baseFunc("");
  next = nextFetch("");
  constructor(url: string) {
    this.url = url;
    this.api = baseFunc(url);
    this.next = nextFetch(url);
  }
}
class API2 {
  url = "";
  api = baseFunc("");
  next = nextFetch("");
  constructor(url: string) {
    this.url = url;
    this.api = baseFunc(url);
    this.next = nextFetch(url);
  }
}


export const Category = new API("categories");
export const Contact=new API2('contacts')
