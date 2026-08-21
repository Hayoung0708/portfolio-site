import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);

/**
 * GSAP 공식 헬퍼. 아이템 줄을 이음새 없이 무한으로 돌리고,
 * draggable 옵션을 주면 원하는 방향으로 끌 수 있다.
 * https://gsap.com/docs/v3/HelperFunctions/helpers/seamlessLoop
 */
export function horizontalLoop(
    items: Array<HTMLElement>,
    config: {
        repeat?: number;
        speed?: number;
        draggable?: boolean;
        paddingRight?: number;
    } = {},
) {
    const tl = gsap.timeline({
        repeat: config.repeat,
        defaults: { ease: "none" },
        onReverseComplete: () => {
            tl.totalTime(tl.rawTime() + tl.duration() * 100);
        },
    });
    const length = items.length;
    const startX = items[0].offsetLeft;
    const times: Array<number> = [];
    const widths: Array<number> = [];
    const xPercents: Array<number> = [];
    const pixelsPerSecond = (config.speed ?? 1) * 100;
    const snap = gsap.utils.snap(1);
    let totalWidth = 0;
    let curX = 0;
    let distanceToStart = 0;
    let distanceToLoop = 0;
    let item: HTMLElement;

    gsap.set(items, {
        xPercent: (i, el) => {
            const w = (widths[i] = parseFloat(
                gsap.getProperty(el, "width", "px") as string,
            ));
            xPercents[i] = snap(
                (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) *
                    100 +
                    (gsap.getProperty(el, "xPercent") as number),
            );
            return xPercents[i];
        },
    });
    gsap.set(items, { x: 0 });

    totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
            (gsap.getProperty(items[length - 1], "scaleX") as number) +
        (config.paddingRight ?? 0);

    for (let i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
            distanceToStart +
            widths[i] * (gsap.getProperty(item, "scaleX") as number);
        tl.to(
            item,
            {
                xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
            },
            0,
        )
            .fromTo(
                item,
                {
                    xPercent: snap(
                        ((curX - distanceToLoop + totalWidth) / widths[i]) *
                            100,
                    ),
                },
                {
                    xPercent: xPercents[i],
                    duration:
                        (curX - distanceToLoop + totalWidth - curX) /
                        pixelsPerSecond,
                    immediateRender: false,
                },
                distanceToLoop / pixelsPerSecond,
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }

    tl.progress(1, true).progress(0, true);

    let draggableInstance: Draggable | undefined;
    if (config.draggable) {
        const proxy = document.createElement("div");
        const wrap = gsap.utils.wrap(0, tl.duration());
        let ratio = 0;
        let startProgress = 0;

        const align = () => {
            tl.time(
                wrap(
                    startProgress +
                        (draggableInstance!.startX - draggableInstance!.x) *
                            ratio,
                ),
            );
        };

        draggableInstance = Draggable.create(proxy, {
            trigger: items[0].parentNode as Element,
            type: "x",
            inertia: true,
            onPressInit() {
                tl.pause();
                startProgress = tl.time();
                ratio = (1 / totalWidth) * tl.duration();
            },
            onDrag: align,
            onThrowUpdate: align,
            onRelease() {
                if (!draggableInstance!.isThrowing) tl.play();
            },
            onThrowComplete: () => tl.play(),
        })[0];
    }

    return {
        timeline: tl,
        kill() {
            draggableInstance?.kill();
            tl.kill();
        },
    };
}
