import { createFileRoute } from "@tanstack/react-router";
import { SayEximPage } from "@/components/say-exim/SayEximPage";
import { routeHead } from "@/lib/route-head";
export const Route = createFileRoute("/global-trade")({ head: () => routeHead("Global Trade", "Learn how SAY EXIM TRADERS discusses product requirements and shipment coordination."), component: () => <SayEximPage page="global-trade" /> });