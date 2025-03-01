require('source-map-support').install();

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM("<html></html>", {
  url: "https://example.com",
  referrer: "http://google.com/?q=cookies",
});
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.sessionStorage = dom.window.sessionStorage;
global.history = dom.window.history;
global.Element = dom.window.Element;
global.HTMLElement = dom.window.HTMLElement;
global.HTMLDialogElement = dom.window.HTMLDialogElement;
global.customElements = dom.window.customElements;
global.DOMParser = dom.window.DOMParser;
global.MutationObserver = dom.window.MutationObserver;
global.matchMedia = () => ({
  matches : false,
  addListener : () =>{},
  removeListener: () =>{},
});
global.jQuery = global.$ = require("jquery");
require("../kitsune/sumo/static/sumo/js/i18n");
global.gettext = dom.window.gettext;
global.interpolate = dom.window.interpolate;
global.jsdom = dom;
global.window.fetch = () => {};
global.CustomEvent = dom.window.CustomEvent;
global.requestAnimationFrame = () => {};
global.window.waffle = { flag_is_active: () => undefined };
global.window.URL.createObjectURL = () => {};
global.window.open = () => {};
global.Blob = dom.window.Blob;
