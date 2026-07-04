import type { RegisteredRouter, RoutePaths } from '@tanstack/react-router';


declare global {
  export type AppRoutePath = RoutePaths<RegisteredRouter['routeTree']>;
}
