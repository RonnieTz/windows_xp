import { StaticImageData } from 'next/image';

export type Window = {
  id: string;
  focus: boolean;
  fullscreen: boolean;
  open: boolean;
  zIndex: number;
  minimized: boolean;
  title: string;
  width: number;
  height: number;
  top: number;
  left: number;
  icon: StaticImageData;
};

export type Task = {
  id: string;
};
