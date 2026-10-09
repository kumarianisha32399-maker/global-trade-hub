import { createFileRoute } from "@tanstack/react-router";
import { SayEximPage } from "@/components/say-exim/SayEximPage";
import { routeHead } from "@/lib/route-head";
export const Route = createFileRoute("/gallery")({ head: () => routeHead("Gallery", "Trade, products and logistics imagery from SAY EXIM TRADERS."), component: () => <SayEximPage page="gallery" /> });