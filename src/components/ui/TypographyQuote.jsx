export function TypographyInlineCode({ content }) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {content}
    </code>
  );
}

export function TypographyBlockquote({ content }) {
  return <p className="mt-6 italic">{content}</p>;
}
