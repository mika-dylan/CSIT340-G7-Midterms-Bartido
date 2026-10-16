import { useState } from "react";
import StatCard from "./StatCard";

function Hire(rate){

    const [hours, setHours] = useState(0);

    const total = hours * rate.rate;

    function handleHour() {
        setHours(hours + 1);
    }

    function handleReset() {
        setHours(0);
    }

    return (
        <div className="flex gap-4">
        <button
                className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
                onClick={handleHour}
        >
                Add hour:
        </button>

        <button
                className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
                onClick={handleReset}
        >
                Clear
        </button>


        <StatCard value={total} label="Total" />
    
        </div>
    )
}

export default Hire