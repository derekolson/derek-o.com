export type SiteMeta = {
    name: string;
    tagline: string;
    description: string;
    logo: string;
}

export type NavLink = {
    title: string;
    url: string;
    external?: boolean;
};

export const site: SiteMeta = {
    name: "Derek Olson",
    tagline: "Software Designer and Developer",
    description: "Derek Olson is a software designer and developer with a background in art, music, and electronics. He collaborates with organizations around the world to create cutting-edge, human-centered products and experiences.",
    logo: "/img/logo-white-2x.png"
}

export const navLinks: NavLink[] = [
    {
      title: "Work",
      url: "/",
    },
    {
      title: "About",
      url: "/about/",
    },
];
