import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/uudised")({
  component: UudisedLayout,
});

function UudisedLayout() {
  return <Outlet />;
}
