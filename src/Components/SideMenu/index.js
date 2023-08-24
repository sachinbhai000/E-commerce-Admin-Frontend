import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    RadarChartOutlined ,
    BarChartOutlined, 
    RobotOutlined,
    QqOutlined,
    AntDesignOutlined,
    AlipayOutlined,
    DisconnectOutlined
    
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import { useEffect, useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  
  function SideMenu() {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/");
  
    useEffect(() => {
      const pathName = location.pathname;
      setSelectedKeys(pathName);
    }, [location.pathname]);
  
    const navigate = useNavigate();
    return (
      <div className="SideMenu">
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            //item.key
            navigate(item.key);
          }}
          selectedKeys={[selectedKeys]}
          items={[
            {
              label: "Dashbaord",
              icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACY
              AAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAQhJREFUWEftWNsNAjEM823CJsAkwCTA
              JmwCTAKbgCyoVKqWi1sVnY7095Kc4zoPdcBEzzBRXHBg6s18Y2xhDHYv2DX5l4CdAawEYDsAl8i
              +1b+osYcRVDA7ASC4cFR/JrWO/5ljjFdwawBW4+/AVMadMWdsrEjjdjGrqkz7YLbB1mScBj4A2I/R/
              P7OkZZOjm7AjJjKZj06fzMoBvg7YNxMFI0dAXysT6W1h+JdArDsVBwnaWB1uzBVZatGaqraNCsdWMSAm
              TFqbCNQx+0ziLfrVaripfiZDE83YDWBZzvETRpzxtSqdMZ+wVhruzDPyq3Q
              YK9RDwskKNtFzt/fx4Tp9jL1F0WVsifMeW8nBUcDbQAAAABJRU5ErkJggg==" style={{width:"18px"}}/>,
              key: "/",
            },
            {
              label: "Users",
              key: "/user",
              icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAm
              CAYAAACoPemuAAAAAXNSR0IArs4c6QAAAY5JREFUWEftmNFtwzAMRC+bJJM03aSZpO0kaSd
              JM0m6SYsDLMCNRZE82YZRhID/LOvpdBQp77DR2G2UC/8abA/gZVD+CcA3gCuAj57d6FXsDcC
              rAUDAE4AvBbAH7ALgGJj0HQAXkAoVLApFGEk5BYwqESwThDtkBihg55HZM3MRjIChUMBuAJiJ
              2XjOJIIC9pMlGt5nhoaPEAUsY/zxGhYHa51dLTEX9xj9RZ9lgocsPRYOZSv58axqKbU4gQpG1
              ViKSo1sKZHKxvIhFYzjS/Fu1UpChc+u8ep6wMp3CMhnXDfpKal4z6FY2MjKi3MopszrjukF80
              qT5C8lK++7Va8fI1h5Ul1tRrHs2VXbLkKGMjUCRpXY6njquL4ZXiDcp9fVemBK+YkCstNgYa+
              GB6Z2ElE4s+Nogc3hKQ/Q9JwFtuQW3sNWt9QCY3Gm4deI6kXFAlMvHOpCJh2IBaZeOFSwSRJYYOq
              FQwWb3NZrYGsavyxk0npbYGsZv4Cxjv75v+EdsOrWdI97gGUl3Kxiv/yjQydnizBxAAAAAElFTk
              SuQmCC" style={{width:"18px"}}/>
            },
            {
              label: "Roles",
              key: "/role",
              icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCA
              YAAACoPemuAAAAAXNSR0IArs4c6QAAAiNJREFUWEfdmNFRxDAMRPcqASoBKgEqASoBKgEqASqB2
              UyUiY0kry5h5gb/hOMU+1laSfYdcKLjcKJc+Ldg5wBuZ69fzs/P+fkO4A2AfS4F5xiPGcy9uBLBXg
              A8iPaTWQWsCtRzlABVsCsAr5UdJ7YM7/VoLgWMIVDDNlrPvqf3CBfqbwT2F1ASXAa2Z/giT9JjF96XERiF
              /qHGZaPdM4C7fo4I7GlVn5R1H2cjCpubugFAjyuDXiMY312GB1YJYSTiamn5lakeWMVbzKxmp52LWGJUz
              zVzeWDUFnc8Gq42upcq3qcclu7Qg7Hv0WPKUMAqSdRkaA9WqVvNDpOdfCu7nG0Wnh6soi+ltVRCSTbWtKkb
              bAFz03yD+PnqkgA9WCWLOFHW8yp6tf3sBmZwPG/ZoZDhqxTYtZPDUFbEX9C0bBqCHeN+eVXBMMzKSt1Zh9H+X
              q/NOwDDqhRrvtfURa/yKwmgFFcuRijC8aA5AmQj57zT8MBG4Rz1Ry9ihGKNzPpmw+KBcRJ6zdthsytBM2uT0r
              zReSzymhpCjznqAu4pNjtaR1obXiQcqqwMudLIwDLXE44F1QprpCt6nsU2En4ojdEtKYMzGIPk5y8AZ6tszGSYymIEZikfJU
              NR/4v5MIkUMINjWLZefJUTSVjHMi8wtISzX3hUj5V+t4gKrLKY3YKs7
              XjvGAyfS0VXJt8C1hdOC7f9P7s5SWyqxqTJ9jQ6WbAfSbZ3J6LNPfkAAAAASUVORK5CYII=" style={{width:"20px"}}/>
            },
            {
              label: "Categery",
              key: "/categery",
              icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAA
              AmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAZxJREFUWEftmFFOxDAMRL03YU8CnITl
              JMBJYE8CnAQ4CehJDUq3Tjqu6lU/Gqk/KzuZjp3xdA+20XXYKC7bgUUr02PsRtzsW4wr
              +0nxLWDvZnYnHshBj2b20Yh/NrPbaj/ieV46Oc0e+xVBlbC3AVydBkOvnRcE3NnMAD5Z
              HmNs+LUCMJV12ObFRisLGCw8iS8Hc/dDef9TsoDBuHp5AAOwUY9mAYv2KBdh1GsZwFbp0Q
              xglCZayskFyAKm3sjS7MdrNX+knDQ9zX8VueCQ0yCwPdVAKmArTWBdkRxUH/X3pMNlqiBszU
              rm5IMokD+tsTLkA6p++Bml7w7z3Y+J7HdHUnSPVrw6ktySKqX0/BSNyxhp9QkNz61Uluvn5hzs
              Uj8VnZWTG9oDpqr3pTOIiGthVAYW9VO1SKYCiw7hmrVUYNEeqf1UGrAlG9cfI0vy5R6LMlbPyl
              Rg6o30/FQqsMjml2WI5IblggRFMjw/lQ5sDlzLTy0BNvmSV2YlB+HP+P+Bhf+a81PEqx+8n56fU4
              Apg3j1mB1YlNLNMvYH6tB1J8EpQ1oAAAAASUVORK5CYII=" style={{width:"18px"}}/>
            },
            {
              label: "SubCategery",
              key: "/subcategery",
              icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAY
              AAACoPemuAAAAAXNSR0IArs4c6QAAAZxJREFUWEftmFFOxDAMRL03YU8CnITlJMBJYE8CnAQ4Ce
              hJDUq3Tjqu6lU/Gqk/KzuZjp3xdA+20XXYKC7bgUUr02PsRtzsW4wr+0nxLWDvZnYnHshBj2b20Yh/Nr
              Pbaj/ieV46Oc0e+xVBlbC3AVydBkOvnRcE3NnMAD5ZHmNs+LUCMJV12ObFRisLGCw8iS8Hc/dDef9TsoDB
              uHp5AAOwUY9mAYv2KBdh1GsZwFbp0QxglCZayskFyAKm3sjS7MdrNX+knDQ9zX8VueCQ0yCwPdVAKmArTWBd
              kRxUH/X3pMNlqiBszUrm5IMokD+tsTLkA6p++Bml7w7z3Y+J7HdHUnSPVrw6ktySKqX0/BSNyxhp9QkNz61Ul
              uvn5hzsUj8VnZWTG9oDpqr3pTOIiGthVAYW9VO1SKYCiw7hmrVUYNEeqf1UGrAlG9cfI0vy5R6LMlbPylRg6o30
              /FQqsMjml2WI5IblggRFMjw/lQ5sDlzLTy0BNvmSV2Yl
              B+HP+P+Bhf+a81PEqx+8n56fU4Apg3j1mB1YlNLNMvYH6tB1J8EpQ1oAAAAASUVORK5CYII=" style={{width:"18px"}}/>,
            },
            {
              label: "Retailer",
              key: "/retailer",
              icon:<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhE
              UgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAapJREFUWEftmOFNxD
              AMhd9NAmwCk3BMAkwCTAI3CYyCvoqcfCWp7V5yqhD528j58vJsJ91po2O3US79
              GbAnSVeSrjsr/Sbp1cbMKPYu6bYzkA33LImNTyMKhkKfA6FK6BtJXxmwvaSXC4DdSf
              oYBUZgPMPOOfr7hCeHgWHgh4qyqI3q3hgChkJ4pDXwqJfNQ8BOsmqlakPAWsdYGCkFj
               85ZNsGs1FPa/oxIVmJ6Ag85SltEMXGpxhEwgI51aEZHdhLbG03FzgVDZbxm20t0U0AP
               A7OKAOll4VzBi4B5x1b7PhxsaitGsahyQ8DwFf6y2VxUwfyUCu920hUMEDK4qLR0hIDRnloK
               dgPz2lANEiiyvwbXDewYKOn0Vl3rArZGLctfa+pdwLym7YlYuwp1AWPhWgZ6QPb73GfdwDIQkbl
               psGgTjiy+NKf5GGk1cYKNfr6dXJvmz7clMOAwrFe9s6rh04N9UxIgC5ZddPX8f7CsdEuKnVujLAvG
               rr03m7xzsMw1OCOC94L6Fav2UyX
              yzMpAMbcLWLl5Rm+dEUhskbJG9DdUZPGuczYL9g1fC4gnH8OazgAAAABJRU5ErkJggg==" style={{width:"20px"}}/>,
            },
            {
              label: "Customer",
              key: "/customers",
              icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAY
              AAACoPemuAAAAAXNSR0IArs4c6QAAAZVJREFUWEftltFNBDEMROc6gUqASoBKgErgKgEqgVLQW21OwUpie
              29B9xFLq/1Yx5mMx7M56ELjcKG4NIFlOzMZm4xlGcjmZzT2LOlG0q2kb0kfko7rO7uvmx8BdiXpdQXUKvgiC
              dC7RgTY+wBUAbM7OA/Yw8qWxwatvTZJrL33FprvHBCJuM5PC9kgEndGb7T3KbKwyjnV8BiLtLHXzj8FlmHsUdJb
              dXqmlycTrEcWbiujGqMWGluK7hFeK7EK2sl7FJwUxnYLDxgb0Q7A9aI1kXVudHhYw0SGWlk2aJksBXB+z1y/AoyX
              fcJTaVkqLc1o6V+BFcARgBGNlnroNGSwMIRGys/bMggwns9AS1ODMRJ/1iABeDpxCkUjuQcs4/h12d3AtYB59uCR
              ATimq9YfNfmLeDHUWGaKehtZw43+Qbp2ES3gndyabrRuF1hW8COA9TWI6fZ+a8X5l5pWY5nbhMeavW14+b++W2Bbp
              7G16VnXbQsMLUQoj5weB19cfEtEbhdb6p69ZgLLUjgZm4xlGcjm/wBJLUsnzxRsUwAAAABJRU5ErkJggg==" style={{width:"20px"}}/>
            },
            {
              label: "OfferZone",
              key: "/offerzone",
              icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXN
              SR0IArs4c6QAAAiFJREFUWEfdmI1NAzEMhd1NYBJgEmASYBJgEmASYBP0SZfKec2Pk0hc1UhVpbvEeXm2n3052JmO
              w5nisosEdmtm92b2a2bPwvyVmT2Y2Y2ZPZrZz6hnZhkD1IfbjI0B8LmBfJJ31/8FDFCA0wFA2NIB6LcRcDOM4aLXk
              U02Vw6x1gMGK7jFs1BiJIJT4wy3w2Rx9IB9V1wTARKZc7fF5cncvYFVY+/igBEv75sbUhxGXBfO1hZjiKbXI29UY4
              MsJVt1Tg90SoATAS4BwxgbtbJP16mEvLhqgB10r2YvsZ9VD91AFb3kHgzBmD+lZwwWeJ9GxCZzsXfUOgVWU3QFyOa
              wwr+yhXEPekRyjmt7LhkNaI296EG7jDFhxJgH7uOK563kKR04O1Qt+H3nEGFtNq6SbV1fbRRH4gLjK3HFejqPrG6W
              GFtywWQonGS6AkNrYCs6VuPK75OxpsBKCl4D2YsrQDNovyOtUsbaCrBWXPkMAxQHLnW8euiqjkWNaLuiEjOjj5nNW
              hFHzbVz9afz9U2TJSst26JWO14s5K3uold8U5prV6Hp30qoXRpFmOPXiq1dgEUk5/KAjehahKGqPOiL3scIgasxgm
              BGNEn3QnB9n0Y2Vu80esBKLIyWrWKR7tE7AwybJRfDwFflA0arRA/X9P2Y1zjcgZvSpUm6gkpfWMMXKqCeZYy1AOAH
              UzWX83z4bmwVWNcdKxNWGFvZt7v2D8AciCdXcHAUAAAAAElFTkSuQmCC"  style={{width:"20px"}}/>
            },
            {
              label: "ThirdParty",
              key: "/thirdparty",
              icon: <DisconnectOutlined />,
            },
          ]}
        ></Menu>
      </div>
    );
  }
  export default SideMenu;