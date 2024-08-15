import { ConnectButton } from "@rainbow-me/rainbowkit";
import Hello from "./hello";

export default function Home() {
  return (
    <div>
      <Hello name="Oshioke" />
      <Hello name="Justice" />
      <Hello name="Favour" />
      <ConnectButton />
    </div>
  );
}
