import { describe, it, expect } from "bun:test";
import { sayHello } from "../src/hello";

describe("Bun Test Runner", () => {
    it("should say hello", () => {
        expect(sayHello("World")).toBe("Hello World!");
    });

    it("should say hello", () => {
        expect(sayHello("Fadjrir")).toBe("Hello Fadjrir!");
    });

    it("should say hello", () => {
        expect(sayHello("World")).toBe("Hello World!");
    });
});
