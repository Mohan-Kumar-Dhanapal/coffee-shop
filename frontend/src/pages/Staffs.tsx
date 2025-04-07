import { StaffCard } from "../components/staff/StaffCard";
import StaffForm from "../components/staff/StaffForm";
import { DEFAULT_PRODUCT_DATA } from "../utils/constants";

export const Staffs = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>Search</div>
        <div>
          <button type="button" className="btn-primary" onClick={() => {}}>
            New Staff
          </button>
        </div>
      </div>

      <div className="flex gap-4 mt-6 flex-wrap">
        <StaffCard data={DEFAULT_PRODUCT_DATA} />
        <StaffCard data={DEFAULT_PRODUCT_DATA} />
        <StaffCard data={DEFAULT_PRODUCT_DATA} />
        <StaffCard data={DEFAULT_PRODUCT_DATA} />
      </div>
    </>
  );
};
