import { InternalLink, ExternalLink } from "./NavigationLinkStyles";

const NavigationLink = ({
  children,
  externalLink = true,
  href,
  openInNewTab = true,
  onClick,
  type,
}) => {
  return externalLink ? (
    <ExternalLink
      // eslint-disable-next-line no-script-url
      href={href || "javascript:void(0)"}
      onClick={onClick}
      role="link"
      target={openInNewTab ? "_blank" : "_self"}
      type={type}
    >
      {children}
    </ExternalLink>
  ) : (
    <InternalLink
      onClick={onClick}
      role="link"
      target={openInNewTab ? "_blank" : "_self"}
      to={href}
      type={type}
    >
      {children}
    </InternalLink>
  );
};

export default NavigationLink;
