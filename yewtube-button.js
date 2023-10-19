// ==UserScript==
// @name         Yewtu.be button
// @namespace    https://github.com/Gestalte/yewtube-button
// @version      0.1
// @description  Adds a button the youtube watch page to view the video in yewtu.be
// @author       https://github.com/Gestalte
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// @license      WTFPL
// ==/UserScript==

var doWork = function () {
    var youtubeURL = window.location.href;
    var yewtubeUrl = "https://yewtu.be/watch?" + location.search.substring(1);

    console.log(yewtubeUrl);

    var logoDiv = document.querySelector('#logo');

    let yewtubeSpan = document.createElement('a');
    yewtubeSpan.innerText = "Open in Yewtu.be";
    yewtubeSpan.id = "yewtube";
    yewtubeSpan.href = yewtubeUrl;
    yewtubeSpan.style.padding = "10px";
    yewtubeSpan.style.fontSize = "16px";

    logoDiv.append(yewtubeSpan);
}

(function () {
    doWork();
})();
