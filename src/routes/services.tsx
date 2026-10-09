import { createFileRoute } from "@tanstack/react-router";
import { SayEximPage } from "@/components/say-exim/SayEximPage";
import { routeHead } from "@/lib/route-head";
export const Route = createFileRoute("/services")({ head: () => routeHead("Services", "Explore sourcing and trade coordination services from SAY EXIM TRADERS."), component: () => <SayEximPage page="services" /> });