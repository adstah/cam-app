import { Navbar } from "@/components/panel/navbar/navbar";

interface LayoutI {
  children: React.ReactElement;
}

export default function Layout({ children }: LayoutI) {
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <div className="">{children}</div>
    </div>
  );
}
