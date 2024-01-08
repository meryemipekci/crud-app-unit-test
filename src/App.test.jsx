import { render, screen, it } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";
import user from "@testing-library/user-event";

it("uygulama dogru sekilde calisiyor mu?", async () => {
  render(<App />);
  user.setup();
  //gerekli bilesenler

  const nameInp = screen.getByPlaceholderText("or: Meryem");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getAllByLabelText("Age");
  const button = screen.getByRole("button", {
    name: /kullanici ekle/i,
  });
  //formu doldur
  await user.type(nameInp, "veli");
  await user.type(mailInp, "veligr@gmail.com");
  await user.type(ageInp, "23");

  //formu gonder
  await user.click(button);
  //
  screen.getByRole("cell", { name: "veli" });
  screen.getByRole("cell", { name: "veligr@gmail.com" });
  screen.getByRole("cell", { age: "23" });
});
