import { Footer } from "../footer";
import { Header } from "../header";


export const Layout = ({children}) => {


  return (
    <div className="wrap">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
