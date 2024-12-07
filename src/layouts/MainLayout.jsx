import Header from "./components";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

function MainLayout({ children }) {
  return (
    <div className="d-flex">
      <LeftSidebar />
      <div className="main">
        <Header />
        {children}
      </div>
      <RightSidebar />
    </div>
  );
}

export default MainLayout;
