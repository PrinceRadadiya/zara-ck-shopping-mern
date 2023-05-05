import React from "react";
import { CChart } from "@coreui/react-chartjs";

const Home = () => {
  return (
    <>
      <div className="w-full h-[623px] overflow-y-scroll">
        <div className="w-full h-auto mt-9 flex items-center justify-center">
          <div className="w-[800px]">
            <CChart
              type="line"
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "My First dataset",
                    backgroundColor: "rgba(220, 220, 220, 0.2)",
                    borderColor: "rgba(220, 220, 220, 1)",
                    pointBackgroundColor: "rgba(220, 220, 220, 1)",
                    pointBorderColor: "#fff",
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                  {
                    label: "My Second dataset",
                    backgroundColor: "rgba(151, 187, 205, 0.2)",
                    borderColor: "rgba(151, 187, 205, 1)",
                    pointBackgroundColor: "rgba(151, 187, 205, 1)",
                    pointBorderColor: "#fff",
                    data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[500px] h-[500px]">
            <CChart
              type="doughnut"
              data={{
                labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
                datasets: [
                  {
                    backgroundColor: [
                      "#41B883",
                      "#E46651",
                      "#00D8FF",
                      "#DD1B16",
                    ],
                    data: [40, 20, 80, 10],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
