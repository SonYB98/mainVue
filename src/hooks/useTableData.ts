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
    { city: 'Mak7BnR6zYMqr8YAbCu', totalOrders: '36.331097301030965 , 127.3393931328974' },
    { city: 'Mak7Bv2AF5ZduFnVI1C', totalOrders: '37.29307473583823 , 127.20514310985246' },
    { city: 'Mak7DdxGZ8QBt-KazIw', totalOrders: '37.2927674647586 , 127.2002507606093 ' },
    { city: 'Mak7DlJ7JLXdz8bcrYR', totalOrders: '37.29338200566287 , 127.20467104106584' },
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
      role: '<-분실일경우 빨간색',
    }))
  );

  return {
    simpleTableData,
    paginatedTableData,
    wideTableData,
  };
}
