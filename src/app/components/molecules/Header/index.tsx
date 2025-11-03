import { Logo } from "@atoms/Logo";

export const Header = () => {
  return (
    <header className="flex flex-row p-2 max-h-fit  items-end gap-5 mt-4 md:border-b border-red-200">
      <Logo />
      <h1 className="border-b-2 border-red-200 text-5xl size-fit text-pretty">
        Sabor Hub
      </h1>
    </header>
  );
};
