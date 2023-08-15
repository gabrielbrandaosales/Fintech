import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import { IVenda } from '../Context/DataContext';

const dadosGraficos = [
  {
    data: '2023-05-03',
    pago: 30000,
    processando: 3000,
    falha: 10000,
  },
  {
    data: '2023-05-04',
    pago: 34000,
    processando: 5000,
    falha: 2000,
  },
  {
    data: '2023-05-05',
    pago: 40000,
    processando: 2000,
    falha: 2000,
  },
  {
    data: '2023-05-06',
    pago: 43000,
    processando: 10000,
    falha: 50000,
  },
];

const GraficosVendas = ({ data }: { data: IVenda[] }) => {
  return (
    <div>
      <ResponsiveContainer height={400} width={'99%'}>
        <LineChart data={dadosGraficos}>
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line
            type="monotone"
            dataKey="pago"
            stroke="#387908"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="processando"
            stroke="#ff7300"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="falha"
            stroke="#ff0000"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficosVendas;
