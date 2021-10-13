export const Food = ({ menu }) => {
  console.log({ menu });
  return (
    <div>
      <h3>오늘의 메뉴</h3>
      <ul>
        <li>
          오늘의 메뉴는 <b>{menu[0].name}</b> 사이드 메뉴는 {menu[0].side}
        </li>
        <li>
          오늘의 메뉴는 {menu[1].name} 사이드 메뉴는 {menu[1].side}
        </li>
        <li>
          오늘의 메뉴는 {menu[2].name} 사이드 메뉴는 {menu[2].side}
        </li>
        <li>
          오늘의 메뉴는 {menu[3].name} 사이드 메뉴는 {menu[3].side}
        </li>
        <li>
          오늘의 메뉴는 {menu[4].name} 사이드 메뉴는 {menu[4].side}
        </li>
      </ul>
    </div>
  );
};
