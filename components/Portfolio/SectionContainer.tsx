interface IPropType {
  children: any;
}

const SectionContainer = ({ children }: IPropType) => {
  return <div className="py-36 container mx-auto px-5 md:px-0">{children}</div>;
};

export default SectionContainer;
