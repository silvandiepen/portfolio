import markdownit from "markdown-it";

const md = markdownit();

export const renderMd = (input: string): string => {
  return md.render(input);
};
