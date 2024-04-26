import { describe, it, expect } from "bun:test";
import { User } from "../packages/user/user";

describe("User Package", () => {
    it("should acccessed from main package", () => {
        const user = new User("Fadjrir");
        expect(user.name).toBe("Fadjrir");
    });
});
