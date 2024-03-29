import Service from "../components/service";
import LinkButton from "../components/linkButton";
import Main from "../components/main";

const Home = () => {
  return (
    <Main>
      <article>
        {/* ---------- Landing Section ---------- */}
        <section className="relative overflow-hidden bg-violet-200">
          {/* Bucket container */}
          <div className="absolute top-10 right-2 origin-top scale-[200%] 
        md:scale-[300%] md:right-32 md:-top-12 lg:right-24">
            <img src="/bucketfall.svg" alt="" className="w-40 h-80" />
          </div>

          {/* Text block 1 */}
          <div className="max-w-[800px] mx-auto flex pl-4 pt-24 mb-10 md:mb-28 md:pt-20 md:pl-24 lg:justify-center lg:px-0 lg:pt-36">
            <h1 className="w-56 text-center text-lg md:w-96 md:text-3xl lg:text-4xl lg:w-[450px] xl:w-auto">Make a <span className="relative p-2 splash before:w-36 before:h-36 before:bottom-[-60px] before:left-[-40px]">splash</span> with a website that's designed and developed by the best.</h1>
          </div>

          {/* Wave border */}
          <div className="wave relative top-1">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-[100px]">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-indigo-600 stroke-slate-800 -z-10 stroke-[6px]"></path>
            </svg>
          </div>

          {/* Indigo section under the wave */}
          <div className="w-screen bg-indigo-600 block text-light relative -top-0">
            <div className="max-w-[900px] mx-auto px-9">
              {/* Text block 2 */}
              <div className="flex justify-center pt-10">
                <p className="text-center text-lg md:text-3xl md:w-auto lg:pt-5">We pour on the skills and creativity to increase your web presence. With design and development services, get a website that really stands out.</p>
              </div>

              {/* Action button */}
              <div className="flex justify-center items-center py-16">
                <LinkButton href="/contact" text="Get a Website" />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Services Section ---------- */}
        <section className="bg-gradient-to-b from-indigo-600 to-violet-600 text-light pb-4">
          <div className="md:grid grid-cols-2 md:gap-8 max-w-[1000px] mx-auto md:px-5">
            <Service
              src="/service icons/design.svg"
              text="Not sure how you want it to look yet? We’ll help you find the perfect design."
              className=""
              alt=""
            />

            <Service
              src="/service icons/development.svg"
              text="Already have an image in your  head? We’ll help you make that image a reality."
              className="flex-row-reverse"
              alt=""
            />

            <Service
              src="/service icons/management.svg"
              text="Have an existing site? We’ll help you update it, or add content."
              className=""
              alt=""
            />

            <Service
              src="/service icons/fullstack.svg"
              text="Need something more complex? We can leverage APIs and databases to make your site shine!"
              className="flex-row-reverse"
              alt=""
            />
          </div>

          <p className="text-center text-2xl md:text-3xl md:pt-8">Welcome to your one-stop-shop for all your website needs.</p>

          <div className="flex justify-center items-center py-8">
            <LinkButton href="/contact" text="See Services" />
          </div>
        </section>
        {/* ---------- Work Proof Section ---------- */}
      </article>
    </Main>
  )
}

export default Home;