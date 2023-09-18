import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function ProductDetailInfo() {
  const productDetail = useSelector(
    (state: RootState) => state.products.productDetail
  );

  return (
    <div className="productDetail_info_container">
      <div className="productDetail_info_top_container"></div>
      <div className="productDetail_info_middle_container">
        <h1>{productDetail?.title}</h1>
      </div>
      <div className="productDetail_info_bottom_container"></div>
    </div>
  );
}
