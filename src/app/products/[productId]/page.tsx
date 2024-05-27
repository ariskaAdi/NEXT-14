export default function ProductDetails({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return (
    <div>
      <h1>Details about Product {params.productId}</h1>
    </div>
  );
}
