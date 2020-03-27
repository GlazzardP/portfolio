// alert("tsts");
const toggleHiddenClass = id => {
  const sectionIds = ["section-1", "section-2", "section-3"];
  sectionIds.forEach(el =>
    document.getElementById(el).classList.remove("show")
  );
  sectionIds.forEach(el =>
    el === id ? document.getElementById(id).classList.add("show") : null
  );
};
