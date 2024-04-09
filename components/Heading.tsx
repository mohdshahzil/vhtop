import React from "react";

const Heading = () => {
  return (
    <div className="h-auto flex flex-col items-center justify-center gap-3 m-6 md:m-8 p-2 md:p-4">
      <div className="text-primary text-4xl font-medium">
        VHTOP translates to "VIT HOSTEL on TOP"
      </div>
      <div className="text-1xl font-medium">
        A digital initiative by the institute facilitating students, hostel
        wardens to access process services related to hostel in one common
        platform
      </div>
    </div>
  );
};

export default Heading;
