declare class Deferred {
    promise: Promise<any>;
    resolve: Function;
    reject: Function;
    constructor();
    then(cb: (value: any) => any): Deferred;
    catch(cb: (value: any) => any): Deferred;
}
export default Deferred;
//# sourceMappingURL=index.d.ts.map