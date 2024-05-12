function Tools(props) {
  const tools = props.tools;

  return (
    <div class="card-group" id="eleContainer">
      {" "}
      {tools.map((tool) => (
        <div key={tool._id} class="card" style={{ minWidth: "300px" }}>
          <img src={tool.image_url} alt={tool.title} class="card-img-top" />
          <div class="card-body">
            <h4 class="card-title">{tool.title}</h4>
          </div>

          <button onClick={() => props.editTool(tool._id)}>Edycja</button>
        </div>
      ))}{" "}
    </div>
  );
}
export default Tools;
