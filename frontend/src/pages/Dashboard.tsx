import BarChartComponent from "../components/dashboard/BarChart";
import PieChartComponent from "../components/dashboard/PieChart";
import InfoCard from "../components/shared/InfoCard";

export const Dashboard = () => {
  const sampleData = [
    { name: "Mon", value: 30 },
    { name: "Tue", value: 50 },
    { name: "Wed", value: 40 },
    { name: "Thurs", value: 70 },
    { name: "Fri", value: 60 },
  ];

  return (
    <>
      <div className="flex h-full">
        {/* Left Section - 70% width */}
        <div className="w-7.5/10 p-4">
          <div className="w-full">
            <article className="mb-[1rem]">
              <h2 className="my-4 font-bold">Today's financial summary</h2>
              <section className="w-full flex gap-4 items-start">
                <InfoCard title={"Box Cash"} description={"2000"} />
                <InfoCard title={"Sales"} description={"30000"} />
                <InfoCard title={"Expense"} description={"2000"} />
              </section>
            </article>
            <h2 className="my-4 font-bold">Sales snapshot</h2>
            <section className="w-full flex gap-4 mt-[1rem]">
              <PieChartComponent />
              <BarChartComponent data={sampleData} />
            </section>
          </div>
        </div>

        {/* Right Section - 30% width */}
        <div className="w-2.5/10 p-4 ">
          <div className="flex flex-col gap-4 items-start bg-white shadow-lg rounded-lg p-4 h-[45%] mb-[1rem]">
            <h2 className="my-2 font-bold">Today's payments</h2>
            {/* <div className="flex gap-2 flex-col "> */}
            <InfoCard title={"Online Payment"} description={"30000"} />
            <InfoCard title={"Cash Payment"} description={"30000"} />
            {/* </div> */}
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 h-[55%] ">
            <h2 className="my-2 font-bold">Monthly Credit</h2>
            <div className="w-full h-[90%] overflow-x-hidden flex flex-col gap-2 overflow-y-auto ">
              <InfoCard title={"Sales"} description={"30000"} />
              <InfoCard title={"Sales"} description={"30000"} />
              <InfoCard title={"Sales"} description={"30000"} />
              <InfoCard title={"Sales"} description={"30000"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
