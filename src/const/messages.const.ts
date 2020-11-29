import { hex } from "chalk";
import { Colors } from "@enums/colors.enum";

export const greeting = `
  ${hex(Colors.ALPHA).bold('-------------------')}
        ${hex(Colors.ALPHA).bold('Jidō CLI')}      
  ${hex(Colors.ALPHA).bold('-------------------')}
`;