// function FnComponent() {
//   return (
//     <>
//       <div>함수형 컴포넌트!</div>
//       <div>함수형 컴포넌트!</div>
//       <div>함수형 컴포넌트!</div>
//     </>
//   );
// }

// export default FnComponent;

export const FnComponent = ({ foodName, dinner }) => {
  console.log(foodName);
  return (
    <div>
      <div>함수형 컴포넌트</div>
      <h3>
        오늘의 메뉴는 {foodName} 저녁 메뉴는 {dinner}
      </h3>
    </div>
  );
};

// export default FnComponent;
