import { FaArrowRight } from "react-icons/fa";

function SectionTitle({ children }) {
  return (
    <div className="text-lg font-bold text-[#0B1426]">
      {children}
    </div>
  );
}

function Card({ gradientFrom, gradientTo, imgSrc, title, buttonText }) {
  return (
    <div className="mt-4 lg:w-[400px] h-[151px] bg-gradient-to-br rounded-lg" style={{ background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})` }}>
      <div className="p-3">
        <img className="w-32 h-32 rounded-xl object-cover" src={imgSrc} alt={title} />
      </div>
      <div className="items-center p-4 flex flex-col justify-center mr-10">
        <div className="text-white text-xl">{title}</div>
        <div className="bg-white px-3 py-2 rounded-lg mt-3 flex items-center cursor-pointer">
          {buttonText}
          <FaArrowRight className="ml-2 font-normal" />
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="bg-white h-max rounded-lg my-5 lg:p-6 p-2">
      <div>
        <div className="text-2xl font-semibold text-[#0F1629]">
          About Bitcoin
        </div>
        <div className="mt-6">
          <SectionTitle>What is Bitcoin?</SectionTitle>
          <div className="mt-2 pb-4 text-[#3E424A] font-medium border-b-2 border-[#C9CFDD]/40">
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          </div>
        </div>
        <div className="mt-2 border-b-2 border-[#C9CFDD]/40 pb-4">
          <SectionTitle>Lorem ipsum dolor sit amet</SectionTitle>
          <div className="text-[#3E424A] font-medium mt-2">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed.
          </div>
          <div className="mt-6 text-[#3E424A] font-medium">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum.
          </div>
        </div>

        <div className="mt-2 py-2">
          <div className="text-[#0F1629] text-2xl font-semibold">
            Already Holding Bitcoin?
          </div>
          <div className="lg:flex border-b-2 border-[#C9CFDD]/40 pb-4">
            <Card
              gradientFrom="#79F1A4"
              gradientTo="#0E5CAD"
              imgSrc="./img1.png"
              title="Calculate your Profits"
              buttonText="Check Now"
            />
            <Card
              gradientFrom="#FF9865"
              gradientTo="#EF3031"
              imgSrc="./img2.png"
              title="Calculate your tax liability"
              buttonText="Check Now"
            />
          </div>
        </div>

        <div className="my-2 text-[#3E424A] font-medium">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus.
        </div>
      </div>
    </div>
  );
}

export default About;
