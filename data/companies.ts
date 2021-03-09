export type ICompany = {
  id: number,
  name: string,
  address: string,
  revenue: number,
  code: number,
  phone: number,
}

export const companies = [
  {
    id: 1,
    name: 'Google',
    address: '1600 Amphitheathre Parkway Mountain View, CA 94043 United States',
    revenue: 9999999,
    code: 190,
    phone: 123456789
  },
  {
    id: 2,
    name: 'Amazon',
    address: '410 Terry Ave N. Seattle, WA 98109',
    revenue: 9999999,
    code: 206,
    phone: 2661000
  },
  {
    id: 3,
    name: 'Alibaba',
    address: '969 West Wen Yi Road Yu Hang District Hangshou 311121',
    revenue: 9999999,
    code: 86,
    phone: 57185022088
  },
]