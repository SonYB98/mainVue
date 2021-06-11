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
    { city: '가방', totalOrders: '36 , 26' },
    { city: '--', totalOrders: '--' },
    { city: '--', totalOrders: '--' },
    { city: '--', totalOrders: '--' },
  ]);

  const paginatedTableData = ref<IPaginatedTableData[]>([
    {
      picture:
        '/src/admin.jpeg',
      name: '이름',
      role: '이메일',
      created: '비밀번호',
      status: '태그상태',
      statusColor: 'green',
    },
  ]);

  const wideTableData = ref<IWideTableData[]>(
    [...Array(1).keys()].map(() => ({
      name: '이름',
      email: 'sss@naver.com',
      title: '태그이름',
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
