import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import Header from "./Header";

vi.mock("./components", () => ({
  Menu: ({ isOpen, email, onClose }: { isOpen: boolean; email: string; onClose: () => void }) => (
    <div data-testid="header-menu" className={isOpen ? "w-4/5" : "w-0"}>
      <span>{email}</span>
      <button type="button" onClick={onClose}>
        Close menu
      </button>
    </div>
  ),
}));

describe("Header", () => {
  test("renders brand link, menu button, and menu closed by default", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: /slovik/i })).toBeDefined();
    expect(screen.getByRole("button", { name: "Menu" })).toBeDefined();
    expect(screen.getByTestId("header-menu").className).toContain("w-0");
  });

  test("opens menu on menu button click and closes menu when menu close button is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: "Menu" });
    await user.click(menuButton);

    expect(screen.getByTestId("header-menu").className).toContain("w-4/5");

    const closeButton = screen.getByRole("button", { name: /close menu/i });
    await user.click(closeButton);

    expect(screen.getByTestId("header-menu").className).toContain("w-0");
  });
});
