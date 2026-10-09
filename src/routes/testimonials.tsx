import { createFileRoute } from "@tanstack/react-router";
import { SayEximPage } from "@/components/say-exim/SayEximPage";
import { routeHead } from "@/lib/route-head";
export const Route = createFileRoute("/testimonials")({ head: () => routeHead("Our Approach", "SAY EXIM TRADERS values transparent communication and business relationships."), component: () => <SayEximPage page="testimonials" /> });