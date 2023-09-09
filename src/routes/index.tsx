import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { returnValue, x } from "~/components/test";
import { QRJSFAPP } from "~/integrations/react/mui";

export default component$(() => {
  console.log("here");
  const show = useSignal(Math.random());
  const count = useSignal(1);

  const onChange = $((data: any) => {
    if (data.formData.done) {
      show.value = Math.random();
    } else {
      show.value = 0;
    }
  });

  return (
    <>
      {count.value ? (
        <>
          <QRJSFAPP schema={returnValue(count.value)} onChangeC$$={onChange} />
          <button onClick$={() => (show.value = 0)}>
            {show.value || x[count.value]}
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
