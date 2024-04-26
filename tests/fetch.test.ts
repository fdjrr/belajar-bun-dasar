import { describe, it, expect } from "bun:test";

describe("Web API", () => {
    it("should acccessed from main package", async () => {
        const response = await fetch("https://bun.sh");
        expect(response.status).toBe(200);
        expect(response.headers.get("Content-Type")).toContain("text/html");
        expect(await response.text()).toContain("Bun is a JavaScript runtime.");
    });
});
