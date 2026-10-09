import { createFileRoute } from "@tanstack/react-router";
import { SayEximPage } from "@/components/say-exim/SayEximPage";
import { routeHead } from "@/lib/route-head";
export const Route = createFileRoute("/terms")({ head: () => routeHead("Terms of Service", "Website and demo catalogue terms for SAY EXIM TRADERS."), component: () => <SayEximPage page="terms" /> });