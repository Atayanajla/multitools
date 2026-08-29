import AccordionGallery from "../components/AccordionGallery";

const Home = () => {
  const items = [
    {
      image: "../public/bg/basic.jpg",
      label: "Kalkulator Basic",
      link: "/tools/basic",
    },
    {
      image: "../public/bg/bmi.jpg",
      label: "Kalkulator BMI",
      link: "/tools/bmi",
    },
    {
      image: "../public/bg/suhu.jpg",
      label: "Kalkulator Suhu",
      link: "/tools/suhu",
    },
    {
      image: "../public/bg/tanggal.jpg",
      label: "Kalkulator Day/Month/Years - Hour/Min/Sec",
      link: "/tools/tanggal",
    },
    {
      image: "../public/bg/usia.jpg",
      label: "Kalkulator Usia",
      link: "/tools/usia",
    },
    {
      image: "../public/bg/timer.jpg",
      label: "Timer",
      link: "/tools/timer",
    },
    {
      image: "../public/bg/stopwatch.jpg",
      label: "Stopwatch",
      link: "/tools/stopwatch",
    },
    {
      image: "../public/bg/todolist.jpg",
      label: "Todo List",
      link: "/tools/todolist",
    },
    {
      image: "../public/bg/note.jpg",
      label: "Notes",
      link: "/tools/note",
    },
  ];

  return (
    <div className="text-center pt-15">
      <h1 className="text-4xl font-bold">Welcome to Multi Fitur</h1>
      <p className="text-base pt-5">A collection of simple and useful tools for your everyday needs.</p>

      <AccordionGallery
        className="p-10"
        items={items}
        defaultIndex={2}
        expandRatio={0.52}
        trigger="hover"
        accentColor="#ffffff"
        overlayColor="#060010"
        textColor="#ffffff"
        grayscale
        showLabels
        duration={0.6}
        ease="power3.out"
        parallax={0.5}
        tilt={8}
        stagger={0.06}
        height={460}
        gap={10}
        radius={16}
        orientation="horizontal"
      />
    </div>
  );
};

export default Home;
