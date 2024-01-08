import {
  render,
  screen,
  it,
  within,
  getAllByRole,
  expect,
} from "@testing-library/react";
import UserList from "./UserList";
import { users } from "../../constants";

it("gonderilen her kullanici icin ekrana tablo satiri basilir", () => {
  //prop olarak bir deger alan bileşeni test etme
  render(<UserList users={users} />);
  // users tablosu icerisindeki butun satırlari al
  //

  const body = screen.getByTestId("table-body");

  //belirli bir kapsayici icerisindeki elemanlari secme
  const rows = within(body).getAllByRole("row");

  //kullanıcı sayisi kadar satir var mi
  expect(rows).toHaveLength(users.length);
});

//100% test covarage /

it("her bir kullanici icin email isim ve yas degerleri tablo hucresi olarak ekrana basiliyormu", () => {
  render(<UserList users={users} />);
  //her bir kullanıcı için ekrandaki tablo
  // hucrelerinde isim email ve yas degerleri yaziyor mu
  for (const user of users) {
    //kullanıcının adini iceren tablo hucresini al
    const name = screen.getByRole("cell", { name: user.name });
    //kullanıcının emailini iceren tablo hucresini al
    const email = screen.getByRole("cell", { name: user.email });
    //kullanıcının yasini iceren tablo hucresini al
    const age = screen.getByRole("cell", { name: user.age });

    //hucrelerde ekranda mi kontrol?
    expect(name).toBeVisible();
    expect(email).toBeVisible();
    expect(age).toBeVisible();
  }
});
