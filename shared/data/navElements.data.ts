import { PAGES } from "@/app/config/pages.config";
import type { INavElement } from "../types/navElement.interface";

export const navElements: INavElement[] = [
  {
    text: "Главная",
    url: `${PAGES.HOME}`,
  },
  {
    text: "Галерея",
    url: `${PAGES.GALLERY}`,
  },
  {
    text: "О нас",
    url: `${PAGES.ABOUTUS}`,
  },
  {
    text: "Профиль",
    url: `${PAGES.PROFILE}`,
  },
];
