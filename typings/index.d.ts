declare class Deferred {
    isRejected: boolean;
    isResolved: boolean;
    promise: Promise<unknown>;
    private _resolve;
    private _reject;
    constructor();
    reject(value?: unknown): void;
    resolve(value?: unknown): void;
    then(cb: (value: unknown) => unknown): Deferred;
    catch(cb: (value: unknown) => unknown): Deferred;
    finally(cb: () => unknown): Deferred;
}
export default Deferred;
//# sourceMappingURL=index.d.ts.map