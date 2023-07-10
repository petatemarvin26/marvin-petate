type Data = {
  id: string;
  percent: number;
};

type Value = {
  isReady?: boolean;
  totalPercentage: number;
  addPercentage: AddDataHandler;
  setPercentage: SetDataHandler;
};

type AddDataHandler = {
  (data: Data): void;
};

type SetDataHandler = {
  (data: Data): void;
};

type Props = {
  children: any;
};

export type {Data, Value, Props, AddDataHandler, SetDataHandler};
