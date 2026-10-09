import { createFileRoute } from "@tanstack/react-router";
import { SayEximPage } from "@/components/say-exim/SayEximPage";
import { routeHead } from "@/lib/route-head";
export const Route = createFileRoute("/about")({ head: () => routeHead("About Us", "Learn about SAY EXIM TRADERS and its Pune-based wholesale trade approach."), component: () => <SayEximPage page="about" /> });