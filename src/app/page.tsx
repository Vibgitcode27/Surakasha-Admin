"use client";

import { Button, Input } from "antd";
import { increment , decrement , incrementByAmount } from "@/lib/features/counter/counterSlice";
import { useAppSelector , useAppDispatch } from "@/lib/hooks";

export default function Home() {

  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={() => { dispatch(increment())}}>Increment</Button>
      <Button onClick={() => { dispatch(decrement())}}>Decrement</Button>
    </div>

  );
}
