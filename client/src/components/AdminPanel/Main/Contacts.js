function Contacts(props) {
  const contacts = props.contacts;

  return (
    <div  class="card-group" id="eleContainer">
      {" "}
      {contacts.map((contact) => (
        <div key={contact._id} class="card" style={{ minWidth: "300px" }}>
          p. {contact.firstName} {contact.lastName} ({contact.age} lat) z{" "}
          {contact.country} <br />
          tel. {contact.phone} <br />
          email: {contact.email} <br />
          {contact.desc}
          <button onClick={() => props.deleteContact(contact._id)}>Usuń</button>
        </div>
      ))}{" "}
    </div>
  );
}
export default Contacts;
