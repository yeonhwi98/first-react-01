// import { brands } from "./api";
import Kakao from "./Kakao";

export const MapFn = () => {
  //   const nums = [0, 1, 2, 3, 4];
  //   const food = "된장찌게";

  //   const newNum = nums.map((x) => x + "a");
  //   =>기존배열을 변경하지 않고 새로운 배열로 반환시켜줌
  //   =>불변성을 유지 시켜줌
  //   console.log(nums);
  //   console.log(newNum);

  //   const newNum = nums.map((num) => num * 2);
  //   console.log(newNum);

  return (
    <div>
      {/* {nums.map((num) => (
        <div key={num}>{num}번째 게시물</div>
      ))} */}
      {/* 
      <h2>브랜드</h2>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
            브랜드:{brand.name}, 모니터:{brand.monitor}
          </li>
        ))}
      </ul> */}
    </div>
  );
};
