import { Ratelimit } from "@upstash/ratelimit";

//getting from database folder
import redis from "@/database/redis";

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, "1m"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

export default ratelimit;

//every single user gets 5 tries for sign in before too fast apears
// for showcase turn to 1 and show the too fast page