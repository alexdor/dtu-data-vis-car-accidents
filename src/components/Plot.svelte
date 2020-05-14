<script>
  import { v4 as uuidv4 } from "uuid";
  export let data;

  const id = uuidv4();
  window.Bokeh.embed.embed_item(data, id);
</script>

<div {id} />
