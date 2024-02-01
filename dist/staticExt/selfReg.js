"use strict";
/**
 * Returns a class with methods to keep instance reference on the class constructor.
 * Your instance will inherit the destroy method that will retrive the reference from the instance array so
 * it would be deleted by the garbage collector as you make sure that there is no other refence.

 * The returned class:
 * @example
 * class SelfReg<T> {
    static instanceList: T[] = [];
    static createCount: number = 0;

    readonly id = 0;

    constructor() {
        (this as any).id = this.constructor.createCount++;
    }

    destroy(): void {
        this.constructor.instanceList.splice(this.constructor.instanceList.indexOf(this), 1);
    }

}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfReg = void 0;
function SelfReg() {
    var _a;
    return _a = class SelfReg {
            constructor() {
                this.id = 0;
                this.id = this.constructor.createCount++;
                this.constructor.instanceList.push(this);
            }
            /**
             * Retrive the reference of this instance from static class array instanceList.
             */
            destroy() {
                this.constructor.instanceList.splice(this.constructor.instanceList.indexOf(this), 1);
            }
        },
        _a.instanceList = [],
        _a.createCount = 0,
        _a;
}
exports.SelfReg = SelfReg;
