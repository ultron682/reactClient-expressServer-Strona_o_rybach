const Tool = (props) => {
  const tool = props.tool;
  return (
    <div class="card" style={{minWidth: '300px'}}>
      <img src={tool.image_url} alt={tool.title} class="card-img-top" />
      <div class="card-body">
        <h4 class="card-title">{tool.title}</h4>
      </div>
    </div>
  );
};
export default Tool;
