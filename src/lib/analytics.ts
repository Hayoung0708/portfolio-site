/** GA4 이벤트 전송. gtag가 없는 환경(로컬·차단)에서는 조용히 무시한다 */
export function track(name: string, params?: Record<string, string>) {
    (window as { gtag?: (...args: Array<unknown>) => void }).gtag?.(
        "event",
        name,
        params,
    );
}
