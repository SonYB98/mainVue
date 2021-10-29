import { ref } from 'vue';

export interface ISimpleTableData {
  city: string;
  totalOrders: string;
}

export interface IPaginatedTableData {
  picture: string;
  name: string;
  role: string;
  created: string;
  status: string;
  statusColor: string;
}

export interface IWideTableData {
  name: string;
  email: string;
  title: string;
  title2: string;
  status: string;
  role: string;
}

export function useTableData() {
  const simpleTableData = ref<ISimpleTableData[]>([
    { city: '"DA:0B:88:20:7C:CF"', totalOrders: '36.4287351 , 127.3912949' },
    { city: '---', totalOrders: '--- , ---' },
    { city: '---', totalOrders: '--- , --- ' },
    { city: '---', totalOrders: '--- , ---' },
  ]);

  const paginatedTableData = ref<IPaginatedTableData[]>([
    {
      picture:
        '/src/admin.jpeg',
      name: '김소현',
      role: 'aaa@aaa',
      created: '****',
      status: '분실',
      statusColor: 'red',
    },
  ]);

  const wideTableData = ref<IWideTableData[]>(
    [...Array(1).keys()].map(() => ({
      name: '김소현',
      email: 'aaa@aaa',
      title: '목걸이',
      title2: 'Tag',
      status: 'Check',
      role: '"DA:0B:88:20:7C:CF"',
    }))
  );

  return {
    simpleTableData,
    paginatedTableData,
    wideTableData,
  };
}
