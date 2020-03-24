// alert("tsts");
const toggleHiddenClass = id => {
  const sectionIds = ["div-1", "div-2", "div-3"];
  sectionIds.forEach(el =>
    document.getElementById(el).classList.remove("show")
  );
  sectionIds.forEach(el =>
    el === id ? document.getElementById(id).classList.add("show") : null
  );
};
