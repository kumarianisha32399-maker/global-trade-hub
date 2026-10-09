import { createFileRoute } from "@tanstack/react-router";
import { SayEximPage } from "@/components/say-exim/SayEximPage";
import { routeHead } from "@/lib/route-head";
export const Route = createFileRoute("/categories")({ head: () => routeHead("Product Categories", "Browse SAY EXIM TRADERS product and wholesale categories."), component: () => <SayEximPage page="categories" /> });