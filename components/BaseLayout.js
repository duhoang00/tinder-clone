import MenuList from "../components/MenuList";

const BaseLayout = ({ children }) => {
  return (
    <>
      <MenuList />
      {children}
    </>
  );
};

export default BaseLayout;
