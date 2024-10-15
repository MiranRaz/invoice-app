export interface Invoice {
  invoiceNumber: string;
  createdAt?: string;
  paymentDue: string;
  description?: string;
  paymentTerms?: number;
  clientName: string;
  clientEmail?: string;
  status: string;
  senderAddress?: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress?: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items?: Array<{
    name: string;
    quantity: number;
    price: number;
    total: number;
  }>;
  total: number;
}

export const DUMMY_INVOICES: Invoice[] = [
  {
    invoiceNumber: 'RT3080',
    createdAt: '01 Aug 2021',
    paymentDue: '19 Aug 2021',
    description: 'Logo Redesign',
    paymentTerms: 7,
    clientName: 'Jensen Huang',
    clientEmail: 'jensenh@mail.com',
    status: 'Paid',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '106 Kendell Street',
      city: 'Sharrington',
      postCode: 'NR24 5WQ',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Brand Guidelines',
        quantity: 1,
        price: 1800.9,
        total: 1800.9,
      },
    ],
    total: 1800.9,
  },
  {
    invoiceNumber: 'XM9141',
    createdAt: '21 Aug 2021',
    paymentDue: '20 Sep 2021',
    description: 'Graphic Design',
    paymentTerms: 30,
    clientName: 'Alex Grim',
    clientEmail: 'alexgrim@mail.com',
    status: 'Pending',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '84 Church Way',
      city: 'Bradford',
      postCode: 'BD1 9PB',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Banner Design',
        quantity: 1,
        price: 156.0,
        total: 156.0,
      },
      {
        name: 'Email Design',
        quantity: 2,
        price: 200.0,
        total: 400.0,
      },
    ],
    total: 556.0,
  },
  {
    invoiceNumber: 'RG0314',
    createdAt: '01 Sep 2021',
    paymentDue: '01 Oct 2021',
    description: 'Website Redesign',
    paymentTerms: 30,
    clientName: 'John Morrison',
    clientEmail: 'jm@myco.com',
    status: 'Paid',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '79 Dover Road',
      city: 'Westhall',
      postCode: 'IP19 3PF',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Website Redesign',
        quantity: 1,
        price: 14002.33,
        total: 14002.33,
      },
    ],
    total: 14002.33,
  },
  {
    invoiceNumber: 'RT2080',
    createdAt: '12 Sep 2021',
    paymentDue: '12 Oct 2021',
    description: 'Logo Concept',
    paymentTerms: 30,
    clientName: 'Alysa Werner',
    clientEmail: 'alysa@email.co.uk',
    status: 'Pending',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '63 Warwick Road',
      city: 'Carlisle',
      postCode: 'CA20 2TG',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Logo Sketches',
        quantity: 1,
        price: 102.04,
        total: 102.04,
      },
    ],
    total: 102.04,
  },
  {
    invoiceNumber: 'AA1449',
    createdAt: '14 Sep 2021',
    paymentDue: '14 Oct 2021',
    description: 'Re-branding',
    paymentTerms: 30,
    clientName: 'Melissa Clarke',
    clientEmail: 'melissa.clarke@example.com',
    status: 'Pending',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '46 Abbey Row',
      city: 'Cambridge',
      postCode: 'CB5 6EG',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'New Logo',
        quantity: 1,
        price: 1532.33,
        total: 1532.33,
      },
      {
        name: 'Brand Guidelines',
        quantity: 1,
        price: 2500.0,
        total: 2500.0,
      },
    ],
    total: 4032.33,
  },
  {
    invoiceNumber: 'TY9141',
    createdAt: '01 Oct 2021',
    paymentDue: '31 Oct 2021',
    description: 'Landing Page Design',
    paymentTerms: 30,
    clientName: 'Thomas Wayne',
    clientEmail: 'thomas@dc.com',
    status: 'Pending',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '3964  Queens Lane',
      city: 'Gotham',
      postCode: '60457',
      country: 'United States of America',
    },
    items: [
      {
        name: 'Web Design',
        quantity: 1,
        price: 6155.91,
        total: 6155.91,
      },
    ],
    total: 6155.91,
  },
  {
    invoiceNumber: 'FV2353',
    createdAt: '05 Nov 2021',
    paymentDue: '12 Nov 2021',
    description: 'Logo Re-design',
    paymentTerms: 7,
    clientName: 'Anita Wainwright',
    clientEmail: 'anita@email.com',
    status: 'Draft',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '54 Church Street',
      city: 'Inverness',
      postCode: 'IV1 1DR',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Logo Re-design',
        quantity: 1,
        price: 3102.04,
        total: 3102.04,
      },
    ],
    total: 3102.04,
  },
];
