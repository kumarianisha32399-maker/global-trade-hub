import { createFileRoute } from "@tanstack/react-router";
import { SayEximPage } from "@/components/say-exim/SayEximPage";
import { routeHead } from "@/lib/route-head";
export const Route = createFileRoute("/products/$slug")({ head: () => routeHead("Product Details", "View a SAY EXIM TRADERS catalogue item and request product information."), component: () => <SayEximPage page="product" /> });