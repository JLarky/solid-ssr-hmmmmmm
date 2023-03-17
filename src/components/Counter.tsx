import { createEffect, createMemo, createSignal } from "solid-js";
import "./Counter.css";

let i = Math.random();
const ssr = import.meta.env.SSR;

console.log("ssr", ssr);

export default function Counter() {
  const [count, setCount] = createSignal(i);
  const [flag, toggleFlag] = createSignal(ssr);
  createEffect(() => {
    console.log("why is this value not match the text?", count());
  });
  createEffect(() => {
    console.log(
      "first click doesnt' cause UI change, but causes effect",
      flag()
    );
  });
  return (
    <>
      <button class="increment" onClick={() => setCount(count() + 1)}>
        Clicks: {count()}
      </button>
      <button class="increment" onClick={() => toggleFlag(!flag())}>
        Toggle: {flag() ? "true" : "false"}
      </button>
    </>
  );
}
