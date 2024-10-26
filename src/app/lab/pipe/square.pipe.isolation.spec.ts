import { SquarePipeForLab } from "./square.pipe";

describe("1-square pipe (class only) testing:", () => {

    let squarePipe: SquarePipeForLab;

    beforeEach(() => {
        squarePipe = new SquarePipeForLab();
    });

    it("expect to return 16 when passing 4", () => {
        const result: number = squarePipe.transform(4);
        expect(result).toBe(16);
    });

    it("expect to return 'Not a number' when passing wrong parameter", () => {
        const result: string = squarePipe.transform(null as any);
        expect(result).toBe("Not a number");
    });

});
