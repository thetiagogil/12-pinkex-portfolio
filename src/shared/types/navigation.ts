export type NavigationLink = {
  to: string;
  label: string;
  end: boolean;
};

export type NavigationLinks = readonly NavigationLink[];

export type InternalLinkAction = {
  label: string;
  to: string;
};
