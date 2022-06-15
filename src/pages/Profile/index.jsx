import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import Navbar from '../../components/Navbar';
import Aside from '../../components/Aside';
import calories from '../../assets/calories.svg';
import apple from '../../assets/apple.svg';
import cheeseburger from '../../assets/cheeseburger.svg';
import chicken from '../../assets/chicken.svg';

import getUser from '../../services/UserService';
import getAverageSession from '../../services/AverageSession';

const data = [
  {
    name: '1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data2 = [
  {
    name: 'L',
    pv: 2400,
  },
  {
    name: 'M',
    pv: 1398,
  },
  {
    name: 'M',
    pv: 9800,
  },
  {
    name: 'J',
    pv: 3908,
  },
  {
    name: 'V',
    pv: 4800,
  },
  {
    name: 'S',
    pv: 3800,
  },
  {
    name: 'D',
    pv: 4300,
  },
];

const ContainerContent = styled.div`
  padding: 12vw 5rem 5rem 15vw;
  height: 100%;
`;
const ContainerInfos = styled.div`
  height: calc(100% - 10rem);
  display: flex;
  padding-top: 0vw;
`;
const ContainerInfosLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
`;
const ContainerInfosRight = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
`;
const ContainerGraph = styled.div`
  width: 100%;
  height: 100%;
  max-width: 835px;
  max-height: 320px;
`;
const ContainerGraphHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  h4 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  ul {
    display: flex;
    li {
      font-size: 1.4rem;
      color: ${(p) => p.theme.colors.greyChelou};
      padding-left: 30px;
      position: relative;
      &:before {
        content: '';
        display: block;
        border-radius: 50%;
        position: absolute;
        left: 14px;
        top: 50%;
        transform: translate(0, -50%);
        width: 8px;
        height: 8px;
        background-color: ${(p) => p.theme.colors.red};
      }
    }
  }
`;
const ContainerGraphBody = styled.div`
  width: 100%;
`;
const ContainerThree = styled.div`
  margin-top: 4rem;
  width: 100%;
  height: 100%;
  max-width: 835px;
  max-height: 260px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ContainerThreeChild = styled.div`
  background-color: yellowgreen;
  width: 32%;
  height: 100%;
`;
const ContainerMaccro = styled.div`
  width: 100%;
  height: 100%;
  max-width: 260px;
  max-height: 580px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Maccro = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #fbfbfb;
  padding: 25px;
  border-radius: 5px;

  img {
    background-color: ${(p) => p.theme.colors.greyClair};
    padding: 20px;
    border-radius: 6px;
  }
`;
const MaccroTextes = styled.div`
  padding-left: 4rem;
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.4rem;
    color: ${(p) => p.theme.colors.greyChelou};
  }
`;
const H1 = styled.h1`
  font-size: 4.8rem;
  margin-bottom: 10px;
`;
const H2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 10px;
`;
const SpanRed = styled.span`
  color: ${(props) => props.theme.colors.red};
`;

function App() {
  const [user, setUser] = useState();
  const [averageSession, setAverageSession] = useState();

  // prendre l'id de l'url
  // rajouter une 404 si id not found
  useEffect(() => {
    getUser(18).then((result) => {
      setUser(result.data);
    });
  }, []);
  useEffect(() => {
    getAverageSession(18).then((result) => {
      setAverageSession(result.data);
    });
  }, []);

  console.log('user', user);
  console.log('averageSession', averageSession);
  console.log('test');

  return (
    <>
      <Navbar />
      <Aside />
      <ContainerContent>
        {user && (
          <>
            <H1>
              Bonjour
              <SpanRed>{` ${user.userInfos.firstName}`}</SpanRed>
            </H1>
            <H2>Félicitation ! Vous avez explosé vos objectifs hier 👏</H2>
            <ContainerInfos>
              <ContainerInfosLeft>
                <ContainerGraph>
                  <ContainerGraphHeader>
                    <h4>Activité quotidienne</h4>
                    <ul>
                      <li>Poids (kg)</li>
                      <li>Calories brûlées (kCal)</li>
                    </ul>
                  </ContainerGraphHeader>
                  <ContainerGraphBody>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={data} barCategoryGap={0}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis dataKey="name" axisLine tickLine={false} />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          orientation="right"
                        />
                        <Tooltip cursor={false} />
                        {/* <Legend /> */}
                        <Bar
                          dataKey="pv"
                          fill="#282D30"
                          radius={[10, 10, 0, 0]}
                          barSize={7}
                        />
                        <Bar
                          dataKey="uv"
                          fill="#E60000"
                          radius={[10, 10, 0, 0]}
                          barSize={7}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </ContainerGraphBody>
                </ContainerGraph>
                <ContainerThree>
                  <ContainerThreeChild>
                    <LineChart
                      width={500}
                      height={300}
                      data={data2}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#fff"
                        dot={false}
                        activeDot={{ stroke: 'white', r: 6 }}
                      />
                    </LineChart>
                  </ContainerThreeChild>
                  <ContainerThreeChild>test</ContainerThreeChild>
                  <ContainerThreeChild>test</ContainerThreeChild>
                </ContainerThree>
              </ContainerInfosLeft>
              <ContainerInfosRight>
                <ContainerMaccro>
                  <Maccro>
                    <img src={calories} alt="calories" />
                    <MaccroTextes>
                      <h3>{`${user.keyData.calorieCount} kCal`}</h3>
                      <p>Calories</p>
                    </MaccroTextes>
                  </Maccro>
                  <Maccro>
                    <img src={chicken} alt="proteines" />
                    <MaccroTextes>
                      <h3>{`${user.keyData.proteinCount} g`}</h3>
                      <p>Proteines</p>
                    </MaccroTextes>
                  </Maccro>
                  <Maccro>
                    <img src={apple} alt="glucides" />
                    <MaccroTextes>
                      <h3>{`${user.keyData.carbohydrateCount} g`}</h3>
                      <p>Glucides</p>
                    </MaccroTextes>
                  </Maccro>
                  <Maccro>
                    <img src={cheeseburger} alt="lipides" />
                    <MaccroTextes>
                      <h3>{`${user.keyData.lipidCount} g`}</h3>
                      <p>Lipides</p>
                    </MaccroTextes>
                  </Maccro>
                </ContainerMaccro>
              </ContainerInfosRight>
            </ContainerInfos>
          </>
        )}
      </ContainerContent>
    </>
  );
}

export default App;
