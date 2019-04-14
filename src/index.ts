class Deferred {

  public isRejected: boolean = false;
  public isResolved: boolean = false;
  public promise: Promise<unknown>;
  private _resolve: Function = () => { };
  private _reject: Function = () => { };

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }

  public reject(value?: unknown) {
    this.isRejected = true;
    this._reject(value);
  }

  public resolve(value?: unknown) {
    this.isResolved = true;
    this._resolve(value);
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
      .catch((err) => {
        cb(err);
      });
    return this;
  }

  public finally(cb: () => any): Deferred {
    this.promise
      .then(cb)
      .catch(cb);
    return this;
  }

}

export default Deferred;