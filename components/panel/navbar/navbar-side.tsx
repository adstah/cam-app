import { Button } from "@/components/(shared)/button";
import { NAV_SECTIONS } from "./const";
import Link from "next/link";

export const NavbarSide = () => {
  return (
    <div className="bg-slate-700 min-h-screen p-3 pt-10 shadow-2xl">
      <ul className="p-2">
        {NAV_SECTIONS.map(({ title, subsections }) => (
          <li className="p-2">
            {title}
            <ul className="p-2">
              {subsections?.map(({ title, href }) => (
                <li className="p-2">
                  <Link href={href}>
                    <Button variant="secondary">{title}</Button>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
