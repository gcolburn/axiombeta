var page = new tabris.Page({
  title: "Axiom Beta",
  topLevel: true
});

var txtURL = tabris.create("TextView", {
  font: "24px",
  layoutData: {
    centerX: 0, top: [button, 50]
  }
}).appendTo(page);

var btnSetURL = tabris.create("Button", {
  text: "Set URL",
  layoutData: {centerX: 0, top: 100}
}).appendTo(page);

var videoViewer = new tabris.Video({
  layoutData: {left: 0, right: 0, top: 0, bottom: 0},
  url: "http://192.168.10.60:8888/stream"
}).appendTo(page);

btnSetURL.on("selection", function() {
  videoViewer.set("url",txtURL.get("text"));
});

page.open();
