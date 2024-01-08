const Form = ({ addUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //formdaki inputlara girilen degerlerden bir obje olusturma
    const form = new FormData(e.target);
    const user = Object.fromEntries(form.entries());
    //kullaniciyi listeye ekleme
    addUser(user);

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label htmlFor="name" className="mt-4">
          Isim
        </label>
        <input name="name" className="form-control" id="name" type="text" />
      </div>
      <div>
        <label htmlFor="email" className="mt-4">
          Email
        </label>
        <input name="email" className="form-control" id="email" type="text" />
      </div>
      <div>
        <label htmlFor="age" className="mt-4">
          Age
        </label>
        <input name="age" className="form-control" id="age" type="number" />
      </div>
      <button className="btn btn-primary mt-3">Kullanici Ekle</button>
    </form>
  );
};

export default Form;
