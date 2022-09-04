import "styled-components";
import mainTheme from "./themes/main";

declare module "styled-components" {
  type ThemeType = typeof mainTheme;

  export interface DefaultTheme extends ThemeType {}
}
