import Tool from "./Tool.js";


function Tools(props) {
  const tools = props.tools;
  return (
    <div class="card-group" id="eleContainer">
      {" "}
      {tools.map((tool) => (
        // <Tool title={tool.title} image_url={tool.image_url} />
        <Tool key={tool.title} value={tool.title} tool={tool} />

      ))}{" "}
    </div>
  );
}
export default Tools;
