import { render, it, screen, expect } from "@testing-library/react";
import Form from "./Form";
import { vi } from "vitest";
import user from "@testing-library/user-event";

//mock
//form bileşenine diger bileşenlerden farkli bir test yapicaz
// form gonderilince tabloya eklenme kontrolu yapamayız
//! form bileşeni gorevini dogru sekilde yerine getiriyor mu?
//butun inputlar doldurulduktan sonra  fromu gonderince "adduser" fonk. calisiyormu
//"adduser" fonk.nuna dogru parametreler gonderiliyor mu

const testUser = {
  name: "bilal",
  email: "bilal@gmail.com",
  age: "20",
};

it("form gonderilince 'addUser' dogru parametreleri alarak acalisiyor mu", async () => {
  //mock > fonk. taklit etme
  // ne zamn cagrildi | hangi parametrelerle cagrıldı
  // tarzinda testleri yapmamizi saglayan orj. fonk simule eden yapi.

  const mock = vi.fn();
  user.setup();
  render(<Form addUser={mock} />);
  //gerekli elemanlari cagirma

  const nameInp = screen.getByLabelText("Isim");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByLabelText("Age");
  const submitBtn = screen.getByRole("button");

  //name inputunu doldurma - yol 1
  await user.click(nameInp);
  await user.keyboard(testUser.name);

  //email inputunu doldurma - yol 2
  await user.type(mailInp, testUser.email);

  //yas inputu doldur
  await user.type(ageInp, testUser.age);
  // fromu gonder
  await user.type(submitBtn);

  //form gonderilince
  expect(mock).toBeCalled();
  expect(mock).toBeCalledWith(testUser);
});
