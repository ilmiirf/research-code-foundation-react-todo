import { type FunctionComponentElement } from 'react';

export interface RouteType {
  label: string;
  element: FunctionComponentElement<{}> | null;
  path: string;
}
