import axios from "axios";
import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const expected = { name: "yurong" };
    const response = { data: expected };
    axios.get.mockResolvedValue(response);

    await expect(getUsers()).resolves.toEqual(expected);
  });
});
