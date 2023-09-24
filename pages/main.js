const editor = document.getElementById("editor");
const url = new URLSearchParams(window.location.search);
const title = url.get("title");

editor.innerHTML = localStorage.getItem(`text-${title}`);
editor.focus();

editor.addEventListener("input", () => {
  localStorage.setItem(`text-${title}`, editor.innerHTML);
});

document.getElementById("bold").addEventListener("click", () => {
  document.execCommand("bold", false, null);
  editor.focus();
});

document.getElementById("italic").addEventListener("click", () => {
  document.execCommand("italic", false, null);
  editor.focus();
});

document.getElementById("underline").addEventListener("click", () => {
  document.execCommand("underline", false, null);
  editor.focus();
});

document.getElementById("line-through").addEventListener("click", () => {
  document.execCommand("strikeThrough", false, null);
  editor.focus();
});

document.getElementById("noto").addEventListener("click", () => {
  document.execCommand("fontName", false, "NotoSansArabic");
  editor.focus();
});

document.getElementById("naskh").addEventListener("click", () => {
  document.execCommand("fontName", false, "Naskh");
  editor.focus();
});

document.getElementById("quran").addEventListener("click", () => {
  document.execCommand("fontName", false, "Quran");
  editor.focus();
});

document.getElementById("heading-one").addEventListener("click", () => {
  document.execCommand("fontSize", false, "6");
  editor.focus();
});

document.getElementById("heading-two").addEventListener("click", () => {
  document.execCommand("fontSize", false, "5");
  editor.focus();
});

document.getElementById("text").addEventListener("click", () => {
  document.execCommand("fontSize", false, "4");
  editor.focus();
});

document.getElementById("unordered-list").addEventListener("click", () => {
  document.execCommand("insertUnorderedList", false, null);
  editor.focus();
});

document.getElementById("ordered-list").addEventListener("click", () => {
  document.execCommand("insertOrderedList", false, null);
  editor.focus();
});

document.getElementById("align-left").addEventListener("click", () => {
  document.execCommand("justifyLeft", false, null);
  editor.focus();
});

document.getElementById("align-center").addEventListener("click", () => {
  document.execCommand("justifyCenter", false, null);
  editor.focus();
});

document.getElementById("align-right").addEventListener("click", () => {
  document.execCommand("justifyRight", false, null);
  editor.focus();
});

document.getElementById("align-justify").addEventListener("click", () => {
  document.execCommand("justifyFull", false, null);
  editor.focus();
});

document.getElementById("undo").addEventListener("click", () => {
  document.execCommand("undo", false, null);
  editor.focus();
});

document.getElementById("redo").addEventListener("click", () => {
  document.execCommand("redo", false, null);
  editor.focus();
});

document.getElementById("copy").addEventListener("click", () => {
  document.execCommand("copy", false, null);
  editor.focus();
});

document.getElementById("cut").addEventListener("click", () => {
  document.execCommand("cut", false, null);
  editor.focus();
});

document.getElementById("highlight").addEventListener("click", () => {
  document.execCommand("backColor", false, "yellow");
  editor.focus();
});

document.getElementById("remove-highlight").addEventListener("click", () => {
  document.execCommand("backColor", false, "transparent");
  editor.focus();
});