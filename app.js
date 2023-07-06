
// Come Back Site Name
const name1 = document.title;
        window.onblur = () =>
        document.title = "Come Back Please :(";
        window.onfocus = () =>
        document.title = name1;

