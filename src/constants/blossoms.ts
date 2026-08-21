/**
 * 히어로 배경 벚꽃. 자리·크기·기울기와,
 * 스크롤할 때 올라가는 속도(speed), 제자리에서 흔들리는 주기(spin).
 *
 * speed 1 = 본문과 같은 속도. 1보다 작으면 뒤처지고, 크면 본문보다 앞질러
 * 위로 빠져나간다. 좌우가 대칭이 되지 않도록 일부러 흩어 놓았다.
 */
export const BLOSSOMS = [
    // 제일 큰 한 송이는 "경험" 글자 왼쪽 위에
    { top: "11%", left: "2%", size: 132, tilt: -14, speed: 0.3, spin: 21 },
    { top: "33%", left: "9%", size: 42, tilt: 24, speed: 0.62, spin: 17 },
    { top: "7%", right: "15%", size: 64, tilt: 8, speed: 2.1, spin: 25 },
    { top: "58%", right: "3%", size: 100, tilt: -22, speed: 0.26, spin: 19 },
    { top: "82%", left: "5%", size: 54, tilt: 12, speed: 2.6, spin: 15 },
    { top: "90%", right: "30%", size: 34, tilt: -6, speed: 2.4, spin: 23 },
];
