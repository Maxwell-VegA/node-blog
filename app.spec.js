const app = require("./app");
const request = require("supertest");

describe("Get json", () => {
  it("Can GET index", async () => {
    await request(app).get("/").expect(200);
  });

  it("Index should return one foo", async () => {
    const res = await request(app).get("/").expect(200);
    const expected = { foo: 1 };
    const actual = res.body;
    expect(actual).toEqual(expected);
  });
});

describe("Put request", () => {
  it("PUT request processed correctly", async () => {
    const res = await request(app).put("/").expect(200).send({ foo: 1 });
    const expected = { foo: 2 };
    const actual = res.body;
    expect(actual).toEqual(expected);
  });
});

describe("Post request", () => {
  it("Post request processed correctly", async () => {
    const res = await request(app).post("/").expect(200).send({ foo: 1 });
    const expected = { foo: 1 };
    const actual = res.body;
    expect(actual).toEqual(expected);
  });
});
