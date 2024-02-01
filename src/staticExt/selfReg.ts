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

export default function SelfReg<T>() {
    return class SelfReg {
        static instanceList: T[] = [];
        static createCount: number = 0;

        readonly id = 0;

        constructor() {
            (this as any).id = (this.constructor as any).createCount++;

            (this.constructor as any).instanceList.push(this);
        }

        /**
         * Retrive the reference of this instance from static class array instanceList.
         */
        destroy(): void {
            (this.constructor as any).instanceList.splice((this.constructor as any).instanceList.indexOf(this), 1);
        }

    }
}
