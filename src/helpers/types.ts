export type BrowserEvent = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  preventDefault: any;
  keyCode: number;
  key: string;
  target: { value: string };
};
