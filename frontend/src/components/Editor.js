import { marked } from "marked";

function onChange(e) {
  const input_pane = document.getElementById("input_pane");
  const preview_pane = document.getElementById("preview_pane");

  const parsed = marked.parse(input_pane.value);
  preview_pane.innerHTML = parsed;
}

function Editor() {
  return (
    <textarea
      id="input_pane"
      onChange={onChange}
      className="p-2 resize-none w-full h-full border-[1px] border-black border-solid rounded bg-white whitespace-pre"
    />
  );
}

export default Editor;
