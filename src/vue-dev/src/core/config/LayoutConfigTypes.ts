interface General {
  mode: "dark" | "light" | "system";
  iconsType: "duotone" | "solid" | "outline";
}

interface Main {
  type: "default";
  primaryColor: string;
  logo: {
    dark: string;
    light: string;
  };
}

interface Illustrations {
  set: "dozzy-1" | "sigma-1" | "sketchy-1" | "unitedpalms-1";
}

interface ScrollTop {
  display: boolean;
}

interface Fixed {
  desktop: boolean;
  tabletAndMobile: boolean;
}

interface Header {
  display: boolean;
  width: "fixed" | "fluid";
  menuIcon: "keenthemes" | "bootstrap";
  fixed: Fixed;
}

interface PageTitle {
  display: boolean;
  breadcrumb: boolean;
  direction: string;
}

interface Aside {
  display: boolean;
  secondaryDisplay: boolean;
  theme: "dark" | "light";
  fixed: boolean;
  menuIcon: "keenthemes" | "bootstrap";
  minimized: boolean;
  minimize: boolean;
  hoverable: boolean;
}

interface Content {
  width: "fixed" | "fluid";
}

interface Toolbar {
  display: boolean;
  width: "fixed" | "fluid";
  fixed: Fixed;
}

interface Footer {
  width: "fixed" | "fluid";
}

interface LayoutConfig {
  general: General;
  main: Main;
  illustrations: Illustrations;
  scrollTop: ScrollTop;
  header: Header;
  toolbar: Toolbar;
  pageTitle: PageTitle;
  aside: Aside;
  content: Content;
  footer: Footer;
}

export default LayoutConfig;

export type {
  Main,
  Illustrations,
  ScrollTop,
  Fixed,
  Header,
  Aside,
  Content,
  Toolbar,
  Footer,
  LayoutConfig,
};
