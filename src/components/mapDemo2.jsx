import React from "react";

const MapDemo2 = () => {
  const data = [
    {
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
    {
      id: 2,
      name: "quo vero reiciendis velit similique earum",
      email: "Jayne_Kuhic@sydney.com",
      body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
    {
      id: 3,
      name: "odio adipisci rerum aut animi",
      email: "Nikita@garfield.biz",
      body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
    },
    {
      id: 4,
      name: "alias odio sit",
      email: "Lew@alysha.tv",
      body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
    },
    {
      id: 5,
      name: "vero eaque aliquid doloribus et culpa",
      email: "Hayden@althea.biz",
      body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
    },
  ];
  return <div>
    <table  class="table-dark" border="1" width="1000px">
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>Email</th>
        <th>BODY</th>
      </tr>
        {
            data.map((d)=>{
                return <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.body.substring(0,10)}</td>
                </tr>
            })
        }
    </table>
  </div>;
};

export default MapDemo2;
