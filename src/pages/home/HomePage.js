import Heading from "./homecomponent/Heading";
import Specials from "./homecomponent/Specials";
import Testimonials from "./homecomponent/Testimonials";
import About from "./homecomponent/About";
export default function Homepage() {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}
