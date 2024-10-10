export interface Invoice {
  invoiceNumber: string;
  dueDate: string;
  name: string;
  amount: string;
  status: string;
}
export const DUMMY_INVOICES: Invoice[] = [
  {
    invoiceNumber: 'RT3080',
    dueDate: '19 Aug 2021',
    name: 'Jensen Huang',
    amount: '1,800.90',
    status: 'Paid',
  },
  {
    invoiceNumber: 'XM9141',
    dueDate: '20 Sep 2021',
    name: 'Alex Grim',
    amount: '556.00',
    status: 'Pending',
  },
  {
    invoiceNumber: 'RG0314',
    dueDate: '01 Oct 2021',
    name: 'John Morrison',
    amount: '14,002.33',
    status: 'Paid',
  },
  {
    invoiceNumber: 'RT2080',
    dueDate: '12 Oct 2021',
    name: 'Alysa Werner',
    amount: '102.04',
    status: 'Pending',
  },
  {
    invoiceNumber: 'AA1449',
    dueDate: '14 Oct 2021',
    name: 'Melissa Clarke',
    amount: '4,032.33',
    status: 'Pending',
  },
  {
    invoiceNumber: 'TY9141',
    dueDate: '31 Oct 2021',
    name: 'Thomas Wayne',
    amount: '6,155.91',
    status: 'Pending',
  },
  {
    invoiceNumber: 'FV2353',
    dueDate: '12 Nov 2021',
    name: 'Anita Wainwright',
    amount: '3,102.04',
    status: 'Draft',
  },
];
