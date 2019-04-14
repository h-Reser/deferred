const Deferred = require("..").default;
const expect = require('chai').expect;

describe("Deferred", () => {
  it("should have a promise property which is a Promise", () => {
    const d = new Deferred();
    expect(d.promise instanceof Promise).to.be.true;
  });
  it("should have a resolve property which is a method", () => {
    const d = new Deferred();
    expect(d.resolve instanceof Function).to.be.true;
  });
  it("should have a reject property which is a method", () => {
    const d = new Deferred();
    expect(d.reject instanceof Function).to.be.true;
  });
});

describe("Deferred.resolve", () => {
  it("should works as Promise.resolve()", async () => {
    const d = new Deferred();
    d.resolve("Success");
    d.promise
      .then((res) => {
        expect(res).to.equal("Success");
      })
      .catch((err) => {
        expect(err).to.equal("should never occur");
      });
  });
});

describe("Deferred.reject", () => {
  it("should works as Promise.reject()", async () => {
    const d = new Deferred();
    d.reject("Fail");
    d.promise
      .then((res) => {
        expect(res).to.equal("should never occur");
      })
      .catch((err) => {
        expect(err).to.equal("Fail");
      });
  });
});

describe("Deferred.then", () => {
  it("should works as Promise.then()", async () => {
    const d = new Deferred();
    d.resolve("Success");
    d
      .then((res) => {
        expect(res).to.equal("Success");
      })
      .catch((err) => {
        expect(err).to.equal("should never occur");
      });
  });
});

describe("Deferred.catch", () => {
  it("should works as Promise.catch()", async () => {
    const d = new Deferred();
    d.reject("Fail");
    d
      .then((res) => {
        expect(res).to.equal("should never occur");
      })
      .catch((err) => {
        expect(err).to.equal("Fail");
      });
  });
});

describe("Deferred.finally", () => {

  it("should works as Promise.finally() when resolving", async () => {
    let flag = void 0;
    const promise = new Promise(resolve => {
      const d = new Deferred();
      d
        .finally(() => {
          flag = true;
          resolve(true);
        });
      d.resolve();
    });
    await promise;
    expect(flag).to.be.true;
  });

  it("should works as Promise.finally() when rejecting", async () => {
    let flag = void 0;
    const promise = new Promise(resolve => {
      const d = new Deferred();
      d
        .finally(() => {
          flag = true;
          resolve(true);
        });
      d.reject();
    });
    await promise;
    expect(flag).to.be.true;
  });

});