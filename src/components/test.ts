export function returnValue(value: any) {
  return {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
      title: { type: "string", title: "Title", default: `A new task ${value}` },
      done: { type: "boolean", title: "Done?", default: false },
    },
  };
}

export const x: Record<number, any> = {
  1: "one",
};
