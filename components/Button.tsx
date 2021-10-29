type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  href: string;
  target?: string;
  rel?: string;
};

export const Button = ({
  children,
  variant,
  href,
  target,
  rel,
}: ButtonProps) => (
  <a href={href} target={target} rel={rel} className={`btn-${variant}`}>
    {children}
  </a>
);
