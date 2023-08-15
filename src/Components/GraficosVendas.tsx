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

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(' ')[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});
  console.log();

  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

const GraficosVendas = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);

  return (
    <div>
      <ResponsiveContainer height={400} width={'99%'}>
        <LineChart data={transformedData}>
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
