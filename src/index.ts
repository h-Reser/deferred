class Deferred {

  public promise: Promise<any>;
  public resolve: Function = () => { };
  public reject: Function = () => { };

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

  public then(cb: (value: any) => any): Deferred {
    this.promise
      .then((res) => {
        cb(res);
      })
      .catch(() => { });
    return this;
  }

  public catch(cb: (value: any) => any): Deferred {
    this.promise
      .then(() => { })
      .catch((err) => {
        cb(err);
      });
    return this;
  }

}

export default Deferred;