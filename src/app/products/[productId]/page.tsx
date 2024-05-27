export default function ProductDetails({ params }: any) {
  return (
    <div>
      <h1>Details about Product {params.productId}</h1>
    </div>
  );
}
