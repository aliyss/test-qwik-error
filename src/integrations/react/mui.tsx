/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";

import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";

export const QRJSFAPP = qwikify$<{
  schema: any;
  onChangeC$: (...args: any) => any;
}>(
  ({ schema, onChangeC$ }) => {
    return <Form schema={schema} validator={validator} onChange={onChangeC$} />;
  },
  { clientOnly: true },
);
