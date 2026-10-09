import { createFileRoute } from "@tanstack/react-router";
import { SayEximPage } from "@/components/say-exim/SayEximPage";
import { routeHead } from "@/lib/route-head";
export const Route = createFileRoute("/products/")({ head: () => routeHead("Products", "Browse wholesale product categories offered by SAY EXIM TRADERS."), component: () => <SayEximPage page="products" /> });