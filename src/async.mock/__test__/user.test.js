import axios from "axios";
import { register } from "../user";
import { verifyPassword, verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const mockUserName = "mockName";
    const mockUserPwd = "mockPassword";
    const expected = { mockUserName, mockUserPwd };
    const response = { data: expected };
    verifyPassword.mockImplementation(() => true);
    verifyUsername.mockImplementation(() => true);
    axios.post.mockResolvedValue(response);
    await expect(register(mockUserName, mockUserPwd)).resolves.toEqual(
      expected
    );
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    const mockUserName = "mockName";
    const mockUserPwd = "mockPassword";
    verifyUsername.mockImplementation(() => false);

    await expect(register(mockUserName, mockUserPwd)).rejects.toThrow(
      "wrong username or password"
    );
  });
});
