declare class Deferred {
    isRejected: boolean;
    isResolved: boolean;
    promise: Promise<unknown>;
    private _resolve;
    private _reject;
    constructor();
    reject(value?: unknown): void;
    resolve(value?: unknown): void;
    then(cb: (value: any) => any): Deferred;
    catch(cb: (value: any) => any): Deferred;
    finally(cb: () => any): Deferred;
}
export default Deferred;
//# sourceMappingURL=index.d.ts.map