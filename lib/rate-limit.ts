import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let ipLimit: Ratelimit | undefined;
let globalLimit: Ratelimit | undefined;

const redis = () => Redis.fromEnv();

export const contactIpLimit = () => {
    ipLimit ??= new Ratelimit({
        redis: redis(),
        limiter: Ratelimit.slidingWindow(3, "1 h"),
        prefix: "contact:ip",
        analytics: false,
    });

    return ipLimit;
};

export const contactGlobalLimit = () => {
    globalLimit ??= new Ratelimit({
        redis: redis(),
        limiter: Ratelimit.fixedWindow(50, "1 d"),
        prefix: "contact:global",
        analytics: false,
    });

    return globalLimit;
};
