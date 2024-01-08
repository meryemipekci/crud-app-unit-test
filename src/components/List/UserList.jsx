const UserList = ({ users }) => {
  console.log(users);
  return (
    <div>
      <table className="table my-3 table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>Isim</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
