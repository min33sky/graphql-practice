export type Resolver = {
  [key: string]: {
    [key: string]: (parent: any, args: { [key: string]: any }, contrxt: any, info: any) => any;
  };
};
