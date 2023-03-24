// import { __URL__ } from "./config";

/**
 * ts 核心：
 *  1、在定义任何如：属性、方法等 都要注明类型！！
 *  2、在调用任何如：属性、方法等 都要检查类型！！
 */

let __NET__ = "https://cn.bing.com";

const __URL__: string =
    "https://raw.onmicrosoft.cn/Bing-Wallpaper-Action/main/data/zh-CN_all.json";

interface IpropsType {
    id: number;
    bot: number;
    copyright: string;
    copyrightlink: string;
    drk: number;
    enddate: string;
    fullstartdate: string;
    hs: string[];
    hsh: string;
    quiz: string;
    startdate: string;
    title: string;
    top: number;
    url: string;
    urlbase: string;
    wp: boolean;
    data?: Array<any>;
}

const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["a", "b", "c"];
const objArr: IpropsType[] = [];

const addBtn = document.querySelector("#add-btn") as HTMLButtonElement;
const allBtn = document.querySelector("#all-btn") as HTMLButtonElement;
const tBody: HTMLButtonElement | null = document.querySelector("#tbody");

class Wallpaper implements IpropsType {
    public id: number;
    public bot: number;
    public copyright: string;
    public copyrightlink: string;
    public drk: number;
    public enddate: string;
    public fullstartdate: string;
    public hs: string[];
    public hsh: string;
    public quiz: string;
    public startdate: string;
    public title: string;
    public top: number;
    public url: string;
    public urlbase: string;
    public wp: boolean;
    constructor(
        bot: number,
        copyright: string,
        copyrightlink: string,
        drk: number,
        enddate: string,
        fullstartdate: string,
        hs: string[],
        hsh: string,
        quiz: string,
        startdate: string,
        title: string,
        top: number,
        url: string,
        urlbase: string,
        wp: boolean
    ) {
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

    async getJson<T>(url: string): Promise<T> {
        const Header = new Headers();
        Header.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
        const response: Response = await fetch(url, {
            method: "GET",
            headers: Header,
            redirect: "follow",
        });
        const json: Promise<T> = response.json();
        return json;
    }
    async getData(): Promise<void> {
        try {
            const json: IpropsType = await this.getJson<IpropsType>(__URL__);
            Display.addDom(json);
        } catch (error: Error | unknown) {
            let message: string;
            if (error instanceof Error) {
                message = error.message;
            } else {
                message = String(error);
            }
            console.error(message);
        } finally {
        }
    }
}

class Display {
    public static addDom(res: IpropsType, all: boolean = false): void {
        const { data = [] } = res;
        if (all) {
            const docFra = document.createDocumentFragment();
            data.length && data.forEach((o: IpropsType, i: number) => {
                const tr: HTMLTableRowElement = document.createElement("tr");
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
            tBody?.appendChild(docFra);
        } else {
            const o = data.length && data[parseInt(String(Math.random() * data.length - 1))];
            const wallpaper = new Wallpaper(
                o.bot,
                o.copyright,
                o.copyrightlink,
                o.drk,
                o.enddate,
                o.fullstartdate,
                o.hs,
                o.hsh,
                o.quiz,
                o.startdate,
                o.title,
                o.top,
                o.url,
                o.urlbase,
                o.wp
            );
            const tr: HTMLTableRowElement = document.createElement("tr");
            tr.innerHTML = `
                <td>${wallpaper.id}</td>
                <td align="center"><img src=" ${__NET__ + wallpaper.url}" /></td>
                <td>🏡${wallpaper.title}</td>
                <td>📚${wallpaper.copyright}</td>
                <td><a target="_blank" href="${wallpaper.copyrightlink}">${wallpaper.copyrightlink}</a></td>
                <td><a target="_blank" href="${__NET__ + wallpaper.quiz}">${wallpaper.quiz}</a></td>
                <td>${wallpaper.fullstartdate}</td>
                <td align="center"><button>⚔️删除</button></td>`;
            // tBody?.appendChild(tr);
            tBody?.insertBefore(tr, tBody?.firstElementChild);
        }
    }
    public static delDom(el: HTMLButtonElement): void {
        const td = el.parentElement as HTMLTableCellElement;
        const tr = td.parentElement as HTMLTableRowElement;
        console.log(tr);
        if (confirm('是否确认删除？')) {
            tr.remove();
        }
    }
    public static goUrl(el: HTMLAnchorElement): void {
        el.click();
    }
}

const getJson = async <T>(url: string): Promise<T> => {
    const Header = new Headers();
    Header.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
    const response: Response = await fetch(url, {
        method: "GET",
        headers: Header,
        redirect: "follow",
    });
    const json: Promise<T> = response.json();
    return json;
};

const getData = async (all: boolean): Promise<void> => {
    try {
        const data: IpropsType = await getJson<IpropsType>(__URL__);
        Display.addDom(data, all);
    } catch (error: Error | unknown) {
        let message: string;
        if (error instanceof Error) {
            message = error.message;
        } else {
            message = String(error);
        }
        console.error(message);
    } finally {
    }
};

addBtn.addEventListener<"click">(
    "click",
    (e: MouseEvent) => {
        getData(false);
    },
    false
);

allBtn.addEventListener<"click">(
    "click",
    (e: MouseEvent) => {
        getData(true);
    },
    false
);

tBody?.addEventListener<"click">("click", (ev: MouseEvent) => {
    console.log(ev);
    if ("⚔️删除" === ev.target?.innerText) {
        Display.delDom(<HTMLButtonElement>ev.target);
    }
    if ("A" === ev.target?.nodeName) {
        Display.goUrl(<HTMLAnchorElement>ev.target);
    }
});
