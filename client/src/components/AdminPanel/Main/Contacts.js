function Contacts(props) {
  const contacts = props.contacts;

  return (
    <div  class="card-group" id="eleContainer">
      {" "}
      {contacts.map((contact) => (
        <div key={contact._id} class="card" style={{ minWidth: "300px" }}>
          {contact.firstName} {contact.lastName}  <br />
          wiek: ({contact.age} lat) {" "} <br />
          państwo: {contact.country} <br />
          tel: {contact.phone} <br />
          email: {contact.email} <br />
          opis: {contact.desc}
          <button onClick={() => props.deleteContact(contact._id)}>Usuń</button>
        </div>
      ))}{" "}
    </div>
  );
}
export default Contacts;
