"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let __NET__ = "https://cn.bing.com";
const __URL__ = "https://raw.onmicrosoft.cn/Bing-Wallpaper-Action/main/data/zh-CN_all.json";
const numArr = [1, 2, 3];
const strArr = ["a", "b", "c"];
const objArr = [];
const addBtn = document.querySelector("#add-btn");
const allBtn = document.querySelector("#all-btn");
const tBody = document.querySelector("#tbody");
class Wallpaper {
    constructor(bot, copyright, copyrightlink, drk, enddate, fullstartdate, hs, hsh, quiz, startdate, title, top, url, urlbase, wp) {
        this.id = performance.now();
        this.bot = bot;
        this.copyright = copyright;
        this.copyrightlink = copyrightlink;
        this.drk = drk;
        this.enddate = enddate;
        this.fullstartdate = fullstartdate;
        this.hs = hs;
        this.hsh = hsh;
        this.quiz = quiz;
        this.startdate = startdate;
        this.title = title;
        this.top = top;
        this.url = url;
        this.urlbase = urlbase;
        this.wp = wp;
    }
    getJson(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const Header = new Headers();
            Header.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
            const response = yield fetch(url, {
                method: "GET",
                headers: Header,
                redirect: "follow",
            });
            const json = response.json();
            return json;
        });
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const json = yield this.getJson(__URL__);
                Display.addDom(json);
            }
            catch (error) {
                let message;
                if (error instanceof Error) {
                    message = error.message;
                }
                else {
                    message = String(error);
                }
                console.error(message);
            }
            finally {
            }
        });
    }
}
class Display {
    static addDom(res, all = false) {
        const { data = [] } = res;
        if (all) {
            const docFra = document.createDocumentFragment();
            data.length && data.forEach((o, i) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                <td align="center">${i}</td>
                <td align="center"><img src=" ${__NET__ + o.url}" /></td>
                <td>🏡${o.title}</td>
                <td>📚${o.copyright}</td>
                <td><a target="_blank" href="${o.copyrightlink}">${o.copyrightlink}</a></td>
                <td><a target="_blank" href="${__NET__ + o.quiz}">${o.quiz}</a></td>
                <td>${o.fullstartdate}</td>
                <td align="center"><button>⚔️删除</button></td>`;
                docFra.appendChild(tr);
            });
            tBody === null || tBody === void 0 ? void 0 : tBody.appendChild(docFra);
        }
        else {
            const o = data.length && data[parseInt(String(Math.random() * data.length - 1))];
            const wallpaper = new Wallpaper(o.bot, o.copyright, o.copyrightlink, o.drk, o.enddate, o.fullstartdate, o.hs, o.hsh, o.quiz, o.startdate, o.title, o.top, o.url, o.urlbase, o.wp);
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${wallpaper.id}</td>
                <td align="center"><img src=" ${__NET__ + wallpaper.url}" /></td>
                <td>🏡${wallpaper.title}</td>
                <td>📚${wallpaper.copyright}</td>
                <td><a target="_blank" href="${wallpaper.copyrightlink}">${wallpaper.copyrightlink}</a></td>
                <td><a target="_blank" href="${__NET__ + wallpaper.quiz}">${wallpaper.quiz}</a></td>
                <td>${wallpaper.fullstartdate}</td>
                <td align="center"><button>⚔️删除</button></td>`;
            tBody === null || tBody === void 0 ? void 0 : tBody.insertBefore(tr, tBody === null || tBody === void 0 ? void 0 : tBody.firstElementChild);
        }
    }
    static delDom(el) {
        const td = el.parentElement;
        const tr = td.parentElement;
        console.log(tr);
        if (confirm('是否确认删除？')) {
            tr.remove();
        }
    }
    static goUrl(el) {
        el.click();
    }
}
const getJson = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const Header = new Headers();
    Header.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
    const response = yield fetch(url, {
        method: "GET",
        headers: Header,
        redirect: "follow",
    });
    const json = response.json();
    return json;
});
const getData = (all) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield getJson(__URL__);
        Display.addDom(data, all);
    }
    catch (error) {
        let message;
        if (error instanceof Error) {
            message = error.message;
        }
        else {
            message = String(error);
        }
        console.error(message);
    }
    finally {
    }
});
addBtn.addEventListener("click", (e) => {
    getData(false);
}, false);
allBtn.addEventListener("click", (e) => {
    getData(true);
}, false);
tBody === null || tBody === void 0 ? void 0 : tBody.addEventListener("click", (ev) => {
    var _a, _b;
    console.log(ev);
    if ("⚔️删除" === ((_a = ev.target) === null || _a === void 0 ? void 0 : _a.innerText)) {
        Display.delDom(ev.target);
    }
    if ("A" === ((_b = ev.target) === null || _b === void 0 ? void 0 : _b.nodeName)) {
        Display.goUrl(ev.target);
    }
});
