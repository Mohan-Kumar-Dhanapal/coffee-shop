export const Bill = ({ products }: any) => {
  const total = products.reduce((acc: number, { price, qty }: any) => {
    return acc + qty * +price;
  }, 0);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)",
        height: "100%",
        padding: "1rem",
      }}
    >
      <div style={{ textAlign: "center", height: "20%" }}>
        <h3>Kumbakkonam Degree Coffee</h3>
        <address>
          <p>PSN complex, Panchetty</p>
          <p>Chennai - 600 067</p>
        </address>
      </div>
      <div className="overflow-hidden" style={{ height: "70%" }}>
        <table className="w-full border-collapse table-fixed ">
          <thead className="sticky top-0">
            <tr className="bg-gray-200">
              <th className="w-1/6  p-2">S.no</th>
              <th className="w-1/2  p-2">Item</th>
              <th className="w-1/6  p-2">Qty</th>
              <th className="w-1/6  p-2">Price</th>
            </tr>
          </thead>
          <tbody className=" overflow-y-auto h-full">
            {products.map((product: any, index: number) => (
              <tr key={product._id} className="text-center">
                <td className="p-2 truncate">{index + 1}</td>
                <td className="p-2">{product.name}</td>
                <td className="p-2">{product.qty}</td>
                <td className="p-2">{product.qty * +product.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Discount</td>
              <td>500</td>
            </tr>
            <tr>
              <td colSpan={2}>Total</td>
              <td>&#x20B9; {total}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div
        style={{
          height: "10%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          type="button"
          className="btn-primary"
          onClick={() => {
            console.log("Print", products);
          }}
        >
          Print Bill
        </button>
        <button type="button" className="btn-primary">
          Bill Paid
        </button>
      </div>
    </div>
  );
};
